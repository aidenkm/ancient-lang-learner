import { useState } from 'react';
import { motion } from 'framer-motion';
import { Exercise } from '../../types';

interface FillBlankProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  language: 'greek' | 'hebrew';
}

export default function FillBlank({ exercise, onAnswer, language }: FillBlankProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const correctAnswer = exercise.correctAnswer as string;
  const textClass = language === 'hebrew' ? 'hebrew-text' : 'greek-text';

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const correct = option === correctAnswer;
    setTimeout(() => onAnswer(correct), 800);
  };

  const options = exercise.options || [correctAnswer];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-4">{exercise.instruction}</p>
        <h2 className={`text-2xl font-bold mb-8 text-center ${textClass}`} dir="auto">
          {exercise.question}
        </h2>

        <div className="w-full max-w-md space-y-3">
          {options.map((option) => {
            const isSelected = selected === option;
            const isCorrectOption = option === correctAnswer;

            let borderClass = 'border-duo-card-light hover:border-duo-blue/50';
            if (answered && isSelected && isCorrectOption) {
              borderClass = 'border-duo-green bg-duo-green/10';
            } else if (answered && isSelected && !isCorrectOption) {
              borderClass = 'border-duo-red bg-duo-red/10';
            } else if (answered && isCorrectOption) {
              borderClass = 'border-duo-green/50';
            }

            return (
              <motion.button
                key={option}
                whileTap={!answered ? { scale: 0.98 } : undefined}
                onClick={() => handleSelect(option)}
                disabled={answered}
                className={`w-full p-4 rounded-xl border-2 bg-duo-card text-center text-lg
                  ${borderClass} text-duo-text transition-all cursor-pointer
                  disabled:cursor-default ${textClass}`}
                dir="auto"
              >
                {option}
              </motion.button>
            );
          })}
        </div>
      </div>

      {answered && (
        <div className={`p-4 border-t border-duo-card-light ${selected === correctAnswer ? 'bg-duo-green/10' : 'bg-duo-red/10'}`}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {selected === correctAnswer ? (
              <p className="text-duo-green font-bold">정답입니다!</p>
            ) : (
              <div>
                <p className="text-duo-red font-bold">틀렸습니다</p>
                <p className="text-duo-text-dim text-sm">정답: <span className={textClass}>{correctAnswer}</span></p>
                {exercise.hint && <p className="text-duo-text-dim text-sm mt-1">{exercise.hint}</p>}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
