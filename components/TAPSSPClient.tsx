"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Code2,
  FileText,
  Cpu,
  Users,
  GraduationCap,
  Palette,
  Globe,
  Rocket,
  Clock,
  CheckCircle2,
} from "lucide-react";

/* ── animated counter ─────────────────────────────────────────────── */
function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
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
          const dur = 1600;
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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── parallax hero ────────────────────────────────────────────────── */
function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-end overflow-hidden"
    >
      {/* bg image with parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
          alt="Summer Projects Program"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000080]/70 via-[#000080]/50 to-black/80" />
      </motion.div>

      {/* floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${5 + ((i * 6.3) % 90)}%`,
              top: `${10 + ((i * 8.1) % 80)}%`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{
              repeat: Infinity,
              duration: 3.5 + (i % 3),
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* hero content */}
      <motion.div
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pb-20"
        style={{ opacity }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs font-bold uppercase tracking-widest text-white/60 block mb-4"
        >
          ▬ Summer 2026 &middot; Coming Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          SUMMER
          <br />
          PROJECTS
          <br />
          PROGRAM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed"
        >
          A cross-disciplinary mentorship initiative by The Accelerators Program
          &times; Youth Forge.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ── main component ───────────────────────────────────────────────── */
export default function TAPSSPClient() {
  const tracks = [
    {
      icon: Code2,
      title: "SOFTWARE ENGINEERING",
      description:
        "Build real products alongside experienced engineers — web, mobile, or systems.",
    },
    {
      icon: Cpu,
      title: "QUANTUM & AI",
      description:
        "Explore cutting-edge research in quantum computing, machine learning, and AI safety.",
    },
    {
      icon: FileText,
      title: "POLICY & RESEARCH",
      description:
        "Draft policy papers, conduct market research, and shape advocacy efforts.",
    },
    {
      icon: Palette,
      title: "DESIGN & EDUCATION",
      description:
        "Create impactful learning experiences, brand identities, and outreach campaigns.",
    },
    {
      icon: Globe,
      title: "COMMUNITY BUILDING",
      description:
        "Grow ecosystems, organise events, and connect youth innovators across borders.",
    },
    {
      icon: Users,
      title: "BLOCKCHAIN & DATA",
      description:
        "Work on decentralised systems, smart contracts, and data science projects.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "APPLICATIONS OPEN",
      description:
        "Browse available projects, find a mentor match, and submit your application.",
      icon: Rocket,
    },
    {
      num: "02",
      title: "MENTOR SELECTION",
      description:
        "Mentors review applications and may conduct short interviews to build their team.",
      icon: Users,
    },
    {
      num: "03",
      title: "PROJECT KICKOFF",
      description:
        "Shadow your mentor, tackle a real project with a clear goal, and ship results by summer's end.",
      icon: GraduationCap,
    },
  ];

  const eligibility = [
    "Open to students and young professionals from the broader community",
    "Technical and non-technical tracks available — no coding requirement",
    "Projects have a clear Definition of Done and designated mentor",
    "Short, high-impact projects designed for completion within the summer",
    "Some projects may offer stipends (financial or utility support) — details listed per project",
  ];

  return (
    <div className="overflow-hidden bg-white">
      <ParallaxHero />

      {/* ── Overview Section ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(0, 0, 128, 0.4)" }}
              >
                ▬ What Is SSP
              </span>
            </motion.div>

            {/* Right — content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  color: "#000080",
                }}
              >
                SHADOW. BUILD. SHIP.
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "rgba(0, 0, 128, 0.6)" }}
              >
                The TAP Summer Projects Program is a broad, cross-disciplinary
                initiative that pairs students with mentors from partner
                organisations across the globe. Shadow experienced professionals
                as they complete real projects — from quantum computing to policy
                writing, from blockchain to community building.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(0, 0, 128, 0.6)" }}
              >
                Projects are not limited to any single field. Whether you&apos;re
                technical or non-technical, there&apos;s a track for you. Every
                project has a clear deliverable, a designated mentor, and is
                designed for high-impact completion over the summer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width Parallax Divider ──────────────────────────── */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Students collaborating"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 128, 0.6)" }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tighter text-center"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            REAL PROJECTS.
            <br />
            REAL MENTORS.
          </motion.h2>
        </div>
      </section>

      {/* ── Tracks Grid ──────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32 text-white"
        style={{ backgroundColor: "#000080" }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              ▬ Project Tracks
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mt-4"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              CHOOSE YOUR PATH
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="p-8 lg:p-10"
                  style={{ backgroundColor: "#000080" }}
                >
                  <Icon className="w-8 h-8 text-white/40 mb-4" />
                  <h3
                    className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-3"
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    {track.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {track.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(0, 0, 128, 0.4)" }}
            >
              ▬ How It Works
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <span
                    className="text-7xl sm:text-8xl font-black tracking-tighter block mb-4"
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      color: "rgba(0, 0, 128, 0.08)",
                    }}
                  >
                    {step.num}
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5" style={{ color: "#000080" }} />
                    <h3
                      className="text-xl sm:text-2xl font-black uppercase tracking-tighter"
                      style={{
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        color: "#000080",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(0, 0, 128, 0.6)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full-width image divider ─────────────────────────────── */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Mentorship in action"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter text-center"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            DECENTRALISED. GLOBAL.
            <br />
            HIGH-IMPACT.
          </motion.h2>
        </div>
      </section>

      {/* ── Eligibility & Details ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest block mb-6"
                style={{ color: "rgba(0, 0, 128, 0.4)" }}
              >
                ▬ Who Can Apply
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  color: "#000080",
                }}
              >
                BUILT FOR BUILDERS
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(0, 0, 128, 0.6)" }}
              >
                Whether you&apos;re a coder, designer, researcher, or community
                organiser — if you&apos;re ready to spend a summer working on
                something that matters, this program is for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <ul className="space-y-5">
                {eligibility.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: "#000080" }}
                    />
                    <span
                      className="text-base leading-relaxed"
                      style={{ color: "rgba(0, 0, 128, 0.7)" }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20"
        style={{
          backgroundColor: "#000080",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 6, suffix: "+", label: "Project Tracks" },
              { value: 10, suffix: "+", label: "Partner Orgs" },
              { value: 1, suffix: "", label: "Summer" },
              { value: 100, suffix: "%", label: "Youth-Led" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter"
                  style={{
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-xs sm:text-sm uppercase tracking-widest mt-2 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAP Logo + Partnership ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <Image
                src="https://res.cloudinary.com/djrdh7thl/image/upload/v1772441428/GradientTAP_wppa34.png"
                alt="The Accelerators Program"
                width={280}
                height={280}
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest block mb-6"
                style={{ color: "rgba(0, 0, 128, 0.4)" }}
              >
                ▬ A Partnership
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  color: "#000080",
                }}
              >
                THE ACCELERATORS PROGRAM
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "rgba(0, 0, 128, 0.6)" }}
              >
                This program is run in collaboration with The Accelerators Program
                (TAP) and a network of global partner organisations. Projects and
                mentors are sourced through these partners to ensure diverse,
                high-quality opportunities across disciplines.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(0, 0, 128, 0.6)" }}
              >
                Youth Forge is proud to be a founding partner of the inaugural
                SSP edition — connecting our community of young builders to
                mentorship opportunities that matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA / Coming Soon ────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32"
        style={{ borderTop: "1px solid rgba(0, 0, 128, 0.1)" }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-6"
              style={{ color: "rgba(0, 0, 128, 0.4)" }}
            >
              ▬ Summer 2026
            </span>

            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6"
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                color: "#000080",
              }}
            >
              LAUNCHING SOON
            </h2>

            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ color: "rgba(0, 0, 128, 0.6)" }}
            >
              Applications and the full project database will be announced
              shortly. Stay connected to be the first to apply.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/engage"
                  className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg transition-all"
                  style={{ backgroundColor: "#000080" }}
                >
                  Stay Updated
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 px-10 py-5 font-semibold text-lg transition-all border-2"
                  style={{ borderColor: "#000080", color: "#000080" }}
                >
                  Learn About Us
                </a>
              </motion.div>
            </div>

            {/* TAP + YF lockup */}
            <div className="mt-16 flex items-center justify-center gap-6 opacity-40">
              <Image
                src="https://res.cloudinary.com/djrdh7thl/image/upload/v1772441428/GradientTAP_wppa34.png"
                alt="TAP"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#000080" }}
              >
                &times; Youth Forge
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
