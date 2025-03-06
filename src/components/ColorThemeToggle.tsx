
import { useColorTheme } from "@/contexts/ColorThemeContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ColorThemeToggle({ className }: { className?: string }) {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "w-10 h-10 rounded-full transition-all duration-300 ease-in-out",
            className
          )}
        >
          <Palette className="h-5 w-5" />
          <span className="sr-only">Select color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setColorTheme("default")}
        >
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <span>Default</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setColorTheme("blue")}
        >
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <span>Blue</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setColorTheme("purple")}
        >
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <span>Purple</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setColorTheme("green")}
        >
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>Green</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setColorTheme("orange")}
        >
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span>Orange</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
