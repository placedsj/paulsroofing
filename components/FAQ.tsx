import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is metal roofing better for New Brunswick winters?",
    answer: "Absolutely. Metal roofs shed snow quickly, preventing heavy load buildup and ice damming, which are major issues in Southern NB. While the initial cost is higher, it effectively lasts 50+ years and handles our high-wind coastal conditions far better than asphalt."
  },
  {
    question: "How long does a typical roof replacement take?",
    answer: "For a standard rancher or two-story home in Quispamsis, we typically complete the job in 1-2 days. This includes a full strip-down, deck inspection, underlayment, and installation. We never leave a roof exposed overnight."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with local lenders to offer competitive financing plans for KV homeowners. This allows you to protect your home now and pay over time with manageable monthly installments."
  },
  {
    question: "What is your warranty on workmanship?",
    answer: "We offer a 10-year workmanship warranty on top of the manufacturer's material warranty. As a GAF Certified contractor, we can also offer enhanced warranties that cover both labor and materials for up to 50 years."
  },
  {
    question: "Should I repair or replace my roof?",
    answer: "If you're missing a few shingles from a windstorm, a repair is usually fine. However, if your shingles are curling, losing granules, or over 15 years old, a full replacement is more cost-effective in the long run to avoid interior water damage."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-primary/10 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 text-brand-primary" />
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Knowledge Base</span>
              </div>
              <h2 className="text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter leading-[0.9]">
                Expert <br /> Answers For <br /><span className="text-brand-primary italic">NB Homeowners</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Thinking about a new roof is a big decision. We believe in transparency and education. If you don't see your question here, Better Call Paul directly.
              </p>
              <div className="p-6 bg-slate-900 rounded-3xl text-white">
                <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-50">Local Hotline</p>
                <p className="text-2xl font-black">(506) 271-4162</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border-2 rounded-3xl transition-all duration-300 overflow-hidden ${
                  openIndex === idx ? 'border-brand-primary bg-slate-50 shadow-lg' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-lg font-black uppercase tracking-tight ${openIndex === idx ? 'text-brand-primary' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-primary' : 'text-slate-400'}`} />
                </button>
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};