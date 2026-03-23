export type Language = 'greek' | 'hebrew';

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
