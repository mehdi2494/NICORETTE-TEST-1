import { motion } from "motion/react";
import { Package, Send, MapPin, Phone, User, Gift, CheckCircle2 } from "lucide-react";
import ThreeDTilt from "./ThreeDTilt";
import { useState, FormEvent } from "react";

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("الاسم");
    const phone = formData.get("رقم الهاتف");
    const city = formData.get("المدينة");
    const address = formData.get("العنوان");
    const flavor = formData.get("المذاق");
    const dosage = formData.get("الجرعة");

    const message = `*طلب جديد من الموقع* 🛒%0A%0A` +
      `*الاسم:* ${name}%0A` +
      `*الهاتف:* ${phone}%0A` +
      `*المدينة:* ${city}%0A` +
      `*العنوان:* ${address}%0A` +
      `*المذاق:* ${flavor}%0A` +
      `*الجرعة:* ${dosage}%0A` +
      `*المنتج:* NICORETTE 30 Gums`;

    const whatsappUrl = `https://wa.me/212612236863?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Show Thank You Page
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-16 rounded-[60px] border-brand-green/20 bg-brand-green/5"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-brand-green p-6 rounded-full shadow-[0_0_50px_rgba(0,255,149,0.5)]">
              <CheckCircle2 className="w-16 h-16 text-black" />
            </div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6">شكراً على طلبك!</h2>
          <p className="text-2xl text-gray-300 leading-loose max-w-2xl mx-auto">
            لقد تم إرسال طلبك بنجاح عبر الواتساب. سيقوم فريقنا بالتواصل معك قريباً لتأكيد المعلومات وإرسال المنتج.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-12 text-brand-green font-bold text-xl hover:underline"
          >
            الرجوع للمتجر
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="order" className="max-w-4xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-brand-green/20 text-brand-green px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest mb-6"
        >
          <Gift className="w-5 h-5" />
          عرض محدود: توصيل مجاني اليوم
        </motion.div>
        <h2 className="text-5xl lg:text-7xl font-black mb-6">عمر المعلومات ديالك</h2>
        <p className="text-gray-400 text-xl lg:text-2xl">الدفع عند الاستلام والتوصيل مجاني 100%</p>
      </div>

      <ThreeDTilt className="z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 lg:p-16 rounded-[60px] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            {/* Price Badge */}
            <div className="flex justify-center mb-4" style={{ transform: "translateZ(60px)" }}>
              <div className="bg-brand-green/10 border border-brand-green/20 px-10 py-6 rounded-[40px] text-center shadow-2xl backdrop-blur-xl">
                <span className="block text-gray-400 text-lg mb-1">الثمن الإجمالي:</span>
                <span className="text-7xl font-black text-brand-green drop-shadow-[0_0_15px_rgba(0,255,149,0.3)]">289 DH</span>
                <span className="block text-sm mt-2 text-gray-500 font-bold uppercase tracking-widest">تحتوي على 30 حبة</span>
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="space-y-6" style={{ transform: "translateZ(40px)" }}>
              <label className="text-2xl font-black pr-4 block">اختار المذاق اللي بغيتي:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {["نعناع طري", "فواكه", "ثلج أبيض"].map((flavor) => (
                  <label key={flavor} className="cursor-pointer group">
                    <input type="radio" name="المذاق" value={flavor} className="peer hidden" defaultChecked={flavor === "نعناع طري"} />
                    <div className="glass p-6 rounded-3xl text-center font-bold text-xl peer-checked:bg-brand-green peer-checked:text-white peer-checked:scale-105 transition-all duration-300 group-hover:bg-white/10 border-white/5 border peer-checked:border-brand-green shadow-xl">
                      {flavor}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Dosage Selection */}
            <div className="space-y-6" style={{ transform: "translateZ(40px)" }}>
              <label className="text-2xl font-black pr-4 block">اختار الجرعة:</label>
              <div className="grid grid-cols-2 gap-6">
                <label className="cursor-pointer group">
                  <input type="radio" name="الجرعة" value="2mg" className="peer hidden" defaultChecked />
                  <div className="glass p-8 rounded-[40px] text-center peer-checked:border-brand-green peer-checked:ring-4 peer-checked:ring-brand-green/20 peer-checked:scale-105 transition-all duration-300 group-hover:bg-white/10 shadow-xl border-white/5 border">
                    <span className="block font-black text-4xl">2mg</span>
                    <span className="text-sm font-bold text-gray-400 mt-2 block">لي يدخن قل من 20</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input type="radio" name="الجرعة" value="4mg" className="peer hidden" />
                  <div className="glass p-8 rounded-[40px] text-center peer-checked:border-brand-blue peer-checked:ring-4 peer-checked:ring-brand-blue/20 peer-checked:scale-105 transition-all duration-300 group-hover:bg-white/10 shadow-xl border-white/5 border">
                    <span className="block font-black text-4xl">4mg</span>
                    <span className="text-sm font-bold text-gray-400 mt-2 block">لي يدخن أكثر من 20</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
              <div className="relative group">
                <User className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green w-6 h-6 transition-colors" />
                <input
                  type="text"
                  name="الاسم"
                  placeholder="الاسم الكامل"
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl pr-16 pl-8 py-7 text-xl focus:border-brand-green focus:outline-none transition-all placeholder:text-gray-600 font-bold"
                />
              </div>

              <div className="relative group">
                <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green w-6 h-6 transition-colors" />
                <input
                  type="tel"
                  name="رقم الهاتف"
                  placeholder="رقم الهاتف"
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl pr-16 pl-8 py-7 text-xl focus:border-brand-green focus:outline-none transition-all placeholder:text-gray-600 font-bold"
                />
              </div>

              <div className="relative group">
                <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-green w-6 h-6 transition-colors" />
                <input
                  type="text"
                  name="المدينة"
                  placeholder="المدينة"
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl pr-16 pl-8 py-7 text-xl focus:border-brand-green focus:outline-none transition-all placeholder:text-gray-600 font-bold"
                />
              </div>

              <div className="relative group">
                <textarea
                  name="العنوان"
                  placeholder="العنوان الكامل"
                  required
                  rows={4}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl px-8 py-7 text-xl focus:border-brand-green focus:outline-none transition-all placeholder:text-gray-600 font-bold resize-none"
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full py-8 rounded-[40px] flex items-center justify-center gap-5 text-3xl shadow-[0_20px_60px_rgba(0,255,149,0.4)]"
              style={{ transform: "translateZ(50px)" }}
            >
              <Package className="w-9 h-9" />
              تأكيد الطلب دابا
            </motion.button>
          </form>

          <div className="flex items-center justify-center gap-3 text-gray-500 mt-12 text-lg">
            <Send className="w-6 h-6 text-brand-green" />
            سيتم الاتصال بك في أقل من 24 ساعة لتأكيد الطلب
          </div>
        </motion.div>
      </ThreeDTilt>
    </section>
  );
}
