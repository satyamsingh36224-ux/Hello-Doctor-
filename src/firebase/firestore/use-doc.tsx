"use client";

import { useState, useEffect, useMemo } from 'react';
import { onSnapshot, doc, DocumentReference, DocumentData } from 'firebase/firestore';
import { useFirestore } from '../provider';

// A hook to listen to a document in Firestore
export const useDoc = <T>(path: string) => {
  const firestore = useFirestore();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const docRef = useMemo(() => {
    if (!firestore) return null;
    return doc(firestore, path) as DocumentReference<DocumentData>;
  }, [firestore, path]);


  useEffect(() => {
    if (!docRef) {
      return;
    }

    // Subscribe to the document
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setData({ id: doc.id, ...doc.data() } as T);
      } else {
        setData(null);
      }
      setLoading(false);
    }, (error) => {
      console.error(`Error fetching document ${path}:`, error);
      setLoading(false);
    });

    // Unsubscribe from the document on unmount
    return () => unsubscribe();
  }, [docRef, path]);

  return { data, loading };
};
