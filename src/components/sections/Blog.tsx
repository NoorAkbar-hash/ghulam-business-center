import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "New Qatar Labor Law Updates 2026: What You Need to Know",
    excerpt: "Stay ahead of regulatory changes with our deep dive into the latest labor law reforms in Qatar...",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    date: "May 5, 2026",
    readTime: "5 min read",
    category: "Regulations"
  },
  {
    title: "How to Choose the Right Business Structure for Your Startup",
    excerpt: "LLC, Branch, or Representative Office? We compare the pros and cons to help you make the best choice...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    date: "April 28, 2026",
    readTime: "8 min read",
    category: "Startup Advice"
  },
  {
    title: "The Future of Free Zones in Qatar: Opportunities and Growth",
    excerpt: "Exploring the strategic advantages of setting up your business in Qatar's specialized free zones...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    date: "April 15, 2026",
    readTime: "6 min read",
    category: "Investment"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4">Latest Insights</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">Corporate Intelligence & <span className="text-brand-gold">News</span></h2>
              <p className="text-slate-600 text-lg mt-6">
                Stay updated with the latest trends and legal shifts in the Qatari business landscape.
              </p>
            </motion.div>
          </div>
          <button className="hidden md:flex items-center gap-3 text-brand-navy font-bold uppercase tracking-widest text-sm group">
            View All Insights
            <div className="w-10 h-10 rounded-full border-2 border-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-navy text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-brand-gold" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-brand-gold" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-slate-50">
                  <button className="flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-xs group/btn">
                    Read More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform text-brand-gold" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="bg-brand-navy text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
