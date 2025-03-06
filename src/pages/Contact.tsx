
import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
        title="Contact Me"
        subtitle="Get in touch for collaborations, opportunities, or just to say hi!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Info Cards */}
        <div className="space-y-6 animate-on-scroll">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:mallidivikasreddy8@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      mallidivikasreddy8@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+919553167548" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +91 9553167548
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/MallidiVikasR123" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vikas-reddy-mallidi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Coding Profiles */}
          <Card className="overflow-hidden animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Coding Profiles</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "LeetCode", url: "https://leetcode.com/u/Mallidivr_123/" },
                  { name: "GeeksforGeeks", url: "https://geeksforgeeks.org/user/mallidivi0wt0" },
                  { name: "CodeChef", url: "https://codechef.com/users/vikas123_4" },
                  { name: "HackerRank", url: "https://hackerrank.com/profile/mallidivikasred1" }
                ].map((profile, index) => (
                  <a 
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center bg-primary/10",
                      index % 4 === 0 && "bg-orange-500/10",
                      index % 4 === 1 && "bg-green-500/10",
                      index % 4 === 2 && "bg-red-500/10",
                      index % 4 === 3 && "bg-blue-500/10"
                    )}>
                      <span className="font-bold text-sm">
                        {profile.name.substring(0, 2)}
                      </span>
                    </div>
                    <span className="font-medium text-sm">{profile.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <Card className="overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
