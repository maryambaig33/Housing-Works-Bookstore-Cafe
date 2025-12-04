import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-wide">HOUSING WORKS</h3>
             <p className="mb-6 max-w-sm leading-relaxed text-stone-500">
               Housing Works is a healing community of people living with and affected by HIV/AIDS. Our mission is to end the dual crises of homelessness and AIDS through relentless advocacy, the provision of lifesaving services, and entrepreneurial businesses that sustain our efforts.
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-white hover:text-rose-500 transition"><Facebook size={20} /></a>
               <a href="#" className="text-white hover:text-rose-500 transition"><Twitter size={20} /></a>
               <a href="#" className="text-white hover:text-rose-500 transition"><Instagram size={20} /></a>
             </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-rose-600 mt-1 shrink-0" />
                <span>126 Crosby Street<br/>New York, NY 10012</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-rose-600 shrink-0" />
                <span>(212) 334-3324</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-rose-600 shrink-0" />
                <span>info@housingworks.org</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Hours</h4>
             <ul className="space-y-2">
               <li className="flex justify-between border-b border-stone-800 pb-2">
                 <span>Mon - Fri</span>
                 <span className="text-white">11am - 7pm</span>
               </li>
               <li className="flex justify-between border-b border-stone-800 pb-2">
                 <span>Sat - Sun</span>
                 <span className="text-white">11am - 5pm</span>
               </li>
             </ul>
             <div className="mt-6">
               <button className="w-full bg-stone-800 hover:bg-stone-700 text-white py-2 px-4 rounded text-sm font-bold transition">
                 Volunteer With Us
               </button>
             </div>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Housing Works. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};