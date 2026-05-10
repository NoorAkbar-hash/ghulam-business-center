import { motion } from 'motion/react';
import { Users, Globe, CheckCircle, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?auto=format&fit=crop&q=80&w=2000" 
          alt="Qatar Skyline" 
          className="w-full h-full object-cover opacity-30 grayscale"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                Premium Business Consultancy
              </div>

              <h1 className="text-5xl md:text-[72px] font-display font-black text-white leading-[1.05] mb-8 tracking-tighter">
                Company Formation <br />
                <span className="text-brand-gold">in Qatar.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-lg mb-10 leading-relaxed font-normal">
                Your strategic partner for seamless business setup, PRO services, and financial consultancy in the heart of Doha.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Button className="w-full sm:w-auto px-10 py-5 rounded-lg">
                  Our Success Stories
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-navy px-10 py-5 rounded-lg">
                  Get a Quote
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 glass p-8 rounded-[2rem] flex flex-wrap items-center justify-center lg:justify-start gap-12 w-fit mx-auto lg:mx-0"
            >
              <div>
                <div className="text-4xl font-black text-white tracking-tighter">2000+</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest mt-1">Cases Solved</div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
              <div>
                <div className="text-4xl font-black text-white tracking-tighter">300+</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest mt-1">Global Clients</div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
              <div>
                <div className="text-4xl font-black text-white tracking-tighter">10+</div>
                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest mt-1">Countries</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-brand-gold transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl mb-4 flex items-center justify-center text-brand-gold">
                   <Building2 size={24} />
                </div>
                <h3 className="font-bold text-brand-navy text-sm uppercase tracking-tight">Company Formation</h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">LLC, Branch, Representative office setup.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-brand-gold transition-all mt-8">
                <div className="w-12 h-12 bg-gold-50 rounded-xl mb-4 flex items-center justify-center text-brand-gold">
                   <Users size={24} />
                </div>
                <h3 className="font-bold text-brand-navy text-sm uppercase tracking-tight">PRO Services</h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Visa processing, municipality & labor.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-brand-gold transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-xl mb-4 flex items-center justify-center text-brand-gold">
                   <CheckCircle size={24} />
                </div>
                <h3 className="font-bold text-brand-navy text-sm uppercase tracking-tight">Audit & Tax</h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Full financial compliance & VAT.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:border-brand-gold transition-all mt-8 transition-all">
                <div className="w-12 h-12 bg-purple-50 rounded-xl mb-4 flex items-center justify-center text-brand-gold">
                   <Globe size={24} />
                </div>
                <h3 className="font-bold text-brand-navy text-sm uppercase tracking-tight">Consultancy</h3>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Business strategy & market analysis.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
