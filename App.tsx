import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { OurStory } from './components/OurStory';
import { Process } from './components/Process';
import { Workmanship } from './components/Workmanship';
import { Handbook } from './components/Handbook';
import { Testimonials } from './components/Testimonials';
import { QuoteForm } from './components/QuoteForm';
import { Visualizer } from './components/Visualizer';
import { FAQ } from './components/FAQ';
import { Financing } from './components/Financing';
import { ServiceArea } from './components/ServiceArea';
import { ChatPaul } from './components/ChatPaul';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-brand-primary selection:text-white">
      <div className="flex flex-col">
        <EmergencyBanner />
        <Header />
      </div>
      <main>
        <Hero />
        <Stats />
        <Services />
        <OurStory />
        <Process />
        <Workmanship />
        <Visualizer />
        <Financing />
        <ServiceArea />
        <Handbook />
        <FAQ />
        <Testimonials />
        <QuoteForm />
      </main>
      <ChatPaul />
      <Footer />
    </div>
  );
}

export default App;