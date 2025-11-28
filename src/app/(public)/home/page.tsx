'use client';

import { Navbar } from '@/components/layout/Navbar';
// Temporarily commented out for build isolation
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import Link from 'next/link';
// import propertyData from '@/data/properties.json';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

     

      {/* Prominent CTA Section - TEMPORARILY COMMENTED OUT FOR BUILD ISOLATION */}
      {/* TODO: Re-enable after identifying prerendering issue */}
      {/* 
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-beige-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-950 mb-4">
              Discover Your Perfect Property
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our curated selection of premium properties across Costa Blanca. 
              From long-term rentals to luxury sales, we have the perfect home for you.
            </p>
          </div>

          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
            <Button 
              asChild
              size="lg"
              className="relative bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-bold text-xl py-8 px-16 shadow-2xl hover:shadow-[#B8860B]/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0"
            >
              <Link href="/properties">
                <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
                View All Properties
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-950 mb-2">{propertyData.properties.length}</div>
              <div className="text-sm text-gray-600">Total Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-950 mb-2">24/7</div>
              <div className="text-sm text-gray-600">B.A.I. Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-950 mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-950 mb-2">5★</div>
              <div className="text-sm text-gray-600">Expert Rating</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Footer - TEMPORARILY COMMENTED OUT FOR BUILD ISOLATION */}
      {/* TODO: Re-enable after identifying prerendering issue */}
      {/*
      <footer className="bg-beige-light/20 border-t border-gray-200 text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-admeliora-gold">
                Ad Meliora Real Estate
              </h3>
              <p className="text-gray-600">
                {propertyData.client_details.slogan}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/properties" className="hover:text-admeliora-gold transition-colors">Properties</Link></li>
                <li><Link href="/about" className="hover:text-admeliora-gold transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-admeliora-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Contact Info</h4>
              <div className="space-y-3">
                <div className="text-gray-600">Theo: {propertyData.client_details.contact.theo}</div>
                <div className="text-gray-600">Marco: {propertyData.client_details.contact.marco}</div>
                <div className="text-gray-600">Costa Blanca, Spain</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>© 2024 Ad Meliora Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
      */}
    </div>
  );
}

