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
          <div className="bg-burgundy/20 p-4 md:p-6 rounded-lg border border-gold/30">
            <h3 className="text-lg md:text-xl font-bold text-gold mb-3 md:mb-4 border-b border-gold/50 pb-2">Opening Hours</h3>
            <div className="space-y-3 text-cream">
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">Monday - Thursday: 5:00 PM - 11:00 PM</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">Friday - Sunday: 5:00 PM - 11:30 PM</p>
              </div>
              <div className="bg-gold/20 p-2 rounded border border-gold cursor-default">
                <p className="text-gold font-semibold cursor-default">Closed Tuesdays</p>
              </div>
            </div>
          </div>
          
          <div className="bg-burgundy/20 p-4 md:p-6 rounded-lg border border-gold/30">
            <h3 className="text-lg md:text-xl font-bold text-gold mb-3 md:mb-4 border-b border-gold/50 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold">Home</a></li>
              <li><a href="/menu" className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold">Menu</a></li>
              <li><button onClick={() => scrollToSection('reservation')} className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold w-full text-left">Reservations</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-cream hover:text-gold transition duration-300 block bg-burgundy/30 p-2 rounded border border-gold/20 hover:bg-gold/20 hover:border-gold w-full text-left">Contact</button></li>
            </ul>
          </div>
          
          <div className="bg-burgundy/20 p-4 md:p-6 rounded-lg border border-gold/30">
            <h3 className="text-lg md:text-xl font-bold text-gold mb-3 md:mb-4 border-b border-gold/50 pb-2">Contact Info</h3>
            <div className="space-y-3 text-cream">
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">📞 01302 788882</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">📍 Baldwin Avenue, Doncaster DN5 9BG</p>
              </div>
              <div className="bg-burgundy/30 p-2 rounded border border-gold/20 cursor-default">
                <p className="cursor-default">✉️ info@naazrestaurant.co.uk</p>
              </div>
            </div>
          </div>
          
          <div className="bg-burgundy/20 p-4 md:p-6 rounded-lg border border-gold/30">
            <div className="bg-gold/20 p-3 md:p-4 rounded-lg border border-gold mb-4 cursor-default">
              <h3 className="text-lg md:text-xl font-bold text-gold border-b border-gold/50 pb-2 mb-3 cursor-default">Naaz Restaurant</h3>
              <p className="text-cream mb-4 leading-relaxed cursor-default">
                Authentic Indian cuisine served with passion for over 15 years in Doncaster.
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
          <p>&copy; 2020 – 2025 ®. Naaz Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
