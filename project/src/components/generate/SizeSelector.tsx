import React from 'react';

const sizes = [
  { id: '1024x1024', name: 'Square (1:1)' },
  { id: '1024x1792', name: 'Portrait (9:16)' },
  { id: '1792x1024', name: 'Landscape (16:9)' },
];

interface SizeSelectorProps {
  value: string;
  onChange: (size: string) => void;
}

export function SizeSelector({ value, onChange }: SizeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Image Size
      </label>
      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size) => (
          <button
            key={size.id}
            type="button"
            onClick={() => onChange(size.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              value === size.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
  );
}