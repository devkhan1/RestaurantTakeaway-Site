export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-burgundy text-white inline-block px-8 py-4 rounded-lg shadow-lg mb-6 border-2 border-gold">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-2">
              Experience <span className="text-gold">Naaz Restaurant</span>
            </h2>
            <p className="text-xl text-cream">
              15 years of authentic Indian cuisine in the heart of Doncaster
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg cursor-default">
              🏢
            </div>
            <h3 className="text-2xl font-bold text-burgundy mb-4 border-b-2 border-gold/30 pb-2 cursor-default">Spacious Venue</h3>
            <p className="text-warm-brown leading-relaxed cursor-default">
              Our 2-story restaurant comfortably accommodates families and large groups with 
              private dining areas available for special events and celebrations.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg cursor-default">
              🚗
            </div>
            <h3 className="text-2xl font-bold text-burgundy mb-4 border-b-2 border-gold/30 pb-2 cursor-default">Convenient Location</h3>
            <p className="text-warm-brown leading-relaxed cursor-default">
              Located on York Road with a large car park for easy access. 
              Perfect location in Doncaster with excellent transport links.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-cream to-white rounded-xl shadow-xl border-2 border-gold/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-400 text-burgundy rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg cursor-default">
              ♿
            </div>
            <h3 className="text-2xl font-bold text-burgundy mb-4 border-b-2 border-gold/30 pb-2 cursor-default">Accessibility</h3>
            <p className="text-warm-brown leading-relaxed cursor-default">
              Fully accessible venue with facilities for all guests. 
              We welcome everyone to enjoy our authentic Indian dining experience.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-burgundy via-red-800 to-burgundy text-cream p-10 rounded-xl shadow-2xl text-center border-4 border-gold/30 cursor-default">
          <div className="bg-gold/10 rounded-lg p-6 mb-6 border border-gold/20 cursor-default">
            <h3 className="text-3xl font-bold mb-4 text-gold cursor-default">Download Our Orders Directly From Your Phone</h3>
            <p className="text-xl text-cream/90 leading-relaxed cursor-default">
              Quick and convenient ordering - Call us directly for takeaway and delivery
            </p>
          </div>
          <a 
            href="tel:+441302788882"
            className="bg-gradient-to-r from-gold to-amber-400 text-burgundy px-10 py-5 rounded-xl font-bold text-lg border-2 border-gold hover:from-amber-400 hover:to-gold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            📞 Call Now: 01302 788882
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-6">
              About <span className="text-gold">Naaz</span>
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We are proud to be serving the people of <strong>Doncaster</strong> for <strong>15 years</strong> from our spacious <strong>2-story restaurant</strong> on the main York Road. With ample parking and wheelchair accessibility, we welcome families, large groups, and special celebrations.
              </p>
              
              <div className="bg-gradient-to-r from-gold/20 to-amber-100 p-6 rounded-lg border-l-4 border-gold">
                <h4 className="font-bold text-burgundy mb-3">Our Facilities Include:</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-warm-brown">
                  <li>✓ Large car park on York Road</li>
                  <li>✓ Wheelchair accessible entrance</li>
                  <li>✓ Family-friendly dining areas</li>
                  <li>✓ Large tables for group bookings</li>
                  <li>✓ Children's high chairs available</li>
                  <li>✓ B.Y.O alcohol policy</li>
                  <li>✓ Private party room upstairs</li>
                  <li>✓ Professional waiting staff</li>
                </ul>
              </div>
              
              <p>
                Located conveniently on the main York Road with shops, amenities, and transport links nearby. Our experienced team provides attentive service whether you're dining for two or celebrating with a large group.
              </p>
              
              <div className="bg-cream p-6 rounded-lg border-l-4 border-gold mt-6">
                <p className="font-semibold text-burgundy mb-4">
                  "Food is to be enjoyed, we feel that it has to be the very best available. The preparation and the cooking of good food is our job, doing it well is our pleasure."
                </p>
                <p className="text-warm-brown">
                  - <strong>Mr Ali</strong>, Executive Chef & Senior Executive Partner
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Delicious Indian curry dishes" 
              className="rounded-lg shadow-lg w-full h-48 object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Chef preparing authentic Indian cuisine" 
              className="rounded-lg shadow-lg w-full h-48 object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Elegant restaurant interior" 
              className="rounded-lg shadow-lg w-full h-48 object-cover col-span-2" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
