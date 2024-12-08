import React from 'react';
import { Palette, Calendar, BookImage, Grid } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Generate Artwork',
    description: 'Create unique digital masterpieces using our advanced AI-powered tools.',
  },
  {
    icon: <BookImage className="w-8 h-8" />,
    title: 'Create Descriptions',
    description: 'Craft compelling narratives and descriptions for your artwork.',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Organize Exhibitions',
    description: 'Plan and showcase your art in virtual exhibitions.',
  },
  {
    icon: <Grid className="w-8 h-8" />,
    title: 'Present Collections',
    description: 'Curate and display your artwork in themed collections.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}