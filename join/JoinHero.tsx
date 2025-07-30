'use client';

export default function JoinHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Diverse%20team%20of%20people%20collaborating%20on%20gaming%20projects%2C%20modern%20tech%20workspace%20with%20multiple%20screens%2C%20neon%20purple%20and%20cyan%20lighting%2C%20futuristic%20office%20environment%2C%20teamwork%20and%20innovation%20atmosphere%2C%20clean%20minimal%20background%20with%20glowing%20tech%20elements&width=1920&height=1080&seq=join-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Be part of the gaming revolution! We're looking for passionate testers and promoters to help us create the next generation of amazing games.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bug-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Game Testers</h3>
              <p className="text-gray-400">Help us find bugs and improve gameplay experience</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-megaphone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Promoters</h3>
              <p className="text-gray-400">Share our games with the world and grow our community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}