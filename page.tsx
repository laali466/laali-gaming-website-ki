
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import GamesPreview from './GamesPreview';
import CallToAction from './CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GamesPreview />
      <CallToAction />
      <Footer />
    </div>
  );
}
