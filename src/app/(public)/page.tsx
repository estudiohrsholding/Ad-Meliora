'use client';

import { HeroSection } from '@/components/properties/HeroSection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Sparkles } from 'lucide-react';
import Link from 'next/link';
import propertyData from '@/data/properties.json';

export default function HomePage() {
  const featuredProperties = propertyData.properties.slice(0, 3); // First 3 properties for home page

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Properties Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our handpicked selection of premium Costa Blanca properties
            </p>
          </div>

          {/* Featured Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div key={property.id} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  {/* Property Image Placeholder */}
                  <div className="relative h-32 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute top-3 left-3">
                      <div className={`px-2 py-1 text-xs font-semibold rounded text-white ${
                        property.type === 'For Sale' 
                          ? 'bg-gradient-to-r from-emerald-600 to-green-500' 
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                      }`}>
                        {property.type}
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-gray-900/95 backdrop-blur-sm rounded px-2 py-1 text-xs font-bold text-white">
                        {property.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-gray-400 mb-2">
                      <Home className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                      {property.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {property.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA - Point to Properties Page */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
              <Button 
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold text-xl py-6 px-12 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0"
              >
                <Link href="/properties">
                  <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
                  View All Properties
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">{propertyData.properties.length}</div>
              <div className="text-sm text-gray-400">Total Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">B.A.I. Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">5★</div>
              <div className="text-sm text-gray-400">Expert Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
