
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
    <Card className="shadow-lg rounded-xl h-full">
        <CardHeader>
             <CardTitle className="flex items-center gap-3">
                <History className="h-6 w-6" />
                अपॉइंटमेंट इतिहास
            </CardTitle>
            <CardDescription>
                अपने पिछले और आने वाले अपॉइंटमेंट देखें।
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="rounded-md border overflow-hidden">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="font-semibold">डॉक्टर</TableHead>
                    <TableHead className="font-semibold">दिनांक</TableHead>
                    <TableHead className="text-right font-semibold">स्थिति</TableHead>
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
                                appointment.status === "पूर्ण" ? "default" :
                                appointment.status === "पुष्टि" ? "secondary" :
                                "destructive"
                            }
                            className={`capitalize text-xs ${
                                appointment.status === 'पुष्टि' && 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                            } ${
                                appointment.status === 'पूर्ण' && 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                            } ${
                                appointment.status === 'रद्द' && 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
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
      </CardContent>
    </Card>
  );
}
