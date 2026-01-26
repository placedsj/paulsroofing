import React from 'react';
import { ChevronRight, Shield } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1628127394625-78e0d655f4e1?q=80&w=2574&auto=format&fit=crop" 
          alt="Modern residential roof" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 border border-blue-500/30 text-blue-100 px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium">Over 20 Years in Quispamsis</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Superior Strength.<br />
            <span className="text-brand-primary">Lasts Generations.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
            Upgrade your home's defense with Paul's Roofing. We specialize in premium metal and asphalt roofing solutions for Atlantic Canadian winters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="hover:scale-105 hover:shadow-xl transition-transform duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get a Free Estimate
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-brand-dark hover:scale-105 hover:shadow-lg transition-all duration-300" 
              onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
            >
              Explore Services <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-slate-400 text-sm font-medium">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
              Warrantied Work
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
              Local Experts
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Angle */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};