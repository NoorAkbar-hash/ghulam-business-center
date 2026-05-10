import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../../constants';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT_DETAILS.whatsapp}?text=${encodeURIComponent(CONTACT_DETAILS.whatsappMsg)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:opacity-50"></div>
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
        Chat with our experts
      </div>
    </motion.a>
  );
}
