'use client';

import { Property } from '@/types/property';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Star } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'For Sale':
        return 'bg-gradient-to-r from-emerald-600 to-green-500';
      case 'Long-Term Rental':
        return 'bg-gradient-to-r from-blue-600 to-cyan-500';
      default:
        return 'bg-gradient-to-r from-purple-600 to-fuchsia-500';
    }
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70">
      {/* Property Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge className={`${getTypeColor(property.type)} text-white border-0 px-3 py-1 text-sm font-semibold shadow-lg`}>
            {property.type}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl border border-gray-700">
            <div className="text-xl font-bold text-white">{property.price}</div>
          </div>
        </div>
        {/* Image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="text-5xl mb-2 opacity-50">🏠</div>
            <div className="text-xs opacity-70">Property View</div>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center text-gray-400 mb-2">
              <MapPin className="w-4 h-4 mr-1 text-blue-400" />
              <span className="text-sm font-medium">{property.location}</span>
            </div>
          </div>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs border-gray-700"
            >
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge 
              variant="secondary" 
              className="bg-gray-800 text-gray-400 text-xs border-gray-700"
            >
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 gap-2 bg-gray-900/30">
        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm">
          <MessageCircle className="w-4 h-4 mr-2" />
          Get Details
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
          size="sm"
        >
          <Phone className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}