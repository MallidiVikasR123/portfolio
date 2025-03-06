
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2 mb-10",
        center && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-display font-bold tracking-tight md:text-4xl animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-[700px] mx-auto animate-fade-in delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
}
