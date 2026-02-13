import React from 'react';
import { Award, Heart, ShieldCheck, Users } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="/input_file_30.png" 
                alt="Paul Curry working on a roof" 
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white text-2xl font-black leading-tight uppercase tracking-tighter italic">
                  "You hold the ladder, <br /> we will handle the rest."
                </p>
                <p className="mt-4 text-brand-accent font-black uppercase text-xs tracking-widest">— Paul Curry, Owner</p>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-primary/10 rounded-full mb-6">
              <Award className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">A 35-Year Legacy</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-brand-dark mb-8 uppercase tracking-tighter leading-[0.9]">
              Hard Work. <br /> Honest Pay. <br /><span className="text-brand-primary italic">Better Roofs.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Started in 1990 with nothing but a hammer and a dream, Paul's Roofing has grown into the Kennebecasis Valley's most trusted name for residential protection.
              </p>
              <p>
                We aren't a revolving door of sales reps and subcontractors. When you call Paul, you're talking to the man whose name is on the truck. I've personally overseen over 500 installations from Saint John to Hampton.
              </p>
              <p>
                Our philosophy is simple: Treat every roof as if it were sheltering our own family. In the Atlantic, your roof isn't just an aesthetic—it's your survival.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mr-4 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark uppercase text-xs tracking-widest mb-1">Unmatched Integrity</h4>
                  <p className="text-xs text-slate-500 font-bold">No hidden fees, ever.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mr-4 shrink-0">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark uppercase text-xs tracking-widest mb-1">Community Focused</h4>
                  <p className="text-xs text-slate-500 font-bold">Proud KV Supporters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};