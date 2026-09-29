import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef(null);
  const rightColRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.career-item');
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: rightColRef.current,
        pinSpacing: false
      });

      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="relative py-24 bg-surface rounded-[3rem] shadow-sm z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row relative">
          
          {/* Left: Timeline Content */}
          <div className="w-full md:w-1/2 md:pr-16 flex flex-col pt-[20vh] pb-[30vh]">
            <div className="text-xs font-sans tracking-[0.4em] uppercase text-taupe mb-24 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-taupe"></span>
              Milestones
            </div>
            
            <div className="flex flex-col gap-32">
              {areekaData.career.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`career-item transition-all duration-700 ease-out transform ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}
                >
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="font-serif text-5xl md:text-6xl text-taupe">{item.year}</span>
                    <span className="text-xs font-sans tracking-[0.2em] uppercase text-ink/60">{item.category}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-ink mb-6 leading-tight max-w-sm">
                    {item.title}
                  </h3>
                  <p className="text-ink/75 text-base font-light font-sans max-w-sm">
                    {item.description}
                  </p>
                  
                  {/* Mobile image */}
                  <div className={`md:hidden w-full aspect-[4/5] mt-8 overflow-hidden rounded-2xl shadow-lg border border-line transition-all duration-700 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pinned Image (Desktop) */}
          <div className="hidden md:block w-1/2 h-[100vh] relative" ref={rightColRef}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-[3/4] overflow-hidden rounded-3xl border border-line shadow-2xl">
              {areekaData.career.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
              ))}
              <div className="absolute inset-0 border border-ink/5 rounded-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Career;
