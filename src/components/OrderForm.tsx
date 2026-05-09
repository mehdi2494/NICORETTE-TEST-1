import { motion } from "motion/react";
import { Package, Send, MapPin, Phone, User } from "lucide-react";

export default function OrderForm() {
  return (
    <section id="order" className="max-w-3xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-[40px] p-8 lg:p-12"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-4">
            اطلب دابا و خلص ملي يوصلك الطلب
          </h2>
          <p className="text-gray-400 text-lg">
            توصيل مجاني لجميع المدن المغربية 🇲🇦
          </p>
        </div>

        <form
          action="https://formsubmit.co/elmehdilunch@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Form Configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="🔥 New Commande NICORETTE" />
          <input type="hidden" name="المنتج" value="NICORETTE 2 Plaques (30 Gums)" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://formsubmit.co/thanks" />

          {/* Price Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-brand-green/10 border border-brand-green/20 px-8 py-4 rounded-3xl text-center">
              <span className="block text-gray-400 text-sm mb-1">الثمن الإجمالي:</span>
              <span className="text-5xl font-black text-brand-green">289 DH</span>
              <span className="block text-xs mt-1 text-gray-500">التوصيل فابور + الخلاص عند الاستلام</span>
            </div>
          </div>

          {/* Flavor Selection */}
          <div className="space-y-4">
            <label className="text-2xl font-black pr-2">اختر المذاق:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["نعناع طري", "فواكه", "ثلج أبيض"].map((flavor) => (
                <label key={flavor} className="cursor-pointer group">
                  <input type="radio" name="المذاق" value={flavor} className="peer hidden" defaultChecked={flavor === "نعناع طري"} />
                  <div className="glass p-5 rounded-2xl text-center font-bold text-lg peer-checked:bg-brand-green peer-checked:text-white peer-checked:scale-105 transition-all duration-300 group-hover:bg-white/10 border-white/5 border peer-checked:border-brand-green shadow-xl">
                    {flavor}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Dosage Selection */}
          <div className="space-y-4 mt-8">
            <label className="text-2xl font-black pr-2">اختر الجرعة:</label>
            <div className="grid grid-cols-2 gap-6">
              <label className="cursor-pointer group">
                <input type="radio" name="الجرعة" value="2mg" className="peer hidden" defaultChecked />
                <div className="glass p-6 rounded-3xl text-center peer-checked:border-brand-green peer-checked:ring-4 peer-checked:ring-brand-green/20 peer-checked:scale-105 transition-all duration-300 group-hover:bg-white/10 shadow-xl border-white/5 border">
                  <span className="block font-black text-3xl">2mg</span>
                  <span className="text-sm font-bold text-gray-400 mt-2 block">لي يدخن قل من 20</span>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="الجرعة" value="4mg" className="peer hidden" />
                <div className="glass p-6 rounded-3xl text-center peer-checked:border-brand-blue peer-checked:ring-4 peer-checked:ring-brand-blue/20 peer-checked:scale-105 transition-all duration-300 group-hover:bg-white/10 shadow-xl border-white/5 border">
                  <span className="block font-black text-3xl">4mg</span>
                  <span className="text-sm font-bold text-gray-400 mt-2 block">لي يدخن أكثر من 20</span>
                </div>
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="relative">
            <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="الاسم"
              placeholder="الاسم الكامل"
              required
              className="input w-full pr-14 pl-5 py-5 rounded-2xl text-lg"
            />
          </div>

          <div className="relative">
            <Phone className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="الهاتف"
              placeholder="رقم الهاتف"
              required
              className="input w-full pr-14 pl-5 py-5 rounded-2xl text-lg"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="المدينة"
              placeholder="المدينة"
              required
              className="input w-full pr-14 pl-5 py-5 rounded-2xl text-lg"
            />
          </div>

          <div className="relative">
            <textarea
              name="العنوان"
              placeholder="العنوان الكامل"
              required
              rows={4}
              className="input w-full p-5 rounded-2xl text-lg resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-6 rounded-2xl flex items-center justify-center gap-3 text-2xl"
          >
            <Package className="w-8 h-8" />
            تأكيد الطلب
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          بالضغط على تأكيد الطلب، فإنك توافق على شروط الاستخدام وسياسة الخصوصية الخاصة بنا.
        </p>
      </motion.div>
    </section>
  );
}
