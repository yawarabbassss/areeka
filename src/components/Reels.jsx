import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Reels = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        // Horizontal scroll animation
        const getScrollAmount = () => {
          let containerWidth = containerRef.current.scrollWidth;
          return -(containerWidth - window.innerWidth);
        };

        const tween = gsap.to(containerRef.current, {
          x: getScrollAmount,
          ease: "none"
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true
        });

        // Parallax inside the cards
        const images = gsap.utils.toArray('.reel-img');
        images.forEach(img => {
          gsap.to(img, {
            xPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        });

      }, sectionRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  if (!areekaData.reels || areekaData.reels.length === 0) return null;

  return (
    <section ref={sectionRef} className="bg-surface relative overflow-hidden z-20 md:h-screen flex items-center py-24 md:py-0">
      
      {/* Background Soft Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#fdf5f7] via-[#f4e1e6] to-[#fdf5f7] opacity-50 blur-[100px] pointer-events-none"></div>

      <div className="absolute top-12 md:top-24 left-6 md:left-12 z-20">
        <div className="text-xs font-sans tracking-[0.4em] uppercase text-taupe mb-4">Highlights</div>
        <h2 className="font-serif text-5xl md:text-7xl text-ink uppercase">Instagram Reels</h2>
      </div>

      <div 
        ref={containerRef} 
        className="flex flex-col md:flex-row h-full items-center pl-6 md:pl-[25vw] md:pr-[20vw] gap-8 md:gap-[10vw] w-full md:w-max relative z-20 mt-32 md:mt-0"
      >
        {areekaData.reels.map((reel, index) => (
          <div 
            key={index} 
            className="w-full md:w-[350px] lg:w-[400px] aspect-[9/16] shrink-0 relative group rounded-[2rem] overflow-hidden shadow-2xl border border-white/60"
          >
            <div className="absolute inset-0 bg-ink">
              <img 
                src={reel.image} 
                alt={reel.title} 
                className="reel-img w-[120%] h-full object-cover -ml-[10%] opacity-90 transition-opacity duration-700 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-white font-serif text-3xl uppercase leading-tight mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{reel.title}</h3>
              
              <a 
                href={reel.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-full hover:bg-white hover:text-ink transition-colors duration-300 w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
              >
                <Play fill="currentColor" size={18} />
                <span className="font-sans text-xs tracking-widest uppercase font-medium">Watch Reel</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
