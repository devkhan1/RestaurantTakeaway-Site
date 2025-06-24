export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&auto=format&fit=crop",
      alt: "Naaz Restaurant - Spacious 2-story dining area",
      title: "Main Dining Area"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&auto=format&fit=crop",
      alt: "Family-friendly dining with large tables",
      title: "Family Dining Space"
    },
    {
      src: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?w=600&h=400&auto=format&fit=crop",
      alt: "Our expert chef cooking in the traditional tandoor",
      title: "Tandoor Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&auto=format&fit=crop",
      alt: "Fresh spices and ingredients used daily",
      title: "Fresh Spices & Ingredients"
    },
    {
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&auto=format&fit=crop",
      alt: "Freshly baked naan and Indian breads",
      title: "Fresh Baked Breads"
    },
    {
      src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&auto=format&fit=crop",
      alt: "Complete thali meals perfect for families",
      title: "Traditional Thali Meals"
    },
    {
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&auto=format&fit=crop",
      alt: "Signature curry dishes",
      title: "Signature Curries"
    },
    {
      src: "https://images.unsplash.com/photo-1563379091068-d4a49fa7d45f?w=600&h=400&auto=format&fit=crop",
      alt: "Aromatic biryani dishes",
      title: "Aromatic Biryanis"
    },
    {
      src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&auto=format&fit=crop",
      alt: "Tandoori specialties grilled to perfection",
      title: "Tandoori Specialties"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-4">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-xl text-warm-brown max-w-2xl mx-auto">
            Take a glimpse into our restaurant atmosphere and delicious creations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="rounded-lg shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 cursor-pointer" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <h3 className="text-white font-playfair text-lg font-bold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-burgundy mb-6">
              Experience Naaz Restaurant
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <h4 className="font-bold text-gold mb-2">🏗️ Spacious Venue</h4>
                <p className="text-warm-brown">2-story restaurant with ample seating for large groups and family celebrations</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gold mb-2">🚗 Convenient Location</h4>
                <p className="text-warm-brown">Located on main York Road with large car park and easy access to amenities</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gold mb-2">♿ Accessible</h4>
                <p className="text-warm-brown">Wheelchair accessible with family-friendly facilities and professional service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
