import React from 'react';
import { DollarSign, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Financing: React.FC = () => {
  return (
    <section id="financing" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Premium Protection. <span className="text-brand-primary">Predictable Payments.</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A new roof is an investment in your home's future. We offer flexible local financing options to ensure you can afford the quality your home deserves without breaking the bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-slate-800/50 border border-slate-700 hover:border-brand-primary transition-colors text-center group">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <DollarSign className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-xl font-black uppercase mb-4">Low Monthly Rates</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Plans tailored to fit your household budget, with rates that compete with traditional bank loans.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-brand-primary/10 border-2 border-brand-primary text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-black uppercase mb-4">No Interest for 12 Months</h3>
            <p className="text-slate-200 text-sm leading-relaxed mb-6">
              Pay nothing in interest for the first year. Perfect for those expecting a tax return or insurance payout.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-slate-800/50 border border-slate-700 hover:border-brand-primary transition-colors text-center group">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-xl font-black uppercase mb-4">Fast Local Approval</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Skip the big bank headaches. Our local NB lending partners offer approvals in as little as 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-20 p-10 bg-white rounded-[3rem] text-brand-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex-1">
            <h4 className="text-3xl font-black uppercase tracking-tighter mb-2">Ready to secure your home?</h4>
            <p className="text-slate-500 font-medium">Check your eligibility in 60 seconds. No impact on your credit score for initial pre-approval.</p>
          </div>
          <Button size="lg" variant="redCta" className="rounded-2xl group px-12">
            APPLY FOR FINANCING <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};