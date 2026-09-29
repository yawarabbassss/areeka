import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray('.gallery-img-container');
      
      images.forEach((img) => {
        const imageElement = img.querySelector('img');
        
        gsap.fromTo(img, {
          clipPath: 'inset(10% 10% 10% 10% round 30px)',
          opacity: 0,
          scale: 0.9
        }, {
          clipPath: 'inset(0% 0% 0% 0% round 16px)',
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
          }
        });

        gsap.fromTo(imageElement, {
          scale: 1.15,
          yPercent: -15
        }, {
          scale: 1,
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!areekaData.gallery || areekaData.gallery.length === 0) return null;

  return (
    <section id="gallery" ref={containerRef} className="py-24 md:py-40 bg-base relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-32 flex flex-col items-center">
          <div className="text-xs font-sans tracking-[0.4em] uppercase text-taupe mb-4">Visuals</div>
          <h2 className="font-serif text-4xl md:text-6xl text-ink uppercase">Selected Moments</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {areekaData.gallery.map((imgSrc, index) => (
            <div 
              key={index}
              className={`w-full md:w-5/12 gallery-img-container overflow-hidden shadow-2xl border border-line ${index % 2 !== 0 ? 'md:mt-32' : ''}`} 
              style={{ aspectRatio: '4/5' }}
            >
              <img src={imgSrc} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;
