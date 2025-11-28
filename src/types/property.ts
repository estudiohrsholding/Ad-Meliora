export interface Property {
  id: string;
  type: string;
  price: string;
  location: string;
  features: string[];
  description: string;
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