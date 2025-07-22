
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

const appointments = [
  {
    doctor: "डॉ. रमेश कुमार",
    date: "25 जुलाई, 2024",
    time: "10:00 सुबह",
    status: "पूर्ण",
  },
  {
    doctor: "डॉ. सुनीता शर्मा",
    date: "28 जुलाई, 2024",
    time: "02:00 दोपहर",
    status: "पुष्टि",
  },
  {
    doctor: "डॉ. अनिल सिंह",
    date: "20 जुलाई, 2024",
    time: "11:00 सुबह",
    status: "रद्द",
  },
    {
    doctor: "डॉ. प्रिया देसाई",
    date: "01 अगस्त, 2024",
    time: "04:00 दोपहर",
    status: "पुष्टि",
  },
];

export function AppointmentHistory() {
  return (
    <div className="mt-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline text-primary/90 flex items-center justify-center gap-3">
                <History className="h-8 w-8" />
                अपॉइंटमेंट इतिहास
            </h2>
            <p className="mt-2 text-muted-foreground">
                अपने पिछले और आने वाले अपॉइंटमेंट देखें।
            </p>
        </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-base">डॉक्टर</TableHead>
              <TableHead className="font-semibold text-base">दिनांक</TableHead>
              <TableHead className="font-semibold text-base">समय</TableHead>
              <TableHead className="text-right font-semibold text-base">स्थिति</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{appointment.doctor}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell className="text-right">
                    <Badge variant={
                        appointment.status === "पूर्ण" ? "default" :
                        appointment.status === "पुष्टि" ? "secondary" :
                        "destructive"
                    }
                    className={`capitalize ${
                        appointment.status === 'पुष्टि' && 'bg-green-100 text-green-800'
                    }`}
                    >
                        {appointment.status}
                    </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
