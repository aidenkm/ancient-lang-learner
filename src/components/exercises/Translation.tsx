import { useState } from 'react';
import { motion } from 'framer-motion';
import { Exercise } from '../../types';
import Button from '../common/Button';

interface TranslationProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  language: 'greek' | 'hebrew';
}

export default function Translation({ exercise, onAnswer, language }: TranslationProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selected === exercise.correctAnswer;
  const textClass = language === 'hebrew' ? 'hebrew-text' : 'greek-text';

  const handleCheck = () => {
    if (!selected) return;
    setAnswered(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-2">{exercise.instruction}</p>
        <div className={`text-2xl font-bold mb-8 p-6 bg-duo-card rounded-2xl border border-duo-card-light max-w-lg w-full text-center ${textClass}`}>
          {exercise.question}
        </div>

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
                onClick={() => !answered && setSelected(option)}
                className={`w-full p-4 rounded-xl border-2 ${borderColor} ${bgColor} text-left transition-all cursor-pointer
                  ${!answered ? 'hover:border-duo-blue/50' : ''}`}
              >
                {option}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className={`p-4 border-t border-duo-card-light ${answered ? (isCorrect ? 'bg-duo-green/10' : 'bg-duo-red/10') : ''}`}>
        {answered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-3">
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
        )}
        <Button
          onClick={answered ? () => onAnswer(isCorrect) : handleCheck}
          disabled={!selected}
          variant={answered ? (isCorrect ? 'primary' : 'danger') : 'primary'}
          fullWidth
        >
          {answered ? '계속하기' : '확인'}
        </Button>
      </div>
    </div>
  );
}
