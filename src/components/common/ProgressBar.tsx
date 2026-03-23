import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  height?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ progress, color = 'bg-duo-green', height = 'h-3', showLabel = false }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className={`w-full ${height} bg-duo-card-light rounded-full overflow-hidden`}>
        <motion.div
          className={`${height} ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-duo-text-dim mt-1 text-right">{Math.round(progress)}%</p>
      )}
    </div>
  );
}
