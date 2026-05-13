import { motion } from 'motion/react';
import { MapPin, RefreshCw, FileCheck, Armchair, Zap, Users2, ShieldCheck, Headphones } from 'lucide-react';

const reasons = [
  {
    title: "Prime Doha Location",
    description: "Prestigious address in the heart of Qatar's business district.",
    icon: MapPin
  },
  {
    title: "Flexible Leasing",
    description: "Customized terms that grow alongside your business needs.",
    icon: RefreshCw
  },
  {
    title: "Licensing Support",
    description: "Expert guidance for your Qatar business registration and compliance.",
    icon: FileCheck
  },
  {
    title: "Fully Furnished",
    description: "Move-in ready spaces with high-end ergonomic furniture included.",
    icon: Armchair
  },
  {
    title: "High-Speed connectivity",
    description: "Dedicated fiber-optic internet with enterprise-grade security.",
    icon: Zap
  },
  {
    title: "Professional Community",
    description: "Network with like-minded entrepreneurs and industry leaders.",
    icon: Users2
  },
  {
    title: "24/7 Security",
    description: "Biometric access and round-the-clock surveillance for your peace of mind.",
    icon: ShieldCheck
  },
  {
    title: "Reception Services",
    description: "Professional front-desk team to manage your guests and mail.",
    icon: Headphones
  }
];

export default function WhyChooseBusinessCenter() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-brand-navy uppercase tracking-tighter"
          >
            Discover The <span className="text-brand-gold">Superior Standard</span> In Workspaces
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                <reason.icon size={28} />
              </div>
              <h3 className="text-lg font-display font-bold text-brand-navy uppercase tracking-tighter mb-3 group-hover:text-brand-gold transition-colors underline decoration-brand-gold/0 group-hover:decoration-brand-gold/100">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
