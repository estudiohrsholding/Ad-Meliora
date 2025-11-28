'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Home } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark radial gradient background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-radial-gradient from-gray-900 via-gray-950 to-transparent opacity-50" />
      </div>
      
      {/* Subtle animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-fuchsia-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-4000" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main branding */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl mb-6 shadow-2xl shadow-purple-500/25">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
              Ad Meliora
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              Long-term rentals, short-term rentals and sales on Costa Blanca. 
              <span className="block text-purple-400 font-medium mt-2">
                Reliable service—contact us!
              </span>
            </p>
          </div>

          {/* Primary CTA - Maximum Impact */}
          <div className="relative group mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-bold text-xl py-8 px-16 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0 text-lg"
            >
              <Sparkles className="w-6 h-6 mr-3 animate-pulse" />
              I Need a Home Now! (Get B.A.I. Help)
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">7+</div>
              <div className="text-sm text-gray-400">Premium Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">B.A.I. Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5★</div>
              <div className="text-sm text-gray-400">Expert Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}