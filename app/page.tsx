"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import ScrollTextSection from "@/components/ScrollTextSection";

export default function Home() {
  const countries = [
    { name: "USA", code: "us" },
    { name: "Canada", code: "ca" },
    { name: "India", code: "in" },
    { name: "Pakistan", code: "pk" },
    { name: "Greece", code: "gr" },
    { name: "Japan", code: "jp" },
    { name: "UAE", code: "ae" },
    { name: "Ghana", code: "gh" },
    { name: "Nigeria", code: "ng" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            crossOrigin="anonymous"
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/djrdh7thl/video/upload/v1768330462/Untitled-2_icd2xt.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-24 left-0 right-0 z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            YOUTH FORGE
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* What is Youth Forge Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          {/* Top Row - Subheading and Main Heading side by side */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-16">
            {/* Left - Subheading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-3"
            >
              <span className="text-black font-bold">▬</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-black">
                What is Youth Forge?
              </span>
            </motion.div>

            {/* Right - Main Heading */}
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight"
            >
              A global research org uncovering challenges young entrepreneurs face.
            </motion.h2>
          </div>

          {/* Bottom Row - Images, Description, Flags (smaller scale) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content - Smaller text and image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:max-w-md"
            >
              {/* Smaller Image - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 hidden lg:block"
              >
                <Image
                  src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332542/EDYN9_ew0crh.png"
                  alt="Youth Forge community"
                  width={400}
                  height={240}
                  className="rounded object-cover w-full"
                />
              </motion.div>

              {/* Description - Smaller text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base text-gray-600 leading-relaxed mb-8"
              >
                We bridge data gaps for young founders to break systemic age barriers in innovation across policy tables, age restrictions for mentorship resources, and networking opportunities and funding access.
              </motion.p>

              {/* Countries Section */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-black mb-4">
                  Already engaging with founders from
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={country.name}
                        width={50}
                        height={34}
                        className="rounded-sm shadow-md border border-gray-200"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bigger Image - Mobile Only (after flags) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 lg:hidden"
              >
                <Image
                  src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg"
                  alt="Young entrepreneurs collaborating"
                  width={700}
                  height={500}
                  className="rounded object-cover w-full"
                />
              </motion.div>
            </motion.div>

            {/* Right Image - Larger (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-full"
            >
              <Image
                src="https://res.cloudinary.com/djrdh7thl/image/upload/v1768332531/image2_tdasui.jpg"
                alt="Young entrepreneurs collaborating"
                width={700}
                height={900}
                className="rounded object-cover w-full h-full sticky top-24"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* White Space */}
      <div className="h-16 lg:h-24 bg-white"></div>

      {/* Scroll Text Over Images Section */}
      <ScrollTextSection />

      {/* CTA Section - Ready to Contribute */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-black mb-12 sm:mb-16 uppercase tracking-tighter leading-[0.85]"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              READY TO CONTRIBUTE TO RESEARCH THAT UPLIFTS?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://forms.gle/pR3r11pRsuguAks26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all text-lg"
              >
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
