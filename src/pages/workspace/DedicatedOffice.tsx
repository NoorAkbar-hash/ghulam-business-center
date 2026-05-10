import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import SEO from '../../components/ui/SEO';
import ConsultationForm from '../../components/ConsultationForm';
import { motion } from 'motion/react';
import { Shield, Clock, Users, Coffee, Wifi, MapPin } from 'lucide-react';

export default function DedicatedOffice() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Dedicated Office Spaces Doha | Secure Private Workspaces" 
        description="Secure and private dedicated office spaces in Doha, Qatar. Ideal for growing teams requiring a focused and professional environment."
      />
      <LoadingOverlay />
      <Navbar />
      
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        <img 
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=2000" 
          alt="Dedicated Office" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy to-white" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter"
          >
            Dedicated <span className="text-brand-gold">Offices</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black text-brand-navy uppercase tracking-tighter mb-8 leading-[1.1]">
                Your Own <span className="text-brand-gold">Private Hub</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Experience the perfect balance of privacy and community. Our dedicated offices provide a secure space for your team while giving you access to all the premium amenities of our business center.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Secure Access" },
                  { icon: Clock, title: "24/7 Entry" },
                  { icon: Users, title: "Team Scaling" },
                  { icon: Wifi, title: "High Speed" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <item.icon className="text-brand-gold" size={20} />
                    <span className="text-brand-navy font-bold text-xs uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800" alt="Dedicated Office" className="rounded-[3rem] shadow-2xl" />
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
