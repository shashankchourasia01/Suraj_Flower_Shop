import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaRupeeSign, FaStar, FaCalendarAlt, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('wedding');
  const [activeSlides, setActiveSlides] = useState({});
  const scrollRefs = useRef({});
  const autoSlideIntervals = useRef({});

  const decorationCategories = [
    {
      id: 'wedding',
      title: 'Wedding Decoration',
      description: 'Royal wedding setups with floral mandaps and theme decorations',
      priceRange: '₹ 25,000 - 2,00,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', price: '₹ 1,50,000', title: 'Royal Mandap Decor' },
        { id: 2, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3', price: '₹ 85,000', title: 'Garden Wedding' },
        { id: 3, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', price: '₹ 2,00,000', title: 'Palace Wedding' },
        { id: 4, src: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0', price: '₹ 1,20,000', title: 'Floral Stage Setup' },
        { id: 5, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659', price: '₹ 75,000', title: 'Intimate Wedding' }
      ]
    },
    {
      id: 'reception',
      title: 'Reception Decor',
      description: 'Elegant reception parties with theme-based decorations',
      priceRange: '₹ 40,000 - 1,00,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622', price: '₹ 85,000', title: 'Garden Reception' },
        { id: 2, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3', price: '₹ 60,000', title: 'Ballroom Reception' },
        { id: 3, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87', price: '₹ 50,000', title: 'Poolside Reception' },
        { id: 4, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64', price: '₹ 1,00,000', title: 'Luxury Reception' },
        { id: 5, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', price: '₹ 45,000', title: 'Simple Reception' }
      ]
    },
    {
      id: 'birthday',
      title: 'Birthday Decoration',
      description: 'Theme-based birthday parties for all ages',
      priceRange: '₹ 15,000 - 50,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d', price: '₹ 35,000', title: 'Balloon Theme Party' },
        { id: 2, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750', price: '₹ 25,000', title: 'Kids Birthday' },
        { id: 3, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622', price: '₹ 50,000', title: 'Milestone Birthday' },
        { id: 4, src: 'https://images.unsplash.com/photo-1531263060786-566ad6b5c9d8', price: '₹ 20,000', title: 'Surprise Party' },
        { id: 5, src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43', price: '₹ 30,000', title: 'Theme Birthday' }
      ]
    },
    {
      id: 'grihpravesh',
      title: 'Grih Pravesh (Home Opening)',
      description: 'Traditional home opening ceremonies with floral decor',
      priceRange: '₹ 10,000 - 30,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 25,000', title: 'Traditional Setup' },
        { id: 2, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 15,000', title: 'Simple Home Opening' },
        { id: 3, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', price: '₹ 30,000', title: 'Floral Entrance' },
        { id: 4, src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233', price: '₹ 12,000', title: 'Mini Ceremony' },
        { id: 5, src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc', price: '₹ 20,000', title: 'Pooja Room Decor' }
      ]
    },
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      description: 'Vibrant yellow themed haldi ceremonies',
      priceRange: '₹ 20,000 - 50,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1560252816-37e3a6c7f39e', price: '₹ 45,000', title: 'Floral Haldi Setup' },
        { id: 2, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', price: '₹ 35,000', title: 'Traditional Haldi' },
        { id: 3, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 50,000', title: 'Royal Haldi' },
        { id: 4, src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc', price: '₹ 25,000', title: 'Simple Haldi' },
        { id: 5, src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233', price: '₹ 30,000', title: 'Garden Haldi' }
      ]
    },
    {
      id: 'mehndi',
      title: 'Mehndi Decoration',
      description: 'Colorful and vibrant mehndi ceremony setups',
      priceRange: '₹ 25,000 - 60,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659', price: '₹ 60,000', title: 'Colorful Mehndi' },
        { id: 2, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3', price: '₹ 40,000', title: 'Traditional Mehndi' },
        { id: 3, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3', price: '₹ 50,000', title: 'Royal Mehndi' },
        { id: 4, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87', price: '₹ 35,000', title: 'Simple Mehndi' },
        { id: 5, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', price: '₹ 45,000', title: 'Garden Mehndi' }
      ]
    },
    {
      id: 'car',
      title: 'Car Decoration',
      description: 'Beautiful floral decoration for wedding cars',
      priceRange: '₹ 3,500 - 10,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341', price: '₹ 8,000', title: 'Premium Car Decor' },
        { id: 2, src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70', price: '₹ 5,000', title: 'Standard Decor' },
        { id: 3, src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341', price: '₹ 10,000', title: 'Luxury Car Decor' },
        { id: 4, src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70', price: '₹ 4,500', title: 'Simple Decor' },
        { id: 5, src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341', price: '₹ 6,500', title: 'Theme Car Decor' }
      ]
    },
    {
      id: 'ganesh',
      title: 'Ganesh Puja Decoration',
      description: 'Traditional Ganesh Chaturthi decorations',
      priceRange: '₹ 8,000 - 25,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 25,000', title: 'Pandal Decoration' },
        { id: 2, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', price: '₹ 15,000', title: 'Home Puja Setup' },
        { id: 3, src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc', price: '₹ 20,000', title: 'Floral Mandap' },
        { id: 4, src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233', price: '₹ 10,000', title: 'Simple Puja' },
        { id: 5, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 18,000', title: 'Community Puja' }
      ]
    },
    {
      id: 'saraswati',
      title: 'Saraswati Puja Decoration',
      description: 'Educational and cultural event decorations',
      priceRange: '₹ 5,000 - 20,000',
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 20,000', title: 'School Puja' },
        { id: 2, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', price: '₹ 12,000', title: 'College Puja' },
        { id: 3, src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc', price: '₹ 15,000', title: 'Cultural Event' },
        { id: 4, src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233', price: '₹ 8,000', title: 'Home Puja' },
        { id: 5, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4', price: '₹ 18,000', title: 'Institution Puja' }
      ]
    }
  ];

  // Initialize active slides
  useEffect(() => {
    const initialSlides = {};
    decorationCategories.forEach(category => {
      initialSlides[category.id] = 0;
    });
    setActiveSlides(initialSlides);

    // Setup auto-slide intervals
    decorationCategories.forEach(category => {
      autoSlideIntervals.current[category.id] = setInterval(() => {
        setActiveSlides(prev => {
          const categoryData = decorationCategories.find(cat => cat.id === category.id);
          if (categoryData) {
            return {
              ...prev,
              [category.id]: (prev[category.id] + 1) % categoryData.images.length
            };
          }
          return prev;
        });
      }, 3000);
    });

    return () => {
      // Clear all intervals on unmount
      Object.values(autoSlideIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  // Mobile auto-scroll effect
  useEffect(() => {
    decorationCategories.forEach(category => {
      const container = scrollRefs.current[category.id];
      if (container && window.innerWidth < 768) {
        const scrollToNext = () => {
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const currentScroll = container.scrollLeft;
          const nextScroll = currentScroll + clientWidth;
          
          if (nextScroll >= scrollWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollTo({ left: nextScroll, behavior: 'smooth' });
          }
        };

        // Start auto-scroll for mobile
        const interval = setInterval(scrollToNext, 3000);
        autoSlideIntervals.current[`mobile-${category.id}`] = interval;
      }
    });

    return () => {
      // Clear mobile intervals
      decorationCategories.forEach(category => {
        const intervalKey = `mobile-${category.id}`;
        if (autoSlideIntervals.current[intervalKey]) {
          clearInterval(autoSlideIntervals.current[intervalKey]);
        }
      });
    };
  }, []);

  const handlePrevSlide = (categoryId, e) => {
    e.stopPropagation();
    const category = decorationCategories.find(cat => cat.id === categoryId);
    if (category) {
      setActiveSlides(prev => ({
        ...prev,
        [categoryId]: (prev[categoryId] - 1 + category.images.length) % category.images.length
      }));
    }
  };

  const handleNextSlide = (categoryId, e) => {
    e.stopPropagation();
    const category = decorationCategories.find(cat => cat.id === categoryId);
    if (category) {
      setActiveSlides(prev => ({
        ...prev,
        [categoryId]: (prev[categoryId] + 1) % category.images.length
      }));
    }
  };

  // Mobile manual scroll handlers
  const scrollToNextMobile = (categoryId) => {
    const container = scrollRefs.current[categoryId];
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const nextScroll = currentScroll + clientWidth;
      
      if (nextScroll >= scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }
  };

  const scrollToPrevMobile = (categoryId) => {
    const container = scrollRefs.current[categoryId];
    if (container) {
      const clientWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const prevScroll = currentScroll - clientWidth;
      
      if (prevScroll <= 0) {
        container.scrollTo({ left: container.scrollWidth - clientWidth, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: prevScroll, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920")'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-pink-50/20"></div>
        </div>
        
        {/* Heading */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Decoration <span className="text-pink-200">Portfolio</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Explore our wide range of event decoration projects
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        {/* Category Navigation - Desktop */}
        <div className="hidden md:flex flex-wrap gap-4 mb-12 justify-center">
          {decorationCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveSection(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeSection === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border border-pink-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Mobile Category Selection */}
        <div className="md:hidden mb-8">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-pink-200 bg-white text-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
          >
            {decorationCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>


        {/* Portfolio Sections */}
        <div className="space-y-16">
          {decorationCategories.map((category) => (
            <div 
              key={category.id} 
              id={category.id}
              className={`${activeSection === category.id ? 'block' : 'hidden md:block'}`}
            >
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {category.title}
                    </h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 text-pink-600">
                        <FaRupeeSign />
                        <span className="font-semibold">{category.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCalendarAlt />
                        <span className="text-sm">{category.images.length} Photos</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center gap-2">
                      {category.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeSlides[category.id] === index
                              ? 'bg-pink-500 w-4'
                              : 'bg-pink-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>

              {/* Desktop Carousel */}
              <div className="hidden md:block relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  {category.images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        activeSlides[category.id] === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-6">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                            <div className="flex items-center gap-2">
                              <FaRupeeSign className="text-pink-600" />
                              <span className="text-xl font-bold text-gray-800">{image.price}</span>
                            </div>
                            <p className="text-gray-700 text-sm">{image.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => handlePrevSlide(category.id, e)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-pink-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={(e) => handleNextSlide(category.id, e)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-pink-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
                >
                  <FaArrowRight />
                </button>
              </div>

              {/* Mobile Carousel with Auto-slide */}
              <div className="md:hidden relative">
                {/* Navigation Arrows - Mobile */}
                <button
                  onClick={() => scrollToPrevMobile(category.id)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-pink-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
                >
                  <FaArrowLeft />
                </button>
                
                <button
                  onClick={() => scrollToNextMobile(category.id)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-pink-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
                >
                  <FaArrowRight />
                </button>

                {/* Auto-sliding Container */}
                <div 
                  ref={el => scrollRefs.current[category.id] = el}
                  className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 -mx-2 px-2"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {category.images.map((image) => (
                    <div key={image.id} className="flex-shrink-0 w-[85vw] mx-2 snap-center">
                      <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-semibold">{image.title}</p>
                              <div className="flex items-center gap-1 text-white">
                                <FaRupeeSign />
                                <span className="font-bold">{image.price}</span>
                              </div>
                            </div>
                            <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                              <FaHeart />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots Indicator - Mobile */}
                <div className="flex justify-center gap-2 mt-4">
                  {category.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        // Calculate which slide should be active based on scroll position
                        activeSlides[category.id] === index
                          ? 'bg-pink-500 w-4'
                          : 'bg-pink-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Like What You See?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's create something beautiful for your special occasion. 
            Contact us for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916201718933?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20my%20event%20decoration"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Get Quote on WhatsApp
            </a>
            <a
              href="tel:+916201718933"
              className="border-2 border-white hover:bg-white/20 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Call for Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Add CSS for smooth scrolling and snap */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
        .snap-mandatory {
          scroll-snap-stop: always;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;