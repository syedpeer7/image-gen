import React from 'react';
import { GenerateForm } from '../components/generate/GenerateForm';

export function GeneratePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Generate Artwork</h1>
          <div className="bg-white rounded-xl shadow-md p-6">
            <GenerateForm />
          </div>
        </div>
      </div>
    </div>
  );
}