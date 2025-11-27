'use client';

export default function StaticLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe */}
      <circle cx="40" cy="50" r="25" fill="#619bb6" opacity="0.9"/>
      
      {/* Longitude lines */}
      <ellipse cx="40" cy="50" rx="15" ry="25" fill="none" stroke="#004e66" strokeWidth="1"/>
      <ellipse cx="40" cy="50" rx="8" ry="25" fill="none" stroke="#004e66" strokeWidth="1"/>
      <ellipse cx="40" cy="50" rx="25" ry="15" fill="none" stroke="#004e66" strokeWidth="1"/>
      
      {/* Magnifying glass */}
      <circle cx="60" cy="45" r="20" fill="rgba(139, 196, 224, 0.2)" stroke="#004e66" strokeWidth="2.5"/>
      <line x1="73" y1="58" x2="85" y2="70" stroke="#004e66" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Chart bars inside magnifier */}
      <rect x="52" y="50" width="3" height="8" fill="#7BC043"/>
      <rect x="56" y="47" width="3" height="11" fill="#EF3E36"/>
      <rect x="60" y="43" width="3" height="15" fill="#0074D9"/>
      <rect x="64" y="38" width="3" height="20" fill="#FFDC00"/>
      
      {/* Upward arrow */}
      <path d="M 65.5 35 L 63 38 L 68 38 Z" fill="#FFDC00" stroke="#004e66" strokeWidth="0.5"/>
    </svg>
  );
}
