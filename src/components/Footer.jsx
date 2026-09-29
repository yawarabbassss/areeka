import React from 'react';
import { areekaData } from '../data/areekaData';

const Footer = () => {
  return (
    <footer className="bg-ink text-white py-20 md:py-32 px-6 md:px-12 relative z-20 rounded-t-[3rem] -mt-8">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 md:mb-40">
          
          {/* Brand & Copyright */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-between h-full">
            <div>
              <a href="#" className="font-serif text-4xl tracking-wide uppercase text-white hover:text-taupe transition-colors">
                {areekaData.name}
              </a>
              <p className="text-xs font-sans text-white/40 mt-4 tracking-[0.2em] uppercase max-w-xs leading-relaxed">
                {areekaData.metadata}
              </p>
            </div>
            
            <p className="text-[10px] font-sans text-white/30 tracking-[0.2em] uppercase mt-12 md:mt-0">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-start w-full">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-6 font-bold">Location</h4>
            <p className="text-sm font-sans text-white/70 leading-loose">
              {areekaData.contact.address.split(', ').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col items-start w-full">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-6 font-bold">Connect</h4>
            <div className="flex flex-col gap-4 text-sm font-sans text-white/70">
              <a href={`mailto:${areekaData.contact.email2}`} className="hover:text-taupe transition-colors">{areekaData.contact.email2}</a>
              <a href={`tel:${areekaData.contact.phone.replace(/ /g, '')}`} className="hover:text-taupe transition-colors">{areekaData.contact.phone}</a>
              <a href={areekaData.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-taupe transition-colors">{areekaData.contact.website.replace('http://', '')}</a>
            </div>
            
            <div className="flex gap-6 mt-8">
              {areekaData.social.map((platform, i) => (
                <a 
                  key={i} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-sans tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                >
                  {platform.platform}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Giant Text */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between border-t border-white/10 pt-8 gap-6">
          <h1 className="font-serif text-[12vw] md:text-[14vw] leading-none text-white/5 tracking-tighter uppercase pointer-events-none select-none">
            {areekaData.name.split(' ')[0]}
          </h1>
          
          <div className="text-[10px] md:text-xs font-sans tracking-widest text-white/30 whitespace-nowrap pb-4 md:pb-8">
            DEVELOPED BY <a href="https://yawarabbass.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-taupe transition-colors underline underline-offset-4">YAWAR ABBAS</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
