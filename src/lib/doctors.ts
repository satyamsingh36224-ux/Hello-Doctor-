
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
        location: "महादेवा रोड, सीवान",
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
    {
        id: "dr-shailendra-kumar-31",
        city: "siwan",
        name: { hi: "डॉ. शैलेंद्र कुमार", en: "Dr. Shailendra Kumar", bho: "डॉ. शैलेंद्र कुमार" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "हड्डियों और जोड़ों के विशेषज्ञ।", en: "Specialist in bones and joints.", bho: "हड्डी आ जोड़ा के विशेषज्ञ।" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "शांति वटिका, सीवान",
        aiHint: "orthopedic surgeon"
    },
    {
        id: "dr-reena-kumari-41",
        city: "siwan",
        name: { hi: "डॉ. रीना कुमारी", en: "Dr. Reena Kumari", bho: "डॉ. रीना कुमारी" },
        specialization: { key: "Gynecologist", name: { hi: "स्त्री रोग विशेषज्ञ", en: "Gynecologist", bho: "मेहरारू के डॉक्टर" } },
        description: { hi: "अनुभवी स्त्री रोग विशेषज्ञ।", en: "Experienced gynecologist.", bho: "अनुभवी स्त्री रोग विशेषज्ञ।" },
        fee: 400,
        imageUrl: "👩‍⚕️",
        location: "हॉस्पिटल रोड, सीवान",
        aiHint: "indian female doctor"
    },
    {
        id: "dr-shashi-bhushan-51",
        city: "siwan",
        name: { hi: "डॉ. शशि भूषण", en: "Dr. Shashi Bhushan", bho: "डॉ. शशि भूषण" },
        specialization: { key: "Dermatologist", name: { hi: "त्वचा विशेषज्ञ", en: "Dermatologist", bho: "चमड़ी के डॉक्टर" } },
        description: { hi: "त्वचा और बालों के रोगों के विशेषज्ञ।", en: "Specialist in skin and hair diseases.", bho: "चमड़ी आ बाल के रोग के विशेषज्ञ।" },
        fee: 350,
        imageUrl: "👨‍⚕️",
        location: "बबुनिया रोड, सीवान",
        aiHint: "dermatologist doctor"
    },

    // --- GOPALGANJ DOCTORS (GENERAL & PREVIOUS) ---
    {
        id: "dr-piyush-kumar-gp-1",
        city: "gopalganj",
        name: { hi: "डॉ. पीयूष कुमार", en: "Dr. Piyush Kumar", bho: "डॉ. पीयूष कुमार" },
        specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } },
        description: { hi: "माया अस्पताल में कार्यरत अनुभवी सामान्य चिकित्सक।", en: "Experienced General Physician at Maya Hospital.", bho: "माया अस्पताल में कार्यरत अनुभवी साधारण डॉक्टर।" },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "माया अस्पताल, हॉस्पिटल रोड, बनकटा, गोपालगंज",
        aiHint: "indian male doctor"
    },
    {
        id: "dr-r-sunil-kumar-gp-2",
        city: "gopalganj",
        name: { hi: "डॉ. आर. सुनील कुमार", en: "Dr. R. Sunil Kumar", bho: "डॉ. आर. सुनील कुमार" },
        specialization: { key: "Pediatrician", name: { hi: "बच्चों का चिकित्सक", en: "Pediatrician", bho: "लइकन के डॉक्टर" } },
        description: { hi: "तुलसी नर्सिंग होम में बच्चों के विशेषज्ञ।", en: "Child specialist at Tulsi Nursing Home.", bho: "तुलसी नर्सिंग होम में लइकन के विशेषज्ञ।" },
        fee: 400,
        imageUrl: "🧑‍⚕️",
        location: "तुलसी नर्सिंग होम, जंगलिया रोड, पुरानी चौक, गोपालगंज",
        aiHint: "pediatrician doctor"
    },
    {
        id: "dr-rahul-kumar-singh-gp-4",
        city: "gopalganj",
        name: { hi: "डॉ. राहुल कुमार सिंह", en: "Dr. Rahul Kumar Singh", bho: "डॉ. राहुल कुमार सिंह" },
        specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } },
        description: { hi: "मधुमेह प्रबंधन के विशेषज्ञ चिकित्सक।", en: "Specialist in Diabetes Management.", bho: "मधुमेह प्रबंधन के विशेषज्ञ डॉक्टर।" },
        fee: 350,
        imageUrl: "🧑‍⚕️",
        location: "एडवांस सेंटर फॉर डायबिटीज मैनेजमेंट, कॉलेज रोड, बनकटा, गोपालगंज",
        aiHint: "diabetes specialist"
    },
    {
        id: "dr-sk-pathak-gp-5",
        city: "gopalganj",
        name: { hi: "डॉ. एस. के. पाठक", en: "Dr. S. K. Pathak", bho: "डॉ. एस. के. पाठक" },
        specialization: { key: "Orthopedic Surgeon", name: { hi: "हड्डी रोग विशेषज्ञ", en: "Orthopedic Surgeon", bho: "हड्डी के डॉक्टर" } },
        description: { hi: "हर्षण अस्पताल में हड्डी रोग विशेषज्ञ।", en: "Orthopedic Surgeon at Harsan Hospital.", bho: "हर्षण अस्पताल में हड्डी के डॉक्टर।" },
        fee: 450,
        imageUrl: "👨‍⚕️",
        location: "हर्षण अस्पताल, मालवीय नगर, पुरानी चौक, गोपालगंज",
        aiHint: "orthopedic surgeon"
    },
    {
        id: "dr-suman-kumar-gp-6",
        city: "gopalganj",
        name: { hi: "डॉ. सुमन कुमार", en: "Dr. Suman Kumar", bho: "डॉ. सुमन कुमार" },
        specialization: { key: "General Surgeon", name: { hi: "जनरल सर्जन", en: "General Surgeon", bho: "जनरल सर्जन" } },
        description: { hi: "सुमन मेडिकल रिसर्च सेंटर में अनुभवी सर्जन।", en: "Experienced Surgeon at Suman Medical Research Centre.", bho: "सुमन मेडिकल रिसर्च सेंटर में अनुभवी सर्जन।" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सुमन मेडिकल रिसर्च सेंटर, मेन मार्केट एरिया, मीरगंज, गोपालगंज",
        aiHint: "general surgeon"
    },
    {
        id: "dr-rahul-ranjan-gp-7",
        city: "gopalganj",
        name: { hi: "डॉ. राहुल रंजन", en: "Dr. Rahul Ranjan", bho: "डॉ. राहुल रंजन" },
        specialization: { key: "ENT Specialist", name: { hi: "ईएनटी विशेषज्ञ", en: "ENT Specialist", bho: "नाक-कान-गला के डॉक्टर" } },
        description: { hi: "नाक, कान और गला रोगों के विशेषज्ञ।", en: "ENT specialist in Gopalganj.", bho: "नाक, कान आ गला रोग के विशेषज्ञ।" },
        fee: 300,
        imageUrl: "🧑‍⚕️",
        location: "क्लीनिक - जंगलिया मोड़ रोड, अंबेडकर चौक, गोपालगंज",
        aiHint: "ent specialist"
    },
    {
        id: "dr-rp-singh-gp-8",
        city: "gopalganj",
        name: { hi: "डॉ. आर. पी. सिंह", en: "Dr. R. P. Singh", bho: "डॉ. आर. पी. सिंह" },
        specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } },
        description: { hi: "अमृतेश अस्पताल में वरिष्ठ सामान्य चिकित्सक।", en: "Senior General Physician at Amritesh Hospital.", bho: "अमृतेश अस्पताल में वरिष्ठ साधारण डॉक्टर।" },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "अमृतेश अस्पताल, आर्ट कॉलेज रोड, NH-85, भितभेरवा, गोपालगंज",
        aiHint: "senior physician"
    },
    {
        id: "dr-anup-kumar-tiwari-gp-9",
        city: "gopalganj",
        name: { hi: "डॉ. अनुप कुमार तिवारी", en: "Dr. Anup Kumar Tiwari", bho: "डॉ. अनुप कुमार तिवारी" },
        specialization: { key: "Ophthalmologist", name: { hi: "नेत्र रोग विशेषज्ञ", en: "Ophthalmologist", bho: "आँख के डॉक्टर" } },
        description: { hi: "आँखों के रोगों के विशेषज्ञ।", en: "Specialist in eye diseases.", bho: "आँख के रोग के विशेषज्ञ।" },
        fee: 350,
        imageUrl: "🧑‍⚕️",
        location: "क्लीनिक - पुलिस लाइन रोड, भितभेरवा, गोपालगंज",
        aiHint: "eye specialist"
    },
    {
        id: "dr-mm-prasad-gp-10",
        city: "gopalganj",
        name: { hi: "डॉ. एम. एम. प्रसाद", en: "Dr. M. M. Prasad", bho: "डॉ. एम. एम. प्रसाद" },
        specialization: { key: "General Physician", name: { hi: "सामान्य चिकित्सक", en: "General Physician", bho: "साधारण डॉक्टर" } },
        description: { hi: "अमृतेश अस्पताल में कार्यरत अनुभवी चिकित्सक।", en: "Experienced physician at Amritesh Hospital.", bho: "अमृतेश अस्पताल में कार्यरत अनुभवी डॉक्टर।" },
        fee: 300,
        imageUrl: "👨‍⚕️",
        location: "अमृतेश अस्पताल, आर्ट कॉलेज रोड, NH-85, भितभेरवा, गोपालगंज",
        aiHint: "experienced doctor"
    },

    // --- GOPALGANJ SPECIALIZED CARDIOLOGISTS (NEW LIST) ---
    {
        id: "dr-shadab-ahmad-gp-cardio-1",
        city: "gopalganj",
        name: { hi: "डॉ. शादाब अहमद", en: "Dr. Shadab Ahmad", bho: "डॉ. शादाब अहमद" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "इंटरवेंशनल कार्डियोलॉजिस्ट (MBBS, MD, DM कार्डियोलॉजी)", en: "Interventional Cardiologist (MBBS, MD, DM Cardiology)", bho: "इंटरवेंशनल कार्डियोलॉजिस्ट (MBBS, MD, DM कार्डियोलॉजी)" },
        fee: 600,
        imageUrl: "🧑‍⚕️",
        location: "शादाब हार्ट एंड लंग केयर सेंटर, गोपालगंज",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-rajeev-dayal-gp-cardio-2",
        city: "gopalganj",
        name: { hi: "डॉ. राजीव दयाल", en: "Dr. Rajeev Dayal", bho: "डॉ. राजीव दयाल" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "कार्डियोलॉजिस्ट (MBBS, MD कार्डियो)", en: "Cardiologist (MBBS, MD Cardio)", bho: "कार्डियोलॉजिस्ट (MBBS, MD कार्डियो)" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "माया अस्पताल, सदर अस्पताल गेट के सामने, अम्बेडकर चौक, गोपालगंज",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-rajeev-ranjan-gp-cardio-3",
        city: "gopalganj",
        name: { hi: "डॉ. राजीव रंजन", en: "Dr. Rajeev Ranjan", bho: "डॉ. राजीव रंजन" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "क्लिनिकल कार्डियोलॉजिस्ट और सलाहकार फिजिशियन (MBBS, MD)", en: "Clinical Cardiologist & Consultant Physician (MBBS, MD)", bho: "क्लिनिकल कार्डियोलॉजिस्ट आ सलाहकार फिजिशियन (MBBS, MD)" },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "एटलांटिस अस्पताल, ग्राउंड फ्लोर, कौशल्या चौक, गोसाईं टोला रोड, तकिया, गोपालगंज",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-kunal-kumar-singh-gp-cardio-4",
        city: "gopalganj",
        name: { hi: "डॉ. कुणाल कुमार सिंह", en: "Dr. Kunal Kumar Singh", bho: "डॉ. कुणाल कुमार सिंह" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "कार्डियोलॉजिस्ट / हृदय रोग विशेषज्ञ", en: "Cardiologist / Heart Specialist", bho: "कार्डियोलॉजिस्ट / हृदय रोग विशेषज्ञ" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सर्वज्ञ अस्पताल, SBI बैंक के पास, जंगलिया मोहल्ला, गोपालगंज",
        aiHint: "heart specialist"
    },
    {
        id: "dr-prakash-chand-shahi-gp-cardio-5",
        city: "gopalganj",
        name: { hi: "डॉ. प्रकाश चंद शाही", en: "Dr. Prakash Chand Shahi", bho: "डॉ. प्रकाश चंद शाही" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "हृदय रोग विशेषज्ञ", en: "Heart Specialist", bho: "हृदय रोग विशेषज्ञ" },
        fee: 500,
        imageUrl: "🧑‍⚕️",
        location: "पल्स हार्ट सेंटर, गोपालगंज",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-shashi-bhushan-prasad-gp-cardio-6",
        city: "gopalganj",
        name: { hi: "डॉ. शशि भूषण प्रसाद", en: "Dr. Shashi Bhushan Prasad", bho: "डॉ. शशि भूषण प्रसाद" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "सलाहकार फिजिशियन और नॉन-इनवेसिव कार्डियोलॉजी केयर", en: "Consultant Physician & Non-Invasive Cardiology Care", bho: "सलाहकार फिजिशियन आ नॉन-इनवेसिव कार्डियोलॉजी केयर" },
        fee: 400,
        imageUrl: "👨‍⚕️",
        location: "प्रसाद क्लिनिक, अस्पताल रोड, गोपालगंज",
        aiHint: "indian doctor"
    },
    {
        id: "dr-s-ahmad-gp-cardio-7",
        city: "gopalganj",
        name: { hi: "डॉ. एस. अहमद", en: "Dr. S. Ahmad", bho: "डॉ. एस. अहमद" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "हृदय रोग सलाहकार", en: "Heart Care Consultant", bho: "हृदय रोग सलाहकार" },
        fee: 400,
        imageUrl: "🧑‍⚕️",
        location: "गोपालगंज हार्ट क्लिनिक, मेन मार्केट, गोपालगंज",
        aiHint: "cardiologist doctor"
    },
    {
        id: "dr-r-k-singh-gp-cardio-8",
        city: "gopalganj",
        name: { hi: "डॉ. आर. के. सिंह", en: "Dr. R. K. Singh", bho: "डॉ. आर. के. सिंह" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "सलाहकार फिजिशियन और कार्डियो-डायबिटिक प्रबंधन", en: "Consultant Physician & Cardio-Diabetic Management", bho: "सलाहकार फिजिशियन आ कार्डियो-डायबिटिक प्रबंधन" },
        fee: 450,
        imageUrl: "👨‍⚕️",
        location: "शाम्भवी अस्पताल और हृदय देखभाल केंद्र, गोपालगंज",
        aiHint: "diabetes specialist"
    },
    {
        id: "dr-gaurav-pandy-gp-cardio-9",
        city: "gopalganj",
        name: { hi: "डॉ. गौरव पाण्डेय", en: "Dr. Gaurav Pandey", bho: "डॉ. गौरव पाण्डेय" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "विजिटिंग कार्डियोलॉजिस्ट / आपातकालीन कार्डियक केयर", en: "Visiting Cardiologist / Emergency Cardiac Care", bho: "विजिटिंग कार्डियोलॉजिस्ट / आपातकालीन कार्डियक केयर" },
        fee: 600,
        imageUrl: "🧑‍⚕️",
        location: "न्यू गोरखपुर मेडिसिटी अस्पताल शाखा, गोपालगंज",
        aiHint: "emergency cardiologist"
    },
    {
        id: "dr-abhishek-ranjan-gp-cardio-10",
        city: "gopalganj",
        name: { hi: "डॉ. अभिषेक रंजन", en: "Dr. Abhishek Ranjan", bho: "डॉ. अभिषेक रंजन" },
        specialization: { key: "Cardiologist", name: { hi: "हृदय रोग विशेषज्ञ", en: "Cardiologist", bho: "हृदय रोग विशेषज्ञ" } },
        description: { hi: "क्रिटिकल केयर और आपातकालीन कार्डियक प्रबंधन", en: "Critical Care & Emergency Cardiac Management", bho: "क्रिटिकल केयर आ आपातकालीन कार्डियक प्रबंधन" },
        fee: 500,
        imageUrl: "👨‍⚕️",
        location: "सक्षम अस्पताल, कमला राय कॉलेज रोड, भितभेरवा, गोपालगंज",
        aiHint: "critical care doctor"
    }
];
