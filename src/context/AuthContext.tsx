
"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useUser as useFirebaseUser } from '@/firebase'; // Using the user from our main provider
import { 
    getAuth, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signInWithPopup,
    signOut as firebaseSignOut
} from 'firebase/auth';

// User type from Firebase
import type { User } from 'firebase/auth';

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
  // Use our centralized user state from FirebaseProvider
  const { user, isUserLoading: loading, userError } = useFirebaseUser();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast({ title: 'साइन-इन सफल', description: 'Google से सफलतापूर्वक लॉग इन किया गया।' });
    } catch (error) {
      console.error("Google sign-in error", error);
      toast({ title: 'साइन-इन में त्रुटि', description: 'Google से साइन इन करने में विफल।', variant: 'destructive' });
    }
  };

  const signInWithFacebook = async () => {
     try {
      await signInWithPopup(auth, facebookProvider);
      toast({ title: 'साइन-इन सफल', description: 'Facebook से सफलतापूर्वक लॉग इन किया गया।' });
    } catch (error) {
      console.error("Facebook sign-in error", error);
      toast({ title: 'साइन-इन में त्रुटि', description: 'Facebook से साइन इन करने में विफल।', variant: 'destructive' });
    }
  };

  const handleSignOut = async () => {
    try {
        await firebaseSignOut(auth);
        toast({ title: 'लॉग आउट सफल', description: 'आप सफलतापूर्वक लॉग आउट हो गए हैं।' });
    } catch (error) {
        console.error("Sign out error", error);
        toast({ title: 'लॉग आउट में त्रुटि', description: 'लॉग आउट करने में विफल।', variant: 'destructive' });
    }
  };
  
  // Handle and display auth errors from the provider
  React.useEffect(() => {
    if (userError) {
      toast({
        title: "Authentication Error",
        description: userError.message,
        variant: "destructive",
      });
    }
  }, [userError, toast]);

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
