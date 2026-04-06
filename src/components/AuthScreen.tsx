import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './common/Button';

interface AuthScreenProps {
  onSignIn: (email: string, password: string) => Promise<any>;
  onSignUp: (email: string, password: string) => Promise<any>;
  onSkip: () => void;
}

export default function AuthScreen({ onSignIn, onSignUp, onSkip }: AuthScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력하세요');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('올바른 이메일 형식을 입력하세요');
      return;
    }
    if (password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다');
      return;
    }

    setLoading(true);
    setError('');

    const err = isLogin
      ? await onSignIn(email, password)
      : await onSignUp(email, password);

    setLoading(false);

    if (err) {
      if (err.message?.includes('Invalid login')) {
        setError('이메일 또는 비밀번호가 올바르지 않습니다');
      } else if (err.message?.includes('already registered')) {
        setError('이미 등록된 이메일입니다');
      } else {
        setError(err.message || '오류가 발생했습니다');
      }
    } else if (!isLogin) {
      setSignUpSuccess(true);
    }
  };

  if (signUpSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
          <div className="text-6xl mb-6">📧</div>
          <h2 className="text-2xl font-bold mb-4">확인 이메일을 보냈습니다</h2>
          <p className="text-duo-text-dim mb-6">
            {email}로 확인 링크를 보냈습니다. 이메일을 확인하고 링크를 클릭한 뒤 로그인하세요.
          </p>
          <Button onClick={() => { setSignUpSuccess(false); setIsLogin(true); }} fullWidth>
            로그인으로 돌아가기
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-duo-green to-duo-blue bg-clip-text text-transparent">
            고대어 학습
          </h1>
          <p className="text-duo-text-dim">
            {isLogin ? '로그인하여 학습을 계속하세요' : '계정을 만들어 시작하세요'}
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-duo-card border-2 border-duo-card-light
              text-duo-text outline-none focus:border-duo-blue transition-all"
          />
          <input
            type="password"
            placeholder="비밀번호 (6자 이상)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            className="w-full p-4 rounded-xl bg-duo-card border-2 border-duo-card-light
              text-duo-text outline-none focus:border-duo-blue transition-all"
          />

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-duo-red text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          <Button onClick={handleSubmit} disabled={loading} fullWidth size="lg">
            {loading ? '처리 중...' : isLogin ? '로그인' : '회원가입'}
          </Button>

          <button
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="w-full text-center text-duo-text-dim text-sm hover:text-duo-text cursor-pointer"
          >
            {isLogin ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-duo-card-light" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-duo-bg text-duo-text-dim">또는</span>
            </div>
          </div>

          <button
            onClick={onSkip}
            className="w-full p-3 rounded-xl border-2 border-duo-card-light text-duo-text-dim
              hover:border-duo-blue/50 transition-all text-sm cursor-pointer"
          >
            로그인 없이 사용하기 (기기에만 저장)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
