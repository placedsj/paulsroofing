import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 relative pt-12">
      {/* Wave SVG */}
      <svg 
        className="absolute top-0 left-0 w-full h-auto text-white" 
        style={{ transform: 'translateY(-99%)' }} 
        viewBox="0 0 1440 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 100L1440 100L1440 0C1280 33.3333 1120 50 960 50C800 50 640 33.3333 480 0C320 -33.3333 160 0 0 0L0 100Z" fill="white"/>
      </svg>


      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Social */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
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
          
          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Metal Roofing</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Asphalt Shingles</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Repairs</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Melictictsimms, NB</a></li> {/* Placeholder */}
              <li><a href="#" className="hover:text-brand-primary transition-colors">Quispamsis, NB</a></li> {/* Placeholder */}
            </ul>
          </div>
          
          {/* Column 3: About */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Our Story</a></li>
              <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li> {/* Placeholder */}
              <li><a href="#financing" className="hover:text-brand-primary transition-colors">Financing</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Warranty Info</a></li> {/* Placeholder */}
              <li><a href="#" className="hover:text-brand-primary transition-colors">FAQs</a></li> {/* Placeholder */}
              <li><a href="#financing" className="hover:text-brand-primary transition-colors">Financing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start text-sm text-slate-500">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="font-bold text-white mb-1">Paul Curry</p>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center hover:text-white transition-colors mb-1">
              <Phone className="w-3 h-3 mr-1 text-brand-primary" /> {PHONE_NUMBER}
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-1 text-brand-primary" /> {EMAIL_ADDRESS}
            </a>
            <div className="flex items-center mt-1">
              <MapPin className="w-3 h-3 mr-1 text-brand-primary" /> {ADDRESS}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end text-slate-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <div className="flex space-x-6 mt-2">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};