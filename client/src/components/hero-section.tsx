import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center parallax"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.6), rgba(139, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
      }}
    >
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="bg-black/40 p-8 rounded-2xl backdrop-blur-sm">
          <h2 className="text-5xl lg:text-7xl font-playfair font-bold mb-6 text-shadow">
            Welcome to <span className="text-gold">Naaz</span>
          </h2>
          <h3 className="text-3xl lg:text-4xl font-playfair mb-6 text-gold">
            Authentic Indian Restaurant & Takeaway
          </h3>
          <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Proudly serving Doncaster for 15 years with the finest Indian dishes. Located on York Road with ample parking, 
            we&apos;re a spacious 2-story restaurant perfect for families, large groups, and special celebrations.
          </p>
          </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("menu")}
            className="bg-gold text-burgundy hover:bg-light-gold font-semibold px-8 py-4 text-lg transform hover:scale-105 transition duration-300"
          >
            View Menu
          </Button>
          <Button
            onClick={() => scrollToSection("reservation")}
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-burgundy font-semibold px-8 py-4 text-lg transform hover:scale-105 transition duration-300"
          >
            Book Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
