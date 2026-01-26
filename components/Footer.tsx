import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, ADDRESS } from '../constants';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-16 w-auto" variant="light" />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Proudly serving Quispamsis and the Kennebecasis Valley with top-tier roofing solutions. Quality you can trust, durability that lasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-primary hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Get an Estimate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="block">{ADDRESS}</span>
              </li>
              <li>Mon - Fri: 8am - 6pm</li>
              <li>Sat: 9am - 2pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
