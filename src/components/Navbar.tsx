
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-3 glassmorphism"
          : "py-5 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-display font-bold relative z-20 text-foreground"
        >
          <span className="text-gradient">VR</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-secondary text-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle className="ml-2" />
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 glassmorphism flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-5 text-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-lg font-medium transition-all duration-300 px-6 py-2 rounded-full",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
