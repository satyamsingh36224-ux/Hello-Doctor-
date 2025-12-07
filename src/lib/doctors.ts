
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
            hi: "एक अनुभवी सामान्य चिकित्सक हैं जिन्हें 21 वर्षों का अनुभव है।",
            en: "An experienced General Physician with 21 years of practice.",
            bho: "एगो अनुभवी साधारण डॉक्टर हईं जिनके 21 साल के अनुभव बा।"
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
            hi: "एक सामान्य चिकित्सक हैं जिन्हें 11 वर्षों का अनुभव है।",
            en: "A General Physician with 11 years of practice.",
            bho: "एगो साधारण डॉक्टर हईं जिनके 11 साल के अनुभव बा।"
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
            hi: "एक वरिष्ठ सामान्य चिकित्सक हैं जिन्हें 24 वर्षों का अनुभव है।",
            en: "A senior General Physician with 24 years of practice.",
            bho: "एगो वरिष्ठ साधारण डॉक्टर हईं जिनके 24 साल के अनुभव बा।"
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
            hi: "एक बहुत अनुभवी सामान्य चिकित्सक हैं जिन्हें 29 वर्षों का अनुभव है।",
            en: "A very experienced General Physician with 29 years of practice.",
            bho: "एगो बहुत अनुभवी साधारण डॉक्टर हईं जिनके 29 साल के अनुभव बा।"
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
            hi: "एक सामान्य चिकित्सक हैं जिन्हें 13 वर्षों का अनुभव है।",
            en: "A General Physician with 13 years of practice.",
            bho: "एगो साधारण डॉक्टर हईं जिनके 13 साल के अनुभव बा।"
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
            hi: "एक सामान्य चिकित्सक हैं जिन्हें 15 वर्षों का अनुभव है।",
            en: "A General Physician with 15 years of practice.",
            bho: "एगो साधारण डॉक्टर हईं जिनके 15 साल के अनुभव बा।"
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
            hi: "एक ज्ञात सामान्य चिकित्सक हैं जो बबुनिया रोड में प्रैक्टिस करते हैं।",
            en: "A known General Physician practicing at Babunia Road.",
            bho: "एगो ज्ञात साधारण डॉक्टर हईं जे बबुनिया रोड में प्रैक्टिस करेनी।"
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
            hi: "ह्यूमन लाइफ केयर, अंदर बाजार, सीवान में एक सामान्य चिकित्सक हैं।",
            en: "Is a General Physician at Human Life Care, Andar Bazaar, Siwan.",
            bho: "ह्यूमन लाइफ केयर, अंदर बाजार, सीवान में एगो साधारण डॉक्टर हईं।"
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
            hi: "सरोज हेल्थकेयर सेंटर, चकिया महादेवा, सीवान में एक सामान्य चिकित्सक के रूप में सेवा प्रदान करते हैं।",
            en: "Serves as a General Physician at Saroj Healthcare Centre, Chakiya Mahadeva, Siwan.",
            bho: "सरोज हेल्थकेयर सेंटर, चकिया महादेवा, सीवान में एगो साधारण डॉक्टर के रूप में सेवा प्रदान करेनी।"
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
            hi: "एक बहुत ही वरिष्ठ सामान्य चिकित्सक हैं जिन्हें 43 वर्षों का विशाल अनुभव है।",
            en: "A very senior General Physician with a vast experience of 43 years.",
            bho: "एगो बहुत वरिष्ठ साधारण डॉक्टर हईं जिनके 43 साल के विशाल अनुभव बा।"
        },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सीवान",
        aiHint: "senior indian doctor"
    },
    {
        id: "dr-ashutosh-kumar-sinha-11",
        name: {
            hi: "डॉ. आशुतोष कुमार सिन्हा",
            en: "Dr. Ashutosh Kumar Sinha",
            bho: "डॉ. आशुतोष कुमार सिन्हा"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist.",
            bho: "एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "दुर्गा मंदिर के पास, फतेपुर, सीवान - 841226, बिहार",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-razi-ahmad-12",
        name: {
            hi: "डॉ. रज़ी अहमद",
            en: "Dr. Razi Ahmad",
            bho: "डॉ. रज़ी अहमद"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist.",
            bho: "एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "चापिया, सीवान, बिहार 841226, भारत",
        aiHint: "professional doctor"
    },
    {
        id: "dr-sanjay-singh-13",
        name: {
            hi: "डॉ. संजय सिंह",
            en: "Dr. Sanjay Singh",
            bho: "डॉ. संजय सिंह"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "बरौदा हार्ट केयर इंस्टीट्यूट एंड हॉस्पिटल में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Baroda Heart Care Institute & Hospital.",
            bho: "बरौदा हार्ट केयर इंस्टीट्यूट एंड हॉस्पिटल में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 600,
        imageUrl: "🧑‍⚕️",
        location: "बरौदा हार्ट केयर इंस्टीट्यूट एंड हॉस्पिटल, शाहजादा मार्केट, अस्पताल रोड, नाया बाजार, बाबनौली, सीवान, बिहार - 841210",
        aiHint: "male doctor hospital"
    },
    {
        id: "dr-ss-majidi-14",
        name: {
            hi: "डॉ. एस. एस. माजिदी",
            en: "Dr. S. S. Majidi",
            bho: "डॉ. एस. एस. माजिदी"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "अफीफा अस्पताल में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Afifa Hospital.",
            bho: "अफीफा अस्पताल में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 550,
        imageUrl: "👨‍⚕️",
        location: "अफीफा अस्पताल, होटल ताजवर के पास, एम एम कॉलोनी, सिसवान टोला, सीवान, बिहार - 841226",
        aiHint: "senior cardiologist"
    },
    {
        id: "dr-ritu-kumari-15",
        name: {
            hi: "डॉ. रितु कुमारी",
            en: "Dr. Ritu Kumari",
            bho: "डॉ. रितु कुमारी"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "रितु हार्ट केयर सेंटर में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Ritu Heart Care Center.",
            bho: "रितु हार्ट केयर सेंटर में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "रितु हार्ट केयर सेंटर, सीवान, बिहार",
        aiHint: "female cardiologist"
    },
    {
        id: "dr-deepak-verma-16",
        name: {
            hi: "डॉ. दीपक वर्मा",
            en: "Dr. Deepak Verma",
            bho: "डॉ. दीपक वर्मा"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "जीवन दीप हार्टकेयर सेंटर में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Jivan Deep Heartcare Center.",
            bho: "जीवन दीप हार्टकेयर सेंटर में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "जीवन दीप हार्टकेयर सेंटर, सीवान, बिहार",
        aiHint: "male doctor portrait"
    },
    {
        id: "dr-krishna-kumar-shahi-17",
        name: {
            hi: "डॉ. कृष्ण कुमार शाही",
            en: "Dr. Krishna Kumar Shahi",
            bho: "डॉ. कृष्ण कुमार शाही"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "वरतिका अर्ना हार्ट केयर एंड मल्टीस्पेशलिटी हॉस्पिटल में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Vartika Arna Heart Care & Multispeciality Hospital.",
            bho: "वरतिका अर्ना हार्ट केयर एंड मल्टीस्पेशलिटी हॉस्पिटल में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 600,
        imageUrl: "👨‍⚕️",
        location: "वरतिका अर्ना हार्ट केयर एंड मल्टीस्पेशलिटी हॉस्पिटल, सीवान, बिहार",
        aiHint: "experienced indian doctor"
    },
    {
        id: "dr-ritu-kumari-18",
        name: {
            hi: "डॉ. रितु कुमारी",
            en: "Dr. Ritu Kumari",
            bho: "डॉ. रितु कुमारी"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "रितु हार्ट केयर सेंटर में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Ritu Heart Care Center.",
            bho: "रितु हार्ट केयर सेंटर में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "रितु हार्ट केयर सेंटर, सीवान, बिहार",
        aiHint: "indian female doctor"
    },
    {
        id: "dr-abhishek-kumar-yadav-19",
        name: {
            hi: "डॉ. अभिषेक कुमार यादव",
            en: "Dr. Abhishek Kumar Yadav",
            bho: "डॉ. अभिषेक कुमार यादव"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "लाखीचंद हॉस्पिटल में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Lakhichand Hospital.",
            bho: "लाखीचंद हॉस्पिटल में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "लाखीचंद हॉस्पिटल, अस्पताल रोड, अमलोरी, सीवान, बिहार",
        aiHint: "young indian doctor"
    },
    {
        id: "dr-bhanu-pratap-singh-20",
        name: {
            hi: "डॉ. भानु प्रताप सिंह",
            en: "Dr. Bhanu Pratap Singh",
            bho: "डॉ. भानु प्रताप सिंह"
        },
        specialization: {
            key: "Cardiologist",
            name: {
                hi: "हृदय रोग विशेषज्ञ",
                en: "Cardiologist",
                bho: "हृदय रोग विशेषज्ञ"
            }
        },
        description: {
            hi: "डॉ. भानु प्रताप सिंह क्लिनिक में एक अनुभवी हृदय रोग विशेषज्ञ।",
            en: "An experienced cardiologist at Dr. Bhanu Pratap Singh Clinic.",
            bho: "डॉ. भानु प्रताप सिंह क्लिनिक में एगो अनुभवी हृदय रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "डॉ. भानु प्रताप सिंह क्लिनिक, सदर अस्पताल के पास, अमलोरी, सीवान, बिहार",
        aiHint: "doctor with glasses"
    },
    {
        id: "dr-dilip-kumar-21",
        name: {
            hi: "डॉ. दिलीप कुमार",
            en: "Dr. Dilip Kumar",
            bho: "डॉ. दिलीप कुमार"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "बच्चों के विशेषज्ञ, वैदेही न्यूबॉर्न एंड चाइल्ड केयर सेंटर में कार्यरत।",
            en: "Pediatric specialist at Vaidehi Newborn & Child Care Center.",
            bho: "लइकन के विशेषज्ञ, वैदेही न्यूबॉर्न एंड चाइल्ड केयर सेंटर में कार्यरत।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "वैदेही न्यूबॉर्न एंड चाइल्ड केयर सेंटर, न्यू डॉक्टर कॉलोनी, विजयहाटा, नज़दीक डॉ. शंकर सिंह, सीवान",
        aiHint: "friendly male doctor"
    },
    {
        id: "dr-om-prakash-singh-22",
        name: {
            hi: "डॉ. ओम प्रकाश सिंह",
            en: "Dr. Om Prakash Singh",
            bho: "डॉ. ओम प्रकाश सिंह"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "गोशाला रोड पर बच्चों के जाने-माने डॉक्टर।",
            en: "A well-known pediatrician on Goshala Road.",
            bho: "गोशाला रोड पर लइकन के जानल-मानल डॉक्टर।"
        },
        fee: 350,
        imageUrl: "🧑‍⚕️",
        location: "गोशाला रोड, सीवान - 841226, बिहार",
        aiHint: "senior male doctor"
    },
    {
        id: "dr-mridul-kumar-23",
        name: {
            hi: "डॉ. मृदुल कुमार",
            en: "Dr. Mridul Kumar",
            bho: "डॉ. मृदुल कुमार"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "मत्रुच्छाया हॉस्पिटल में बच्चों के अनुभवी डॉक्टर।",
            en: "Experienced pediatrician at Matruchhaya Hospital.",
            bho: "मत्रुच्छाया हॉस्पिटल में लइकन के अनुभवी डॉक्टर।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "मत्रुच्छाया हॉस्पिटल, हॉस्पिटल रोड, नज़दीक अड्डा नंबर 3, सीवान, बिहार",
        aiHint: "professional male doctor"
    },
    {
        id: "dr-vireshwar-prasad-24",
        name: {
            hi: "डॉ. वीरेश्वर प्रसाद",
            en: "Dr. Vireshwar Prasad",
            bho: "डॉ. वीरेश्वर प्रसाद"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "महादेवा में एक वरिष्ठ और सम्मानित बाल रोग विशेषज्ञ।",
            en: "A senior and respected pediatrician in Mahadeva.",
            bho: "महादेवा में एक वरिष्ठ आ सम्मानित बाल रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "महादेवा, सीवान, नज़दीक डॉ. रमा चौधरी के पास",
        aiHint: "experienced senior doctor"
    },
    {
        id: "dr-md-israil-25",
        name: {
            hi: "डॉ. एम.डी. इसराइल",
            en: "Dr. M.D. Israil",
            bho: "डॉ. एम.डी. इसराइल"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "साना चिल्ड्रन हॉस्पिटल में बच्चों के स्वास्थ्य की देखभाल करते हैं।",
            en: "Takes care of children's health at Sana Children's Hospital.",
            bho: "साना चिल्ड्रन हॉस्पिटल में लइकन के स्वास्थ्य के देखभाल करेनी।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "साना चिल्ड्रन हॉस्पिटल, मखदूम सराय मोड़, बाबुनिया रोड, सीवान",
        aiHint: "indian doctor smiling"
    },
    {
        id: "dr-manoj-kumar-singh-26",
        name: {
            hi: "डॉ. मनोज कुमार सिंह",
            en: "Dr. Manoj Kumar Singh",
            bho: "डॉ. मनोज कुमार सिंह"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "चाइल्ड केयर क्लिनिक में बच्चों के विशेषज्ञ।",
            en: "Child specialist at Child Care Clinic.",
            bho: "चाइल्ड केयर क्लिनिक में लइकन के विशेषज्ञ।"
        },
        fee: 450,
        imageUrl: "🧑‍⚕️",
        location: "चाइल्ड केयर क्लिनिक, दुर्गा मंदिर के पास, बाबनौली, सीवान - 841226, बिहार",
        aiHint: "kind male doctor"
    },
    {
        id: "dr-dinesh-kumar-singh-27",
        name: {
            hi: "डॉ. दिनेश कुमार सिंह",
            en: "Dr. Dinesh Kumar Singh",
            bho: "डॉ. दिनेश कुमार सिंह"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "न्यू पूजा मेडिकल स्टोर के पास बच्चों का इलाज करते हैं।",
            en: "Treats children near New Pooja Medical Store.",
            bho: "न्यू पूजा मेडिकल स्टोर के पास लइकन के इलाज करेनी।"
        },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "न्यू पूजा मेडिकल स्टोर, गोशाला रोड, नज़दीक डॉ. आर. किरण, सीवान",
        aiHint: "indian male doctor serious"
    },
    {
        id: "dr-ritu-kumari-28",
        name: {
            hi: "डॉ. रितु कुमारी",
            en: "Dr. Ritu Kumari",
            bho: "डॉ. रितु कुमारी"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "रितु हार्ट केयर सेंटर में बच्चों का भी इलाज करती हैं।",
            en: "Also treats children at Ritu Heart Care Center.",
            bho: "रितु हार्ट केयर सेंटर में लइकन के भी इलाज करेनी।"
        },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "रितु हार्ट केयर सेंटर, सीवान, बिहार",
        aiHint: "young female doctor"
    },
    {
        id: "dr-krishna-kumar-shahi-29",
        name: {
            hi: "डॉ. कृष्ण कुमार शाही",
            en: "Dr. Krishna Kumar Shahi",
            bho: "डॉ. कृष्ण कुमार शाही"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "वरतिका अर्ना हार्ट केयर एंड मल्टीस्पेशलिटी हॉस्पिटल में बच्चों के विशेषज्ञ।",
            en: "Pediatric specialist at Vartika Arna Heart Care & Multispeciality Hospital.",
            bho: "वरतिका अर्ना हार्ट केयर एंड मल्टीस्पेशलिटी हॉस्पिटल में लइकन के विशेषज्ञ।"
        },
        fee: 600,
        imageUrl: "👨‍⚕️",
        location: "वरतिका अर्ना हार्ट केयर एंड मल्टीस्पेशलिटी हॉस्पिटल, सीवान, बिहार",
        aiHint: "senior indian doctor glasses"
    },
    {
        id: "dr-abhishek-kumar-yadav-30",
        name: {
            hi: "डॉ. अभिषेक कुमार यादव",
            en: "Dr. Abhishek Kumar Yadav",
            bho: "डॉ. अभिषेक कुमार यादव"
        },
        specialization: {
            key: "Pediatrician",
            name: {
                hi: "बच्चों का चिकित्सक",
                en: "Pediatrician",
                bho: "लइकन के डॉक्टर"
            }
        },
        description: {
            hi: "लाखीचंद हॉस्पिटल में बाल रोग विशेषज्ञ।",
            en: "Pediatrician at Lakhichand Hospital.",
            bho: "लाखीचंद हॉस्पिटल में बाल रोग विशेषज्ञ।"
        },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "लाखीचंद हॉस्पिटल, अस्पताल रोड, अमलोरी, सीवान, बिहार",
        aiHint: "young male doctor smiling"
    },
    {
        id: "dr-sandeep-kumar-mishra-31",
        name: {
            hi: "डॉ. संदीप कुमार मिश्रा",
            en: "Dr. Sandeep Kumar Mishra",
            bho: "डॉ. संदीप कुमार मिश्रा"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "त्वचा और लेजर क्लिनिक में माहिर।",
            en: "Specialist in skin and laser treatments.",
            bho: "चमड़ी आ लेजर क्लिनिक में माहिर।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "गौशाला रोड, सिवान (Sufia Memorial Hospital के सामने, Anupam Medical Hall के पास)",
        aiHint: "dermatologist doctor"
    },
    {
        id: "dr-binay-kumar-sharma-32",
        name: {
            hi: "डॉ. बिनय कुमार शर्मा",
            en: "Dr. Binay Kumar Sharma",
            bho: "डॉ. बिनय कुमार शर्मा"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "Derma Healer क्लिनिक में त्वचा की देखभाल के विशेषज्ञ।",
            en: "Skin care expert at Derma Healer Clinic.",
            bho: "Derma Healer क्लिनिक में चमड़ी के देखभाल के विशेषज्ञ।"
        },
        fee: 450,
        imageUrl: "🧑‍⚕️",
        location: "Derma Healer – Laser & Skin Care Clinic, सिवान",
        aiHint: "skin specialist"
    },
    {
        id: "dr-srishti-sinha-33",
        name: {
            hi: "डॉ. सृष्टि सिन्हा",
            en: "Dr. Srishti Sinha",
            bho: "डॉ. सृष्टि सिन्हा"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "एक महिला त्वचा विशेषज्ञ जो अस्पताल रोड पर प्रैक्टिस करती हैं।",
            en: "A female dermatologist practicing on Hospital Road.",
            bho: "एगो महिला चमड़ी के डॉक्टर जे अस्पताल रोड पर प्रैक्टिस करेनी।"
        },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "Near Dr. A K Sinha, Phattehpur Durga Mandir, Hospital Road, सिवान",
        aiHint: "female dermatologist"
    },
    {
        id: "dr-manzoor-alam-34",
        name: {
            hi: "डॉ. मंजूर आलम",
            en: "Dr. Manzoor Alam",
            bho: "डॉ. मंजूर आलम"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "Skin and Beauty Care Centre में त्वचा और सौंदर्य विशेषज्ञ।",
            en: "Skin and beauty expert at Skin and Beauty Care Centre.",
            bho: "Skin and Beauty Care Centre में चमड़ी आ सुंदरता के विशेषज्ञ।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "Skin and Beauty Care Centre, सिवान",
        aiHint: "male skin doctor"
    },
    {
        id: "dr-rajeev-kumar-35",
        name: {
            hi: "डॉ. राजीव कुमार",
            en: "Dr. Rajeev Kumar",
            bho: "डॉ. राजीव कुमार"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "सिवान में एक जाने-माने त्वचा विशेषज्ञ।",
            en: "A well-known dermatologist in Siwan.",
            bho: "सिवान में एक जानल-मानल चमड़ी के डॉक्टर।"
        },
        fee: 350,
        imageUrl: "🧑‍⚕️",
        location: "सिवान",
        aiHint: "indian doctor professional"
    },
    {
        id: "dr-pravin-prasad-36",
        name: {
            hi: "डॉ. प्रवीण प्रसाद",
            en: "Dr. Pravin Prasad",
            bho: "डॉ. प्रवीण प्रसाद"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "सिवान में त्वचा संबंधी समस्याओं के लिए एक विश्वसनीय नाम।",
            en: "A trusted name for skin-related issues in Siwan.",
            bho: "सिवान में चमड़ी से जुड़ल समस्या खातिर एक विश्वसनीय नाम।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "सिवान",
        aiHint: "doctor with coat"
    },
    {
        id: "dr-vk-singh-37",
        name: {
            hi: "डॉ. वी.के. सिंह",
            en: "Dr. V.K. Singh",
            bho: "डॉ. वी.के. सिंह"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "Hope Hospital में त्वचा रोग विभाग का नेतृत्व करते हैं।",
            en: "Heads the dermatology department at Hope Hospital.",
            bho: "Hope Hospital में चमड़ी रोग विभाग के नेतृत्व करेनी।"
        },
        fee: 550,
        imageUrl: "🧑‍⚕️",
        location: "Hope Hospital, सिवान",
        aiHint: "senior doctor serious"
    },
    {
        id: "dr-ak-mishra-38",
        name: {
            hi: "डॉ. ए.के. मिश्रा",
            en: "Dr. A.K. Mishra",
            bho: "डॉ. ए.के. मिश्रा"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "एक वरिष्ठ त्वचा विशेषज्ञ जिन्हें कई वर्षों का अनुभव है।",
            en: "A senior dermatologist with many years of experience.",
            bho: "एगो वरिष्ठ चमड़ी के डॉक्टर जिनके कई साल के अनुभव बा।"
        },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सिवान",
        aiHint: "experienced indian doctor"
    },
    {
        id: "dr-ajay-kumar-pathak-39",
        name: {
            hi: "डॉ. अजय कुमार पाठक",
            en: "Dr. Ajay Kumar Pathak",
            bho: "डॉ. अजय कुमार पाठक"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "त्वचा रोगों के निदान और उपचार में विशेषज्ञ।",
            en: "Specialist in diagnosing and treating skin diseases.",
            bho: "चमड़ी के रोग के निदान आ उपचार में विशेषज्ञ।"
        },
        fee: 400,
        imageUrl: "🧑‍⚕️",
        location: "सिवान",
        aiHint: "male doctor friendly"
    },
    {
        id: "dr-abuzar-hussain-40",
        name: {
            hi: "डॉ. अबूज़र हुसैन",
            en: "Dr. Abuzar Hussain",
            bho: "डॉ. अबूज़र हुसैन"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            }
        },
        description: {
            hi: "Aashia Shabbir Health Care में अपनी सेवाएं प्रदान करते हैं।",
            en: "Provides his services at Aashia Shabbir Health Care.",
            bho: "Aashia Shabbir Health Care में आपन सेवा देवेनी।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "Aashia Shabbir Health Care, सिवान",
        aiHint: "doctor with a smile"
    },
    {
        id: "dr-srishti-sinha-41",
        name: { "hi": "डॉ. सृष्टि सिन्हा", "en": "Dr. Srishti Sinha", "bho": "डॉ. सृष्टि सिन्हा" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और कॉस्मेटोलॉजी में विशेषज्ञ।", en: "Specialist in Dermatology and Cosmetology.", bho: "चमड़ी के रोग आ कॉस्मेटोलॉजी में विशेषज्ञ।" },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "मेडिवर्सल मात्री हॉस्पिटल, सिवान",
        aiHint: "female doctor professional"
    },
    {
        id: "dr-aarti-kumari-42",
        name: { "hi": "डॉ. आरती कुमारी", "en": "Dr. Aarti Kumari", "bho": "डॉ. आरती कुमारी" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा और बालों की देखभाल में विशेषज्ञ।", en: "Specialist in skin and hair care.", bho: "चमड़ी आ बाल के देखभाल में विशेषज्ञ।" },
        fee: 450,
        imageUrl: "👩‍⚕️",
        location: "लक्ष्मी नर्सिंग होम, सिवान",
        aiHint: "indian female doctor"
    },
    {
        id: "dr-taranam-43",
        name: { "hi": "डॉ. तारणम", "en": "Dr. Taranam", "bho": "डॉ. तारणम" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और लेजर उपचार में विशेषज्ञ।", en: "Specialist in dermatology and laser treatments.", bho: "चमड़ी के रोग आ लेजर उपचार में विशेषज्ञ।" },
        fee: 550,
        imageUrl: "👩‍⚕️",
        location: "रेडियन्स स्किन एस्थेटिक्स एंड लेजर क्लिनिक, नया बाजार, सिवान",
        aiHint: "professional woman doctor"
    },
    {
        id: "dr-binay-kumar-sharma-44",
        name: { "hi": "डॉ. बिनय कुमार शर्मा", "en": "Dr. Binay Kumar Sharma", "bho": "डॉ. बिनय कुमार शर्मा" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और कॉस्मेटोलॉजी में विशेषज्ञ।", en: "Specialist in Dermatology and Cosmetology.", bho: "चमड़ी के रोग आ कॉस्मेटोलॉजी में विशेषज्ञ।" },
        fee: 450,
        imageUrl: "👨‍⚕️",
        location: "सिवान",
        aiHint: "male doctor serious"
    },
    {
        id: "dr-narendra-kumar-45",
        name: { "hi": "डॉ. नरेंद्र कुमार", "en": "Dr. Narendra Kumar", "bho": "डॉ. नरेंद्र कुमार" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "होम्योपैथिक त्वचा उपचार में विशेषज्ञ।", en: "Specialist in homeopathic skin treatments.", bho: "होम्योपैथिक चमड़ी उपचार में विशेषज्ञ।" },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "बाबा होमियो क्लिनिक, सिवान",
        aiHint: "homeopathy doctor"
    },
    {
        id: "dr-pankaj-kumar-gupta-46",
        name: { "hi": "डॉ. पंकज कुमार गुप्ता", "en": "Dr. Pankaj Kumar Gupta", "bho": "डॉ. पंकज कुमार गुप्ता" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और सौंदर्य उपचार में विशेषज्ञ।", en: "Specialist in dermatology and beauty treatments.", bho: "चमड़ी के रोग आ सौंदर्य उपचार में विशेषज्ञ।" },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "स्किन एंड सौंदर्य केयर, सिवान",
        aiHint: "indian male doctor"
    },
    {
        id: "dr-abuzar-hussain-47",
        name: { "hi": "डॉ. अबुजर हुसैन", "en": "Dr. Abuzar Hussain", "bho": "डॉ. अबुजर हुसैन" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और बालों की देखभाल में विशेषज्ञ।", en: "Specialist in dermatology and hair care.", bho: "चमड़ी के रोग आ बाल के देखभाल में विशेषज्ञ।" },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "आशिया शब्बीर हेल्थ केयर, सिवान",
        aiHint: "male doctor smiling"
    },
    {
        id: "dr-ajay-kumar-pathak-48",
        name: { "hi": "डॉ. अजय कुमार पाठक", "en": "Dr. Ajay Kumar Pathak", "bho": "डॉ. अजय कुमार पाठक" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और कॉस्मेटोलॉजी में विशेषज्ञ।", en: "Specialist in Dermatology and Cosmetology.", bho: "चमड़ी के रोग आ कॉस्मेटोलॉजी में विशेषज्ञ।" },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "सिवान",
        aiHint: "doctor professional"
    },
    {
        id: "dr-md-rabiuddin-49",
        name: { "hi": "डॉ. मो. रबीउद्दीन", "en": "Dr. Md. Rabiuddin", "bho": "डॉ. मो. रबीउद्दीन" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और बालों की देखभाल में विशेषज्ञ।", en: "Specialist in dermatology and hair care.", bho: "चमड़ी के रोग आ बाल के देखभाल में विशेषज्ञ।" },
        fee: 450,
        imageUrl: "👨‍⚕️",
        location: "जेड ए एडवांस्ड स्किन एंड हेयर केयर सेंटर, सिवान",
        aiHint: "doctor portrait"
    },
    {
        id: "dr-suman-devi-50",
        name: { "hi": "डॉ. सुमन देवी", "en": "Dr. Suman Devi", "bho": "डॉ. सुमन देवी" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "त्वचा रोग और कॉस्मेटोलॉजी में विशेषज्ञ।", en: "Specialist in Dermatology and Cosmetology.", bho: "चमड़ी के रोग आ कॉस्मेटोलॉजी में विशेषज्ञ।" },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "सिवान",
        aiHint: "female doctor serious"
    },
    {
        id: "dr-rameshwar-kumar-singh-51",
        name: { "hi": "डॉ. रामेश्वर कुमार सिंह", "en": "Dr. Rameshwar Kumar Singh", "bho": "डॉ. रामेश्वर कुमार सिंह" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "एक अनुभवी हड्डी रोग विशेषज्ञ। फोन: 090063 78765", en: "An experienced orthopedic surgeon. Phone: 090063 78765", bho: "एगो अनुभवी हड्डी रोग विशेषज्ञ। फोन: 090063 78765" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "Surgeon Lane, Goushala Road, Hospital Rd, Siwan, Bihar 841226",
        aiHint: "orthopedic surgeon"
    },
    {
        id: "dr-sumit-kumar-singh-52",
        name: { "hi": "डॉ. सुमित कुमार सिंह", "en": "Dr. Sumit Kumar Singh", "bho": "डॉ. सुमित कुमार सिंह" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "संजीवनी ऑर्थो क्लिनिक में विशेषज्ञ। फोन: 091997 71488", en: "Specialist at Sanjeevni Ortho Clinic. Phone: 091997 71488", bho: "संजीवनी ऑर्थो क्लिनिक में विशेषज्ञ। फोन: 091997 71488" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "Gosala Road, Pakri More, नजदीक Hanuman Mandir, Siwan 841226",
        aiHint: "orthopedic doctor"
    },
    {
        id: "dr-arbind-kumar-53",
        name: { "hi": "डॉ. अरबिंद कुमार", "en": "Dr. Arbind Kumar", "bho": "डॉ. अरबिंद कुमार" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "एक अनुभवी हड्डी रोग विशेषज्ञ। फोन: 085214 56333", en: "An experienced orthopedic surgeon. Phone: 085214 56333", bho: "एगो अनुभवी हड्डी रोग विशेषज्ञ। फोन: 085214 56333" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "69J9+5CH, Hospital Rd, Siwan 841226",
        aiHint: "male surgeon"
    },
    {
        id: "dr-neeraj-kumar-54",
        name: { "hi": "डॉ. नीरज कुमार", "en": "Dr. Neeraj Kumar", "bho": "डॉ. नीरज कुमार" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "हड्डी रोग विशेषज्ञ।", en: "Orthopaedic specialist.", bho: "हड्डी रोग विशेषज्ञ।" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "Modern Beauty Parlour Building No. 3, Hospital Road, Hardia, Siwan — Opposite Adda",
        aiHint: "indian surgeon"
    },
    {
        id: "dr-sandeep-kumar-chauhan-55",
        name: { "hi": "डॉ. संदीप कुमार चौहान", "en": "Dr. Sandeep Kumar Chauhan", "bho": "डॉ. संदीप कुमार चौहान" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "नव्या हॉस्पिटल में सामान्य ऑर्थोपेडिक, हड्डी-जोड़, फ्रैक्चर, और स्पाइन के विशेषज्ञ।", en: "Specialist in general orthopedics, bone-joint, fractures, and spine at Navya Hospital.", bho: "नव्या हॉस्पिटल में सामान्य ऑर्थोपेडिक, हड्डी-जोड़, फ्रैक्चर, आ स्पाइन के विशेषज्ञ।" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "Doctor’s Colony, Hospital Road, Siwan",
        aiHint: "professional surgeon"
    },
    {
        id: "dr-madhuresh-kumar-56",
        name: { "hi": "डॉ. मधुरेश कुमार", "en": "Dr. Madhuresh Kumar", "bho": "डॉ. मधुरेश कुमार" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "स्टार ऑर्थो एंड मैटरनिटी सेंटर में 24 घंटे उपलब्ध।", en: "Available 24 hours at Star Ortho and Maternity Centre.", bho: "स्टार ऑर्थो एंड मैटरनिटी सेंटर में 24 घंटा उपलब्ध।" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "बरहरिया रोड, अमलोरी, Siwan 841226",
        aiHint: "surgeon smiling"
    },
    {
        id: "new-jeevan-hospital-57",
        name: { "hi": "न्यू जीवन हॉस्पिटल", "en": "New Jeevan Hospital", "bho": "न्यू जीवन हॉस्पिटल" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "ऑर्थोपेडिक सेवाएँ उपलब्ध।", en: "Orthopedic services available.", bho: "ऑर्थोपेडिक सेवा उपलब्ध बा।" },
        fee: 500,
        imageUrl: "🏥",
        location: "सिवान हसुआ रोड, Siwan",
        aiHint: "hospital building"
    }
];
