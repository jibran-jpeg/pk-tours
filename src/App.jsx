import React, { useState, useEffect } from 'react';
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
  }, []);

  return (
    <>
      {isLoading && (
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
      )}

      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-500">
        <Navbar />
        <Hero />
        <Timeline />
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default App;
