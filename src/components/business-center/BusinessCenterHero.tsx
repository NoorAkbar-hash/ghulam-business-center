import { motion } from 'motion/react';
import { MousePointer2, CheckCircle2, Award, Clock } from 'lucide-react';

const stats = [
  { label: "Available Spaces", value: "120+", icon: MousePointer2 },
  { label: "Happy Clients", value: "500+", icon: CheckCircle2 },
  { label: "Years Experience", value: "25+", icon: Award },
  { label: "Access", value: "24/7", icon: Clock },
];

export default function BusinessCenterHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/ghulam_reception_1.jpg" 
          alt="Modern Office" 
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
      </div>

      {/* Animated Floating Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-xs font-bold uppercase tracking-widest mb-6"
            >
              The Pinnacle of Professionalism
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-6 uppercase tracking-tighter">
              Premium <span className="text-brand-gold">Business center</span> In Doha
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed font-light">
              Flexible workspaces, premium offices, virtual offices, and conference facilities designed for ambitious businesses operating in the heart of Qatar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20">
                Book Office Tour
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
                Get Free Consultation
              </button>
            </div>

            {/* Availability Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-display font-black text-white leading-none mb-1">{stat.value}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Glassmorphism Cards */}
          <div className="hidden lg:block relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl max-w-md mx-auto"
            >
              <img 
                src="/images/ghulam_reception_2.jpg" 
                alt="Executive Office" 
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-display font-bold text-xl uppercase tracking-tighter">Executive Hub</h3>
                  <p className="text-slate-400 text-sm">West Bay, Doha</p>
                </div>
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
              </div>
            </motion.div>

            {/* Small Floating Card */}
            <motion.div
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 -right-10 z-30 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <Clock className="text-brand-navy" size={24} />
              </div>
              <div>
                <p className="text-brand-navy font-bold text-sm uppercase tracking-tighter">Ready to move</p>
                <p className="text-slate-400 text-xs">Immediate Access</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
        <span className="text-white/20 font-bold uppercase tracking-[0.3em] text-[8px]">Scroll</span>
      </motion.div>
    </section>
  );
}