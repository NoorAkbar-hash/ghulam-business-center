import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-brand-navy flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 border-4 border-white/10 border-t-brand-gold rounded-full animate-spin mb-8"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-brand-gold flex items-center justify-center overflow-hidden relative">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="font-bold text-white absolute">G</span>
              </div>
              <span className="text-white font-display font-bold text-2xl tracking-tighter">
                GHULAM <span className="text-brand-gold font-light">BUSINESS CENTER</span>
              </span>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-brand-gold mt-6 rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
