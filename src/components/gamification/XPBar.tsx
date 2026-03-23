import ProgressBar from '../common/ProgressBar';

interface XPBarProps {
  xp: number;
  level: number;
}

export default function XPBar({ xp, level }: XPBarProps) {
  const xpInLevel = xp % 100;
  const xpToNext = 100;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 bg-duo-yellow/20 px-3 py-1 rounded-full">
        <span className="text-duo-yellow font-bold text-sm">Lv.{level}</span>
      </div>
      <div className="flex-1">
        <ProgressBar progress={(xpInLevel / xpToNext) * 100} color="bg-duo-yellow" height="h-2" />
      </div>
      <span className="text-xs text-duo-text-dim">{xpInLevel}/{xpToNext} XP</span>
    </div>
  );
}
