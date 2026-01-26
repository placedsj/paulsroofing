import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light = white text (for dark bg), dark = dark text (for light bg)
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'light' }) => {
  const primaryColor = "#0284c7"; // Sky 600
  const textColor = variant === 'light' ? "#ffffff" : "#0f172a"; // White or Slate 900
  const subTextColor = primaryColor;

  return (
    <svg 
      viewBox="0 0 300 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Paul's Roofing Logo"
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Roof Graphics */}
      <g transform="translate(0, 10)">
        {/* Left Roof Peak */}
        <path 
          d="M80 70 L130 30 L180 70" 
          stroke={primaryColor} 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M80 70 L130 30 L180 70" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          opacity="0.3"
        />
        
        {/* Right Roof Peak (Offset) */}
        <path 
          d="M160 70 L195 42 L230 70" 
          stroke={primaryColor} 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />

        {/* Windows Left (2x2) */}
        <rect x="115" y="48" width="8" height="8" fill={primaryColor} />
        <rect x="126" y="48" width="8" height="8" fill={primaryColor} />
        <rect x="115" y="59" width="8" height="8" fill={primaryColor} />
        <rect x="126" y="59" width="8" height="8" fill={primaryColor} />
        
        {/* Windows Right (2x2) */}
        <rect x="182" y="52" width="6" height="6" fill={primaryColor} />
        <rect x="191" y="52" width="6" height="6" fill={primaryColor} />
        <rect x="182" y="61" width="6" height="6" fill={primaryColor} />
        <rect x="191" y="61" width="6" height="6" fill={primaryColor} />
        
        {/* Swoosh Under Left Roof */}
        <path 
          d="M90 75 Q130 90 170 75" 
          stroke="white" 
          strokeWidth="3" 
          fill="none" 
          opacity={variant === 'light' ? 0.9 : 0}
        />
      </g>

      {/* Text: PAUL'S */}
      <text 
        x="150" 
        y="115" 
        textAnchor="middle" 
        fill={textColor} 
        fontFamily="Arial, Helvetica, sans-serif" 
        fontWeight="900" 
        fontSize="42"
        letterSpacing="1"
        style={{ textShadow: variant === 'light' ? '0px 2px 4px rgba(0,0,0,0.5)' : 'none' }}
      >
        PAUL'S
      </text>

      {/* Text: ROOFING */}
      <g transform="translate(0, 5)">
        <text 
          x="150" 
          y="135" 
          textAnchor="middle" 
          fill={subTextColor} 
          fontFamily="Arial, Helvetica, sans-serif" 
          fontWeight="bold" 
          fontSize="14"
          letterSpacing="4"
        >
          ROOFING
        </text>
        
        {/* Accent Lines */}
        <line x1="85" y1="130" x2="105" y2="130" stroke={subTextColor} strokeWidth="2" />
        <line x1="195" y1="130" x2="215" y2="130" stroke={subTextColor} strokeWidth="2" />
      </g>
    </svg>
  );
};
