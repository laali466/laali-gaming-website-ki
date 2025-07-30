'use client';

export default function CompanyHistory() {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'LAALI Gaming was founded with a vision to create innovative gaming experiences for mobile and PC platforms.'
    },
    {
      year: '2021',
      title: 'First Game Release',
      description: 'Launched our first casual game which received overwhelming positive response from the gaming community.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Expanded our team and ventured into puzzle and racing game development, reaching 500K+ downloads.'
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Won multiple indie game awards and established partnerships with major gaming platforms.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Launched cutting-edge games with advanced graphics and gameplay mechanics, surpassing 1M+ downloads.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From a small startup to a recognized game development studio, here's how we've grown over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}