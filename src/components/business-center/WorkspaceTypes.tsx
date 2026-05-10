import { motion } from 'motion/react';
import { Building2, UserCheck, Monitor, MapPin, Users, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const workspaces = [
  {
    title: "Premium Office",
    description: "Fully furnished executive suites with panoramic views and concierge services.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    href: "/business-center/premium-office"
  },
  {
    title: "Dedicated Office",
    description: "Private, secure office spaces tailored for small to medium sized teams.",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800",
    href: "/business-center/dedicated-office"
  },
  {
    title: "Flexi Desk",
    description: "Dynamic hot-desking options in a collaborative and professional environment.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800",
    href: "/business-center/flexi-desk"
  },
  {
    title: "Virtual Office",
    description: "Prestigious business address with mail handling and professional call answering.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    href: "/business-center/virtual-office"
  },
  {
    title: "Conference Room",
    description: "State-of-the-art meeting spaces equipped with the latest AV technology.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
    href: "/business-center/conference-room"
  },
  {
    title: "Coworking Space",
    description: "Open-plan shared workspaces designed for networking and productivity.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    href: "/business-center/coworking-space"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WorkspaceTypes() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Diverse Workspace Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-brand-navy uppercase tracking-tighter"
          >
            Find Your <span className="text-brand-gold">Perfect Space</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workspaces.map((ws) => (
            <motion.div
              key={ws.title}
              variants={item}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={ws.image} 
                  alt={ws.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  <ws.icon className="text-brand-gold" size={24} />
                </div>
              </div>

              <div className="p-8 pt-10 relative">
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
                
                <h3 className="text-2xl font-display font-black text-brand-navy uppercase tracking-tighter mb-4 group-hover:text-brand-gold transition-colors">
                  {ws.title}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {ws.description}
                </p>
                <Link 
                  to={ws.href}
                  className="inline-flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all"
                >
                  Explore Workspace <span className="w-8 h-[1px] bg-brand-gold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
