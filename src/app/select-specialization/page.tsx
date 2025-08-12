
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Heart, Stethoscope, Bone, Baby, User, Ear, Eye, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const specializations = [
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

export default function SelectSpecializationPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSpecializationClick = (specialization: string) => {
    router.push(`/doctors?specialization=${encodeURIComponent(specialization)}`);
  };

  const filteredSpecializations = specializations.filter(spec => 
    spec.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-muted/40 p-4">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border-none mt-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">एक विशेषज्ञता चुनें</CardTitle>
          <CardDescription>आप किस तरह के डॉक्टर की तलाश में हैं?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="विशेषज्ञता खोजें..." 
              className="pl-10 py-5 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {filteredSpecializations.map((spec) => (
              <div 
                key={spec.name} 
                onClick={() => handleSpecializationClick(spec.name)} 
                className="cursor-pointer group flex flex-col items-center p-4 rounded-2xl bg-card hover:bg-primary/10 transition-all duration-300"
              >
                <div className="p-4 rounded-2xl bg-primary/20 flex items-center justify-center mb-2">
                  <spec.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{spec.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
