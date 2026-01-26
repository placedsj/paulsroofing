import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

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
            <div key={service.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-primary/20 flex flex-col">
              <div className="aspect-w-16 aspect-h-9 h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-4 -mt-14 relative z-10 shadow-lg group-hover:bg-brand-dark transition-colors border-2 border-white">
                  <service.Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-2xl font-bold text-brand-dark mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                        <Check className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a href="#contact" className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-dark transition-colors group/link">
                    Request Service <span className="ml-1 text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};