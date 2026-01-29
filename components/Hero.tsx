import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { PHONE_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden bg-slate-100"> {/* Changed background to light slate */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549429712-421b4a9a08e0?q=80&w=2670&auto=format&fit=crop" 
          alt="Modern residential metal roof" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/70 to-transparent"></div> {/* Adjusted gradient to light theme */}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-4"> {/* Changed text to dark */}
            UPGRADE TO METAL ROOFING
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-lg leading-relaxed"> {/* Changed text to dark slate */}
            Superior Strength. That Lasts Generations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button 
              size="lg" 
              variant="redCta" // Changed to new redCta variant
              onClick={() => document.getElementById('visualizer')?.scrollIntoView({behavior: 'smooth'})}
            >
              SEE YOUR NEW ROOF <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {/* New "Get a Quote" button */}
            <Button 
              size="lg" 
              variant="primary" 
              onClick={() => document.getElementById('visualizer')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get a Quote
            </Button>
            
            <div className="flex flex-col items-center sm:items-start text-brand-dark text-sm"> {/* Changed text to dark */}
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-2 text-xl font-extrabold mb-1 hover:text-brand-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <p className="text-slate-600">Try our interactive visualizer</p> {/* Changed text to dark slate */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};