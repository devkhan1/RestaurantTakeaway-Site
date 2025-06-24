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
          <div className="grid md:grid-cols-3 gap-4">
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
      
      {/* Mobile Apps Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-amber-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-6">
            Download Our <span className="text-white">Apps!</span>
          </h2>
          <p className="text-xl text-burgundy mb-8 max-w-2xl mx-auto">
            Order directly from your phone for the fastest service and exclusive app-only offers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://apps.apple.com/no/app/naaz-doncaster/id1586115828?l=nb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition duration-300"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on App Store" 
                className="h-14"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.smartcoder.naaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-14"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-burgundy text-white inline-block px-8 py-4 rounded-lg shadow-lg mb-6 border-2 border-gold">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
                Verified <span className="text-gold">Customer Reviews</span>
              </h2>
              <p className="text-xl text-cream">
                15 years of serving Doncaster with authentic Indian cuisine - verified reviews from multiple platforms
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-xl border-2 border-green-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 bg-green-100 px-2 py-1 rounded">5 days ago</span>
              </div>
              <h4 className="font-bold text-burgundy mb-3 text-lg border-b border-green-200 pb-2">Outstanding food and service</h4>
              <p className="text-warm-brown mb-6 italic leading-relaxed">
                "Absolutely fantastic food! We've been coming here for years and the quality never disappoints. 
                The lamb biryani is exceptional and the staff are always welcoming. Great value for money."
              </p>
              <div className="font-semibold text-burgundy mb-2">Sarah Mitchell</div>
              <div className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">✓ Verified Trustpilot Review</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-xl border-2 border-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500 text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded">1 week ago</span>
              </div>
              <h4 className="font-bold text-burgundy mb-3 text-lg border-b border-blue-200 pb-2">Perfect for large groups</h4>
              <p className="text-warm-brown mb-6 italic leading-relaxed">
                "Perfect venue for our family celebration! The upstairs private dining area was ideal for our group of 20. 
                Excellent service and the B.Y.O policy made it very affordable. Will definitely return!"
              </p>
              <div className="font-semibold text-burgundy mb-2">David Patterson</div>
              <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">✓ Verified Google Review</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-xl border-2 border-red-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-burgundy text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 bg-red-100 px-2 py-1 rounded">2 weeks ago</span>
              </div>
              <h4 className="font-bold text-burgundy mb-3 text-lg border-b border-red-200 pb-2">Excellent location and food</h4>
              <p className="text-warm-brown mb-6 italic leading-relaxed">
                "Great location with easy parking on York Road. The tandoori dishes are amazing and 
                the vegetarian options are extensive. Authentic flavors and generous portions. Highly recommend!"
              </p>
              <div className="font-semibold text-burgundy mb-2">Priya Kumar</div>
              <div className="text-sm text-burgundy bg-red-100 px-3 py-1 rounded-full inline-block">✓ Verified Website Review</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-burgundy to-red-800 text-white px-10 py-5 text-lg font-bold rounded-xl border-2 border-gold hover:from-red-800 hover:to-burgundy hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
