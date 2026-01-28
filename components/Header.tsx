import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
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
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-2 shadow-md' : 'bg-brand-dark py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Paul's Roofing Home" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo className="h-14 w-auto group-hover:scale-105 transition-transform duration-300" variant="light" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-slate-300 hover:text-white hover:scale-105 font-medium transition-all text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-white mr-4">
              <Phone className="w-4 h-4 text-brand-accent" />
              <span className="font-semibold">{PHONE_NUMBER}</span>
            </div>
            <div className="hidden md:block">
              <Button 
                href="#contact" 
                size="sm" 
                className="!bg-orange-600 hover:!bg-orange-700 !text-white !font-extrabold !shadow-orange-900/20 hover:scale-105 border-b-4 border-orange-800 active:border-b-0 active:translate-y-1 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Get Free Estimate <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <button 
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
        className={`fixed inset-y-0 right-0 w-full max-w-sm z-40 bg-brand-dark flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 h-full pb-8 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-white font-bold text-2xl py-4 border-b border-slate-800 hover:text-brand-accent transition-colors flex justify-between items-center group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-accent" />
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl space-y-4">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Contact Us Directly</p>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-3 text-white text-xl font-bold">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>

            <Button 
              fullWidth 
              size="lg"
              className="!bg-orange-600 hover:!bg-orange-700 !text-white !font-bold border-b-4 border-orange-800 active:border-b-0 active:translate-y-1 shadow-xl"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
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