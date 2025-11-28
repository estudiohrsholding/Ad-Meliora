export interface Property {
  id: string;
  name?: string;
  type: string;
  price: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  description: string;
  images: string[];
}

export interface ClientDetails {
  name: string;
  slogan: string;
  contact: {
    theo: string;
    marco: string;
  };
}

export interface PropertyData {
  client_details: ClientDetails;
  properties: Property[];
}