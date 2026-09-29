import React, { useState, useEffect } from 'react';
import { areekaData } from '../data/areekaData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Work', href: '#work' },
    { name: 'Screen', href: '#screen' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500 flex justify-center pointer-events-none">
      <div 
        className={`pointer-events-auto flex justify-between items-center w-full max-w-6xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'bg-surface/80 backdrop-blur-xl border border-line py-3 px-8 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
            : 'bg-transparent py-4 px-4'
        }`}
      >
        <a href="#" className="font-serif text-2xl tracking-wide uppercase text-ink hover:text-taupe transition-colors">
          {areekaData.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-sans tracking-[0.2em] uppercase text-ink/70 hover:text-taupe transition-all duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-taupe rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-ink p-2 -mr-2 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-surface z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out pointer-events-auto ${
          mobileMenuOpen ? 'opacity-100 visible backdrop-blur-2xl' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col gap-10 text-center">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-5xl tracking-widest text-ink hover:text-taupe transition-colors"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: mobileMenuOpen ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
