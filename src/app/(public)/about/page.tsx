'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Meet Ad Meliora
          </h1>
          <div className="prose prose-invert mx-auto">
             <p className="text-xl text-gray-400">
               Ad Meliora Real Estate is your trusted partner for finding the perfect home in Costa Blanca.
               We specialize in long-term rentals, short-term rentals, and property sales.
             </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
