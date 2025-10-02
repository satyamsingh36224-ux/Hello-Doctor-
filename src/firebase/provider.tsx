"use client";

import { createContext, useContext, ReactNode } from "react";
import { Auth } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export interface FirebaseServices {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

const FirebaseContext = createContext<FirebaseServices | undefined>(undefined);

export const FirebaseProvider = ({
  children,
  ...services
}: {
  children: ReactNode;
} & FirebaseServices) => {
  return (
    <FirebaseContext.Provider value={services}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const useFirebaseApp = () => {
  return useContext(FirebaseContext)?.app;
};

export const useAuth = () => {
  return useContext(FirebaseContext)?.auth;
};

export const useFirestore = () => {
  return useContext(FirebaseContext)?.firestore;
};
