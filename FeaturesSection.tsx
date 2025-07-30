
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-gamepad-line',
      title: 'Casual Games',
      description: 'Engaging and accessible games perfect for quick entertainment sessions and relaxation'
    },
    {
      icon: 'ri-puzzle-line',
      title: 'Puzzle Games',
      description: 'Mind-bending challenges that test your problem-solving skills and creativity'
    },
    {
      icon: 'ri-car-line',
      title: 'Racing Games',
      description: 'High-speed thrills with stunning graphics and immersive racing experiences'
    },
    {
      icon: 'ri-android-line',
      title: 'Android & PC',
      description: 'Cross-platform compatibility ensuring great gaming experience on all devices'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Award Winning',
      description: 'Recognized for excellence in game design and innovative gameplay mechanics'
    },
    {
      icon: 'ri-team-line',
      title: 'Community Driven',
      description: 'Built with player feedback and community involvement at the heart of development'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose LAALI ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We create exceptional gaming experiences that captivate players and push the boundaries of interactive entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
