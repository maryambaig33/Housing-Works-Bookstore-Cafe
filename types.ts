export interface BookPairing {
  bookTitle: string;
  author: string;
  description: string;
  drinkPairing: string;
  drinkReason: string;
}

export interface EventItem {
  id: number;
  date: string;
  time: string;
  title: string;
  category: 'Reading' | 'Music' | 'Comedy' | 'Panel';
  description: string;
  imageUrl: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: 'Espresso' | 'Tea' | 'Bakery' | 'Wine & Beer';
}
