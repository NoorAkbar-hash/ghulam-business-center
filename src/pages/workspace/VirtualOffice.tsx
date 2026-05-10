import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import SEO from '../../components/ui/SEO';
import ConsultationForm from '../../components/ConsultationForm';
import { motion } from 'motion/react';
import { MapPin, Headphones, Mail, Phone, Shield, Globe } from 'lucide-react';

export default function VirtualOffice() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Virtual Office Doha | Prestigious Business Address" 
        description="Establish your business presence in Doha, Qatar with a prestigious virtual office. Includes business address, mail handling, and professional call answering services."
      />
      <LoadingOverlay />
      <Navbar />
      
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Virtual Office" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy to-white" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter"
          >
            Virtual <span className="text-brand-gold">Office</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black text-brand-navy uppercase tracking-tighter mb-8 leading-[1.1]">
                Business <span className="text-brand-gold">Without Borders</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Project a professional image with a prestigious Doha business address. Our virtual office packages are designed for remote teams and entrepreneurs who need corporate credibility without the overhead of physical space.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: MapPin, title: "Premium Address" },
                  { icon: Headphones, title: "Call Answering" },
                  { icon: Mail, title: "Mail Handling" },
                  { icon: Shield, title: "Authorized Rep" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <item.icon className="text-brand-gold" size={20} />
                    <span className="text-brand-navy font-bold text-xs uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" alt="Virtual Office Concept" className="rounded-[3rem] shadow-2xl" />
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
