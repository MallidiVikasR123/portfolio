
import { useEffect } from "react";
import { Bookmark, GraduationCap, Calendar, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EDUCATION = [
  {
    institution: "Aditya Engineering College",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2022 - 2026 (Expected)",
    cgpa: "8.49",
    courses: [
      "Data Structures and Algorithms",
      "Web Development",
      "Databases",
      "Mobile Application Development"
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: "Cisco Certification in C Programming",
    issuer: "Cisco",
    category: "Programming"
  },
  {
    title: "Cisco Certification in Python",
    issuer: "Cisco",
    category: "Programming"
  },
  {
    title: "IT Specialist Certification in Python",
    issuer: "IT Specialist",
    category: "Programming"
  },
  {
    title: "IT Specialist Certification in HTML and CSS",
    issuer: "IT Specialist",
    category: "Web Development"
  },
  {
    title: "IT Specialist Certification in Java",
    issuer: "IT Specialist",
    category: "Programming"
  },
  {
    title: "Red Hat Administration Certification",
    issuer: "Red Hat",
    category: "Administration"
  }
];

export default function Education() {
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
        title="Education & Certifications"
        subtitle="My academic background and professional certificates"
      />

      <Tabs defaultValue="education" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="education" className="text-sm sm:text-base">Education</TabsTrigger>
          <TabsTrigger value="certifications" className="text-sm sm:text-base">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="education" className="space-y-8 animate-on-scroll">
          {EDUCATION.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <Badge key={i} variant="outline">{course}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="certifications" className="animate-on-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex gap-3 items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Bookmark className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                    </div>
                  </div>
                  <Badge className="w-fit mt-auto" variant="outline">{cert.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
