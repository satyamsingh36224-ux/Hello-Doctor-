"use client";

import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Mail, MapPin, User, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/settings" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ChevronLeft className="h-4 w-4" />
            वापस जाएं
          </Link>

          <Card className="shadow-xl rounded-[2rem] border-none overflow-hidden bg-white">
            <CardHeader className="text-center bg-primary/5 pb-8 pt-10">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 shadow-inner">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-black">गोपनीयता नीति (Privacy Policy)</CardTitle>
              <CardDescription>आपका डेटा हमारे पास सुरक्षित है</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6 text-slate-600 leading-relaxed">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. जानकारी का संग्रह</h3>
                <p>Hello Doctor ऐप केवल आपके नाम और फोन नंबर का उपयोग अपॉइंटमेंट बुकिंग के लिए करता है। हम आपका व्यक्तिगत डेटा किसी तीसरे पक्ष के साथ साझा नहीं करते हैं।</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. डेटा का उपयोग</h3>
                <p>आपके द्वारा प्रदान की गई जानकारी का उपयोग केवल डॉक्टरों के साथ अपॉइंटमेंट बुक करने और आपको स्वास्थ्य सेवाओं की सूचना देने के लिए किया जाता है।</p>
              </section>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  डेवलपर संपर्क जानकारी
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm"><User className="h-5 w-5 text-primary" /></div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-400">डेवलपर का नाम</p>
                      <p className="font-bold text-slate-700">Hello Group (Satyam Singh)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm"><Mail className="h-5 w-5 text-primary" /></div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-400">सपोर्ट ईमेल</p>
                      <p className="font-bold text-slate-700">support@hellodoctor.app</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm"><MapPin className="h-5 w-5 text-primary" /></div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-400">लोकेशन</p>
                      <p className="font-bold text-slate-700">सिवान, बिहार, भारत - 841226</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}