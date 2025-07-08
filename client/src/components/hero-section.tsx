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
            Welcome to <span className="text-gold">Spice Garden</span>
          </h2>
          <h3 className="text-3xl lg:text-4xl font-playfair mb-6 text-gold">
            Authentic Indian Restaurant & Takeaway
          </h3>
          <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Proudly serving the community for 14 years with the finest Indian dishes. Located on Main Street with convenient parking, 
            we&apos;re a spacious 2-story restaurant perfect for families, large groups, and special celebrations.
          </p>
          </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <Button
            asChild
            className="bg-gradient-to-r from-gold to-amber-400 text-burgundy hover:from-amber-400 hover:to-gold font-bold px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-burgundy"
          >
            <a href="/menu">
              📖 View Full Menu
            </a>
          </Button>
          <Button
            onClick={() => scrollToSection("reservation")}
            className="bg-gradient-to-r from-burgundy to-red-800 text-white hover:from-red-800 hover:to-burgundy font-bold px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-gold"
          >
            🍽️ Book Table Now
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
