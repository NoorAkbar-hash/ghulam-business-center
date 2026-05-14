import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, User, Mail, Briefcase, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../ui/Button';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Company Formation',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Safety timeout to prevent permanent "Sending..." state
    const timeoutId = setTimeout(() => {
      setIsSubmitting(false);
      toast.error('Request timed out. Please check your internet connection and try again.');
    }, 15000);
    
    try {
      // Save to Firestore leads collection
      await addDoc(collection(db, 'leads'), {
        ...formData,
        status: 'New',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        source: 'Contact Form'
      });
      
      clearTimeout(timeoutId);
      toast.success('Inquiry received! Our team will contact you shortly.');
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Company Formation',
        message: ''
      });
      (e.target as HTMLFormElement).reset();

    } catch (error: any) {
      clearTimeout(timeoutId);
      console.error('Submission error:', error);
      
      let msg = 'Failed to send inquiry. ';
      if (error.code === 'permission-denied') {
        msg += 'Permission denied. Please call us directly.';
      } else {
        msg += 'Please try again later.';
      }
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-2">
            <User size={12} className="text-brand-gold" /> Full Name
          </label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe" 
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all text-brand-navy"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-2">
            <Mail size={12} className="text-brand-gold" /> Email Address
          </label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com" 
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all text-brand-navy"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-2">
            <Phone size={12} className="text-brand-gold" /> Phone Number
          </label>
          <input 
            required
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+974 0000 0000" 
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all text-brand-navy"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-2">
            <Briefcase size={12} className="text-brand-gold" /> Service Required
          </label>
          <select 
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all appearance-none text-brand-navy"
          >
            <option>Company Formation</option>
            <option>Business Consultancy</option>
            <option>PRO Services</option>
            <option>Office Space</option>
            <option>Audit & Taxation</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-2">
          <MessageSquare size={12} className="text-brand-gold" /> Message
        </label>
        <textarea 
          rows={4} 
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help you?" 
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all text-brand-navy"
        ></textarea>
      </div>

      <Button 
        type="submit" 
        className="w-full py-5 text-sm" 
        disabled={isSubmitting}
        icon={Send}
      >
        {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
      </Button>
    </form>
  );
}
