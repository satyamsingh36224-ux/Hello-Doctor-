"use client";

import { useState, useEffect } from 'react';
import { onSnapshot, query, collection, where, getDocs, Query, DocumentData, CollectionReference } from 'firebase/firestore';
import { useFirestore } from '../provider';
import { useMemo } from 'react';

// A hook to listen to a collection in Firestore
export const useCollection = <T>(path: string, _query?: any[]) => {
  const firestore = useFirestore();
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  // Memoize the query to prevent re-renders
  const memoizedQuery = useMemo(() => {
    if (!firestore) return null;

    let q: Query<DocumentData> = collection(firestore, path);

    if (_query) {
      _query.forEach(q_part => {
        q = query(q, where(q_part[0], q_part[1], q_part[2]));
      });
    }
    return q;
  }, [firestore, path, _query]);

  useEffect(() => {
    if (!memoizedQuery) {
      return;
    }

    // Subscribe to the query
    const unsubscribe = onSnapshot(memoizedQuery, (querySnapshot) => {
      const data: T[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as T);
      });
      setData(data);
      setLoading(false);
    }, (error) => {
      console.error(`Error fetching collection ${path}:`, error);
      setLoading(false);
    });

    // Unsubscribe from the query on unmount
    return () => unsubscribe();
  }, [memoizedQuery, path]);

  return { data, loading };
};
