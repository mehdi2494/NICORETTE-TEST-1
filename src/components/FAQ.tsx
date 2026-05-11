import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "واش هاد العلكة غادي تقطع ليا الكارو نهائيا؟",
    a: "نيكوريت كتعاونك تنقص الرغبة فالتدخين والأعراض ديال الانسحاب من النيكوتين. إلى تبعتي البرنامج اللي كاين فالبواطة والتزمتي، غتقدر تقطع الكارو تدريجيا وبلا معاناة.",
  },
  {
    q: "شحال من علكة نقدر ناخد فاليوم؟",
    a: "فالعادة كيبدا الواحد بـ 8 لـ 12 العلكة فاليوم. ولكن ما تفوتش 30 علكة فاليوم بالنسبة للـ 2mg و15 علكة بالنسبة للـ 4mg.",
  },
  {
    q: "واش التوصيل مجاني؟",
    a: "نعم، التوصيل فابور لجميع المدن المغربية والدفع كيكون حتى كتوصل بالمنتج وتشوفه بيديك.",
  },
  {
    q: "شحال كتستغرق مدة التوصيل؟",
    a: "بين 24 و 48 ساعة كيوصلك الطلب حتى لباب الدار.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-24 text-right">
      <h2 className="text-4xl lg:text-6xl font-black mb-16 text-center">أسئلة متكررة</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass rounded-[30px] overflow-hidden border-white/5">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full p-8 flex items-center justify-between gap-4 text-2xl font-bold hover:bg-white/5 transition-colors flex-row-reverse"
            >
              <span className="flex-1">{faq.q}</span>
              <div className={`p-2 rounded-xl transition-all duration-300 ${openIdx === i ? 'bg-brand-green text-black' : 'bg-white/10'}`}>
                {openIdx === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </div>
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 pt-0 text-xl text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
