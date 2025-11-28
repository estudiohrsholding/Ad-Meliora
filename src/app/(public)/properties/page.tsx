'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PropertyCard } from '@/components/properties/PropertyCard';
import propertyData from '@/data/properties.json';
import { PropertyData } from '@/types/property';

export default function PropertiesPage() {
  const data = propertyData as PropertyData;

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              All Properties
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our full selection of premium properties across Costa Blanca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {data.properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
