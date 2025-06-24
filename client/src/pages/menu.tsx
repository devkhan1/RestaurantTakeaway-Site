import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChefHat, Flame } from "lucide-react";
import type { MenuItem } from "@shared/schema";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  const categories = [
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "starters", name: "Starters", icon: "🥗" },
    { id: "mains", name: "Main Courses", icon: "🍛" },
    { id: "bread", name: "Bread & Rice", icon: "🍞" },
    { id: "rice", name: "Rice", icon: "🍚" },
    { id: "desserts", name: "Desserts", icon: "🍮" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems?.filter(item => item.category === selectedCategory);

  const getSpiceIndicator = (level: number | null) => {
    if (!level) return null;
    return (
      <div className="flex items-center gap-1">
        <Flame className="w-4 h-4 text-red-500" />
        <span className="text-sm text-warm-brown">
          {Array.from({ length: level }, (_, i) => "🌶️").join("")}
        </span>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />
        <div className="flex justify-center items-center h-96">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-burgundy to-red-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <ChefHat className="w-16 h-16 text-gold" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Our Complete <span className="text-gold">Menu</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Authentic Indian cuisine prepared fresh daily with traditional spices and cooking methods. 
            Every dish tells a story of heritage and flavor.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gold text-burgundy hover:bg-light-gold"
                    : "border-gold text-gold hover:bg-gold hover:text-burgundy"
                } font-semibold`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems?.map((item) => (
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
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-bold text-burgundy">
                      {item.name}
                    </h3>
                    <div className="flex gap-1 flex-wrap">
                      {item.isPopular && (
                        <Badge className="bg-gold text-burgundy text-xs">
                          Popular
                        </Badge>
                      )}
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
                  
                  <p className="text-warm-brown mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.spiceLevel && (
                    <div className="mb-4">
                      {getSpiceIndicator(item.spiceLevel)}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold">£{item.price}</span>
                    <Button className="bg-burgundy text-cream hover:bg-opacity-90 font-semibold">
                      Add to Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {(!filteredItems || filteredItems.length === 0) && (
            <div className="text-center py-12">
              <p className="text-xl text-warm-brown">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Order Information */}
      <section className="py-16 bg-burgundy text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-8">Ready to Order?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gold">📞 Call & Collect</h3>
              <p className="mb-4">Phone your order and collect in-store</p>
              <p className="text-gold font-bold">10% DISCOUNT ON COLLECTION</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gold">🏠 Dine In</h3>
              <p className="mb-4">Book a table and enjoy our restaurant atmosphere</p>
              <p className="text-gold font-bold">B.Y.O ALCOHOL WELCOME</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gold">🚚 Delivery</h3>
              <p className="mb-4">Get your food delivered to your door</p>
              <p className="text-gold font-bold">FAST & RELIABLE SERVICE</p>
            </div>
          </div>
          
          <div className="mt-12 space-y-4">
            <Button 
              asChild
              className="bg-gold text-burgundy hover:bg-light-gold font-semibold px-8 py-4 text-lg mr-4"
            >
              <a href="tel:01302788882">Call 01302 788882</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-burgundy font-semibold px-8 py-4 text-lg"
            >
              <a href="/">Book Table</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}