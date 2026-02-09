import React, { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const QuoteForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getAiEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are an expert roofing estimator for Paul's Roofing in New Brunswick, Canada. 
        A customer has provided the following project description: "${formData.project}".
        
        Provide a "No-Bullshit" initial estimate. 
        1. Give a very rough price range (in CAD) typical for the KV/Saint John area.
        2. List 3 critical technical considerations for this specific project (e.g., ice/water shield, ventilation, material choice).
        3. Keep the tone professional, direct, and local to New Brunswick.
        
        Format the response in clean Markdown. Avoid flowery language.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setAiResponse(response.text || "Sorry, I couldn't generate an estimate right now. Paul will contact you directly.");
    } catch (error) {
      console.error("AI Estimate Error:", error);
      setAiResponse("Technical error. Paul's personal cell is (506) 271-4162 - give him a shout directly!");
    } finally {
      setLoading(false);
    }
  };

  if (aiResponse) {
    return (
      <section id="quote" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto py-12 px-8 md:px-16 bg-slate-800/50 backdrop-blur-xl rounded-[3rem] border border-slate-700 shadow-2xl reveal active">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-brand-accent animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tighter text-center">Your AI Powered Estimate</h2>
            <div className="prose prose-invert prose-brand max-w-none mb-10 text-slate-300 leading-relaxed text-left border-y border-slate-700/50 py-8">
              {aiResponse.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="redCta" className="rounded-2xl px-10" onClick={() => window.print()}>
                PRINT ESTIMATE
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-700 rounded-2xl" onClick={() => setAiResponse(null)}>
                START OVER
              </Button>
            </div>
            <p className="mt-8 text-xs text-slate-500 text-center italic uppercase tracking-widest">
              *Estimate is subject to on-site measurement and material price fluctuations.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-primary/10 rounded-full mb-6 border border-brand-primary/20">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">Next-Gen Quoting</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-brand-dark mb-4 uppercase tracking-tighter">Get a No-Bullshit Quote</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Fill out the form and let our custom AI model analyze your project against local NB labor and material costs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={getAiEstimate} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-brand-dark"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com" 
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-brand-dark"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Phone Number (Optional)</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(506) 555-1234" 
                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-brand-dark"
              />
            </div>

            <div className="space-y-2 mb-10">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2 flex justify-between">
                <span>Tell Us About Your Project</span>
                <span className="text-brand-primary italic">Be specific for better results</span>
              </label>
              <textarea 
                rows={4}
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="e.g., '1800 sq ft rancher in Rothesay, current shingles are curling, want black architectural shingles...'" 
                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-brand-dark resize-none leading-relaxed"
                required
              ></textarea>
            </div>

            <Button 
              fullWidth 
              size="lg" 
              variant="secondary" 
              disabled={loading}
              className="bg-[#2d4b7a] py-6 text-xl tracking-widest uppercase rounded-2xl group shadow-xl relative overflow-hidden"
            >
              {loading ? (
                <span className="flex items-center">
                  <Loader2 className="mr-3 w-6 h-6 animate-spin" /> ANALYZING PROJECT...
                </span>
              ) : (
                <span className="flex items-center">
                  GET MY AI ESTIMATE <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}
            </Button>

            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start">
              <AlertCircle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider leading-relaxed">
                Paul will manually review every AI generated estimate to ensure 100% accuracy before scheduling your on-site visit.
              </p>
            </div>
          </form>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <CheckCircle className="w-4 h-4 text-brand-primary mr-2" /> 100% Honest Pricing
            </div>
            <div className="flex items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <CheckCircle className="w-4 h-4 text-brand-primary mr-2" /> Local KV Expertise
            </div>
            <div className="flex items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <CheckCircle className="w-4 h-4 text-brand-primary mr-2" /> GAF Certified Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};