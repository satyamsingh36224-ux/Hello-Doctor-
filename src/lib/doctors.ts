
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
        "id": "dr-ramesh-verma",
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
        "imageUrl": "https://picsum.photos/seed/doc1/400/400",
        "location": "राजेंद्र पथ, सीवान, बिहार",
        "aiHint": "male doctor"
    },
    {
        "id": "dr-sunita-kumari",
        "name": {
            "hi": "डॉ. सुनीता कुमारी",
            "en": "Dr. Sunita Kumari",
            "bho": "डॉ. सुनीता कुमारी"
        },
        "specialization": {
            "key": "Gynecologist",
            "name": { "hi": "स्त्री रोग विशेषज्ञ", "en": "Gynecologist", "bho": "मेहरारू के डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. कुमारी सीवान की एक प्रसिद्ध स्त्री रोग विशेषज्ञ हैं। वह महिलाओं के स्वास्थ्य संबंधित समस्याओं का इलाज करती हैं।",
            "en": "Dr. Kumari is a renowned gynecologist in Siwan. She treats health issues related to women.",
            "bho": "डॉ. कुमारी सीवान के एगो प्रसिद्ध मेहरारू के डॉक्टर हई। उहाँ मेहरारू लोग के स्वास्थ्य से जुड़ल समस्या के इलाज करेनी।"
        },
        "fee": 500,
        "imageUrl": "https://picsum.photos/seed/doc2/400/400",
        "location": "अस्पताल रोड, सीवान, बिहार",
        "aiHint": "female doctor"
    },
    {
        "id": "dr-anil-prajapati",
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
        "imageUrl": "https://picsum.photos/seed/doc3/400/400",
        "location": "गांधी मैदान के पास, सीवान",
        "aiHint": "male doctor smiling"
    },
    {
        "id": "dr-priyanka-singh",
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
        "imageUrl": "https://picsum.photos/seed/doc4/400/400",
        "location": "स्टेशन रोड, सीवान",
        "aiHint": "professional female doctor"
    },
    {
        "id": "dr-rajesh-gupta",
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
        "imageUrl": "https://picsum.photos/seed/doc5/400/400",
        "location": "बबुनिया रोड, सीवान",
        "aiHint": "doctor uniform"
    },
    {
        "id": "dr-alok-kumar",
        "name": {
            "hi": "डॉ. आलोक कुमार",
            "en": "Dr. Alok Kumar",
            "bho": "डॉ. आलोक कुमार"
        },
        "specialization": {
            "key": "ENT Specialist",
            "name": { "hi": "ईएनटी विशेषज्ञ", "en": "ENT Specialist", "bho": "नाक-कान-गला के डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. आलोक कुमार नाक, कान और गले से संबंधित समस्याओं के विशेषज्ञ हैं। वह टॉन्सिल और साइनस के इलाज में माहिर हैं।",
            "en": "Dr. Alok Kumar is a specialist in problems related to the ear, nose, and throat. He is an expert in treating tonsils and sinusitis.",
            "bho": "डॉ. आलोक कुमार नाक, कान आ गला से जुड़ल समस्या के विशेषज्ञ हईं। उहाँ टॉन्सिल आ साइनस के इलाज में माहिर बानी।"
        },
        "fee": 400,
        "imageUrl": "https://picsum.photos/seed/doc6/400/400",
        "location": "गोपालापुर, सीवान",
        "aiHint": "doctor face"
    },
    {
        "id": "dr-neha-sharma",
        "name": {
            "hi": "डॉ. नेहा शर्मा",
            "en": "Dr. Neha Sharma",
            "bho": "डॉ. नेहा शर्मा"
        },
        "specialization": {
            "key": "Ophthalmologist",
            "name": { "hi": "नेत्र रोग विशेषज्ञ", "en": "Ophthalmologist", "bho": "आँख के डॉक्टर" }
        },
        "description": {
            "hi": "डॉ. नेहा शर्मा आँखों की जाँच और मोतियाबिंद सर्जरी की विशेषज्ञ हैं। वह चश्मे का नंबर भी जाँचती हैं।",
            "en": "Dr. Neha Sharma specializes in eye examinations and cataract surgery. She also checks for eyeglass prescriptions.",
            "bho": "डॉ. नेहा शर्मा आँख के जाँच आ मोतियाबिंद सर्जरी के विशेषज्ञ हई। उहाँ चश्मा के नंबर भी जाँचेनी।"
        },
        "fee": 350,
        "imageUrl": "https://picsum.photos/seed/doc7/400/400",
        "location": "लक्ष्मीपुर, सीवान",
        "aiHint": "woman doctor"
    }
];
