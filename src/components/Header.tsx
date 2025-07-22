import { Stethoscope, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-primary">
            Gopalganj Swasthya Seva
          </h1>
        </div>
        <a href="tel:9771264784" className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300">
          <Phone className="h-6 w-6" />
          <span>9771264784</span>
        </a>
      </div>
    </header>
  );
}
