export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-gold text-burgundy inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg mb-6 border-2 border-burgundy">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-bold mb-2">
              Experience <span className="text-red-800">Naaz Restaurant</span>
            </h2>
            <p className="text-sm md:text-xl text-burgundy font-semibold">
              15 years of authentic Indian cuisine in the heart of Doncaster
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl transition-all duration-300 cursor-default mobile-card-spacing">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl shadow-lg cursor-default">
              🏢
            </div>
            <h3 className="text-lg md:text-xl font-bold text-burgundy mb-2 md:mb-3 border-b-2 border-gold/30 pb-2 cursor-default mobile-header">Spacious Venue</h3>
            <p className="text-xs md:text-sm text-warm-brown leading-relaxed cursor-default xs-mobile-text">
              Our 2-story restaurant comfortably accommodates families and large groups with 
              private dining areas available for special events and celebrations.
            </p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl transition-all duration-300 cursor-default mobile-card-spacing">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl shadow-lg cursor-default">
              🚗
            </div>
            <h3 className="text-lg md:text-xl font-bold text-burgundy mb-2 md:mb-3 border-b-2 border-gold/30 pb-2 cursor-default mobile-header">Convenient Location</h3>
            <p className="text-xs md:text-sm text-warm-brown leading-relaxed cursor-default xs-mobile-text">
              Located on York Road with a large car park for easy access. 
              Perfect location in Doncaster with excellent transport links.
            </p>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl transition-all duration-300 cursor-default mobile-card-spacing">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl shadow-lg cursor-default">
              ♿
            </div>
            <h3 className="text-lg md:text-xl font-bold text-burgundy mb-2 md:mb-3 border-b-2 border-gold/30 pb-2 cursor-default mobile-header">Accessibility</h3>
            <p className="text-xs md:text-sm text-warm-brown leading-relaxed cursor-default xs-mobile-text">
              Fully accessible venue with facilities for all guests. 
              We welcome everyone to enjoy our authentic Indian dining experience.
            </p>
          </div>
        </div>




      </div>
    </section>
  );
}
