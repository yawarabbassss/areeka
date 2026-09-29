import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Career from './components/Career';
import Screen from './components/Screen';
import Social from './components/Social';
import Featured from './components/Featured';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './components/Process';
import Reels from './components/Reels';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Lenis smooth scroll could be added later if needed, but keeping it simple for now.
    
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-base text-ink selection:bg-taupe/30 selection:text-ink">
      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Gallery />
        <Reels />
        <Career />
        <Screen />
        <Social />
        <Featured />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
