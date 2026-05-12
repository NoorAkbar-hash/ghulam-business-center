import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    role: "CEO, TechNexus Qatar",
    content: "Ghulam Business Center made our entry into the Qatari market incredibly smooth. Their deep knowledge of local regulations and their proactive approach saved us months of work.",
    avatar: "https://i.pravatar.cc/150?u=a",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Director, Global Solutions",
    content: "The level of professionalism and dedication we experienced was unmatched. They handled everything from office space to legal documentation with perfect precision.",
    avatar: "https://i.pravatar.cc/150?u=s",
    rating: 5
  },
  {
    name: "Khalid Ibrahim",
    role: "Founder, Desert Blooms",
    content: "As a local startup, we needed a partner who understood both global standards and local traditions. Ghulam Business Center provided exactly that balance for our success.",
    avatar: "https://i.pravatar.cc/150?u=k",
    rating: 4
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4">Client Success</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">Hear From Those We've Helped <span className="text-brand-gold">Grow</span></h2>
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 shadow-sm relative overflow-hidden h-full">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-12 opacity-5 text-brand-gold">
                  <Quote size={180} />
                </div>
                
                {/* Image */}
                <div className="relative z-10">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-brand-gold p-3 rounded-2xl shadow-xl">
                    <Quote className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed font-display">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-navy">{testimonials[currentIndex].name}</h4>
                    <span className="text-slate-500 font-medium">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-brand-gold' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
