import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MissionBanner } from './components/MissionBanner';
import { LiterarySommelier } from './components/LiterarySommelier';
import { CafeMenu } from './components/CafeMenu';
import { EventsList } from './components/EventsList';
import { VenueInfo } from './components/VenueInfo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MissionBanner />
        <LiterarySommelier />
        <CafeMenu />
        <EventsList />
        <VenueInfo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
