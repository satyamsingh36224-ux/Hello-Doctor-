
import type { MedicalStore } from "@/types";

const medicalStoresList: Omit<MedicalStore, 'id'>[] = [
  {
    name: { hi: "अपोलो फार्मेसी", en: "Apollo Pharmacy", bho: "अपोलो फार्मेसी" },
    location: "अस्पताल रोड, गोपालगंज",
    phone: "919771264784", // Example phone, replace with real one
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "श्री राम मेडिकल हॉल", en: "Shree Ram Medical Hall", bho: "श्री राम मेडिकल हॉल" },
    location: "पुरानी चौक, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "न्यू जनता मेडिकल", en: "New Janta Medical", bho: "न्यू जनता मेडिकल" },
    location: "बस स्टैंड के पास, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "गोपालगंज मेडिकोज", en: "Gopalganj Medicos", bho: "गोपालगंज मेडिकोज" },
    location: "मौनिया चौक, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "आरोग्य दवा दुकान", en: "Arogya Dawa Dukan", bho: "आरोग्य दवा दुकान" },
    location: "थावे रोड, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "माँ दुर्गा मेडिकल एजेंसी", en: "Maa Durga Medical Agency", bho: "माँ दुर्गा मेडिकल एजेंसी" },
    location: "सिनेमा रोड, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  }
];

export const medicalStoresData: MedicalStore[] = medicalStoresList.map((store, index) => ({
    ...store,
    id: `ms-${index + 1}`,
}));
