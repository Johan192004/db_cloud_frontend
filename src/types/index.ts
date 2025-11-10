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

// Auth Types
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'INDIVIDUAL' | 'ORGANIZATION';
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  userType: 'INDIVIDUAL' | 'ORGANIZATION';
}

export interface AuthResponse {
  token: string;
  username: string;
  email: string;
  role: 'INDIVIDUAL' | 'ORGANIZATION';
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
