import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import type { MenuItem } from "@shared/schema";

export default function MenuSection() {
  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  const featuredItems = menuItems?.filter(item => item.isPopular) || [];

  if (isLoading) {
    return (
      <section id="menu" className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="container mx-auto px-4 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-4">
            Our <span className="text-gold">Popular</span> Menu
          </h2>
          <p className="text-xl text-warm-brown max-w-3xl mx-auto mb-8">
            Every dish is prepared fresh to order with authentic spices and traditional cooking methods. 
            Each item is separate so you can create your perfect meal combination.
          </p>
          
          <div className="flex flex-wrap justify-center responsive-gap mb-6 md:mb-8">
            <button className="bg-red-600 text-white responsive-px responsive-py rounded-full font-semibold fluid-text-xs md:fluid-text-sm border-2 border-red-600 hover:bg-red-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 mobile-btn">
              🔥 Tandoor Specialties
            </button>
            <button className="bg-green-600 text-white responsive-px responsive-py rounded-full font-semibold fluid-text-xs md:fluid-text-sm border-2 border-green-600 hover:bg-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 mobile-btn">
              🌱 Vegetarian Options
            </button>
            <button className="bg-red-600 text-white responsive-px responsive-py rounded-full font-semibold fluid-text-xs md:fluid-text-sm border-2 border-red-600 hover:bg-red-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 mobile-btn">
              🌶️ Spice Levels Available
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-playfair font-bold text-burgundy">
                    {item.name}
                  </h3>
                  <div className="flex gap-1">
                    {item.isVegetarian && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        Veg
                      </Badge>
                    )}
                    {item.isVegan && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        Vegan
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-warm-brown mb-4">{item.description}</p>
                {item.spiceLevel && (
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-warm-brown mr-2">Spice Level:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-sm ${i < item.spiceLevel! ? 'text-red-500' : 'text-gray-300'}`}
                        >
                          🌶️
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">£{item.price}</span>
                  <Button 
                    asChild
                    className="bg-burgundy text-white hover:bg-red-800 font-semibold border-2 border-gold"
                  >
                    <a href="tel:+441302788882">📞 Order Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-green-600 hover:bg-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <a href="/menu">View Full Menu →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
