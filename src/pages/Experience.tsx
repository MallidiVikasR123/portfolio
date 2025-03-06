
import { useEffect } from "react";
import { CalendarDays, Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EXPERIENCES = [
  {
    title: "Freelance Developer",
    company: "",
    period: "December 2024 - January 2025",
    description: [
      "Developed and deployed mobile applications using Flutter, ensuring a seamless user experience.",
      "Collaborated with clients to gather requirements and deliver customized solutions.",
      "Integrated third-party APIs (e.g., OpenStreetMap API) to enhance application functionality."
    ],
    skills: ["Flutter", "API Integration", "Mobile Development"]
  },
  {
    title: "Intern",
    company: "Iship",
    period: "June 2024 - July 2024",
    description: [
      "Developed an anime streaming and manga reading entertainment app using Dart and Flutter, enhancing user engagement.",
      "Collaborated with cross-functional teams to integrate features like user authentication and content filtering, improving app functionality by 20%.",
      "Conducted rigorous testing and debugging, reducing app crash rates by 15% and ensuring a seamless user experience."
    ],
    skills: ["Dart", "Flutter", "Firebase", "Authentication"]
  }
];

export default function Experience() {
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
        title="Experience"
        subtitle="My professional journey and work experience"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-[-0.5px]"></div>

        {/* Experience items */}
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index}
            className={cn(
              "relative mb-12 animate-on-scroll",
              "md:w-1/2",
              index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
            )}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline dot */}
            <div className={cn(
              "absolute top-5 w-5 h-5 rounded-full bg-primary z-10",
              index % 2 === 0 ? "left-0 md:-left-[10px]" : "left-0 md:-left-[10px]"
            )}></div>

            <Card className="overflow-hidden border border-border">
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground mb-3 gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm">{experience.period}</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  {experience.company && (
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{experience.company}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-4 list-disc list-inside text-muted-foreground">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
