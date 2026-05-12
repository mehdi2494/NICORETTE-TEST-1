/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, lazy, Suspense } from "react";
import { ShoppingCart } from "lucide-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Lazy load components below the fold
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const OrderForm = lazy(() => import("./components/OrderForm"));
const FAQ = lazy(() => import("./components/FAQ"));

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowSticky(window.scrollY > 800);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main dir="rtl" className="min-h-screen hero-gradient selection:bg-brand-green/30">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">جاري التحميل...</div>}>
        <ProductDetails />
        <OrderForm />
        <FAQ />
      </Suspense>
      
      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-6 left-6 right-6 z-40 lg:hidden"
          >
            <a
              href="#order"
              className="btn-primary w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-xl font-black shadow-[0_20px_50px_rgba(0,255,149,0.4)]"
            >
              <ShoppingCart className="w-6 h-6" />
              اطلب دابا
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-white/5 mx-6">
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} NICORETTE Maroc - جميع الحقوق محفوظة
        </p>
        <p className="text-xs mt-2">
          منتج NICORETTE هو وسيلة للمساعدة على الإقلاع عن التدخين. استشر الطبيب إذا كنت تعاني من أمراض مزمنة.
        </p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
