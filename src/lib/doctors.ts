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
      { name: "डॉ. रमेश कुमार", description: "एक प्रमुख हृदय रोग विशेषज्ञ, जो हृदय से संबंधित बीमारियों और निवारक देखभाल में विशेषज्ञता रखते हैं।", fee: 500, imageUrl: "👨‍⚕️", location: "रमेश हार्ट केयर, पुरानी चौक, सिनेमा रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. अजय गुप्ता", description: "हृदय की जटिल स्थितियों के प्रबंधन में विशेषज्ञ। रोगी की देखभाल के लिए जाने जाते हैं।", fee: 550, imageUrl: "👨‍⚕️", location: "गुप्ता हार्ट क्लिनिक, पहली मंज़िल, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. संजय पांडे", description: "उच्च रक्तचाप और कोलेस्ट्रॉल के प्रबंधन में विशेषज्ञता।", fee: 500, imageUrl: "👨‍⚕️", location: "पांडे कार्डियक सेंटर, ब्लॉक रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. वीणा सिंह", description: "महिला हृदय स्वास्थ्य पर ध्यान केंद्रित करने वाली एक अनुभवी हृदय रोग विशेषज्ञ।", fee: 550, imageUrl: "👩‍⚕️", location: "वीणा हार्ट क्लिनिक, थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "बच्चों का चिकित्सक",
    doctors: [
      { name: "डॉ. गौरव अग्रवाल", description: "एक समर्पित बाल रोग विशेषज्ञ जो शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "अग्रवाल चिल्ड्रेन्स हॉस्पिटल, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. मंगेश्वर सिंह", description: "एक अनुभवी बाल रोग विशेषज्ञ जो बच्चों के स्वास्थ्य की देखभाल में विशेषज्ञता रखते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "आशीर्वाद बाल क्लिनिक, पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. नौशाद आलम", description: "एक समर्पित बाल रोग विशेषज्ञ जो शिशुओं, बच्चों और किशोरों को व्यापक चिकित्सा देखभाल प्रदान करते हैं।", fee: 450, imageUrl: "👨‍⚕️", location: "अल-शिफ़ा चाइल्ड केयर, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. अनिता कुमारी", description: "नवजात शिशुओं की देखभाल और टीकाकरण में विशेषज्ञता।", fee: 400, imageUrl: "👩‍⚕️", location: "अनिता चाइल्ड केयर, जंगलिया मोड़, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. राजेश प्रसाद", description: "बच्चों के पोषण और विकास संबंधी समस्याओं के विशेषज्ञ।", fee: 450, imageUrl: "👨‍⚕️", location: "चिल्ड्रेन'स वेलनेस क्लिनिक, कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "त्वचा विशेषज्ञ",
    doctors: [
      { name: "डॉ. अनिल सिंह", description: "एक अनुभवी त्वचा विशेषज्ञ जो त्वचा, बाल और नाखूनों की कई स्थितियों का इलाज करते हैं।", fee: 600, imageUrl: "👨‍⚕️", location: "सिंह स्किन एंड हेयर क्लिनिक, बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
      { name: "डॉ. प्रियंका वर्मा", description: "कॉस्मेटिक त्वचाविज्ञान और लेजर उपचार में विशेषज्ञ।", fee: 650, imageUrl: "👩‍⚕️", location: "वर्मा स्किन एस्थेटिक्स, मौनिया चौक, गोपालगंज", aiHint: "indian female doctor" },
      { name: "डॉ. फ़िरोज़ अहमद", description: "चर्म रोगों के निदान और उपचार में व्यापक अनुभव।", fee: 550, imageUrl: "👨‍⚕️", location: "अहमद डर्मा केयर, पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "स्त्री रोग विशेषज्ञ",
    doctors: [
        { name: "डॉ. मीना गुप्ता", description: "एक दयालु स्त्री रोग विशेषज्ञ और प्रसूति विशेषज्ञ जो महिलाओं की स्वास्थ्य सेवाओं की पूरी श्रृंखला प्रदान करती हैं।", fee: 550, imageUrl: "👩‍⚕️", location: "गुप्ता वीमेन'स क्लिनिक, थावे रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. रेखा यादव", description: "उच्च जोखिम वाली गर्भावस्था और बांझपन उपचार में विशेषज्ञ।", fee: 600, imageUrl: "👩‍⚕️", location: "यादव फर्टिलिटी एंड मैटरनिटी, अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. पूनम शर्मा", description: "किशोर स्वास्थ्य और परिवार नियोजन परामर्श में विशेषज्ञता।", fee: 500, imageUrl: "👩‍⚕️", location: "शर्मा वीमेन'स वेलनेस, चंद्रगोकुल रोड, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. सरिता सिंह", description: "नियमित स्त्री रोग संबंधी जांच और प्रसव पूर्व देखभाल प्रदान करती हैं।", fee: 550, imageUrl: "👩‍⚕️", location: "मैटरनिटी केयर होम, जंगलिया, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "हड्डी रोग विशेषज्ञ",
    doctors: [
        { name: "डॉ. विक्रम पटेल", description: "एक प्रसिद्ध हड्डी रोग विशेषज्ञ, जिन्हें जोड़ों के प्रतिस्थापन, खेल की चोटों और फ्रैक्चर की देखभाल में विशेषज्ञता हासिल है।", fee: 700, imageUrl: "👨‍⚕️", location: "पटेल ऑर्थो एंड स्पोर्ट्स इंजरी सेंटर, जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. आलोक कुमार", description: "रीढ़ की हड्डी की सर्जरी और आर्थोस्कोपिक प्रक्रियाओं में विशेषज्ञ।", fee: 750, imageUrl: "👨‍⚕️", location: "गोपालगंज ऑर्थोपेडिक हॉस्पिटल, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. आर. के. मिश्रा", description: "फ्रैक्चर और हड्डी से संबंधित विकारों के प्रबंधन में विशेषज्ञ।", fee: 650, imageUrl: "👨‍⚕️", location: "मिश्रा बोन एंड जॉइंट क्लिनिक, अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "सामान्य चिकित्सक",
    doctors: [
        { name: "डॉ. देवता सिंह", description: "एक अनुभवी सामान्य चिकित्सक जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "जीवन रेखा क्लिनिक, मेडिकल हॉल के पास, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अभिषेक शेखर सिन्हा", description: "एक जाने-माने सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "सिन्हा जनरल क्लिनिक, टाउन हॉल के सामने, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. शिवेंद्र कुमार तिवारी", description: "एक अनुभवी सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "तिवारी स्वास्थ्य सेवा, सिविल लाइंस, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अभिषेक रंजन", description: "एक जाने-माने सामान्य चिकित्सक हैं जो सभी प्रकार की सामान्य बीमारियों के लिए विश्वसनीय देखभाल प्रदान करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "आरोग्य क्लिनिक, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अरविंद कुमार", description: "एक विश्वसनीय सामान्य चिकित्सक हैं जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करते हैं।", fee: 300, imageUrl: "👨‍⚕️", location: "कुमार क्लिनिक, बस स्टैंड के पास, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. मुकेश कुमार सिंह", description: "सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", fee: 350, imageUrl: "👨‍⚕️", location: "सिंह हेल्थकेयर, थावे रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. श्याम मोहन सिंह", description: "बीमारियों के निदान और उपचार के साथ-साथ निवारक देखभाल पर भी ध्यान केंद्रित करते हैं।", fee: 300, imageUrl: "👨‍⚕️", location: "मोहन क्लिनिक, जाधवपुर रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. विनीत विनोद कुमार यादव", description: "एक अनुभवी सामान्य चिकित्सक हैं जो रोगी के समग्र स्वास्थ्य पर ध्यान केंद्रित करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "यादव जनरल फिजिशियन, कचहरी रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. सौरभ अग्रवाल", description: "एक अनुभवी सामान्य चिकित्सक हैं जो सभी उम्र के रोगियों को व्यापक स्वास्थ्य सेवा प्रदान करते हैं।", fee: 400, imageUrl: "👨‍⚕️", location: "अग्रवाल फैमिली फिजिशियन, सिनेमा रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. आलोक कुमार सुमन", description: "मधुमेह और थायराइड जैसे जीवनशैली रोगों के प्रबंधन में विशेषज्ञ।", fee: 400, imageUrl: "👨‍⚕️", location: "सुमन क्लिनिक, हजियापुर रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "जनरल सर्जन",
    doctors: [
        { name: "डॉ. शंभू नाथ सिंह", description: "एक कुशल जनरल सर्जन हैं, जो विभिन्न प्रकार की सर्जिकल प्रक्रियाओं में विशेषज्ञता रखते हैं।", fee: 800, imageUrl: "👨‍⚕️", location: "सिंह सर्जिकल सेंटर, मौनिया चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. संदीप कुमार", description: "लैप्रोस्कोपिक (दूरबीन) सर्जरी में माहिर एक आधुनिक सर्जन।", fee: 850, imageUrl: "👨‍⚕️", location: "गोपालगंज सर्जिकल हॉस्पिटल, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. इम्तियाज़ अहमद", description: "मामूली और बड़ी दोनों तरह की सर्जरी करने में व्यापक अनुभव।", fee: 750, imageUrl: "👨‍⚕️", location: "अहमद सर्जिकल क्लिनिक, पुरानी चौक, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "तंत्रिका विज्ञानी",
    doctors: [
        { name: "डॉ. राजेश वर्मा", description: "एक अनुभवी न्यूरोलॉजिस्ट हैं जो मस्तिष्क, रीढ़ की हड्डी और तंत्रिकाओं के विकारों का इलाज करते हैं।", fee: 900, imageUrl: "👨‍⚕️", location: "वर्मा न्यूरो क्लिनिक, अंबेडकर चौक, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. अमित कुमार", description: "माइग्रेन, मिर्गी और स्ट्रोक के इलाज में विशेषज्ञता।", fee: 950, imageUrl: "👨‍⚕️", location: "सिटी न्यूरो सेंटर, अस्पताल रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "ईएनटी विशेषज्ञ",
    doctors: [
        { name: "डॉ. अंजलि मेहता", description: "कान, नाक और गले से संबंधित विकारों के निदान और उपचार में माहिर हैं।", fee: 450, imageUrl: "👩‍⚕️", location: "मेहता ईएनटी क्लिनिक, पोस्ट ऑफिस चौक, गोपालगंज", aiHint: "indian female doctor" },
        { name: "डॉ. सुनील कुमार", description: "साइनस और एलर्जी की समस्याओं के लिए उन्नत उपचार प्रदान करते हैं।", fee: 500, imageUrl: "👨‍⚕️", location: "कुमार ईएनटी केयर, बस स्टैंड रोड, गोपालगंज", aiHint: "indian male doctor" },
    ]
  },
  {
    specialization: "नेत्र रोग विशेषज्ञ",
    doctors: [
        { name: "डॉ. दीपक चौहान", description: "एक कुशल नेत्र रोग विशेषज्ञ हैं जो आंखों की बीमारियों का इलाज करते हैं और दृष्टि देखभाल प्रदान करते हैं।", fee: 500, imageUrl: "👨‍⚕️", location: "चौहान आई हॉस्पिटल, गोशाला रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. नेहा प्रसाद", description: "मोतियाबिंद सर्जरी और लेसिक प्रक्रियाओं में विशेषज्ञता।", fee: 550, imageUrl: "👩‍⚕️", location: "दृष्टि आई केयर, अस्पताल रोड, गोपालगंज", aiHint: "indian female doctor" },
    ]
  },
  {
    specialization: "मनोचिकित्सक",
    doctors: [
        { name: "डॉ. पवन कुमार", description: "एक अनुभवी मनोचिकित्सक हैं जो मानसिक स्वास्थ्य संबंधी समस्याओं का इलाज करते हैं।", fee: 650, imageUrl: "👨‍⚕️", location: "मनोबल क्लिनिक, चंद्रगोकुल रोड, गोपालगंज", aiHint: "indian male doctor" },
        { name: "डॉ. स्मिता सिन्हा", description: "तनाव, चिंता और अवसाद के लिए परामर्श और चिकित्सा प्रदान करती हैं।", fee: 700, imageUrl: "👩‍⚕️", location: "माइंडफुल लिविंग सेंटर, सिविल लाइंस, गोपालगंज", aiHint: "indian female doctor" },
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
