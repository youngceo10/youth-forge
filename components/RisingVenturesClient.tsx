"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Lightbulb, Calendar, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ── animated counter ─────────────────────────────────────────────── */
function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 4);
            setCount(Math.round(ease * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ── parallax hero background ─────────────────────────────────────── */
function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[110vh] flex items-center justify-center overflow-hidden">
      {/* bg image with parallax */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
          alt="Rising Ventures"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000080]/80 via-[#000080]/60 to-black/80" />
      </motion.div>

      {/* floating particles / decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{ left: `${5 + (i * 4.7) % 90}%`, top: `${10 + (i * 7.3) % 80}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 + (i % 3), delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* hero content */}
      <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Applications Open</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-white/50 mb-4"
        >
          Youth Forge presents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.85]"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          RISING
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">VENTURES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          We&rsquo;re giving <span className="text-white font-bold">$15,000</span> to the next generation of founders reshaping the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#000080] font-bold text-lg rounded-none uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <a
            href="#details"
            className="inline-flex items-center gap-2 px-10 py-5 border border-white/30 text-white font-semibold text-lg rounded-none uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── main component ───────────────────────────────────────────────── */
export default function RisingVenturesClient() {
  const prizeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: prizeProg } = useScroll({ target: prizeRef, offset: ["start end", "end start"] });
  const prizeY = useTransform(prizeProg, [0, 1], [80, -80]);

  const timelineSteps = [
    { icon: Lightbulb, title: "Apply", desc: "Submit your startup or NGO — idea stage to post-launch." },
    { icon: Users, title: "Review", desc: "Applications reviewed by Y Combinator-backed judges." },
    { icon: Trophy, title: "Win", desc: "Winners share a prize pool of $15,000 in funding." },
  ];

  const eligibility = [
    "Open to startups and NGOs at any stage — idea, prototype, or scaling",
    "Founders of any age — we believe innovation has no age limit",
    "Solo founders and teams are both welcome",
    "Global applications accepted — no geographic restrictions",
    "Must demonstrate real-world impact or a clear plan for it",
  ];

  return (
    <div className="overflow-hidden bg-white">
      <ParallaxHero />

      {/* ── $15K Prize Banner ─────────────────────────────────────── */}
      <section ref={prizeRef} id="details" className="relative py-32 lg:py-44 overflow-hidden" style={{ backgroundColor: "#000080" }}>
        {/* large floating number in bg */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ y: prizeY }}
        >
          <span
            className="text-[20rem] sm:text-[28rem] lg:text-[36rem] font-black text-white/[0.03] leading-none tracking-tighter"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            $15K
          </span>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-6"
          >
            ▬ Prize Pool
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tighter leading-none"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              $<Counter target={15} />K
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-xl sm:text-2xl text-white/60 max-w-xl mx-auto"
          >
            In prizes distributed to startups and NGOs making a real-world impact.
          </motion.p>

          {/* prize cards */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { place: "1st", amount: "$8,000", color: "from-yellow-300/20 to-yellow-600/10" },
              { place: "2nd", amount: "$4,500", color: "from-gray-300/20 to-gray-400/10" },
              { place: "3rd", amount: "$2,500", color: "from-amber-600/20 to-amber-800/10" },
            ].map((p, i) => (
              <motion.div
                key={p.place}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className={`bg-gradient-to-b ${p.color} border border-white/10 rounded-sm p-8`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">{p.place} Place</span>
                <p className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tighter" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                  {p.amount}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — Timeline ───────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest block mb-4"
            style={{ color: "rgba(0,0,128,0.4)" }}
          >
            ▬ How It Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-20"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: "#000080" }}
          >
            THREE STEPS TO
            <br />
            FUNDING YOUR VISION
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="relative"
              >
                {/* step number */}
                <span
                  className="text-[8rem] font-black leading-none tracking-tighter text-[#000080]/[0.06] absolute -top-10 -left-4 select-none"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {i + 1}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-6" style={{ backgroundColor: "#000080" }}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-3"
                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: "#000080" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(0,0,128,0.55)" }}>
                    {step.desc}
                  </p>
                </div>

                {/* connector line (not on last) */}
                {i < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-[#000080]/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width parallax divider ───────────────────────────── */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Founders collaborating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#000080]/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter text-center leading-[0.9]"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            JUDGED BY MAJOR
            <br />
            Y COMBINATOR FOUNDERS
          </motion.h2>
        </div>
      </section>

      {/* ── Eligibility ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-widest block mb-4"
                style={{ color: "rgba(0,0,128,0.4)" }}
              >
                ▬ Who Can Apply
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: "#000080" }}
              >
                WHETHER YOU&rsquo;RE IN THE IDEA STAGE OR ALREADY BUILDING
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
                style={{ color: "rgba(0,0,128,0.55)" }}
              >
                We don&rsquo;t care how far along you are. If you have a vision for positive impact and the drive to make it happen, you&rsquo;re eligible.
              </motion.p>
            </div>

            <div className="flex flex-col gap-5">
              {eligibility.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-5 border border-[#000080]/10 rounded-sm hover:border-[#000080]/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#000080" }} />
                  <p className="text-base leading-relaxed" style={{ color: "rgba(0,0,128,0.7)" }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ─────────────────────────────────────────────── */}
      <section className="py-16 border-y" style={{ borderColor: "rgba(0,0,128,0.1)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 15, prefix: "$", suffix: "K", label: "Prize Pool" },
              { value: 9, prefix: "", suffix: "+", label: "Countries" },
              { value: 3, prefix: "", suffix: "", label: "Winners" },
              { value: 100, prefix: "", suffix: "%", label: "Youth-Led" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p
                  className="text-4xl sm:text-5xl font-black tracking-tighter"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: "#000080" }}
                >
                  <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest" style={{ color: "rgba(0,0,128,0.4)" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Apply ───────────────────────────────────────────── */}
      <section id="apply" className="py-32 lg:py-44" style={{ backgroundColor: "#000080" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-6">
              ▬ Applications Open
            </span>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              YOUR VISION
              <br />
              DESERVES FUNDING
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Comment <span className="text-white font-bold">#RisingVentures</span> on our socials to get the application link, or apply directly below.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://forms.gle/pR3r11pRsuguAks26"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#000080] font-bold text-lg uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <a
                href="/engage"
                className="inline-flex items-center gap-2 px-10 py-6 border border-white/30 text-white font-semibold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Other Ways to Engage
              </a>
            </div>

            <p className="mt-12 text-sm text-white/30 uppercase tracking-widest">
              #RisingVentures &mdash; Powered by Youth Forge
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
