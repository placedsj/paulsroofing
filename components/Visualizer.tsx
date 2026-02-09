import React, { useState, useEffect, useRef } from 'react';
import { ROOF_COLORS, ROOF_MATERIALS } from '../constants';
import { Button } from './Button';
import { CheckCircle, Upload, Share2, Info, Maximize2, Sparkles } from 'lucide-react';

export const Visualizer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(ROOF_COLORS[0]);
  const [activeMaterial, setActiveMaterial] = useState(ROOF_MATERIALS[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const requestCameraPermission = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach(track => track.stop());
        alert("Camera permission ready. Use your camera to capture your own roofline!");
      } catch (err) {
        alert("Please enable camera access in your settings to use the live visualizer.");
      }
    } else {
      alert("Your browser does not support camera access.");
    }
  };

  return (
    <section id="visualizer" ref={sectionRef} className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <div className="w-full lg:w-3/5 reveal">
            <div className="relative group rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(2,132,199,0.3)] border-4 border-slate-800 bg-slate-800">
              <img 
                src="input_file_29.png" 
                alt="House visualization base" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Intelligent Roof Overlay Mask */}
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-multiply transition-all duration-700 ease-in-out"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  opacity: selectedColor.overlayOpacity,
                  clipPath: 'polygon(0% 40%, 50% 10%, 100% 40%, 100% 60%, 50% 30%, 0% 60%)' 
                }}
              ></div>

               <div 
                className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay transition-all duration-700"
                style={{
                  backgroundImage: activeMaterial === 'metal' 
                    ? 'repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(0,0,0,0.9) 39px, rgba(0,0,0,0.9) 40px)' 
                    : 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'30\' viewBox=\'0 0 60 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h60v30H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 15h15v15H0zM30 15h15v15H30zM15 0h15v15H15zM45 0h15v15H45z\' fill=\'%23000\' fill-opacity=\'.2\'/%3E%3C/svg%3E")',
                  backgroundSize: activeMaterial === 'metal' ? '40px 100%' : '30px 30px',
                  clipPath: 'polygon(0% 40%, 50% 10%, 100% 40%, 100% 60%, 50% 30%, 0% 60%)' 
                }}
              ></div>

              <div className="absolute top-8 left-8 flex flex-col space-y-3">
                <div className="bg-brand-primary/90 backdrop-blur-xl px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center shadow-2xl">
                  <Sparkles className="w-3 h-3 text-white mr-2 animate-pulse" />
                  AI Vision Active
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 border border-slate-700">
                  {selectedColor.name} • {activeMaterial === 'metal' ? 'VICWEST METAL' : 'GAF SHINGLE'}
                </div>
              </div>

              <button className="absolute bottom-8 right-8 p-4 bg-white/10 backdrop-blur-xl hover:bg-brand-primary rounded-full transition-all text-white shadow-2xl group/btn hover:scale-110">
                <Maximize2 className="w-6 h-6 group-hover/btn:rotate-90 transition-transform" />
              </button>
            </div>
            
            <div className="mt-8 flex items-center p-6 bg-slate-800/30 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-2xl flex items-center justify-center mr-5 shrink-0">
                <Info className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Our <span className="text-white font-bold">KV Visualizer</span> uses custom masks to simulate real-world light bounce on specific New Brunswick rooflines. Experience how different profiles handle shadows and weather before you commit.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5 space-y-12 reveal" style={{ transitionDelay: '200ms' }}>
            <div>
              <div className="text-brand-primary font-black text-xs uppercase tracking-[0.4em] mb-4">Design Studio</div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.8]">
                Style Your <br /> <span className="text-brand-primary italic">Transformation</span>
              </h2>
              <div className="h-1.5 w-32 bg-brand-primary rounded-full"></div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase block ml-1">Select Material Profile</label>
                <div className="grid grid-cols-1 gap-4">
                  {ROOF_MATERIALS.map((material) => (
                    <button 
                      key={material.id}
                      onClick={() => setActiveMaterial(material.id)}
                      className={`flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all duration-500 ${
                        activeMaterial === material.id 
                          ? 'border-brand-primary bg-brand-primary/10 shadow-[0_0_40px_rgba(2,132,199,0.15)] scale-[1.02]'
                          : 'border-slate-800 bg-slate-800/30 text-slate-500 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-5 ${activeMaterial === material.id ? 'bg-brand-primary shadow-[0_0_10px_rgba(2,132,199,1)]' : 'bg-slate-700'}`}></div>
                        <span className={`text-xl font-black tracking-tight uppercase ${activeMaterial === material.id ? 'text-white' : 'text-slate-400'}`}>{material.name}</span>
                      </div>
                      {activeMaterial === material.id && <CheckCircle className="w-6 h-6 text-brand-primary" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <label className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase block ml-1">
                  Available Colors <span className="text-brand-accent ml-2">({selectedColor.name})</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-4">
                  {ROOF_COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative aspect-square rounded-2xl border-4 transition-all duration-500 ${
                        selectedColor.id === color.id 
                          ? 'border-brand-primary scale-110 shadow-2xl z-10 ring-8 ring-brand-primary/10'
                          : 'border-slate-800 grayscale hover:grayscale-0 hover:scale-105 hover:border-slate-600'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select color ${color.name}`}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {selectedColor.id === color.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/10 backdrop-blur-[2px]">
                          <CheckCircle className="text-white w-8 h-8 drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-slate-800/50 space-y-4">
                <Button fullWidth variant="redCta" size="lg" className="rounded-2xl py-6 text-xl tracking-widest font-black uppercase shadow-2xl" onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})}>
                  GET AI ESTIMATE FOR THIS STYLE
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-slate-700 text-slate-400 hover:bg-slate-800 rounded-xl py-4" onClick={requestCameraPermission}>
                    <Upload className="w-4 h-4 mr-2" /> UPLOAD PHOTO
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-slate-400 hover:bg-slate-800 rounded-xl py-4">
                    <Share2 className="w-4 h-4 mr-2" /> SHARE DESIGN
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};