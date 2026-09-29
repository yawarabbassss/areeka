import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.quote-text', {
        opacity: 0,
        y: 40,
        rotationX: -10
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      });
      
      gsap.fromTo('.quote-author', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-surface flex items-center justify-center relative overflow-hidden rounded-[3rem] shadow-sm z-30 my-4 border border-line mx-4 md:mx-8">
      {/* Decorative element */}
      <div className="absolute top-12 left-12 text-taupe/10 font-serif text-[15rem] leading-none pointer-events-none select-none">
        "
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="quote-text font-serif italic text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-ink mb-12 font-light">
          "{areekaData.quote.text}"
        </h2>
        <div className="quote-author text-xs font-sans tracking-[0.4em] uppercase text-taupe flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-taupe"></span>
          {areekaData.quote.author}
          <span className="w-8 h-[1px] bg-taupe"></span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
