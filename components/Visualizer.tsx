import React, { useState } from 'react';
import { ROOF_COLORS, ROOF_MATERIALS } from '../constants';
import { Button } from './Button';
import { RotateCcw, CheckCircle, Upload, Share2 } from 'lucide-react';

export const Visualizer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(ROOF_COLORS[0]);
  const [activeMaterial, setActiveMaterial] = useState(ROOF_MATERIALS[0].id);

  // Function to request camera permission (if needed for upload)
  const requestCameraPermission = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach(track => track.stop()); // Stop immediately, just checking permission
        console.log("Camera permission granted.");
      } catch (err) {
        console.error("Camera permission denied or error: ", err);
        alert("Camera access denied. Please enable camera permissions in your browser settings to upload photos.");
      }
    } else {
      alert("Your browser does not support camera access.");
    }
  };

  return (
    <section id="visualizer" className="py-24 bg-slate-100 text-brand-dark overflow-hidden"> {/* Changed background and text color */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Preview Side (Left on large screens) */}
          <div className="w-full lg:w-3/5 order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-300 bg-slate-200 aspect-[4/3] lg:aspect-[16/9]"> {/* Adjusted border and background */}
              {/* Base House Image (from design screenshot) */}
              <img 
                src="https://paulskitchenandbath.com/wp-content/uploads/2021/04/home-roof.jpg" 
                alt="House visualization base" 
                className="w-full h-full object-cover"
              />
              
              {/* Roof Overlay Simulation */}
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-multiply transition-colors duration-500"
                style={{ 
                  backgroundColor: selectedColor.hex,
                  opacity: selectedColor.overlayOpacity,
                  // Adjusted clipPath for the new house image
                  clipPath: 'polygon(28% 45%, 49% 29%, 71% 45%, 71% 54%, 49% 38%, 28% 54%)' 
                }}
              ></div>

               {/* Material Texture Overlay */}
               <div 
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: activeMaterial === 'metal' 
                    ? 'repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(0,0,0,0.5) 49px, rgba(0,0,0,0.5) 50px)' 
                    : 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 20L20 0H40L20 20H0zM20 40L40 20H20L0 40H20z\'/%3E%3C/g%3E%3C/svg%3E")',
                  backgroundSize: activeMaterial === 'metal' ? '50px 100%' : '20px 20px',
                  // Adjusted clipPath for the new house image
                  clipPath: 'polygon(28% 45%, 49% 29%, 71% 45%, 71% 54%, 49% 38%, 28% 54%)' 
                }}
              ></div>

              <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-md px-4 py-2 rounded-lg text-brand-dark text-xs font-bold uppercase tracking-wider"> {/* Adjusted background and text color */}
                Preview Mode
              </div>
            </div>
            <p className="text-slate-600 text-xs mt-4"> {/* Adjusted text color */}
              *Visualization is a simulation. Actual colors may vary based on lighting and material texture.
            </p>
          </div>

          {/* Controls Side (Right on large screens) */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">SEE YOUR NEW ROOF</h2>
              <p className="text-brand-primary font-semibold tracking-wide text-sm"> {/* Changed to brand-primary */}
                Visualize your home with a lifetime roof
              </p>
            </div>

            <div className="space-y-6">
              {/* Material Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">SELECT ROOFING MATERIAL:</label> {/* Adjusted text color */}
                <div className="grid grid-cols-1 gap-4">
                  {ROOF_MATERIALS.map((material) => (
                    <label 
                      key={material.id} 
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        activeMaterial === material.id 
                          ? 'border-brand-primary bg-brand-primary text-white shadow-lg' // Active state for light theme
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-500' // Inactive state for light theme
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="roofMaterial" 
                        value={material.id} 
                        checked={activeMaterial === material.id} 
                        onChange={() => setActiveMaterial(material.id)}
                        className="form-radio h-5 w-5 text-brand-primary border-slate-500 focus:ring-brand-primary"
                        aria-label={`Select ${material.name}`}
                      />
                      <span className="ml-3 text-lg font-medium">{material.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Grid */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3"> {/* Adjusted text color */}
                  CHOOSE COLOR: <span className="text-brand-dark ml-2">{selectedColor.name}</span> {/* Adjusted text color */}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {ROOF_COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`relative h-12 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor.id === color.id 
                          ? 'border-brand-dark scale-105 shadow-xl ring-2 ring-brand-primary ring-offset-2 ring-offset-slate-100 z-10' // Active state for light theme
                          : 'border-transparent opacity-80 hover:opacity-100 hover:border-slate-500 hover:scale-105 hover:shadow-lg hover:z-10'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name}`}
                    >
                      {selectedColor.id === color.id && (
                        <CheckCircle className="absolute inset-0 m-auto text-brand-dark w-5 h-5 drop-shadow-md" /> {/* Adjusted text color */}
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-300 space-y-4"> {/* Adjusted border */}
                <Button fullWidth variant="secondary" onClick={requestCameraPermission}> {/* Used secondary for Upload */}
                  <Upload className="w-4 h-4 mr-2" /> UPLOAD PHOTO OF YOUR HOME
                </Button>
                <Button fullWidth variant="primary" onClick={() => document.getElementById('visualizer')?.scrollIntoView({behavior: 'smooth'})}> {/* Used primary for Get Estimate */}
                  GET A FREE ESTIMATE
                </Button>
                <Button fullWidth variant="outline" className="border-slate-400 text-slate-700 hover:text-white hover:bg-slate-700" > {/* Adjusted outline for light theme */}
                  <Share2 className="w-4 h-4 mr-2" /> SAVE & SHARE DESIGN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};