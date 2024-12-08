import React, { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { StyleSelector } from './StyleSelector';
import { SizeSelector } from './SizeSelector';

export function GenerateForm() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState('realistic');
  const [size, setSize] = useState('1024x1024');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Here you would typically make an API call to your image generation service
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          Describe your artwork
        </label>
        <textarea
          id="prompt"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="A surreal landscape with floating islands and crystal waterfalls..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
      </div>

      <StyleSelector value={style} onChange={setStyle} />
      <SizeSelector value={size} onChange={setSize} />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:bg-purple-400"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating...</span>
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" />
            <span>Generate Artwork</span>
          </>
        )}
      </button>
    </form>
  );
}