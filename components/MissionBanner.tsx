import React from 'react';

export const MissionBanner: React.FC = () => {
  return (
    <div id="mission" className="bg-rose-700 text-white py-4 text-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="font-bold text-rose-200 uppercase tracking-widest text-xs md:text-sm">Our Promise</span>
        <span className="hidden md:inline text-rose-400">|</span>
        <p className="font-serif italic text-lg md:text-xl font-medium">
          100% of our profits fight AIDS and homelessness.
        </p>
      </div>
    </div>
  );
};
