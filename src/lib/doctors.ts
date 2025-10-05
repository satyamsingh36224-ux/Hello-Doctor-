
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
        "id": "1",
        "name": {
            "hi": "डॉ. रमेश वर्मा",
            "en": "Dr. Ramesh Verma",
            "bho": "डॉ. रमेश वर्मा"
        },
        "specialization": {
            "key": "General Physician",
            "name": { "hi": "सामान्य चिकित्सक", "en": "General Physician", "bho": "साधारण डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. वर्मा को सामान्य चिकित्सा में 15 वर्षों का अनुभव है। वह बुखार, सर्दी, और अन्य सामान्य बीमारियों के विशेषज्ञ हैं।",
            "en": "Dr. Verma has 15 years of experience in general medicine. He specializes in fever, cold, and other common illnesses.",
            "bho": "डॉ. वर्मा के सामान्य चिकित्सा में 15 साल के अनुभव बा। उहाँ बुखार, सर्दी, आउर दूसर सामान्य बेमारी के विशेषज्ञ बानी।"
        },
        "fee": 300,
        "imageUrl": "👨‍⚕️",
        "location": "राजेंद्र पथ, सीवान, बिहार",
        "aiHint": "male doctor"
    },
    {
        "id": "2",
        "name": {
            "hi": "डॉ. सुनीता कुमारी",
            "en": "Dr. Sunita Kumari",
            "bho": "डॉ. सुनीता कुमारी"
        },
        "specialization": {
            "key": "Cardiologist",
            "name": { "hi": "हृदय रोग विशेषज्ञ", "en": "Cardiologist", "bho": "हृदय रोग विशेषज्ञ" }
        },
        "description": {
            "hi": "डॉ. कुमारी सीवान की एक प्रसिद्ध हृदय रोग विशेषज्ञ हैं। वह उच्च रक्तचाप और हृदय संबंधित समस्याओं का इलाज करती हैं।",
            "en": "Dr. Kumari is a renowned cardiologist in Siwan. She treats high blood pressure and heart-related issues.",
            "bho": "डॉ. कुमारी सीवान के एगो प्रसिद्ध हृदय रोग विशेषज्ञ हई। उहाँ उच्च रक्तचाप आ हृदय से जुड़ल समस्या के इलाज करेनी।"
        },
        "fee": 500,
        "imageUrl": "👩‍⚕️",
        "location": "अस्पताल रोड, सीवान, बिहार",
        "aiHint": "female doctor"
    },
    {
        "id": "3",
        "name": {
            "hi": "डॉ. अनिल प्रजापति",
            "en": "Dr. Anil Prajapati",
            "bho": "डॉ. अनिल प्रजापति"
        },
        "specialization": {
            "key": "Pediatrician",
            "name": { "hi": "बच्चों का चिकित्सक", "en": "Pediatrician", "bho": "लइकन के डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. प्रजापति को बच्चों के स्वास्थ्य की देखभाल में 10 साल का अनुभव है। वह टीकाकरण और बच्चों के विकास के विशेषज्ञ हैं।",
            "en": "Dr. Prajapati has 10 years of experience in child healthcare. He specializes in vaccination and child development.",
            "bho": "डॉ. प्रजापति के लइकन के स्वास्थ्य देखभाल में 10 साल के अनुभव बा। उहाँ टीकाकरण अउर लइकन के विकास के विशेषज्ञ बानी।"
        },
        "fee": 400,
        "imageUrl": "👨‍⚕️",
        "location": "गांधी मैदान के पास, सीवान",
        "aiHint": "male doctor smiling"
    },
    {
        "id": "4",
        "name": {
            "hi": "डॉ. प्रियंका सिंह",
            "en": "Dr. Priyanka Singh",
            "bho": "डॉ. प्रियंका सिंह"
        },
        "specialization": {
            "key": "Dermatologist",
            "name": { "hi": "त्वचा विशेषज्ञ", "en": "Dermatologist", "bho": "चमड़ी के डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. सिंह त्वचा और बालों से संबंधित समस्याओं की विशेषज्ञ हैं। वह मुहांसे, एक्जिमा और बालों के झड़ने का इलाज करती हैं।",
            "en": "Dr. Singh is a specialist in skin and hair related problems. She treats acne, eczema, and hair fall.",
            "bho": "डॉ. सिंह चमड़ी आ बार से जुड़ल समस्या के विशेषज्ञ हई। उहाँ मुंहासा, एक्जिमा आ बार झड़े के इलाज करेनी।"
        },
        "fee": 450,
        "imageUrl": "👩‍⚕️",
        "location": "स्टेशन रोड, सीवान",
        "aiHint": "professional female doctor"
    },
    {
        "id": "5",
        "name": {
            "hi": "डॉ. राजेश गुप्ता",
            "en": "Dr. Rajesh Gupta",
            "bho": "डॉ. राजेश गुप्ता"
        },
        "specialization": {
            "key": "Orthopedic Surgeon",
            "name": { "hi": "हड्डी रोग विशेषज्ञ", "en": "Orthopedic Surgeon", "bho": "हड्डी के डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. गुप्ता हड्डी और जोड़ों के दर्द के विशेषज्ञ हैं। वह फ्रैक्चर और गठिया का इलाज करते हैं।",
            "en": "Dr. Gupta is a specialist in bone and joint pain. He treats fractures and arthritis.",
            "bho": "डॉ. गुप्ता हड्डी आ जोड़ के दर्द के विशेषज्ञ हउवन। उहाँ फ्रैक्चर आ गठिया के इलाज करेनी।"
        },
        "fee": 550,
        "imageUrl": "👨‍⚕️",
        "location": "बबुनिया रोड, सीवान",
        "aiHint": "doctor uniform"
    }
];
