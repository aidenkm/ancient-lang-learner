import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Exercise } from '../../types';

interface MultipleChoiceProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  language: 'greek' | 'hebrew';
}

export default function MultipleChoice({ exercise, onAnswer, language }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const textClass = language === 'hebrew' ? 'hebrew-text' : 'greek-text';

  const handleSelect = useCallback((option: string) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const correct = option === exercise.correctAnswer;
    setTimeout(() => onAnswer(correct), 800);
  }, [answered, exercise.correctAnswer, onAnswer]);

  // Keyboard shortcuts: 1-4 to select options
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (answered || !exercise.options) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= exercise.options.length) {
        handleSelect(exercise.options[num - 1]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [answered, exercise.options, handleSelect]);

  const isCorrect = selected === exercise.correctAnswer;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-4">{exercise.instruction}</p>
        <h2 className="text-3xl font-bold mb-8" dir="auto">{exercise.question}</h2>

        <div className="w-full max-w-lg space-y-3">
          {exercise.options?.map((option, i) => {
            let borderColor = 'border-duo-card-light';
            let bgColor = 'bg-duo-card';
            if (answered && option === exercise.correctAnswer) {
              borderColor = 'border-duo-green';
              bgColor = 'bg-duo-green/20';
            } else if (answered && option === selected && !isCorrect) {
              borderColor = 'border-duo-red';
              bgColor = 'bg-duo-red/20';
            } else if (!answered && option === selected) {
              borderColor = 'border-duo-blue';
              bgColor = 'bg-duo-blue/20';
            }

            return (
              <motion.button
                key={i}
                whileTap={!answered ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(option)}
                className={`w-full p-4 rounded-xl border-2 ${borderColor} ${bgColor} text-left transition-all cursor-pointer
                  ${!answered ? 'hover:border-duo-blue/50' : ''}`}
              >
                <span className="text-duo-text-dim text-sm mr-3 font-mono">{i + 1}</span>
                <span className="text-duo-text">{option}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Bottom feedback bar */}
      {answered && (
        <div className={`p-4 border-t border-duo-card-light ${isCorrect ? 'bg-duo-green/10' : 'bg-duo-red/10'}`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isCorrect ? (
              <p className="text-duo-green font-bold">정답입니다! 🎉</p>
            ) : (
              <div>
                <p className="text-duo-red font-bold">틀렸습니다</p>
                <p className="text-duo-text-dim text-sm">정답: {exercise.correctAnswer as string}</p>
                {exercise.hint && <p className="text-duo-text-dim text-sm mt-1">💡 {exercise.hint}</p>}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
