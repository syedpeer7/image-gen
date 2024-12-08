import React from 'react';

const styles = [
  { id: 'realistic', name: 'Realistic' },
  { id: 'abstract', name: 'Abstract' },
  { id: 'anime', name: 'Anime' },
  { id: 'digital', name: 'Digital Art' },
  { id: 'oil', name: 'Oil Painting' },
  { id: 'watercolor', name: 'Watercolor' },
];

interface StyleSelectorProps {
  value: string;
  onChange: (style: string) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Art Style
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            type="button"
            onClick={() => onChange(style.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              value === style.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {style.name}
          </button>
        ))}
      </div>
    </div>
  );
}