export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-burgundy text-white inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg mb-6 border-2 border-gold">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-bold mb-2">
              Experience <span className="text-gold">Naaz Restaurant</span>
            </h2>
            <p className="text-sm md:text-xl text-cream">
              15 years of authentic Indian cuisine in the heart of Doncaster
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="text-center p-6 md:p-8 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl shadow-lg cursor-default">
              🏢
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-burgundy mb-3 md:mb-4 border-b-2 border-gold/30 pb-2 cursor-default">Spacious Venue</h3>
            <p className="text-sm md:text-base text-warm-brown leading-relaxed cursor-default">
              Our 2-story restaurant comfortably accommodates families and large groups with 
              private dining areas available for special events and celebrations.
            </p>
          </div>
          
          <div className="text-center p-6 md:p-8 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl shadow-lg cursor-default">
              🚗
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-burgundy mb-3 md:mb-4 border-b-2 border-gold/30 pb-2 cursor-default">Convenient Location</h3>
            <p className="text-sm md:text-base text-warm-brown leading-relaxed cursor-default">
              Located on York Road with a large car park for easy access. 
              Perfect location in Doncaster with excellent transport links.
            </p>
          </div>
          
          <div className="text-center p-6 md:p-8 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl shadow-lg cursor-default">
              ♿
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-burgundy mb-3 md:mb-4 border-b-2 border-gold/30 pb-2 cursor-default">Accessibility</h3>
            <p className="text-sm md:text-base text-warm-brown leading-relaxed cursor-default">
              Fully accessible venue with facilities for all guests. 
              We welcome everyone to enjoy our authentic Indian dining experience.
            </p>
          </div>
        </div>




      </div>
    </section>
  );
}
