'use client';

export default function TeamSection() {
  const team = [
    {
      name: 'Amarnath Tiwari',
      role: 'Founder & CEO',
      image: 'https://static.readdy.ai/image/df4f0e4942efb43214caa2614206b25c/6e1fe8cf081057c30374510e9f7adde9.jfif',
      description: 'Visionary leader driving innovation in game development'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Game Designer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20creative%20Asian%20female%20game%20designer%20in%20modern%20tech%20office%2C%20wearing%20casual%20creative%20attire%2C%20confident%20expression%2C%20with%20subtle%20gaming%20elements%20and%20neon%20lighting%20in%20background%2C%20clean%20minimal%20corporate%20headshot%20style&width=400&height=400&seq=designer&orientation=squarish',
      description: 'Expert in creating engaging gameplay experiences'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Senior Developer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20focused%20Hispanic%20male%20software%20developer%20in%20modern%20tech%20workspace%2C%20wearing%20casual%20developer%20attire%2C%20confident%20smile%2C%20with%20subtle%20coding%20elements%20and%20neon%20lighting%20in%20background%2C%20clean%20minimal%20corporate%20headshot%20style&width=400&height=400&seq=developer&orientation=squarish',
      description: 'Technical architect behind our innovative games'
    },
    {
      name: 'Emma Johnson',
      role: 'Art Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20creative%20Caucasian%20female%20art%20director%20in%20modern%20creative%20studio%2C%20wearing%20artistic%20casual%20attire%2C%20inspiring%20expression%2C%20with%20subtle%20artistic%20elements%20and%20neon%20lighting%20in%20background%2C%20clean%20minimal%20corporate%20headshot%20style&width=400&height=400&seq=artist&orientation=squarish',
      description: 'Creative mastermind behind our stunning visuals'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The talented individuals who bring your favorite games to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/30">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}