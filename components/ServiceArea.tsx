import React from 'react';
import { MapPin, Navigation, Map } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

export const ServiceArea: React.FC = () => {
  return (
    <section className="py-24 bg-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-primary/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">100% Local</span>
            </div>
            <h2 className="text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter leading-none">
              Proudly Serving <br /><span className="text-brand-primary italic">The Valley & Beyond</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
              We aren't a national chain. We live here, work here, and our kids go to school here. From the peaks of Hampton to the shores of Saint John, we know what NB weather does to a roof.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {SERVICE_AREAS.map((area) => (
                <div key={area.name} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-200 group hover:border-brand-primary transition-all">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-primary/10 transition-colors">
                    <Navigation className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
                  </div>
                  <span className="font-black text-brand-dark uppercase tracking-tight text-sm">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-300 relative shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" 
                alt="New Brunswick Coastline" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay"></div>
              
              {/* Abstract Map Markers Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {SERVICE_AREAS.map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-4 h-4 bg-brand-primary rounded-full shadow-[0_0_20px_rgba(2,132,199,0.5)] animate-pulse"
                      style={{
                        top: `${20 + (i * 12)}%`,
                        left: `${15 + (i * 15)}%`,
                        animationDelay: `${i * 300}ms`
                      }}
                    ></div>
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark text-white p-6 rounded-3xl shadow-2xl border-2 border-brand-primary">
                    <Map className="w-10 h-10 mb-4 text-brand-accent mx-auto" />
                    <p className="font-black text-center uppercase tracking-widest text-xs">Southern NB <br /> HQ</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-brand-accent text-brand-dark p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <p className="text-3xl font-black italic">"Nobody knows <br /> KV like Paul."</p>
              <p className="mt-4 text-[10px] font-black uppercase tracking-widest opacity-60">— 35 Year Local Resident</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};