import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Reservations", id: "reservation" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-burgundy text-cream shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 text-sm border-b border-gold/30">
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center text-gold">
              <Phone className="w-4 h-4 mr-2" />
              01302 788882
            </span>
            <span className="flex items-center text-cream">
              <MapPin className="w-4 h-4 mr-2" />
              Baldwin Avenue, Doncaster DN5 9BG
            </span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="bg-gold text-burgundy px-3 py-1 rounded-full font-bold text-xs animate-pulse">
              10% OFF COLLECTION
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-xs">
              B.Y.O ALCOHOL
            </span>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-3xl font-playfair font-bold text-gold">Naaz</h1>
            <span className="ml-2 text-sm">Restaurant & Takeaway</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-gold transition duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("reservation")}
              className="bg-gold text-burgundy hover:bg-light-gold font-semibold"
            >
              TABLE RESERVATION
            </Button>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-burgundy font-semibold"
            >
              ORDER NOW
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-burgundy text-cream">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left py-2 hover:text-gold transition duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
