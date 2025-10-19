
import type { Language, LocalizedString } from "./types";

export interface Hospital {
    id: string;
    name: LocalizedString;
    location: string;
    phone: string;
    imageUrl: string;
    aiHint: string;
}

export const hospitals: Hospital[] = [
    {
        id: "h1",
        name: {
            hi: "सदर अस्पताल, सीवान",
            en: "Sadar Hospital, Siwan",
            bho: "सदर अस्पताल, सीवान"
        },
        location: "Sadar Hospital Road, Siwan, Bihar",
        phone: "06154-242004",
        imageUrl: "🏥",
        aiHint: "large hospital building"
    },
    {
        id: "h2",
        name: {
            hi: "डॉ. कमरुल होदा मेमोरियल अस्पताल",
            en: "Dr. Qamrul Hoda Memorial Hospital",
            bho: "डॉ. कमरुल होदा मेमोरियल अस्पताल"
        },
        location: "Station Road, Siwan, Bihar",
        phone: "9431057860",
        imageUrl: "🏥",
        aiHint: "modern hospital exterior"
    },
    {
        id: "h3",
        name: {
            hi: "इम्पैक्ट हॉस्पिटल",
            en: "Impact Hospital",
            bho: "इम्पैक्ट हॉस्पिटल"
        },
        location: "Babunia Road, Siwan, Bihar",
        phone: "9801700701",
        imageUrl: "🏥",
        aiHint: "private hospital building"
    }
];
