import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Small delay to ensure page is loaded and close mobile menu
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  const navItems = [
    { label: "Home", id: "home", isLink: false },
    { label: "About", id: "about", isLink: false },
    { label: "Menu", id: "menu", isLink: true, href: "/menu" },
    { label: "Reservations", id: "reservation", isLink: false },
    { label: "Gallery", id: "gallery", isLink: false },
    { label: "Contact", id: "contact", isLink: false },
  ];

  return (
    <header className="text-white shadow-lg sticky top-0 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)', backdropFilter: 'blur(20px)' }}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 text-sm border-b border-gold/30">
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+15555742301" className="flex items-center text-gold hover:text-light-gold transition duration-300">
              <Phone className="w-4 h-4 mr-2" />
              555-SPICE-01
            </a>
            <span className="flex items-center text-white">
              <MapPin className="w-4 h-4 mr-2" />
              456 Main Street, Downtown ZIP 12345
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
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-playfair font-bold text-gold">Spice Garden</h1>
              <span className="ml-2 text-sm">Restaurant & Takeaway</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => 
              item.isLink ? (
                <Link
                  key={item.id}
                  href={item.href!}
                  className="hover:text-gold transition duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-gold transition duration-300 cursor-pointer"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("reservation")}
              className="bg-gold text-burgundy hover:bg-light-gold font-semibold"
            >
              TABLE RESERVATION
            </Button>
            <Button
              asChild
              className="bg-gold text-burgundy hover:bg-amber-400 font-bold border-2 border-burgundy px-4 py-2"
            >
              <a href="tel:+15555742301">📞 ORDER NOW</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white w-80">
              <div className="flex flex-col space-y-6 mt-8 p-4">
                {navItems.map((item) => 
                  item.isLink ? (
                    <Link
                      key={item.id}
                      href={item.href!}
                      className="text-left py-3 px-4 text-lg hover:text-gold hover:bg-gold/10 transition duration-300 cursor-pointer rounded-lg border border-gold/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left py-3 px-4 text-lg hover:text-gold hover:bg-gold/10 transition duration-300 cursor-pointer rounded-lg border border-gold/20"
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
