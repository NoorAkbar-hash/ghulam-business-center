import { motion } from 'motion/react';
import { Clock, ShieldCheck, Zap, Users2, Target, BarChart3 } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Our direct links with government departments ensure your licenses are processed in record time."
  },
  {
    icon: ShieldCheck,
    title: "One-Stop Solution",
    description: "From legal structure and licensing to office space and banking—we handle everything for you."
  },
  {
    icon: Zap,
    title: "Global Coverage",
    description: "Whether you're a local startup or a global corporation, our expertise grows with your ambition."
  },
  {
    icon: Users2,
    title: "Dedicated Consultant",
    description: "You'll have a single point of contact who understands your business as well as you do."
  },
  {
    icon: Target,
    title: "Local Market Knowledge",
    description: "Deep understanding of Qatari specific local regulations, culture, and business environment."
  },
  {
    icon: BarChart3,
    title: "Transparent Pricing",
    description: "No hidden costs. We provide fixed-price packages that give you full clarity on your investment."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                The Preferred Choice for Corporate <br /><span className="text-brand-gold">Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Operating in Qatar requires precision and deep local expertise. We bridge the gap 
                between international standards and local requirements, providing you with a 
                solid foundation for success.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-brand-navy font-display mb-2">100%</span>
              <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Client Dedication</span>
            </div>
            <div className="bg-brand-navy p-8 rounded-3xl flex flex-col items-center text-center shadow-xl shadow-brand-navy/20">
              <span className="text-4xl font-bold text-brand-gold font-display mb-2">50+</span>
              <span className="text-white/70 font-medium uppercase tracking-widest text-xs">Major Partners</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-brand-gold shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                <reason.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-navy mb-4 tracking-tight uppercase">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
