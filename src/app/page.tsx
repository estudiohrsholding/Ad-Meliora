'use client';

import { HeroSection } from '@/components/properties/HeroSection';
import { PropertyCard } from '@/components/properties/PropertyCard';
import propertyData from '@/data/properties.json';
import { PropertyData } from '@/types/property';

export default function Home() {
  const data = propertyData as PropertyData;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <HeroSection />

      {/* Properties Grid Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Featured Coastal Properties & Investments
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our handpicked selection of premium properties across Costa Blanca
            </p>
          </div>

          {/* Responsive Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {data.properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* View All Properties CTA */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <button className="relative bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold text-lg py-4 px-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0">
                View All Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Our team of local experts is here to help you find the perfect property on Costa Blanca
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">T</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Theo</h3>
              <p className="text-gray-400 mb-4">Local Expert</p>
              <div className="text-purple-400 font-semibold text-lg">
                711 06 51 34
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Marco</h3>
              <p className="text-gray-400 mb-4">International Client Specialist</p>
              <div className="text-purple-400 font-semibold text-lg">
                +46 70 570 98 25
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Get B.A.I. Assistance</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold py-3 px-6 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 rounded-xl border-0">
                Start B.A.I. Chat
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-bold py-3 px-6 rounded-xl border border-gray-700 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Ad Meliora Real Estate
              </h3>
              <p className="text-gray-500">
                Long-term rentals, short-term rentals and sales on Costa Blanca. Reliable service—contact us!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">All Properties</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Long-Term Rentals</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Short-Term Rentals</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Properties for Sale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="text-gray-400">Theo: 711 06 51 34</div>
                <div className="text-gray-400">Marco: +46 70 570 98 25</div>
                <div className="text-gray-400">Costa Blanca, Spain</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 text-center text-gray-500">
            <p>© 2024 Ad Meliora Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}