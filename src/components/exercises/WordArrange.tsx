import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Exercise } from '../../types';
import Button from '../common/Button';

interface WordArrangeProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  language: 'greek' | 'hebrew';
}

export default function WordArrange({ exercise, onAnswer, language }: WordArrangeProps) {
  const words = exercise.words || [];
  const correctOrder = exercise.correctAnswer as string[];
  const [selected, setSelected] = useState<number[]>([]);
  const [answered, setAnswered] = useState(false);
  const isHebrew = language === 'hebrew';
  const textClass = isHebrew ? 'hebrew-text' : 'greek-text';

  const selectedWords = selected.map(i => words[i]);
  const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(correctOrder);

  const handleWordClick = (index: number) => {
    if (answered) return;
    if (selected.includes(index)) {
      setSelected(selected.filter(i => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleCheck = () => {
    if (selected.length !== words.length || answered) return;
    setAnswered(true);
    const selectedWords_ = selected.map(i => words[i]);
    const correct = JSON.stringify(selectedWords_) === JSON.stringify(correctOrder);
    setTimeout(() => onAnswer(correct), 800);
  };

  // For Hebrew: display answer in RTL direction
  const answerDirection = isHebrew ? 'rtl' : 'ltr';

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-2">{exercise.instruction}</p>
        <p className="text-duo-text-dim mb-6">{exercise.question}</p>

        {/* Answer area — RTL for Hebrew */}
        <div
          dir={answerDirection}
          className={`w-full max-w-lg min-h-[60px] p-3 mb-6 rounded-xl border-2 border-dashed
          ${answered ? (isCorrect ? 'border-duo-green bg-duo-green/10' : 'border-duo-red bg-duo-red/10') : 'border-duo-card-light bg-duo-card/50'}
          flex flex-wrap gap-2 items-center justify-center`}
        >
          <AnimatePresence>
            {selected.map((wordIndex) => (
              <motion.button
                key={`selected-${wordIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => handleWordClick(wordIndex)}
                className={`px-4 py-2 rounded-lg border-2 border-duo-blue bg-duo-blue/20 cursor-pointer ${textClass}`}
                dir={isHebrew ? 'rtl' : 'ltr'}
              >
                {words[wordIndex]}
              </motion.button>
            ))}
          </AnimatePresence>
          {selected.length === 0 && (
            <span className="text-duo-text-dim text-sm" dir="ltr">단어를 선택하세요</span>
          )}
        </div>

        {/* Word bank */}
        <div className="w-full max-w-lg flex flex-wrap gap-2 justify-center">
          {words.map((word, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWordClick(i)}
              dir={isHebrew ? 'rtl' : 'ltr'}
              className={`px-4 py-2 rounded-lg border-2 transition-all cursor-pointer ${textClass}
                ${selected.includes(i)
                  ? 'border-duo-card-light bg-duo-card/30 text-duo-text-dim opacity-40'
                  : 'border-duo-card-light bg-duo-card hover:border-duo-blue/50'
                }`}
            >
              {word}
            </motion.button>
          ))}
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
                <p className="text-duo-text-dim text-sm" dir={answerDirection}>
                  정답: <span className={textClass}>{correctOrder.join(' ')}</span>
                </p>
              </div>
            )}
          </motion.div>
        )}
        {!answered && (
          <Button
            onClick={handleCheck}
            disabled={selected.length !== words.length}
            variant="primary"
            fullWidth
          >
            확인
          </Button>
        )}
      </div>
    </div>
  );
}
