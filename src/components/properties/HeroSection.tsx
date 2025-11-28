'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Home } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-beige-light to-white">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      </div>
      
      {/* Subtle animated background elements - Mediterranean gold accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-admeliora-gold/5 rounded-full filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-terracotta/5 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-admeliora-gold-light/5 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-4000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main branding */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B8860B] rounded-2xl mb-6 shadow-2xl shadow-[#B8860B]/25">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-gray-950 mb-4 leading-tight tracking-tight">
              Ad Meliora
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              Long-term rentals, short-term rentals and sales on Costa Blanca. 
              <span className="block text-[#B8860B] font-medium mt-2">
                Reliable service—contact us!
              </span>
            </p>
          </div>

          {/* Primary CTA - Maximum Impact */}
          <div className="relative group mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
            <Button 
              asChild
              size="lg" 
              className="relative bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-bold text-xl py-8 px-16 shadow-2xl hover:shadow-[#B8860B]/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0 text-lg"
            >
              <Link href="/contact">
                <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
                I Need a Home Now! (Get B.A.I. Help)
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">7+</div>
              <div className="text-sm text-gray-600">Premium Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">24/7</div>
              <div className="text-sm text-gray-600">B.A.I. Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">5★</div>
              <div className="text-sm text-gray-600">Expert Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#B8860B]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#B8860B] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}