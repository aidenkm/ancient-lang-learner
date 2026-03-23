import { motion } from 'framer-motion';
import { Language } from '../types';

interface LanguageSelectProps {
  onSelect: (lang: Language) => void;
}

export default function LanguageSelect({ onSelect }: LanguageSelectProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-duo-green to-duo-blue bg-clip-text text-transparent">
          고대어 학습
        </h1>
        <p className="text-xl text-duo-text-dim">
          고대 그리스어와 성서 히브리어를 게임처럼 배우세요
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect('greek')}
          className="flex-1 p-8 rounded-2xl bg-duo-card border-2 border-duo-card-light
            hover:border-duo-blue transition-all cursor-pointer group"
        >
          <div className="text-6xl mb-4">🏛️</div>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-duo-blue transition-colors">
            고대 그리스어
          </h2>
          <p className="text-duo-text-dim text-sm mb-3">Ancient Greek</p>
          <div className="greek-text text-duo-text-dim text-lg">
            Ἐν ἀρχῇ ἦν ὁ λόγος
          </div>
          <div className="mt-4 flex flex-wrap gap-1 justify-center">
            <span className="text-xs bg-duo-purple/20 text-duo-purple px-2 py-1 rounded-full">코이네</span>
            <span className="text-xs bg-duo-blue/20 text-duo-blue px-2 py-1 rounded-full">고전</span>
            <span className="text-xs bg-duo-orange/20 text-duo-orange px-2 py-1 rounded-full">신약</span>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect('hebrew')}
          className="flex-1 p-8 rounded-2xl bg-duo-card border-2 border-duo-card-light
            hover:border-duo-orange transition-all cursor-pointer group"
        >
          <div className="text-6xl mb-4">📜</div>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-duo-orange transition-colors">
            성서 히브리어
          </h2>
          <p className="text-duo-text-dim text-sm mb-3">Biblical Hebrew</p>
          <div className="hebrew-text text-duo-text-dim text-lg">
            בְּרֵאשִׁית בָּרָא אֱלֹהִים
          </div>
          <div className="mt-4 flex flex-wrap gap-1 justify-center">
            <span className="text-xs bg-duo-yellow/20 text-duo-yellow px-2 py-1 rounded-full">구약</span>
            <span className="text-xs bg-duo-green/20 text-duo-green px-2 py-1 rounded-full">시편</span>
            <span className="text-xs bg-duo-red/20 text-duo-red px-2 py-1 rounded-full">미쉬나</span>
          </div>
        </motion.button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-duo-text-dim text-sm"
      >
        원전을 읽을 수 있을 때까지, 한 걸음씩 나아가세요
      </motion.p>
    </div>
  );
}
