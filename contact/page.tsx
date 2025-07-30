'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}