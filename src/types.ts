
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

