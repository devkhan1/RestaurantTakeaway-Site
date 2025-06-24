export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="bg-gold text-burgundy inline-block responsive-px responsive-py rounded-lg shadow-lg mb-6 border-2 border-burgundy">
            <h2 className="fluid-text-3xl md:fluid-text-4xl font-playfair font-bold mb-2">
              Experience <span className="text-red-800">Naaz Restaurant</span>
            </h2>
            <p className="fluid-text-sm md:fluid-text-lg text-burgundy font-semibold">
              15 years of authentic Indian cuisine in the heart of Doncaster
            </p>
          </div>
        </div>

        <div className="grid mobile-stack tablet-grid md:grid-cols-3 responsive-gap mb-6 md:mb-8">
          <div className="text-center responsive-px responsive-py bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl transition-all duration-300 cursor-default">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 fluid-text-lg md:fluid-text-xl shadow-lg cursor-default">
              🏢
            </div>
            <h3 className="fluid-text-base md:fluid-text-lg font-bold text-burgundy mb-2 border-b-2 border-gold/30 pb-2 cursor-default">Spacious Venue</h3>
            <p className="fluid-text-xs md:fluid-text-sm text-warm-brown leading-relaxed cursor-default">
              Our 2-story restaurant comfortably accommodates families and large groups with 
              private dining areas available for special events and celebrations.
            </p>
          </div>
          
          <div className="text-center responsive-px responsive-py bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl transition-all duration-300 cursor-default">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 fluid-text-lg md:fluid-text-xl shadow-lg cursor-default">
              🚗
            </div>
            <h3 className="fluid-text-base md:fluid-text-lg font-bold text-burgundy mb-2 border-b-2 border-gold/30 pb-2 cursor-default">Convenient Location</h3>
            <p className="fluid-text-xs md:fluid-text-sm text-warm-brown leading-relaxed cursor-default">
              Located on York Road with a large car park for easy access. 
              Perfect location in Doncaster with excellent transport links.
            </p>
          </div>
          
          <div className="text-center responsive-px responsive-py bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl transition-all duration-300 cursor-default">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 fluid-text-lg md:fluid-text-xl shadow-lg cursor-default">
              ♿
            </div>
            <h3 className="fluid-text-base md:fluid-text-lg font-bold text-burgundy mb-2 border-b-2 border-gold/30 pb-2 cursor-default">Accessibility</h3>
            <p className="fluid-text-xs md:fluid-text-sm text-warm-brown leading-relaxed cursor-default">
              Fully accessible venue with facilities for all guests. 
              We welcome everyone to enjoy our authentic Indian dining experience.
            </p>
          </div>
        </div>




      </div>
    </section>
  );
}
