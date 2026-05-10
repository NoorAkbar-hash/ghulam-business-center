import { motion } from 'motion/react';
import { Plane, Radio, Landmark, Flame, Zap, Building } from 'lucide-react';

const partners = [
  { name: "Qatar Airways", icon: Plane, color: "text-red-700" },
  { name: "Ooredoo", icon: Radio, color: "text-red-600" },
  { name: "QNB", icon: Landmark, color: "text-red-900" },
  { name: "Qatar Energy", icon: Flame, color: "text-blue-700" },
  { name: "Aspire Zone", icon: Zap, color: "text-brand-gold" },
  { name: "Msheireb", icon: Building, color: "text-brand-navy" }
];

export default function Partners() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-slate-400 font-bold uppercase tracking-[0.25em] text-xs">Trusted By Industry Leaders</span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {/* Double the list for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div 
              key={i} 
              className="mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 cursor-pointer group"
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 flex items-center justify-center mb-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform`}>
                  <partner.icon className={`${partner.color}`} size={24} />
                </div>
                <span className="text-brand-navy font-display font-bold text-sm tracking-tighter uppercase">{partner.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
