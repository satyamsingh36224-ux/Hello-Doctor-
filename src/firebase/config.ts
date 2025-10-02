// @ts-nocheck
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function initialize() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true') {
    const host = process.env.NEXT_PUBLIC_EMULATOR_HOST || '127.0.0.1';
    const firestorePort = parseInt(process.env.NEXT_PUBLIC_FIRESTORE_EMULATOR_PORT || '8080');
    const authPort = parseInt(process.env.NEXT_PUBLIC_AUTH_EMULATOR_PORT || '9099');

    connectFirestoreEmulator(firestore, host, firestorePort);
    connectAuthEmulator(auth, `http://${host}:${authPort}`);
  }

  return { app, auth, firestore };
}

export const { app, auth, firestore } = initialize();
