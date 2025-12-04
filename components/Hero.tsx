import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507842217121-4e9632c46320?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Classic library look
        }}
      >
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-rose-200">
          Est. 1994 &middot; Soho, NYC
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Books. Coffee.<br/>
          <span className="italic font-light text-rose-100">Community.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-200 mb-10 font-light leading-relaxed">
          New York City's most beloved bookstore cafe. 
          100% of our profits go to Housing Works' lifesaving services for people living with HIV/AIDS and homelessness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#events" className="px-8 py-3 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-100 transition shadow-lg">
            Browse Events
          </a>
          <a href="#venue" className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10 transition backdrop-blur-sm">
            Rent the Venue
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
