export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Restaurant interior with elegant table settings"
    },
    {
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional Indian spices arranged in containers"
    },
    {
      src: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Chef cooking in tandoor oven"
    },
    {
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Variety of Indian bread including naan and roti"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Elegant dining area with warm lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional Indian thali with multiple dishes"
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
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-105 transition duration-300 cursor-pointer" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
