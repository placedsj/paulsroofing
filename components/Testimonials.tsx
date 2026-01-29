import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Button } from './Button';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-100"> {/* Changed background to light slate */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">Over 1,000 Happy Homeowners</h2>
          <p className="text-brand-primary font-bold tracking-wide uppercase text-sm">
            What our clients in the Kennebecasis Valley say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-primary relative">
              
              <div className="mb-6 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                ))}
              </div>
              
              <h4 className="text-xl font-bold text-brand-dark mb-4">{t.quote}</h4>
              
              <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-brand-primary" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-brand-dark font-bold mr-3">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm font-bold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-slate-600 font-medium flex items-center"> {/* Adjusted text color */}
                    <CheckCircle className="w-3 h-3 mr-1 text-green-500" /> Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <Button variant="secondary" onClick={() => alert('Read More Reviews clicked!')}> {/* Uses secondary variant now */}
            READ MORE REVIEWS
          </Button>
          <Button variant="outline" onClick={() => alert('Share Your Experience clicked!')}> {/* Uses outline variant now */}
            SHARE YOUR EXPERIENCE
          </Button>
        </div>
      </div>
    </section>
  );
};