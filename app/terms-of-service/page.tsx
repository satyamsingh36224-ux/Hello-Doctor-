"use client";

import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, ChevronLeft, Calendar, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-black">नियम और शर्तें (Terms of Service)</CardTitle>
              <CardDescription>अंतिम अपडेट: फरवरी 2024</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6 text-slate-600 leading-relaxed">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. सेवाओं का उपयोग</h3>
                <p>Hello Doctor ऐप का उपयोग करके, आप इन शर्तों से सहमत होते हैं। यह ऐप केवल सूचना और डॉक्टर अपॉइंटमेंट बुकिंग की सुविधा प्रदान करता है।</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. चिकित्सा सलाह नहीं</h3>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                    <p className="text-sm text-red-700 font-medium">यह ऐप आपातकालीन चिकित्सा स्थिति के लिए नहीं है। गंभीर स्थिति में कृपया सीधे अस्पताल जाएं।</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3. अपॉइंटमेंट बुकिंग</h3>
                <p>हम केवल डॉक्टरों और मरीजों के बीच एक माध्यम के रूप में कार्य करते हैं। अपॉइंटमेंट की पुष्टि डॉक्टर की उपलब्धता पर निर्भर करती है।</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2">4. खाता सुरक्षा</h3>
                <p>यूजर अपने खाते की जानकारी और लॉगिन क्रेडेंशियल की सुरक्षा के लिए स्वयं जिम्मेदार है।</p>
              </section>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mt-8 text-center">
                  <p className="text-xs text-slate-400">© 2024 Hello Group, Gopalganj. सर्वाधिकार सुरक्षित।</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
