'use client';

export default function ContactHero() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20communication%20concept%20with%20holographic%20messaging%20interface%2C%20neon%20purple%20and%20cyan%20lighting%2C%20futuristic%20contact%20and%20support%20elements%2C%20digital%20connectivity%20visualization%2C%20clean%20minimal%20background%20with%20glowing%20tech%20elements%20and%20abstract%20geometric%20patterns&width=1920&height=800&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Get in touch with our team. We'd love to hear from you and answer any questions you might have.
          </p>
        </div>
      </div>
    </section>
  );
}