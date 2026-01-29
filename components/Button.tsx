import React from 'react';

type BaseButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'redCta'; // Added 'redCta'
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = (props) => {
  const { 
    children, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    className = '',
    ...rest 
  } = props;
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-sky-700 text-white shadow-lg shadow-sky-900/20 focus:ring-sky-500",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white shadow-lg shadow-slate-900/20 focus:ring-slate-500", // Adjusted for light background context
    redCta: "bg-brand-red hover:bg-brand-red-dark text-white shadow-lg shadow-red-900/20 focus:ring-red-500", // New Red CTA variant
    outline: "bg-transparent border-2 border-slate-400 text-slate-700 hover:bg-slate-700 hover:text-white focus:ring-slate-500" // Adjusted for light background context
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const width = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

  if ('href' in rest && rest.href) {
    return (
      <a 
        className={combinedClassName}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};