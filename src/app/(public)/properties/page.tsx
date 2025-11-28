'use client';

import { PropertyCard } from '@/components/properties/PropertyCard';
import { Property } from '@/types/property';
import { Navbar } from '@/components/layout/Navbar';
import { CalendarScheduler } from '@/components/portal/CalendarScheduler';
import { WalletSummary } from '@/components/portal/WalletSummary';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Calendar, Wallet, Search, Filter, Home } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from JSON file
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/properties.json');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error loading properties:', error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Read filter from URL query params
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter === 'rent') {
      setSelectedType('rent');
    } else if (filter === 'sale') {
      setSelectedType('sale');
    }
  }, [searchParams]);

  // Filter properties based on search, type selection, and URL filter
  const filteredProperties = properties.filter((property) => {
    const matchesSearch = 
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (property.name && property.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesType = true;
    
    if (selectedType === 'rent') {
      matchesType = property.type === 'rent';
    } else if (selectedType === 'sale') {
      matchesType = property.type === 'sale';
    } else if (selectedType === 'studio') {
      matchesType = property.type === 'studio';
    } else if (selectedType !== 'all') {
      matchesType = property.type === selectedType;
    }
    
    return matchesSearch && matchesType;
  });

  // Get unique property types and combine with base types, avoiding duplicates
  const uniquePropertyTypes = Array.from(new Set(properties.map(p => p.type)));
  const baseTypes = ['all', 'rent', 'sale', 'studio'];
  const allTypesSet = new Set([...baseTypes, ...uniquePropertyTypes]);
  const propertyTypes = Array.from(allTypesSet);

  // Get filter label for display
  const getFilterLabel = () => {
    if (selectedType === 'rent') return 'Rentals';
    if (selectedType === 'sale') return 'Sales';
    if (selectedType === 'studio') return 'Studios';
    return 'All Properties';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-beige-light to-white">
        <div className="max-w-7xl mx-auto text-center">
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
            Featured Coastal Properties & Investments - {getFilterLabel()}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover our handpicked selection of premium properties across Costa Blanca
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Search by location or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-gray-300 text-gray-950 placeholder-gray-500 focus:ring-admeliora-gold"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap justify-center">
              {propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'}
                  onClick={() => setSelectedType(type)}
                  className={
                    selectedType === type
                      ? 'bg-gradient-to-r from-admeliora-gold-light to-admeliora-gold hover:from-admeliora-gold hover:to-admeliora-gold/90 text-white border-0'
                      : 'border-gray-300 text-gray-700 hover:bg-beige-light hover:text-admeliora-gold'
                  }
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {type === 'all' ? 'All Types' : type === 'rent' ? 'Rentals' : type === 'sale' ? 'Sales' : type === 'studio' ? 'Studios' : type}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 mb-4">
            Showing {filteredProperties.length} of {properties.length} properties
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">{properties.length}</div>
              <div className="text-sm text-gray-600">Premium Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">3</div>
              <div className="text-sm text-gray-600">Coastal Towns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">24/7</div>
              <div className="text-sm text-gray-600">B.A.I. Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-950 mb-2">5★</div>
              <div className="text-sm text-gray-600">Expert Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige-light/30">
        <div className="max-w-7xl mx-auto">
          {/* Loading State */}
          {loading ? (
            <div className="text-center py-16 mb-16">
              <div className="text-gray-400 mb-4">
                <Home className="w-16 h-16 mx-auto opacity-50 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-2">Loading properties...</h3>
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mb-16">
              <div className="text-gray-400 mb-4">
                <Home className="w-16 h-16 mx-auto opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-2">No properties found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Contact CTA */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <Button 
                asChild
                className="relative bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-bold text-lg py-4 px-8 shadow-2xl hover:shadow-[#B8860B]/25 transition-all duration-300 group-hover:scale-105 rounded-2xl border-0"
              >
                <Link href="/contact">Need Help Finding Your Dream Home?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Scheduler Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige-light/20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B] rounded-2xl mb-4 shadow-lg shadow-[#B8860B]/25">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-950 mb-2">Schedule a Viewing</h2>
            <p className="text-gray-700">
              Book your property viewing appointment via B.A.I. Automation
            </p>
          </div>
          <CalendarScheduler />
        </div>
      </section>

      {/* Wallet Summary Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige-light/30 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8860B] rounded-2xl mb-4 shadow-lg shadow-[#B8860B]/25">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-950 mb-2">My Account</h2>
            <p className="text-gray-700">
              View your fidelity points and request history
            </p>
          </div>
          <WalletSummary />
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
                <li><Link href="/about" className="hover:text-admeliora-gold transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-admeliora-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-950">Contact Info</h4>
              <div className="space-y-3">
                <div className="text-gray-600">Theo: +34 123 456 789</div>
                <div className="text-gray-600">Marco: +34 987 654 321</div>
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

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <Home className="w-16 h-16 mx-auto opacity-50 animate-pulse" />
          </div>
          <h3 className="text-xl font-semibold text-gray-950 mb-2">Loading properties...</h3>
        </div>
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  );
}