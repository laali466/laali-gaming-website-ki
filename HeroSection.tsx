
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20gaming%20environment%20with%20neon%20lights%2C%20holographic%20displays%2C%20and%20digital%20technology%20elements%20in%20purple%20and%20cyan%20colors%2C%20modern%20sleek%20design%20with%20glowing%20circuits%20and%20abstract%20geometric%20patterns%2C%20high-tech%20atmosphere%20with%20dark%20background%20highlighting%20bright%20neon%20accents%2C%20professional%20gaming%20studio%20aesthetic%20with%20clean%20minimal%20composition&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Welcome to LAALI Page
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            Pioneering the future of gaming with innovative casual, puzzle, and racing games for Android and PC platforms
          </p>
          <p className="text-sm text-cyan-400 mb-8 font-light">
            This website is created by Amarnath Tiwari
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/games" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
              Explore Our Games
            </Link>
            <a href="https://play.google.com/store/apps/developer?id=LAALI+Gaming" className="border-2 border-cyan-400 px-8 py-4 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer whitespace-nowrap">
              Download Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-down-line text-cyan-400 text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
