import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-1000">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(0,255,149,0.4)]">
            N
          </div>
          <span className="text-2xl font-black tracking-tighter">NICORETTE</span>
        </div>
        
        <div className="flex items-center gap-4 lg:gap-8">
          <a href="#faq" className="hidden sm:block text-sm font-bold hover:text-brand-green transition-colors">أسئلة شائعة</a>
          <a href="#order" className="hidden sm:block text-sm font-bold hover:text-brand-green transition-colors">اطلب الآن</a>
          <a href="https://wa.me/212612236863" className="glass p-2 px-4 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all">
            <MessageCircle className="w-5 h-5 text-brand-green" />
            <span className="font-bold text-sm hidden sm:inline">مساعدة</span>
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#order"
            className="btn-primary px-6 py-2.5 rounded-xl text-sm font-black shadow-lg"
          >
            اطلب الآن
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
