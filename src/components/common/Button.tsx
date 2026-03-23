import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const variants = {
  primary: 'bg-duo-green text-white border-b-4 border-duo-green-dark hover:bg-duo-green/90 active:border-b-0 active:mt-1',
  secondary: 'bg-duo-card-light text-duo-text border-b-4 border-duo-card hover:bg-duo-card-light/80 active:border-b-0 active:mt-1',
  danger: 'bg-duo-red text-white border-b-4 border-duo-red-dark hover:bg-duo-red/90 active:border-b-0 active:mt-1',
  ghost: 'bg-transparent text-duo-text-dim border-2 border-duo-card-light hover:bg-duo-card-light/30',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        font-bold transition-all select-none
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
