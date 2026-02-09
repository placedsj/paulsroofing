import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const primary = "#0284c7";
  const accent = "#38bdf8";
  const text = variant === 'light' ? "#ffffff" : "#0f172a";
  const subText = variant === 'light' ? "#ffffff" : primary;

  return (
    <svg 
      viewBox="0 0 300 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Abstract Structural Icon */}
      <g filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.05))">
        {/* Main Ridge */}
        <path 
          d="M40 60 L100 25 L160 60 L160 85 L100 50 L40 85 Z" 
          fill={primary} 
        />
        <path 
          d="M110 60 L170 25 L230 60 L230 85 L170 50 L110 85 Z" 
          fill={accent} 
        />
        {/* Accent Cap */}
        <path 
          d="M100 25 L170 25" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
      </g>

      {/* Brand Text Elements */}
      <text 
        x="135" 
        y="100" 
        fill={text} 
        fontFamily="Inter, sans-serif" 
        fontWeight="900" 
        fontSize="34"
        letterSpacing="-1.5"
      >
        PAUL'S
      </text>

      <text 
        x="135" 
        y="120" 
        fill={subText} 
        fontFamily="Inter, sans-serif" 
        fontWeight="800" 
        fontSize="12"
        letterSpacing="5.5"
      >
        ROOFING.CA
      </text>

      {/* Precision Marker */}
      <rect x="100" y="114" width="20" height="2" fill={subText} opacity="0.4" />
      <rect x="230" y="114" width="20" height="2" fill={subText} opacity="0.4" />
    </svg>
  );
};