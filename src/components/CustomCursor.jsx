import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(max-width: 768px)").matches) return; // Disable on mobile

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const onMouseEnterLink = () => cursor.classList.add('hovering');
    const onMouseLeaveLink = () => cursor.classList.remove('hovering');
    
    const onMouseEnterImage = () => {
      cursor.classList.add('hovering-image');
      cursor.classList.remove('hovering');
    };
    const onMouseLeaveImage = () => cursor.classList.remove('hovering-image');

    window.addEventListener('mousemove', onMouseMove);

    // Initial binding
    const bindEvents = () => {
      document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
      
      document.querySelectorAll('img, .gallery-img-container, .reel-card').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterImage);
        el.addEventListener('mouseleave', onMouseLeaveImage);
      });
    };

    bindEvents();
    
    // Mutation observer to bind to dynamically added elements if needed
    const observer = new MutationObserver(bindEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      document.querySelectorAll('img, .gallery-img-container, .reel-card').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterImage);
        el.removeEventListener('mouseleave', onMouseLeaveImage);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block"></div>;
};

export default CustomCursor;
