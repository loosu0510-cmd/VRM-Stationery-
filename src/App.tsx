import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProductGallery } from './components/ProductGallery';
import type { CategoryId } from './data/catalog';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <CategoriesSection onSelectCategory={setSelectedCategory} />
        <ProductGallery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <AboutSection />
        <ContactLocationSection />
      </main>

      <Footer />
    </div>
  );
}
