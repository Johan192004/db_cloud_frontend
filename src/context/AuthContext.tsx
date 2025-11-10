import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';
import type { User, LoginRequest, RegisterRequest, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      const response = await authService.login(credentials);
      
      // Store token and user data
      localStorage.setItem('token', response.token);
      
      const userData: User = {
        id: 0, // El backend debería devolver esto
        username: response.username,
        email: response.email,
        role: response.role,
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      setToken(response.token);
      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      const response = await authService.register(data);
      
      // Store token and user data
      localStorage.setItem('token', response.token);
      
      const userData: User = {
        id: 0, // El backend debería devolver esto
        username: response.username,
        email: response.email,
        role: response.role,
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      setToken(response.token);
      setUser(userData);
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
