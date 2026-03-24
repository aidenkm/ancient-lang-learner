import { useState } from 'react';
import { motion } from 'framer-motion';
import { Exercise } from '../../types';
import Button from '../common/Button';

interface FillBlankProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  language: 'greek' | 'hebrew';
}

export default function FillBlank({ exercise, onAnswer, language }: FillBlankProps) {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const correctAnswer = exercise.correctAnswer as string;
  const isCorrect = input.trim() === correctAnswer.trim();
  const textClass = language === 'hebrew' ? 'hebrew-text' : 'greek-text';

  const handleCheck = () => {
    if (!input.trim()) return;
    setAnswered(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-4">{exercise.instruction}</p>
        <h2 className="text-2xl font-bold mb-8 text-center" dir="auto">{exercise.question}</h2>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={input}
            onChange={e => !answered && setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !answered && handleCheck()}
            placeholder="답을 입력하세요..."
            dir={language === 'hebrew' ? 'rtl' : 'ltr'}
            className={`w-full p-4 rounded-xl border-2 bg-duo-card text-center text-xl
              ${answered ? (isCorrect ? 'border-duo-green' : 'border-duo-red') : 'border-duo-card-light focus:border-duo-blue'}
              text-duo-text outline-none transition-all ${textClass}`}
            autoFocus
          />
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
                <p className="text-duo-text-dim text-sm">정답: <span className={textClass}>{correctAnswer}</span></p>
                {exercise.hint && <p className="text-duo-text-dim text-sm mt-1">💡 {exercise.hint}</p>}
              </div>
            )}
          </motion.div>
        )}
        <Button
          onClick={answered ? () => onAnswer(isCorrect) : handleCheck}
          disabled={!input.trim()}
          variant={answered ? (isCorrect ? 'primary' : 'danger') : 'primary'}
          fullWidth
        >
          {answered ? '계속하기' : '확인'}
        </Button>
      </div>
    </div>
  );
}
