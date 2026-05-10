import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

function Counter({ value, label }: { value: number, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center items-baseline gap-1">
        <motion.span className="text-5xl md:text-6xl font-bold text-brand-gold font-display">
          {displayValue}
        </motion.span>
        <span className="text-3xl font-bold text-brand-gold">+</span>
      </div>
      <p className="text-white/60 font-medium uppercase tracking-[0.2em] text-sm mt-4">{label}</p>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="h-40 bg-brand-navy w-full flex items-center mt-[-1px] relative z-20">
      <div className="container mx-auto px-12 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-x-16 gap-y-6 text-white/60 text-[10px] font-bold tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
            FAST TURNAROUND
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
            ONE-STOP SOLUTION
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
            DEDICATED CONSULTANT
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-white text-xs">
          <span className="opacity-70 font-medium">Need help? Talk to an expert:</span>
          <span className="font-extrabold text-brand-gold text-lg tracking-tight">+974 4455 6677</span>
        </div>
      </div>
    </section>
  );
}
