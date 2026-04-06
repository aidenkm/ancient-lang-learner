import { Badge, GameState } from '../types';

export const ALL_BADGES: Badge[] = [
  // Progress
  { id: 'first-lesson', name: '첫 걸음', description: '첫 번째 레슨 완료', icon: '👣', category: 'progress' },
  { id: 'ten-lessons', name: '학습자', description: '레슨 10개 완료', icon: '📖', category: 'progress' },
  { id: 'thirty-lessons', name: '열공생', description: '레슨 30개 완료', icon: '🎓', category: 'progress' },
  { id: 'stage-2', name: '2단계 돌파', description: '2단계 도달', icon: '⬆️', category: 'progress' },
  { id: 'stage-3', name: '3단계 돌파', description: '3단계 도달', icon: '🚀', category: 'progress' },
  { id: 'stage-5', name: '최고 단계', description: '5단계 도달', icon: '👑', category: 'progress' },

  // Streak
  { id: 'streak-3', name: '3일 연속', description: '3일 연속 학습', icon: '🔥', category: 'streak' },
  { id: 'streak-7', name: '일주일 연속', description: '7일 연속 학습', icon: '💪', category: 'streak' },
  { id: 'streak-30', name: '한 달 연속', description: '30일 연속 학습', icon: '🏆', category: 'streak' },

  // Mastery
  { id: 'level-5', name: '중급 학자', description: '레벨 5 달성', icon: '📚', category: 'mastery' },
  { id: 'level-10', name: '고급 학자', description: '레벨 10 달성', icon: '🧠', category: 'mastery' },
  { id: 'crown-5', name: '완벽주의자', description: '한 레슨에서 크라운 5개 달성', icon: '💎', category: 'mastery' },
  { id: 'xp-1000', name: 'XP 마스터', description: '총 1000 XP 달성', icon: '⚡', category: 'mastery' },

  // Special
  { id: 'bilingual', name: '두 언어 학습', description: '그리스어와 히브리어 모두 학습', icon: '🌍', category: 'special' },
  { id: 'reviewer', name: '복습왕', description: '복습 세션 5회 완료', icon: '🔄', category: 'special' },
  { id: 'placement-ace', name: '배치 에이스', description: '배치테스트 80% 이상', icon: '🎯', category: 'special' },
];

type CheckFn = (state: GameState) => boolean;

const BADGE_CHECKS: Record<string, CheckFn> = {
  'first-lesson': (s) => s.greek.completedLessons.length >= 1 || s.hebrew.completedLessons.length >= 1,
  'ten-lessons': (s) => s.greek.completedLessons.length >= 10 || s.hebrew.completedLessons.length >= 10,
  'thirty-lessons': (s) => s.greek.completedLessons.length >= 30 || s.hebrew.completedLessons.length >= 30,
  'stage-2': (s) => s.greek.currentStage >= 2 || s.hebrew.currentStage >= 2,
  'stage-3': (s) => s.greek.currentStage >= 3 || s.hebrew.currentStage >= 3,
  'stage-5': (s) => s.greek.currentStage >= 5 || s.hebrew.currentStage >= 5,
  'streak-3': (s) => s.greek.streak >= 3 || s.hebrew.streak >= 3,
  'streak-7': (s) => s.greek.streak >= 7 || s.hebrew.streak >= 7,
  'streak-30': (s) => s.greek.streak >= 30 || s.hebrew.streak >= 30,
  'level-5': (s) => s.greek.level >= 5 || s.hebrew.level >= 5,
  'level-10': (s) => s.greek.level >= 10 || s.hebrew.level >= 10,
  'crown-5': (s) => {
    const hasCrown5 = (crowns: Record<string, number>) => Object.values(crowns).some(c => c >= 5);
    return hasCrown5(s.greek.lessonCrowns) || hasCrown5(s.hebrew.lessonCrowns);
  },
  'xp-1000': (s) => s.totalXp >= 1000,
  'bilingual': (s) => s.greek.completedLessons.length >= 1 && s.hebrew.completedLessons.length >= 1,
  'reviewer': (s) => {
    // Count review lessons from completed lessons (ids start with 'review-')
    const greekReviews = s.greek.completedLessons.filter(id => id.startsWith('review-')).length;
    const hebrewReviews = s.hebrew.completedLessons.filter(id => id.startsWith('review-')).length;
    return greekReviews + hebrewReviews >= 5;
  },
  'placement-ace': (s) => s.greek.placementScore >= 32 || s.hebrew.placementScore >= 32, // 80% of 40
};

/** Check all badges and return newly earned badge IDs */
export function checkBadges(state: GameState): string[] {
  const allEarned = new Set([...state.greek.earnedBadges, ...state.hebrew.earnedBadges]);
  const newBadges: string[] = [];

  for (const badge of ALL_BADGES) {
    if (allEarned.has(badge.id)) continue;
    const check = BADGE_CHECKS[badge.id];
    if (check && check(state)) {
      newBadges.push(badge.id);
    }
  }

  return newBadges;
}

export function getBadgeById(id: string): Badge | undefined {
  return ALL_BADGES.find(b => b.id === id);
}
