import React from 'react';
import { areekaData } from '../data/areekaData';

const Featured = () => {
  if (!areekaData.featured || areekaData.featured.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-base relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-32">
          <div className="text-xs font-sans tracking-[0.4em] uppercase text-taupe mb-4">
            Highlights
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-ink uppercase">
            Featured Works
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {areekaData.featured.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col gap-12 md:gap-24 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="w-full md:w-3/5 overflow-hidden group rounded-3xl shadow-2xl border border-line">
                <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left">
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-taupe mb-6 inline-block">
                  {item.type}
                </span>
                <h3 className="font-serif text-4xl md:text-6xl text-ink uppercase leading-[1.1]">
                  {item.title}
                </h3>
                <div className="mt-8">
                  <button className="text-xs font-sans tracking-[0.2em] uppercase text-ink hover:text-taupe transition-colors border-b border-ink/20 hover:border-taupe pb-2">
                    Explore Moment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
