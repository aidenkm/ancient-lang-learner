import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../../types';

interface BadgeToastProps {
  badge: Badge | null;
  onClose: () => void;
}

export default function BadgeToast({ badge, onClose }: BadgeToastProps) {
  return (
    <AnimatePresence>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.button
            onClick={onClose}
            className="flex items-center gap-3 bg-duo-card border-2 border-duo-yellow rounded-2xl px-5 py-4 shadow-lg shadow-duo-yellow/20 cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {badge.icon}
            </motion.span>
            <div className="text-left">
              <p className="text-duo-yellow font-bold text-xs">배지 획득!</p>
              <p className="font-bold text-white">{badge.name}</p>
              <p className="text-duo-text-dim text-xs">{badge.description}</p>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
