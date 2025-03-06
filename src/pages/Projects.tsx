
import { useState, useEffect } from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define project data
const PROJECTS = [
  {
    title: "College Bus and Car Tracking App",
    description: "Developed a multi-role Flutter app for Admin, Driver, and Student modules. Admin can manage buses and track live locations; drivers share live locations, and students can search buses and track their live locations.",
    githubLink: "https://github.com/MallidiVikasR123",
    demoLink: "",
    image: "/placeholder.svg",
    technologies: ["Flutter", "OpenStreetMap API", "GPS", "Nodejs", "Render"]
  },
  {
    title: "GitHub Repositories App",
    description: "Developed a Flutter app to fetch and display GitHub repositories, followers, and following information. Integrated GitHub API for real-time data access and provided an intuitive user interface.",
    githubLink: "https://github.com/MallidiVikasR123",
    demoLink: "",
    image: "/placeholder.svg",
    technologies: ["Flutter", "GitHub API"]
  },
  {
    title: "Simple Website Template",
    description: "Designed a responsive website template with a navigation bar and Bootstrap grid system, ensuring compatibility across devices. Enhanced visual appeal and usability, achieving a 15% increase in user engagement during testing.",
    githubLink: "https://github.com/MallidiVikasR123",
    demoLink: "",
    image: "/placeholder.svg",
    technologies: ["HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Animax App",
    description: "Developed and maintained features for the Animax App, enhancing user experience and improving app performance by 50%. Conducted thorough testing and debugging, ensuring seamless streaming functionality and reducing crashes by 20%.",
    githubLink: "https://github.com/MallidiVikasR123",
    demoLink: "",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Firebase"]
  },
  {
    title: "Hoot App",
    description: "Hoot is a group project designed to improve communication and verbal skills through a Flutter app with modules like reading passages, dictation, and retelling sentences. I developed the Dictation module, where users write words they hear with accuracy feedback, and the Sentence Construction module.",
    githubLink: "https://github.com/MallidiVikasR123",
    demoLink: "",
    image: "/placeholder.svg",
    technologies: ["Flutter", "Nodejs", "MongoDB"]
  }
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleProjects(prev => [...prev, index]);
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".project-card").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container px-4 py-24 md:py-32">
      <SectionHeading
        title="Projects"
        subtitle="Showcasing my technical skills and creative solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="project-card animate-on-scroll"
            data-index={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg border border-border">
              <div className="relative w-full h-48 overflow-hidden bg-secondary/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-6 flex-grow">
                <div className="flex gap-3 items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FolderGit2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 py-4 border-t">
                <div className="flex gap-3 w-full">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1 gap-2"
                  >
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  
                  {project.demoLink && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      asChild
                      className="flex-1 gap-2"
                    >
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
