import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MenuSection from "@/components/menu-section";
import ReservationSection from "@/components/reservation-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

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
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-4">
              What Our <span className="text-gold">Customers</span> Say
            </h2>
            <p className="text-xl text-warm-brown max-w-2xl mx-auto">
              15 years of serving Doncaster with authentic Indian cuisine and exceptional service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">⭐</span>
                ))}
              </div>
              <p className="text-warm-brown mb-4 italic">
                "Absolutely fantastic food! We've been coming here for years and the quality never disappoints. 
                The lamb biryani is exceptional and the staff are always welcoming."
              </p>
              <div className="font-semibold text-burgundy">- Sarah M.</div>
              <div className="text-sm text-warm-brown">Regular Customer</div>
            </div>
            
            <div className="bg-cream p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">⭐</span>
                ))}
              </div>
              <p className="text-warm-brown mb-4 italic">
                "Perfect venue for our family celebration! The upstairs private dining area was ideal for our group of 20. 
                Excellent service and the B.Y.O policy made it very affordable."
              </p>
              <div className="font-semibold text-burgundy">- David P.</div>
              <div className="text-sm text-warm-brown">Family Event</div>
            </div>
            
            <div className="bg-cream p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">⭐</span>
                ))}
              </div>
              <p className="text-warm-brown mb-4 italic">
                "Great location with easy parking on York Road. The tandoori dishes are amazing and 
                the vegetarian options are extensive. Highly recommend!"
              </p>
              <div className="font-semibold text-burgundy">- Priya K.</div>
              <div className="text-sm text-warm-brown">Local Resident</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
