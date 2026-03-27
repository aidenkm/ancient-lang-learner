import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Language, Lesson } from './types';
import { useGameState } from './hooks/useGameState';
import { useAuth } from './hooks/useAuth';
import { useAdmin } from './hooks/useAdmin';
import { isSupabaseConfigured } from './lib/supabase';
import { greekStages } from './data/greek/index';
import { hebrewStages } from './data/hebrew/index';
import AuthScreen from './components/AuthScreen';
import LanguageSelect from './components/LanguageSelect';
import PlacementTest from './components/PlacementTest';
import LessonMap from './components/LessonMap';
import LessonPlayer from './components/LessonPlayer';
import AdminDashboard from './components/AdminDashboard';

type Screen = 'auth' | 'languageSelect' | 'placementChoice' | 'placementTest' | 'lessonMap' | 'lesson' | 'admin';

function App() {
  const { user, loading: authLoading, signIn, signUp, signOut, configured: authConfigured } = useAuth();
  const { isAdmin } = useAdmin(user?.id);
  const { gameState, selectLanguage, getProgress, addXp, completeLesson, updateStreak, completePlacement, updateProgress } = useGameState(user?.id);
  const [screen, setScreen] = useState<Screen>(authConfigured ? 'auth' : 'languageSelect');
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [guestMode, setGuestMode] = useState(false);

  // Handle deep links from WMC (?lang=greek&passage=John 1:1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const deepLang = params.get('lang') as Language | null;
    if (deepLang && (deepLang === 'greek' || deepLang === 'hebrew')) {
      selectLanguage(deepLang);
      // Skip placement for deep link users — go straight to lesson map
      const progress = gameState[deepLang];
      if (!progress.placementCompleted) {
        completePlacement(0, 1);
      }
      setGuestMode(true);
      setScreen('lessonMap');
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Determine initial screen after auth loads
  useEffect(() => {
    if (authLoading) return;

    if (authConfigured && !user && !guestMode) {
      setScreen('auth');
      return;
    }

    if (gameState.selectedLanguage) {
      const progress = gameState[gameState.selectedLanguage];
      if (progress.placementCompleted || isAdmin) {
        setScreen('lessonMap');
      } else {
        setScreen('placementChoice');
      }
    } else {
      setScreen('languageSelect');
    }
  }, [authLoading, user, guestMode]);

  const handleLanguageSelect = (lang: Language) => {
    selectLanguage(lang);
    const progress = gameState[lang];
    if (progress.placementCompleted || isAdmin) {
      // Admin skips placement, gets stage 5 unlocked
      if (isAdmin && !progress.placementCompleted) {
        completePlacement(25, 5);
      }
      setScreen('lessonMap');
    } else {
      setScreen('placementChoice');
    }
  };

  const handlePlacementComplete = (score: number, startStage: number) => {
    completePlacement(score, startStage);
    updateStreak();
    setScreen('lessonMap');
  };

  const handleSelectLesson = (lessonId: string) => {
    const lang = gameState.selectedLanguage!;
    const stages = lang === 'greek' ? greekStages : hebrewStages;
    for (const stage of stages) {
      for (const unit of stage.units) {
        const lesson = unit.lessons.find(l => l.id === lessonId);
        if (lesson) {
          setCurrentLesson(lesson);
          setScreen('lesson');
          return;
        }
      }
    }
  };

  const handleLessonComplete = (correctCount: number, totalCount: number) => {
    if (!currentLesson) return;
    const xpEarned = correctCount * 10;
    addXp(xpEarned);
    completeLesson(currentLesson.id);
    updateStreak();

    const lang = gameState.selectedLanguage!;
    const stages = lang === 'greek' ? greekStages : hebrewStages;
    const progress = gameState[lang];

    for (const stage of stages) {
      if (stage.id === progress.currentStage) {
        const allLessonsInStage = stage.units.flatMap(u => u.lessons.map(l => l.id));
        const completedInStage = allLessonsInStage.filter(id =>
          progress.completedLessons.includes(id) || id === currentLesson.id
        );
        if (completedInStage.length >= allLessonsInStage.length) {
          const nextStage = Math.min(progress.currentStage + 1, 5);
          updateProgress({ currentStage: nextStage });
        }
      }
    }

    setCurrentLesson(null);
    setScreen('lessonMap');
  };

  const handleBack = () => {
    selectLanguage(null as any);
    setScreen('languageSelect');
  };

  // Get progress with admin override (all stages unlocked)
  const getProgressForMap = () => {
    const progress = getProgress();
    if (!progress) return null;
    if (isAdmin) {
      return { ...progress, currentStage: 5, placementCompleted: true };
    }
    return progress;
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-duo-text-dim">로딩 중...</div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {screen === 'auth' && (
          <AuthScreen
            onSignIn={signIn}
            onSignUp={signUp}
            onSkip={() => { setGuestMode(true); setScreen('languageSelect'); }}
          />
        )}

        {screen === 'languageSelect' && (
          <div>
            {/* User info bar */}
            {(user || guestMode) && (
              <div className="p-3 flex justify-between items-center text-sm">
                <span className="text-duo-text-dim">
                  {user ? `${user.email}${isAdmin ? ' (Admin)' : ''}` : '게스트 모드'}
                </span>
                {user ? (
                  <div className="flex items-center gap-3">
                    {isAdmin && (
                      <button onClick={() => setScreen('admin')} className="text-duo-orange hover:text-duo-yellow cursor-pointer font-medium">
                        관리자
                      </button>
                    )}
                    <button onClick={async () => { await signOut(); setGuestMode(false); setScreen('auth'); }} className="text-duo-text-dim hover:text-duo-text cursor-pointer">
                      로그아웃
                    </button>
                  </div>
                ) : authConfigured ? (
                  <button onClick={() => { setGuestMode(false); setScreen('auth'); }} className="text-duo-text-dim hover:text-duo-text cursor-pointer">
                    로그인
                  </button>
                ) : null}
              </div>
            )}
            <LanguageSelect onSelect={handleLanguageSelect} />
          </div>
        )}

        {screen === 'placementChoice' && gameState.selectedLanguage && (
          <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md w-full"
            >
              <div className="text-6xl mb-6">
                {gameState.selectedLanguage === 'greek' ? '🏛️' : '📜'}
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {gameState.selectedLanguage === 'greek' ? '고대 그리스어' : '성서 히브리어'}
              </h2>
              <p className="text-duo-text-dim mb-8">
                배치테스트를 통해 현재 수준을 확인하고 적절한 단계부터 시작하세요.
              </p>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setScreen('placementTest')}
                  className="w-full p-4 rounded-xl bg-duo-green text-white font-bold text-lg
                    border-b-4 border-duo-green-dark hover:brightness-110 transition-all cursor-pointer"
                >
                  배치테스트 보기
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    completePlacement(0, 1);
                    setScreen('lessonMap');
                  }}
                  className="w-full p-4 rounded-xl bg-duo-card text-duo-text-dim font-bold
                    border-2 border-duo-card-light hover:border-duo-blue/50 transition-all cursor-pointer"
                >
                  처음부터 시작하기
                </motion.button>

                <button
                  onClick={handleBack}
                  className="text-duo-text-dim text-sm hover:text-duo-text mt-4 cursor-pointer"
                >
                  ← 돌아가기
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {screen === 'placementTest' && gameState.selectedLanguage && (
          <PlacementTest
            language={gameState.selectedLanguage}
            onComplete={handlePlacementComplete}
            onSkip={() => {
              completePlacement(0, 1);
              setScreen('lessonMap');
            }}
          />
        )}

        {screen === 'lessonMap' && gameState.selectedLanguage && (
          <LessonMap
            language={gameState.selectedLanguage}
            progress={getProgressForMap()!}
            onSelectLesson={handleSelectLesson}
            onBack={handleBack}
          />
        )}

        {screen === 'admin' && isAdmin && (
          <AdminDashboard onBack={() => setScreen('languageSelect')} />
        )}

        {screen === 'lesson' && gameState.selectedLanguage && currentLesson && (
          <LessonPlayer
            lesson={currentLesson}
            language={gameState.selectedLanguage}
            onComplete={handleLessonComplete}
            onQuit={() => {
              setCurrentLesson(null);
              setScreen('lessonMap');
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
