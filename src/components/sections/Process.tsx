import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Connect with our experts for a detailed analysis of your business requirements and goal setting."
  },
  {
    number: "02",
    title: "Choose Structure",
    description: "Identify the ideal legal entity structure (LLC, Branch, Representative Office) that fits your vision."
  },
  {
    number: "03",
    title: "Documentation & Filing",
    description: "We handle all the paperwork, notarization, and government filings to ensure seamless approvals."
  },
  {
    number: "04",
    title: "Launch Business",
    description: "Receive your commercial registration and license. You are now ready to commence operations in Qatar!"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4">Step-by-Step</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Company Formation Works</h2>
            <p className="text-slate-400 text-lg">
              Our streamlined process ensures that your business setup journey is 
              efficient, transparent, and completely stress-free.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical/Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-xl shadow-brand-gold/20 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-display">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative dots for connections */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-2 h-2 bg-brand-gold rounded-full -translate-y-1/2 last:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-white mb-6 text-lg">Ready to start your business journey?</p>
            <button className="bg-brand-gold hover:bg-brand-gold/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-gold/20">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
