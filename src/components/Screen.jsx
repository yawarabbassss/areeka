import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const Screen = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
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

      }, sectionRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="screen" ref={sectionRef} className="bg-base text-ink overflow-hidden md:h-screen flex items-center relative py-24 md:py-0">
      
      <div className="absolute top-12 md:top-24 left-6 md:left-12 z-20">
        <h2 ref={titleRef} className="font-serif text-6xl md:text-[10vw] tracking-tighter uppercase opacity-5 text-taupe leading-none">
          Screen
        </h2>
      </div>

      <div 
        ref={containerRef} 
        className="flex flex-col md:flex-row h-full items-center pl-6 md:pl-[30vw] md:pr-[20vw] gap-16 md:gap-[15vw] w-full md:w-max relative z-20 mt-24 md:mt-0"
      >
        {areekaData.screen.map((project) => (
          <div key={project.id} className="w-full md:w-[60vw] max-w-[800px] shrink-0 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            <div className="w-full md:w-3/5 aspect-[16/9] md:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-line relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-taupe font-serif text-2xl md:text-3xl italic">{project.year}</span>
                <div className="h-[1px] w-12 bg-taupe/30"></div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-ink/60">{project.network}</span>
              </div>
              
              <h3 className="font-serif text-4xl md:text-5xl uppercase mb-8 leading-none">
                {project.title}
              </h3>
              
              <div className="mb-6 border-l-2 border-taupe pl-6">
                <p className="text-xs font-sans tracking-widest uppercase text-taupe mb-1">Role</p>
                <p className="font-serif text-2xl text-ink">{project.character}</p>
                <p className="text-xs font-sans text-ink/60 mt-1">{project.role}</p>
              </div>
              
              <p className="text-ink/70 text-base font-light font-sans leading-relaxed">
                {project.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screen;
