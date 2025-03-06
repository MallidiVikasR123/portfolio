
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Index() {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animation for text reveal
  useEffect(() => {
    textRefs.current.forEach((text, index) => {
      if (text) {
        setTimeout(() => {
          text.style.width = "100%";
          text.style.visibility = "visible";
        }, 300 * index);
      }
    });
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/60 dark:from-background dark:to-background/80 z-10"></div>
        
        {/* More dynamic background blobs with animation */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-pink-500/10 dark:bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="container px-6 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center items-center min-h-[calc(100vh-5rem)]"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
          <div className="space-y-4 mb-8">
            <p className="inline-block text-sm font-medium text-muted-foreground py-1 px-3 border border-border rounded-full animate-fade-in">
              Aspiring Software Engineer
            </p>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <div className="overflow-hidden h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]">
                <span
                  ref={(el) => (textRefs.current[0] = el)}
                  className="block w-0 invisible text-gradient animate-text-reveal"
                >
                  Mallidi Vikas Reddy
                </span>
              </div>
            </h1>
            <div className="overflow-hidden py-2">
              <p
                ref={(el) => (textRefs.current[1] = el)}
                className="w-0 invisible text-lg sm:text-xl text-muted-foreground animate-text-reveal"
              >
                Flutter Developer | Tech Enthusiast
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <Button asChild size="lg" className="gap-2 rounded-full">
              <a href="/Mallidi_Vikas_Reddy_Resume.pdf" download>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-full">
              <Link to="/contact">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-5 pt-6 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <a 
              href="mailto:mallidivikasreddy8@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikas-reddy-mallidi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/MallidiVikasR123" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Introduction */}
        <div className="mt-16 max-w-2xl mx-auto text-center animate-fade-in opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
          <p className="text-muted-foreground text-lg">
            I'm a passionate software engineer specializing in Flutter development. I enjoy creating intuitive, user-friendly applications and solving complex problems with clean, efficient code.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-bounce-slow"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
