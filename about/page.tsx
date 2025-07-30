'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import TeamSection from './TeamSection';
import CompanyHistory from './CompanyHistory';
import Vision from './Vision';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <AboutHero />
      <Vision />
      <CompanyHistory />
      <TeamSection />
      <Footer />
    </div>
  );
}