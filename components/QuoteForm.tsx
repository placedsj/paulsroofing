import React, { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle, Phone } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    project: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="quote" className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter">Request Received!</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Thanks {formData.name.split(' ')[0]}. Paul will review your details and give you a call at <strong>{formData.phone}</strong> shortly to schedule a quick look.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark" onClick={() => setSubmitted(false)}>
            Send Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 uppercase tracking-tighter">Get a Free Estimate</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            No pressure. No hidden fees. Just an honest price for a job done right.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-200">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(506) ..." 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Property Address</label>
              <input 
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, Quispamsis" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">How can we help?</label>
              <textarea 
                rows={4}
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="I need a new roof, repair, or inspection..." 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <Button 
              fullWidth 
              size="lg" 
              variant="redCta" 
              disabled={loading}
              className="py-5 text-lg tracking-widest uppercase rounded-xl shadow-lg"
            >
              {loading ? 'Sending...' : 'Request Free Estimate'}
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm mb-2 font-medium">Prefer to talk to a human?</p>
            <a href="tel:5062714162" className="inline-flex items-center font-black text-brand-dark hover:text-brand-primary text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Paul: (506) 271-4162
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};