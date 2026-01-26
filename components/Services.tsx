import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase mb-3 text-sm">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">Professional Roofing Services</h3>
          <p className="text-slate-600 text-lg">
            From complete installations to minor repairs, we treat every home in the Kennebecasis Valley as if it were our own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-primary/20">
              <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors"></div>
              </div>
              
              <div className="p-8">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg group-hover:bg-brand-dark transition-colors">
                  <service.Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-2xl font-bold text-brand-dark mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a href="#contact" className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-dark transition-colors group/link">
                  Request Service <span className="ml-1 text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};