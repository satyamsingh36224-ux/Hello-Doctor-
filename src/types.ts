
export type Language = 'hi' | 'en' | 'bho';
export type LocalizedString = Record<Language, string>;

export interface Specialization {
  key: string;
  name: LocalizedString;
}

export interface Doctor {
    id: string;
    name: LocalizedString;
    specialization: Specialization;
    description: LocalizedString;
    fee: number;
    imageUrl: string;
    location: string;
    aiHint: string;
}

export interface MedicalStore {
    id: string;
    name: LocalizedString;
    location: string;
    phone: string;
    imageUrl: string;
    aiHint: string;
}

declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
        grecaptcha: any;
    }
}

// We need to declare the RecaptchaVerifier type because it's not directly exported from firebase/auth
import type { RecaptchaVerifier } from "firebase/auth";
