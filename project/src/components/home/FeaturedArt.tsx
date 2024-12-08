import React from 'react';

const featuredArtworks = [
  {
    title: "Digital Dreams",
    artist: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80",
  },
  {
    title: "Neural Canvas",
    artist: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80",
  },
  {
    title: "Quantum Expressions",
    artist: "Marcus Wong",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
  },
];

export function FeaturedArt() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{artwork.title}</h3>
                <p className="text-gray-300">by {artwork.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}