import type { Doctor } from "@/types";
import { Brain, Heart, Stethoscope, Bone, Baby, User, Ear, Eye, UserCog } from 'lucide-react';

export const specializationMap = [
  { name: "हृदय रोग विशेषज्ञ", icon: Heart },
  { name: "बच्चों का चिकित्सक", icon: Baby },
  { name: "त्वचा विशेषज्ञ", icon: User },
  { name: "स्त्री रोग विशेषज्ञ", icon: Stethoscope },
  { name: "हड्डी रोग विशेषज्ञ", icon: Bone },
  { name: "सामान्य चिकित्सक", icon: Stethoscope },
  { name: "जनरल सर्जन", icon: Stethoscope },
  { name: "तंत्रिका विज्ञानी", icon: Brain },
  { name: "ईएनटी विशेषज्ञ", icon: Ear },
  { name: "नेत्र रोग विशेषज्ञ", icon: Eye },
  { name: "मनोचिकित्सक", icon: UserCog },
];

const doctorsList: { specialization: string, doctors: Omit<Doctor, 'id' | 'specialization'>[] }[] = [
  {
    specialization: "हृदय रोग विशेषज्ञ",
    doctors: [
      { name: "डॉ. रमेश कुमार", description: "एक प्रमुख हृदय रोग विशेषज्ञ, जो हृदय से संबंधित बीमारियों और निवारक देखभाल में विशेषज्ञता रखते हैं।", fee: 500, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. अजय गुप्ता", description: "हृदय की जटिल स्थितियों के प्रबंधन में विशेषज्ञ। रोगी की देखभाल के लिए जाने जाते हैं।", fee: 550, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. संगीता वर्मा", description: "उच्च रक्तचाप और कोलेस्ट्रॉल प्रबंधन में विशेषज्ञता।", fee: 500, imageUrl: "👩‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. राहुल तिवारी", description: "इकोकार्डियोग्राफी और एंजियोग्राफी प्रक्रियाओं में अनुभवी।", fee: 600, imageUrl: "👨‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. नेहा चौधरी", description: "निवारक कार्डियोलॉजी और जीवनशैली संशोधन पर ध्यान केंद्रित करती हैं।", fee: 450, imageUrl: "👩‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. दीपक सिंह", description: "अतालता (arrhythmia) और हृदय ताल विकारों के विशेषज्ञ।", fee: 650, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. पूजा अग्रवाल", description: "हृदय विफलता (heart failure) के प्रबंधन में व्यापक अनुभव।", fee: 550, imageUrl: "👩‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. विशाल आनंद", description: "हस्तक्षेपीय कार्डियोलॉजी (interventional cardiology) प्रक्रियाओं में कुशल।", fee: 700, imageUrl: "👨‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. किरण देसाई", description: "महिलाओं में हृदय रोग पर विशेष ध्यान देने वाली विशेषज्ञ।", fee: 500, imageUrl: "👩‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. मोहित कश्यप", description: "जन्मजात हृदय दोषों के निदान और उपचार में विशेषज्ञ।", fee: 600, imageUrl: "👨‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "बच्चों का चिकित्सक",
    doctors: [
      { name: "डॉ. सुनीता शर्मा", description: "बच्चों के स्वास्थ्य और कल्याण के लिए समर्पित एक बाल रोग विशेषज्ञ।", fee: 400, imageUrl: "👩‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. रामप्रवेश सिंह", description: "शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "सिविल लाइंस, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. गौरव अग्रवाल", description: "एक समर्पित बाल रोग विशेषज्ञ जो शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. मंगेश्वर सिंह", description: "एक अनुभवी बाल रोग विशेषज्ञ जो बच्चों के स्वास्थ्य की देखभाल में विशेषज्ञता रखते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. नौशाद आलम", description: "एक समर्पित बाल रोग विशेषज्ञ जो शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. आर. के. सिन्हा", description: "बच्चों के टीकाकरण और पोषण संबंधी परामर्श में विशेषज्ञ।", fee: 400, imageUrl: "👨‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. सीमा कुमारी", description: "नवजात देखभाल और विकासात्मक निगरानी में अनुभवी।", fee: 450, imageUrl: "👩‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. विजय प्रताप", description: "बचपन की एलर्जी और अस्थमा के इलाज में माहिर।", fee: 500, imageUrl: "👨‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. अनुपमा झा", description: "किशोर स्वास्थ्य और परामर्श पर विशेष ध्यान।", fee: 400, imageUrl: "👩‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. संजय चौधरी", description: "बच्चों में संक्रामक रोगों के निदान और प्रबंधन के विशेषज्ञ।", fee: 450, imageUrl: "👨‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "त्वचा विशेषज्ञ",
    doctors: [
      { name: "डॉ. अनिल सिंह", description: "एक अनुभवी त्वचा विशेषज्ञ जो त्वचा, बाल और नाखूनों की कई स्थितियों का इलाज करते हैं।", fee: 600, imageUrl: "👨‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. रश्मि देसाई", description: "कॉस्मेटिक त्वचाविज्ञान और एंटी-एजिंग उपचार में विशेषज्ञ।", fee: 700, imageUrl: "👩‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. विवेक मेहरा", description: "मुँहासे, निशान और रंजकता विकारों के लिए उन्नत उपचार प्रदान करते हैं।", fee: 650, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. स्वाति नायक", description: "बालों के झड़ने का इलाज और हेयर ट्रांसप्लांट प्रक्रियाओं में माहिर।", fee: 750, imageUrl: "👩‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. अर्जुन राठौड़", description: "सोरायसिस, एक्जिमा और विटिलिगो जैसे चर्म रोगों के विशेषज्ञ।", fee: 600, imageUrl: "👨‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. कविता जैन", description: "लेजर उपचार और त्वचा कायाकल्प (skin rejuvenation) में विशेषज्ञता।", fee: 800, imageUrl: "👩‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. सुमित बंसल", description: "त्वचा कैंसर की जांच और त्वचाविज्ञान सर्जरी में अनुभवी।", fee: 700, imageUrl: "👨‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. गरिमा पांडे", description: "बच्चों की त्वचा संबंधी समस्याओं के इलाज में माहिर।", fee: 550, imageUrl: "👩‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. नीरज खन्ना", description: "एलर्जी त्वचा परीक्षण और इम्यूनोथेरेपी के विशेषज्ञ।", fee: 650, imageUrl: "👨‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. मानसी अग्रवाल", description: "प्राकृतिक और समग्र त्वचा देखभाल दृष्टिकोणों पर ध्यान केंद्रित करती हैं।", fee: 600, imageUrl: "👩‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "स्त्री रोग विशेषज्ञ",
    doctors: [
        { name: "डॉ. मीना गुप्ता", description: "एक दयालु स्त्री रोग विशेषज्ञ और प्रसूति विशेषज्ञ जो महिलाओं की स्वास्थ्य सेवाओं की पूरी श्रृंखला प्रदान करती हैं।", fee: 550, imageUrl: "👩‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. रेखा यादव", description: "उच्च जोखिम वाली गर्भावस्था और बांझपन उपचार में विशेषज्ञ।", fee: 600, imageUrl: "👩‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. अशोक प्रजापति", description: "लैप्रोस्कोपिक स्त्री रोग सर्जरी में अनुभवी।", fee: 650, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. वंदना कुमारी", description: "पीसीओएस (PCOS) और मासिक धर्म संबंधी विकारों के प्रबंधन में माहिर।", fee: 500, imageUrl: "👩‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. सुनील खत्री", description: "पारिवारिक नियोजन और गर्भनिरोधक परामर्श प्रदान करते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अंजलि पाठक", description: "रजोनिवृत्ति (menopause) स्वास्थ्य और हार्मोन रिप्लेसमेंट थेरेपी पर ध्यान केंद्रित करती हैं।", fee: 550, imageUrl: "👩‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. राकेश रोशन", description: "नियमित प्रसव पूर्व देखभाल और प्रसव सेवाएं प्रदान करते हैं।", fee: 500, imageUrl: "👨‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. प्रिया राजवंश", description: "किशोर स्त्री रोग और यौन स्वास्थ्य शिक्षा में विशेषज्ञता।", fee: 450, imageUrl: "👩‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. कमल किशोर", description: "यूरोगायनेकोलॉजी और पेल्विक फ्लोर विकारों के विशेषज्ञ।", fee: 700, imageUrl: "👨‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. श्वेता सिंह", description: "प्रजनन चिकित्सा और सहायक प्रजनन तकनीकों में माहिर।", fee: 750, imageUrl: "👩‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "हड्डी रोग विशेषज्ञ",
    doctors: [
        { name: "डॉ. विक्रम पटेल", description: "एक प्रसिद्ध हड्डी रोग विशेषज्ञ, जिन्हें जोड़ों के प्रतिस्थापन, खेल की चोटों और फ्रैक्चर की देखभाल में विशेषज्ञता हासिल है।", fee: 700, imageUrl: "👨‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. संदीप चौहान", description: "रीढ़ की हड्डी की सर्जरी और स्पाइनल विकारों के विशेषज्ञ।", fee: 800, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. मनीषा सिन्हा", description: "आर्थ्रोस्कोपिक सर्जरी और खेल चिकित्सा में माहिर।", fee: 750, imageUrl: "👩‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. अभिनव प्रकाश", description: "बच्चों के हड्डी रोग और जन्मजात विकृतियों के विशेषज्ञ।", fee: 650, imageUrl: "👨‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. प्रीति भटनागर", description: "हाथ और कलाई की सर्जरी में विशेषज्ञता।", fee: 700, imageUrl: "👩‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. रोहित नागपाल", description: "कूल्हे और घुटने के प्रतिस्थापन सर्जरी में व्यापक अनुभव।", fee: 850, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. आस्था गुलाटी", description: "पैर और टखने की समस्याओं के लिए गैर-सर्जिकल उपचार पर ध्यान केंद्रित करती हैं।", fee: 600, imageUrl: "👩‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. तरुण गोयल", description: "ट्रॉमा और फ्रैक्चर देखभाल के विशेषज्ञ।", fee: 700, imageUrl: "👨‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. साक्षी भारद्वाज", description: "ऑस्टियोपोरोसिस और चयापचय हड्डी रोगों का प्रबंधन करती हैं।", fee: 650, imageUrl: "👩‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. फिरोज खान", description: "हड्डी के ट्यूमर और मस्कुलोस्केलेटल ऑन्कोलॉजी में माहिर।", fee: 900, imageUrl: "👨‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "सामान्य चिकित्सक",
    doctors: [
        { name: "डॉ. प्रिया देसाई", description: "एक विश्वसनीय सामान्य चिकित्सक जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करती हैं।", fee: 300, imageUrl: "👩‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. देवता सिंह", description: "एक अनुभवी सामान्य चिकित्सक जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "मेडिकल हॉल, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अभिषेक शेखर सिन्हा", description: "एक जाने-माने सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "टाउन हॉल, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. शिवेंद्र कुमार तिवारी", description: "एक अनुभवी सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "सिविल लाइंस, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अभिषेक रंजन", description: "एक जाने-माने सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अरविंद कुमार", description: "एक विश्वसनीय सामान्य चिकित्सक हैं जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करते हैं।", fee: 300, imageUrl: "👨‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. मुकेश कुमार सिंह", description: "सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. श्याम मोहन सिंह", description: "बीमारियों के निदान और उपचार के साथ-साथ निवारक देखभाल पर भी ध्यान केंद्रित करते हैं।", fee: 300, imageUrl: "👨‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. विनीत विनोद कुमार यादव", description: "एक अनुभवी सामान्य चिकित्सक हैं जो रोगी के समग्र स्वास्थ्य पर ध्यान केंद्रित करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. सौरभ अग्रवाल", description: "एक अनुभवी सामान्य चिकित्सक हैं जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "सिनेमा रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "जनरल सर्जन",
    doctors: [
        { name: "डॉ. शंभू नाथ सिंह", description: "एक कुशल जनरल सर्जन हैं, जो विभिन्न प्रकार की सर्जिकल प्रक्रियाओं में विशेषज्ञता रखते हैं।", fee: 800, imageUrl: "👨‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. रविंद्र प्रसाद", description: "लैप्रोस्कोपिक और न्यूनतम इनवेसिव सर्जरी में विशेषज्ञ।", fee: 900, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. नंदिता बोस", description: "स्तन और कोलोरेक्टल सर्जरी में माहिर।", fee: 850, imageUrl: "👩‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. आलोक वर्मा", description: "ट्रॉमा और आपातकालीन सर्जरी में व्यापक अनुभव।", fee: 800, imageUrl: "👨‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. चेतन शर्मा", description: "हर्निया और पित्ताशय की थैली की सर्जरी के विशेषज्ञ।", fee: 750, imageUrl: "👨‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. दीपाली सहाय", description: "एंडोक्राइन सर्जरी, विशेष रूप से थायरॉयड और पैराथायराइड में रुचि।", fee: 950, imageUrl: "👩‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. अमरेंद्र कुमार", description: "वैस्कुलर और एंडोवैस्कुलर सर्जरी में कुशल।", fee: 1000, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. सोनल मानसिंह", description: "जठरांत्र (gastrointestinal) संबंधी सर्जरी पर ध्यान केंद्रित करती हैं।", fee: 900, imageUrl: "👩‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. प्रणव मिश्रा", description: "बच्चों की सर्जरी के विशेषज्ञ।", fee: 850, imageUrl: "👨‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. बृजेश यादव", description: "बेरिएट्रिक और मेटाबोलिक सर्जरी में माहिर।", fee: 1200, imageUrl: "👨‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "तंत्रिका विज्ञानी",
    doctors: [
        { name: "डॉ. राजेश वर्मा", description: "एक अनुभवी न्यूरोलॉजिस्ट हैं जो मस्तिष्क, रीढ़ की हड्डी और तंत्रिकाओं के विकारों का इलाज करते हैं।", fee: 900, imageUrl: "👨‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अनीता भल्ला", description: "मिर्गी और स्ट्रोक के प्रबंधन में विशेषज्ञ।", fee: 950, imageUrl: "👩‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. करण मल्होत्रा", description: "पार्किंसंस रोग और अन्य गति विकारों में माहिर।", fee: 1000, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. सिमरन कौर", description: "माइग्रेन और अन्य सिरदर्द विकारों पर ध्यान केंद्रित करती हैं।", fee: 850, imageUrl: "👩‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. रोहन देसाई", description: "मल्टीपल स्केलेरोसिस और अन्य डिमाइलेटिंग रोगों के विशेषज्ञ।", fee: 1100, imageUrl: "👨‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. ईशा चावला", description: "न्यूरोमस्कुलर विकारों और ईएमजी/एनसीएस अध्ययनों में विशेषज्ञता।", fee: 900, imageUrl: "👩‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. वरुण सेठी", description: "मनोभ्रंश (dementia) और अल्जाइमर रोग के निदान और प्रबंधन में अनुभवी।", fee: 1050, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. श्रेया नायर", description: "बच्चों के न्यूरोलॉजी में माहिर।", fee: 950, imageUrl: "👩‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. आदित्य झा", description: "तंत्रिका संबंधी दर्द और परिधीय न्यूरोपैथी के उपचार के विशेषज्ञ।", fee: 900, imageUrl: "👨‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. पारुल गंभीर", description: "स्लीप डिसऑर्डर और न्यूरोफिज़ियोलॉजी में विशेषज्ञता।", fee: 850, imageUrl: "👩‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "ईएनटी विशेषज्ञ",
    doctors: [
        { name: "डॉ. अंजलि मेहता", description: "कान, नाक और गले से संबंधित विकारों के निदान और उपचार में माहिर हैं।", fee: 450, imageUrl: "👩‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. हरीश चंद्र", description: "साइनसिसिटिस और एलर्जी के लिए एंडोस्कोपिक साइनस सर्जरी में विशेषज्ञ।", fee: 500, imageUrl: "👨‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. नूपुर जैन", description: "सुनने की हानि और टिनिटस के प्रबंधन में विशेषज्ञता।", fee: 550, imageUrl: "👩‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. सौरभ पांडे", description: "बच्चों के ईएनटी और टॉन्सिल/एडेनोइड समस्याओं में माहिर।", fee: 450, imageUrl: "👨‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. पल्लवी सिन्हा", description: "आवाज विकार और लैरींगोलॉजी पर ध्यान केंद्रित करती हैं।", fee: 600, imageUrl: "👩‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. मनीष गोयल", description: "खर्राटों और स्लीप एपनिया के लिए सर्जिकल और गैर-सर्जिकल उपचार।", fee: 650, imageUrl: "👨‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. दिव्या शर्मा", description: "सिर और गर्दन की सर्जरी में अनुभवी।", fee: 700, imageUrl: "👩‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. गिरीश कुमार", description: "चक्कर (vertigo) और संतुलन विकारों के विशेषज्ञ।", fee: 500, imageUrl: "👨‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. ऋचा त्रिपाठी", description: "नाक की कॉस्मेटिक सर्जरी (राइनोप्लास्टी) में माहिर।", fee: 800, imageUrl: "👩‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. विशाल सक्सेना", description: "कान के पर्दे की सर्जरी (टिम्पेनोप्लास्टी) में कुशल।", fee: 600, imageUrl: "👨‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "नेत्र रोग विशेषज्ञ",
    doctors: [
        { name: "डॉ. दीपक चौहान", description: "एक कुशल नेत्र रोग विशेषज्ञ हैं जो आंखों की बीमारियों का इलाज करते हैं और दृष्टि देखभाल प्रदान करते हैं।", fee: 500, imageUrl: "👨‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. मीनाक्षी नायर", description: "मोतियाबिंद और अपवर्तक सर्जरी (LASIK) में विशेषज्ञ।", fee: 600, imageUrl: "👩‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. प्रमोद भार्गव", description: "ग्लूकोमा के निदान और प्रबंधन में माहिर।", fee: 550, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. आरती झा", description: "रेटिना और विट्रियस रोगों पर ध्यान केंद्रित करती हैं।", fee: 650, imageUrl: "👩‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. संजय कश्यप", description: "बच्चों के नेत्र विज्ञान और स्ट्रैबिस्मस (भेंगापन) के विशेषज्ञ।", fee: 500, imageUrl: "👨‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. निकिता गुप्ता", description: "कॉर्निया और बाहरी नेत्र रोगों में विशेषज्ञता।", fee: 600, imageUrl: "👩‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. विकास टंडन", description: "न्यूरो-नेत्र विज्ञान और ऑप्टिक तंत्रिका विकारों में अनुभवी।", fee: 700, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. ज्योति सिंह", description: "ऑकुलोप्लास्टी और कॉस्मेटिक नेत्र सर्जरी में माहिर।", fee: 750, imageUrl: "👩‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. अंकुर श्रीवास्तव", description: "यूवाइटिस और ओकुलर सूजन के विशेषज्ञ।", fee: 650, imageUrl: "👨‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. शालिनी पुरी", description: "कम दृष्टि सहायता और पुनर्वास पर ध्यान केंद्रित करती हैं।", fee: 550, imageUrl: "👩‍⚕️", location: "पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "मनोचिकित्सक",
    doctors: [
        { name: "डॉ. पवन कुमार", description: "एक अनुभवी मनोचिकित्सक हैं जो मानसिक स्वास्थ्य संबंधी समस्याओं का इलाज करते हैं।", fee: 650, imageUrl: "👨‍⚕️", location: "चंद्रगोकुल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अदिति राव", description: "अवसाद, चिंता और पैनिक डिसऑर्डर में विशेषज्ञ।", fee: 700, imageUrl: "👩‍⚕️", location: "अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. समीर चक्रवर्ती", description: "नशा मुक्ति और व्यसन मनोचिकित्सा में माहिर।", fee: 750, imageUrl: "👨‍⚕️", location: "पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. फातिमा खान", description: "बाल और किशोर मनोचिकित्सा पर ध्यान केंद्रित करती हैं।", fee: 600, imageUrl: "👩‍⚕️", location: "बस स्टैंड के पास, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. हेमंत जोशी", description: "सिज़ोफ्रेनिया और अन्य मानसिक विकारों के प्रबंधन के विशेषज्ञ।", fee: 800, imageUrl: "👨‍⚕️", location: "थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. मालविका अय्यर", description: "विवाह और पारिवारिक चिकित्सा में विशेषज्ञता।", fee: 700, imageUrl: "👩‍⚕️", location: "जाधवपुर रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. नितिन भारद्वाज", description: "वृद्धावस्था मनोचिकित्सा और मनोभ्रंश से संबंधित व्यवहार संबंधी मुद्दों में अनुभवी।", fee: 750, imageUrl: "👨‍⚕️", location: "कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. प्रियंका दास", description: "खाने के विकार और शरीर की छवि संबंधी चिंताओं में माहिर।", fee: 650, imageUrl: "👩‍⚕️", location: "मौनिया चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. सुशांत बिष्ट", description: "फोरेंसिक मनोचिकित्सा के विशेषज्ञ।", fee: 900, imageUrl: "👨‍⚕️", location: "अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. उर्वी शाह", description: "संज्ञानात्मक व्यवहार थेरेपी (सीबीटी) और माइंडफुलनेस-आधारित उपचार प्रदान करती हैं।", fee: 700, imageUrl: "👩‍⚕️", location: "गोशाला रोड, गोपालगंज", aiHint: "indian female doctor" },
    ]
  }
];

export const doctorsData: Doctor[] = doctorsList.flatMap((group, groupIndex) => 
    group.doctors.map((doctor, docIndex) => ({
        ...doctor,
        id: `${groupIndex * 10 + docIndex + 1}`,
        specialization: group.specialization,
    }))
);
