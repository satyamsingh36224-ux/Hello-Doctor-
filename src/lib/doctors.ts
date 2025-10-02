
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

const doctorsList: Omit<Doctor, 'id'>[] = [
  // General Physician
  {
    name: { hi: "डॉ. शंभू नाथ सिंह", en: "Dr. Shambhu Nath Singh", bho: "डॉ. शंभू नाथ सिंह" },
    description: { hi: "एक अनुभवी सामान्य चिकित्सक जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", en: "An experienced general physician providing comprehensive healthcare to patients of all ages.", bho: "एक अनुभवी सामान्य चिकित्सक जे सभे उम्र के रोगी के व्यापक स्वास्थ्य सेवा प्रदान करेलें।" },
    fee: 400,
    imageUrl: "👨‍⚕️",
    location: "सिंह क्लिनिक, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. एस. के. पाठक", en: "Dr. S. K. Pathak", bho: "डॉ. एस. के. पाठक" },
    description: { hi: "एक विश्वसनीय सामान्य चिकित्सक जो पुरानी बीमारियों के प्रबंधन में विशेषज्ञता रखते हैं।", en: "A trusted general physician specializing in the management of chronic diseases.", bho: "एक विश्वसनीय सामान्य चिकित्सक जे पुरान बेमारी के प्रबंधन में विशेषज्ञता राखेलें।" },
    fee: 350,
    imageUrl: "👨‍⚕️",
    location: "पाठक क्लिनिक, पुरानी चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. राहुल सिंह", en: "Dr. Rahul Singh", bho: "डॉ. राहुल सिंह" },
    description: { hi: "परिवारों के लिए प्राथमिक देखभाल और निवारक स्वास्थ्य सेवाएं प्रदान करने पर ध्यान केंद्रित करते हैं।", en: "Focuses on providing primary care and preventive health services for families.", bho: "परिवार खातिर प्राथमिक देखभाल अवुरी निवारक स्वास्थ्य सेवा प्रदान करे पर ध्यान केंद्रित करेलें।" },
    fee: 300,
    imageUrl: "👨‍⚕️",
    location: "राहुल फैमिली क्लिनिक, जंगलिया मोड़, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. आर. पी. सिंह", en: "Dr. R. P. Singh", bho: "डॉ. आर. पी. सिंह" },
    description: { hi: "दशकों के अनुभव वाले एक वरिष्ठ सामान्य चिकित्सक, जो अपने सटीक निदान के लिए जाने जाते हैं।", en: "A senior general physician with decades of experience, known for his accurate diagnosis.", bho: "दशकन के अनुभव वाला एक वरिष्ठ सामान्य चिकित्सक, जे आपन सटीक निदान खातिर जानल जालें।" },
    fee: 450,
    imageUrl: "👨‍⚕️",
    location: "आर. पी. सिंह क्लिनिक, मौनिया चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. एम. एम. प्रसाद", en: "Dr. M. M. Prasad", bho: "डॉ. एम. एम. प्रसाद" },
    description: { hi: "मधुमेह और उच्च रक्तचाप सहित जीवनशैली से जुड़ी बीमारियों के प्रबंधन में विशेषज्ञता।", en: "Specializes in managing lifestyle diseases including diabetes and hypertension.", bho: "मधुमेह अवुरी उच्च रक्तचाप सहित जीवनशैली से जुड़ल बेमारी के प्रबंधन में विशेषज्ञता।" },
    fee: 400,
    imageUrl: "👨‍⚕️",
    location: "प्रसाद स्वास्थ्य सेवा, थावे रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. के. एम. प्रसाद", en: "Dr. K. M. Prasad", bho: "डॉ. के. एम. प्रसाद" },
    description: { hi: "सभी उम्र के रोगियों के लिए व्यापक प्राथमिक देखभाल प्रदान करते हैं।", en: "Provides comprehensive primary care for patients of all ages.", bho: "सभे उम्र के रोगी खातिर व्यापक प्राथमिक देखभाल प्रदान करेलें।" },
    fee: 350,
    imageUrl: "👨‍⚕️",
    location: "के. एम. प्रसाद क्लिनिक, बस स्टैंड के पास, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. संदीप कुमार", en: "Dr. Sandeep Kumar", bho: "डॉ. संदीप कुमार" },
    description: { hi: "एक समर्पित सामान्य चिकित्सक जो व्यक्तिगत रोगी देखभाल पर ध्यान केंद्रित करते हैं।", en: "A dedicated general physician with a focus on personalized patient care.", bho: "एक समर्पित सामान्य चिकित्सक जे व्यक्तिगत रोगी देखभाल पर ध्यान केंद्रित करेलें।" },
    fee: 300,
    imageUrl: "👨‍⚕️",
    location: "संदीप क्लिनिक, अंबेडकर चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. राजीव रंजन", en: "Dr. Rajeev Ranjan", bho: "डॉ. राजीव रंजन" },
    description: { hi: "संक्रामक रोगों और सामान्य चिकित्सा संबंधी समस्याओं के इलाज में विशेषज्ञता।", en: "Specializes in treating infectious diseases and general medical problems.", bho: "संक्रामक रोग अवुरी सामान्य चिकित्सा संबंधी समस्या के इलाज में विशेषज्ञता।" },
    fee: 400,
    imageUrl: "👨‍⚕️",
    location: "रंजन क्लिनिक, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } }
  },
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
  {
    name: { hi: "डॉ. रामप्रवेश सिंह", en: "Dr. Rampravesh Singh", bho: "डॉ. रामप्रवेश सिंह" },
    description: { hi: "बच्चों की बीमारियों के निदान और उपचार में व्यापक अनुभव।", en: "Extensive experience in diagnosing and treating childhood illnesses.", bho: "लइकन के बेमारी के निदान अवुरी उपचार में व्यापक अनुभव।" },
    fee: 400,
    imageUrl: "👨‍⚕️",
    location: "सिंह चाइल्ड केयर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. एस. बी. प्रसाद", en: "Dr. S. B. Prasad", bho: "डॉ. एस. बी. प्रसाद" },
    description: { hi: "बच्चों के स्वास्थ्य की देखभाल में वर्षों का अनुभव।", en: "Years of experience in pediatric healthcare.", bho: "लइकन के स्वास्थ्य के देखभाल में बरिसन के अनुभव।" },
    fee: 450,
    imageUrl: "👨‍⚕️",
    location: "प्रसाद बाल चिकित्सालय, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. आर. के. सिंह", en: "Dr. R. K. Singh", bho: "डॉ. आर. के. सिंह" },
    description: { hi: "बच्चों की सामान्य बीमारियों और टीकाकरण के विशेषज्ञ।", en: "Specialist in common childhood diseases and vaccinations.", bho: "लइकन के सामान्य बेमारी अवुरी टीकाकरण के विशेषज्ञ।" },
    fee: 400,
    imageUrl: "👨‍⚕️",
    location: "आर. के. सिंह चाइल्ड क्लिनिक, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. नेहा परवीन", en: "Dr. Neha Parveen", bho: "डॉ. नेहा परवीन" },
    description: { hi: "एक दयालु बाल रोग विशेषज्ञ जो बाल स्वास्थ्य पर ध्यान केंद्रित करती हैं।", en: "A compassionate pediatrician focusing on child wellness.", bho: "एक दयालु बाल रोग विशेषज्ञ जे बाल स्वास्थ्य पर ध्यान केंद्रित करेली।" },
    fee: 420,
    imageUrl: "👩‍⚕️",
    location: "परवीन चाइल्ड केयर, पुरानी चौक, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. ए. आर. सुनील कुमार", en: "Dr. A. R. Sunil Kumar", bho: "डॉ. ए. आर. सुनील कुमार" },
    description: { hi: "शिशुओं और बच्चों के लिए विशेषज्ञ देखभाल प्रदान करते हैं।", en: "Provides expert care for infants and children.", bho: "शिशु अवुरी लइकन खातिर विशेषज्ञ देखभाल प्रदान करेलें।" },
    fee: 450,
    imageUrl: "👨‍⚕️",
    location: "सुनील बाल स्वास्थ्य केंद्र, थावे रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. मिंकू कुमार मिश्रा", en: "Dr. Minku Kumar Mishra", bho: "डॉ. मिंकू कुमार मिश्रा" },
    description: { hi: "बच्चों के विकास और स्वास्थ्य संबंधी समस्याओं के लिए जाने जाते हैं।", en: "Known for handling child development and health issues.", bho: "लइकन के विकास अवुरी स्वास्थ्य संबंधी समस्या खातिर जानल जालें।" },
    fee: 400,
    imageUrl: "👨‍⚕️",
    location: "मिश्रा चिल्ड्रेन्स क्लिनिक, जंगलिया मोड़, गोपालगंज",
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
  {
    name: { hi: "डॉ. रवि सिंह आर्य", en: "Dr. Ravi Singh Arya", bho: "डॉ. रवि सिंह आर्य" },
    description: { hi: "त्वचा और लेजर उपचार के विशेषज्ञ।", en: "Specialist in skin and laser treatments.", bho: "चमड़ी आ लेजर इलाज के विशेषज्ञ।" },
    fee: 600,
    imageUrl: "👨‍⚕️",
    location: "आर्य स्किन लेजर क्लिनिक, घोष मोड़, आदित्य विजन के पास, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. पवन कुमार", en: "Dr. Pawan Kumar", bho: "डॉ. पवन कुमार" },
    description: { hi: "सभी प्रकार की त्वचा संबंधी समस्याओं के लिए अनुभवी डॉक्टर।", en: "Experienced doctor for all types of skin problems.", bho: "सब तरह के चमड़ी के समस्या खातिर अनुभवी डॉक्टर।" },
    fee: 550,
    imageUrl: "👨‍⚕️",
    location: "अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अनुप कुमार", en: "Dr. Anup Kumar", bho: "डॉ. अनुप कुमार" },
    description: { hi: "त्वचा रोगों के लिए विश्वसनीय देखभाल और उपचार।", en: "Reliable care and treatment for skin diseases.", bho: "चमड़ी के बेमारी खातिर विश्वसनीय देखभाल आ इलाज।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "समिता क्लिनिक, बंजारी रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. प्रवीण कुमार प्रसाद", en: "Dr. Praveen Kumar Prasad", bho: "डॉ. प्रवीण कुमार प्रसाद" },
    description: { hi: "त्वचाविज्ञान में एमडी, जटिल त्वचा स्थितियों के विशेषज्ञ।", en: "MD in Dermatology, specialist in complex skin conditions.", bho: "चमड़ी विज्ञान में एमडी, जटिल चमड़ी के स्थिति के विशेषज्ञ।" },
    fee: 650,
    imageUrl: "👨‍⚕️",
    location: "सिविल लाइंस, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } }
  },
  {
    name: { hi: "गोपालगंज डेंटल, स्किन एंड हेयर क्लिनिक", en: "Gopalganj Dental, Skin & Hair Clinic", bho: "गोपालगंज डेंटल, स्किन एंड हेयर क्लिनिक" },
    description: { hi: "दांत, त्वचा और बालों के लिए एक ही स्थान पर सभी समाधान।", en: "All solutions for dental, skin, and hair at one place.", bho: "दांत, चमड़ी आ बाल खातिर एकही जगह पर सब समाधान।" },
    fee: 500,
    imageUrl: "🏥",
    location: "सिविल लाइंस, गोपालगंज",
    aiHint: "clinic building",
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
  {
    name: { hi: "डॉ. सुमन", en: "Dr. Suman", bho: "डॉ. सुमन" },
    description: { hi: "महिलाओं के स्वास्थ्य के लिए समर्पित एक अनुभवी स्त्री रोग विशेषज्ञ।", en: "An experienced gynecologist dedicated to women's health.", bho: "महिला के स्वास्थ्य खातिर समर्पित एक अनुभवी स्त्री रोग विशेषज्ञ।" },
    fee: 500,
    imageUrl: "👩‍⚕️",
    location: "सुमन महिला क्लिनिक, सिनेमा रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. रंगनी सिंह", en: "Dr. Rangani Singh", bho: "डॉ. रंगनी सिंह" },
    description: { hi: "प्रसूति और स्त्री रोग संबंधी देखभाल में विशेषज्ञता, मातृत्व स्वास्थ्य पर ध्यान केंद्रित करती हैं।", en: "Specializing in obstetrics and gynecological care, with a focus on maternal health.", bho: "प्रसूति अवुरी स्त्री रोग संबंधी देखभाल में विशेषज्ञता, मातृत्व स्वास्थ्य पर ध्यान केंद्रित करेली।" },
    fee: 550,
    imageUrl: "👩‍⚕️",
    location: "रंगनी मैटरनिटी सेंटर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. सोनम सिंह", en: "Dr. Sonam Singh", bho: "डॉ. सोनम सिंह" },
    description: { hi: "एक देखभाल करने वाली स्त्री रोग विशेषज्ञ जो सभी उम्र की महिलाओं के लिए व्यापक देखभाल प्रदान करती हैं।", en: "A caring gynecologist providing comprehensive care for women of all ages.", bho: "एक देखभाल करे वाली स्त्री रोग विशेषज्ञ जे सभे उम्र के महिला खातिर व्यापक देखभाल प्रदान करेली।" },
    fee: 500,
    imageUrl: "👩‍⚕️",
    location: "सोनम वीमेन'स केयर, ब्लॉक रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. के. मंजू", en: "Dr. K. Manju", bho: "डॉ. के. मंजू" },
    description: { hi: "महिलाओं के स्वास्थ्य के लिए समर्पित एक अनुभवी स्त्री रोग विशेषज्ञ।", en: "An experienced gynecologist dedicated to women's health.", bho: "महिला के स्वास्थ्य खातिर समर्पित एक अनुभवी स्त्री रोग विशेषज्ञ।" },
    fee: 550,
    imageUrl: "👩‍⚕️",
    location: "मंजू वीमेन'स केयर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. सारिका गुप्ता", en: "Dr. Sarika Gupta", bho: "डॉ. सारिका गुप्ता" },
    description: { hi: "प्रसूति और स्त्री रोग में विशेषज्ञता।", en: "Specializing in obstetrics and gynecology.", bho: "प्रसूति अवुरी स्त्री रोग में विशेषज्ञता।" },
    fee: 600,
    imageUrl: "👩‍⚕️",
    location: "गुप्ता मैटरनिटी होम, पुरानी चौक, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अलका राय", en: "Dr. Alka Rai", bho: "डॉ. अलका राय" },
    description: { hi: "सभी उम्र की महिलाओं के लिए व्यापक स्त्री रोग संबंधी देखभाल।", en: "Comprehensive gynecological care for women of all ages.", bho: "सभे उम्र के महिला खातिर व्यापक स्त्री रोग संबंधी देखभाल।" },
    fee: 500,
    imageUrl: "👩‍⚕️",
    location: "राय वीमेन'स क्लिनिक, सिनेमा रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. प्रिया राय", en: "Dr. Priya Ray", bho: "डॉ. प्रिया राय" },
    description: { hi: "मातृत्व देखभाल और स्त्री रोग संबंधी सर्जरी में विशेषज्ञता।", en: "Specializes in maternity care and gynecological surgeries.", bho: "मातृत्व देखभाल अवुरी स्त्री रोग संबंधी सर्जरी में विशेषज्ञता।" },
    fee: 580,
    imageUrl: "👩‍⚕️",
    location: "प्रिया मैटरनिटी सेंटर, थावे रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अभिजीत बसाक", en: "Dr. Abhijeet Basak", bho: "डॉ. अभिजीत बसाक" },
    description: { hi: "एक कुशल स्त्री रोग विशेषज्ञ जो महिलाओं के स्वास्थ्य के मुद्दों के लिए व्यापक देखभाल प्रदान करते हैं।", en: "A skilled gynecologist providing comprehensive care for women's health issues.", bho: "एक कुशल स्त्री रोग विशेषज्ञ जे महिला के स्वास्थ्य के मुद्दा खातिर व्यापक देखभाल प्रदान करेलें।" },
    fee: 550,
    imageUrl: "👨‍⚕️",
    location: "बसाक वीमेन'स हॉस्पिटल, ब्लॉक रोड, गोपालगंज",
    aiHint: "indian male doctor",
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
  {
    name: { hi: "डॉ. यशवर्धन जायसवाल", en: "Dr. Yashvardhan Jayaswal", bho: "डॉ. यशवर्धन जायसवाल" },
    description: { hi: "हड्डी और जोड़ों की समस्याओं के विशेषज्ञ।", en: "Specialist in bone and joint problems.", bho: "हड्डी अवुरी जोड़ के समस्या के विशेषज्ञ।" },
    fee: 700,
    imageUrl: "👨‍⚕️",
    location: "जायसवाल ऑर्थो क्लिनिक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. रामेश्वर कुमार", en: "Dr. Rameshwar Kumar", bho: "डॉ. रामेश्वर कुमार" },
    description: { hi: "आर्थोपेडिक सर्जरी और देखभाल में व्यापक अनुभव।", en: "Extensive experience in orthopedic surgery and care.", bho: "आर्थोपेडिक सर्जरी अवुरी देखभाल में व्यापक अनुभव।" },
    fee: 720,
    imageUrl: "👨‍⚕️",
    location: "कुमार ऑर्थोपेडिक्स, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. संजू गुप्ता", en: "Dr. Sanju Gupta", bho: "डॉ. संजू गुप्ता" },
    description: { hi: "जोड़ों की चोटों और अपक्षयी रोगों के इलाज में विशेषज्ञता।", en: "Specializes in treating joint injuries and degenerative diseases.", bho: "जोड़ के चोट अवुरी अपक्षयी रोग के इलाज में विशेषज्ञता।" },
    fee: 700,
    imageUrl: "👩‍⚕️",
    location: "गुप्ता जॉइंट केयर, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. वत्सल खेतान", en: "Dr. Vatsal Khetan", bho: "डॉ. वत्सल खेतान" },
    description: { hi: "आधुनिक आर्थोपेडिक तकनीकों का उपयोग करने वाले एक कुशल सर्जन।", en: "A skilled surgeon using modern orthopedic techniques.", bho: "आधुनिक आर्थोपेडिक तकनीक के उपयोग करे वाला एक कुशल सर्जन।" },
    fee: 750,
    imageUrl: "👨‍⚕️",
    location: "खेतान ऑर्थो हॉस्पिटल, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. सुरेंद्र कुमार तिवारी", en: "Dr. Surendra Kumar Tiwari", bho: "डॉ. सुरेंद्र कुमार तिवारी" },
    description: { hi: "अनुभवी हड्डी रोग विशेषज्ञ, जो जटिल फ्रैक्चर और आर्थ्रोस्कोपी में माहिर हैं।", en: "Experienced orthopedic specialist, expert in complex fractures and arthroscopy.", bho: "अनुभवी हड्डी रोग विशेषज्ञ, जे जटिल फ्रैक्चर आ आर्थ्रोस्कोपी में माहिर बाड़ें।" },
    fee: 700,
    imageUrl: "👨‍⚕️",
    location: "तिवारी ऑर्थो केयर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. संजीव कुमार", en: "Dr. Sanjiv Kumar", bho: "डॉ. संजीव कुमार" },
    description: { hi: "जोड़ों के दर्द और खेल की चोटों के इलाज के लिए जाने जाते हैं।", en: "Known for treating joint pain and sports injuries.", bho: "जोड़ के दरद आ खेल के चोट के इलाज खातिर जानल जालें।" },
    fee: 680,
    imageUrl: "👨‍⚕️",
    location: "संजीव ऑर्थोपेडिक क्लिनिक, पुरानी चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. इमरान हुसैन खान", en: "Dr. Imran Hussain Khan", bho: "डॉ. इमरान हुसैन खान" },
    description: { hi: "रीढ़ की हड्डी और बाल चिकित्सा आर्थोपेडिक्स में विशेषज्ञता।", en: "Specializes in spine and pediatric orthopedics.", bho: "रीढ़ के हड्डी आ बाल चिकित्सा आर्थोपेडिक्स में विशेषज्ञता।" },
    fee: 750,
    imageUrl: "👨‍⚕️",
    location: "खान ऑर्थो एंड स्पाइन सेंटर, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अमर कुमार", en: "Dr. Amar Kumar", bho: "डॉ. अमर कुमार" },
    description: { hi: "हड्डी रोग सर्जरी में व्यापक अनुभव और रोगी की देखभाल के लिए प्रतिबद्ध।", en: "Extensive experience in orthopedic surgery and committed to patient care.", bho: "हड्डी रोग सर्जरी में व्यापक अनुभव आ रोगी के देखभाल खातिर प्रतिबद्ध।" },
    fee: 700,
    imageUrl: "👨‍⚕️",
    location: "अमर ऑर्थो हॉस्पिटल, थावे रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. महावीर गुप्ता", en: "Dr. Mahaveer Gupta", bho: "डॉ. महावीर गुप्ता" },
    description: { hi: "सभी प्रकार की हड्डी और जोड़ों की समस्याओं के लिए व्यापक देखभाल।", en: "Comprehensive care for all types of bone and joint problems.", bho: "सब प्रकार के हड्डी आ जोड़ के समस्या खातिर व्यापक देखभाल।" },
    fee: 650,
    imageUrl: "👨‍⚕️",
    location: "महावीर हड्डी क्लिनिक, जंगलिया मोड़, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. शानू गुप्ता", en: "Dr. Shanu Gupta", bho: "डॉ. शानू गुप्ता" },
    description: { hi: "एक युवा और गतिशील हड्डी रोग विशेषज्ञ जो नवीनतम सर्जिकल तकनीकों का उपयोग करती हैं।", en: "A young and dynamic orthopedic surgeon using the latest surgical techniques.", bho: "एक युवा आ गतिशील हड्डी रोग विशेषज्ञ जे नवीनतम सर्जिकल तकनीक के उपयोग करेली।" },
    fee: 720,
    imageUrl: "👩‍⚕️",
    location: "गुप्ता ऑर्थो एंड जॉइंट केयर, ब्लॉक रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } }
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
  {
    name: { hi: "डॉ. मनोज कुमार गुप्ता", en: "Dr. Manoj Kumar Gupta", bho: "डॉ. मनोज कुमार गुप्ता" },
    description: { hi: "विभिन्न प्रकार की सर्जरी में विशेषज्ञता रखने वाले एक अनुभवी जनरल सर्जन।", en: "An experienced general surgeon specializing in various types of surgeries.", bho: "विभिन्न प्रकार के सर्जरी में विशेषज्ञता रखे वाला एक अनुभवी जनरल सर्जन।" },
    fee: 800,
    imageUrl: "👨‍⚕️",
    location: "गुप्ता सर्जिकल क्लिनिक, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  {
    name: { hi: "डॉ. अमित कुमार", en: "Dr. Amit Kumar", bho: "डॉ. अमित कुमार" },
    description: { hi: "लैप्रोस्कोपिक और सामान्य सर्जरी में माहिर।", en: "Specialist in laparoscopic and general surgery.", bho: "लैप्रोस्कोपिक आ सामान्य सर्जरी में माहिर।" },
    fee: 820,
    imageUrl: "👨‍⚕️",
    location: "अमित सर्जिकल केयर, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  {
    name: { hi: "डॉ. मुकेश कुमार", en: "Dr. Mukesh Kumar", bho: "डॉ. मुकेश कुमार" },
    description: { hi: "सभी प्रकार की सामान्य सर्जरी करने में कुशल।", en: "Skilled in performing all types of general surgeries.", bho: "सब प्रकार के सामान्य सर्जरी करे में कुशल।" },
    fee: 780,
    imageUrl: "👨‍⚕️",
    location: "मुकेश सर्जिकल होम, थावे रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  {
    name: { hi: "डॉ. संजय सिंह", en: "Dr. Sanjay Singh", bho: "डॉ. संजय सिंह" },
    description: { hi: "एक विश्वसनीय जनरल सर्जन जो रोगी की सुरक्षा को प्राथमिकता देते हैं।", en: "A reliable general surgeon who prioritizes patient safety.", bho: "एक विश्वसनीय जनरल सर्जन जे रोगी के सुरक्षा के प्राथमिकता देलें।" },
    fee: 800,
    imageUrl: "👨‍⚕️",
    location: "संजय सर्जिकल सेंटर, ब्लॉक रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  {
    name: { hi: "डॉ. संदीप कुमार गुप्ता", en: "Dr. Sandip Kumar Gupta", bho: "डॉ. संदीप कुमार गुप्ता" },
    description: { hi: "आधुनिक सर्जिकल तकनीकों का उपयोग करने वाले एक प्रगतिशील सर्जन।", en: "A progressive surgeon using modern surgical techniques.", bho: "आधुनिक सर्जिकल तकनीक के उपयोग करे वाला एक प्रगतिशील सर्जन।" },
    fee: 850,
    imageUrl: "👨‍⚕️",
    location: "संदीप सर्जिकल क्लिनिक, जंगलिया मोड़, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  {
    name: { hi: "डॉ. सुनील रंजन", en: "Dr. Sunil Ranjan", bho: "डॉ. सुनील रंजन" },
    description: { hi: "सर्जिकल देखभाल में व्यापक अनुभव।", en: "Extensive experience in surgical care.", bho: "सर्जिकल देखभाल में व्यापक अनुभव।" },
    fee: 750,
    imageUrl: "👨‍⚕️",
    location: "रंजन सर्जिकल हॉस्पिटल, पोस्ट ऑफिस चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } }
  },
  {
    name: { hi: "डॉ. आशीष कुमार", en: "Dr. Ashish Kumar", bho: "डॉ. आशीष कुमार" },
    description: { hi: "एक समर्पित जनरल सर्जन जो उत्कृष्ट सर्जिकल परिणाम प्रदान करते हैं।", en: "A dedicated general surgeon providing excellent surgical outcomes.", bho: "एक समर्पित जनरल सर्जन जे उत्कृष्ट सर्जिकल परिणाम प्रदान करेलें।" },
    fee: 830,
    imageUrl: "👨‍⚕️",
    location: "आशीष सर्जिकल केयर, अंबेडकर चौक, गोपालगंज",
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
  {
    name: { hi: "डॉ. असलम परवेज", en: "Dr. Aslam Parvej", bho: "डॉ. असलम परवेज" },
    description: { hi: "तंत्रिका तंत्र से संबंधित जटिल मामलों के विशेषज्ञ।", en: "Specialist in complex cases related to the nervous system.", bho: "तंत्रिका तंत्र से जुड़ल जटिल मामला के विशेषज्ञ।" },
    fee: 1000,
    imageUrl: "👨‍⚕️",
    location: "न्यूरो केयर क्लिनिक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अनिंद्य गुप्ता", en: "Dr. Anindyay Gupta", bho: "डॉ. अनिंद्य गुप्ता" },
    description: { hi: "मस्तिष्क और रीढ़ की हड्डी की बीमारियों के इलाज में विशेषज्ञता।", en: "Specializes in the treatment of brain and spinal cord diseases.", bho: "मस्तिष्क अवुरी रीढ़ के हड्डी के बेमारी के इलाज में विशेषज्ञता।" },
    fee: 950,
    imageUrl: "👨‍⚕️",
    location: "गुप्ता न्यूरोलॉजी सेंटर, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. प्रमोद अघोरी", en: "Dr. Pramod Aghari", bho: "डॉ. प्रमोद अघोरी" },
    description: { hi: "एक अनुभवी न्यूरोलॉजिस्ट जो सभी प्रकार की तंत्रिका संबंधी समस्याओं का इलाज करते हैं।", en: "An experienced neurologist who treats all types of neurological problems.", bho: "एक अनुभवी न्यूरोलॉजिस्ट जे सभे प्रकार के तंत्रिका संबंधी समस्या के इलाज करेलें।" },
    fee: 900,
    imageUrl: "👨‍⚕️",
    location: "अघोरी न्यूरो क्लिनिक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. रूपम अघोरी", en: "Dr. Rupam Aghari", bho: "डॉ. रूपम अघोरी" },
    description: { hi: "तंत्रिका संबंधी विकारों के लिए व्यापक देखभाल प्रदान करने वाली एक समर्पित न्यूरोलॉजिस्ट।", en: "A dedicated neurologist providing comprehensive care for neurological disorders.", bho: "तंत्रिका संबंधी विकार खातिर व्यापक देखभाल प्रदान करे वाली एक समर्पित न्यूरोलॉजिस्ट।" },
    fee: 900,
    imageUrl: "👩‍⚕️",
    location: "अघोरी न्यूरो क्लिनिक, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. भूपेंद्र भाटिया", en: "Dr. Bhupendra Bhatia", bho: "डॉ. भूपेंद्र भाटिया" },
    description: { hi: "सिरदर्द और माइग्रेन के इलाज में विशेषज्ञ।", en: "Specialist in the treatment of headaches and migraines.", bho: "माथा के दरद अवुरी माइग्रेन के इलाज में विशेषज्ञ।" },
    fee: 850,
    imageUrl: "👨‍⚕️",
    location: "भाटिया न्यूरोलॉजी, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अभिषेक कुमार सिंह", en: "Dr. Abhishek Kumar Singh", bho: "डॉ. अभिषेक कुमार सिंह" },
    description: { hi: "एक कुशल न्यूरोलॉजिस्ट जो रोगी-केंद्रित देखभाल प्रदान करते हैं।", en: "A skilled neurologist providing patient-centric care.", bho: "एक कुशल न्यूरोलॉजिस्ट जे रोगी-केंद्रित देखभाल प्रदान करेलें।" },
    fee: 950,
    imageUrl: "👨‍⚕️",
    location: "सिंह न्यूरो हॉस्पिटल, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अभिजीत गुवंडी", en: "Dr. Abhijeet Guvandi", bho: "डॉ. अभिजीत गुवंडी" },
    description: { hi: "आधुनिक न्यूरोलॉजिकल उपचार और प्रक्रियाओं में विशेषज्ञ।", en: "Expert in modern neurological treatments and procedures.", bho: "आधुनिक न्यूरोलॉजिकल उपचार अवुरी प्रक्रिया में विशेषज्ञ।" },
    fee: 1000,
    imageUrl: "👨‍⚕️",
    location: "गुवंडी न्यूरो केयर, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Neurologist", name: { hi: "तंत्रिका विज्ञानी", en: "Neurologist", bho: "नशा के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. छवि गुवंडी", en: "Dr. Chhavi Guvandi", bho: "डॉ. छवि गुवंडी" },
    description: { hi: "एक समर्पित न्यूरोलॉजिस्ट जो तंत्रिका संबंधी समस्याओं के लिए व्यापक देखभाल प्रदान करती हैं।", en: "A dedicated neurologist providing comprehensive care for neurological problems.", bho: "एक समर्पित न्यूरोलॉजिस्ट जे तंत्रिका संबंधी समस्या खातिर व्यापक देखभाल प्रदान करेली।" },
    fee: 1000,
    imageUrl: "👩‍⚕️",
    location: "गुवंडी न्यूरो केयर, गोपालगंज",
    aiHint: "indian female doctor",
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
  {
    name: { hi: "डॉ. सुशील कुमार सिंह", en: "Dr. Sushil Kumar Singh", bho: "डॉ. सुशील कुमार सिंह" },
    description: { hi: "एक अनुभवी ईएनटी विशेषज्ञ जो कान, नाक और गले की सभी समस्याओं का इलाज करते हैं।", en: "An experienced ENT specialist who treats all problems of the ear, nose, and throat.", bho: "एक अनुभवी ईएनटी विशेषज्ञ जे कान, नाक अवुरी गला के सब समस्या के इलाज करेलें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "सिंह ईएनटी हॉस्पिटल, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. जावेद सुलेमानी", en: "Dr. Javed Sulemani", bho: "डॉ. जावेद सुलेमानी" },
    description: { hi: "कान, नाक और गले के रोगों के निदान और प्रबंधन में विशेषज्ञता।", en: "Specializes in the diagnosis and management of ear, nose, and throat diseases.", bho: "कान, नाक अवुरी गला के रोग के निदान अवुरी प्रबंधन में विशेषज्ञता।" },
    fee: 450,
    imageUrl: "👨‍⚕️",
    location: "सुलेमानी ईएनटी क्लिनिक, पुरानी चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अभिषेक कुमार", en: "Dr. Abhishek Kumar", bho: "डॉ. अभिषेक कुमार" },
    description: { hi: "ईएनटी से संबंधित सभी समस्याओं के लिए व्यापक देखभाल प्रदान करते हैं।", en: "Provides comprehensive care for all ENT-related issues.", bho: "ईएनटी से जुड़ल सब समस्या खातिर व्यापक देखभाल प्रदान करेलें।" },
    fee: 480,
    imageUrl: "👨‍⚕️",
    location: "ताराचंद ईएनटी, बरौली, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. एस. के. गुप्ता", en: "Dr. S. K. Gupta", bho: "डॉ. एस. के. गुप्ता" },
    description: { hi: "कान, नाक और गले की समस्याओं के लिए विशेषज्ञ देखभाल प्रदान करते हैं।", en: "Provides expert care for ear, nose, and throat problems.", bho: "कान, नाक अवुरी गला के समस्या खातिर विशेषज्ञ देखभाल प्रदान करेलें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "गुप्ता ईएनटी केयर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. अर्पित श्रीवास्तव", en: "Dr. Arpit Srivastava", bho: "डॉ. अर्पित श्रीवास्तव" },
    description: { hi: "आधुनिक ईएनटी उपचार और सर्जरी में विशेषज्ञ।", en: "Specialist in modern ENT treatments and surgeries.", bho: "आधुनिक ईएनटी उपचार अवुरी सर्जरी में विशेषज्ञ।" },
    fee: 520,
    imageUrl: "👨‍⚕️",
    location: "श्रीवास्तव ईएनटी क्लिनिक, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. रमेश कुमार कुशवाहा", en: "Dr. Ramesh Kumar Kushwaha", bho: "डॉ. रमेश कुमार कुशवाहा" },
    description: { hi: "एक अनुभवी ईएनटी सर्जन जो जटिल मामलों को संभालते हैं।", en: "An experienced ENT surgeon who handles complex cases.", bho: "एक अनुभवी ईएनटी सर्जन जे जटिल मामला के संभालेंलें।" },
    fee: 550,
    imageUrl: "👨‍⚕️",
    location: "कुशवाहा ईएनटी सेंटर, थावे रोड, गोपालगंज",
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
  {
    name: { hi: "डॉ. सुनील कुमार", en: "Dr. Sunil Kumar", bho: "डॉ. सुनील कुमार" },
    description: { hi: "आँखों की सामान्य समस्याओं और सर्जरी के लिए विशेषज्ञ देखभाल।", en: "Specialist care for common eye problems and surgeries.", bho: "आँख के सामान्य समस्या आ सर्जरी खातिर विशेषज्ञ देखभाल।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "सुनील आई क्लिनिक, सिनेमा रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. जे. के. सिंह", en: "Dr. J. K. Singh", bho: "डॉ. जे. के. सिंह" },
    description: { hi: "एक अनुभवी नेत्र रोग विशेषज्ञ जो सभी प्रकार की दृष्टि समस्याओं का इलाज करते हैं।", en: "An experienced ophthalmologist treating all types of vision problems.", bho: "एक अनुभवी नेत्र रोग विशेषज्ञ जे सब प्रकार के दृष्टि समस्या के इलाज करेलें।" },
    fee: 520,
    imageUrl: "👨‍⚕️",
    location: "सिंह आई केयर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. शशि भूषण", en: "Dr. Shashi Bhushan", bho: "डॉ. शशि भूषण" },
    description: { hi: "रेटिना और ग्लूकोमा के इलाज में विशेषज्ञता।", en: "Specializes in retina and glaucoma treatment.", bho: "रेटिना आ ग्लूकोमा के इलाज में विशेषज्ञता।" },
    fee: 600,
    imageUrl: "👨‍⚕️",
    location: "भूषण आई हॉस्पिटल, थावे रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. विशाल कुमार", en: "Dr. Vishal Kumar", bho: "डॉ. विशाल कुमार" },
    description: { hi: "बच्चों की आंखों की समस्याओं और भेंगापन के विशेषज्ञ।", en: "Specialist in pediatric eye problems and squint.", bho: "लइकन के आँख के समस्या आ भेंगापन के विशेषज्ञ।" },
    fee: 550,
    imageUrl: "👨‍⚕️",
    location: "विशाल नेत्रालय, पुरानी चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. राकेश कुमार", en: "Dr. Rakesh Kumar", bho: "डॉ. राकेश कुमार" },
    description: { hi: "आँखों की जाँच और चश्मे के नंबर के लिए एक विश्वसनीय डॉक्टर।", en: "A reliable doctor for eye examinations and prescription glasses.", bho: "आँख के जांच आ चश्मा के नंबर खातिर एक विश्वसनीय डॉक्टर।" },
    fee: 450,
    imageUrl: "👨‍⚕️",
    location: "राकेश विजन सेंटर, जंगलिया मोड़, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. जावेद आलम खान", en: "Dr. Javed Alam Khan", bho: "डॉ. जावेद आलम खान" },
    description: { hi: "सभी प्रकार की आंखों की बीमारियों के लिए व्यापक देखभाल प्रदान करते हैं।", en: "Provides comprehensive care for all types of eye diseases.", bho: "सब प्रकार के आँख के बेमारी खातिर व्यापक देखभाल प्रदान करेलें।" },
    fee: 500,
    imageUrl: "👨‍⚕️",
    location: "खान आई क्लिनिक, बस स्टैंड के पास, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } }
  },
  {
    name: { hi: "अखंड ज्योति आई हॉस्पिटल", en: "Akhand Jyoti Eye Hospital", bho: "अखंड ज्योति आई हॉस्पिटल" },
    description: { hi: "उन्नत नेत्र देखभाल और सर्जरी के लिए एक प्रसिद्ध अस्पताल।", en: "A renowned hospital for advanced eye care and surgery.", bho: "उन्नत नेत्र देखभाल आ सर्जरी खातिर एक प्रसिद्ध अस्पताल।" },
    fee: 300,
    imageUrl: "🏥",
    location: "थावे रोड, गोपालगंज",
    aiHint: "hospital building",
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
  },
  {
    name: { hi: "डॉ. राजीव रंजन", en: "Dr. Rajeev Ranjan", bho: "डॉ. राजीव रंजन" },
    description: { hi: "मानसिक स्वास्थ्य के सभी पहलुओं में विशेषज्ञता रखने वाले एक समर्पित मनोचिकित्सक।", en: "A dedicated psychiatrist specializing in all aspects of mental health.", bho: "मानसिक स्वास्थ्य के सभे पहलू में विशेषज्ञता रखे वाला एक समर्पित मनोचिकित्सक।" },
    fee: 750,
    imageUrl: "👨‍⚕️",
    location: "रंजन माइंड केयर, अस्पताल रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. आशीष सोय", en: "Dr. Ashish Soy", bho: "डॉ. आशीष सोय" },
    description: { hi: "बच्चों और किशोरों के मानसिक स्वास्थ्य के विशेषज्ञ।", en: "Specialist in child and adolescent mental health.", bho: "लइका अवुरी किशोर के मानसिक स्वास्थ्य के विशेषज्ञ।" },
    fee: 800,
    imageUrl: "👨‍⚕️",
    location: "सोय साइकियाट्री क्लिनिक, पुरानी चौक, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. समिधा पांडे", en: "Dr. Samidha Pandey", bho: "डॉ. समिधा पांडे" },
    description: { hi: "एक देखभाल करने वाली मनोचिकित्सक जो महिलाओं के मानसिक स्वास्थ्य पर ध्यान केंद्रित करती हैं।", en: "A caring psychiatrist focusing on women's mental health.", bho: "एक देखभाल करे वाली मनोचिकित्सक जे महिला के मानसिक स्वास्थ्य पर ध्यान केंद्रित करेली।" },
    fee: 700,
    imageUrl: "👩‍⚕️",
    location: "पांडे मेंटल वेलनेस, थावे रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. संगीता गुप्ता", en: "Dr. Sangeeta Gupta", bho: "डॉ. संगीता गुप्ता" },
    description: { hi: "नशे की लत और पुनर्वास में विशेषज्ञता।", en: "Specializes in addiction and rehabilitation.", bho: "नशा के लत अवुरी पुनर्वास में विशेषज्ञता।" },
    fee: 750,
    imageUrl: "👩‍⚕️",
    location: "गुप्ता डी-एडिक्शन सेंटर, जंगलिया मोड़, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. नौशाद अली", en: "Dr. Naushad Ali", bho: "डॉ. नौशाद अली" },
    description: { hi: "वृद्धावस्था मनोचिकित्सा और स्मृति विकारों के विशेषज्ञ।", en: "Expert in geriatric psychiatry and memory disorders.", bho: "वृद्धावस्था मनोचिकित्सा अवुरी स्मृति विकार के विशेषज्ञ।" },
    fee: 650,
    imageUrl: "👨‍⚕️",
    location: "अली माइंड क्लिनिक, ब्लॉक रोड, गोपालगंज",
    aiHint: "indian male doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. तान्या दीक्षित", en: "Dr. Tanya Dixit", bho: "डॉ. तान्या दीक्षित" },
    description: { hi: "एक दयालु मनोचिकित्सक जो टॉक थेरेपी और परामर्श प्रदान करती हैं।", en: "A compassionate psychiatrist providing talk therapy and counseling.", bho: "एक दयालु मनोचिकित्सक जे टॉक थेरेपी अवुरी परामर्श प्रदान करेली।" },
    fee: 700,
    imageUrl: "👩‍⚕️",
    location: "दीक्षित काउंसलिंग सर्विसेज, सिनेमा रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  },
  {
    name: { hi: "डॉ. जूली सेंगर", en: "Dr. Juli Sengar", bho: "डॉ. जूली सेंगर" },
    description: { hi: "युवा वयस्कों और छात्रों के लिए मानसिक स्वास्थ्य देखभाल में विशेषज्ञता।", en: "Specializes in mental healthcare for young adults and students.", bho: "युवा वयस्क अवुरी छात्र खातिर मानसिक स्वास्थ्य देखभाल में विशेषज्ञता।" },
    fee: 720,
    imageUrl: "👩‍⚕️",
    location: "सेंगर माइंडफुलनेस सेंटर, कचहरी रोड, गोपालगंज",
    aiHint: "indian female doctor",
    specialization: { key: "Psychiatrist", name: { hi: "मनोचिकित्सक", en: "Psychiatrist", bho: "दिमागी डॉक्टर" } }
  }
];

export const initialDoctorsData: Doctor[] = doctorsList.map((doctor, index) => ({
    ...doctor,
    id: `${doctor.specialization.key.toLowerCase().replace(/ /g, '-')}-${index + 1}`,
}));

    