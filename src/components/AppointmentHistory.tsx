
"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const appointments = [
  {
    doctor: "डॉ. रमेश कुमार",
    date: "25 जुलाई, 2024",
    time: "10:00 सुबह",
    status: "completed",
  },
  {
    doctor: "डॉ. सुनीता शर्मा",
    date: "28 जुलाई, 2024",
    time: "02:00 दोपहर",
    status: "confirmed",
  },
  {
    doctor: "डॉ. अनिल सिंह",
    date: "20 जुलाई, 2024",
    time: "11:00 सुबह",
    status: "cancelled",
  },
    {
    doctor: "डॉ. प्रिया देसाई",
    date: "01 अगस्त, 2024",
    time: "04:00 दोपहर",
    status: "confirmed",
  },
];

export function AppointmentHistory() {
  const { translations } = useLanguage();
  const t = translations.doctorsPage;
  const tStatus = translations.statuses;

  return (
    <Card className="shadow-lg rounded-xl h-full">
        <CardHeader>
             <CardTitle className="flex items-center gap-3">
                <History className="h-6 w-6" />
                {t.appointmentHistory}
            </CardTitle>
            <CardDescription>
                {t.appointmentHistoryDesc}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="rounded-md border overflow-hidden">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="font-semibold">{t.doctor}</TableHead>
                    <TableHead className="font-semibold">{t.date}</TableHead>
                    <TableHead className="text-right font-semibold">{t.status}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appointments.map((appointment, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <div className="font-medium">{appointment.doctor}</div>
                            <div className="text-sm text-muted-foreground">{appointment.time}</div>
                        </TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell className="text-right">
                            <Badge variant={
                                appointment.status === "completed" ? "default" :
                                appointment.status === "confirmed" ? "secondary" :
                                "destructive"
                            }
                            className={`capitalize text-xs ${
                                appointment.status === 'confirmed' && 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                            } ${
                                appointment.status === 'completed' && 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                            } ${
                                appointment.status === 'cancelled' && 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                            }`}
                            >
                                {tStatus[appointment.status as keyof typeof tStatus]}
                            </Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
      </CardContent>
    </Card>
  );
}
