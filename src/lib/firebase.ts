
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

// .env फ़ाइल में अपने Firebase प्रोजेक्ट की जानकारी डालें।
// इन मानों को अपने Firebase कंसोल -> प्रोजेक्ट सेटिंग्स से कॉपी करें।
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app: FirebaseApp | null = null;

// Temporarily disable initialization if API key is not valid to prevent crashes.
// The user needs to provide valid keys in the .env file.
if (firebaseConfig.apiKey && firebaseConfig.apiKey.startsWith("AIza")) {
    try {
      app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }
} else {
    console.error("Firebase API Key is missing or invalid. Please check your .env file.");
}

export { app };
