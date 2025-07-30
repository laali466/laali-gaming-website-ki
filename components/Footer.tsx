
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-pacifico">
              LAALI Gaming
            </div>
            <p className="text-gray-400 text-sm">
              Creating innovative casual, puzzle, and racing games for Android and PC platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Our Games
              </Link>
              <Link href="/join" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Join Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <div className="flex flex-col space-y-2">
              <a href="tel:+918957308346" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Contact Us
              </a>
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <a href="mailto:laalicompany@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                laalicompany@gmail.com
              </a>
            </div>
          </div>

          {/* Social & Download */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <i className="ri-twitter-x-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <i className="ri-youtube-fill text-white"></i>
              </a>
            </div>
            <a href="https://play.google.com/store/apps/developer?id=LAALI+Gaming" className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
              <i className="ri-google-play-fill"></i>
              <span className="text-sm">Play Store</span>
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 LAALI Gaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
