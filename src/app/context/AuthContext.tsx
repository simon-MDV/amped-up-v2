'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    localStorage.setItem('auth_token', 'dummy_token');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
  };

  const signIn = async (email: string, password: string) => {
    // Add your authentication logic here
    localStorage.setItem('auth_token', 'dummy_token');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 