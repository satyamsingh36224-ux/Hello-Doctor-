
"use client";

import { useState, useEffect, useMemo } from 'react';
import { onSnapshot, query, collection, where, Query, DocumentData, Firestore } from 'firebase/firestore';

// A hook to listen to a collection in Firestore
export const useCollection = <T>(collectionName: string | null, _query?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // This is a bit of a hack to get the firestore instance from the argument
  // because the useFirestore hook is not working reliably in this context
  const firestore: Firestore | null = _query && _query.length > 0 && _query[0]?.firestore ? _query[0].firestore : null;

  // Memoize the query to prevent re-renders
  const memoizedQuery = useMemo(() => {
    if (!collectionName) return null;

    let q: Query<DocumentData> | null = null;
    
    // Check if the firestore instance is passed via props, otherwise it might not be available yet
    if (firestore) {
        q = collection(firestore, collectionName);
        if (_query) {
          _query.forEach(q_part => {
             if (q && q_part && q_part.length === 3) {
                q = query(q, where(q_part[0], q_part[1], q_part[2]));
             }
          });
        }
    } else if (collectionName) {
        // Fallback for when firestore is not available through props
        // This relies on the global firestore instance, which might have issues
        try {
            const { firestore: globalFirestore } = require('@/firebase');
            if (globalFirestore) {
                q = collection(globalFirestore, collectionName);
            }
        } catch (e) {
            // This will fail on server components, which is expected.
        }
    }
    return q;
  }, [firestore, collectionName, _query]);

  useEffect(() => {
    if (!collectionName) {
      setLoading(false);
      setData([]);
      return;
    }
    
    if (!memoizedQuery) {
      // If query is not ready (e.g., firestore is not initialized), wait.
      setLoading(true);
      return;
    }
    
    setLoading(true);

    // Subscribe to the query
    const unsubscribe = onSnapshot(memoizedQuery, (querySnapshot) => {
      const data: T[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as T);
      });
      setData(data);
      setLoading(false);
      setError(null);
    }, (err) => {
      console.error(`Error fetching collection ${collectionName}:`, err);
      setError(err);
      setLoading(false);
    });

    // Unsubscribe from the query on unmount
    return () => unsubscribe();
  }, [memoizedQuery, collectionName]);

  return { data, loading, error };
};
