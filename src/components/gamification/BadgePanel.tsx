import { motion, AnimatePresence } from 'framer-motion';
import { ALL_BADGES, getBadgeById } from '../../data/badges';

interface BadgePanelProps {
  earnedBadgeIds: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function BadgePanel({ earnedBadgeIds, isOpen, onClose }: BadgePanelProps) {
  const earnedSet = new Set(earnedBadgeIds);
  const categories = [
    { key: 'progress', label: '학습 진도' },
    { key: 'streak', label: '연속 학습' },
    { key: 'mastery', label: '마스터리' },
    { key: 'special', label: '특별' },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/60 flex items-end sm:items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={e => e.stopPropagation()}
            className="bg-duo-bg border-t-2 sm:border-2 border-duo-card-light rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[80vh] overflow-y-auto p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">배지 ({earnedBadgeIds.length}/{ALL_BADGES.length})</h2>
              <button onClick={onClose} className="text-duo-text-dim hover:text-duo-text text-2xl cursor-pointer">✕</button>
            </div>

            {categories.map(cat => (
              <div key={cat.key} className="mb-6">
                <h3 className="text-sm font-bold text-duo-text-dim mb-3">{cat.label}</h3>
                <div className="grid grid-cols-4 gap-3">
                  {ALL_BADGES.filter(b => b.category === cat.key).map(badge => {
                    const earned = earnedSet.has(badge.id);
                    return (
                      <motion.div
                        key={badge.id}
                        whileHover={earned ? { scale: 1.1 } : {}}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                          earned ? 'bg-duo-card' : 'bg-duo-card/30 opacity-40'
                        }`}
                      >
                        <span className={`text-2xl ${earned ? '' : 'grayscale'}`}>{badge.icon}</span>
                        <span className="text-[10px] text-center font-medium leading-tight">{badge.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
