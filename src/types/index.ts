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
  lessonType: 'vocab' | 'grammar' | 'parsing' | 'text';
  // 생성기가 참조할 데이터 키
  dataKey?: string;      // 텍스트 유닛이면 텍스트 파일 키
  vocabRange?: [number, number]; // 어휘 유닛이면 시작-끝 인덱스
  verbCategory?: string; // 파싱 유닛이면 동사 카테고리
}

export type ExerciseType = 'multipleChoice' | 'matching' | 'fillBlank' | 'translation' | 'wordArrange';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  instruction: string;
  options?: string[];
  correctAnswer: string | string[];
  hint?: string;
  pairs?: { left: string; right: string }[];
  words?: string[];
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
});

export const defaultGameState: GameState = {
  greek: defaultProgress('greek'),
  hebrew: defaultProgress('hebrew'),
  selectedLanguage: null,
  totalXp: 0,
};
