
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, User, Auth } from 'firebase/auth';
// import { app } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

// Define User type to avoid breaking other parts of the app
export type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// let auth: Auth | null = null;
// try {
//     if (app) {
//       auth = getAuth(app);
//     }
// } catch (error) {
//     console.error("Could not initialize Firebase Auth", error);
// }

// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Since Firebase is disabled, we just set loading to false.
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    toast({ title: 'कार्यक्षमता अक्षम', description: 'Google साइन-इन अभी उपलब्ध नहीं है।', variant: 'destructive' });
  };

  const signInWithFacebook = async () => {
    toast({ title: 'कार्यक्षमता अक्षम', description: 'Facebook साइन-इन अभी उपलब्ध नहीं है।', variant: 'destructive' });
  };

  const handleSignOut = async () => {
     toast({ title: 'लॉग आउट सफल', description: 'आप सफलतापूर्वक लॉग आउट हो गए हैं।' });
     setUser(null);
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithFacebook,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
