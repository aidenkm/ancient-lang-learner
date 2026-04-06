import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Exercise } from '../../types';

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
  const [wrongCount, setWrongCount] = useState(0);
  const [done, setDone] = useState(false);
  const textClass = language === 'hebrew' ? 'hebrew-text' : 'greek-text';
  const autoAdvancedRef = useRef(false);

  // Shuffle right side
  const [shuffledRight] = useState(() => [...pairs.map(p => p.right)].sort(() => Math.random() - 0.5));

  const handleLeftClick = (left: string) => {
    if (matched.has(left) || done) return;
    setSelectedLeft(left);
    setWrongPair(null);
  };

  const handleRightClick = (right: string) => {
    if (!selectedLeft || done) return;
    const correctPair = pairs.find(p => p.left === selectedLeft);
    if (correctPair && correctPair.right === right) {
      setMatched(prev => new Set([...prev, selectedLeft]));
      setSelectedLeft(null);
    } else {
      setWrongCount(prev => prev + 1);
      setWrongPair(right);
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 600);
    }
  };

  const allMatched = matched.size === pairs.length;

  // Auto-advance when all matched
  useEffect(() => {
    if (allMatched && !done && !autoAdvancedRef.current) {
      autoAdvancedRef.current = true;
      setDone(true);
      setTimeout(() => onAnswer(wrongCount === 0), 1000);
    }
  }, [allMatched, done, wrongCount, onAnswer]);

  const isRightMatched = (right: string) => {
    return Array.from(matched).some(left => {
      const pair = pairs.find(p => p.left === left);
      return pair?.right === right;
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-lg text-duo-text-dim mb-2">{exercise.instruction}</p>
        <p className="text-sm text-duo-text-dim mb-4">
          {matched.size}/{pairs.length} 완료
        </p>

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

      {done && (
        <div className="p-4 border-t border-duo-card-light bg-duo-green/10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-duo-green font-bold"
          >
            {wrongCount === 0 ? '모두 맞췄습니다!' : `완료! (${wrongCount}번 틀림)`}
          </motion.p>
        </div>
      )}
    </div>
  );
}
