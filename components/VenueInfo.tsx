import React from 'react';

export const VenueInfo: React.FC = () => {
  return (
    <section id="venue" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl font-serif font-bold text-stone-900 leading-tight">
              A Venue Like<br/>No Other
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              With its mahogany balconies, spiral staircases, and walls lined with books, Housing Works Bookstore Cafe is one of New York City’s most unique event spaces.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              By renting our space for your wedding, corporate party, or private function, you are directly supporting our mission. It’s a celebration that gives back.
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold font-serif text-xl">
                  1
                </div>
                <div>
                   <h4 className="font-bold text-stone-900">Capacity</h4>
                   <p className="text-sm text-stone-500">Up to 200 guests for cocktails, 150 seated.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold font-serif text-xl">
                  2
                </div>
                <div>
                   <h4 className="font-bold text-stone-900">Catering</h4>
                   <p className="text-sm text-stone-500">Full in-house catering and bar packages available.</p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-md font-bold transition shadow-xl">
              INQUIRE ABOUT RENTALS
            </button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding at Bookstore" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1519225468359-2996515c9dc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Event Detail" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
