import { motion } from 'framer-motion';

interface StreakCounterProps {
  streak: number;
}

export default function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <motion.div
      className="flex items-center gap-2 bg-duo-orange/20 px-3 py-1 rounded-full"
      animate={streak > 0 ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="text-lg">🔥</span>
      <span className="text-duo-orange font-bold text-sm">{streak}</span>
    </motion.div>
  );
}
