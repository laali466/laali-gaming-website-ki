'use client';

export default function GamesList() {
  const games = [
    {
      id: 1,
      title: 'Neon Racer',
      category: 'Racing',
      description: 'Experience high-speed racing through futuristic neon-lit cities with stunning visuals and adrenaline-pumping gameplay.',
      logo: 'https://readdy.ai/api/search-image?query=Minimalist%20racing%20game%20logo%20with%20neon%20car%20silhouette%2C%20purple%20and%20cyan%20gradient%20colors%2C%20clean%20geometric%20design%2C%20futuristic%20style%2C%20simple%20background%2C%20professional%20game%20icon%20aesthetic&width=200&height=200&seq=neon-racer-logo&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20racing%20car%20with%20neon%20lights%20speeding%20through%20cyberpunk%20city%20streets%2C%20bright%20purple%20and%20cyan%20glowing%20effects%2C%20sleek%20vehicle%20design%20with%20holographic%20elements%2C%20dynamic%20motion%20blur%20and%20particle%20effects%2C%20high-tech%20racing%20environment%20with%20clean%20minimal%20background&width=600&height=400&seq=game1&orientation=landscape',
      rating: 4.8,
      downloads: '500K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.laaligaming.neonracer'
    },
    {
      id: 2,
      title: 'Quantum Puzzle',
      category: 'Puzzle',
      description: 'Challenge your mind with quantum-inspired puzzles that blend physics, logic, and beautiful abstract visuals.',
      logo: 'https://readdy.ai/api/search-image?query=Abstract%20puzzle%20game%20logo%20with%20geometric%20quantum%20symbols%2C%20purple%20and%20cyan%20gradient%20colors%2C%20minimalist%20design%20with%20glowing%20edges%2C%20futuristic%20style%2C%20clean%20background%2C%20professional%20game%20icon%20aesthetic&width=200&height=200&seq=quantum-puzzle-logo&orientation=squarish',
      image: 'https://static.readdy.ai/image/df4f0e4942efb43214caa2614206b25c/e390edda28001b2ccf254ce4e7200aea.png',
      rating: 4.7,
      downloads: '750K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.laaligaming.quantumpuzzle'
    },
    {
      id: 3,
      title: 'Cosmic Casual',
      category: 'Casual',
      description: 'Relaxing space adventure with cute characters, perfect for casual gaming sessions and stress relief.',
      logo: 'https://readdy.ai/api/search-image?query=Cute%20space-themed%20casual%20game%20logo%20with%20friendly%20character%2C%20purple%20and%20cyan%20gradient%20colors%2C%20playful%20design%20with%20stars%2C%20minimal%20clean%20background%2C%20professional%20game%20icon%20aesthetic&width=200&height=200&seq=cosmic-casual-logo&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20space-themed%20casual%20game%20with%20cute%20characters%20floating%20among%20stars%20and%20planets%2C%20bright%20neon%20colors%20in%20purple%20and%20cyan%2C%20playful%20design%20with%20glowing%20effects%2C%20friendly%20gaming%20atmosphere%20with%20clean%20minimal%20background%20and%20vibrant%20accents&width=600&height=400&seq=game3&orientation=landscape',
      rating: 4.9,
      downloads: '1M+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.laaligaming.cosmiccasual'
    },
    {
      id: 4,
      title: 'Cyber Runner',
      category: 'Racing',
      description: 'Endless running game in a cyberpunk world with parkour mechanics and futuristic obstacles.',
      logo: 'https://readdy.ai/api/search-image?query=Cyberpunk%20runner%20game%20logo%20with%20character%20silhouette%2C%20purple%20and%20cyan%20gradient%20colors%2C%20dynamic%20action%20pose%2C%20futuristic%20style%2C%20clean%20minimal%20background%2C%20professional%20game%20icon%20aesthetic&width=200&height=200&seq=cyber-runner-logo&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Cyberpunk%20endless%20runner%20game%20with%20character%20jumping%20through%20futuristic%20city%20obstacles%2C%20neon%20purple%20and%20cyan%20lighting%2C%20dynamic%20parkour%20action%2C%20holographic%20elements%2C%20high-tech%20urban%20environment%20with%20clean%20minimal%20background&width=600&height=400&seq=game4&orientation=landscape',
      rating: 4.6,
      downloads: '300K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.laaligaming.cyberrunner'
    },
    {
      id: 5,
      title: 'Mind Maze',
      category: 'Puzzle',
      description: 'Navigate through complex 3D mazes while solving intricate puzzles in this brain-teasing adventure.',
      logo: 'https://readdy.ai/api/search-image?query=3D%20maze%20puzzle%20game%20logo%20with%20labyrinth%20design%2C%20purple%20and%20cyan%20gradient%20colors%2C%20geometric%20maze%20pattern%2C%20futuristic%20style%2C%20clean%20background%2C%20professional%20game%20icon%20aesthetic&width=200&height=200&seq=mind-maze-logo&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=3D%20futuristic%20maze%20with%20glowing%20walls%20and%20pathways%2C%20purple%20and%20cyan%20neon%20lighting%2C%20complex%20geometric%20patterns%2C%20holographic%20elements%2C%20challenging%20puzzle%20environment%20with%20clean%20minimal%20background%20and%20bright%20accents&width=600&height=400&seq=game5&orientation=landscape',
      rating: 4.5,
      downloads: '200K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.laaligaming.mindmaze'
    },
    {
      id: 6,
      title: 'Zen Garden',
      category: 'Casual',
      description: 'Create and maintain your own digital zen garden with relaxing gameplay and beautiful nature sounds.',
      logo: 'https://readdy.ai/api/search-image?query=Zen%20garden%20game%20logo%20with%20minimalist%20plant%20and%20stone%20elements%2C%20purple%20and%20cyan%20gradient%20colors%2C%20peaceful%20design%2C%20serene%20style%2C%20clean%20background%2C%20professional%20game%20icon%20aesthetic&width=200&height=200&seq=zen-garden-logo&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Peaceful%20digital%20zen%20garden%20with%20glowing%20plants%20and%20stones%2C%20purple%20and%20cyan%20ambient%20lighting%2C%20serene%20natural%20elements%2C%20holographic%20effects%2C%20calming%20atmosphere%20with%20clean%20minimal%20background%20and%20soft%20glowing%20accents&width=600&height=400&seq=game6&orientation=landscape',
      rating: 4.8,
      downloads: '400K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.laaligaming.zengarden'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
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
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-cyan-500/30">
                    <img 
                      src={game.logo} 
                      alt={`${game.title} logo`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{game.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-star-fill text-yellow-400"></i>
                        </div>
                        <span>{game.rating}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-download-line text-cyan-400"></i>
                        </div>
                        <span>{game.downloads}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{game.description}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href={game.playStoreUrl}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap text-center"
                  >
                    Play Store
                  </a>
                  <button className="flex-1 border-2 border-cyan-400 px-4 py-2 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer whitespace-nowrap">
                    Download APK
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}