import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-reveal', {
        y: 60,
        opacity: 0,
        rotationX: -15
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
      
      gsap.fromTo('.about-img', {
        clipPath: 'inset(100% 0% 0% 0%)',
        scale: 1.1
      }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.8,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const bioParagraphs = areekaData.bio.split('\n\n');

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-surface rounded-t-[3rem] -mt-8 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 perspective-1000">
            <div className="about-img overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-xl aspect-[4/5] relative">
              <img src={areekaData.aboutImage} alt="About Areeka" className="editorial-img w-full h-full object-cover" />
              <div className="absolute inset-0 border border-ink/10 rounded-t-[10rem] rounded-b-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center" style={{ perspective: '1000px' }}>
            <div className="about-reveal text-[10px] font-sans tracking-[0.6em] uppercase text-taupe mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-taupe"></span>
              The Story
            </div>
            
            <h2 className="about-reveal font-serif italic text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-ink mb-12 lowercase">
              {bioParagraphs[0]}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="about-reveal text-ink opacity-70 text-xs md:text-sm leading-loose font-sans font-light tracking-wide">
                {bioParagraphs[1] && <p>{bioParagraphs[1]}</p>}
                {bioParagraphs[2] && <p className="mt-6">{bioParagraphs[2]}</p>}
              </div>
              
              <div className="about-reveal flex flex-col gap-6 text-xs font-sans tracking-widest text-ink/60 uppercase">
                {['Creator', 'Public Figure', 'Influencer', 'Pakistan'].map((label, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-line pb-4 group cursor-default">
                    <span className="group-hover:text-taupe transition-colors duration-300">{label}</span>
                    <span className="text-taupe opacity-0 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
