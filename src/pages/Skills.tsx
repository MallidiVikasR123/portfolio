
import { useEffect, useState } from "react";
import { Code, Database, Server, TerminalSquare, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

// Define skill categories and skills
const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "Java", level: 75 },
      { name: "Dart", level: 85 },
    ],
  },
  {
    name: "Frameworks",
    icon: <Award className="h-6 w-6" />,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "React JS", level: 60 },
    ],
  },
  {
    name: "Web Technologies",
    icon: <TerminalSquare className="h-6 w-6" />,
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    name: "Tools & Concepts",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 },
      { name: "OOP", level: 85 },
      { name: "API Integration", level: 80 },
    ],
  },
];

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCategories(prev => [...prev, index]);
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill-category").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container px-4 py-24 md:py-32">
      <SectionHeading
        title="Skills"
        subtitle="My technical expertise and proficiencies"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <div 
            key={category.name}
            className="skill-category animate-on-scroll"
            data-index={categoryIndex}
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary p-2 rounded-full bg-secondary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={visibleCategories.includes(categoryIndex) ? skill.level : 0} 
                        className="h-2 transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
                      />
                    </div>
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
