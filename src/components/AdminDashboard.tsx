
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Store } from "lucide-react";
import { DoctorAdmin } from "./DoctorAdmin";
import { MedicalStoreAdmin } from "./MedicalStoreAdmin";

export function AdminDashboard() {
    return (
        <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <Tabs defaultValue="doctors">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="doctors">
                            <Users className="mr-2 h-5 w-5" />
                            डॉक्टर प्रबंधन
                        </TabsTrigger>
                        <TabsTrigger value="medical-stores">
                            <Store className="mr-2 h-5 w-5" />
                            मेडिकल स्टोर प्रबंधन
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="doctors">
                        <DoctorAdmin />
                    </TabsContent>
                    <TabsContent value="medical-stores">
                        <MedicalStoreAdmin />
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
