import React from 'react';
import { Facebook, Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 relative pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src="input_file_31.png" alt="Paul's Roofing Round Logo" className="h-40 w-auto mb-8 grayscale brightness-200" />
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Serving Southern New Brunswick for over 30 years. We don't just build roofs; we build relationships. Honest, reliable, and durable.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="p-3 bg-slate-800 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300 hover:-translate-y-1"><Facebook className="w-6 h-6" /></a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="p-3 bg-slate-800 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300 hover:-translate-y-1"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em]">Our Expertise</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Metal Roof Systems</a></li>
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Architectural Shingles</a></li>
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Low-Slope Flat Roofing</a></li>
                <li><a href="#quote" className="hover:text-brand-primary transition-colors text-brand-accent">AI Powered Estimator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em]">Quick Navigation</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                <li><a href="#workmanship" className="hover:text-brand-primary transition-colors">Project Gallery</a></li>
                <li><a href="#handbook" className="hover:text-brand-primary transition-colors">Homeowner's Handbook</a></li>
                <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Client Satisfaction</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">KV Community Hub</a></li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700/50">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.3em]">Direct Contact</h4>
            <div className="space-y-6">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center group">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Call Anytime</p>
                  <p className="text-xl font-black text-white">{PHONE_NUMBER}</p>
                </div>
              </a>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-sm font-bold text-white leading-tight">{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span>GAF & Vicwest Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-accent" />
              <span>35+ Years Excellence</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-1 text-slate-600">Built to outlast the Atlantic Coast.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};