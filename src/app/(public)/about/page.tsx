'use client';

import { Navbar } from '@/components/layout/Navbar';
import propertyData from '@/data/properties.json';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const data = propertyData;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-beige-light to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-admeliora-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-950 mb-6">
            Meet Ad Meliora
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {data.client_details.slogan}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige-light/20 border-t border-gray-200 text-gray-700 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-admeliora-gold">
                Ad Meliora Real Estate
              </h3>
              <p className="text-gray-600">
                {data.client_details.slogan}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-admeliora-gold transition-colors">Home</Link></li>
                <li><Link href="/properties" className="hover:text-admeliora-gold transition-colors">Properties</Link></li>
                <li><Link href="/contact" className="hover:text-admeliora-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Contact Info</h4>
              <div className="space-y-3">
                <div className="text-gray-600">Theo: {data.client_details.contact.theo}</div>
                <div className="text-gray-600">Marco: {data.client_details.contact.marco}</div>
                <div className="text-gray-600">Costa Blanca, Spain</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>© 2024 Ad Meliora Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}