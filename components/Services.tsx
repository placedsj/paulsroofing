import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 uppercase tracking-tight">Our Services</h2>
          <p className="text-slate-600 text-lg">
            We specialize in residential roofing solutions designed for New Brunswick weather.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary mr-3">
                    <service.Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark">{service.title}</h4>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs font-bold text-slate-600 uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};