export type Language = 'greek' | 'hebrew';

// ===== DB Types for dynamic lesson generation =====

export interface WordData {
  word: string;          // 원어 (그리스어 or 히브리어)
  gloss: string;         // 한국어 뜻
  parsing: string;       // 문법 파싱 (예: "부정과거 능동 직설법 3단")
  root?: string;         // 어근/사전형
  stage: number;         // 이 단어가 도입되는 단계 (1-5)
  frequency?: number;    // 성경 출현 빈도
  category?: 'noun' | 'verb' | 'adj' | 'adv' | 'prep' | 'conj' | 'pron' | 'particle' | 'article';
}

export interface VerseWord {
  word: string;          // 원어
  gloss: string;         // 한국어 뜻
  parsing: string;       // 문법 파싱
  root?: string;         // 어근/사전형
}

export interface VerseData {
  ref: string;           // 출처 (예: "John 1:1a")
  text: string;          // 원문 전체
  words: VerseWord[];    // 단어별 분석
  translation: string;   // 전체 번역
}

export interface VerbForm {
  form: string;          // 변화형 (예: "ἔλυσα")
  root: string;          // 사전형 (예: "λύω")
  parsing: string;       // 전체 파싱
  gloss: string;         // 번역
  tense: string;
  voice: string;
  mood: string;
  person?: string;
  number?: string;
  stage: number;         // 이 형태가 도입되는 단계
}

export interface UnitMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
  stage: number;
  // 복합 데이터 참조 — 유닛은 여러 소스를 동시에 가질 수 있음
  dataKey?: string;      // 텍스트 데이터 키
  vocabRange?: [number, number]; // 어휘 인덱스 범위
  verbCategory?: string; // 동사 파싱 카테고리
}

export type ExerciseType = 'multipleChoice' | 'matching' | 'fillBlank' | 'translation';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  instruction: string;
  options?: string[];
  correctAnswer: string | string[];
  hint?: string;
  pairs?: { left: string; right: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  stage: number;
  lessons: Lesson[];
  icon: string;
}

export interface StageInfo {
  id: number;
  title: string;
  description: string;
  units: Unit[];
}

export interface PlacementQuestion {
  id: string;
  stage: number;
  question: string;
  options: string[];
  correctAnswer: string;
  type: 'letterIdentify' | 'vocabulary' | 'grammar' | 'translation' | 'reading';
}

// ===== Badges / Achievements =====

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'progress' | 'streak' | 'mastery' | 'special';
}

// ===== Spaced Repetition (SRS) =====

export interface ReviewCard {
  word: string;          // 원어
  gloss: string;         // 한국어 뜻
  parsing: string;       // 문법 파싱
  root?: string;         // 어근
  box: number;           // Leitner box (1-4, 4=학습완료)
  nextReview: string;    // ISO date (YYYY-MM-DD)
  wrongCount: number;    // 총 틀린 횟수
}

export interface UserProgress {
  language: Language;
  completedLessons: string[];
  currentStage: number;
  currentUnitId: string;
  xp: number;
  level: number;
  streak: number;
  lastStudyDate: string;
  placementScore: number;
  placementCompleted: boolean;
  lessonCrowns: Record<string, number>;
  reviewDeck: ReviewCard[];
  earnedBadges: string[];  // badge IDs
}

export interface GameState {
  greek: UserProgress;
  hebrew: UserProgress;
  selectedLanguage: Language | null;
  totalXp: number;
}

export const defaultProgress = (language: Language): UserProgress => ({
  language,
  completedLessons: [],
  currentStage: 1,
  currentUnitId: '',
  xp: 0,
  level: 1,
  streak: 0,
  lastStudyDate: '',
  placementScore: 0,
  placementCompleted: false,
  lessonCrowns: {},
  reviewDeck: [],
  earnedBadges: [],
});

export const defaultGameState: GameState = {
  greek: defaultProgress('greek'),
  hebrew: defaultProgress('hebrew'),
  selectedLanguage: null,
  totalXp: 0,
};
