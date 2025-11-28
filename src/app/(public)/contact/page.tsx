'use client';

import { Navbar } from '@/components/layout/Navbar';
import { ContactForm } from '@/components/ContactForm';
import propertyData from '@/data/properties.json';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our expert team. We are here to help you find your perfect Costa Blanca property.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Quick Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch Directly</h2>
              
              <div className="space-y-6">
                {/* Theo Contact */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Theo - Local Expert</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 mr-3 text-purple-400" />
                      <span>{data.client_details.contact.theo}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Costa Blanca, Spain</span>
                    </div>
                  </div>
                </div>

                {/* Marco Contact */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Marco - International Specialist</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 mr-3 text-purple-400" />
                      <span>{data.client_details.contact.marco}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Costa Blanca, Spain</span>
                    </div>
                  </div>
                </div>

                {/* Emergency CTA */}
                <div className="bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-white mb-3">Need Immediate Assistance?</h3>
                  <p className="text-gray-300 mb-4">Our B.A.I. assistant is available 24/7 to help you find properties.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold py-3 px-6 shadow-lg hover:shadow-purple-500/25 transition-all duration-200 rounded-lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start B.A.I. Chat
                  </Button>
                </div>
              </div>
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
                <li><Link href="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
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