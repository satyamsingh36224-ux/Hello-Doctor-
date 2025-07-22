import { Stethoscope, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Stethoscope className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-headline text-primary tracking-tight">
            गोपालगंज विकास हेल्थ केयर
          </h1>
        </div>
        <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:flex">
                <a href="tel:9771264784" className="flex items-center space-x-2 text-base font-semibold">
                    <Phone className="h-5 w-5" />
                    <span>9771264784</span>
                </a>
            </Button>
            <Button className="hidden sm:flex">अपॉइंटमेंट बुक करें</Button>
            <Button size="icon" variant="outline" className="sm:hidden">
                <Menu />
                <span className="sr-only">Open menu</span>
            </Button>
        </div>
      </div>
    </header>
  );
}
