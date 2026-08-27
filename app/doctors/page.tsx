"use client";

import { Suspense, useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from "@/components/Header";
import { DoctorCard } from "@/components/DoctorCard";
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from '@/context/LocationContext';
import { doctors as allDoctors, specializationMap } from '@/lib/doctors';
import type { Doctor } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

function DoctorsList() {
  const searchParams = useSearchParams();
  const initialSpecialization = searchParams.get('specialization') || 'all';
  const { translations, language } = useLanguage();
  const { location } = useLocation();
  const t = translations.doctorsPage;
  
  const [selectedSpec, setSelectedSpec] = useState(initialSpecialization);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location, selectedSpec]);

  const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doc) => {
      const matchesLocation = doc.city === location;
      const matchesSpecPill = selectedSpec === 'all' || doc.specialization.key === selectedSpec;
      
      const search = searchTerm.toLowerCase();
      const matchesSearch = 
        doc.name[language].toLowerCase().includes(search) ||
        doc.specialization.name[language].toLowerCase().includes(search) ||
        doc.location.toLowerCase().includes(search);
      
      return matchesLocation && matchesSpecPill && matchesSearch;
    });
  }, [location, selectedSpec, searchTerm, language]);

  if (isLoading) {
    return (
        <div className="space-y-6">
            <div className="flex gap-4 overflow-hidden">
                {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-10 w-24 rounded-full flex-shrink-0" />)}
            </div>
            <div className="grid grid-cols-1 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-card rounded-2xl border">
                        <Skeleton className="h-32 w-32 rounded-2xl" />
                        <div className="space-y-2 w-full">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                            <Skeleton className="h-10 w-full rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative group animate-fade-in-up">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input 
          placeholder={t.searchPlaceholder}
          className="pl-12 py-7 rounded-2xl bg-white shadow-sm border-slate-200 focus:border-primary/50 text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Specialization Filter Pills */}
      <ScrollArea className="w-full whitespace-nowrap pb-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="flex gap-2">
          <Badge 
            variant={selectedSpec === 'all' ? 'default' : 'outline'}
            className="px-6 py-2.5 rounded-full cursor-pointer text-sm font-bold transition-all"
            onClick={() => setSelectedSpec('all')}
          >
            All
          </Badge>
          {specializationMap.map((spec) => (
            <Badge 
              key={spec.key}
              variant={selectedSpec === spec.key ? 'default' : 'outline'}
              className="px-6 py-2.5 rounded-full cursor-pointer text-sm font-bold flex items-center gap-2 transition-all"
              onClick={() => setSelectedSpec(spec.key)}
            >
              <spec.icon className="h-4 w-4" />
              {spec.name[language]}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-black tracking-tight">{t.topDoctors}</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary font-black">
              {filteredDoctors.length} {language === 'hi' ? 'डॉक्टर मिले' : 'Doctors'}
          </Badge>
      </div>

      <div className="grid grid-cols-1 gap-6 pb-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-300">
              <Filter className="mx-auto h-12 w-12 text-slate-300 mb-4" />
              <p className="text-muted-foreground text-lg font-medium">{t.noDoctorsFound}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  const { translations } = useLanguage();
  const t = translations.doctorsPage;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div className="p-8 text-center"><Skeleton className="h-10 w-full" /></div>}>
          <DoctorsList />
        </Suspense>
      </main>
    </div>
  );
}
