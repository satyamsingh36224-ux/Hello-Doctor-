
"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// Fake user type
export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  // Since firebase is removed, we'll use a null user and no loading state.
  const user = null;
  const loading = false;


  const signInWithGoogle = async () => {
    toast({ title: 'कार्यक्षमता अक्षम', description: 'Firebase हटा दिया गया है।', variant: 'destructive' });
  };

  const signInWithFacebook = async () => {
    toast({ title: 'कार्यक्षमता अक्षम', description: 'Firebase हटा दिया गया है।', variant: 'destructive' });
  };

  const handleSignOut = async () => {
     toast({ title: 'कार्यक्षमता अक्षम', description: 'आप लॉग इन नहीं हैं।', variant: 'destructive' });
  };
  
  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithFacebook,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
