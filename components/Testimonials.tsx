import React, { useEffect, useRef } from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Button } from './Button';

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-brand-primary font-black tracking-[0.2em] uppercase mb-4 text-sm tracking-widest">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight uppercase leading-tight">Trust Built On Performance</h3>
          <p className="text-slate-500 text-lg">
            See why homeowners across the Kennebecasis Valley consistently choose Paul's Roofing for their most valuable asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              className="reveal bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group flex flex-col"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <Quote className="absolute top-8 right-10 w-12 h-12 text-slate-50 group-hover:text-brand-primary/10 transition-colors duration-500" />
              
              <div className="mb-6 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                ))}
              </div>
              
              <h4 className="text-xl font-bold text-brand-dark mb-6 leading-relaxed italic">"{t.quote}"</h4>
              
              <div className="flex items-center mt-auto pt-6 border-t border-slate-50">
                <div className="relative">
                  {t.avatar ? (
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-brand-primary shadow-lg" 
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black mr-4 border-2 border-brand-primary">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white shadow-sm">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-black text-brand-dark uppercase tracking-tight">{t.name}</p>
                  <p className="text-xs text-brand-primary font-bold uppercase tracking-widest">{t.location}, NB</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20 reveal">
          <Button variant="secondary" size="lg" className="rounded-full tracking-widest uppercase">
            READ MORE REVIEWS
          </Button>
          <div className="flex -space-x-3 overflow-hidden">
            {[1, 2, 3, 4, 5].map(i => (
              <img 
                key={i}
                className="inline-block h-10 w-10 rounded-full ring-4 ring-white" 
                src={`https://randomuser.me/api/portraits/thumb/men/${i + 10}.jpg`} 
                alt="" 
                loading="lazy"
                decoding="async"
              />
            ))}
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-primary ring-4 ring-white text-[10px] font-black text-white">
              +400
            </div>
          </div>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest italic underline decoration-brand-primary decoration-2 underline-offset-4">
            Join our verified customers
          </p>
        </div>
      </div>
    </section>
  );
};