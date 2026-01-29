import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light = white text (for dark bg), dark = dark text (for light bg)
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  const primaryColor = "#0284c7"; // Brand primary blue
  const accentColor = "#38bdf8"; // Brand accent light blue
  const textColor = variant === 'light' ? "#ffffff" : "#0f172a"; // White or Slate 900
  const subTextColor = variant === 'light' ? "#ffffff" : primaryColor; // White for light variant, primary blue for dark variant

  return (
    <svg 
      viewBox="0 0 250 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Paul's Roofing Logo"
    >
      {/* Main Roof Structure */}
      <path 
        d="M 50 50 L 100 20 L 150 50 L 150 70 L 100 40 L 50 70 Z" 
        fill={primaryColor} 
      />
      <path 
        d="M 120 50 L 170 20 L 220 50 L 220 70 L 170 40 L 120 70 Z" 
        fill={accentColor} 
      />

      {/* Roof edges / contrast lines */}
      <path 
        d="M50 50 L100 20 L150 50 M120 50 L170 20 L220 50" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.8"
      />
      <path 
        d="M100 20 L170 20" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.8"
      />


      {/* Windows - Left house */}
      <rect x="75" y="40" width="10" height="10" fill="white" />
      <rect x="88" y="40" width="10" height="10" fill="white" />
      
      {/* Windows - Right house */}
      <rect x="180" y="40" width="10" height="10" fill="white" />
      <rect x="193" y="40" width="10" height="10" fill="white" />

      {/* Text: PAUL'S */}
      <text 
        x="135" 
        y="95" 
        textAnchor="middle" 
        fill={textColor} 
        fontFamily="Inter, sans-serif" 
        fontWeight="800" 
        fontSize="30"
        letterSpacing="1"
      >
        PAUL'S
      </text>

      {/* Text: ROOFING .CA */}
      <text 
        x="135" 
        y="115" 
        textAnchor="middle" 
        fill={subTextColor} 
        fontFamily="Inter, sans-serif" 
        fontWeight="bold" 
        fontSize="14"
        letterSpacing="3"
      >
        ROOFING .CA
      </text>
      
      {/* Underline for ROOFING */}
      <line x1="80" y1="110" x2="110" y2="110" stroke={subTextColor} strokeWidth="2" />
      <line x1="160" y1="110" x2="190" y2="110" stroke={subTextColor} strokeWidth="2" />
    </svg>
  );
};