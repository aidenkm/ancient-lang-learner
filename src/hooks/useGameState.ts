import { useEffect, useCallback, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { GameState, Language, defaultGameState, defaultProgress } from '../types';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export function useGameState(userId?: string | null) {
  const [gameState, setGameState] = useLocalStorage<GameState>('ancientLangState', defaultGameState);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from Supabase on mount (if configured and logged in)
  useEffect(() => {
    if (!isSupabaseConfigured() || !userId) return;
    supabase
      .from('greekheb_progress')
      .select('game_state')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        if (data?.game_state) {
          setGameState(data.game_state as GameState);
        }
      });
  }, [userId]);

  // Save to Supabase (debounced)
  const saveToCloud = useCallback((state: GameState) => {
    if (!isSupabaseConfigured() || !userId) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      supabase
        .from('greekheb_progress')
        .upsert({ user_id: userId, game_state: state, updated_at: new Date().toISOString() })
        .then(() => {});
    }, 1000); // debounce 1s
  }, [userId]);

  // Wrapper that saves to both LocalStorage and cloud
  const setState = useCallback((updater: GameState | ((prev: GameState) => GameState)) => {
    setGameState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveToCloud(next);
      return next;
    });
  }, [setGameState, saveToCloud]);

  const selectLanguage = (lang: Language) => {
    setState(prev => ({ ...prev, selectedLanguage: lang }));
  };

  const getProgress = () => {
    if (!gameState.selectedLanguage) return null;
    return gameState[gameState.selectedLanguage];
  };

  const updateProgress = (updates: Partial<typeof defaultGameState.greek>) => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    setState(prev => ({
      ...prev,
      [lang]: { ...prev[lang], ...updates },
    }));
  };

  const addXp = (amount: number) => {
    if (!gameState.selectedLanguage) return;
    const lang = gameState.selectedLanguage;
    const currentXp = gameState[lang].xp + amount;
    const newLevel = Math.floor(currentXp / 100) + 1;
    setState(prev => ({
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
    setState(prev => ({
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

    setState(prev => ({
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
    setState(prev => ({
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
    setState(prev => ({
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
