import { Phone, MapPin, Utensils, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const openingHours = [
    { day: "Monday", hours: "CLOSED", isClosed: true },
    { day: "Tuesday", hours: "17:30 – 22:30", isClosed: false },
    { day: "Wednesday", hours: "17:30 – 22:30", isClosed: false },
    { day: "Thursday", hours: "17:30 – 22:30", isClosed: false },
    { day: "Friday", hours: "17:30 – 22:30", isClosed: false },
    { day: "Saturday", hours: "17:30 – 22:30", isClosed: false },
    { day: "Sunday", hours: "17:30 – 22:30", isClosed: false },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Opening Hours */}
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-3xl font-playfair font-bold text-burgundy mb-6">Opening Hours</h3>
              <div className="space-y-4">
                {openingHours.map((item) => (
                  <div 
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-gold/20"
                  >
                    <span className="font-semibold">{item.day}:</span>
                    <span className={item.isClosed ? "text-red-600 font-semibold" : ""}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gold/10 rounded-lg">
                <p className="text-burgundy font-semibold text-center">WE ARE OPEN ALL HOLIDAYS</p>
                <p className="text-burgundy text-center">(INCLUDING BANK HOLIDAYS)</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-3xl font-playfair font-bold text-burgundy mb-6">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-gold text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-burgundy">Phone</h4>
                    <a href="tel:+441302788882" className="text-warm-brown hover:text-gold transition duration-300 font-semibold">
                      01302 788882
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-burgundy">Address</h4>
                    <p className="text-warm-brown">
                      Baldwin Avenue<br />
                      Doncaster DN5 9BG
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Utensils className="text-gold text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-burgundy">Services</h4>
                    <p className="text-warm-brown">Dine-in • Takeaway • Delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Wine className="text-gold text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-burgundy">B.Y.O Alcohol Welcome</h4>
                    <p className="text-warm-brown">Bring your own drinks - no corkage charge!</p>
                  </div>
                </div>
                
                <div className="bg-gold/10 p-4 rounded-lg">
                  <h4 className="font-bold text-burgundy mb-2">Perfect for Events:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-warm-brown">
                    <div>• Birthday Parties</div>
                    <div>• Family Gatherings</div>
                    <div>• Corporate Events</div>
                    <div>• Anniversary Dinners</div>
                    <div>• Large Group Bookings</div>
                    <div>• Private Functions</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button 
                  asChild
                  className="w-full bg-burgundy text-cream hover:bg-opacity-90 font-semibold"
                >
                  <a href="tel:01302788882">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 01302 788882
                  </a>
                </Button>
                <Button 
                  onClick={() => scrollToSection("reservation")}
                  className="w-full bg-gold text-burgundy hover:bg-light-gold font-semibold"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Book Table
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Google Maps */}
        <Card className="mt-12 bg-white rounded-xl shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-3xl font-playfair font-bold text-burgundy mb-6 text-center">Find Us</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.4!2d-1.15538!3d53.533336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDMxJzU5LjIiTiAxwrAwOScxOS40Ilc!5e0!3m2!1sen!2suk!4v1" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
