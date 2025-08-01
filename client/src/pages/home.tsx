import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MenuSection from "@/components/menu-section";
import ReservationSection from "@/components/reservation-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      
      {/* Special Offers Banner */}
      <section className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-playfair font-bold mb-4 animate-pulse">
              🎄 Special Christmas Offers 🎄
            </h3>
          </div>
          <div className="grid mobile-stack md:grid-cols-3 responsive-gap">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">Christmas Day Lunch</h4>
              <p className="text-sm">Book Now to Avoid Disappointment!</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">10% Off Collection</h4>
              <p className="text-sm">Save on all takeaway orders</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">B.Y.O Alcohol</h4>
              <p className="text-sm">Bring your own drinks welcome!</p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <GallerySection />

      {/* Customer Reviews Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="bg-blue-600 text-white inline-block responsive-px responsive-py rounded-lg shadow-lg mb-6 border-2 border-blue-800">
              <h2 className="fluid-text-2xl md:fluid-text-3xl lg:fluid-text-4xl font-playfair font-bold mb-2">
                Verified <span className="text-yellow-300">Customer Reviews</span>
              </h2>
              <p className="fluid-text-sm md:fluid-text-lg text-blue-100">
                14 years of serving the community with authentic Indian cuisine - verified reviews from multiple platforms
              </p>
            </div>
          </div>
          
          <div className="grid mobile-stack tablet-grid md:grid-cols-3 responsive-gap">
            <div className="bg-gradient-to-br from-green-50 to-white responsive-px responsive-py rounded-xl shadow-xl border-2 border-green-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-default">
              <div className="flex items-center mb-6 cursor-default">
                <div className="flex mr-3 cursor-default">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xl cursor-default">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded cursor-default">5 days ago</span>
              </div>
              <h4 className="font-bold text-burgundy mb-3 text-lg border-b border-green-200 pb-2 cursor-default">Outstanding food and service</h4>
              <p className="text-warm-brown mb-6 italic leading-relaxed cursor-default">
                "Absolutely fantastic food! We've been coming here for years and the quality never disappoints. 
                The lamb biryani is exceptional and the staff are always welcoming. Great value for money."
              </p>
              <div className="font-semibold text-burgundy mb-2 cursor-default">Sarah Mitchell</div>
              <div className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block cursor-default">✓ Verified Trustpilot Review</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white responsive-px responsive-py rounded-xl shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-default">
              <div className="flex items-center mb-6 cursor-default">
                <div className="flex mr-3 cursor-default">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500 text-xl cursor-default">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded cursor-default">1 week ago</span>
              </div>
              <h4 className="font-bold text-burgundy mb-3 text-lg border-b border-blue-200 pb-2 cursor-default">Perfect for large groups</h4>
              <p className="text-warm-brown mb-6 italic leading-relaxed cursor-default">
                "Perfect venue for our family celebration! The upstairs private dining area was ideal for our group of 20. 
                Excellent service and the B.Y.O policy made it very affordable. Will definitely return!"
              </p>
              <div className="font-semibold text-burgundy mb-2 cursor-default">David Patterson</div>
              <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block cursor-default">✓ Verified Google Review</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white responsive-px responsive-py rounded-xl shadow-xl border-2 border-red-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-default">
              <div className="flex items-center mb-6 cursor-default">
                <div className="flex mr-3 cursor-default">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-burgundy text-xl cursor-default">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 bg-red-100 px-2 py-1 rounded cursor-default">2 weeks ago</span>
              </div>
              <h4 className="font-bold text-burgundy mb-3 text-lg border-b border-red-200 pb-2 cursor-default">Excellent location and food</h4>
              <p className="text-warm-brown mb-6 italic leading-relaxed cursor-default">
                "Great location with easy parking on York Road. The tandoori dishes are amazing and 
                the vegetarian options are extensive. Authentic flavors and generous portions. Highly recommend!"
              </p>
              <div className="font-semibold text-burgundy mb-2 cursor-default">Priya Kumar</div>
              <div className="text-sm text-burgundy bg-red-100 px-3 py-1 rounded-full inline-block cursor-default">✓ Verified Website Review</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
