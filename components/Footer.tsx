import React from 'react';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t-4 border-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/input_file_31.png" 
              alt="Paul's Roofing Logo" 
              className="h-24 w-auto mb-6 grayscale brightness-200" 
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Serving the Kennebecasis Valley for over 30 years. Honest work, fair prices, and roofs built to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="p-2 bg-slate-800 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Metal Roofing</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Asphalt Shingles</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Flat Roof Systems</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Emergency Repairs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center group hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-3 text-brand-primary" />
                <span className="text-lg font-bold">{PHONE_NUMBER}</span>
              </a>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-5 h-5 mr-3 text-brand-primary" />
                <span className="text-sm">{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}.</p>
          <p className="mt-2 md:mt-0">Built Local. Built Tough.</p>
        </div>
      </div>
    </footer>
  );
};