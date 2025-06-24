export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-6">
              About <span className="text-gold">Naaz</span>
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                We are proud to be serving the people of <strong>Doncaster</strong> and wider for <strong>15 years</strong>. Why not treat yourself to an evening out in the fabulous tastefully designed Naaz Restaurant.
              </p>
              
              <p>
                Managing the Home and coping with the demands of cooking are difficult enough, so why not give yourself a rest and a treat.
              </p>
              
              <p>
                Nearly every Restaurant & Takeaway whether they serve Eastern, Oriental or European dishes will claim that their food is the finest in the area. We do not feel that we are qualified to make such a claim but the fact that our Customers come back again and again is, we feel, proof enough.
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
