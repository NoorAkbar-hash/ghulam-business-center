import { motion } from 'motion/react';
import { Check, Award, Shield, Zap } from 'lucide-react';
import { CONTACT_DETAILS } from '../../constants';

const stats = [
  { icon: Award, label: "Market Experience", value: "15+ Years" },
  { icon: Shield, label: "Compliance Rate", value: "100%" },
  { icon: Zap, label: "Setup Speed", value: "Fast Track" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Collage Images */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg h-80"
              >
                <img 
                  src="/images/ghulam_ceo.jpg" 
                  alt="Corporate Tower" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg h-60 mt-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="Business Discussion" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2 rounded-2xl overflow-hidden shadow-lg h-64 -mt-10"
              >
                <img 
                  src="/images/ghulam_reception_1.jpg" 
                  alt="Office Space" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </motion.div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-navy p-8 rounded-2xl border-l-[6px] border-brand-gold shadow-2xl">
              <span className="block text-brand-gold font-bold text-5xl mb-1">15+</span>
              <span className="text-white text-sm font-medium uppercase tracking-widest leading-tight">Years of <br />Excellence in Qatar</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs block mb-4">The Standard of Excellence</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 leading-[1.1] tracking-tight">
                Architects of Your Success <br /><span className="text-brand-gold">in Doha.</span>
              </h2>
              
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                Ghulam Business Center represents the intersection of local authority and international corporate sophistication. We don't just register companies; we build the legal and financial foundations for generational wealth in Qatar.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  "Official Partner with Government Entities",
                  "Expert team with deep local jurisdictional knowledge",
                  "End-to-end support from licensing to PRO services",
                  "Transparent and ethical business consulting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-brand-gold/10 p-1 rounded-full">
                      <Check className="text-brand-gold" size={18} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Icon boxes */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-sm group-hover:bg-brand-gold transition-colors">
                      <stat.icon className="text-brand-gold transition-colors" size={28} />
                    </div>
                    <h4 className="text-brand-navy font-bold text-lg">{stat.value}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-8">
                <button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl">
                  Learn More About Us
                </button>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Our CEO</span>
                  <span className="text-brand-navy font-display font-bold text-lg">{CONTACT_DETAILS.ceoName}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}