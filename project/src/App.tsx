import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { FeaturedArt } from './components/home/FeaturedArt';
import { GeneratePage } from './pages/GeneratePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedArt />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generate" element={<GeneratePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;