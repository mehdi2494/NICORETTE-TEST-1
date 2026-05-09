import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/212612236863?text=سلام، بغيت نطلب NICORETTE"
      className="fixed bottom-8 left-8 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(34,197,94,0.4)] relative">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          محتاج مساعدة؟ تواصل معنا
        </span>
      </div>
    </motion.a>
  );
}
