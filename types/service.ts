export interface ServiceCapability {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: ServiceCapability[];
  businessOutcome: string;
  featured: boolean;
}
