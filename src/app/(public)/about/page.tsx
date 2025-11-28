'use client';

import { Navbar } from '@/components/layout/Navbar';
import propertyData from '@/data/properties.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Award, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const data = propertyData;

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Ad Meliora
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {data.client_details.slogan}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* About Content */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Your Trusted Real Estate Partner</h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Welcome to Ad Meliora Real Estate, your premier destination for exceptional properties along the stunning Costa Blanca coastline. 
                  With years of experience and deep local knowledge, we specialize in connecting clients with their perfect homes.
                </p>
                
                <p>
                  Whether you're looking for a long-term rental, short-term holiday accommodation, or a permanent investment property, 
                  our curated selection ensures quality, value, and peace of mind.
                </p>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Why Choose Ad Meliora?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Local expertise with international reach</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Handpicked premium properties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Personalized service 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Transparent pricing and processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Impact</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                  <Award className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">5★</div>
                  <div className="text-gray-400">Expert Rating</div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                  <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">3</div>
                  <div className="text-gray-400">Coastal Towns</div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                  <Phone className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <Button 
                asChild
                className="relative bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold text-lg py-4 px-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0"
              >
                <Link href="/properties">View Our Properties</Link>
              </Button>
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
                <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link href="/properties" className="hover:text-purple-400 transition-colors">Properties</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="text-gray-400">Theo: {data.client_details.contact.theo}</div>
                <div className="text-gray-400">Marco: {data.client_details.contact.marco}</div>
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