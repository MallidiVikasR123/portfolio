
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "w-10 h-10 rounded-full transition-all duration-300 ease-in-out",
        className
      )}
    >
      <Sun
        className={cn(
          "h-5 w-5 absolute transition-all duration-300 rotate-0 scale-100",
          theme !== "light" && "rotate-90 scale-0"
        )}
      />
      <Moon
        className={cn(
          "h-5 w-5 absolute transition-all duration-300 rotate-90 scale-0",
          theme !== "light" && "rotate-0 scale-100"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
