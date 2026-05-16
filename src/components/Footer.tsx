import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_DETAILS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-navy to-brand-gold"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center overflow-hidden relative">
                <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl uppercase tracking-tighter text-white">
                Ghulam <span className="text-brand-gold font-light">Business Center</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Qatar's leading business setup and premium workspace provider. 
              Empowering global entrepreneurs with elite corporate solutions in Doha.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-gold hover:text-white hover:scale-110 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-display border-l-4 border-brand-gold pl-4 uppercase tracking-tighter">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Business Center', href: '/business-center' },
                { name: 'About Us', href: '/#about' },
                { name: 'Our Process', href: '/#process' },
                { name: 'Blogs & News', href: '/#blog' },
                { name: 'Contact Us', href: '/#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center group uppercase text-xs font-bold tracking-widest">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-brand-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Center Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-display border-l-4 border-brand-gold pl-4 uppercase tracking-tighter">workspace solutions</h4>
            <ul className="space-y-4">
              {[
                { name: 'Premium Office', href: '/business-center/premium-office' },
                { name: 'Dedicated Office', href: '/business-center/dedicated-office' },
                { name: 'Flexi Desk', href: '/business-center/flexi-desk' },
                { name: 'Virtual Office', href: '/business-center/virtual-office' },
                { name: 'Meeting Rooms', href: '/business-center/meeting-rooms' },
                { name: 'Coworking Space', href: '/business-center/coworking-space' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-slate-400 hover:text-brand-gold transition-colors flex items-center group uppercase text-xs font-bold tracking-widest">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-brand-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate services */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-display border-l-4 border-brand-gold pl-4 uppercase tracking-tighter">Corporate Services</h4>
            <ul className="space-y-4">
              {[
                'Company Formation',
                'Business Consultancy',
                'PRO Services',
                'Audit & Taxation',
                'Financial Advisory',
                'Global Business Setup'
              ].map((service) => (
                <li key={service}>
                  <Link to="/#services" className="text-slate-400 hover:text-brand-gold transition-colors flex items-center group uppercase text-xs font-bold tracking-widest">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-brand-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact is moved to bottom or removed to favor information depth */}
        </div>

        {/* Bottom Contact Bar */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-white/5 mb-12">
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Phone size={20} />
               </div>
               <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Call Us</p>
                  <p className="text-white font-bold tracking-tight">{CONTACT_DETAILS.phone}</p>
               </div>
            </div>
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <Mail size={20} />
               </div>
               <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Email Us</p>
                  <p className="text-white font-bold tracking-tight">{CONTACT_DETAILS.email}</p>
               </div>
            </div>
            <div className="flex items-center gap-4 group">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  <MapPin size={20} />
               </div>
               <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Location</p>
                  <p className="text-white font-bold tracking-tight">{CONTACT_DETAILS.shortAddress}</p>
               </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm italic">
            © {currentYear} <span className="text-slate-300 font-bold">Ghulam Business Center</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
}