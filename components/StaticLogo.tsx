'use client';

import Image from 'next/image';

export default function StaticLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/logo-new.png"
        alt="Youth Forge Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
