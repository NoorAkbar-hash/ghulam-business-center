import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../../components/ui/Button';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/admin');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Access Granted. Welcome back, Admin.');
      navigate('/admin');
    } catch (error: any) {
      console.error('Login Error:', error);
      toast.error('Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 border border-slate-100"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="text-brand-gold" size={32} />
          </div>
          <h1 className="text-3xl font-display font-black text-brand-navy uppercase tracking-tighter">Admin Portal</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Ghulam Intelligence CRM Alpha</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-2">Security Email</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ghulam.intelligence" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all text-brand-navy font-bold"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pl-2">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all text-brand-navy font-bold"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 group"
            icon={ArrowRight}
          >
            {loading ? 'Verifying...' : 'Initiate Secure Login'}
          </Button>
        </form>

        <div className="mt-10 pt-10 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em] leading-relaxed">
            Encrypted Session • Restricted Access<br/>Unauthorized Entry is Prohibited
          </p>
        </div>
      </motion.div>
    </div>
  );
}
