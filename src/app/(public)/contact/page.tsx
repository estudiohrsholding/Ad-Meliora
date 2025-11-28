'use client';

import { Navbar } from '@/components/layout/Navbar';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  // Static client details - can be moved to a separate config file if needed
  const clientDetails = {
    contact: {
      theo: "+34 670 570 9825",
      marco: "+34 670 570 9825"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-beige-light to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/home" 
              className="inline-flex items-center text-gray-600 hover:text-admeliora-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-950 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with our expert team. We are here to help you find your perfect Costa Blanca property.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Quick Contact */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-950 mb-6">Get in Touch Directly</h2>
              
              <div className="space-y-6">
                {/* Theo Contact */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-soft">
                  <h3 className="text-lg font-semibold text-gray-950 mb-4">Theo - Local Expert</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 mr-3 text-admeliora-gold" />
                      <span>{clientDetails.contact.theo}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-admeliora-gold" />
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-admeliora-gold" />
                      <span>Costa Blanca, Spain</span>
                    </div>
                  </div>
                </div>

                {/* Marco Contact */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-soft">
                  <h3 className="text-lg font-semibold text-gray-950 mb-4">Marco - International Specialist</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 mr-3 text-admeliora-gold" />
                      <span>{clientDetails.contact.marco}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-admeliora-gold" />
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-admeliora-gold" />
                      <span>Costa Blanca, Spain</span>
                    </div>
                  </div>
                </div>

                {/* Emergency CTA */}
                <div className="bg-gradient-to-r from-admeliora-gold/10 to-admeliora-gold-light/10 rounded-xl p-6 border border-admeliora-gold/30 shadow-soft">
                  <h3 className="text-lg font-semibold text-gray-950 mb-3">Need Immediate Assistance?</h3>
                  <p className="text-gray-700 mb-4">Our B.A.I. assistant is available 24/7 to help you find properties.</p>
                  <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-bold py-3 px-6 shadow-lg hover:shadow-[#B8860B]/25 transition-all duration-200 rounded-lg">
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
      <footer className="bg-beige-light/20 border-t border-gray-200 text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-admeliora-gold">
                Ad Meliora Real Estate
              </h3>
              <p className="text-gray-600">
                Long-term rentals, short-term rentals and sales on Costa Blanca. Reliable service—contact us!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/home" className="hover:text-admeliora-gold transition-colors">Home</Link></li>
                <li><Link href="/properties" className="hover:text-admeliora-gold transition-colors">Properties</Link></li>
                <li><Link href="/about" className="hover:text-admeliora-gold transition-colors">About</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Contact Info</h4>
              <div className="space-y-3">
                <div className="text-gray-600">Theo: {clientDetails.contact.theo}</div>
                <div className="text-gray-600">Marco: {clientDetails.contact.marco}</div>
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