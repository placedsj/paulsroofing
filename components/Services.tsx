import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-brand-primary font-black tracking-[0.2em] uppercase mb-4 text-sm">Professional Grade</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight uppercase">Mastering Every Peak</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            From the historic homes of Hampton to the modern estates of Rothesay, we provide roofing solutions that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`reveal group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col hover:-translate-y-2`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest mr-1">Premium Grade</span>
                  <Check className="w-3 h-3 text-green-500" />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative">
                <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-6 -mt-16 relative z-20 shadow-xl group-hover:bg-brand-dark transition-colors border-4 border-white">
                  <service.Icon className="w-8 h-8" />
                </div>
                
                <h4 className="text-2xl font-black text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <span key={fIdx} className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#visualizer" 
                    className="inline-flex items-center text-sm font-black text-brand-dark hover:text-brand-primary transition-all group/link tracking-widest uppercase"
                  >
                    View Project Options <ArrowUpRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
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