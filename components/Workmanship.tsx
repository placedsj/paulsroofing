import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Workmanship: React.FC = () => {
  return (
    <section id="workmanship" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-dark mb-4 uppercase tracking-tighter">Our Workmanship</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A look at some of the high-quality roofing projects we've completed across Southern New Brunswick.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg bg-slate-200">
              <img 
                src={img} 
                alt={`Project ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-black tracking-widest uppercase text-sm border-2 border-white px-6 py-2 rounded-full">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};