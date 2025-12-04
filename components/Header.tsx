import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Books', href: '#sommelier' },
    { name: 'Cafe', href: '#cafe' },
    { name: 'Events', href: '#events' },
    { name: 'Venue Rental', href: '#venue' },
    { name: 'Mission', href: '#mission' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className={`p-2 rounded-full ${isScrolled ? 'bg-rose-700 text-white' : 'bg-stone-900 text-white'}`}>
             <ShoppingBag size={20} />
           </div>
           <span className={`text-xl font-bold tracking-tight font-serif ${isScrolled ? 'text-stone-900' : 'text-stone-900 lg:text-white drop-shadow-md'}`}>
             HOUSING WORKS
           </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide hover:text-rose-600 transition-colors ${
                isScrolled ? 'text-stone-700' : 'text-white drop-shadow-md'
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <button className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg flex items-center gap-2">
            <Heart size={16} fill="currentColor" />
            DONATE
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-stone-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 shadow-xl border-t border-stone-200 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-stone-800 border-b border-stone-200 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-rose-700 text-white py-3 rounded-md font-bold flex justify-center items-center gap-2">
             <Heart size={18} fill="currentColor" />
             DONATE NOW
          </button>
        </div>
      )}
    </header>
  );
};
