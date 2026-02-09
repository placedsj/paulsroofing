import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-20 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="input_file_24.png" 
          alt="Roofing project background" 
          className="w-full h-full object-cover animate-ken-burns opacity-40 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-4 tracking-tighter uppercase drop-shadow-2xl">
            PAUL'S ROOFING
          </h1>
          
          <div className="inline-block px-6 py-2 bg-brand-primary/10 backdrop-blur-md rounded-full border border-brand-primary/30 mb-8">
            <span className="text-brand-accent text-xl md:text-3xl font-black uppercase tracking-[0.2em]">
              30 YEARS STRONG
            </span>
          </div>
          
          <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Honest, reliable roofing services for Southern New Brunswick. Specializing in durable metal, shingle, and flat roofing that stands the test of time.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-12 py-5 text-xl font-black tracking-widest uppercase bg-[#2d4b7a] hover:bg-[#1e3250] rounded-lg shadow-2xl transition-all duration-300"
              onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})}
            >
              GET A QUOTE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};