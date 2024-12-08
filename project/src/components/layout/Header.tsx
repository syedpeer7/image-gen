import React from 'react';
import { Palette, Calendar, BookImage, Grid } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Palette className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Digital Art Gallery</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/generate" icon={<Palette className="w-5 h-5" />}>Generate Art</Link>
            <Link href="/exhibitions" icon={<Calendar className="w-5 h-5" />}>Exhibitions</Link>
            <Link href="/collections" icon={<Grid className="w-5 h-5" />}>Collections</Link>
            <Link href="/descriptions" icon={<BookImage className="w-5 h-5" />}>Descriptions</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}