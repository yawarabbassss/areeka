import React, { useState } from 'react';
import { areekaData } from '../data/areekaData';
import { ArrowUpRight, AtSign, Play, Video, X } from 'lucide-react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="connect" className="relative bg-surface py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden z-20">
      
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src={areekaData.hero[0]} 
          alt="Atmosphere" 
          className="w-full h-full object-cover object-top opacity-20 filter grayscale mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-line mb-10">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-sans font-medium text-ink">Available for Collaborations</span>
        </div>

        {/* Heading & Subheading */}
        <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink mb-6 uppercase">
          HAVE A PROJECT IN MIND?
        </h2>
        
        <p className="max-w-2xl mx-auto text-ink/70 font-sans text-base md:text-lg leading-relaxed mb-12">
          Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-sans font-medium shadow-[0_8px_20px_rgba(43,26,32,0.2)] hover:shadow-[0_12px_25px_rgba(43,26,32,0.3)] transition-all duration-300 hover:-translate-y-1"
        >
          Contact Me 
          <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        {/* Bottom Social Pills */}
        <div className="mt-24 md:mt-32 flex flex-wrap justify-center items-center gap-4 w-full">
          {/* Profile Pill */}
          <div className="flex items-center gap-3 bg-ink text-white px-2 py-2 pr-6 rounded-full shadow-md">
            <img 
              src={areekaData.contactAvatar} 
              alt="Areeka Haq" 
              className="w-8 h-8 rounded-full object-cover border border-white/20"
            />
            <span className="font-sans text-sm font-medium">{areekaData.name}</span>
          </div>

          {/* Social Platform Pills */}
          {areekaData.social.map((platform, index) => {
            let Icon = ArrowUpRight;
            if (platform.platform.toLowerCase() === 'instagram') Icon = AtSign;
            if (platform.platform.toLowerCase() === 'youtube') Icon = Play;
            if (platform.platform.toLowerCase() === 'tiktok') Icon = Video;

            return (
              <a 
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-ink px-6 py-3 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-line hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon size={18} className="text-ink/60" />
                <span className="font-sans text-sm font-medium">{platform.platform}</span>
              </a>
            )
          })}
        </div>

      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white rounded-3xl w-full max-w-lg p-8 md:p-12 relative z-10 shadow-2xl transform transition-all">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-ink/40 hover:text-ink transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="font-serif text-3xl text-ink mb-2">Get in touch</h3>
            <p className="font-sans text-sm text-ink/60 mb-8">Fill out the form below and I'll get back to you.</p>
            
            <form action={`mailto:${areekaData.contact.email1},${areekaData.contact.email2}`} method="POST" encType="text/plain" className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-ink/60 mb-2">Name</label>
                <input type="text" name="name" required className="w-full border-b border-line pb-2 font-sans text-ink bg-transparent focus:outline-none focus:border-taupe transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-ink/60 mb-2">Subject</label>
                <input type="text" name="subject" required className="w-full border-b border-line pb-2 font-sans text-ink bg-transparent focus:outline-none focus:border-taupe transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-ink/60 mb-2">Message</label>
                <textarea name="message" required rows="4" className="w-full border-b border-line pb-2 font-sans text-ink bg-transparent focus:outline-none focus:border-taupe transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="mt-4 bg-ink text-white px-8 py-4 rounded-full font-sans font-medium hover:bg-taupe transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contact;
