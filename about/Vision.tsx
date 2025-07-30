'use client';

export default function Vision() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Vision & Mission
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-eye-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the leading game development studio that creates innovative, engaging, and memorable gaming experiences that connect players across all platforms and cultures.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To develop high-quality, accessible games that entertain, challenge, and inspire players while pushing the boundaries of interactive entertainment through cutting-edge technology and creative storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}