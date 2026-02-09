import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

// Lazy load components to reduce initial bundle size
// Using the named export pattern for lazy loading
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const OurStory = lazy(() => import('./components/OurStory').then(module => ({ default: module.OurStory })));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Workmanship = lazy(() => import('./components/Workmanship').then(module => ({ default: module.Workmanship })));
const Handbook = lazy(() => import('./components/Handbook').then(module => ({ default: module.Handbook })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const QuoteForm = lazy(() => import('./components/QuoteForm').then(module => ({ default: module.QuoteForm })));
const Visualizer = lazy(() => import('./components/Visualizer').then(module => ({ default: module.Visualizer })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Financing = lazy(() => import('./components/Financing').then(module => ({ default: module.Financing })));
const ServiceArea = lazy(() => import('./components/ServiceArea').then(module => ({ default: module.ServiceArea })));
const ChatPaul = lazy(() => import('./components/ChatPaul').then(module => ({ default: module.ChatPaul })));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <OurStory />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Workmanship />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Visualizer />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Financing />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ServiceArea />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Handbook />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <QuoteForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <ChatPaul />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;