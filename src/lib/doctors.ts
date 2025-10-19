
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
        id: "dr-manoj-kumar-singh-1",
        name: {
            hi: "डॉ. मनोज कुमार सिंह",
            en: "Dr. Manoj Kumar Singh",
            bho: "डॉ. मनोज कुमार सिंह"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. मनोज कुमार सिंह एक अनुभवी सामान्य चिकित्सक हैं जिन्हें 21 वर्षों का अनुभव है।",
            en: "Dr. Manoj Kumar Singh is an experienced General Physician with 21 years of practice.",
            bho: "डॉ. मनोज कुमार सिंह एगो अनुभवी साधारण डॉक्टर हईं जिनके 21 साल के अनुभव बा।"
        },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "indian male doctor"
    },
    {
        id: "dr-md-faizan-sarwar-2",
        name: {
            hi: "डॉ. मो. फैजान सरवर",
            en: "Dr. Md Faizan Sarwar",
            bho: "डॉ. मो. फैजान सरवर"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. मो. फैजान सरवर एक सामान्य चिकित्सक हैं जिन्हें 11 वर्षों का अनुभव है।",
            en: "Dr. Md Faizan Sarwar is a General Physician with 11 years of practice.",
            bho: "डॉ. मो. फैजान सरवर एगो साधारण डॉक्टर हईं जिनके 11 साल के अनुभव बा।"
        },
        fee: 250,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "male doctor"
    },
    {
        id: "dr-lal-babu-prasad-3",
        name: {
            hi: "डॉ. लाल बाबू प्रसाद",
            en: "Dr. Lal Babu Prasad",
            bho: "डॉ. लाल बाबू प्रसाद"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. लाल बाबू प्रसाद एक वरिष्ठ सामान्य चिकित्सक हैं जिन्हें 24 वर्षों का अनुभव है।",
            en: "Dr. Lal Babu Prasad is a senior General Physician with 24 years of practice.",
            bho: "डॉ. लाल बाबू प्रसाद एगो वरिष्ठ साधारण डॉक्टर हईं जिनके 24 साल के अनुभव बा।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "experienced male doctor"
    },
    {
        id: "dr-sanjay-kumar-pandey-4",
        name: {
            hi: "डॉ. संजय कुमार पांडेय",
            en: "Dr. Sanjay Kumar Pandey",
            bho: "डॉ. संजय कुमार पांडेय"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            },
        },
        description: {
            hi: "डॉ. संजय कुमार पांडेय एक बहुत अनुभवी सामान्य चिकित्सक हैं जिन्हें 29 वर्षों का अनुभव है।",
            en: "Dr. Sanjay Kumar Pandey is a very experienced General Physician with 29 years of practice.",
            bho: "डॉ. संजय कुमार पांडेय एगो बहुत अनुभवी साधारण डॉक्टर हईं जिनके 29 साल के अनुभव बा।"
        },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "indian doctor professional"
    },
    {
        id: "dr-ajay-kumar-sinha-5",
        name: {
            hi: "डॉ. अजय कुमार सिन्हा",
            en: "Dr. Ajay Kumar Sinha",
            bho: "डॉ. अजय कुमार सिन्हा"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. अजय कुमार सिन्हा एक सामान्य चिकित्सक हैं जिन्हें 13 वर्षों का अनुभव है।",
            en: "Dr. Ajay Kumar Sinha is a General Physician with 13 years of practice.",
            bho: "डॉ. अजय कुमार सिन्हा एगो साधारण डॉक्टर हईं जिनके 13 साल के अनुभव बा।"
        },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "professional indian man"
    },
    {
        id: "dr-pradeep-kumar-singh-6",
        name: {
            hi: "डॉ. प्रदीप कुमार सिंह",
            en: "Dr. Pradeep Kumar Singh",
            bho: "डॉ. प्रदीप कुमार सिंह"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. प्रदीप कुमार सिंह एक सामान्य चिकित्सक हैं जिन्हें 15 वर्षों का अनुभव है।",
            en: "Dr. Pradeep Kumar Singh is a General Physician with 15 years of practice.",
            bho: "डॉ. प्रदीप कुमार सिंह एगो साधारण डॉक्टर हईं जिनके 15 साल के अनुभव बा।"
        },
        fee: 350,
        imageUrl: "👨‍⚕️",
        location: "हॉस्पिटल रोड, सीवान",
        aiHint: "doctor stethoscope"
    },
    {
        id: "dr-m-a-zahid-7",
        name: {
            hi: "डॉ. एम. ए. जाहिद",
            en: "Dr. M A Zahid",
            bho: "डॉ. एम. ए. जाहिद"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. एम. ए. जाहिद एक ज्ञात सामान्य चिकित्सक हैं जो बबुनिया रोड में प्रैक्टिस करते हैं।",
            en: "Dr. M A Zahid is a known General Physician practicing at Babunia Road.",
            bho: "डॉ. एम. ए. जाहिद एगो ज्ञात साधारण डॉक्टर हईं जे बबुनिया रोड में प्रैक्टिस करेनी।"
        },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "बबुनिया रोड, कागजी मुहल्ला, सीवान",
        aiHint: "male doctor serious"
    },
    {
        id: "dr-kafeel-ahmad-8",
        name: {
            hi: "डॉ. कफील अहमद",
            en: "Dr. Kafeel Ahmad",
            bho: "डॉ. कफील अहमद"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. कफील अहमद ह्यूमन लाइफ केयर, अंदर बाजार, सीवान में एक सामान्य चिकित्सक हैं।",
            en: "Dr. Kafeel Ahmad is a General Physician at Human Life Care, Andar Bazaar, Siwan.",
            bho: "डॉ. कफील अहमद ह्यूमन लाइफ केयर, अंदर बाजार, सीवान में एगो साधारण डॉक्टर हईं।"
        },
        fee: 250,
        imageUrl: "👨‍⚕️",
        location: "ह्यूमन लाइफ केयर, अंदर बाजार, सीवान",
        aiHint: "doctor friendly"
    },
    {
        id: "dr-saurabh-singh-9",
        name: {
            hi: "डॉ. सौरव सिंह",
            en: "Dr. Saurabh Singh",
            bho: "डॉ. सौरव सिंह"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. सौरव सिंह सरोज हेल्थकेयर सेंटर, चकिया महादेवा, सीवान में एक सामान्य चिकित्सक के रूप में सेवा प्रदान करते हैं।",
            en: "Dr. Saurabh Singh serves as a General Physician at Saroj Healthcare Centre, Chakiya Mahadeva, Siwan.",
            bho: "डॉ. सौरव सिंह सरोज हेल्थकेयर सेंटर, चकिया महादेवा, सीवान में एगो साधारण डॉक्टर के रूप में सेवा प्रदान करेनी।"
        },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "सरोज हेल्थकेयर सेंटर, राजीव नगर रोड, चकिया महादेवा, सीवान",
        aiHint: "young male doctor"
    },
    {
        id: "dr-jamshed-ahmad-10",
        name: {
            hi: "डॉ. जमशेद अहमद",
            en: "Dr. Jamshed Ahmad",
            bho: "डॉ. जमशेद अहमद"
        },
        specialization: {
            key: "General Physician",
            name: {
                hi: "सामान्य चिकित्सक",
                en: "General Physician",
                bho: "साधारण डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. जमशेद अहमद एक बहुत ही वरिष्ठ सामान्य चिकित्सक हैं जिन्हें 43 वर्षों का विशाल अनुभव है।",
            en: "Dr. Jamshed Ahmad is a very senior General Physician with a vast experience of 43 years.",
            bho: "डॉ. जमशेद अहमद एगो बहुत वरिष्ठ साधारण डॉक्टर हईं जिनके 43 साल के विशाल अनुभव बा।"
        },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "senior indian doctor"
    }
];
