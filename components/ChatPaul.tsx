
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles, User, Hammer } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Button } from './Button';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

export const ChatPaul: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'paul', text: string }[]>([
    { role: 'paul', text: "Hey! Paul Curry here. Need a hand with your roof? I've been working the KV area for over 30 years—ask me anything." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are Paul Curry, owner of Paul's Roofing in Quispamsis, New Brunswick. 
        Tone: Friendly, direct, professional, and blue-collar. 
        Local Context: You love the Kennebecasis Valley (KV). You serve Rothesay, Hampton, and Quispamsis.
        Experience: 35 years in the trade. You prefer GAF shingles and Vicwest metal.
        Rules: 
        1. Keep responses short and helpful.
        2. If asked about price, suggest the "AI Estimator" tool on the site.
        3. Mention the "No-Bullshit Quote" if they seem ready for an estimate.
        4. If it's an emergency (active leak), tell them to call you at ${PHONE_NUMBER} immediately.
        5. Use local references occasionally.
        
        User says: "${userMessage}"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'paul', text: response.text || "Paul's away from the phone, but he'll be back soon!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'paul', text: "Sorry, I'm having a bit of trouble with the connection. Better Call Paul at (506) 271-4162!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in-up mb-4">
          {/* Header */}
          <div className="bg-brand-dark p-6 text-white flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center mr-3 border-2 border-brand-accent">
                  <Hammer className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-brand-dark"></div>
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-wider">Chat with Paul</p>
                <p className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">35 Years Exp • Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-brand-primary text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                  <Loader2 className="w-5 h-5 text-brand-primary animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative flex items-center"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Paul a roofing question..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-sm font-bold text-brand-dark"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-colors disabled:opacity-30"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-brand-primary'
        }`}
      >
        {isOpen ? <X className="text-white w-8 h-8" /> : <MessageSquare className="text-white w-8 h-8" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <span className="text-[10px] font-black text-white">1</span>
          </div>
        )}
      </button>
    </div>
  );
};
