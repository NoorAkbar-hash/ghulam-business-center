import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'slate' | 'navy' | 'gold';
}

export function SectionWrapper({ children, className, id, bg = 'white' }: SectionWrapperProps) {
  const bgStyles = {
    white: "bg-white",
    slate: "bg-slate-50",
    navy: "bg-brand-navy",
    gold: "bg-brand-gold"
  };

  return (
    <section id={id} className={cn("py-24 overflow-hidden relative", bgStyles[bg], className)}>
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}
