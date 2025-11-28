'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import propertyData from '@/data/properties.json';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
         {/* Contact Section Content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
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
                  {propertyData.client_details.contact.theo}
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Marco</h3>
                <p className="text-gray-400 mb-4">International Client Specialist</p>
                <div className="text-purple-400 font-semibold text-lg">
                  {propertyData.client_details.contact.marco}
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
      </div>
      <Footer />
    </div>
  );
}
