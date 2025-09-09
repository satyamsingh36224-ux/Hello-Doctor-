
"use client";

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentHistory } from "@/components/AppointmentHistory";
import { Button } from '@/components/ui/button';
import { doctorsData } from '@/lib/doctors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, Phone, TestTube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


function DoctorsList() {
  const searchParams = useSearchParams();
  const selectedSpecialization = searchParams.get('specialization') || 'all';

  const filteredDoctors = doctorsData.filter(doctor => {
    const specializationMatch = selectedSpecialization === 'all' || doctor.specialization === selectedSpecialization;
    return specializationMatch;
  });

  return (
    <>
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
              <p className="text-muted-foreground text-lg">इस विशेषज्ञता के लिए कोई डॉक्टर नहीं मिला।</p>
          </div>
        )}
      </div>
    </>
  );
}

function JaanchKendra() {
    const { toast } = useToast();
    const [patientName, setPatientName] = useState('');
    const [patientPhone, setPatientPhone] = useState('');
    const [testName, setTestName] = useState('');

    const handleTestRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const clinicPhoneNumber = "919007355062"; // महत्वपूर्ण: इसे क्लिनिक के वास्तविक व्हाट्सएप नंबर से बदलें

        const message = `नमस्ते, मुझे एक जांच करवानी है।\n\n*मरीज का नाम:* ${patientName}\n*फ़ोन नंबर:* ${patientPhone}\n*जांच का नाम:* ${testName}\n\nकृपया बुकिंग के लिए संपर्क करें। धन्यवाद!`;
        
        const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: "अनुरोध भेज दिया गया! 👍",
            description: `जांच केंद्र जल्द ही आपसे संपर्क करेगा।`,
        });

        // व्हाट्सएप पर रीडायरेक्ट करें
        window.open(whatsappUrl, '_blank');

        // फॉर्म रीसेट करें
        setPatientName('');
        setPatientPhone('');
        setTestName('');
    };

    return (
        <Card className="shadow-lg rounded-xl h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <TestTube className="h-6 w-6 text-primary" />
                    जांच केंद्र बुकिंग
                </CardTitle>
                <CardDescription>
                    लैब टेस्ट के लिए अनुरोध करें। हम जल्द ही आपसे संपर्क करेंगे।
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleTestRequest}>
                    <div className="grid gap-4">
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input name="name" id="name" placeholder="मरीज का नाम" className="pl-10" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
                        </div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input name="phone" id="phone" type="tel" placeholder="फ़ोन नंबर" className="pl-10" value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} required />
                        </div>
                        <div className="relative">
                            <TestTube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input name="test" id="test" placeholder="जांच का नाम (जैसे: ब्लड टेस्ट)" className="pl-10" value={testName} onChange={(e) => setTestName(e.target.value)} required />
                        </div>
                        <Button type="submit" className="w-full">
                            व्हाट्सएप पर अनुरोध भेजें
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}


export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <DoctorsList />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
            <div className="lg:col-span-3">
                <AppointmentHistory />
            </div>
            <div className="lg:col-span-2">
                <JaanchKendra />
            </div>
        </div>
      </main>
      <footer className="bg-transparent p-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} गोपालगंज विकास हेल्थ केयर। सर्वाधिकार सुरक्षित।</p>
      </footer>
    </div>
  );
}
