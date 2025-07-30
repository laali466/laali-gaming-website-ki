'use client';

export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20gaming%20studio%20workspace%20with%20developers%20working%20on%20computers%2C%20neon%20purple%20and%20cyan%20lighting%2C%20futuristic%20office%20environment%20with%20holographic%20displays%2C%20clean%20minimal%20design%20highlighting%20creativity%20and%20innovation%2C%20professional%20atmosphere%20with%20glowing%20tech%20elements%20and%20modern%20furniture&width=1920&height=1080&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About LAALI Gaming
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We are passionate game developers dedicated to creating extraordinary gaming experiences that bring joy, challenge, and excitement to players worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">50+</h3>
              <p className="text-gray-400">Games Published</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-download-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1M+</h3>
              <p className="text-gray-400">Downloads</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">4.8</h3>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}