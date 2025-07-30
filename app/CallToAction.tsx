
'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Join the Gaming Revolution?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Become part of our community of gamers, testers, and promoters. Help us shape the future of gaming together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/join" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap">
              Join Our Team
            </Link>
            <Link href="/contact" className="border-2 border-cyan-400 px-8 py-4 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer whitespace-nowrap">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
