
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
        id: "dr-ramesh-kumar-1",
        name: {
            hi: "डॉ. रमेश कुमार",
            en: "Dr. Ramesh Kumar",
            bho: "डॉ. रमेश कुमार"
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
            hi: "डॉ. रमेश कुमार एक अनुभवी सामान्य चिकित्सक हैं जिन्हें 15 वर्षों का अनुभव है। वह सामान्य बीमारियों जैसे सर्दी, खांसी, बुखार और अन्य सामान्य स्वास्थ्य समस्याओं का इलाज करते हैं।",
            en: "Dr. Ramesh Kumar is an experienced General Physician with 15 years of practice. He treats common ailments like colds, coughs, fever, and other general health issues.",
            bho: "डॉ. रमेश कुमार एगो अनुभवी साधारण डॉक्टर हईं जिनके 15 साल के अनुभव बा। उ साधारण बेमारी जईसे सर्दी, खांसी, बोखार आ दोसर साधारण स्वास्थ्य समस्या के इलाज करेनी।"
        },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "अस्पताल रोड, सीवान",
        aiHint: "indian male doctor"
    },
    {
        id: "dr-sunita-sharma-2",
        name: {
            hi: "डॉ. सुनीता शर्मा",
            en: "Dr. Sunita Sharma",
            bho: "डॉ. सुनीता शर्मा"
        },
        specialization: {
            key: "Gynecologist",
            name: {
                hi: "स्त्री रोग विशेषज्ञ",
                en: "Gynecologist",
                bho: "मेहरारू के डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. सुनीता शर्मा एक प्रसिद्ध स्त्री रोग विशेषज्ञ हैं। वह महिलाओं के स्वास्थ्य, गर्भावस्था और संबंधित समस्याओं के लिए उत्कृष्ट देखभाल प्रदान करती हैं।",
            en: "Dr. Sunita Sharma is a renowned Gynecologist. She provides excellent care for women's health, pregnancy, and related issues.",
            bho: "डॉ. सुनीता शर्मा एगो प्रसिद्ध मेहरारू के डॉक्टर हईं। उ मेहरारू लोग के स्वास्थ्य, गर्भावस्था आ संबंधित समस्या खातिर बढ़िया देखभाल करेनी।"
        },
        fee: 500,
        imageUrl: "👩‍⚕️",
        location: "स्टेशन रोड, सीवान",
        aiHint: "indian female doctor"
    },
    {
        id: "dr-anil-singh-3",
        name: {
            hi: "डॉ. अनिल सिंह",
            en: "Dr. Anil Singh",
            bho: "डॉ. अनिल सिंह"
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
            hi: "डॉ. अनिल सिंह बच्चों के विशेषज्ञ हैं और उन्हें बच्चों के रोगों का गहरा ज्ञान है। वह बच्चों के टीकाकरण और पोषण पर भी सलाह देते हैं।",
            en: "Dr. Anil Singh is a specialist in pediatrics and has profound knowledge of children's diseases. He also advises on vaccination and nutrition.",
            bho: "डॉ. अनिल सिंह लइकन के विशेषज्ञ हईं आ उनके लइकन के बेमारी के गहिर ज्ञान बा। उ लइकन के टीकाकरण आ पोषण पर भी सलाह देवेनी।"
        },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "राजेंद्र पथ, सीवान",
        aiHint: "male doctor smiling"
    },
    {
        id: "dr-vikas-verma-4",
        name: {
            hi: "डॉ. विकास वर्मा",
            en: "Dr. Vikas Verma",
            bho: "डॉ. विकास वर्मा"
        },
        specialization: {
            key: "Dermatologist",
            name: {
                hi: "त्वचा विशेषज्ञ",
                en: "Dermatologist",
                bho: "चमड़ी के डॉक्टर"
            },
        },
        description: {
            hi: "डॉ. विकास वर्मा त्वचा, बाल और नाखूनों से संबंधित समस्याओं के विशेषज्ञ हैं। वे मुहांसे, एक्जिमा और अन्य त्वचा रोगों का इलाज करते हैं।",
            en: "Dr. Vikas Verma specializes in problems related to skin, hair, and nails. He treats acne, eczema, and other skin diseases.",
            bho: "डॉ. विकास वर्मा चमड़ी, केश आ नाखून से जुड़ल समस्या के विशेषज्ञ हईं। उ मुहांसा, एक्जिमा आ दोसर चमड़ी के रोग के इलाज करेनी।"
        },
        fee: 450,
        imageUrl: "👨‍⚕️",
        location: "महादेवा, सीवान",
        aiHint: "indian doctor"
    },
    {
        id: "dr-priya-desai-5",
        name: {
            hi: "डॉ. प्रिया देसाई",
            en: "Dr. Priya Desai",
            bho: "डॉ. प्रिया देसाई"
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
            hi: "डॉ. प्रिया देसाई सीवान की एक जानी-मानी हृदय रोग विशेषज्ञ हैं। वह उच्च रक्तचाप, कोलेस्ट्रॉल और हृदय संबंधी अन्य बीमारियों के लिए परामर्श देती हैं।",
            en: "Dr. Priya Desai is a well-known cardiologist in Siwan. She provides consultation for high blood pressure, cholesterol, and other heart-related diseases.",
            bho: "डॉ. प्रिया देसाई सीवान के एगो जानल-मानल हृदय रोग विशेषज्ञ हईं। उ उच्च रक्तचाप, कोलेस्ट्रॉल आ हृदय से जुड़ल दोसर बेमारी खातिर सलाह देवेनी।"
        },
        fee: 600,
        imageUrl: "👩‍⚕️",
        location: "बाबू हाता, सीवान",
        aiHint: "professional indian woman"
    },
    {
        id: "dr-arjun-mehta-6",
        name: {
            hi: "डॉ. अर्जुन मेहता",
            en: "Dr. Arjun Mehta",
            bho: "डॉ. अर्जुन मेहता"
        },
        specialization: {
            key: "Orthopedic Surgeon",
            name: {
                hi: "हड्डी रोग विशेषज्ञ",
                en: "Orthopedic Surgeon",
                bho: "हड्डी के डॉक्टर"
            }
        },
        description: {
            hi: "डॉ. अर्जुन मेहता हड्डियों, जोड़ों और मांसपेशियों की समस्याओं के विशेषज्ञ हैं। वह फ्रैक्चर और गठिया का इलाज करते हैं।",
            en: "Dr. Arjun Mehta is a specialist in problems of bones, joints, and muscles. He treats fractures and arthritis.",
            bho: "डॉ. अर्जुन मेहता हड्डी, जोड़ आ मांसपेशी के समस्या के विशेषज्ञ हईं। उ फ्रैक्चर आ गठिया के इलाज करेनी।"
        },
        fee: 550,
        imageUrl: "👨‍⚕️",
        location: "गोशाला रोड, सीवान",
        aiHint: "doctor stethoscope"
    }
];
