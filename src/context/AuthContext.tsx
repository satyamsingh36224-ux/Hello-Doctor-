
"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useUser, type User } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signOut as firebaseSignOut 
} from 'firebase/auth';

export { type User };

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, loading, error } = useUser();
  const { toast } = useToast();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast({ title: 'लॉगिन सफल', description: 'आप सफलतापूर्वक लॉगिन हो गए हैं।' });
    } catch (err: any) {
      console.error(err);
      toast({ title: 'लॉगिन विफल', description: err.message, variant: 'destructive' });
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      toast({ title: 'लॉगिन सफल', description: 'आप सफलतापूर्वक लॉगिन हो गए हैं।' });
    } catch (err: any) {
      console.error(err);
      toast({ title: 'लॉगिन विफल', description: err.message, variant: 'destructive' });
    }
  };

  const handleSignOut = async () => {
    try {
        await firebaseSignOut(auth);
        toast({ title: 'लॉग आउट सफल', description: 'आप सफलतापूर्वक लॉग आउट हो गए हैं।' });
    } catch (err: any) {
        console.error(err);
        toast({ title: 'लॉग आउट विफल', description: err.message, variant: 'destructive' });
    }
  };

  if (error) {
    // You can render an error state here
    return <div>Something went wrong with authentication...</div>
  }
  
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
