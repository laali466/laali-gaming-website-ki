'use client';

import { useState } from 'react';

export default function GameCategories() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Games', icon: 'ri-gamepad-line' },
    { id: 'casual', name: 'Casual', icon: 'ri-heart-line' },
    { id: 'puzzle', name: 'Puzzle', icon: 'ri-puzzle-line' },
    { id: 'racing', name: 'Racing', icon: 'ri-car-line' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Game Categories
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`${category.icon} text-lg`}></i>
                </div>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}