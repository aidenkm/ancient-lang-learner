-- GreekHeb Duolingo — Supabase 스키마
-- WMC Supabase 인스턴스 공유, 테이블은 greekheb_ 접두사로 분리
-- WMC의 SQL Editor에서 실행

-- ============================================================
-- 1. 학습 진행 상황
-- ============================================================
CREATE TABLE IF NOT EXISTS greekheb_progress (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  game_state JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE greekheb_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress"
  ON greekheb_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON greekheb_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON greekheb_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_greekheb_progress_user_id ON greekheb_progress(user_id);

-- ============================================================
-- 2. GreekHeb 프로필 (Admin 역할 포함)
-- ============================================================
CREATE TABLE IF NOT EXISTS greekheb_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE greekheb_profiles ENABLE ROW LEVEL SECURITY;

-- 모든 사용자는 자기 프로필 읽기 가능
CREATE POLICY "Users can read own profile"
  ON greekheb_profiles FOR SELECT
  USING (auth.uid() = user_id);

-- 자기 프로필 삽입/수정 가능 (is_admin 제외 — 서버에서만 변경)
CREATE POLICY "Users can insert own profile"
  ON greekheb_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON greekheb_profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Admin은 모든 프로필 조회 가능
CREATE POLICY "Admins can read all profiles"
  ON greekheb_profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM greekheb_profiles
      WHERE user_id = auth.uid() AND is_admin = TRUE
    )
  );

-- Admin은 모든 진행 상황 조회 가능
CREATE POLICY "Admins can read all progress"
  ON greekheb_progress FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM greekheb_profiles
      WHERE user_id = auth.uid() AND is_admin = TRUE
    )
  );

-- ============================================================
-- 3. 프로필 자동 생성 트리거
-- ============================================================
CREATE OR REPLACE FUNCTION create_greekheb_profile()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO greekheb_profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)))
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- auth.users에 새 사용자 삽입 시 자동으로 greekheb_profiles 생성
-- 주의: WMC에 이미 비슷한 트리거가 있을 수 있으므로, 트리거명을 고유하게 지정
DROP TRIGGER IF EXISTS on_auth_user_created_greekheb ON auth.users;
CREATE TRIGGER on_auth_user_created_greekheb
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_greekheb_profile();
