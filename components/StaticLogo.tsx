'use client';

export default function StaticLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe (left side) */}
      <g transform="translate(50, 100) scale(0.15)">
        <circle cx="0" cy="0" r="250" fill="#6BB5D9"/>
        <path fill="#7AC943" d="M-100,-200 Q-50,-100,0,0 Q50,100,100,200 L100,-200 Z"/>
        <path fill="#7AC943" d="M-200,-50 Q-100,0,0,50 Q100,100,200,150 L-200,150 Z"/>
      </g>
      
      {/* Magnifying Glass */}
      <circle cx="130" cy="90" r="45" fill="rgba(154, 205, 230, 0.15)" stroke="#2D627A" strokeWidth="5"/>
      <line x1="160" y1="120" x2="185" y2="145" stroke="#2D627A" strokeWidth="8" strokeLinecap="round"/>
      
      {/* Chart bars inside magnifier */}
      <g transform="translate(110, 105)">
        <rect x="0" y="0" width="8" height="20" fill="#7BC043" rx="1"/>
        <rect x="12" y="-8" width="8" height="28" fill="#EF3E36" rx="1"/>
        <rect x="24" y="-16" width="8" height="36" fill="#50A5DC" rx="1"/>
        <rect x="36" y="-26" width="8" height="46" fill="#FFDC00" rx="1"/>
      </g>
      
      {/* Upward trend arrow */}
      <path d="M 148 68 L 144 74 L 152 74 Z" fill="#FFDC00" stroke="#2D627A" strokeWidth="1"/>
    </svg>
  );
}
