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
    <footer className="bg-burgundy text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Naaz Restaurant</h3>
            <p className="mb-4">
              Serving authentic Indian cuisine to Doncaster for 15 years with passion and tradition.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gold hover:text-light-gold transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gold hover:text-light-gold transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gold hover:text-light-gold transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-gold transition duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                01302 788882
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Baldwin Avenue, Doncaster DN5 9BG
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕒</span>
                Tue-Sun: 17:30 – 22:30
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/30 mt-8 pt-8 text-center">
          <p>&copy; 2020 – 2025 ®. Naaz Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
