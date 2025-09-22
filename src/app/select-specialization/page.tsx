
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { specializationMap } from '@/lib/doctors';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function SelectSpecializationPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const { translations, language } = useLanguage();
  const t = translations.selectSpecializationPage;

  const handleSpecializationClick = (specializationKey: string) => {
    router.push(`/doctors?specialization=${encodeURIComponent(specializationKey)}`);
  };

  const filteredSpecializations = specializationMap.filter(spec => 
    spec.name[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-4 pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl border-border/50 bg-card">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder={t.searchPlaceholder}
              className="pl-10 py-5 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {filteredSpecializations.map((spec) => (
              <div 
                key={spec.key} 
                onClick={() => handleSpecializationClick(spec.key)} 
                className="cursor-pointer group flex flex-col items-center p-4 rounded-2xl bg-card hover:bg-primary/5 dark:hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <spec.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{spec.name[language]}</p>
              </div>
            ))}
          </div>
           <div className="mt-8 text-center">
              <Button asChild variant="outline" className="rounded-full">
                  <Link href="/">{t.backToLogin}</Link>
              </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
