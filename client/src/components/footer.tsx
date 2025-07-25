import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Reservations", id: "reservation" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-burgundy text-cream py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid mobile-stack sm:grid-cols-2 lg:grid-cols-4 responsive-gap">
          <div className="bg-burgundy/20 responsive-px responsive-py rounded-lg border border-gold/30">
            <h3 className="fluid-text-base md:fluid-text-lg font-bold text-gold mb-3 md:mb-4 border-b border-gold/50 pb-2">Opening Hours</h3>
            <div className="space-y-3 text-cream">
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">Monday: CLOSED</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">Tuesday - Thursday: 5:30 PM - 10:00 PM</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">Friday - Sunday: 5:30 PM - 10:30 PM</p>
              </div>
              <div className="bg-gold/20 p-2 rounded border border-gold cursor-default">
                <p className="text-gold font-semibold cursor-default">Closed Mondays</p>
              </div>
            </div>
          </div>
          
          <div className="bg-burgundy/20 responsive-px responsive-py rounded-lg border border-gold/30">
            <h3 className="fluid-text-base md:fluid-text-lg font-bold text-gold mb-3 md:mb-4 border-b border-gold/50 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold">Home</a></li>
              <li><a href="/menu" className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold">Menu</a></li>
              <li><button onClick={() => scrollToSection('reservation')} className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold w-full text-left">Reservations</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold w-full text-left">Contact</button></li>
            </ul>
          </div>
          
          <div className="bg-burgundy/20 responsive-px responsive-py rounded-lg border border-gold/30">
            <h3 className="fluid-text-base md:fluid-text-lg font-bold text-gold mb-3 md:mb-4 border-b border-gold/50 pb-2">Contact Info</h3>
            <div className="space-y-3 text-cream">
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">📞 555-SPICE-01</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">📍 456 Main Street, Downtown ZIP 12345</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">✉️ info@spicegarden.demo</p>
              </div>
            </div>
          </div>
          
          <div className="bg-burgundy/20 responsive-px responsive-py rounded-lg border border-gold/30">
            <div className="bg-gold/20 responsive-px responsive-py rounded-lg border border-gold mb-4 cursor-default">
              <h3 className="fluid-text-base md:fluid-text-lg font-bold text-gold border-b border-gold/50 pb-2 mb-3 cursor-default">Spice Garden Restaurant</h3>
              <p className="text-cream mb-4 leading-relaxed cursor-default">
                Authentic Indian cuisine served with passion for over 14 years in the city.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="bg-gradient-to-r from-gold to-amber-400 text-burgundy px-6 py-3 rounded-lg font-bold border-2 border-gold hover:from-amber-400 hover:to-gold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full"
            >
              Book Table
            </button>
          </div>
        </div>
        
        <div className="border-t border-gold/30 mt-8 pt-8 text-center">
          <p>&copy; 2020 – 2025 ®. Spice Garden Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
