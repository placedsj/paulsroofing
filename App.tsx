import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Visualizer } from './components/Visualizer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-100 selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Visualizer />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;