
"use client";

import { AdminDashboard } from '@/components/AdminDashboard';
import { Header } from '@/components/Header';


export default function AdminPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <AdminDashboard />
        </div>
    );
}
