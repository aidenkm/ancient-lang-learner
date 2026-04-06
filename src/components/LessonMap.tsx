import { motion } from 'framer-motion';
import { Language, StageInfo, UserProgress } from '../types';
import { greekStages } from '../data/greek/index';
import { hebrewStages } from '../data/hebrew/index';
import XPBar from './gamification/XPBar';
import StreakCounter from './gamification/StreakCounter';
import Hearts from './gamification/Hearts';

interface LessonMapProps {
  language: Language;
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  onBack: () => void;
}

export default function LessonMap({ language, progress, onSelectLesson, onBack }: LessonMapProps) {
  const stages = language === 'greek' ? greekStages : hebrewStages;
  const langName = language === 'greek' ? '고대 그리스어' : '성서 히브리어';
  const langIcon = language === 'greek' ? '🏛️' : '📜';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-duo-bg/95 backdrop-blur border-b border-duo-card-light">
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex items-center justify-between mb-3">
            <button onClick={onBack} className="text-duo-text-dim hover:text-duo-text cursor-pointer text-sm">
              ← 언어 선택
            </button>
            <div className="flex items-center gap-2">
              <Hearts />
              <StreakCounter streak={progress.streak} />
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{langIcon}</span>
            <h1 className="text-xl font-bold">{langName}</h1>
          </div>
          <XPBar xp={progress.xp} level={progress.level} />
        </div>
      </div>

      {/* Lesson Path */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {stages.map((stage, stageIdx) => (
          <div key={stage.id} className="mb-12">
            {/* Stage header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: stageIdx * 0.1 }}
              className="mb-6"
            >
              <div className={`p-4 rounded-2xl border-2 ${
                stage.id <= progress.currentStage
                  ? 'border-duo-green/50 bg-duo-green/10'
                  : 'border-duo-card-light bg-duo-card'
              }`}>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                    stage.id <= progress.currentStage
                      ? 'bg-duo-green text-white'
                      : 'bg-duo-card-light text-duo-text-dim'
                  }`}>
                    {stage.id}단계
                  </span>
                  <div>
                    <h2 className="font-bold">{stage.title}</h2>
                    <p className="text-sm text-duo-text-dim">{stage.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Units and Lessons */}
            {stage.units.filter(unit => unit.lessons.length > 0).map(unit => (
              <div key={unit.id} className="mb-8">
                <p className="text-sm text-duo-text-dim mb-4 flex items-center gap-2">
                  <span>{unit.icon}</span> {unit.title}
                  <span className="text-duo-text-dim/50 ml-auto">{unit.lessons.length}레슨</span>
                </p>
                <div className="flex flex-col items-center gap-4">
                  {unit.lessons.map((lesson, lessonIdx) => {
                    const isCompleted = progress.completedLessons.includes(lesson.id);
                    const crowns = progress.lessonCrowns[lesson.id] || 0;
                    const isLocked = stage.id > progress.currentStage;
                    const isAvailable = !isLocked;

                    // Zigzag offset
                    const offset = lessonIdx % 2 === 0 ? -40 : 40;

                    return (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: stageIdx * 0.1 + lessonIdx * 0.05 }}
                        style={{ marginLeft: offset }}
                        className="relative"
                      >
                        {/* Connecting line */}
                        {lessonIdx > 0 && (
                          <div className="absolute -top-4 left-1/2 w-px h-4 bg-duo-card-light" />
                        )}

                        <motion.button
                          whileHover={isAvailable ? { scale: 1.05 } : {}}
                          whileTap={isAvailable ? { scale: 0.95 } : {}}
                          onClick={() => isAvailable && onSelectLesson(lesson.id)}
                          disabled={isLocked}
                          className={`relative w-16 h-16 rounded-full flex items-center justify-center text-2xl
                            border-b-4 transition-all cursor-pointer
                            ${isCompleted
                              ? 'bg-duo-green border-duo-green-dark'
                              : isLocked
                              ? 'bg-duo-card-light border-duo-card opacity-50 cursor-not-allowed'
                              : 'bg-duo-blue border-duo-blue-dark hover:brightness-110'
                            }`}
                        >
                          {isLocked ? '🔒' : isCompleted ? '✓' : '★'}

                          {/* Crown indicators */}
                          {crowns > 0 && (
                            <div className="absolute -top-2 -right-2 bg-duo-yellow text-duo-bg text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                              {crowns}
                            </div>
                          )}
                        </motion.button>

                        {/* Lesson title */}
                        <p className={`text-xs text-center mt-2 max-w-[120px] ${
                          isLocked ? 'text-duo-text-dim/50' : 'text-duo-text-dim'
                        }`}>
                          {lesson.title}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
