
"use client";

import { useEffect, useState } from 'react';
import { onAuthStateChanged, type Auth, type User as FirebaseUser } from 'firebase/auth';
import { useAuth as useFirebaseAuth } from '../provider';

export interface User extends FirebaseUser {}

export const useUser = () => {
  const auth = useFirebaseAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If auth is explicitly null (initialization failed or not yet done), 
    // we stop loading to prevent being stuck on splash screen forever.
    if (auth === undefined) return;
    
    if (auth === null) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
      },
      (error) => {
        console.error("Authentication error:", error);
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [auth]);

  return { user, loading, error };
};
