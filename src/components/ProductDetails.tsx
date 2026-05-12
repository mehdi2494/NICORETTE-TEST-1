import { motion } from "motion/react";
import { Zap, ShieldCheck, Heart, UserCheck, Clock, Info, Check, Sparkles } from "lucide-react";
import ThreeDTilt from "./ThreeDTilt";

const features = [
  {
    title: "مفعول سريع",
    desc: "أول علكة تزول رغبة التدخين في دقائق معدودة.",
    icon: <Zap className="w-10 h-10 text-brand-green" />,
  },
  {
    title: "اقتصادية بزاف",
    desc: "انقص التدخين بأقل من 20 درهم في النهار. وفر صحتك وفلوسك.",
    icon: <ShieldCheck className="w-10 h-10 text-brand-green" />,
  },
  {
    title: "حل طبيعي",
    desc: "تعوض ليك حركة التدخين، وكتخلي فمك مشغول باش تنسى الكارو.",
    icon: <Heart className="w-10 h-10 text-brand-green" />,
  },
  {
    title: "جودة أصلية",
    desc: "منتج NICORETTE العالمي، معروف بفعاليته المضمونة.",
    icon: <Sparkles className="w-10 h-10 text-brand-green" />,
  },
];

const steps = [
  "علكها بشوية حتى يولي المذاق قوي (أو تحس بتنميل).",
  "حط العلكة بين حنكك واللثة وخليها ترتاح.",
  "ملي يبرد المذاق، عاود علكها بشوية. كمل بهاد الطريقة لمدة 30 دقيقة تقريبا.",
  "من بعد هاد الوقت، العلكة غتفقد المفعول ديالها، تخلص منها بطريقة مناسبة.",
];

export default function ProductDetails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* FEATURES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass p-10 rounded-[40px] text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group bg-white/[0.02]"
          >
            <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              {f.icon}
            </div>
            <h3 className="text-2xl font-black mb-4">{f.title}</h3>
            <p className="text-gray-400 font-medium leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* HOW TO USE */}
      <div className="mt-24 group">
        <ThreeDTilt>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white/[0.02] rounded-[60px] p-8 lg:p-20 border border-white/10 backdrop-blur-3xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 text-right">
              <div>
                <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-12 flex items-center justify-end gap-6" style={{ transform: "translateZ(40px)" }}>
                  كيفاش تستعملها؟
                  <Clock className="w-16 h-16 text-brand-green" />
                </h3>
                <div className="space-y-10" style={{ transform: "translateZ(30px)" }}>
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-8 items-start group/step flex-row-reverse">
                      <div className="w-14 h-14 rounded-2xl bg-brand-green text-black font-black flex items-center justify-center flex-shrink-0 text-3xl shadow-[0_0_30px_rgba(0,255,149,0.4)] group-hover/step:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed pt-1 font-medium select-none w-full">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-14 glass p-10 rounded-[40px] border-brand-blue/20 bg-brand-blue/10 backdrop-blur-3xl shadow-xl flex flex-row-reverse gap-5 text-right" style={{ transform: "translateZ(50px)" }}>
                  <Info className="w-8 h-8 flex-shrink-0 text-brand-blue mt-1" />
                  <p className="text-brand-blue text-xl font-black">
                    بروتوكول فعال: ما تفوتش 30 دقيقة فالعلكة حيت مداقها كيمشي موراها وما كيبقاش إفراز للنيكوتين.
                  </p>
                </div>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative transition-all duration-700 h-full"
                style={{ transform: "translateZ(60px)" }}
              >
                <img 
                  src="https://m.media-amazon.com/images/I/71xpuwcATyL._AC_SX600_.jpg" 
                  alt="Nicorette Icy White"
                  className="rounded-[60px] shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/20 brightness-110 object-contain w-full bg-white/5"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-[60px] bg-linear-to-tr from-brand-green/20 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>
          </motion.div>
        </ThreeDTilt>
      </div>

      {/* DOSAGE & PROGRAM */}
      <div className="grid lg:grid-cols-2 gap-12 mt-24">
        <ThreeDTilt>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[60px] border-white/10 shadow-2xl h-full bg-white/[0.03]"
          >
            <h3 className="text-4xl font-black mb-12 border-l-8 border-brand-green pl-8 flex items-center gap-4" style={{ transform: "translateZ(40px)" }}>
              الجرعة المناسبة
            </h3>
            <div className="grid gap-8" style={{ transform: "translateZ(30px)" }}>
              <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[40px] flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-10 hover:bg-white/10 transition-all group text-right">
                <div className="bg-white text-black px-10 py-5 rounded-3xl font-black text-5xl shadow-2xl group-hover:scale-110 transition-transform">2mg</div>
                <div className="w-full">
                  <p className="font-black text-3xl mb-2">للناس لي كيكميو 20 سيجارة أو أقل</p>
                  <p className="text-gray-400 text-xl font-medium tracking-wide">علكة وحدة 2mg ملي تحس بالرغبة. (ما تفوتش 30 علكة فاليوم)</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[40px] flex flex-col sm:flex-row-reverse items-center gap-6 sm:gap-10 hover:bg-white/10 transition-all group text-right">
                <div className="bg-orange-500 text-white px-10 py-5 rounded-3xl font-black text-5xl shadow-2xl group-hover:scale-110 transition-transform">4mg</div>
                <div className="w-full">
                  <p className="font-black text-3xl mb-2">للناس لي كيكميو أكثر من 20 سيجارة</p>
                  <p className="text-gray-400 text-xl font-medium tracking-wide">علكة وحدة 4mg ملي تحس بالرغبة. (ما تفوتش 15 علكة فاليوم)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ThreeDTilt>

        {/* PROGRAM */}
        <ThreeDTilt>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[60px] border-white/10 shadow-2xl h-full bg-brand-green/[0.03]"
          >
            <h3 className="text-4xl font-black mb-12 border-l-8 border-brand-blue pl-8" style={{ transform: "translateZ(40px)" }}>
              برنامج التوقف
            </h3>
            <div className="space-y-8" style={{ transform: "translateZ(30px)" }}>
              <div className="flex gap-6 group hover:translate-x-[-8px] transition-transform flex-row-reverse text-right">
                <div className="mt-1 bg-brand-green/20 p-2 rounded-xl h-fit"><Check className="text-brand-green w-8 h-8" /></div>
                <p className="text-2xl leading-relaxed font-medium">خد علكة كل مرة حسيتي برغبة فالتدخين (بمعدل 8 لـ 12 فاليوم فالمرحلة الأولى).</p>
              </div>
              <div className="flex gap-6 group hover:translate-x-[-8px] transition-transform flex-row-reverse text-right">
                <div className="mt-1 bg-brand-green/20 p-2 rounded-xl h-fit"><Check className="text-brand-green w-8 h-8" /></div>
                <p className="text-2xl leading-relaxed font-medium">نقص عدد العلكات تدريجياً كل أسبوع حتى توصل لـ 1 أو 2 فاليوم.</p>
              </div>
              <div className="flex gap-6 group hover:translate-x-[-8px] transition-transform flex-row-reverse text-right">
                <div className="mt-1 bg-brand-green/20 p-2 rounded-xl h-fit"><Check className="text-brand-green w-8 h-8" /></div>
                <p className="text-2xl leading-relaxed font-medium">بإمكانك تعويض السجائر السهلة بالعلكة كأول خطوة فالتوقف التدريجي.</p>
              </div>
            </div>
          </motion.div>
        </ThreeDTilt>
      </div>

      {/* PRODUCT GALLERY */}
      <div className="mt-24">
        <h3 className="text-4xl font-black text-center mb-12">صور المنتج</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "https://m.media-amazon.com/images/I/71xpuwcATyL._AC_SX400_.jpg",
            "https://m.media-amazon.com/images/I/71bukYUQfBL._AC_SX400_.jpg",
            "https://m.media-amazon.com/images/I/81Lt3a9naGL._AC_SX400_.jpg",
            "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2d10ece0-41f8-4eb2-9590-27ef5e3f07c0.__CR0,0,970,600_PT0_SX970_V1___.jpg"
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-2 rounded-[30px] overflow-hidden aspect-square"
            >
              <img 
                src={src} 
                alt={`Nicorette Gallery ${i + 1}`} 
                className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL */}
      <ThreeDTilt className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[60px] max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white/[0.03] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green/20 blur-[60px] rounded-full"></div>
          <div className="w-40 h-40 rounded-[40px] overflow-hidden flex-shrink-0 border-4 border-brand-green/20 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" style={{ transform: "translateZ(50px)" }}>
            <img
              src="https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/564632082_3268301370011076_2625162393052835416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHNCWaD57d3xEEJ-uJN7CsB19zWGUrRb2rX3NYZStFvag88R1ffdeM9iw5epP9bZaiZSrQafNzIIqflKjOG_h29&_nc_ohc=g3rK21E_XBwQ7kNvwFGHnhc&_nc_oc=Adr40erZbt7L27Ul4GS5-qELPsH3IgBpctppjbu3PjKuBbk_KCodDbPTITrETwYAq5c&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&_nc_gid=FC2XL8SQMvIiFMq2G9butA&_nc_ss=7f2a8&oh=00_Af7y0Rts2vCAbfseHCIpzuOYcbUsBDIkK7re7i05F0beGw&oe=6A078F39"
              className="w-full h-full object-cover"
              alt="Hamza - Verified Customer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-center md:text-right relative z-10" style={{ transform: "translateZ(40px)" }}>
            <div className="flex gap-2 justify-center md:justify-start mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Sparkles key={s} className="w-8 h-8 text-orange-500 fill-orange-500" />
              ))}
            </div>
            <p className="text-3xl italic text-gray-200 leading-relaxed mb-6 font-medium">
              &quot;بصراحة هاد العلكة ديال نيكوريت عاوناتني بزاف باش نقطع الكارو. غير كتحس بالرغبة كتكمي كتاخد وحدة وكتمشي ديك اللهفة، كنصح گاع لي بغا يتهنى من التدخين يبدا بها.&quot;
            </p>
            <span className="font-black text-brand-green text-2xl uppercase tracking-widest">Hamza - verified customer</span>
          </div>
        </motion.div>
      </ThreeDTilt>
    </section>
  );
}
