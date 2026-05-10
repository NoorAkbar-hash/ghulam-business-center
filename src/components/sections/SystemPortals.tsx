import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, Lock } from 'lucide-react';

export default function SystemPortals() {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#C5A267_0,transparent_50%)]" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 md:p-20 text-center">
          <div className="w-20 h-20 bg-brand-gold rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-gold/20">
            <Shield size={32} className="text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-6">
            Operational <span className="text-brand-gold">Intelligence</span>
          </h2>
          
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Ghulam CRM internal management portal. Identity verification and multi-factor authentication required for access to lead intelligence and business analytics.
          </p>

          <Link 
            to="/admin/login"
            className="inline-flex items-center gap-4 bg-white text-brand-navy px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 group"
          >
            <Lock size={14} className="text-brand-navy group-hover:text-white transition-colors" />
            Access Admin System
            <ChevronRight size={14} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-white/10" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Authorized Personnel Only</span>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
