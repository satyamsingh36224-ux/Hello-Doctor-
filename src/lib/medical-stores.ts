
import type { MedicalStore } from "@/types";

const medicalStoresList: Omit<MedicalStore, 'id'>[] = [
  {
    name: { hi: "सिंह मेडिकल", en: "Singh Medical", bho: "सिंह मेडिकल" },
    location: "अस्पताल रोड, गोपालगंज",
    phone: "919771264784", // Example phone, replace with real one
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "रजत मेडिको एजेंसी", en: "Rajat Medico Agency", bho: "रजत मेडिको एजेंसी" },
    location: "पुरानी चौक, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "मानस मेडिको एजेंसी", en: "Manas Medico Agency", bho: "मानस मेडिको एजेंसी" },
    location: "बस स्टैंड के पास, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "ताज मेडिको", en: "Taj Medico", bho: "ताज मेडिको" },
    location: "मौनिया चौक, गोपालगंज",
    phone: "919771264784",
    imageUrl: "🏥",
    aiHint: "pharmacy storefront"
  }
];

export const medicalStoresData: MedicalStore[] = medicalStoresList.map((store, index) => ({
    ...store,
    id: `ms-${index + 1}`,
}));
