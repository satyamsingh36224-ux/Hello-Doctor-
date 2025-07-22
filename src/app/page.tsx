
"use client";

import { useState } from 'react';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentHistory } from "@/components/AppointmentHistory";
import type { Doctor } from "@/types";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "डॉ. रमेश कुमार",
    specialization: "हृदय रोग विशेषज्ञ",
    description: "डॉ. रमेश कुमार गोपालगंज में एक प्रमुख हृदय रोग विशेषज्ञ हैं, जो हृदय से संबंधित बीमारियों और निवारक देखभाल में विशेषज्ञता रखते हैं। 15 से अधिक वर्षों के अनुभव के साथ, वह अपने रोगी-केंद्रित दृष्टिकोण और जटिल हृदय स्थितियों के प्रबंधन में अपनी विशेषज्ञता के लिए जाने जाते हैं।",
    fee: 500,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "2",
    name: "डॉ. सुनीता शर्मा",
    specialization: "बच्चों का चिकित्सक",
    description: "डॉ. सुनीता शर्मा बच्चों के स्वास्थ्य और कल्याण के लिए समर्पित एक बाल रोग विशेषज्ञ हैं। वह शैशवावस्था से किशोरावस्था तक व्यापक देखभाल प्रदान करती हैं, जिसमें विकासात्मक निगरानी, टीकाकरण और सामान्य बचपन की बीमारियों का उपचार शामिल है।",
    fee: 400,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "3",
    name: "डॉ. अनिल सिंह",
    specialization: "त्वचा विशेषज्ञ",
    description: "डॉ. अनिल सिंह एक अनुभवी त्वचा विशेषज्ञ हैं जो त्वचा, बाल और नाखूनों की कई स्थितियों का इलाज करते हैं। उनकी विशेषज्ञता में कॉस्मेटिक त्वचाविज्ञान, मुँहासे का उपचार और सोरायसिस और एक्जिमा जैसी पुरानी त्वचा रोगों का प्रबंधन शामिल है।",
    fee: 600,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "4",
    name: "डॉ. मीना गुप्ता",
    specialization: "स्त्री रोग विशेषज्ञ",
    description: "डॉ. मीना गुप्ता एक दयालु स्त्री रोग विशेषज्ञ और प्रसूति विशेषज्ञ हैं जो महिलाओं की स्वास्थ्य सेवाओं की पूरी श्रृंखला प्रदान करती हैं। वह रोगी के आराम और देखभाल पर ध्यान देने के साथ प्रसव पूर्व देखभाल, प्रसव और स्त्री रोग संबंधी समस्याओं के प्रबंधन में माहिर हैं।",
    fee: 550,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
    {
    id: "5",
    name: "डॉ. विक्रम पटेल",
    specialization: "हड्डी रोग विशेषज्ञ",
    description: "डॉ. विक्रम पटेल एक प्रसिद्ध हड्डी रोग विशेषज्ञ हैं, जिन्हें जोड़ों के प्रतिस्थापन, खेल की चोटों और फ्रैक्चर की देखभाल में विशेषज्ञता हासिल है। वह सर्जिकल और गैर-सर्जिकल उपचारों के माध्यम से गतिशीलता बहाल करने और अपने रोगियों के जीवन की गुणवत्ता में सुधार करने के लिए समर्पित हैं।",
    fee: 700,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "6",
    name: "डॉ. प्रिया देसाई",
    specialization: "सामान्य चिकित्सक",
    description: "डॉ. प्रिया देसाई एक विश्वसनीय सामान्य चिकित्सक हैं जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करती हैं। वह विभिन्न प्रकार की बीमारियों का निदान और उपचार करने, पुरानी स्थितियों का प्रबंधन करने और निवारक देखभाल के माध्यम से समग्र स्वास्थ्य और कल्याण को बढ़ावा देने पर ध्यान केंद्रित करती हैं।",
    fee: 300,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "7",
    name: "डॉ. शंभू नाथ सिंह",
    specialization: "जनरल सर्जन",
    description: "डॉ. शंभू नाथ सिंह एक कुशल जनरल सर्जन हैं, जो विभिन्न प्रकार की सर्जिकल प्रक्रियाओं में विशेषज्ञता रखते हैं। वह न्यूनतम इनवेसिव सर्जरी और रोगी की त्वरित रिकवरी पर ध्यान केंद्रित करते हैं।",
    fee: 800,
    imageUrl: "https://placehold.co/400x400.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  }
];

const specializations = Array.from(new Set(doctorsData.map(d => d.specialization)));

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.51H18.35C18.04 16.12 17.23 17.51 15.99 18.39V21.3H19.9C21.67 19.67 22.56 17.14 22.56 14.08V12.25Z" fill="#4285F4"/>
        <path d="M12 23C15.11 23 17.73 21.94 19.9 20.21L15.99 17.32C14.93 18.01 13.59 18.42 12 18.42C9.21 18.42 6.83 16.57 5.92 14.1H1.9V17.09C3.72 20.69 7.55 23 12 23Z" fill="#34A853"/>
        <path d="M5.92 14.1C5.69 13.41 5.56 12.67 5.56 11.9C5.56 11.13 5.69 10.39 5.92 9.7H1.9V6.71C0.7 8.93 0 11.23 0 13.9C0 16.57 0.7 18.87 1.9 21.09L5.92 18.1V14.1Z" fill="#FBBC05"/>
        <path d="M12 5.58C13.74 5.58 15.22 6.22 16.21 7.15L20.08 3.28C17.73 1.25 15.11 0 12 0C7.55 0 3.72 2.31 1.9 5.91L5.92 8.7C6.83 6.23 9.21 4.42 12 4.42V5.58Z" fill="#EA4335"/>
        <path d="M12 5.58C13.74 5.58 15.22 6.22 16.21 7.15L20.08 3.28C17.73 1.25 15.11 0 12 0C7.55 0 3.72 2.31 1.9 5.91L5.92 8.7C6.83 6.23 9.21 4.42 12 4.42V5.58Z" fill="#EA4335"/>
    </svg>
)

const FacebookIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12.062C22 6.505 17.523 2 12 2S2 6.505 2 12.062C2 17.06 5.69 21.213 10.438 22V14.969H7.898V12.062H10.438V9.847C10.438 7.324 11.93 5.938 14.223 5.938C15.308 5.938 16.274 6.023 16.5 6.052V8.562H15.197C13.99 8.562 13.562 9.333 13.562 10.124V12.062H16.336L15.896 14.969H13.562V22C18.31 21.213 22 17.06 22 12.062Z"/>
    </svg>
)


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const filteredDoctors = doctorsData.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const specializationMatch = selectedSpecialization === 'all' || doctor.specialization === selectedSpecialization;
    return nameMatch && specializationMatch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">
                गोपालगंज में सही डॉक्टर खोजें
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                हमारे अनुभवी विशेषज्ञों के नेटवर्क के साथ आसानी से अपॉइंटमेंट बुक करें। आपकी स्वास्थ्य संबंधी ज़रूरतें, हमारी प्राथमिकता।
            </p>
        </div>

        <div className="mb-8 p-4 bg-card rounded-xl shadow-md border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="डॉक्टर का नाम खोजें... 🧑‍⚕️"
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <ListFilter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                        <SelectTrigger className="pl-10">
                            <SelectValue placeholder="विशेषज्ञता चुनें... ❤️‍🩹" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">सभी विशेषज्ञता</SelectItem>
                            {specializations.map(spec => (
                                <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="lg:col-span-2">
                <Card className="shadow-lg rounded-xl h-full">
                    <CardHeader>
                        <CardTitle>जल्दी शुरू करें</CardTitle>
                        <CardDescription>अपने खाते से लॉगिन करके अपॉइंटमेंट प्रबंधित करें।</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Button variant="outline" className="w-full justify-center">
                            <GoogleIcon />
                            <span className="ml-2">Google से जारी रखें</span>
                        </Button>
                        <Button variant="outline" className="w-full justify-center">
                            <FacebookIcon />
                             <span className="ml-2">Facebook से जारी रखें</span>
                        </Button>
                        <div className="relative my-2">
                            <Separator />
                            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-card px-2 text-sm text-muted-foreground">
                                या
                            </span>
                        </div>
                         <Button className="w-full">ईमेल से साइन अप करें</Button>
                         <p className="text-center text-xs text-muted-foreground">
                            पहले से ही एक खाता है? <a href="#" className="text-primary hover:underline">लॉगिन करें</a>
                         </p>
                    </CardContent>
                </Card>
            </div>
        </div>

      </main>
      <footer className="bg-background border-t p-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} गोपालगंज विकास हेल्थ केयर। सर्वाधिकार सुरक्षित।</p>
      </footer>
    </div>
  );
}
