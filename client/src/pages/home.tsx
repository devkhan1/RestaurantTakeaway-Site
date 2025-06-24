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
      <section className="bg-gradient-to-r from-gold to-amber-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-playfair font-bold text-burgundy mb-2">
            Special Christmas Offer
          </h3>
          <p className="text-burgundy text-lg">
            Christmas Day Lunch Available - Book Now to Avoid Disappointment!
          </p>
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

      <ContactSection />
      <Footer />
    </div>
  );
}
