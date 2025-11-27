'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LogoAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
      {/* Globe - Base Layer - Centered */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
        animate={{ scale: 1, opacity: 0.3, x: '-50%', y: '-30%' }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image 
          src="/globe-svgrepo-com.svg" 
          alt="Globe" 
          width={320}
          height={320}
          className="w-64 md:w-80 h-64 md:h-80"
          priority
        />
      </motion.div>

      {/* Magnifying Glass - Overlapping on the right side of globe */}
      <motion.div
        className="absolute"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ 
          scale: 1, 
          rotate: 0
        }}
        transition={{ 
          duration: 1.2, 
          delay: 0.3,
          ease: "easeOut"
        }}
        style={{ 
          left: '50%', 
          top: '50%',
          transform: 'translate(-10%, -260%)'
        }}
      >
        <div className="relative w-40 md:w-48 h-40 md:h-48">
          <Image 
            src="/magnifying-glass-svgrepo-com.svg" 
            alt="Magnifying Glass" 
            width={192}
            height={192}
            className="w-full h-full"
            priority
          />
          
          {/* Bar Chart inside magnifying glass lens - Centered */}
          <motion.div
            className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-14 md:w-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <Image 
              src="/bar-chart-svgrepo-com.svg" 
              alt="Chart" 
              width={64}
              height={64}
              className="w-full h-full"
            />
            
            {/* Accent colored bars overlay with loop animation */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center gap-[2px] pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.div 
                className="w-1 bg-[#7BC043] rounded-sm"
                animate={{ height: ['16px', '20px', '16px'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div 
                className="w-1 bg-[#EF3E36] rounded-sm"
                animate={{ height: ['20px', '28px', '20px'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div 
                className="w-1 bg-[#0074D9] rounded-sm"
                animate={{ height: ['28px', '36px', '28px'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </motion.div>

            {/* Trend arrow - centered above chart with subtle float */}
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10"
              initial={{ y: 5, opacity: 0 }}
              animate={{ 
                y: [0, -3, 0], 
                opacity: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: 2 },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Image 
                src="/trend-up-thin-svgrepo-com.svg" 
                alt="Trend Up" 
                width={40}
                height={40}
                className="w-full h-full"
                style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(89%) saturate(458%) hue-rotate(359deg) brightness(104%) contrast(104%)' }}
              />
            </motion.div>
          </motion.div>

          {/* Circular orbiting dots - repositioned */}
          <motion.div
            className="absolute top-[70%] left-[60%] w-20 h-20 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-yf-accent-green rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-yf-accent-blue rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-yf-accent-red rounded-full -translate-x-1/2" />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated data points/paths visible through magnifying glass */}
      <motion.div
        className="absolute"
        style={{ 
          left: '50%', 
          top: '50%',
          transform: 'translate(10%, -50%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? [0.2, 0.6, 0.2] : 0.4 }}
        transition={{ duration: 2.5, repeat: isAnimating ? Infinity : 0, delay: 2 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-yf-blue-200">
          <circle cx="15" cy="30" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="30" cy="20" r="2.5" fill="currentColor" />
          <circle cx="45" cy="25" r="2" fill="currentColor" opacity="0.7" />
          <path 
            d="M15 30 Q 22 25, 30 20 T 45 25" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Pulse effect from center */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [1, 1.3, 1.3],
          opacity: [0, 0.15, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(55, 115, 141, 0.4) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  )
}
