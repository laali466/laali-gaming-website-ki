'use client';

export default function GamesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Gaming%20collection%20showcase%20with%20multiple%20game%20screenshots%20floating%20in%20futuristic%20space%2C%20neon%20purple%20and%20cyan%20lighting%20effects%2C%20holographic%20game%20interfaces%2C%20modern%20gaming%20aesthetic%20with%20glowing%20elements%20and%20digital%20particles%2C%20clean%20minimal%20background%20highlighting%20game%20diversity&width=1920&height=1080&seq=games-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Games
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover our collection of innovative games designed to entertain, challenge, and inspire players across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://play.google.com/store/apps/developer?id=LAALI+Gaming" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
              View on Play Store
            </a>
            <button className="border-2 border-cyan-400 px-8 py-4 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer whitespace-nowrap">
              Download APK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}