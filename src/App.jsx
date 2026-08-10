import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import KeyPoints from '@/components/KeyPoints';
import Solutions from '@/components/Solutions';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

function App() {
  const keyPointsRef = useRef(null);
  const solutionsRef = useRef(null);
  const pricingRef = useRef(null);

  const refs = {
    features: keyPointsRef,
    solutions: solutionsRef,
    pricing: pricingRef,
  };

  const handleScrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Eclipse - Connect your world with precision</title>
        <meta name="description" content="Deploy previews, logs, metrics, and incident tracking in one place." />
      </Helmet>
      <div className="min-h-screen overflow-hidden bg-background text-white">
        <Header onScrollTo={handleScrollTo} />
        <main>
          <Hero onScrollTo={handleScrollTo} />
          <Features />
          <div ref={keyPointsRef}>
            <KeyPoints />
          </div>
          <div ref={solutionsRef}>
            <Solutions />
          </div>
          <div ref={pricingRef}>
            <Pricing />
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;