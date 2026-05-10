import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Train, Bus } from 'lucide-react';
import { CONTACT_DETAILS } from '../../constants';

export default function OfficeLocation() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="location">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Hub</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-navy uppercase tracking-tighter mb-8 leading-[1.1]">
              Strategically Located In The <span className="text-brand-gold">Heart Of Doha</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <MapPin className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-display font-bold text-lg tracking-tighter uppercase mb-1">Corporate Address</h4>
                  <p className="text-slate-500 leading-relaxed">
                    {CONTACT_DETAILS.address}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-navy font-display font-bold text-lg tracking-tighter uppercase mb-1">Inquiries</h4>
                    <p className="text-slate-500 text-sm font-bold">{CONTACT_DETAILS.phone}</p>
                    <p className="text-slate-500 text-sm">{CONTACT_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Clock className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-navy font-display font-bold text-lg tracking-tighter uppercase mb-1">Access Hours</h4>
                    <p className="text-slate-500 text-sm uppercase font-bold tracking-tighter">Business Center: {CONTACT_DETAILS.officeHours}</p>
                    <p className="text-slate-500 text-sm italic">Reception: {CONTACT_DETAILS.receptionHours}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-brand-navy rounded-[2rem] text-white">
                <h4 className="text-brand-gold font-display font-bold text-lg tracking-tighter uppercase mb-4">Transportation</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <Train className="text-brand-gold shrink-0" size={18} />
                    <span>2 mins walk from Msheireb Metro Station (Gold & Red Lines)</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <Bus className="text-brand-gold shrink-0" size={18} />
                    <span>Direct access via Airport Road and Al Cornish Street</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
          >
            {/* Interactive Map UI Mockup */}
            <div className="absolute inset-0 grayscale contrast-125 opacity-40 hover:opacity-100 transition-opacity duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Animated Pin */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full animate-ping absolute -inset-0" />
                <div className="w-16 h-16 bg-brand-gold/40 rounded-full flex items-center justify-center relative shadow-2xl shadow-brand-gold/50">
                   <MapPin className="text-white" size={32} />
                </div>
              </div>
              <div className="mt-4 bg-white px-6 py-3 rounded-xl shadow-xl border border-slate-100 whitespace-nowrap">
                <p className="text-brand-navy font-black text-xs uppercase tracking-tighter">Ghulam Business Center</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{CONTACT_DETAILS.shortAddress}</p>
              </div>
            </motion.div>

            {/* Map Overlay HUD */}
            <div className="absolute bottom-8 left-8 right-8 bg-brand-navy/90 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                 </div>
                 <div>
                    <p className="text-white font-bold text-xs">DIRECTIONS</p>
                    <p className="text-slate-400 text-[10px]">Open in Google Maps</p>
                 </div>
              </div>
              <button className="bg-white text-brand-navy px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-colors">
                Link
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
