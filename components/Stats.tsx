import React from 'react';
import { STATS } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-primary opacity-50" />
              <div className="text-4xl md:text-6xl font-black text-brand-dark mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-4xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-black text-brand-dark leading-tight uppercase tracking-tight">
            For three decades, we've been the trusted name in roofing for Southern New Brunswick. <span className="text-brand-primary italic">We don't just build roofs; we build relationships.</span>
          </p>
        </div>
      </div>
    </section>
  );
};