import React from 'react';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const EVENTS: EventItem[] = [
  {
    id: 1,
    date: 'OCT 24',
    time: '7:00 PM',
    title: 'An Evening with Zadie Smith',
    category: 'Reading',
    description: 'The acclaimed author discusses her latest novel with a special guest moderator.',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    date: 'OCT 28',
    time: '8:00 PM',
    title: 'The Moth StorySLAM',
    category: 'Comedy',
    description: 'Open-mic storytelling competition. Prepare a five-minute story on the theme: DISGUISE.',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    date: 'NOV 02',
    time: '6:30 PM',
    title: 'Indie Folk Night: Iron & Wine',
    category: 'Music',
    description: 'An intimate acoustic performance in the stacks. Tickets required.',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export const EventsList: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-4 text-white">Upcoming Events</h2>
            <p className="text-stone-400 max-w-md">
              From world-class readings to intimate concerts, something is always happening at the Bookstore.
            </p>
          </div>
          <button className="px-6 py-3 border border-stone-600 rounded-full hover:bg-stone-800 hover:border-stone-500 transition text-sm font-bold tracking-wide">
            VIEW FULL CALENDAR
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map(event => (
            <article key={event.id} className="group bg-stone-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition duration-300 shadow-xl">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider shadow-md">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-stone-400 mb-3 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-rose-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-rose-400" />
                    {event.time}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 leading-tight group-hover:text-rose-300 transition">
                  {event.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center gap-1 text-xs font-bold text-stone-500 uppercase tracking-widest group-hover:text-white transition">
                  Get Tickets <ArrowRight size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};