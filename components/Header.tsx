import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="Home">
          <img src="/input_file_32.png" alt="Paul's Roofing Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-bold text-slate-600 hover:text-brand-primary uppercase tracking-wider transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.href.substring(1))?.scrollIntoView({behavior: 'smooth'});
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a 
            href={`tel:${PHONE_NUMBER}`} 
            className="hidden md:flex items-center font-black text-brand-dark hover:text-brand-primary text-sm tracking-widest"
          >
            <Phone className="w-4 h-4 mr-2 text-brand-primary" />
            {PHONE_NUMBER}
          </a>
          
          <Button 
            variant="redCta"
            size="sm"
            className="hidden sm:inline-flex rounded-lg px-6"
            onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})}
          >
            GET FREE QUOTE
          </Button>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col space-y-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-bold text-brand-dark py-2 border-b border-slate-50"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById(item.href.substring(1))?.scrollIntoView({behavior: 'smooth'});
              }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            fullWidth 
            variant="redCta" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            GET FREE QUOTE
          </Button>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center py-2 font-black text-brand-dark"
          >
            <Phone className="w-4 h-4 mr-2 text-brand-primary" />
            {PHONE_NUMBER}
          </a>
        </div>
      )}
    </header>
  );
};