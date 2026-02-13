import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Only load the essential components
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const OurStory = lazy(() => import('./components/OurStory').then(module => ({ default: module.OurStory })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const QuoteForm = lazy(() => import('./components/QuoteForm').then(module => ({ default: module.QuoteForm })));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Services: What we do */}
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        {/* Trust: Who we are & What people say */}
        <div className="bg-slate-50">
          <Suspense fallback={<SectionLoader />}>
            <OurStory />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </div>

        {/* Action: Get the price */}
        <Suspense fallback={<SectionLoader />}>
          <QuoteForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;