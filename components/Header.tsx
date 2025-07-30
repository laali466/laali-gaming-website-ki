
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-pacifico">
              LAALI Gaming
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              About Us
            </Link>
            <Link href="/games" className="text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              Our Games
            </Link>
            <Link href="/join" className="text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              Join Us
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-cyan-500/20 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
                About Us
              </Link>
              <Link href="/games" className="text-white hover:text-cyan-400 transition-colors">
                Our Games
              </Link>
              <Link href="/join" className="text-white hover:text-cyan-400 transition-colors">
                Join Us
              </Link>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
