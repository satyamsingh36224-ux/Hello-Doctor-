
import type { MedicalStore } from "@/types";

const medicalStoresList: Omit<MedicalStore, 'id'>[] = [
  {
    name: { hi: "राज मेडिकल हॉल", en: "Raj Medical Hall", bho: "राज मेडिकल हॉल" },
    location: "अस्पताल रोड, सदर अस्पताल के सामने, गोपालगंज",
    phone: "9876543210",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "महावीर मेडिकल हॉल", en: "Mahavir Medical Hall", bho: "महावीर मेडिकल हॉल" },
    location: "पुरानी चौक, मेन मार्केट, गोपालगंज",
    phone: "9876543211",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "जीवन रेखा मेडिको", en: "Jeevan Rekha Medico", bho: "जीवन रेखा मेडिको" },
    location: "बस स्टैंड परिसर के पास, गोपालगंज",
    phone: "9876543212",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "प्रधान मंत्री भारतीय जन औषधि केंद्र", en: "Pradhan Mantri Bhartiya Jan Aushadhi Kendra", bho: "प्रधान मंत्री भारतीय जन औषधि केंद्र" },
    location: "सदर अस्पताल परिसर के अंदर, गोपालगंज",
    phone: "9876543213",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "तिवारी मेडिकल स्टोर", en: "Tiwari Medical Store", bho: "तिवारी मेडिकल स्टोर" },
    location: "मौनिया चौक, वी-मार्ट के पास, गोपालगंज",
    phone: "9876543214",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "सिन्हा मेडिकल्स", en: "Sinha Medicals", bho: "सिन्हा मेडिकल्स" },
    location: "थावे रोड, जंगलिया मोड़, गोपालगंज",
    phone: "9876543215",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "रजत मेडिको एजेंसी", en: "Rajat Medico Agency", bho: "रजत मेडिको एजेंसी" },
    location: "डॉ. ग्रेस नंदी स्कूल के पास, घोष मोड़, गोपालगंज",
    phone: "6206355877",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "शंकर मेडिकल हॉल", en: "Shankar Medical Hall", bho: "शंकर मेडिकल हॉल" },
    location: "पुरानी चौक, पोस्ट ऑफिस के बगल में, गोपालगंज",
    phone: "9876543216",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "बिहार मेडिकल हॉल", en: "Bihar Medical Hall", bho: "बिहार मेडिकल हॉल" },
    location: "अस्पताल रोड, डॉ. देवता सिंह क्लिनिक के पास, गोपालगंज",
    phone: "9876543217",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  },
  {
    name: { hi: "सिंह मेडिकल स्टोर", en: "Singh Medical Store", bho: "सिंह मेडिकल स्टोर" },
    location: "कैलाश होटल के पास, स्टेशन रोड, गोपालगंज",
    phone: "9876543218",
    imageUrl: "🏪",
    aiHint: "pharmacy storefront"
  }
];

export const medicalStoresData: MedicalStore[] = medicalStoresList.map((store, index) => ({
    ...store,
    id: `ms-${index + 1}`,
}));
