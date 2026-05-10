import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmad Al-Mansour",
    role: "Founder, Zenith Tech",
    content: "Ghulam Business Center provided the perfect environment for my startup. The networking opportunities and support services are world-class.",
    image: "https://i.pravatar.cc/150?u=ahmad"
  },
  {
    name: "Sarah Jenkins",
    role: "Regional Director, Global Trade",
    content: "The premium offices here are exceptional. The views of West Bay combined with the high-speed infrastructure make it the best choice in Doha.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Khalid Al-Thani",
    role: "SME Consultant",
    content: "Setting up my consultancy at Ghulam Business Center was seamless. Their PRO services took all the government stress off my shoulders.",
    image: "https://i.pravatar.cc/150?u=khalid"
  },
  {
    name: "Elena Rodriguez",
    role: "Freelance Creative",
    content: "The Flexi Desk option is exactly what I needed. Professional, vibrant, and flexible. I've met so many great collaborators in the lounge.",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

export default function BusinessCenterTestimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Client Voices
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-brand-navy uppercase tracking-tighter"
          >
            Success Stories From <span className="text-brand-gold">Our Community</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-block px-4 w-[400px] md:w-[450px]">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 h-full flex flex-col justify-between relative group">
                <Quote className="text-brand-gold/10 absolute top-8 right-8" size={64} />
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 whitespace-normal">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-brand-navy font-display font-black text-lg tracking-tighter uppercase leading-none">{t.name}</h4>
                    <p className="text-brand-gold font-bold text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
