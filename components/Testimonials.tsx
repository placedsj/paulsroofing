import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase mb-3 text-sm">Happy Homeowners</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark">Over 1,000 Roofs Installed</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-primary relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-light fill-brand-light stroke-slate-200" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                ))}
              </div>
              
              <h4 className="text-xl font-bold text-brand-dark mb-4">"Absolutely Fantastic"</h4>
              <p className="text-slate-600 mb-6 italic">"{t.quote}"</p>
              
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-brand-dark font-bold">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-primary font-medium uppercase">{t.location}, NB</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};