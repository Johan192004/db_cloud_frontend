export interface DatabaseEngine {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  instances: number;
  features: string[];
  recommended: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
