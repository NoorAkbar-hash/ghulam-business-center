import { type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  icon?: LucideIcon;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  className, 
  variant = 'primary', 
  icon: Icon,
  type = 'button',
  disabled
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-gold text-white hover:bg-brand-gold/90 shadow-lg shadow-brand-gold/20",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/20",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    glass: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
  };

  return (
    <motion.button
      type={type}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {Icon && <Icon size={16} />}
    </motion.button>
  );
}
