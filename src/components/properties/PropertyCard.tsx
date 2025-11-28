'use client';

import { Property } from '@/types/property';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {

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

  // Defensive check: Ensure images array exists and has at least one image
  const hasImages = property.images && Array.isArray(property.images) && property.images.length > 0;
  const firstImage = hasImages ? property.images[0] : null;

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 bg-white hover:bg-beige-light shadow-soft">
      {/* Image Container - Isolated rendering for debugging */}
      <div className="relative h-48 w-full overflow-hidden">
        <Link 
          href={`/properties/${property.id}`} 
          className="block relative h-full w-full cursor-pointer"
        >
          <div className="relative h-full w-full bg-gradient-to-br from-subtle-beige to-beige-light overflow-hidden">
            {firstImage ? (
              <img
                src={firstImage}
                alt={property.name || 'Property image'}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
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
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-5xl mb-2 opacity-50">🏠</div>
                  <div className="text-xs opacity-70">No image available</div>
                </div>
              </div>
            )}
          </div>
        </Link>
        {/* Type Badge */}
        <div className="absolute top-4 left-4 z-40 pointer-events-none">
          <Badge className={`${getTypeColor(property.type)} text-white border-0 px-3 py-1 text-sm font-semibold shadow-lg pointer-events-auto`}>
            {getTypeLabel(property.type)}
          </Badge>
        </div>
        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 right-4 z-40 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl border border-gray-200 pointer-events-auto">
            <div className="text-xl font-bold text-gray-950">{property.price}</div>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            {property.name && (
              <h3 className="text-lg font-heading font-semibold text-gray-950 mb-2 line-clamp-1">
                {property.name}
              </h3>
            )}
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1 text-[#B8860B]" />
              <span className="text-sm font-medium">{property.location}</span>
            </div>
          </div>
          <div className="flex items-center text-[#B8860B]">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-subtle-beige text-gray-700 hover:bg-beige-light text-xs border-gray-200"
            >
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge 
              variant="secondary" 
              className="bg-subtle-beige text-gray-600 text-xs border-gray-200"
            >
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 gap-2 bg-beige-light/30">
        <Button 
          asChild
          className="flex-1 bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
        >
          <Link href={`/properties/${property.id}`}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Get Details
          </Link>
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-white hover:border-[#B8860B]"
          size="sm"
        >
          <Phone className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}