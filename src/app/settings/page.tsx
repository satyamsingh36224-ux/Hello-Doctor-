
"use client"

import { Header } from "@/components/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">सेटिंग्स</h1>
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>दिखावट</CardTitle>
                            <CardDescription>एप्लिकेशन की दिखावट को अनुकूलित करें।</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">थीम</p>
                                <ThemeSwitcher />
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>सहायता और समर्थन</CardTitle>
                            <CardDescription>किसी भी प्रश्न के लिए हमसे संपर्क करें।</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">ग्राहक सेवा नंबर</h4>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:9771264784" className="hover:text-primary">9771264784</a>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground mt-2">
                                    <Phone className="h-4 w-4 text-primary" />
                                    <a href="tel:9007355062" className="hover:text-primary">9007355062</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
