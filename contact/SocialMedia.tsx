'use client';

export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'ri-facebook-fill',
      url: 'https://facebook.com/laaligaming',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Twitter',
      icon: 'ri-twitter-x-fill',
      url: 'https://twitter.com/laaligaming',
      color: 'from-gray-800 to-gray-600'
    },
    {
      name: 'Instagram',
      icon: 'ri-instagram-fill',
      url: 'https://instagram.com/laaligaming',
      color: 'from-pink-600 to-purple-600'
    },
    {
      name: 'YouTube',
      icon: 'ri-youtube-fill',
      url: 'https://youtube.com/@laaligaming',
      color: 'from-red-600 to-red-400'
    },
    {
      name: 'Discord',
      icon: 'ri-discord-fill',
      url: 'https://discord.gg/laaligaming',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      url: 'https://linkedin.com/company/laaligaming',
      color: 'from-blue-700 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Follow Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, game releases, and community events.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${social.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{social.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-400 mb-6">
              Be part of our growing gaming community! Get exclusive updates, participate in beta testing, and connect with fellow gamers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/laaligaming" className="bg-gradient-to-r from-indigo-600 to-indigo-400 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
                Join Discord
              </a>
              <a href="https://t.me/laaligaming" className="border-2 border-cyan-400 px-6 py-3 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer whitespace-nowrap">
                Telegram Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}