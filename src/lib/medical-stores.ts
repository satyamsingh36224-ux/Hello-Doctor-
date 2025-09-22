
import type { MedicalStore } from "@/types";

const medicalStoresList: Omit<MedicalStore, 'id'>[] = [
  {
    name: { hi: "राज मेडिकल हॉल", en: "Raj Medical Hall", bho: "राज मेडिकल हॉल" },
    location: "अस्पताल रोड, गोपालगंज",
    phone: "9876543210",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "महावीर मेडिकल हॉल", en: "Mahavir Medical Hall", bho: "महावीर मेडिकल हॉल" },
    location: "पुरानी चौक, गोपालगंज",
    phone: "9876543211",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "जीवन रेखा मेडिको", en: "Jeevan Rekha Medico", bho: "जीवन रेखा मेडिको" },
    location: "बस स्टैंड के पास, गोपालगंज",
    phone: "9876543212",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "जन औषधि केंद्र", en: "Jan Aushadhi Kendra", bho: "जन औषधि केंद्र" },
    location: "सदर अस्पताल के पास, गोपालगंज",
    phone: "9876543213",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "तिवारी मेडिकल स्टोर", en: "Tiwari Medical Store", bho: "तिवारी मेडिकल स्टोर" },
    location: "मौनिया चौक, गोपालगंज",
    phone: "9876543214",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "सिन्हा मेडिकल्स", en: "Sinha Medicals", bho: "सिन्हा मेडिकल्स" },
    location: "थावे रोड, गोपालगंज",
    phone: "9876543215",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "रजत मेडिको एजेंसी", en: "Rajat Medico Agency", bho: "रजत मेडिको एजेंसी" },
    location: "घोष मोड़, गोपालगंज",
    phone: "9876543216",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  }
];

export const medicalStoresData: MedicalStore[] = medicalStoresList.map((store, index) => ({
    ...store,
    id: `ms-${index + 1}`,
}));
