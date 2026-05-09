import { motion } from "motion/react";
import { Zap, ShieldCheck, Heart, UserCheck, Clock, Info, Check } from "lucide-react";

const features = [
  {
    title: "مفعول سريع",
    desc: "أول علكة تزول رغبة التدخين في دقائق معدودة.",
    icon: <Zap className="w-10 h-10 text-brand-green" />,
  },
  {
    title: "وفير واقتصادي",
    desc: "انقص التدخين بأقل من 20 درهم في النهار. وفر صحتك وفلوسك.",
    icon: <ShieldCheck className="w-10 h-10 text-brand-green" />,
  },
  {
    title: "حركة بديلة",
    desc: "تعوض ليك حركة التدخين، وكتخلي فمك مشغول باش تنسى الكارو.",
    icon: <Heart className="w-10 h-10 text-brand-green" />,
  },
  {
    title: "مجرب وفعال",
    desc: "ينصح به خبراء الصحة عالمياً كأسرع طريقة للإقلاع.",
    icon: <UserCheck className="w-10 h-10 text-brand-green" />,
  },
];

const steps = [
  "علكها حتى تحس بمذاق قوي ولا شوية ديال التنميل.",
  "حطها بين حنكك واللثة لمدة 10 دقايق باش تطلق النيكوتين.",
  "ملي يبرد المذاق، عاود علكها بشوية (تقريبا 20 مرة في 20 دقيقة).",
  "خلي العلكة فمك مدة 30 دقيقة فالمجموع باش تستافد منها كاملة.",
];

export default function ProductDetails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      {/* FEATURES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-10 rounded-[40px] text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              {f.icon}
            </div>
            <h3 className="text-2xl font-black mb-4">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* HOW TO USE */}
      <div className="mt-24 group">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-[60px] p-8 lg:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* 3D Decorative Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-4xl lg:text-5xl font-black mb-10 flex items-center gap-4">
                <Clock className="w-12 h-12 text-brand-green" />
                كيفاش تستعملها؟
              </h3>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group/step">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green text-black font-black flex items-center justify-center flex-shrink-0 text-2xl shadow-[0_0_20px_rgba(0,255,149,0.3)] group-hover/step:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed pt-1 font-medium select-none">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 glass p-8 rounded-[30px] border-brand-blue/20 bg-brand-blue/10 backdrop-blur-3xl">
                <p className="text-brand-blue text-lg font-bold flex items-center gap-4">
                  <Info className="w-6 h-6 flex-shrink-0" />
                  بروتوكول فعال: ما تفوتش 30 دقيقة فالعلكة حيت مداقها كيمشي موراها وما كيبقاش إفراز للنيكوتين.
                </p>
              </div>
            </div>
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5, perspective: 1000 }}
              className="relative transition-all duration-500"
            >
              <img 
                src="input_file_1.png" 
                alt="Usage Illustration"
                className="rounded-[50px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
              />
              <div className="absolute inset-0 rounded-[50px] bg-linear-to-tr from-brand-green/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* DOSAGE & PROGRAM */}
      <div className="grid lg:grid-cols-2 gap-12 mt-24">
        {/* DOSAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[50px] border-white/10 shadow-2xl"
        >
          <h3 className="text-3xl lg:text-4xl font-black mb-12 border-r-4 border-brand-green pr-6 flex items-center gap-4">
            الجرعة المناسبة
          </h3>
          <div className="grid gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] flex items-center gap-8 hover:bg-white/10 transition-colors">
              <div className="bg-white text-black px-8 py-3 rounded-2xl font-black text-4xl shadow-xl">2mg</div>
              <div>
                <p className="font-black text-2xl mb-2">للناس لي يدخن قل من 20</p>
                <p className="text-gray-400 text-lg">سيجارة فاليوم. (ما تفوتش 30 لكل نهار)</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] flex items-center gap-8 hover:bg-white/10 transition-colors">
              <div className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-black text-4xl shadow-xl">4mg</div>
              <div>
                <p className="font-black text-2xl mb-2">للناس لي يدخن أكثر من 20</p>
                <p className="text-gray-400 text-lg">سيجارة فاليوم. (ما تفوتش 15 لكل نهار)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROGRAM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[50px]"
        >
          <h3 className="text-3xl font-black mb-10 border-r-4 border-brand-blue pr-6">
            برنامج التوقف
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1"><Check className="text-brand-green w-6 h-6" /></div>
              <p className="text-lg leading-relaxed">خد علكة كل مرة حسيتي برغبة فالتدخين (بمعدل 8 لـ 12 فاليوم فالمرحلة الأولى).</p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Check className="text-brand-green w-6 h-6" /></div>
              <p className="text-lg leading-relaxed">نقص عدد العلكات تدريجياً كل أسبوع حتى توصل لـ 1 أو 2 فاليوم.</p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><Check className="text-brand-green w-6 h-6" /></div>
              <p className="text-lg leading-relaxed">بإمكانك تعويض السجائر السهلة بالعلكة كأول خطوة فالتوقف التدريجي.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TESTIMONIAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 glass p-10 rounded-[50px] max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-brand-green/20">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Customer"
          />
        </div>
        <div className="text-center md:text-right">
          <div className="flex gap-1 justify-center md:justify-start mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-orange-500 text-2xl">★</span>
            ))}
          </div>
          <p className="text-xl italic text-gray-300 leading-relaxed mb-4">
            &quot;استعملت هادو مع اللصاقات (patches) و بجوج عاونوني بزاف. ملي تنحس برغبة كنعلك وحدة وهاديك الرغبة كبرد، كنصحكم بيهم.&quot;
          </p>
          <span className="font-black text-brand-green">Riddler - Home Tester Club</span>
        </div>
      </motion.div>
    </section>
  );
}
