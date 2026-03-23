import { useState } from 'react';
import { motion } from 'framer-motion';
import { Exercise } from '../../types';
import Button from '../common/Button';

interface MatchingProps {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
  language: 'greek' | 'hebrew';
}

export default function Matching({ exercise, onAnswer, language }: MatchingProps) {
  const pairs = exercise.pairs || [];
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const textClass = language === 'hebrew' ? 'hebrew-text' : 'greek-text';

  // Shuffle right side
  const [shuffledRight] = useState(() => [...pairs.map(p => p.right)].sort(() => Math.random() - 0.5));

  const handleLeftClick = (left: string) => {
    if (matched.has(left) || answered) return;
    setSelectedLeft(left);
    setWrongPair(null);
  };

  const handleRightClick = (right: string) => {
    if (!selectedLeft || answered) return;
    const correctPair = pairs.find(p => p.left === selectedLeft);
    if (correctPair && correctPair.right === right) {
      setMatched(prev => new Set([...prev, selectedLeft]));
      setSelectedLeft(null);
    } else {
      setWrongPair(right);
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 600);
    }
  };

  const allMatched = matched.size === pairs.length;

  if (allMatched && !answered) {
    setTimeout(() => setAnswered(true), 300);
  }

  const isRightMatched = (right: string) => {
    return Array.from(matched).some(left => {
      const pair = pairs.find(p => p.left === left);
      return pair?.right === right;
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-4">{exercise.instruction}</p>

        <div className="w-full max-w-lg grid grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-3">
            {pairs.map((pair, i) => (
              <motion.button
                key={`left-${i}`}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLeftClick(pair.left)}
                className={`w-full p-3 rounded-xl border-2 text-center transition-all cursor-pointer
                  ${matched.has(pair.left) ? 'border-duo-green bg-duo-green/20 opacity-60' :
                    selectedLeft === pair.left ? 'border-duo-blue bg-duo-blue/20' :
                    'border-duo-card-light bg-duo-card hover:border-duo-blue/50'}`}
              >
                <span className={`${textClass} text-duo-text`}>{pair.left}</span>
              </motion.button>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-3">
            {shuffledRight.map((right, i) => (
              <motion.button
                key={`right-${i}`}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRightClick(right)}
                animate={wrongPair === right ? { x: [0, -5, 5, -5, 5, 0] } : {}}
                transition={{ duration: 0.4 }}
                className={`w-full p-3 rounded-xl border-2 text-center transition-all cursor-pointer
                  ${isRightMatched(right) ? 'border-duo-green bg-duo-green/20 opacity-60' :
                    wrongPair === right ? 'border-duo-red bg-duo-red/20' :
                    'border-duo-card-light bg-duo-card hover:border-duo-blue/50'}`}
              >
                <span className="text-duo-text">{right}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className={`p-4 border-t border-duo-card-light ${answered ? 'bg-duo-green/10' : ''}`}>
        {answered && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-duo-green font-bold mb-3"
          >
            모두 맞췄습니다! 🎉
          </motion.p>
        )}
        <Button
          onClick={() => onAnswer(true)}
          disabled={!allMatched}
          fullWidth
        >
          {answered ? '계속하기' : '모두 짝지으세요'}
        </Button>
      </div>
    </div>
  );
}
