import React from 'react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Digital Art Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Generate unique artwork, organize exhibitions, and showcase your digital masterpieces
          in our innovative gallery space.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 mx-auto transition-colors duration-200">
          <Sparkles className="w-5 h-5" />
          <span>Start Creating</span>
        </button>
      </div>
    </section>
  );
}