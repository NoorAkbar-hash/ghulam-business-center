import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import SEO from '../../components/ui/SEO';
import ConsultationForm from '../../components/ConsultationForm';
import { motion } from 'motion/react';
import { Zap, Monitor, Layout, Coffee, Users, MapPin } from 'lucide-react';

export default function FlexiDesk() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Flexi Desk Doha | Professional Coworking" 
        description="Flexible hot-desking and coworking solutions in Doha. Perfect for freelancers, digital nomads, and agile startups looking for a professional business environment."
      />
      <LoadingOverlay />
      <Navbar />
      
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        <img 
          src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=2000" 
          alt="Flexi Desk" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy to-white" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter"
          >
            Flexi <span className="text-brand-gold">Desks</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Flexi Desk Area" className="rounded-[3rem] shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-display font-black text-brand-navy uppercase tracking-tighter mb-8 leading-[1.1]">
                Work <span className="text-brand-gold">With Freedom</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Join a vibrant community of professionals. Our Lexi Desk options offer the ultimate flexibility without compromising on corporate standards or infrastructure quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Plug & Play" },
                  { icon: Monitor, title: "Tech Ready" },
                  { icon: Layout, title: "Modern Design" },
                  { icon: Coffee, title: "Unlimited Coffee" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <item.icon className="text-brand-gold" size={20} />
                    <span className="text-brand-navy font-bold text-xs uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
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
