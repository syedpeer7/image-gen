import React from 'react';
import { Palette, Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-6 h-6" />
              <span className="text-xl font-bold">Digital Art Gallery</span>
            </div>
            <p className="text-gray-400">
              Discover and create amazing digital art in our innovative online gallery space.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/generate" className="hover:text-white">Generate Art</a></li>
              <li><a href="/exhibitions" className="hover:text-white">Exhibitions</a></li>
              <li><a href="/collections" className="hover:text-white">Collections</a></li>
              <li><a href="/descriptions" className="hover:text-white">Descriptions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digital Art Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}