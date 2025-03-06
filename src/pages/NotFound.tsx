
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/60 dark:from-background dark:to-background/80 z-10"></div>
        
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-500/10 dark:bg-red-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-md text-center px-4">
        <div className="space-y-6">
          <h1 className="text-9xl font-display font-bold text-primary">404</h1>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          <Button asChild className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
