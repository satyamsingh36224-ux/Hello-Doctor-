
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, User, Auth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

let auth: Auth;
try {
    auth = getAuth(app);
} catch (error) {
    console.error("Could not initialize Firebase Auth", error);
}

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!auth) {
        setLoading(false);
        return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) {
      toast({ title: 'कॉन्फ़िगरेशन त्रुटि', description: 'Firebase ठीक से कॉन्फ़िगर नहीं है।', variant: 'destructive' });
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
      toast({ title: 'साइन-इन सफल', description: 'आप सफलतापूर्वक लॉग इन हो गए हैं।' });
    } catch (error) {
      console.error("Google sign-in error", error);
      toast({ title: 'साइन-इन विफल', description: 'Google से साइन इन करने में एक त्रुटि हुई।', variant: 'destructive' });
    }
  };

  const signInWithFacebook = async () => {
    if (!auth) {
      toast({ title: 'कॉन्फ़िगरेशन त्रुटि', description: 'Firebase ठीक से कॉन्फ़िगर नहीं है।', variant: 'destructive' });
      return;
    }
    try {
      await signInWithPopup(auth, facebookProvider);
       toast({ title: 'साइन-इन सफल', description: 'आप सफलतापूर्वक लॉग इन हो गए हैं।' });
    } catch (error) {
      console.error("Facebook sign-in error", error);
      toast({ title: 'साइन-इन विफल', description: 'Facebook से साइन इन करने में एक त्रुटि हुई।', variant: 'destructive' });
    }
  };

  const handleSignOut = async () => {
    if (!auth) {
      toast({ title: 'कॉन्फ़िगरेशन त्रुटि', description: 'Firebase ठीक से कॉन्फ़िगर नहीं है।', variant: 'destructive' });
      return;
    }
    try {
      await signOut(auth);
      toast({ title: 'लॉग आउट सफल', description: 'आप सफलतापूर्वक लॉग आउट हो गए हैं।' });
    } catch (error) {
      console.error("Sign-out error", error);
      toast({ title: 'लॉग आउट विफल', description: 'लॉग आउट करने में एक त्रुटि हुई।', variant: 'destructive' });
    }
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
