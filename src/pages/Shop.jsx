import React, { useState, useEffect, useMemo } from 'react';

const Shop = () => {
  // Product categories with multiple images
  const productCategories = useMemo(()=>[
    {
      id: 1,
      title: "Wedding Varmala",
      description: "Exquisite flower garlands for the wedding ceremony, made with fresh roses, marigolds, and orchids",
      priceRange: "₹2,000 - ₹5,000",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1572859730776-0d3e6f1d4d3c?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Fresh Flowers", "Custom Length", "Scented", "Traditional Design"],
      popular: true
    },
    {
      id: 2,
      title: "Bridal Bouquets",
      description: "Elegant bridal bouquets with roses, lilies, and seasonal flowers for the special day",
      priceRange: "₹1,500 - ₹8,000",
      images: [
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Hand-tied", "Ribbon Wrap", "Preserved Options", "Custom Colors"],
      popular: true
    },
    {
      id: 3,
      title: "Puja Flower Sets",
      description: "Complete flower sets for religious ceremonies including lotus, marigold, and rose arrangements",
      priceRange: "₹500 - ₹2,000",
      images: [
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1572859730776-0d3e6f1d4d3c?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Traditional", "Fresh & Fragrant", "Complete Sets", "Daily Puja"],
      popular: false
    },
    {
      id: 4,
      title: "Groom's Flower Jewellery",
      description: "Intricate flower jewellery for groom's haldi and mehendi ceremonies",
      priceRange: "₹3,000 - ₹9,000",
      images: [
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Custom Design", "Lightweight", "Fragrant", "Traditional & Modern"],
      popular: true
    },
    {
      id: 5,
      title: "Venue Decor Flowers",
      description: "Bulk flowers for mandap decoration, stage background, and venue floral arrangements",
      priceRange: "₹5,000 - ₹30,000",
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Bulk Quantity", "Fresh Delivery", "Multiple Colors", "Professional Setup"],
      popular: false
    },
    {
      id: 6,
      title: "Table Centerpieces",
      description: "Beautiful floral centerpieces for wedding reception tables and dinner arrangements",
      priceRange: "₹1,000 - ₹4,000",
      images: [
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Elegant Design", "Various Sizes", "Long Lasting", "Theme Matching"],
      popular: true
    },
    {
      id: 7,
      title: "Flower Petal Baskets",
      description: "Decorative baskets filled with fragrant flower petals for the wedding procession",
      priceRange: "₹800 - ₹2,500",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Mixed Petals", "Fragrant", "Colorful", "Custom Quantities"],
      popular: false
    },
    {
      id: 8,
      title: "Corsages & Boutonnieres",
      description: "Elegant wrist corsages and boutonnieres for family members and guests",
      priceRange: "₹500 - ₹2,000",
      images: [
        "https://images.unsplash.com/photo-1572859730776-0d3e6f1d4d3c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Wrist/ Lapel", "Miniature", "Elegant", "Secure Pins"],
      popular: false
    },
    {
      id: 9,
      title: "Flower Crowns",
      description: "Beautiful flower crowns for bridesmaids, flower girls, and ceremony participants",
      priceRange: "₹1,200 - ₹4,000",
      images: [
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Adjustable", "Fresh Flowers", "Lightweight", "Custom Design"],
      popular: true
    },
    {
      id: 10,
      title: "Auspicious Torans",
      description: "Traditional flower torans for door decorations and auspicious occasions",
      priceRange: "₹1,500 - ₹6,000",
      images: [
        "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Traditional", "Long Lasting", "Festive", "Custom Length"],
      popular: false
    },
    {
      id: 11,
      title: "Floral Backdrops",
      description: "Stunning floral backdrops for photo booths, stage backgrounds, and ceremony settings",
      priceRange: "₹9,000 - ₹50,000",
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530092285049-1c42085fd395?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Custom Design", "Large Size", "Fresh/ Artificial", "Installation Included"],
      popular: true
    },
    {
      id: 12,
      title: "Haldi Flower Packs",
      description: "Special flower arrangements for haldi ceremony including turmeric flower mixes",
      priceRange: "₹2,000 - ₹9,000",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=600&q=80"
      ],
      features: ["Ceremony Specific", "Traditional", "Fragrant", "Complete Set"],
      popular: false
    }
  ], []);

  // State for filter
  const [filter, setFilter] = useState('all');

  // State for each product's current image index
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    productCategories.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  // State to track hover on each card
  const [hoveredCard, setHoveredCard] = useState(null);

  // Auto-slide images every 3 seconds for hovered card
  useEffect(() => {
    if (hoveredCard !== null) {
      const interval = setInterval(() => {
        setCurrentImageIndexes(prev => ({
          ...prev,
          [hoveredCard]: (prev[hoveredCard] + 1) % productCategories.find(p => p.id === hoveredCard).images.length
        }));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredCard, productCategories]);

  // Product Card Component with Image Slider
  const ProductCard = ({ product }) => {
    const currentIndex = currentImageIndexes[product.id];
    const totalImages = product.images.length;

    const handlePrevImage = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setCurrentImageIndexes(prev => ({
        ...prev,
        [product.id]: (prev[product.id] - 1 + totalImages) % totalImages
      }));
    };

    const handleNextImage = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setCurrentImageIndexes(prev => ({
        ...prev,
        [product.id]: (prev[product.id] + 1) % totalImages
      }));
    };

    const handleDotClick = (e, index) => {
      e.stopPropagation();
      e.preventDefault();
      setCurrentImageIndexes(prev => ({ ...prev, [product.id]: index }));
    };

    return (
      <div 
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
        style={{ animationDelay: `${product.id * 100}ms` }}
        onMouseEnter={() => setHoveredCard(product.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Popular Badge */}
        {product.popular && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              Most Popular
            </span>
          </div>
        )}

        {/* Image Slider Container */}
        <div className="relative h-56 overflow-hidden">
          {/* Current Image */}
          <img 
            src={product.images[currentIndex]} 
            alt={`${product.title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            loading="lazy"
          />
          
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          {/* Navigation Arrows - FIXED with proper event handling */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 shadow-md"
            aria-label="Previous image"
          >
            ←
          </button>
          <button 
            onClick={handleNextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 shadow-md"
            aria-label="Next image"
          >
            →
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => handleDotClick(e, index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 w-4' 
                    : 'bg-white/80 hover:bg-white'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Image Counter */}
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
            {currentIndex + 1}/{totalImages}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
              {product.title}
            </h3>
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              {product.priceRange}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-5">
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 px-3 py-1 rounded-full border border-pink-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              Book Now
            </button>
            <button 
              className="px-4 py-3 border-2 border-pink-500 text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const filteredProducts = filter === 'all' 
    ? productCategories 
    : filter === 'popular' 
      ? productCategories.filter(product => product.popular)
      : productCategories.filter(product => 
          product.title.toLowerCase().includes('wedding') || 
          product.title.toLowerCase().includes('bridal') ||
          product.title.toLowerCase().includes('groom')
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-80 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-rose-500/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
            Our Shop Products
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in-up">
            Discover exquisite floral arrangements for every occasion. From traditional varmalas to modern decor.
          </p>
          <div className="mt-8 animate-bounce-slow">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-pink-50 border border-pink-200'}`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === 'popular' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-pink-50 border border-pink-200'}`}
          >
            Popular Items
          </button>
          <button
            onClick={() => setFilter('wedding')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === 'wedding' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-pink-50 border border-pink-200'}`}
          >
            Wedding Special
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different filter</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 mb-8 text-center">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-inner">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Custom Flower Arrangements?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We specialize in creating bespoke floral designs for your special moments. 
              Contact us for personalized quotes and consultations.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact for Custom Order
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl p-6 mt-12 border border-pink-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔄</span> Image Slider Instructions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center">1</div>
              <div>
                <p className="font-semibold">Auto Slide</p>
                <p className="text-sm text-gray-600">Hover on card - images change every 3 seconds</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center">2</div>
              <div>
                <p className="font-semibold">Manual Control</p>
                <p className="text-sm text-gray-600">Use ← → buttons to navigate manually</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center">3</div>
              <div>
                <p className="font-semibold">Direct Select</p>
                <p className="text-sm text-gray-600">Click on dots to select specific image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out both;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Shop;