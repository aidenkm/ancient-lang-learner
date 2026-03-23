import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise, Language, Lesson } from '../types';
import ProgressBar from './common/ProgressBar';
import MultipleChoice from './exercises/MultipleChoice';
import Matching from './exercises/Matching';
import FillBlank from './exercises/FillBlank';
import Translation from './exercises/Translation';
import WordArrange from './exercises/WordArrange';
import Button from './common/Button';

interface LessonPlayerProps {
  lesson: Lesson;
  language: Language;
  onComplete: (correctCount: number, totalCount: number) => void;
  onQuit: () => void;
}

export default function LessonPlayer({ lesson, language, onComplete, onQuit }: LessonPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [comboCount, setComboCount] = useState(0);
  const [showCombo, setShowCombo] = useState(false);

  const exercises = lesson.exercises;
  const exercise = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectCount(prev => prev + 1);
      setComboCount(prev => prev + 1);
      if (comboCount + 1 >= 3) {
        setShowCombo(true);
        setTimeout(() => setShowCombo(false), 1500);
      }
    } else {
      setComboCount(0);
    }

    if (currentIndex >= exercises.length - 1) {
      setFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const renderExercise = (ex: Exercise) => {
    const key = `${ex.id}-${currentIndex}`;
    switch (ex.type) {
      case 'multipleChoice':
        return <MultipleChoice key={key} exercise={ex} onAnswer={handleAnswer} language={language} />;
      case 'matching':
        return <Matching key={key} exercise={ex} onAnswer={handleAnswer} language={language} />;
      case 'fillBlank':
        return <FillBlank key={key} exercise={ex} onAnswer={handleAnswer} language={language} />;
      case 'translation':
        return <Translation key={key} exercise={ex} onAnswer={handleAnswer} language={language} />;
      case 'wordArrange':
        return <WordArrange key={key} exercise={ex} onAnswer={handleAnswer} language={language} />;
      default:
        return <MultipleChoice key={key} exercise={ex} onAnswer={handleAnswer} language={language} />;
    }
  };

  if (finished) {
    const percentage = Math.round((correctCount / exercises.length) * 100);
    const xpEarned = correctCount * 10 + (comboCount >= 3 ? 15 : 0);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-7xl mb-6"
          >
            {percentage >= 80 ? '🏆' : percentage >= 50 ? '⭐' : '💪'}
          </motion.div>

          <h2 className="text-3xl font-bold mb-2">레슨 완료!</h2>
          <p className="text-duo-text-dim mb-6">{lesson.title}</p>

          <div className="bg-duo-card rounded-2xl p-6 mb-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-duo-text-dim">정답률</span>
              <span className="text-2xl font-bold text-duo-green">{percentage}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-duo-text-dim">맞은 문제</span>
              <span className="font-bold">{correctCount}/{exercises.length}</span>
            </div>
            <div className="h-px bg-duo-card-light" />
            <div className="flex justify-between items-center">
              <span className="text-duo-text-dim">획득 XP</span>
              <span className="text-xl font-bold text-duo-yellow">+{xpEarned} XP</span>
            </div>
          </div>

          <Button onClick={() => onComplete(correctCount, exercises.length)} fullWidth size="lg">
            계속하기
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <button onClick={onQuit} className="text-duo-text-dim hover:text-duo-text cursor-pointer">
          ✕
        </button>
        <div className="flex-1">
          <ProgressBar progress={progress} />
        </div>
      </div>

      {/* Combo indicator */}
      <AnimatePresence>
        {showCombo && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-2"
          >
            <span className="text-duo-orange font-bold text-lg">
              🔥 {comboCount} 콤보! +보너스 XP
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exercise */}
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex-1 flex flex-col"
          >
            {renderExercise(exercise)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
