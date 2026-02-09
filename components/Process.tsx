
import React from 'react';
// Added ShieldCheck to imports
import { ClipboardCheck, Hammer, Sparkles, Truck, Search, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: "The No-BS Quote",
    description: "Use our AI or call Paul. We provide a transparent, firm estimate with no surprises.",
    icon: ClipboardCheck,
    color: "bg-blue-500"
  },
  {
    title: "Full Strip Down",
    description: "We never roof over old shingles. We strip to the deck to inspect for rot and damage.",
    icon: Search,
    color: "bg-brand-primary"
  },
  {
    title: "Precision Install",
    description: "Using GAF or Vicwest metal, we install with extreme attention to flashing and ventilation.",
    icon: Hammer,
    color: "bg-brand-dark"
  },
  {
    title: "Daily Cleanup",
    description: "We use magnetic sweeps to ensure your yard is safe for kids and pets every single evening.",
    icon: Truck,
    color: "bg-brand-accent"
  },
  {
    title: "Final Walkthrough",
    description: "Paul personally inspects every ridge and valley before we take a single cent.",
    icon: Sparkles,
    color: "bg-green-500"
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-accent font-black tracking-[0.3em] uppercase mb-4 text-xs">Our Standard Operating Procedure</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
            The Paul's <br /> <span className="text-brand-primary italic">Roofing Way</span>
          </h3>
          <p className="text-slate-400 text-lg">
            We've refined our process over 35 years to ensure your home is protected with zero stress for you.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-primary/0 via-brand-primary/30 to-brand-primary/0 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-brand-dark rounded-full flex items-center justify-center font-black text-sm border-4 border-slate-900 shadow-xl">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-brand-accent transition-colors">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-slate-800 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 px-10 py-6 border border-slate-700 rounded-xl">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-brand-primary flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-lg font-black uppercase tracking-tighter">Guaranteed Protection</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">GAF Weather Stopper System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
