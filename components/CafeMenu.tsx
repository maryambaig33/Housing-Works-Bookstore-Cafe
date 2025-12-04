import React from 'react';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  { name: 'Housing Works Blend', price: '$3.50', description: 'Our signature house roast, fair trade organic.', category: 'Espresso' },
  { name: 'Honey Lavender Latte', price: '$5.75', description: 'Espresso with steamed milk and house-made floral syrup.', category: 'Espresso' },
  { name: 'Cortado', price: '$4.25', description: 'Equal parts espresso and warm milk.', category: 'Espresso' },
  { name: 'Earl Grey Cream', price: '$4.00', description: 'Black tea with bergamot and vanilla.', category: 'Tea' },
  { name: 'Vegan Banana Bread', price: '$4.50', description: 'Moist, dense, and full of flavor.', category: 'Bakery' },
  { name: 'Ham & Gruyère Croissant', price: '$6.00', description: 'Warm, flaky pastry with savory filling.', category: 'Bakery' },
  { name: 'Local Craft Beer', price: '$8.00', description: 'Rotating selection from NYC breweries.', category: 'Wine & Beer' },
  { name: 'Pinot Noir', price: '$11.00', description: 'Glass. Earthy notes with a cherry finish.', category: 'Wine & Beer' },
];

export const CafeMenu: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(i => i.category)));

  return (
    <section id="cafe" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-stone-900 mb-6">The Cafe</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Sip for a cause. Our cafe serves a selection of coffee, tea, beer, wine, and light bites.
            It's the perfect spot to read, write, or meet a friend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {categories.map(category => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-rose-800 border-b border-rose-100 pb-2 mb-4">
                {category}
              </h3>
              <div className="space-y-6">
                {MENU_ITEMS.filter(item => item.category === category).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start group">
                    <div>
                      <h4 className="font-bold text-stone-800 group-hover:text-rose-700 transition">{item.name}</h4>
                      <p className="text-sm text-stone-500">{item.description}</p>
                    </div>
                    <span className="font-serif font-bold text-stone-900 ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <p className="text-sm text-stone-400 italic">Menu subject to change based on seasonality and availability.</p>
        </div>
      </div>
    </section>
  );
};
