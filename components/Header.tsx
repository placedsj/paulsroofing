import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm py-2 shadow-xl border-b border-slate-100' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center group" aria-label="Paul's Roofing Home" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="input_file_32.png" alt="Paul's Roofing Logo" className="h-12 md:h-16 w-auto transition-all duration-300" />
          </a>

          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:text-brand-primary text-brand-dark"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.href.substring(1))?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <a href={`tel:${PHONE_NUMBER}`} className="hidden md:flex items-center font-black text-sm tracking-widest text-brand-dark hover:text-brand-primary transition-colors">
              <Phone className="w-4 h-4 mr-2 text-brand-primary" />
              {PHONE_NUMBER}
            </a>

            <div className="hidden sm:block">
              <Button 
                href="#quote"
                size="sm" 
                variant="secondary"
                className="bg-brand-dark font-black uppercase text-[10px] tracking-widest py-3 px-6 rounded-md hover:bg-brand-primary"
                onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})}
              >
                FREE ESTIMATE
              </Button>
            </div>
            
            <button 
              className="lg:hidden p-2 rounded-lg transition-colors z-50 text-brand-dark hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-brand-dark/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-white flex flex-col pt-24 px-8 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-brand-dark font-black text-xl py-4 border-b border-slate-100 hover:text-brand-primary transition-colors flex justify-between items-center group uppercase tracking-tighter"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById(item.href.substring(1))?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                {item.label}
                <ArrowRight className="w-6 h-6 text-brand-primary" />
              </a>
            ))}
          </nav>
          
          <div className="pt-8">
            <Button 
              fullWidth 
              size="lg"
              variant="secondary"
              className="bg-brand-dark rounded-xl font-black tracking-widest uppercase"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'});
              }}
            >
              GET ESTIMATE
            </Button>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="flex items-center justify-center mt-6 text-brand-dark font-black tracking-widest py-4 border-2 border-slate-100 rounded-xl"
            >
              <Phone className="w-5 h-5 mr-3 text-brand-primary" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};