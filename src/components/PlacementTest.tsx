import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, PlacementQuestion } from '../types';
import { greekPlacementQuestions } from '../data/greek/placement';
import { hebrewPlacementQuestions } from '../data/hebrew/placement';
import ProgressBar from './common/ProgressBar';
import Button from './common/Button';

interface PlacementTestProps {
  language: Language;
  onComplete: (score: number, startStage: number) => void;
  onSkip: () => void;
}

export default function PlacementTest({ language, onComplete, onSkip }: PlacementTestProps) {
  const questions = language === 'greek' ? greekPlacementQuestions : hebrewPlacementQuestions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [consecutiveWrong, setConsecutiveWrong] = useState(0);
  const [finished, setFinished] = useState(false);
  const [finalStage, setFinalStage] = useState(1);

  const question = questions[currentIndex];
  const isCorrect = selected === question?.correctAnswer;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleCheck = () => {
    if (!selected) return;
    setAnswered(true);
    if (isCorrect) {
      setScore(prev => prev + 1);
      setConsecutiveWrong(0);
    } else {
      setConsecutiveWrong(prev => prev + 1);
    }
  };

  const handleContinue = () => {
    // If 3 consecutive wrong in a stage or last question
    const currentStage = question.stage;
    if (consecutiveWrong >= 3 || currentIndex >= questions.length - 1) {
      let startStage = 1;
      if (consecutiveWrong >= 3) {
        startStage = Math.max(1, currentStage - 1);
      } else {
        // Finished all questions
        const percentage = score / questions.length;
        if (percentage >= 0.9) startStage = 5;
        else if (percentage >= 0.7) startStage = 4;
        else if (percentage >= 0.5) startStage = 3;
        else if (percentage >= 0.3) startStage = 2;
        else startStage = 1;
      }
      setFinalStage(startStage);
      setFinished(true);
      return;
    }

    setCurrentIndex(prev => prev + 1);
    setSelected(null);
    setAnswered(false);
  };

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="text-7xl mb-6">🎯</div>
          <h2 className="text-3xl font-bold mb-4">배치테스트 완료!</h2>
          <div className="bg-duo-card rounded-2xl p-6 mb-6">
            <p className="text-duo-text-dim mb-2">총 점수</p>
            <p className="text-4xl font-bold text-duo-green mb-4">{score}/{questions.length}</p>
            <div className="h-px bg-duo-card-light my-4" />
            <p className="text-duo-text-dim mb-2">시작 단계</p>
            <p className="text-2xl font-bold text-duo-yellow">
              {finalStage}단계
            </p>
            <p className="text-sm text-duo-text-dim mt-2">
              {finalStage === 1 && '알파벳부터 시작합니다'}
              {finalStage === 2 && '기초 문법부터 시작합니다'}
              {finalStage === 3 && '중급 문법부터 시작합니다'}
              {finalStage === 4 && '고급 독해부터 시작합니다'}
              {finalStage === 5 && '원전 읽기부터 시작합니다!'}
            </p>
          </div>
          <Button onClick={() => onComplete(score, finalStage)} fullWidth size="lg">
            학습 시작하기
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <button onClick={onSkip} className="text-duo-text-dim hover:text-duo-text cursor-pointer">
          ✕
        </button>
        <div className="flex-1">
          <ProgressBar progress={progress} />
        </div>
        <span className="text-sm text-duo-text-dim">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Stage indicator */}
      <div className="px-4 mb-2">
        <span className="text-xs bg-duo-purple/20 text-duo-purple px-3 py-1 rounded-full">
          {question.stage}단계 문항
        </span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="flex-1 flex flex-col"
        >
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <h2 className="text-xl font-bold mb-8 text-center max-w-lg">{question.question}</h2>
            <div className="w-full max-w-lg space-y-3">
              {question.options.map((option, i) => {
                let borderColor = 'border-duo-card-light';
                let bgColor = 'bg-duo-card';
                if (answered && option === question.correctAnswer) {
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mb-3 font-bold ${isCorrect ? 'text-duo-green' : 'text-duo-red'}`}
              >
                {isCorrect ? '정답! 🎉' : `틀렸습니다. 정답: ${question.correctAnswer}`}
              </motion.p>
            )}
            <Button
              onClick={answered ? handleContinue : handleCheck}
              disabled={!selected}
              variant={answered ? (isCorrect ? 'primary' : 'danger') : 'primary'}
              fullWidth
            >
              {answered ? '다음' : '확인'}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
