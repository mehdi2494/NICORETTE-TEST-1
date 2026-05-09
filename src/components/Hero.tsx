import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, ArrowDown } from "lucide-react";
import ThreeDTilt from "./ThreeDTilt";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative overflow-hidden">
      {/* Background Orbs for Depth */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-brand-green/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-brand-blue/10 blur-[100px] rounded-full animate-bounce-slow pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            توصيل مجاني لجميع المدن المغربية 🇲🇦
          </div>

          <h1 className="text-5xl lg:text-8xl font-black leading-tight tracking-tight">
            ماشي عيب تكون تدخن...
            <br />
            <span className="text-brand-green drop-shadow-[0_0_20px_rgba(0,255,149,0.5)] text-6xl lg:text-9xl">العيب هو تبقى.</span>
          </h1>

          <p className="text-gray-300 mt-10 text-xl lg:text-2xl leading-loose max-w-xl">
            <span className="font-bold text-white">NICORETTE</span> كيساعدك تنقص التدخين بطريقة تدريجية وعملية.
            آلاف المغاربة بداو حياة جديدة، دابا دورك!
          </p>

          <div className="flex gap-5 mt-12 flex-wrap">
            <a
              href="#order"
              className="btn-primary px-12 py-5 rounded-2xl text-2xl flex items-center gap-3 group"
            >
              اطلب دابا
              <ArrowDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/212612236863?text=سلام، بغيت نطلب NICORETTE"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/10 transition-all text-xl"
            >
              <MessageCircle className="w-7 h-7 text-brand-green fill-brand-green/20" />
              واتساب
            </a>
          </div>

          {/* TRUST INDICATORS */}
          <div className="grid grid-cols-2 gap-4 mt-16">
            {[
              "الدفع عند الاستلام",
              "توصيل مجاني وسريع",
              "منتج أصلي 100%",
              "دعم فني 24/7",
            ].map((text) => (
              <div key={text} className="glass p-5 rounded-3xl flex items-center gap-4 group hover:bg-white/10 transition-colors">
                <div className="bg-brand-green/10 p-2 rounded-xl group-hover:bg-brand-green group-hover:text-black transition-all">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PRODUCT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <ThreeDTilt className="w-full max-w-[500px]">
            <div className="glass glow rounded-[60px] p-10 lg:p-12 relative z-10 border-white/15 bg-white/[0.03] backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <div className="relative group perspective-1000">
                <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-4">
                  {[
                    "input_file_0.png",
                    "input_file_1.png",
                    "input_file_2.png"
                  ].map((src, idx) => (
                    <div key={idx} className="snap-center shrink-0 w-full">
                      <img
                        src={src}
                        alt={`NICORETTE Product ${idx + 1}`}
                        className="w-full rounded-[40px] shadow-2xl brightness-110 border border-white/20 object-cover aspect-square"
                        referrerPolicy="no-referrer"
                        style={{ transform: "translateZ(80px)" }}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="absolute -top-10 -right-10 bg-brand-green text-black font-black px-10 py-5 rounded-[30px] shadow-[0_20px_50px_rgba(0,255,149,0.4)] transform rotate-12 text-3xl z-30" style={{ transform: "translateZ(120px) rotateZ(12deg)" }}>
                  وفر 161 DH
                </div>

                <div className="flex justify-center gap-3 mt-6">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-brand-green/30"></div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center relative z-20" style={{ transform: "translateZ(60px)" }}>
                <h2 className="text-6xl font-black tracking-tighter mb-4 text-white">NICORETTE</h2>
                <div className="flex flex-col gap-3">
                  <span className="text-brand-green font-black text-3xl tracking-wide uppercase">30 Gommes</span>
                  <p className="text-gray-400 text-xl font-medium">أفضل وسيلة للتوقف التدريجي عن التدخين</p>
                </div>
                
                <div className="flex items-center justify-center gap-6 mt-10">
                  <span className="text-4xl text-gray-500 line-through font-bold decoration-red-500/50">450 DH</span>
                  <div className="text-8xl font-black text-brand-green flex items-baseline gap-3 drop-shadow-[0_0_20px_rgba(0,255,149,0.4)]">
                    289 <span className="text-3xl font-bold">DH</span>
                  </div>
                </div>
              </div>
            </div>
          </ThreeDTilt>
        </motion.div>
      </div>
    </section>
  );
}
