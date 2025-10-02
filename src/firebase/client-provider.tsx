"use client";

import { useState, useEffect, ReactNode } from "react";
import { FirebaseProvider, type FirebaseServices } from "./provider";
import { initializeFirebase } from ".";

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const [firebase, setFirebase] = useState<FirebaseServices | null>(null);

  useEffect(() => {
    const services = initializeFirebase();
    setFirebase(services);
  }, []);

  if (!firebase) {
    // You can render a loading spinner here
    return <div>Loading Firebase...</div>;
  }

  return <FirebaseProvider {...firebase}>{children}</FirebaseProvider>;
}
