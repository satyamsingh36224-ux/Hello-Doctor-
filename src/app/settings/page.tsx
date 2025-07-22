"use client"

import { Header } from "@/components/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">सेटिंग्स</h1>
                    <Card>
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
                </div>
            </main>
        </div>
    )
}
