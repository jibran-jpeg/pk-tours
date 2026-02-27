import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    // Optional: Clear the hash from URL if you want a clean start
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Makhan curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Prevents lag on mobile Safari touch drag
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
      )}

      <div className="min-h-[100dvh] bg-black text-white font-sans selection:bg-emerald-500 selection:text-white overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Timeline />
          <Services />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
