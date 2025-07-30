'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JoinHero from './JoinHero';
import Opportunities from './Opportunities';
import ApplicationForm from './ApplicationForm';

export default function Join() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <JoinHero />
      <Opportunities />
      <ApplicationForm />
      <Footer />
    </div>
  );
}