"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ScrollItem {
  image: string;
  text: string;
}

const items: ScrollItem[] = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    text: "Systemic Change",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
    text: "Ages 13 - 18",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
    text: "Data Driven",
  },
];

function ParallaxSlide({ item, index }: { item: ScrollItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [textY, setTextY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the viewport this section is
      // When section top is at viewport bottom: progress = 0
      // When section is centered: progress = 0.5  
      // When section bottom is at viewport top: progress = 1
      const progress = 1 - (rect.top + rect.height) / (windowHeight + rect.height);
      
      // Convert progress to Y offset - text moves DOWN as you scroll down
      // Range: 150px above center to 150px below center
      const offset = (progress - 0.5) * 300;
      setTextY(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={ref}
      className="h-screen sticky top-0 overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.text}
          fill
          className="object-cover"
          priority={index === 0}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Parallax text - moves as you scroll, clipped by overflow:hidden */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tight text-center px-4 will-change-transform"
          style={{ 
            transform: `translateY(${textY}px)`,
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
          }}
        >
          {item.text}
        </h2>
      </div>
    </div>
  );
}

export default function ScrollTextSection() {
  return (
    <section className="relative" style={{ backgroundColor: '#000080' }}>
      {items.map((item, index) => (
        <ParallaxSlide key={index} item={item} index={index} />
      ))}
    </section>
  );
}
