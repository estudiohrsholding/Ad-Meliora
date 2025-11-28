'use client';

import { Property } from '@/types/property';
import { Navbar } from '@/components/layout/Navbar';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, MessageCircle, Bed, Bath, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface PropertyDetailClientProps {
  property: Property;
}

export function PropertyDetailClient({ property }: PropertyDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sale':
      case 'For Sale':
        return 'bg-gradient-to-r from-[#D2691E] to-[#A0522D]';
      case 'rent':
      case 'Long-Term Rental':
      case 'Short-Term Rental':
        return 'bg-gradient-to-r from-[#FFD700] to-[#B8860B]';
      case 'studio':
        return 'bg-gradient-to-r from-[#FFD700] to-[#B8860B]';
      default:
        return 'bg-gradient-to-r from-[#FFD700] to-[#B8860B]';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'sale':
        return 'For Sale';
      case 'rent':
        return 'Long-Term Rental';
      case 'studio':
        return 'Studio';
      default:
        return type;
    }
  };

  const images = property.images || [];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-beige-light to-white">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/home" 
            className="inline-flex items-center text-gray-600 hover:text-[#B8860B] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge className={`${getTypeColor(property.type)} text-white border-0 px-4 py-1.5 text-sm font-semibold shadow-lg`}>
                  {getTypeLabel(property.type)}
                </Badge>
                <div className="text-3xl font-bold text-gray-950">{property.price}</div>
              </div>
              {property.name && (
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-950 mb-3">
                  {property.name}
                </h1>
              )}
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2 text-[#B8860B]" />
                <span className="text-lg font-medium">{property.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {property.bedrooms && (
                <div className="flex items-center gap-1 bg-beige-light/50 px-3 py-2 rounded-lg">
                  <Bed className="w-5 h-5 text-[#B8860B]" />
                  <span className="text-gray-700 font-medium">{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-1 bg-beige-light/50 px-3 py-2 rounded-lg">
                  <Bath className="w-5 h-5 text-[#B8860B]" />
                  <span className="text-gray-700 font-medium">{property.bathrooms}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <Card className="bg-white border-gray-200 shadow-soft overflow-hidden">
                <CardContent className="p-0">
                  {images.length > 0 ? (
                    <div className="relative">
                      {/* Main Image */}
                      <div className="relative h-96 bg-gradient-to-br from-subtle-beige to-beige-light overflow-hidden">
                        <img
                          src={images[currentImageIndex]}
                          alt={property.name || 'Property image'}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              target.style.display = 'none';
                              if (!parent.querySelector('.image-placeholder')) {
                                const placeholder = document.createElement('div');
                                placeholder.className = 'image-placeholder absolute inset-0 flex items-center justify-center text-gray-400';
                                placeholder.innerHTML = `
                                  <div class="text-center">
                                    <div class="text-5xl mb-2 opacity-50">🏠</div>
                                    <div class="text-xs opacity-70">Image not available</div>
                                  </div>
                                `;
                                parent.appendChild(placeholder);
                              }
                            }
                          }}
                        />
                        {/* Navigation Arrows */}
                        {hasMultipleImages && (
                          <>
                            <button
                              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#B8860B]/80 hover:bg-[#B8860B] text-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                              aria-label="Previous image"
                            >
                              <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#B8860B]/80 hover:bg-[#B8860B] text-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                              aria-label="Next image"
                            >
                              <ArrowLeft className="w-5 h-5 rotate-180" />
                            </button>
                            {/* Image Counter */}
                            <div className="absolute top-4 right-4 bg-[#B8860B]/80 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm z-10">
                              {currentImageIndex + 1} / {images.length}
                            </div>
                          </>
                        )}
                      </div>
                      {/* Thumbnail Strip */}
                      {hasMultipleImages && images.length > 1 && (
                        <div className="p-4 bg-beige-light/20 flex gap-2 overflow-x-auto">
                          {images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                index === currentImageIndex
                                  ? 'border-[#B8860B] ring-2 ring-[#B8860B]/50'
                                  : 'border-gray-200 hover:border-[#B8860B]/50'
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-96 bg-gradient-to-br from-subtle-beige to-beige-light flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-6xl mb-2 opacity-50">🏠</div>
                        <div className="text-sm opacity-70">No images available</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="bg-white border-gray-200 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-gray-950 font-heading">Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </CardContent>
              </Card>

              {/* Features */}
              {property.features && property.features.length > 0 && (
                <Card className="bg-white border-gray-200 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-gray-950 font-heading">Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-[#B8860B] fill-current flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <Card className="bg-white border-gray-200 shadow-soft sticky top-24">
                <CardHeader>
                  <CardTitle className="text-gray-950 font-heading">
                    Inquiry for {property.name || 'This Property'}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm propertyId={property.id} propertyName={property.name} />
                </CardContent>
                <div className="px-6 pb-6 pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-semibold"
                    >
                      <a href="tel:+346705709825">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-beige-light hover:border-[#B8860B]"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

