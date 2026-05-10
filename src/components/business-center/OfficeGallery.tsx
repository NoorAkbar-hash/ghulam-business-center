import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const images = [
  { 
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    title: "Executive Suite",
    category: "Premium Office"
  },
  { 
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    title: "Skyline Conference",
    category: "Meeting Rooms"
  },
  { 
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    title: "Startup Hub",
    category: "Coworking"
  },
  { 
    url: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1200",
    title: "Creative Lounge",
    category: "Lounge"
  },
  { 
    url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200",
    title: "Private Focus Room",
    category: "Dedicated Office"
  },
  { 
    url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200",
    title: "Boardroom Elite",
    category: "Conference Room"
  }
];

export default function OfficeGallery() {
  return (
    <section className="py-24 bg-brand-navy overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Visual Tour
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter"
            >
              Immersive <span className="text-brand-gold">Workspace</span> Gallery
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-widest text-[10px]"
          >
            <Camera size={20} className="text-brand-gold" />
            Designed for productivity
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative group aspect-square overflow-hidden cursor-pointer"
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-brand-navy/60 opacity-20 group-hover:opacity-80 transition-all duration-500" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-2">{img.category}</span>
              <h3 className="text-white font-display font-black text-2xl uppercase tracking-tighter">{img.title}</h3>
            </div>
            
            {/* View Button Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-gold/90 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
               <span className="text-white font-black text-[10px] uppercase tracking-widest">View</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
