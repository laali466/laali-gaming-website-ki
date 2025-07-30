'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GamesHero from './GamesHero';
import GameCategories from './GameCategories';
import GamesList from './GamesList';

export default function Games() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <GamesHero />
      <GameCategories />
      <GamesList />
      <Footer />
    </div>
  );
}