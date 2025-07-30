'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from './PrivacyContent';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
}