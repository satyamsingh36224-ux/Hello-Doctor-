
"use client";

import { useState } from 'react';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentHistory } from "@/components/AppointmentHistory";
import type { Doctor } from "@/types";
import { Button } from '@/components/ui/button';
import { Brain, Heart, Stethoscope, Bone, Baby, User, Ear, Eye } from 'lucide-react';

const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "डॉ. रमेश कुमार",
    specialization: "हृदय रोग विशेषज्ञ",
    description: "डॉ. रमेश कुमार गोपालगंज में एक प्रमुख हृदय रोग विशेषज्ञ हैं, जो हृदय से संबंधित बीमारियों और निवारक देखभाल में विशेषज्ञता रखते हैं। 15 से अधिक वर्षों के अनुभव के साथ, वह अपने रोगी-केंद्रित दृष्टिकोण और जटिल हृदय स्थितियों के प्रबंधन में अपनी विशेषज्ञता के लिए जाने जाते हैं।",
    fee: 500,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "2",
    name: "डॉ. सुनीता शर्मा",
    specialization: "बच्चों का चिकित्सक",
    description: "डॉ. सुनीता शर्मा बच्चों के स्वास्थ्य और कल्याण के लिए समर्पित एक बाल रोग विशेषज्ञ हैं। वह शैशवावस्था से किशोरावस्था तक व्यापक देखभाल प्रदान करती हैं, जिसमें विकासात्मक निगरानी, टीकाकरण और सामान्य बचपन की बीमारियों का उपचार शामिल है।",
    fee: 400,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "3",
    name: "डॉ. अनिल सिंह",
    specialization: "त्वचा विशेषज्ञ",
    description: "डॉ. अनिल सिंह एक अनुभवी त्वचा विशेषज्ञ हैं जो त्वचा, बाल और नाखूनों की कई स्थितियों का इलाज करते हैं। उनकी विशेषज्ञता में कॉस्मेटिक त्वचाविज्ञान, मुँहासे का उपचार और सोरायसिस और एक्जिमा जैसी पुरानी त्वचा रोगों का प्रबंधन शामिल है।",
    fee: 600,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "4",
    name: "डॉ. मीना गुप्ता",
    specialization: "स्त्री रोग विशेषज्ञ",
    description: "डॉ. मीना गुप्ता एक दयालु स्त्री रोग विशेषज्ञ और प्रसूति विशेषज्ञ हैं जो महिलाओं की स्वास्थ्य सेवाओं की पूरी श्रृंखला प्रदान करती हैं। वह रोगी के आराम और देखभाल पर ध्यान देने के साथ प्रसव पूर्व देखभाल, प्रसव और स्त्री रोग संबंधी समस्याओं के प्रबंधन में माहिर हैं।",
    fee: 550,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
    {
    id: "5",
    name: "डॉ. विक्रम पटेल",
    specialization: "हड्डी रोग विशेषज्ञ",
    description: "डॉ. विक्रम पटेल एक प्रसिद्ध हड्डी रोग विशेषज्ञ हैं, जिन्हें जोड़ों के प्रतिस्थापन, खेल की चोटों और फ्रैक्चर की देखभाल में विशेषज्ञता हासिल है। वह सर्जिकल और गैर-सर्जिकल उपचारों के माध्यम से गतिशीलता बहाल करने और अपने रोगियों के जीवन की गुणवत्ता में सुधार करने के लिए समर्पित हैं।",
    fee: 700,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "6",
    name: "डॉ. प्रिया देसाई",
    specialization: "सामान्य चिकित्सक",
    description: "डॉ. प्रिया देसाई एक विश्वसनीय सामान्य चिकित्सक हैं जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करती हैं। वह विभिन्न प्रकार की बीमारियों का निदान और उपचार करने, पुरानी स्थितियों का प्रबंधन करने और निवारक देखभाल के माध्यम से समग्र स्वास्थ्य और कल्याण को बढ़ावा देने पर ध्यान केंद्रित करती हैं।",
    fee: 300,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "7",
    name: "डॉ. शंभू नाथ सिंह",
    specialization: "जनरल सर्जन",
    description: "डॉ. शंभू नाथ सिंह एक कुशल जनरल सर्जन हैं, जो विभिन्न प्रकार की सर्जिकल प्रक्रियाओं में विशेषज्ञता रखते हैं। वह न्यूनतम इनवेसिव सर्जरी और रोगी की त्वरित रिकवरी पर ध्यान केंद्रित करते हैं।",
    fee: 800,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "8",
    name: "डॉ. राजेश वर्मा",
    specialization: "तंत्रिका विज्ञानी",
    description: "डॉ. राजेश वर्मा एक अनुभवी न्यूरोलॉजिस्ट हैं जो मस्तिष्क, रीढ़ की हड्डी और तंत्रिकाओं के विकारों का इलाज करते हैं।",
    fee: 900,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "9",
    name: "डॉ. अंजलि मेहता",
    specialization: "ईएनटी विशेषज्ञ",
    description: "डॉ. अंजलि मेहता कान, नाक और गले से संबंधित विकारों के निदान और उपचार में माहिर हैं।",
    fee: 450,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "10",
    name: "डॉ. दीपक चौहान",
    specialization: "नेत्र रोग विशेषज्ञ",
    description: "डॉ. दीपक चौहान एक कुशल नेत्र रोग विशेषज्ञ हैं जो आंखों की बीमारियों का इलाज करते हैं और दृष्टि देखभाल प्रदान करते हैं।",
    fee: 500,
    imageUrl: "https://placehold.co/128x128.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  }
];

const specializationMap = [
  { name: "हृदय रोग विशेषज्ञ", icon: Heart },
  { name: "बच्चों का चिकित्सक", icon: Baby },
  { name: "त्वचा विशेषज्ञ", icon: User },
  { name: "स्त्री रोग विशेषज्ञ", icon: Stethoscope },
  { name: "हड्डी रोग विशेषज्ञ", icon: Bone },
  { name: "सामान्य चिकित्सक", icon: Stethoscope },
  { name: "जनरल सर्जन", icon: Stethoscope },
  { name: "तंत्रिका विज्ञानी", icon: Brain },
  { name: "ईएनटी विशेषज्ञ", icon: Ear },
  { name: "नेत्र रोग विशेषज्ञ", icon: Eye }
];

export default function DoctorsPage() {
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const filteredDoctors = doctorsData.filter(doctor => {
    const specializationMatch = selectedSpecialization === 'all' || doctor.specialization === selectedSpecialization;
    return specializationMatch;
  });

  // Take the first 8 specializations for the grid
  const displayedSpecializations = specializationMap.slice(0, 8);


  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">शीर्ष डॉक्टर</h2>
            <Button variant="link" className="text-primary">सभी देखें</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
             <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">कोई डॉक्टर नहीं मिला। कृपया अपनी खोज मानदंडों को समायोजित करें।</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
            <div className="lg:col-span-3">
                <AppointmentHistory />
            </div>
        </div>
      </main>
      <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} गोपालगंज विकास हेल्थ केयर। सर्वाधिकार सुरक्षित।</p>
      </footer>
    </div>
  );
}
