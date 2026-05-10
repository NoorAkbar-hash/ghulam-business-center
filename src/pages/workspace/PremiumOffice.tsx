import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { motion } from 'motion/react';
import { Check, Star, Wind, Shield, Wifi, Coffee, Users, Clock, Headphones } from 'lucide-react';
import ConsultationForm from '../../components/ConsultationForm';
import SEO from '../../components/ui/SEO';

const amenities = [
  { icon: Wifi, title: "Fiber Internet", desc: "Ultra-high-speed dedicated connectivity." },
  { icon: Headphones, title: "Receptionist", desc: "Professional guest welcoming and mail handling." },
  { icon: Shield, title: "24/7 Access", desc: "Work on your schedule with secure biometric entry." },
  { icon: Wind, title: "Modern interiors", desc: "Premium ergonomic furniture and climate control." },
  { icon: Coffee, title: "Concierge", desc: "Lifestyle and business support at your service." },
  { icon: Users, title: "Meeting Rooms", desc: "Complimentary access to high-tech boardrooms." },
];

export default function PremiumOffice() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Premium Office Spaces Doha | Executive Suites" 
        description="Luxury executive office suites in Doha, Qatar. Fully furnished, managed IT services, and prestigious business address for forward-thinking companies."
      />
      <LoadingOverlay />
      <Navbar />
      
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Office" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy to-white" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Luxury Workspace
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter"
          >
            Premium <span className="text-brand-gold">Office Spaces</span>
          </motion.h1>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-black text-brand-navy uppercase tracking-tighter mb-8 leading-[1.1]">
                Executive Workspaces <br />
                <span className="text-brand-gold">Designed For Success</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl">
                Our Premium Offices in Doha represent the absolute standard in professional environments. Located in prestigious districts, these fully furnished suites combine aesthetic excellence with functional perfection.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {[
                  "Prestigious Business Address",
                  "Panoramic City Views",
                  "Fully Managed IT Services",
                  "Daily Housekeeping",
                  "Underground Parking",
                  "Exclusive Member Lounges"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Check className="text-brand-gold" size={12} />
                    </div>
                    <span className="text-brand-navy font-bold text-sm tracking-tighter uppercase">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-colors">
                  Inquire Now
                </a>
                <a href="https://wa.me/97444448888" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-green-600 transition-colors">
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-12"
              >
                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800" alt="Office View 1" className="rounded-3xl h-[400px] object-cover shadow-2xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800" alt="Office View 2" className="rounded-3xl h-[400px] object-cover shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">World-Class Facilities</span>
             <h2 className="text-4xl font-display font-black text-brand-navy uppercase tracking-tighter">Everything Included</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group"
              >
                <item.icon className="text-brand-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-brand-navy font-display font-bold text-xl tracking-tighter uppercase mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Mockup */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Investment Plans</span>
             <h2 className="text-4xl font-display font-black text-brand-navy uppercase tracking-tighter">Office Pricing</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
             {/* Plan 1 */}
             <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-brand-gold/50 transition-all flex flex-col">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Standard Suite</span>
                <h3 className="text-3xl font-display font-black text-brand-navy mb-2 uppercase tracking-tighter">Executive</h3>
                <div className="text-4xl font-black text-brand-gold mb-8">QAR 4,500<span className="text-sm text-slate-400 font-normal ml-2">/ month</span></div>
                <div className="space-y-4 mb-10 grow">
                  {["1-2 Person Workspace", "Managed Reception", "High-speed WiFi", "Meeting Room: 5hrs/mo"].map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-500">
                      <Star className="text-brand-gold" size={14} />
                      {f}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl border-2 border-brand-navy text-brand-navy font-bold uppercase tracking-widest text-xs hover:bg-brand-navy hover:text-white transition-all">Select Plan</button>
             </div>

             {/* Plan 2 - Featured */}
             <div className="p-10 rounded-[2.5rem] border-2 border-brand-gold bg-brand-navy flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy font-black text-[8px] uppercase tracking-widest px-4 py-2 rounded-bl-xl">Most Popular</div>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Full Managed</span>
                <h3 className="text-3xl font-display font-black text-white mb-2 uppercase tracking-tighter">Elite Suite</h3>
                <div className="text-4xl font-black text-brand-gold mb-8">QAR 7,500<span className="text-sm text-brand-gold/50 font-normal ml-2">/ month</span></div>
                <div className="space-y-4 mb-10 grow">
                  {["3-5 Person Workspace", "Unlimited WiFi", "Meeting Room: 15hrs/mo", "Concierge Support", "Premium Views"].map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-300">
                      <Star className="text-brand-gold" size={14} />
                      {f}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl bg-brand-gold text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-gold/90 transition-all shadow-xl shadow-brand-gold/20">Select Plan</button>
             </div>

             {/* Plan 3 */}
             <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-brand-gold/50 transition-all flex flex-col">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Custom Enterprise</span>
                <h3 className="text-3xl font-display font-black text-brand-navy mb-2 uppercase tracking-tighter">Corporate</h3>
                <div className="text-4xl font-black text-brand-gold mb-8 italic text-2xl uppercase font-bold">Contact Us</div>
                <div className="space-y-4 mb-10 grow">
                  {["Full Floor Options", "Branded Interiors", "Technical Support Team", "VIP Access Control", "Private Storage"].map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-500">
                      <Star className="text-brand-gold" size={14} />
                      {f}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl border-2 border-brand-navy text-brand-navy font-bold uppercase tracking-widest text-xs hover:bg-brand-navy hover:text-white transition-all">Get Quote</button>
             </div>
          </div>
        </div>
      </section>

      <ConsultationForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
