/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import OrderForm from "./components/OrderForm";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <main className="min-h-screen hero-gradient selection:bg-brand-green/30">
      <Hero />
      <ProductDetails />
      <OrderForm />
      
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
