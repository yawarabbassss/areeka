import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { areekaData } from '../data/areekaData';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load Animation
      const tl = gsap.timeline();

      // Animate the main text
      tl.fromTo('.hero-title-char', 
        { y: 150, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1.2, ease: "back.out(1.7)", transformOrigin: "50% 50% -50px" }
      );

      // Animate the floating images
      tl.fromTo(imagesRef.current,
        { scale: 0, opacity: 0, rotation: () => gsap.utils.random(-30, 30) },
        { scale: 1, opacity: 1, rotation: () => gsap.utils.random(-10, 10), duration: 1.5, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      );

      tl.fromTo('.hero-bottom-text',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1"
      );

      // 2. Mouse Parallax Effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Normalize mouse coordinates (-1 to 1)
        const moveX = (clientX - centerX) / centerX;
        const moveY = (clientY - centerY) / centerY;

        imagesRef.current.forEach((img, index) => {
          // Different depth multipliers for each image to create 3D feel
          const depth = (index + 1) * 15; 
          gsap.to(img, {
            x: moveX * depth,
            y: moveY * depth,
            duration: 1,
            ease: "power2.out"
          });
        });

        // Slight text parallax
        gsap.to(textRef.current, {
          x: moveX * -20,
          y: moveY * -20,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // 3. Scroll Animation
      gsap.to(imagesRef.current, {
        yPercent: (i) => (i % 2 === 0 ? -30 : -50),
        rotation: (i) => (i % 2 === 0 ? -15 : 15),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      gsap.to(textRef.current, {
        yPercent: 40,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const floatingImages = [
    { src: areekaData.hero[0], classes: "top-[15%] left-[10%] w-[25vw] max-w-[280px] z-10" },
    { src: areekaData.hero[1], classes: "top-[10%] right-[12%] w-[22vw] max-w-[250px] z-10" },
    { src: areekaData.hero[2], classes: "bottom-[20%] left-[5%] w-[28vw] max-w-[320px] z-30" },
    { src: areekaData.hero[3], classes: "bottom-[15%] right-[8%] w-[24vw] max-w-[260px] z-30" },
    { src: areekaData.hero[4], classes: "top-[40%] left-[50%] -translate-x-1/2 w-[30vw] max-w-[350px] z-0 opacity-40 blur-[2px]" }, 
  ];

  const titleWords = areekaData.name.split(' ');

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden bg-base flex flex-col items-center justify-center pt-20">
      
      {/* Floating Images */}
      {floatingImages.map((img, index) => (
        <div 
          key={index} 
          ref={el => imagesRef.current[index] = el}
          className={`absolute overflow-hidden rounded-xl shadow-2xl border-4 border-base ${img.classes}`}
          style={{ aspectRatio: index === 2 ? '4/5' : '3/4' }}
        >
          <img 
            src={img.src} 
            alt={`Floating ${index}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Central Typography */}
      <div className="relative z-20 text-center flex flex-col items-center pointer-events-none" ref={textRef}>
        <div className="text-taupe font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-4 hero-bottom-text">
          {areekaData.metadata}
        </div>
        
        <h1 className="font-serif text-[18vw] md:text-[15vw] leading-[0.8] tracking-tighter text-ink uppercase flex flex-col items-center drop-shadow-lg">
          {titleWords.map((word, wordIdx) => (
            <div key={wordIdx} className="overflow-hidden flex">
              {word.split('').map((char, charIdx) => (
                <span key={`${wordIdx}-${charIdx}`} className="inline-block hero-title-char" style={{ transformStyle: 'preserve-3d' }}>
                  {char}
                </span>
              ))}
            </div>
          ))}
        </h1>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hero-bottom-text pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-sans tracking-widest uppercase text-ink/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-ink/50 to-transparent"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
