import { motion } from 'motion/react';
import { 
  Building2, 
  Briefcase, 
  FileCheck2, 
  PieChart, 
  Landmark, 
  Globe2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "Company Formation",
    description: "End-to-end guidance for LLC, Branch Office, or Free Zone registration in Qatar.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Business Consultancy",
    description: "Strategic planning and market entry analysis tailored for Qatar's unique economy.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "PRO Services",
    description: "Manage all your government relations, visa processing, and document clearing efficiently.",
    icon: FileCheck2,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Audit & Taxation",
    description: "Ensure full compliance with Qatar's fiscal regulations with our expert auditing services.",
    icon: PieChart,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Financial Services",
    description: "Sophisticated financial planning and investment advisory for sustainable corporate growth.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Business Setup",
    description: "Expanding beyond Qatar? We help local businesses establish presence worldwide.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs block mb-4">Premier Services</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight">Our Expertise</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Strategic solutions tailored for international and local entities looking to dominate the Qatari market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              {/* Image Header with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/40 transition-colors"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="bg-brand-gold w-12 h-12 rounded-xl flex items-center justify-center text-white mb-3 shadow-lg transform group-hover:rotate-12 transition-transform">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-white text-xl font-bold font-display">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between group/btn cursor-pointer"
                >
                  <span className="text-brand-navy font-bold text-sm uppercase tracking-widest group-hover/btn:text-brand-gold transition-colors">Learn More</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-brand-navy group-hover/btn:bg-brand-gold group-hover/btn:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-brand-navy hover:text-white text-brand-navy border-2 border-brand-navy px-10 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
          >
            View All Services
          </button>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 pointer-events-none -skew-x-12 opacity-50"></div>
    </section>
  );
}
