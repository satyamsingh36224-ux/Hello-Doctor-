
import type { Doctor } from "@/types";
import { Brain, Heart, Stethoscope, Bone, Baby, User, Ear, Eye, UserCog } from 'lucide-react';

export const specializationMap = [
  { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" }, icon: Heart },
  { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" }, icon: Baby },
  { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" }, icon: User },
  { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" }, icon: Stethoscope },
  { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" }, icon: Bone },
  { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" }, icon: Stethoscope },
  { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" }, icon: Stethoscope },
  { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" }, icon: Brain },
  { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" }, icon: Ear },
  { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" }, icon: Eye },
  { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" }, icon: UserCog },
];

const doctorsList: Omit<Doctor, 'id'>[] = [
  // Cardiologist
  { 
    name: { hi: "डॉ. रमेश कुमार", en: "Dr. Ramesh Kumar", bho: "डॉ. रमेश कुमार" }, 
    description: { hi: "एक प्रमुख हृदय रोग विशेषज्ञ, जो हृदय से संबंधित बीमारियों और निवारक देखभाल में विशेषज्ञता रखते हैं।", en: "A leading cardiologist specializing in heart-related diseases and preventive care.", bho: "एक प्रमुख हृदय रोग विशेषज्ञ, जे हृदय से जुड़ल बेमारी अवुरी निवारक देखभाल में विशेषज्ञता राखेलें।" }, 
    fee: 500, 
    imageUrl: "👨‍⚕️", 
    location: "रमेश हार्ट केयर, पुरानी चौक, सिनेमा रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  { 
    name: { hi: "डॉ. अजय गुप्ता", en: "Dr. Ajay Gupta", bho: "डॉ. अजय गुप्ता" }, 
    description: { hi: "हृदय की जटिल स्थितियों के प्रबंधन में विशेषज्ञ। रोगी की देखभाल के लिए जाने जाते हैं।", en: "Expert in managing complex cardiac conditions. Known for his patient care.", bho: "हृदय के जटिल स्थिति के प्रबंधन में विशेषज्ञ। रोगी के देखभाल खातिर जानल जालें।" }, 
    fee: 550, 
    imageUrl: "👨‍⚕️", 
    location: "गुप्ता हार्ट क्लिनिक, पहली मंज़िल, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  { 
    name: { hi: "डॉ. संजय पांडे", en: "Dr. Sanjay Pandey", bho: "डॉ. संजय पांडे" }, 
    description: { hi: "उच्च रक्तचाप और कोलेस्ट्रॉल के प्रबंधन में विशेषज्ञता।", en: "Specializes in managing high blood pressure and cholesterol.", bho: "उच्च रक्तचाप अवुरी कोलेस्ट्रॉल के प्रबंधन में विशेषज्ञता।" }, 
    fee: 500, 
    imageUrl: "👨‍⚕️", 
    location: "पांडे कार्डियक सेंटर, ब्लॉक रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  { 
    name: { hi: "डॉ. वीणा सिंह", en: "Dr. Veena Singh", bho: "डॉ. वीणा सिंह" }, 
    description: { hi: "महिला हृदय स्वास्थ्य पर ध्यान केंद्रित करने वाली एक अनुभवी हृदय रोग विशेषज्ञ।", en: "An experienced cardiologist with a focus on women's cardiac health.", bho: "महिला हृदय स्वास्थ्य पर ध्यान केंद्रित करे वाली एक अनुभवी हृदय रोग विशेषज्ञ।" }, 
    fee: 550, 
    imageUrl: "👩‍⚕️", 
    location: "वीणा हार्ट क्लिनिक, थावे रोड, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  { 
    name: { hi: "डॉ. राजीव रंजन", en: "Dr. Rajeev Ranjan", bho: "डॉ. राजीव रंजन" }, 
    description: { hi: "एक अनुभवी हृदय रोग विशेषज्ञ, जो हृदय रोगों के निदान और उपचार में विशेषज्ञता रखते हैं।", en: "An experienced cardiologist specializing in the diagnosis and treatment of heart diseases.", bho: "एक अनुभवी हृदय रोग विशेषज्ञ, जे हृदय रोग के निदान अवुरी उपचार में विशेषज्ञता राखेलें।" }, 
    fee: 500, 
    imageUrl: "👨‍⚕️", 
    location: "रंजन हार्ट क्लिनिक, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  { 
    name: { hi: "डॉ. कुणाल कुमार सिंह", en: "Dr. Kunal Kumar Singh", bho: "डॉ. कुणाल कुमार सिंह" },
    description: { hi: "एक समर्पित हृदय रोग विशेषज्ञ जो हृदय की देखभाल के लिए जाने जाते हैं।", en: "A dedicated cardiologist known for his cardiac care.", bho: "एक समर्पित हृदय रोग विशेषज्ञ जे हृदय के देखभाल खातिर जानल जालें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "सिंह हार्ट क्लिनिक, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. प्रकाश चंद्र शाही", en: "Dr. Prakash Chandra Sahi", bho: "डॉ. प्रकाश चंद्र शाही" },
    description: { hi: "हृदय संबंधी जटिल मामलों के विशेषज्ञ।", en: "Specialist in complex cardiac cases.", bho: "हृदय संबंधी जटिल मामला के विशेषज्ञ।" },
    fee: 550,
    imageUrl: "👨‍⚕️",
    location: "शाही हार्ट केयर, मौनिया चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. रवि कुमार सिंह", en: "Dr. Ravi Kumar Singh", bho: "डॉ. रवि कुमार सिंह" },
    description: { hi: "हृदय की समस्याओं के लिए निवारक देखभाल और उपचार प्रदान करते हैं।", en: "Provides preventive care and treatment for heart conditions.", bho: "हृदय के समस्या खातिर निवारक देखभाल अवुरी उपचार प्रदान करेलें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "रवि कार्डियोलॉजी सेंटर, बस स्टैंड के पास, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. रहमत अली", en: "Dr. Rahmat Ali", bho: "डॉ. रहमत अली" },
    description: { hi: "सभी उम्र के रोगियों के लिए व्यापक हृदय देखभाल।", en: "Comprehensive cardiac care for patients of all ages.", bho: "सभे उम्र के रोगी खातिर व्यापक हृदय देखभाल।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "अली हार्ट क्लिनिक, जंगलिया मोड़, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. प्रमोद अखौरी", en: "Dr. Pramod Akhouri", bho: "डॉ. प्रमोद अखौरी" },
    description: { hi: "हृदय रोगों के निदान और प्रबंधन में विशेषज्ञता।", en: "Specializes in the diagnosis and management of heart diseases.", bho: "हृदय रोग के निदान अवुरी प्रबंधन में विशेषज्ञता।" },
    fee: 600,
    imageUrl: "👨‍⚕️",
    location: "अखौरी हार्ट हॉस्पिटल, थावे रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. रूपम अखौरी", en: "Dr. Rupam Akhouri", bho: "डॉ. रूपम अखौरी" },
    description: { hi: "एक कुशल हृदय रोग विशेषज्ञ जो रोगी-केंद्रित देखभाल प्रदान करती हैं।", en: "A skilled cardiologist providing patient-centric care.", bho: "एक कुशल हृदय रोग विशेषज्ञ जे रोगी-केंद्रित देखभाल प्रदान करेली।" },
    fee: 600,
    imageUrl: "👩‍⚕️",
    location: "अखौरी हार्ट हॉस्पिटल, थावे रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. आशिव परजेव", en: "Dr. Ashiv Parjew", bho: "डॉ. आशिव परजेव" },
    description: { hi: "आधुनिक हृदय उपचार और प्रक्रियाओं में विशेषज्ञ।", en: "Expert in modern cardiac treatments and procedures.", bho: "आधुनिक हृदय उपचार अवुरी प्रक्रिया में विशेषज्ञ।" },
    fee: 550,
    imageUrl: "👨‍⚕️",
    location: "परजेव कार्डियक क्लिनिक, पुरानी चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. रवि राय", en: "Dr. Ravi Ray", bho: "डॉ. रवि राय" },
    description: { hi: "एक अनुभवी हृदय रोग विशेषज्ञ जो विश्वसनीय देखभाल प्रदान करते हैं।", en: "An experienced cardiologist providing reliable care.", bho: "एक अनुभवी हृदय रोग विशेषज्ञ जे विश्वसनीय देखभाल प्रदान करेलें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "राय हार्ट केयर, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  {
    name: { hi: "डॉ. आर.के. ठाकुर", en: "Dr. R.K. Thakur", bho: "डॉ. आर.के. ठाकुर" },
    description: { hi: "हृदय स्वास्थ्य और कल्याण पर ध्यान केंद्रित करते हैं।", en: "Focuses on cardiac health and wellness.", bho: "हृदय स्वास्थ्य अवुरी कल्याण पर ध्यान केंद्रित करेलें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "ठाकुर हार्ट क्लिनिक, अंबेडकर चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } }
  },
  // Pediatrician
  { 
    name: { hi: "डॉ. गौरव अग्रवाल", en: "Dr. Gaurav Agrawal", bho: "डॉ. गौरव अग्रवाल" }, 
    description: { hi: "एक समर्पित बाल रोग विशेषज्ञ जो शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", en: "A dedicated pediatrician providing comprehensive medical care for infants, children, and adolescents.", bho: "एक समर्पित बाल रोग विशेषज्ञ जे शिशु, लइका अवुरी किशोर के व्यापक चिकित्सा देखभाल प्रदान करेलें।" }, 
    fee: 450, 
    imageUrl: "👨‍⚕️", 
    location: "अग्रवाल चिल्ड्रेन्स हॉस्पिटल, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. मंगेश्वर सिंह", en: "Dr. Mangeshwar Singh", bho: "डॉ. मंगेश्वर सिंह" }, 
    description: { hi: "एक अनुभवी बाल रोग विशेषज्ञ जो बच्चों के स्वास्थ्य की देखभाल में विशेषज्ञता रखते हैं।", en: "An experienced pediatrician specializing in child healthcare.", bho: "एक अनुभवी बाल रोग विशेषज्ञ जे लइकन के स्वास्थ्य के देखभाल में विशेषज्ञता राखेलें।" }, 
    fee: 450, 
    imageUrl: "👨‍⚕️", 
    location: "आशीर्वाद बाल क्लिनिक, पुरानी चौक, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. नौशाद आलम", en: "Dr. Naushad Alam", bho: "डॉ. नौशाद आलम" }, 
    description: { hi: "एक समर्पित बाल रोग विशेषज्ञ जो शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", en: "A dedicated pediatrician providing comprehensive medical care for infants, children, and adolescents.", bho: "एक समर्पित बाल रोग विशेषज्ञ जे शिशु, लइका अवुरी किशोर के व्यापक चिकित्सा देखभाल प्रदान करेलें।" }, 
    fee: 450, 
    imageUrl: "👨‍⚕️", 
    location: "अल-शिफ़ा चाइल्ड केयर, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. अनिता कुमारी", en: "Dr. Anita Kumari", bho: "डॉ. अनिता कुमारी" }, 
    description: { hi: "नवजात शिशुओं की देखभाल और टीकाकरण में विशेषज्ञता।", en: "Specializes in newborn care and vaccinations.", bho: "नवजात शिशु के देखभाल अवुरी टीकाकरण में विशेषज्ञता।" }, 
    fee: 400, 
    imageUrl: "👩‍⚕️", 
    location: "अनिता चाइल्ड केयर, जंगलिया मोड़, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. राजेश प्रसाद", en: "Dr. Rajesh Prasad", bho: "डॉ. राजेश प्रसाद" }, 
    description: { hi: "बच्चों के पोषण और विकास संबंधी समस्याओं के विशेषज्ञ।", en: "Expert in child nutrition and developmental issues.", bho: "लइकन के पोषण अवुरी विकास संबंधी समस्या के विशेषज्ञ।" }, 
    fee: 450, 
    imageUrl: "👨‍⚕️", 
    location: "चिल्ड्रेन'स वेलनेस क्लिनिक, कचहरी रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  // Dermatologist
  { 
    name: { hi: "डॉ. अनिल सिंह", en: "Dr. Anil Singh", bho: "डॉ. अनिल सिंह" }, 
    description: { hi: "एक अनुभवी त्वचा विशेषज्ञ जो त्वचा, बाल और नाखूनों की कई स्थितियों का इलाज करते हैं।", en: "An experienced dermatologist who treats a variety of skin, hair, and nail conditions.", bho: "एक अनुभवी त्वचा विशेषज्ञ जे त्वचा, बाल अवुरी नाखून के कई स्थिति के इलाज करेलें।" }, 
    fee: 600, 
    imageUrl: "👨‍⚕️", 
    location: "सिंह स्किन एंड हेयर क्लिनिक, बस स्टैंड के पास, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. प्रियंका वर्मा", en: "Dr. Priyanka Verma", bho: "डॉ. प्रियंका वर्मा" }, 
    description: { hi: "कॉस्मेटिक त्वचाविज्ञान और लेजर उपचार में विशेषज्ञ।", en: "Specializes in cosmetic dermatology and laser treatments.", bho: "कॉस्मेटिक त्वचाविज्ञान अवुरी लेजर उपचार में विशेषज्ञ।" }, 
    fee: 650, 
    imageUrl: "👩‍⚕️", 
    location: "वर्मा स्किन एस्थेटिक्स, मौनिया चौक, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. फ़िरोज़ अहमद", en: "Dr. Firoz Ahmed", bho: "डॉ. फ़िरोज़ अहमद" }, 
    description: { hi: "चर्म रोगों के निदान और उपचार में व्यापक अनुभव।", en: "Extensive experience in diagnosing and treating skin diseases.", bho: "चर्म रोग के निदान अवुरी उपचार में व्यापक अनुभव।" }, 
    fee: 550, 
    imageUrl: "👨‍⚕️", 
    location: "अहमद डर्मा केयर, पोस्ट ऑफिस चौक, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  // Gynecologist
  { 
    name: { hi: "डॉ. मीना गुप्ता", en: "Dr. Meena Gupta", bho: "डॉ. मीना गुप्ता" }, 
    description: { hi: "एक दयालु स्त्री रोग विशेषज्ञ और प्रसूति विशेषज्ञ जो महिलाओं की स्वास्थ्य सेवाओं की पूरी श्रृंखला प्रदान करती हैं।", en: "A compassionate gynecologist and obstetrician providing a full range of women's health services.", bho: "एक दयालु स्त्री रोग विशेषज्ञ अवुरी प्रसूति विशेषज्ञ जे महिला के स्वास्थ्य सेवा के पूरा श्रृंखला प्रदान करेली।" }, 
    fee: 550, 
    imageUrl: "👩‍⚕️", 
    location: "गुप्ता वीमेन'स क्लिनिक, थावे रोड, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. रेखा यादव", en: "Dr. Rekha Yadav", bho: "डॉ. रेखा यादव" }, 
    description: { hi: "उच्च जोखिम वाली गर्भावस्था और बांझपन उपचार में विशेषज्ञ।", en: "Specializes in high-risk pregnancies and infertility treatments.", bho: "उच्च जोखिम वाला गर्भावस्था अवुरी बांझपन उपचार में विशेषज्ञ।" }, 
    fee: 600, 
    imageUrl: "👩‍⚕️", 
    location: "यादव फर्टिलिटी एंड मैटरनिटी, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. पूनम शर्मा", en: "Dr. Poonam Sharma", bho: "डॉ. पूनम शर्मा" }, 
    description: { hi: "किशोर स्वास्थ्य और परिवार नियोजन परामर्श में विशेषज्ञता।", en: "Expertise in adolescent health and family planning counseling.", bho: "किशोर स्वास्थ्य अवुरी परिवार नियोजन परामर्श में विशेषज्ञता।" }, 
    fee: 500, 
    imageUrl: "👩‍⚕️", 
    location: "शर्मा वीमेन'स वेलनेस, चंद्रगोकुल रोड, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. सरिता सिंह", en: "Dr. Sarita Singh", bho: "डॉ. सरिता सिंह" }, 
    description: { hi: "नियमित स्त्री रोग संबंधी जांच और प्रसव पूर्व देखभाल प्रदान करती हैं।", en: "Provides routine gynecological check-ups and prenatal care.", bho: "नियमित स्त्री रोग संबंधी जांच अवुरी प्रसव पूर्व देखभाल प्रदान करेली।" }, 
    fee: 550, 
    imageUrl: "👩‍⚕️", 
    location: "मैटरनिटी केयर होम, जंगलिया, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  // Orthopedic Surgeon
  { 
    name: { hi: "डॉ. विक्रम पटेल", en: "Dr. Vikram Patel", bho: "डॉ. विक्रम पटेल" }, 
    description: { hi: "एक प्रसिद्ध हड्डी रोग विशेषज्ञ, जिन्हें जोड़ों के प्रतिस्थापन, खेल की चोटों और फ्रैक्चर की देखभाल में विशेषज्ञता हासिल है।", en: "A renowned orthopedic surgeon specializing in joint replacements, sports injuries, and fracture care.", bho: "एक प्रसिद्ध हड्डी रोग विशेषज्ञ, जेकरा के जोड़ के प्रतिस्थापन, खेल के चोट अवुरी फ्रैक्चर के देखभाल में विशेषज्ञता हासिल बा।" }, 
    fee: 700, 
    imageUrl: "👨‍⚕️", 
    location: "पटेल ऑर्थो एंड स्पोर्ट्स इंजरी सेंटर, जाधवपुर रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. आलोक कुमार", en: "Dr. Alok Kumar", bho: "डॉ. आलोक कुमार" }, 
    description: { hi: "रीढ़ की हड्डी की सर्जरी और आर्थोस्कोपिक प्रक्रियाओं में विशेषज्ञ।", en: "Specializes in spinal surgery and arthroscopic procedures.", bho: "रीढ़ के हड्डी के सर्जरी अवुरी आर्थोस्कोपिक प्रक्रिया में विशेषज्ञ।" }, 
    fee: 750, 
    imageUrl: "👨‍⚕️", 
    location: "गोपालगंज ऑर्थोपेडिक हॉस्पिटल, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. आर. के. मिश्रा", en: "Dr. R. K. Mishra", bho: "डॉ. आर. के. मिश्रा" }, 
    description: { hi: "फ्रैक्चर और हड्डी से संबंधित विकारों के प्रबंधन में विशेषज्ञ।", en: "Expert in managing fractures and bone-related disorders.", bho: "फ्रैक्चर अवुरी हड्डी से जुड़ल विकार के प्रबंधन में विशेषज्ञ।" }, 
    fee: 650, 
    imageUrl: "👨‍⚕️", 
    location: "मिश्रा बोन एंड जॉइंट क्लिनिक, अंबेडकर चौक, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  // General Physician
  { 
    name: { hi: "डॉ. एस. एन. सिंह", en: "Dr. S. N. Singh", bho: "डॉ. एस. एन. सिंह" }, 
    description: { hi: "एक अनुभवी सामान्य चिकित्सक जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", en: "An experienced general physician providing comprehensive healthcare to patients of all ages.", bho: "एक अनुभवी सामान्य चिकित्सक जे सभे उम्र के रोगी के व्यापक स्वास्थ्य सेवा प्रदान करेलें।" }, 
    fee: 400, 
    imageUrl: "👨‍⚕️", 
    location: "सिंह क्लिनिक, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. देवता सिंह", en: "Dr. Devta Singh", bho: "डॉ. देवता सिंह" }, 
    description: { hi: "एक अनुभवी सामान्य चिकित्सक जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", en: "An experienced general physician providing comprehensive healthcare to patients of all ages.", bho: "एक अनुभवी सामान्य चिकित्सक जे सभे उम्र के रोगी के व्यापक स्वास्थ्य सेवा प्रदान करेलें।" }, 
    fee: 350, 
    imageUrl: "👨‍⚕️", 
    location: "जीवन रेखा क्लिनिक, मेडिकल हॉल के पास, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. अभिषेक शेखर सिन्हा", en: "Dr. Abhishek Shekhar Sinha", bho: "डॉ. अभिषेक शेखर सिन्हा" }, 
    description: { hi: "एक जाने-माने सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", en: "A well-known general physician providing reliable care for all common ailments.", bho: "एक जानल-मानल सामान्य चिकित्सक हवें जे सभे प्रकार के सामान्य बेमारी खातिर विश्वसनीय देखभाल प्रदान करेलें।" }, 
    fee: 350, 
    imageUrl: "👨‍⚕️", 
    location: "सिन्हा जनरल क्लिनिक, टाउन हॉल के सामने, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. शिवेंद्र कुमार तिवारी", en: "Dr. Shivendra Kumar Tiwari", bho: "डॉ. शिवेंद्र कुमार तिवारी" }, 
    description: { hi: "एक अनुभवी सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", en: "An experienced general physician providing reliable care for all common ailments.", bho: "एक अनुभवी सामान्य चिकित्सक हवें जे सभे प्रकार के सामान्य बेमारी खातिर विश्वसनीय देखभाल प्रदान करेलें।" }, 
    fee: 350, 
    imageUrl: "👨‍⚕️", 
    location: "तिवारी स्वास्थ्य सेवा, सिविल लाइंस, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. अभिषेक रंजन", en: "Dr. Abhishek Ranjan", bho: "डॉ. अभिषेक रंजन" }, 
    description: { hi: "एक जाने-माने सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", en: "A well-known general physician providing reliable care for all common ailments.", bho: "एक जानल-मानल सामान्य चिकित्सक हवें जे सभे प्रकार के सामान्य बेमारी खातिर विश्वसनीय देखभाल प्रदान करेलें।" }, 
    fee: 400, 
    imageUrl: "👨‍⚕️", 
    location: "आरोग्य क्लिनिक, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. अरविंद कुमार", en: "Dr. Arvind Kumar", bho: "डॉ. अरविंद कुमार" }, 
    description: { hi: "एक विश्वसनीय सामान्य चिकित्सक हैं जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करते हैं।", en: "A trusted general physician providing primary care for adults.", bho: "एक विश्वसनीय सामान्य चिकित्सक हवें जे वयस्क खातिर प्राथमिक देखभाल प्रदान करेलें।" }, 
    fee: 300, 
    imageUrl: "👨‍⚕️", 
    location: "कुमार क्लिनिक, बस स्टैंड के पास, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. मुकेश कुमार सिंह", en: "Dr. Mukesh Kumar Singh", bho: "डॉ. मुकेश कुमार सिंह" }, 
    description: { hi: "सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", en: "Provides comprehensive healthcare to patients of all ages.", bho: "सभे उम्र के रोगी के व्यापक स्वास्थ्य सेवा प्रदान करेलें।" }, 
    fee: 350, 
    imageUrl: "👨‍⚕️", 
    location: "सिंह हेल्थकेयर, थावे रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. श्याम मोहन सिंह", en: "Dr. Shyam Mohan Singh", bho: "डॉ. श्याम मोहन सिंह" }, 
    description: { hi: "बीमारियों के निदान और उपचार के साथ-साथ निवारक देखभाल पर भी ध्यान केंद्रित करते हैं।", en: "Focuses on diagnosing and treating illnesses, as well as preventive care.", bho: "बेमारी के निदान अवुरी उपचार के साथ-साथ निवारक देखभाल पर भी ध्यान केंद्रित करेलें।" }, 
    fee: 300, 
    imageUrl: "👨‍⚕️", 
    location: "मोहन क्लिनिक, जाधवपुर रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. विनीत विनोद कुमार यादव", en: "Dr. Vineet Vinod Kumar Yadav", bho: "डॉ. विनीत विनोद कुमार यादव" }, 
    description: { hi: "एक अनुभवी सामान्य चिकित्सक हैं जो रोगी के समग्र स्वास्थ्य पर ध्यान केंद्रित करते हैं।", en: "An experienced general physician who focuses on the overall health of the patient.", bho: "एक अनुभवी सामान्य चिकित्सक हवें जे रोगी के समग्र स्वास्थ्य पर ध्यान केंद्रित करेलें।" }, 
    fee: 400, 
    imageUrl: "👨‍⚕️", 
    location: "यादव जनरल फिजिशियन, कचहरी रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. सौरभ अग्रवाल", en: "Dr. Saurabh Agrawal", bho: "डॉ. सौरभ अग्रवाल" }, 
    description: { hi: "एक अनुभवी सामान्य चिकित्सक हैं जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", en: "An experienced general physician providing comprehensive healthcare to patients of all ages.", bho: "एक अनुभवी सामान्य चिकित्सक हवें जे सभे उम्र के रोगी के व्यापक स्वास्थ्य सेवा प्रदान करेलें।" }, 
    fee: 400, 
    imageUrl: "👨‍⚕️", 
    location: "अग्रवाल फैमिली फिजिशियन, सिनेमा रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. आलोक कुमार सुमन", en: "Dr. Alok Kumar Suman", bho: "डॉ. आलोक कुमार सुमन" }, 
    description: { hi: "मधुमेह और थायराइड जैसे जीवनशैली रोगों के प्रबंधन में विशेषज्ञ।", en: "Specializes in managing lifestyle diseases like diabetes and thyroid.", bho: "मधुमेह अवुरी थायराइड जइसन जीवनशैली रोग के प्रबंधन में विशेषज्ञ।" }, 
    fee: 400, 
    imageUrl: "👨‍⚕️", 
    location: "सुमन क्लिनिक, हजियापुर रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  // General Surgeon
  { 
    name: { hi: "डॉ. शंभू नाथ सिंह", en: "Dr. Shambhu Nath Singh", bho: "डॉ. शंभू नाथ सिंह" }, 
    description: { hi: "एक कुशल जनरल सर्जन हैं, जो विभिन्न प्रकार की सर्जिकल प्रक्रियाओं में विशेषज्ञता रखते हैं।", en: "A skilled general surgeon specializing in various surgical procedures.", bho: "एक कुशल जनरल सर्जन हवें, जे विभिन्न प्रकार के सर्जिकल प्रक्रिया में विशेषज्ञता राखेलें।" }, 
    fee: 800, 
    imageUrl: "👨‍⚕️", 
    location: "सिंह सर्जिकल सेंटर, मौनिया चौक, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  { 
    name: { hi: "डॉ. संदीप कुमार", en: "Dr. Sandeep Kumar", bho: "डॉ. संदीप कुमार" }, 
    description: { hi: "लैप्रोस्कोपिक (दूरबीन) सर्जरी में माहिर एक आधुनिक सर्जन।", en: "A modern surgeon specializing in laparoscopic (minimally invasive) surgery.", bho: "लैप्रोस्कोपिक (दूरबीन) सर्जरी में माहिर एक आधुनिक सर्जन।" }, 
    fee: 850, 
    imageUrl: "👨‍⚕️", 
    location: "गोपालगंज सर्जिकल हॉस्पिटल, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  { 
    name: { hi: "डॉ. इम्तियाज़ अहमद", en: "Dr. Imtiaz Ahmed", bho: "डॉ. इम्तियाज़ अहमद" }, 
    description: { hi: "मामूली और बड़ी दोनों तरह की सर्जरी करने में व्यापक अनुभव।", en: "Extensive experience in performing both minor and major surgeries.", bho: "मामूली अवुरी बड़ दुनो तरह के सर्जरी करे में व्यापक अनुभव।" }, 
    fee: 750, 
    imageUrl: "👨‍⚕️", 
    location: "अहमद सर्जिकल क्लिनिक, पुरानी चौक, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  // Neurologist
  { 
    name: { hi: "डॉ. राजेश वर्मा", en: "Dr. Rajesh Verma", bho: "डॉ. राजेश वर्मा" }, 
    description: { hi: "एक अनुभवी न्यूरोलॉजिस्ट हैं जो मस्तिष्क, रीढ़ की हड्डी और तंत्रिकाओं के विकारों का इलाज करते हैं।", en: "An experienced neurologist who treats disorders of the brain, spinal cord, and nerves.", bho: "एक अनुभवी न्यूरोलॉजिस्ट हवें जे मस्तिष्क, रीढ़ के हड्डी अवुरी तंत्रिका के विकार के इलाज करेलें।" }, 
    fee: 900, 
    imageUrl: "👨‍⚕️", 
    location: "वर्मा न्यूरो क्लिनिक, अंबेडकर चौक, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. अमित कुमार", en: "Dr. Amit Kumar", bho: "डॉ. अमित कुमार" }, 
    description: { hi: "माइग्रेन, मिर्गी और स्ट्रोक के इलाज में विशेषज्ञता।", en: "Specializes in treating migraines, epilepsy, and stroke.", bho: "माइग्रेन, मिर्गी अवुरी स्ट्रोक के इलाज में विशेषज्ञता।" }, 
    fee: 950, 
    imageUrl: "👨‍⚕️", 
    location: "सिटी न्यूरो सेंटर, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  // ENT Specialist
  { 
    name: { hi: "डॉ. अंजलि मेहता", en: "Dr. Anjali Mehta", bho: "डॉ. अंजलि मेहता" }, 
    description: { hi: "कान, नाक और गले से संबंधित विकारों के निदान और उपचार में माहिर हैं।", en: "Specializes in diagnosing and treating disorders related to the ear, nose, and throat.", bho: "कान, नाक अवुरी गला से जुड़ल विकार के निदान अवुरी उपचार में माहिर हईं।" }, 
    fee: 450, 
    imageUrl: "👩‍⚕️", 
    location: "मेहता ईएनटी क्लिनिक, पोस्ट ऑफिस चौक, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. सुनील कुमार", en: "Dr. Sunil Kumar", bho: "डॉ. सुनील कुमार" }, 
    description: { hi: "साइनस और एलर्जी की समस्याओं के लिए उन्नत उपचार प्रदान करते हैं।", en: "Provides advanced treatment for sinus and allergy problems.", bho: "साइनस अवुरी एलर्जी के समस्या खातिर उन्नत उपचार प्रदान करेलें।" }, 
    fee: 500, 
    imageUrl: "👨‍⚕️", 
    location: "कुमार ईएनटी केयर, बस स्टैंड रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  // Ophthalmologist
  { 
    name: { hi: "डॉ. दीपक चौहान", en: "Dr. Deepak Chauhan", bho: "डॉ. दीपक चौहान" }, 
    description: { hi: "एक कुशल नेत्र रोग विशेषज्ञ हैं जो आंखों की बीमारियों का इलाज करते हैं और दृष्टि देखभाल प्रदान करते हैं।", en: "A skilled ophthalmologist who treats eye diseases and provides vision care.", bho: "एक कुशल नेत्र रोग विशेषज्ञ हवें जे आँख के बेमारी के इलाज करेलें अवुरी दृष्टि देखभाल प्रदान करेलें।" }, 
    fee: 500, 
    imageUrl: "👨‍⚕️", 
    location: "चौहान आई हॉस्पिटल, गोशाला रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. नेहा प्रसाद", en: "Dr. Neha Prasad", bho: "डॉ. नेहा प्रसाद" }, 
    description: { hi: "मोतियाबिंद सर्जरी और लेसिक प्रक्रियाओं में विशेषज्ञता।", en: "Specializes in cataract surgery and LASIK procedures.", bho: "मोतियाबिंद सर्जरी अवुरी लेसिक प्रक्रिया में विशेषज्ञता।" }, 
    fee: 550, 
    imageUrl: "👩‍⚕️", 
    location: "दृष्टि आई केयर, अस्पताल रोड, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  // Psychiatrist
  { 
    name: { hi: "डॉ. पवन कुमार", en: "Dr. Pawan Kumar", bho: "डॉ. पवन कुमार" }, 
    description: { hi: "एक अनुभवी मनोचिकित्सक हैं जो मानसिक स्वास्थ्य संबंधी समस्याओं का इलाज करते हैं।", en: "An experienced psychiatrist who treats mental health issues.", bho: "एक अनुभवी मनोचिकित्सक हवें जे मानसिक स्वास्थ्य संबंधी समस्या के इलाज करेलें।" }, 
    fee: 650, 
    imageUrl: "👨‍⚕️", 
    location: "मनोबल क्लिनिक, चंद्रगोकुल रोड, गोपालगंज", 
    aiHint: "indian male doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  { 
    name: { hi: "डॉ. स्मिता सिन्हा", en: "Dr. Smita Sinha", bho: "डॉ. स्मिता सिन्हा" }, 
    description: { hi: "तनाव, चिंता और अवसाद के लिए परामर्श और चिकित्सा प्रदान करती हैं।", en: "Provides counseling and therapy for stress, anxiety, and depression.", bho: "तनाव, चिंता अवुरी अवसाद खातिर परामर्श अवुरी चिकित्सा प्रदान करेली।" }, 
    fee: 700, 
    imageUrl: "👩‍⚕️", 
    location: "माइंडफुल लिविंग सेंटर, सिविल लाइंस, गोपालगंज", 
    aiHint: "indian female doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  }
];

export const doctorsData: Doctor[] = doctorsList.map((doctor, index) => ({
    ...doctor,
    id: `${index + 1}`,
}));
