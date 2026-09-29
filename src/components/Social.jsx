import React from 'react';
import { areekaData } from '../data/areekaData';
import { ArrowUpRight } from 'lucide-react';

const Social = () => {
  return (
    <section className="py-24 md:py-40 bg-surface rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          
          <div className="w-full md:w-1/3">
            <div className="text-xs font-sans tracking-[0.4em] uppercase text-taupe mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-taupe"></span>
              Connect
            </div>
            <h2 className="font-serif text-5xl md:text-7xl text-ink uppercase leading-[1.05] mb-6">
              Digital <br />
              <span className="text-taupe italic">Presence</span>
            </h2>
            <p className="text-base font-sans font-light text-ink/70 max-w-sm leading-relaxed">
              Join the community. Connect with Areeka across her official platforms and stay updated.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-col">
            {areekaData.social.map((platform, index) => (
              <a 
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-line hover:border-taupe transition-colors duration-500"
              >
                <div className="flex flex-col mb-4 md:mb-0">
                  <span className="font-serif text-4xl md:text-6xl text-ink group-hover:text-taupe transition-colors duration-500">
                    {platform.platform}
                  </span>
                </div>
                
                <div className="flex items-center gap-8 justify-between md:justify-end w-full md:w-auto">
                  <span className="font-sans text-sm md:text-base text-ink/70 tracking-widest uppercase">
                    {platform.handle}
                  </span>
                  
                  <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center group-hover:bg-taupe group-hover:text-white group-hover:border-taupe transition-all duration-500 overflow-hidden relative shadow-sm">
                    <ArrowUpRight className="absolute transition-transform duration-500 group-hover:translate-x-full group-hover:-translate-y-full" size={24} />
                    <ArrowUpRight className="absolute -translate-x-full translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" size={24} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Social;
