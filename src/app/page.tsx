
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import type { Doctor } from "@/types";

const doctors: Doctor[] = [
  {
    id: "1",
    name: "डॉ. रमेश कुमार",
    specialization: "हृदय रोग विशेषज्ञ",
    description: "डॉ. रमेश कुमार गोपालगंज में एक प्रमुख हृदय रोग विशेषज्ञ हैं, जो हृदय से संबंधित बीमारियों और निवारक देखभाल में विशेषज्ञता रखते हैं। 15 से अधिक वर्षों के अनुभव के साथ, वह अपने रोगी-केंद्रित दृष्टिकोण और जटिल हृदय स्थितियों के प्रबंधन में अपनी विशेषज्ञता के लिए जाने जाते हैं।",
    fee: 500,
    imageUrl: "https://placehold.co/600x400/d1d5db/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "2",
    name: "डॉ. सुनीता शर्मा",
    specialization: "बच्चों का चिकित्सक",
    description: "डॉ. सुनीता शर्मा बच्चों के स्वास्थ्य और कल्याण के लिए समर्पित एक बाल रोग विशेषज्ञ हैं। वह शैशवावस्था से किशोरावस्था तक व्यापक देखभाल प्रदान करती हैं, जिसमें विकासात्मक निगरानी, टीकाकरण और सामान्य बचपन की बीमारियों का उपचार शामिल है।",
    fee: 400,
    imageUrl: "https://placehold.co/600x400/e5e7eb/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "3",
    name: "डॉ. अनिल सिंह",
    specialization: "त्वचा विशेषज्ञ",
    description: "डॉ. अनिल सिंह एक अनुभवी त्वचा विशेषज्ञ हैं जो त्वचा, बाल और नाखूनों की कई स्थितियों का इलाज करते हैं। उनकी विशेषज्ञता में कॉस्मेटिक त्वचाविज्ञान, मुँहासे का उपचार और सोरायसिस और एक्जिमा जैसी पुरानी त्वचा रोगों का प्रबंधन शामिल है।",
    fee: 600,
    imageUrl: "https://placehold.co/600x400/d1d5db/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "4",
    name: "डॉ. मीना गुप्ता",
    specialization: "स्त्री रोग विशेषज्ञ",
    description: "डॉ. मीना गुप्ता एक दयालु स्त्री रोग विशेषज्ञ और प्रसूति विशेषज्ञ हैं जो महिलाओं की स्वास्थ्य सेवाओं की पूरी श्रृंखला प्रदान करती हैं। वह रोगी के आराम और देखभाल पर ध्यान देने के साथ प्रसव पूर्व देखभाल, प्रसव और स्त्री रोग संबंधी समस्याओं के प्रबंधन में माहिर हैं।",
    fee: 550,
    imageUrl: "https://placehold.co/600x400/e5e7eb/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
    {
    id: "5",
    name: "डॉ. विक्रम पटेल",
    specialization: "हड्डी रोग विशेषज्ञ",
    description: "डॉ. विक्रम पटेल एक प्रसिद्ध हड्डी रोग विशेषज्ञ हैं, जिन्हें जोड़ों के प्रतिस्थापन, खेल की चोटों और फ्रैक्चर की देखभाल में विशेषज्ञता हासिल है। वह सर्जिकल और गैर-सर्जिकल उपचारों के माध्यम से गतिशीलता बहाल करने और अपने रोगियों के जीवन की गुणवत्ता में सुधार करने के लिए समर्पित हैं।",
    fee: 700,
    imageUrl: "https://placehold.co/600x400/d1d5db/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  },
  {
    id: "6",
    name: "डॉ. प्रिया देसाई",
    specialization: "सामान्य चिकित्सक",
    description: "डॉ. प्रिया देसाई एक विश्वसनीय सामान्य चिकित्सक हैं जो वयस्कों के लिए प्राथमिक देखभाल प्रदान करती हैं। वह विभिन्न प्रकार की बीमारियों का निदान और उपचार करने, पुरानी स्थितियों का प्रबंधन करने और निवारक देखभाल के माध्यम से समग्र स्वास्थ्य और कल्याण को बढ़ावा देने पर ध्यान केंद्रित करती हैं।",
    fee: 300,
    imageUrl: "https://placehold.co/600x400/e5e7eb/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian female doctor",
  },
  {
    id: "7",
    name: "डॉ. शंभू नाथ सिंह",
    specialization: "जनरल सर्जन",
    description: "डॉ. शंभू नाथ सिंह एक कुशल जनरल सर्जन हैं, जो विभिन्न प्रकार की सर्जिकल प्रक्रियाओं में विशेषज्ञता रखते हैं। वह न्यूनतम इनवेसिव सर्जरी और रोगी की त्वरित रिकवरी पर ध्यान केंद्रित करते हैं।",
    fee: 800,
    imageUrl: "https://placehold.co/600x400/d1d5db/374151.png",
    location: "गोपालगंज, बिहार, भारत",
    aiHint: "indian male doctor",
  }
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">
                गोपालगंज में सही डॉक्टर खोजें
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                हमारे अनुभवी विशेषज्ञों के नेटवर्क के साथ आसानी से अपॉइंटमेंट बुक करें। आपकी स्वास्थ्य संबंधी ज़रूरतें, हमारी प्राथमिकता।
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </main>
      <footer className="bg-background border-t p-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} गोपालगंज विकास हेल्थ केयर। सर्वाधिकार सुरक्षित।</p>
      </footer>
    </div>
  );
}
