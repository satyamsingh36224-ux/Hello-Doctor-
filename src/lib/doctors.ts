
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

export const doctors: Doctor[] = [
    {
        "id": "dr-ashok-kumar-singh",
        "name": {
            "hi": "डॉ. अशोक कुमार सिंह",
            "en": "Dr. Ashok Kumar Singh",
            "bho": "डॉ. अशोक कुमार सिंह"
        },
        "specialization": {
            "key": "General Physician",
            "name": { "hi": "सामान्य चिकित्सक", "en": "General Physician", "bho": "साधारण डॉक्टर" }
        },
        "description": {
            "hi": "एमबीबीएस, एमडी। डॉ. अशोक कुमार सिंह एक अनुभवी सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों का इलाज करते हैं।",
            "en": "MBBS, MD. Dr. Ashok Kumar Singh is an experienced General Physician treating all kinds of common ailments.",
            "bho": "एमबीबीएस, एमडी। डॉ. अशोक कुमार सिंह एगो अनुभवी साधारण डॉक्टर हईं जे सभे किसिम के आम बेमारी के इलाज करेनी।"
        },
        "fee": 300,
        "imageUrl": "👨‍⚕️",
        "location": "स्टेशन रोड, सीवान",
        "aiHint": "indian male doctor"
    },
    {
        "id": "dr-ram-naresh-sharma",
        "name": {
            "hi": "डॉ. राम नरेश शर्मा",
            "en": "Dr. Ram Naresh Sharma",
            "bho": "डॉ. राम नरेश शर्मा"
        },
        "specialization": {
            "key": "General Physician",
            "name": { "hi": "सामान्य चिकित्सक", "en": "General Physician", "bho": "साधारण डॉक्टर" }
        },
        "description": {
            "hi": "बुखार, सर्दी, और अन्य सामान्य स्वास्थ्य समस्याओं के विशेषज्ञ।",
            "en": "Specialist in fever, cold, and other general health issues.",
            "bho": "बोखार, सर्दी, आउर दोसर साधारण स्वास्थ्य समस्या के विशेषज्ञ।"
        },
        "fee": 250,
        "imageUrl": "👨‍⚕️",
        "location": "अस्पताल रोड, सीवान",
        "aiHint": "experienced indian doctor"
    },
    {
        "id": "dr-sarita-kumari",
        "name": {
            "hi": "डॉ. सरिता कुमारी",
            "en": "Dr. Sarita Kumari",
            "bho": "डॉ. सरिता कुमारी"
        },
        "specialization": {
            "key": "Gynecologist",
            "name": { "hi": "स्त्री रोग विशेषज्ञ", "en": "Gynecologist", "bho": "मेहरारू के डॉक्टर" }
        },
        "description": {
            "hi": "एमबीबीएस, डीजीओ। महिलाओं के स्वास्थ्य, गर्भावस्था और संबंधित मुद्दों की विशेषज्ञ।",
            "en": "MBBS, DGO. Specialist in women's health, pregnancy, and related issues.",
            "bho": "एमबीबीएस, डीजीओ। मेहरारू लोग के स्वास्थ्य, गर्भावस्था, आउर ओकरा से जुड़ल समस्या के विशेषज्ञ।"
        },
        "fee": 400,
        "imageUrl": "👩‍⚕️",
        "location": "राजेंद्र पथ, सीवान",
        "aiHint": "indian female doctor"
    },
    {
        "id": "dr-manju-sharma",
        "name": {
            "hi": "डॉ. मंजू शर्मा",
            "en": "Dr. Manju Sharma",
            "bho": "डॉ. मंजू शर्मा"
        },
        "specialization": {
            "key": "Gynecologist",
            "name": { "hi": "स्त्री रोग विशेषज्ञ", "en": "Gynecologist", "bho": "मेहरारू के डॉक्टर" }
        },
        "description": {
            "hi": "महिलाओं से संबंधित सभी प्रकार की बीमारियों के लिए एक विश्वसनीय नाम।",
            "en": "A trusted name for all types of women-related ailments.",
            "bho": "मेहरारू लोग से जुड़ल सभे बेमारी खातिर एगो भरोसेमंद नांव।"
        },
        "fee": 350,
        "imageUrl": "👩‍⚕️",
        "location": "महादेवा, सीवान",
        "aiHint": "professional female doctor"
    },
    {
        "id": "dr-rakesh-prasad",
        "name": {
            "hi": "डॉ. राकेश प्रसाद",
            "en": "Dr. Rakesh Prasad",
            "bho": "डॉ. राकेश प्रसाद"
        },
        "specialization": {
            "key": "Pediatrician",
            "name": { "hi": "बच्चों का चिकित्सक", "en": "Pediatrician", "bho": "लइकन के डॉक्टर" }
        },
        "description": {
            "hi": "एमडी (बाल रोग)। नवजात शिशुओं और बच्चों के स्वास्थ्य के विशेषज्ञ।",
            "en": "MD (Pediatrics). Specialist in newborn and child health.",
            "bho": "एमडी (बाल रोग)। नया जनमल लइकन आउर छोट लइकन के स्वास्थ्य के विशेषज्ञ।"
        },
        "fee": 350,
        "imageUrl": "👨‍⚕️",
        "location": "शांति वट वृक्ष, सीवान",
        "aiHint": "male doctor smiling"
    },
    {
        "id": "dr-s-k-verma",
        "name": {
            "hi": "डॉ. एस. के. वर्मा",
            "en": "Dr. S. K. Verma",
            "bho": "डॉ. एस. के. वर्मा"
        },
        "specialization": {
            "key": "Pediatrician",
            "name": { "hi": "बच्चों का चिकित्सक", "en": "Pediatrician", "bho": "लइकन के डॉक्टर" }
        },
        "description": {
            "hi": "बच्चों के टीकाकरण और पोषण संबंधी सलाह के लिए जाने जाते हैं।",
            "en": "Known for child vaccination and nutritional advice.",
            "bho": "लइकन के टीकाकरण आउर पोषण सलाह खातिर जानल जानी।"
        },
        "fee": 300,
        "imageUrl": "👨‍⚕️",
        "location": "गोपाला मोड़, सीवान",
        "aiHint": "senior indian doctor"
    },
    {
        "id": "dr-imran-khan",
        "name": {
            "hi": "डॉ. इमरान खान",
            "en": "Dr. Imran Khan",
            "bho": "डॉ. इमरान खान"
        },
        "specialization": {
            "key": "Dermatologist",
            "name": { "hi": "त्वचा विशेषज्ञ", "en": "Dermatologist", "bho": "चमड़ी के डॉक्टर" }
        },
        "description": {
            "hi": "एमबीबीएस, एमडी (त्वचा)। त्वचा, बाल और नाखून से संबंधित सभी समस्याओं का इलाज करते हैं।",
            "en": "MBBS, MD (Dermatology). Treats all problems related to skin, hair, and nails.",
            "bho": "एमबीबीएस, एमडी (चमड़ी)। चमड़ी, बार, आउर नाह से जुड़ल सभे समस्या के इलाज करेनी।"
        },
        "fee": 500,
        "imageUrl": "👨‍⚕️",
        "location": "बाबुनिया रोड, सीवान",
        "aiHint": "young male doctor"
    },
    {
        "id": "dr-ahmad-ali",
        "name": {
            "hi": "डॉ. अहमद अली",
            "en": "Dr. Ahmad Ali",
            "bho": "डॉ. अहमद अली"
        },
        "specialization": {
            "key": "Dermatologist",
            "name": { "hi": "त्वचा विशेषज्ञ", "en": "Dermatologist", "bho": "चमड़ी के डॉक्टर" }
        },
        "description": {
            "hi": "चर्म रोगों के इलाज में विशेषज्ञता।",
            "en": "Specializes in the treatment of skin diseases.",
            "bho": "चमड़ी के बेमारी के इलाज में माहिर।"
        },
        "fee": 450,
        "imageUrl": "👨‍⚕️",
        "location": "इस्लामिया नगर, सीवान",
        "aiHint": "doctor in clinic"
    },
    {
        "id": "dr-k-d-sinha",
        "name": {
            "hi": "डॉ. के. डी. सिन्हा",
            "en": "Dr. K. D. Sinha",
            "bho": "डॉ. के. डी. सिन्हा"
        },
        "specialization": {
            "key": "Orthopedic Surgeon",
            "name": { "hi": "हड्डी रोग विशेषज्ञ", "en": "Orthopedic Surgeon", "bho": "हड्डी के डॉक्टर" }
        },
        "description": {
            "hi": "एमएस (ऑर्थो)। हड्डी, जोड़ और फ्रैक्चर के विशेषज्ञ।",
            "en": "MS (Ortho). Specialist in bone, joint, and fractures.",
            "bho": "एमएस (ऑर्थो)। हड्डी, जोड़, आउर फ्रैक्चर के विशेषज्ञ।"
        },
        "fee": 500,
        "imageUrl": "👨‍⚕️",
        "location": "सदर अस्पताल के पास, सीवान",
        "aiHint": "mature doctor"
    },
    {
        "id": "dr-sanjay-kumar",
        "name": {
            "hi": "डॉ. संजय कुमार",
            "en": "Dr. Sanjay Kumar",
            "bho": "डॉ. संजय कुमार"
        },
        "specialization": {
            "key": "Orthopedic Surgeon",
            "name": { "hi": "हड्डी रोग विशेषज्ञ", "en": "Orthopedic Surgeon", "bho": "हड्डी के डॉक्टर" }
        },
        "description": {
            "hi": "खेल की चोटों और गठिया के इलाज में विशेषज्ञता।",
            "en": "Specializes in sports injuries and arthritis treatment.",
            "bho": "खेल के चोट आउर गठिया के इलाज में माहिर।"
        },
        "fee": 450,
        "imageUrl": "👨‍⚕️",
        "location": "लहेरी टोला, सीवान",
        "aiHint": "indian doctor portrait"
    }
];
