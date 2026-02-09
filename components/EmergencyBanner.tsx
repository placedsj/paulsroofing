import React from 'react';
import { AlertTriangle, Phone, Zap } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-brand-red py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[pulse_2s_infinite]"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center text-white">
          <Zap className="w-5 h-5 mr-2 animate-bounce fill-white" />
          <span className="font-black uppercase tracking-widest text-xs">Emergency Leak Repair & Storm Damage</span>
        </div>
        <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="flex items-center bg-white text-brand-red px-4 py-1 rounded-full font-black text-xs uppercase tracking-tighter hover:bg-brand-dark hover:text-white transition-all shadow-lg"
        >
          <Phone className="w-3 h-3 mr-2" />
          Call Paul Now: {PHONE_NUMBER}
        </a>
      </div>
    </div>
  );
};