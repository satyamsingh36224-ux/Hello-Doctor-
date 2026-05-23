
import type { Doctor } from "@/types";
import { Brain, Heart, Stethoscope, Bone, Baby, User, Ear, Eye, UserCog } from 'lucide-react';

export const specializationMap = [
  { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" }, icon: Stethoscope },
  { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" }, icon: Heart },
  { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" }, icon: Baby },
  { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" }, icon: User },
  { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" }, icon: Stethoscope },
  { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" }, icon: Bone },
  { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" }, icon: Stethoscope },
  { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" }, icon: Brain },
  { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" }, icon: Ear },
  { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" }, icon: Eye },
  { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" }, icon: UserCog },
];

export const doctors: (Doctor & { city: 'siwan' | 'gopalganj' })[] = [
    // --- SIWAN DOCTORS ---
    {
        id: "dr-manoj-kumar-singh-1",
        city: "siwan",
        name: { hi: "डॉ. मनोज कुमार सिंह", en: "Dr. Manoj Kumar Singh", bho: "डॉ. मनोज कुमार सिंह" },
        specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } },
        description: { hi: "एक अनुभवी सामान्य चिकित्सक हैं जिन्हें 21 वर्षों का अनुभव है।", en: "An experienced General Physician with 21 years of practice.", bho: "एगो अनुभवी साधारण डॉक्टर हईं जिनके 21 साल के अनुभव बा।" },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "indian male doctor"
    },
    {
        id: "dr-ashutosh-kumar-sinha-11",
        city: "siwan",
        name: { hi: "डॉ. आशुतोष कुमार सिन्हा", en: "Dr. Ashutosh Kumar Sinha", bho: "डॉ. आशुतोष कुमार सिन्हा" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "एक अनुभवी हृदय रोग विशेषज्ञ।", en: "An experienced cardiologist.", bho: "एगो अनुभवी हृदय रोग विशेषज्ञ।" },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "दुर्गा मंदिर के पास, फतेपुर, सीवान",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-dilip-kumar-21",
        city: "siwan",
        name: { hi: "डॉ. दिलीप कुमार", en: "Dr. Dilip Kumar", bho: "डॉ. दिलीप कुमार" },
        specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } },
        description: { hi: "बच्चों के विशेषज्ञ, वैदेही न्यूबॉर्न एंड चाइल्ड केयर सेंटर में कार्यरत।", en: "Pediatric specialist at Vaidehi Newborn & Child Care Center.", bho: "लइकन के विशेषज्ञ, वैदेही न्यूबॉर्न एंड चाइल्ड केयर सेंटर में कार्यरत।" },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "न्यू डॉक्टर कॉलोनी, विजयहाटा, सीवान",
        aiHint: "friendly male doctor"
    },
    // --- GOPALGANJ DOCTORS (Mock data until provided) ---
    {
        id: "dr-gopal-doctor-1",
        city: "gopalganj",
        name: { hi: "डॉ. गोपाल सिंह", en: "Dr. Gopal Singh", bho: "डॉ. गोपाल सिंह" },
        specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } },
        description: { hi: "गोपालगंज के एक प्रसिद्ध सामान्य चिकित्सक।", en: "A famous General Physician in Gopalganj.", bho: "गोपालगंज के एगो प्रसिद्ध साधारण डॉक्टर।" },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "हॉस्पिटल रोड, गोपालगंज",
        aiHint: "indian doctor"
    },
    {
        id: "dr-gopal-ped-1",
        city: "gopalganj",
        name: { hi: "डॉ. विकास कुमार", en: "Dr. Vikas Kumar", bho: "डॉ. विकास कुमार" },
        specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } },
        description: { hi: "बच्चों के स्वास्थ्य विशेषज्ञ।", en: "Child health specialist.", bho: "लइकन के स्वास्थ्य विशेषज्ञ।" },
        fee: 400,
        imageUrl: "🧑‍⚕️",
        location: "अंबेडकर चौक, गोपालगंज",
        aiHint: "pediatrician"
    }
];
