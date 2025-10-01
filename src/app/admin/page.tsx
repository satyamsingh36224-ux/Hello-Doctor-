
"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AdminDashboard } from '@/components/AdminDashboard';
import { Lock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { toast } = useToast();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '1616') {
            setIsAuthenticated(true);
            toast({
                title: "लॉगिन सफल",
                description: "एडमिन डैशबोर्ड में आपका स्वागत है।",
            });
        } else {
            toast({
                title: "गलत पासवर्ड",
                description: "कृपया सही पासवर्ड डालें।",
                variant: "destructive",
            });
        }
    };

    if (isAuthenticated) {
        return <AdminDashboard />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-sm shadow-2xl rounded-2xl">
                <CardHeader className="text-center items-center">
                    <div className="p-4 bg-primary/10 rounded-full inline-block mb-2">
                        <Shield className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">एडमिन पैनल</CardTitle>
                    <CardDescription>कृपया जारी रखने के लिए पासवर्ड डालें।</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="पासवर्ड"
                                className="pl-10 rounded-full py-6"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full rounded-full py-6 text-lg font-bold">
                            लॉगिन करें
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
