import React, { useState } from 'react';
import { ROOF_COLORS } from '../constants';
import { Button } from './Button';
import { RotateCcw, CheckCircle } from 'lucide-react';

export const Visualizer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(ROOF_COLORS[0]);
  const [activeTab, setActiveTab] = useState<'metal' | 'asphalt'>('metal');

  return (
    <section id="visualizer" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Controls Side */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-brand-accent font-bold tracking-wide uppercase mb-2 text-sm">Interactive Tool</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">See Your New Roof</h3>
              <p className="text-slate-400">
                Visualize how different materials and colors will look on a standard home profile before you decide.
              </p>
            </div>

            <div className="space-y-6">
              {/* Material Selector */}
              <div className="bg-slate-800 p-1 rounded-xl flex">
                <button 
                  onClick={() => setActiveTab('metal')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'metal' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  Metal Roofing
                </button>
                <button 
                  onClick={() => setActiveTab('asphalt')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'asphalt' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  Asphalt Shingles
                </button>
              </div>

              {/* Color Grid */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  Select Color: <span className="text-white ml-2">{selectedColor.name}</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {ROOF_COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`relative h-12 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor.id === color.id 
                          ? 'border-white scale-105 shadow-xl ring-2 ring-brand-primary ring-offset-2 ring-offset-slate-900 z-10' 
                          : 'border-transparent opacity-80 hover:opacity-100 hover:border-slate-500 hover:scale-105 hover:shadow-lg hover:z-10'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name}`}
                    >
                      {selectedColor.id === color.id && (
                        <CheckCircle className="absolute inset-0 m-auto text-white w-5 h-5 drop-shadow-md" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <Button fullWidth onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Get Quote for {selectedColor.name}
                </Button>
                <button 
                  onClick={() => setSelectedColor(ROOF_COLORS[0])}
                  className="w-full flex items-center justify-center mt-4 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Reset Selection
                </button>
              </div>
            </div>
          </div>

          {/* Preview Side */}
          <div className="w-full lg:w-2/3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800 aspect-[4/3] lg:aspect-[16/9]">
              {/* Base House Image */}
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop" 
                alt="House visualization base" 
                className="w-full h-full object-cover"
              />
              
              {/* Roof Overlay Simulation */}
              {/* Note: In a real app we'd use a masked PNG. Here we simulate the roof area with a clip-path for demonstration */}
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-multiply transition-colors duration-500"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  opacity: selectedColor.overlayOpacity,
                  clipPath: 'polygon(50% 12%, 94% 45%, 90% 48%, 50% 18%, 10% 48%, 6% 45%)' // Approximate roof shape of the specific unsplash image
                }}
              ></div>

               {/* Material Texture Overlay */}
               <div 
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: activeTab === 'metal' 
                    ? 'repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(0,0,0,0.5) 49px, rgba(0,0,0,0.5) 50px)' 
                    : 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 20L20 0H40L20 20H0zM20 40L40 20H20L0 40H20z\'/%3E%3C/g%3E%3C/svg%3E")',
                  backgroundSize: activeTab === 'metal' ? '50px 100%' : '20px 20px',
                   clipPath: 'polygon(50% 12%, 94% 45%, 90% 48%, 50% 18%, 10% 48%, 6% 45%)'
                }}
              ></div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs font-bold uppercase tracking-wider">
                Preview Mode
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-4">
              *Visualization is a simulation. Actual colors may vary based on lighting and material texture.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};