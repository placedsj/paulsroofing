import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Search, Settings } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../constants';
import { Button } from './Button';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll state for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-100/95 backdrop-blur-sm py-2 shadow-md' : 'bg-slate-100 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Paul's Roofing Home" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo className="h-14 w-auto group-hover:scale-105 transition-transform duration-300" variant="dark" /> {/* Changed to dark variant */}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-brand-dark hover:text-brand-primary hover:scale-105 font-medium transition-all text-sm uppercase tracking-wide" {/* Changed text color */}
                onClick={() => document.getElementById(item.href.substring(1))?.scrollIntoView({behavior: 'smooth'})}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search and Settings icons for desktop */}
            <button className="hidden lg:block text-brand-dark hover:text-brand-primary transition-colors p-2 rounded-full hover:bg-slate-200" aria-label="Search"> {/* Changed text/hover colors */}
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden lg:block text-brand-dark hover:text-brand-primary transition-colors p-2 rounded-full hover:bg-slate-200" aria-label="Settings"> {/* Changed text/hover colors */}
              <Settings className="w-5 h-5" />
            </button>

            <div className="hidden md:block">
              <Button 
                href="#visualizer"
                size="sm" 
                variant="primary" // Explicitly use primary blue for desktop estimate
                onClick={() => document.getElementById('visualizer')?.scrollIntoView({behavior: 'smooth'})}
              >
                Free Estimate
              </Button>
            </div>
            
            <button 
              className="md:hidden text-brand-dark p-2 rounded-lg hover:bg-slate-200 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-brand-accent" {/* Changed text/hover colors */}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm z-40 bg-slate-100 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 h-full pb-8 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-brand-dark font-bold text-2xl py-4 border-b border-slate-300 hover:text-brand-primary transition-colors flex justify-between items-center group" {/* Changed text/border colors */}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById(item.href.substring(1))?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {item.label}
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <div className="bg-slate-200/50 p-6 rounded-2xl space-y-4"> {/* Adjusted background */}
              <p className="text-slate-600 text-sm font-medium uppercase tracking-wider">Contact Us Directly</p> {/* Adjusted text color */}
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-3 text-brand-dark text-xl font-bold"> {/* Adjusted text color */}
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary"> {/* Adjusted background opacity */}
                  <Phone className="w-5 h-5" />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>

            <Button 
              fullWidth 
              size="lg"
              variant="redCta" // Changed to new redCta variant
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('visualizer')?.scrollIntoView({behavior: 'smooth'});
              }}
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};