
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 100 }: LogoProps) {
  const logo = placeholderImages.branding[0];
  
  return (
    <div className={cn("relative overflow-hidden flex items-center justify-center", className)}>
        <Image
            src={logo.imageUrl}
            alt="Hello Doctor Logo"
            width={size}
            height={size}
            className="object-contain"
            data-ai-hint={logo.aiHint}
            priority
        />
    </div>
  );
}
