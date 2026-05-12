import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Clock, 
  X, 
  Filter, 
  Mail, 
  Phone, 
  MessageSquare, 
  Trash2, 
  LogOut, 
  Search,
  MoreHorizontal,
  ChevronRight,
  TrendingUp,
  Award,
  Globe,
  Bell,
  BarChart
} from 'lucide-react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import toast from 'react-hot-toast';
import { Lead, LeadStatus } from '../../types';

export default function AdminDashboard() {
  const [user, authLoading] = useAuthState(auth);
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'leads' | 'analytics'>('leads');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'All'>('All');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Auth Protection
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin/login');
    }
  }, [user, authLoading, navigate]);

  // Lead Subscription
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as any[];
      setLeads(leadsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'leads');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleUpdateStatus = async (id: string, newStatus: LeadStatus) => {
    try {
      await updateDoc(doc(db, 'leads', id), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });
      toast.success(`Pipeline updated: Status changed to ${newStatus}`);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `leads/${id}`);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead record? This action is irreversible.')) return;
    
    try {
      await deleteDoc(doc(db, 'leads', id));
      toast.success('Lead intelligence purged successfully.');
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `leads/${id}`);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/admin/login');
    } catch (error) {
      toast.error('Logout failed.');
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        lead.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
      const matchesService = serviceFilter === 'All' || lead.service === serviceFilter;
      return matchesSearch && matchesStatus && matchesService;
    });
  }, [leads, searchTerm, statusFilter, serviceFilter]);

  const services = useMemo(() => ['All', ...new Set(leads.map(l => l.service))], [leads]);
  const statuses: (LeadStatus | 'All')[] = ['All', 'New', 'Contacted', 'Qualified', 'Converted', 'Lost'];

  // Analytics Calculations
  const stats = useMemo(() => ({
    total: leads.length,
    new: leads.filter(l => l.status === 'New').length,
    converted: leads.filter(l => l.status === 'Converted').length,
    conversionRate: leads.length > 0 ? Math.round((leads.filter(l => l.status === 'Converted').length / leads.length) * 100) : 0
  }), [leads]);

  if (authLoading || (user && loading)) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans">
        <div className="w-16 h-16 border-4 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin mb-6"></div>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] animate-pulse">Syncing Operational Intelligence...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#141414] text-white flex flex-col fixed h-full z-30">
        <div className="p-10 mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center font-black text-xs text-white">GH</div>
            <span className="text-xl font-display font-black tracking-tighter uppercase italic">CRM Alpha</span>
          </div>
          <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em]">Operational Layer 3.0</p>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-4 px-6 py-4 w-full rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'leads' ? 'bg-white text-brand-navy shadow-2xl shadow-white/10' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
          >
            <Users size={16} /> Pipeline
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-4 px-6 py-4 w-full rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'analytics' ? 'bg-white text-brand-navy shadow-2xl shadow-white/10' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
          >
            <BarChart3 size={16} /> Data View
          </button>
        </nav>

        <div className="p-8 border-t border-white/5">
          <div className="flex items-center gap-4 px-4 mb-8">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
              <span className="text-xs font-black text-brand-gold">{user.email?.[0].toUpperCase()}</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-black uppercase tracking-widest truncate">{user.email?.split('@')[0]}</p>
              <p className="text-[8px] text-white/20 font-bold uppercase tracking-widest">Master Admin</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 w-full py-4 bg-red-500/10 text-red-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/5 group"
          >
            <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" /> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-grow min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-black text-brand-navy uppercase tracking-tighter mb-1">
              {activeTab === 'leads' ? 'Lead Intelligence' : 'Market Analysis'}
            </h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <Globe size={10} /> Real-time Ingress Synchronization Active
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                type="text" 
                placeholder="Search Identity..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-gold/5 focus:border-brand-gold/20 transition-all w-64"
              />
            </div>
            <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-brand-gold hover:border-brand-gold/20 transition-all shadow-sm">
              <Bell size={18} />
            </button>
          </div>
        </header>

        <div className="p-10 space-y-10">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <Users size={24} />
              </div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Total Ingress</p>
              <h3 className="text-4xl font-display font-black text-brand-navy tracking-tight">{stats.total}</h3>
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 text-[9px] font-bold text-blue-500 uppercase">
                <TrendingUp size={10} /> Lifetime Capture
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
                <Clock size={24} />
              </div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Pending Intake</p>
              <h3 className="text-4xl font-display font-black text-brand-navy tracking-tight">{stats.new}</h3>
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 text-[9px] font-bold text-amber-500 uppercase">
                 Awaiting Contact
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Total Conversion</p>
              <h3 className="text-4xl font-display font-black text-brand-navy tracking-tight">{stats.converted}</h3>
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 text-[9px] font-bold text-green-500 uppercase">
                 Success Missions
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 bg-brand-navy">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-6">
                <Award size={24} />
              </div>
              <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">Success Rate</p>
              <h3 className="text-4xl font-display font-black text-white tracking-tight">{stats.conversionRate}%</h3>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-bold text-brand-gold uppercase">
                 Efficiency Index
              </div>
            </motion.div>
          </div>

          {activeTab === 'leads' ? (
            <section className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                    <Filter size={14} className="text-slate-400" />
                    <select 
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-500 focus:outline-none cursor-pointer"
                    >
                      {statuses.map(s => <option key={s} value={s}>{s === 'All' ? 'Pipeline Status' : s}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                    <Globe size={14} className="text-slate-400" />
                    <select 
                      value={serviceFilter}
                      onChange={(e) => setServiceFilter(e.target.value)}
                      className="bg-transparent text-[10px] font-black uppercase tracking-widest text-slate-500 focus:outline-none cursor-pointer"
                    >
                      {services.map(s => <option key={s} value={s}>{s === 'All' ? 'Target Service' : s}</option>)}
                    </select>
                  </div>
                </div>
                
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  Showing {filteredLeads.length} Operational Units
                </p>
              </div>

              {/* Lead Table */}
              <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-100">
                        <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Identity</th>
                        <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Service Area</th>
                        <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                        <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Capture Date</th>
                        <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Operations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <AnimatePresence>
                        {filteredLeads.map((lead) => (
                          <motion.tr 
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={lead.id} 
                            className="group hover:bg-slate-50/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedLead(lead)}
                          >
                            <td className="p-8">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-brand-navy text-xs uppercase group-hover:bg-brand-gold group-hover:text-white transition-all">
                                  {lead.name[0]}
                                </div>
                                <div>
                                  <p className="text-xs font-black text-brand-navy uppercase mb-1">{lead.name}</p>
                                  <p className="text-[10px] text-slate-400 font-bold lowercase">{lead.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-8">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{lead.service}</span>
                            </td>
                            <td className="p-8">
                              <div className="flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full ${
                                  lead.status === 'New' ? 'bg-amber-400' :
                                  lead.status === 'Contacted' ? 'bg-blue-400' :
                                  lead.status === 'Qualified' ? 'bg-purple-400' :
                                  lead.status === 'Converted' ? 'bg-green-500' :
                                  'bg-red-400'
                                } shadow-sm animate-pulse`}></span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy">{lead.status}</span>
                              </div>
                            </td>
                            <td className="p-8">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {lead.createdAt ? (typeof (lead.createdAt as any).toDate === 'function' ? (lead.createdAt as any).toDate().toLocaleDateString() : new Date(lead.createdAt).toLocaleDateString()) : 'N/A'}
                              </p>
                            </td>
                            <td className="p-8 text-right">
                              <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                <button 
                                  onClick={() => handleUpdateStatus(lead.id, 'Contacted')}
                                  className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm"
                                  title="Mark Contacted"
                                >
                                  <Phone size={14} />
                                </button>
                                <button 
                                  onClick={() => handleUpdateStatus(lead.id, 'Converted')}
                                  className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-green-500 hover:border-green-200 transition-all shadow-sm"
                                  title="Convert Lead"
                                >
                                  <Award size={14} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteLead(lead.id)}
                                  className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-red-500 hover:border-red-200 transition-all shadow-sm"
                                  title="Purge Intel"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>

                {filteredLeads.length === 0 && (
                  <div className="p-24 text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="text-slate-200" size={32} />
                    </div>
                    <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.3em]">No Operational Records Found</p>
                  </div>
                )}
              </div>
            </section>
          ) : (
            <section className="space-y-10">
              <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-2xl font-display font-black text-brand-navy uppercase tracking-tighter">System Intelligence Breakdown</h2>
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-4 py-2 bg-brand-gold/5 rounded-xl">Alpha 1.0</span>
                </div>
                
                <div className="h-80 w-full mb-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={statuses.filter(s => s !== 'All').map(s => ({ 
                      name: s, 
                      count: leads.filter(l => l.status === s).length 
                    }))}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 800 }} 
                        dy={10}
                      />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
                      />
                      <Bar dataKey="count" radius={[10, 10, 0, 0]} barSize={40}>
                        {statuses.filter(s => s !== 'All').map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={
                            entry === 'New' ? '#fbbf24' :
                            entry === 'Contacted' ? '#60a5fa' :
                            entry === 'Qualified' ? '#a855f7' :
                            entry === 'Converted' ? '#22c55e' :
                            '#f87171'
                          } />
                        ))}
                      </Bar>
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-50">
                  <div className="space-y-8">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4 flex items-center gap-2">
                       <TrendingUp size={14} /> Pipeline Velocity
                    </h3>
                    {statuses.filter(s => s !== 'All').map(status => {
                      const count = leads.filter(l => l.status === status).length;
                      const pct = leads.length > 0 ? (count / leads.length) * 100 : 0;
                      return (
                        <div key={status} className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-brand-navy">{status}</span>
                            <span className="text-slate-400">{count} Units ({Math.round(pct)}%)</span>
                          </div>
                          <div className="h-4 bg-slate-50 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              className={`h-full rounded-full ${
                                status === 'New' ? 'bg-amber-400' :
                                status === 'Contacted' ? 'bg-blue-400' :
                                status === 'Qualified' ? 'bg-purple-400' :
                                status === 'Converted' ? 'bg-green-500' :
                                'bg-red-400'
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                 </div>

                 <div className="space-y-8">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4 flex items-center gap-2">
                       <Globe size={14} /> Service Interest Matrix
                    </h3>
                    {services.filter(s => s !== 'All').map(service => {
                      const count = leads.filter(l => l.service === service).length;
                      const pct = leads.length > 0 ? (count / leads.length) * 100 : 0;
                      return (
                        <div key={service} className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-brand-navy">{service}</span>
                            <span className="text-slate-400">{count} Units</span>
                          </div>
                          <div className="h-4 bg-slate-50 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              className="h-full bg-brand-navy/10 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                 </div>
               </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10 md:p-12">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-3xl font-display font-black text-brand-navy uppercase tracking-tighter mb-1">Entity Intel</h3>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Ref ID: {selectedLead.id.slice(0, 8)}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="p-4 bg-slate-50 text-slate-400 hover:text-brand-navy rounded-2xl transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-10 border-b border-slate-100 pb-10">
                  <div className="space-y-6">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-2">Subject Name</label>
                      <p className="text-xl font-black text-brand-navy uppercase">{selectedLead.name}</p>
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-2">Communication</label>
                      <div className="space-y-2">
                        <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-brand-gold transition-colors">
                          <Mail size={14} className="text-slate-300" /> {selectedLead.email}
                        </a>
                        <a href={`tel:${selectedLead.phone}`} className="flex items-center gap-3 text-xs font-bold text-slate-600 hover:text-brand-gold transition-colors">
                          <Phone size={14} className="text-slate-300" /> {selectedLead.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-2">Service Context</label>
                      <span className="inline-block px-4 py-2 bg-brand-navy text-white text-[9px] font-black uppercase tracking-widest rounded-xl">
                        {selectedLead.service}
                      </span>
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-2">Current Lifecycle</label>
                      <select 
                        value={selectedLead.status}
                        onChange={(e) => {
                          const val = e.target.value as LeadStatus;
                          handleUpdateStatus(selectedLead.id, val);
                          setSelectedLead({...selectedLead, status: val});
                        }}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-widest text-brand-navy focus:outline-none"
                      >
                        {statuses.filter(s => s !== 'All').map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-3">Transmission Message</label>
                  <div className="bg-slate-50 rounded-2xl p-6 text-xs font-bold text-slate-600 leading-relaxed border border-slate-100 italic">
                    "{selectedLead.message || 'No additional mission details provided.'}"
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="flex-grow py-5 bg-brand-navy text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-black transition-all"
                  >
                    Hold Intelligence
                  </button>
                  <button 
                    onClick={() => {
                      handleDeleteLead(selectedLead.id);
                      setSelectedLead(null);
                    }}
                    className="p-5 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
