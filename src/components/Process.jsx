import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card');
      
      gsap.fromTo(cards, {
        y: 100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understanding your brand goals, audience, and challenges through research and strategy to create the perfect campaign.",
      image: areekaData.gallery[0]
    },
    {
      num: "02",
      title: "Create",
      desc: "Transforming insights into authentic, beautiful, and engaging digital content that perfectly aligns with the vision.",
      image: areekaData.gallery[1]
    },
    {
      num: "03",
      title: "Deliver",
      desc: "Launching the final campaign, driving high engagement, and connecting with millions across social platforms.",
      image: areekaData.featured[0].image
    }
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-base relative overflow-hidden z-20 border-t border-line/30">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-gradient-to-tr from-[#e5f8db]/40 via-[#f0fbe8]/60 to-[#fdf5f7]/50 rounded-full opacity-60 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <div className="text-xs font-sans tracking-[0.4em] uppercase text-taupe mb-4">Workflow</div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ink uppercase">The Approach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="process-card group relative w-full aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f0f0f0]"
            >
              {/* Hover Image Background */}
              <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-60 mix-blend-overlay transform scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col z-10 transition-colors duration-500 group-hover:text-white">
                <span className="font-sans font-light text-5xl md:text-7xl text-ink/20 group-hover:text-white/40 mb-12 block transition-colors duration-500">{step.num}</span>
                
                <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-sans text-3xl md:text-4xl font-normal text-ink group-hover:text-white mb-6 transition-colors duration-500">{step.title}</h3>
                  <p className="font-sans text-sm md:text-base font-light text-ink/70 group-hover:text-white/80 leading-relaxed transition-colors duration-500 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
