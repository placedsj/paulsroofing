import React from 'react';
import { Shield, Droplets, Wind } from 'lucide-react';

export const Handbook: React.FC = () => {
  return (
    <section id="handbook" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-dark mb-8 uppercase tracking-tighter">Homeowner's Handbook</h2>
          <div className="h-1.5 w-24 bg-brand-primary mx-auto rounded-full mb-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-dark uppercase mb-2">First Line of Defense</h4>
                <p className="text-slate-500 leading-relaxed">
                  A good roof is your home's first line of defense. Regular inspections, especially after major storms, can prevent small issues from becoming costly problems.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Droplets className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-dark uppercase mb-2">Gutter Maintenance</h4>
                <p className="text-slate-500 leading-relaxed">
                  Keep your gutters clean and ensure proper attic ventilation to extend the life of your roof and improve your home's energy efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Wind className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-xl font-black text-brand-dark uppercase mb-2">Expert Advice</h4>
                <p className="text-slate-500 leading-relaxed italic">
                  "When in doubt, call a professional. We're here to ensure your peace of mind through KV's toughest winters."
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="input_file_27.png" alt="Roofing excellence" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-dark text-white p-10 rounded-[2rem] shadow-2xl hidden md:block max-w-xs">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">Did you know?</p>
              <p className="text-lg leading-snug">Proper ventilation can reduce your summer cooling costs by up to 15%.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};