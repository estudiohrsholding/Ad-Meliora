import { Property } from '@/types/property';
import { PropertyDetailClient } from '@/components/properties/PropertyDetailClient';
import { readFileSync } from 'fs';
import { join } from 'path';

// Generate static params for all properties
export async function generateStaticParams() {
  try {
    // Read properties from JSON file using fs
    const filePath = join(process.cwd(), 'src', 'data', 'properties.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const properties: Property[] = JSON.parse(fileContents);
    
    // Ensure properties is an array
    if (!Array.isArray(properties)) {
      console.error('Properties data is not an array:', properties);
      return [];
    }
    
    // Return array of params objects with id property
    return properties.map((property) => ({
      id: String(property.id), // Ensure id is a string
    }));
  } catch (error) {
    console.error('Error reading properties.json:', error);
    return [];
  }
}

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  
  // Read properties from JSON file
  const filePath = join(process.cwd(), 'src', 'data', 'properties.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const properties: Property[] = JSON.parse(fileContents);
  
  // Find the property by ID
  const property = properties.find((p) => p.id === id);

  // If property not found, return 404
  if (!property) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-950 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
          <a 
            href="/properties" 
            className="inline-block bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Back to Properties
          </a>
        </div>
      </div>
    );
  }

  // Pass property data to client component
  return <PropertyDetailClient property={property} />;
}
