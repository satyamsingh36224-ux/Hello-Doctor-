
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
    }
];
