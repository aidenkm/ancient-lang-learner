import { useLocalStorage } from './useLocalStorage';
import { GameState, Language, defaultGameState, defaultProgress } from '../types';

export function useGameState() {
  const [gameState, setGameState] = useLocalStorage<GameState>('ancientLangState', defaultGameState);

  const selectLanguage = (lang: Language) => {
    setGameState(prev => ({ ...prev, selectedLanguage: lang }));
  };

  const getProgress = () => {
    if (!gameState.selectedLanguage) return null;
    return gameState[gameState.selectedLanguage];
  };

  const updateProgress = (updates: Partial<typeof defaultGameState.greek>) => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    setGameState(prev => ({
      ...prev,
      [lang]: { ...prev[lang], ...updates },
    }));
  };

  const addXp = (amount: number) => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    const currentXp = gameState[lang].xp + amount;
    const newLevel = Math.floor(currentXp / 100) + 1;
    setGameState(prev => ({
      ...prev,
      totalXp: prev.totalXp + amount,
      [lang]: {
        ...prev[lang],
        xp: currentXp,
        level: newLevel,
      },
    }));
  };

  const completeLesson = (lessonId: string) => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    const progress = gameState[lang];
    const crowns = progress.lessonCrowns[lessonId] || 0;
    setGameState(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        completedLessons: prev[lang].completedLessons.includes(lessonId)
          ? prev[lang].completedLessons
          : [...prev[lang].completedLessons, lessonId],
        lessonCrowns: {
          ...prev[lang].lessonCrowns,
          [lessonId]: Math.min(crowns + 1, 5),
        },
      },
    }));
  };

  const updateStreak = () => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    const today = new Date().toISOString().split('T')[0];
    const lastDate = gameState[lang].lastStudyDate;

    if (lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const newStreak = lastDate === yesterdayStr ? gameState[lang].streak + 1 : 1;

    setGameState(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        streak: newStreak,
        lastStudyDate: today,
      },
    }));
  };

  const completePlacement = (score: number, startStage: number) => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    setGameState(prev => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        placementScore: score,
        placementCompleted: true,
        currentStage: startStage,
      },
    }));
  };

  const resetProgress = (lang: Language) => {
    setGameState(prev => ({
      ...prev,
      [lang]: defaultProgress(lang),
    }));
  };

  return {
    gameState,
    selectLanguage,
    getProgress,
    updateProgress,
    addXp,
    completeLesson,
    updateStreak,
    completePlacement,
    resetProgress,
  };
}
