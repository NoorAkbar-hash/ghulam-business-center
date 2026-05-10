import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to register a company in Qatar?",
    answer: "Typically, the process takes between 2 to 4 weeks, depending on the legal structure and current government processing times. Our 'Fast Track' services can often expedite this."
  },
  {
    question: "Do I need a local Qatari partner for my business?",
    answer: "Since the introduction of the new foreign investment laws, many sectors now allow 100% foreign ownership. However, some activities still require a local partner (51% Qatari, 49% Foreign). We provide complete consultancy on which structure applies to you."
  },
  {
    question: "What are the benefits of setting up in a Free Zone?",
    answer: "Free Zones like QFZA offer benefits such as 100% foreign ownership, 0% corporate tax for up to 20 years, 0% personal income tax, and full repatriation of capital and profits."
  },
  {
    question: "What PRO services do you offer?",
    answer: "Our PRO services cover work visas, family residency permits, CR renewals, municipal license approvals, Chamber of Commerce registration, and all other governmental paperwork."
  }
];

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string, answer: string, isOpen: boolean, toggle: () => void, key?: React.Key }) => {
  return (
    <div className={`mb-4 border border-slate-200 rounded-2xl overflow-hidden transition-all ${isOpen ? 'bg-white shadow-xl shadow-slate-200/50' : 'bg-slate-50'}`}>
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={`text-lg font-bold font-display ${isOpen ? 'text-brand-gold' : 'text-brand-navy'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-slate-200 text-brand-navy'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4">Frequently Asked Questions</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">Got Questions? <br />We Have <span className="text-brand-gold">Answers</span></h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                If you don't find what you're looking for, please feel free to reach out to our consulting team.
              </p>
              <div className="bg-brand-navy p-8 rounded-[2rem] text-white">
                <div className="bg-brand-gold/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <HelpCircle className="text-brand-gold" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Still Unsure?</h4>
                <p className="text-white/60 mb-6 text-sm">Schedule a 15-minute discovery call with our advisors.</p>
                <button className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:translate-x-2 transition-transform">
                  Contact Support 
                  <span className="text-white">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="max-w-2xl ml-auto">
              {faqs.map((faq, i) => (
                <FAQItem 
                  key={i} 
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i} 
                  toggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
