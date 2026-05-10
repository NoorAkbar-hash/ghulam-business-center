import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from './forms/ContactForm';
import { CONTACT_DETAILS } from '../constants';

export default function ConsultationForm() {
  return (
    <section id="contact" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/95 to-brand-navy"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          
          {/* Info Side */}
          <div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to Establish Your <br /><span className="text-brand-gold italic">Presence in Qatar?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-lg">
                Fill out the form below and one of our dedicated corporate consultants 
                will reach out to you within 24 business hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Call Us Anywhere</p>
                    <p className="text-white text-xl font-bold">{CONTACT_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Support</p>
                    <p className="text-white text-xl font-bold">{CONTACT_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Visit Our Office</p>
                    <p className="text-white text-xl font-bold">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Instant Support?</h4>
                  <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold uppercase tracking-widest text-xs hover:underline transition-all">Chat on WhatsApp</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold text-brand-navy mb-8 font-display">Book Free Consultation</h3>
              
              <ContactForm />
              
              <p className="text-center text-slate-400 text-xs mt-6">
                We value your privacy. Your information is safe with us.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}