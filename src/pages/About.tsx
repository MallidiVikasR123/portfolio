
import { useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function About() {
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container px-4 py-24 md:py-32">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me and my professional journey"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            <img 
              src="/placeholder.svg" 
              alt="Mallidi Vikas Reddy" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Biography */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4 animate-on-scroll">
            <h3 className="text-2xl font-display font-bold">Mallidi Vikas Reddy</h3>
            <p className="text-muted-foreground">
              Aspiring Software Engineer with a robust foundation in C++, Python, Java, Dart, and Flutter. Proficient in designing intuitive mobile applications, developing efficient algorithms, and leveraging web technologies to deliver user-centric solutions.
            </p>
            <p className="text-muted-foreground">
              A collaborative team player and quick learner, eager to contribute to innovative software projects in a dynamic, growth-oriented environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <InfoItem label="Name" value="Mallidi Vikas Reddy" />
            <InfoItem label="Email" value="mallidivikasreddy8@gmail.com" />
            <InfoItem label="Phone" value="+91 9553167548" />
            <InfoItem label="Location" value="India" />
          </div>

          <div className="pt-4 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-semibold mb-4">Interests</h4>
            <div className="flex flex-wrap gap-2">
              {["Visiting Places", "Reading English Manga", "Listening Music"].map((interest, index) => (
                <span 
                  key={index}
                  className={cn(
                    "px-3 py-1 text-sm rounded-full border",
                    index % 3 === 0 ? "bg-blue-500/10 border-blue-500/20" :
                    index % 3 === 1 ? "bg-purple-500/10 border-purple-500/20" :
                    "bg-green-500/10 border-green-500/20"
                  )}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <Card className="overflow-hidden border border-border">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="font-medium truncate">{value}</p>
      </CardContent>
    </Card>
  );
}
