
'use client';

import Link from 'next/link';

export default function GamesPreview() {
  const games = [
    {
      title: 'Neon Racer',
      category: 'Racing',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20racing%20car%20with%20neon%20lights%20speeding%20through%20cyberpunk%20city%20streets%2C%20bright%20purple%20and%20cyan%20glowing%20effects%2C%20sleek%20vehicle%20design%20with%20holographic%20elements%2C%20dynamic%20motion%20blur%20and%20particle%20effects%2C%20high-tech%20racing%20environment%20with%20clean%20minimal%20background&width=600&height=400&seq=game1&orientation=landscape',
      description: 'Experience high-speed racing in neon-lit cyberpunk cities'
    },
    {
      title: 'Quantum Puzzle',
      category: 'Puzzle',
      image: 'https://static.readdy.ai/image/df4f0e4942efb43214caa2614206b25c/e390edda28001b2ccf254ce4e7200aea.png',
      description: 'Mind-bending puzzles that challenge your logic and creativity'
    },
    {
      title: 'Cosmic Casual',
      category: 'Casual',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20space-themed%20casual%20game%20with%20cute%20characters%20floating%20among%20stars%20and%20planets%2C%20bright%20neon%20colors%20in%20purple%20and%20cyan%2C%20playful%20design%20with%20glowing%20effects%2C%20friendly%20gaming%20atmosphere%20with%20clean%20minimal%20background%20and%20vibrant%20accents&width=600&height=400&seq=game3&orientation=landscape',
      description: 'Relaxing space adventure perfect for casual gaming sessions'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our latest gaming creations that blend innovation with entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 rounded-full text-white text-sm font-semibold">
                  {game.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/games" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
            View All Games
          </Link>
        </div>
      </div>
    </section>
  );
}
