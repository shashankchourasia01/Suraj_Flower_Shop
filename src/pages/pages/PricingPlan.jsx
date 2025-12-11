import React from 'react';
import { FaCheckCircle, FaWhatsapp, FaStar, FaUsers, FaCalendarAlt, FaGift, FaHome, FaCar } from 'react-icons/fa';

const PricingPlan = () => {
  const decorationPackages = [
    {
      id: 1,
      title: "Basic Wedding Decor",
      type: "Wedding",
      price: "₹ 25,000",
      startingPrice: "₹ 20,000",
      description: "Simple yet elegant wedding decoration for intimate ceremonies",
      features: [
        "Mandap Decoration with Flowers",
        "Stage Decoration",
        "Entrance Gate Decor",
        "Basic Lighting",
        "Fresh Flowers",
        "12 Hours Service"
      ],
      popular: false,
      bestFor: "Small Weddings (50-100 guests)",
      color: "from-pink-400 to-rose-400"
    },
    {
      id: 2,
      title: "Premium Wedding Package",
      type: "Wedding",
      price: "₹ 75,000",
      startingPrice: "₹ 60,000",
      description: "Complete wedding decoration with premium floral arrangements",
      features: [
        "Royal Mandap with Fresh Flowers",
        "Complete Stage & Backdrop",
        "Venue Lighting (LED, Fairy Lights)",
        "Table Centerpieces",
        "Photo Booth Decoration",
        "24 Hours Service",
        "Free Consultation"
      ],
      popular: true,
      bestFor: "Medium Weddings (100-300 guests)",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Royal Wedding Package",
      type: "Wedding",
      price: "₹ 1,50,000",
      startingPrice: "₹ 1,20,000",
      description: "Luxury wedding decoration with premium imported flowers",
      features: [
        "Premium Imported Flowers",
        "Complete Venue Transformation",
        "Thematic Decoration",
        "Chandelier & Crystal Decor",
        "Customized Seating",
        "48 Hours Service",
        "Free Mockup Design",
        "Dedicated Manager"
      ],
      popular: false,
      bestFor: "Grand Weddings (300+ guests)",
      color: "from-rose-500 to-red-400"
    },
    {
      id: 4,
      title: "Reception Decor",
      type: "Reception",
      price: "₹ 50,000",
      startingPrice: "₹ 40,000",
      description: "Elegant reception party decoration",
      features: [
        "Stage & Backdrop Decor",
        "Welcome Area Setup",
        "Table Decorations",
        "Lighting Arrangements",
        "Photo Corner",
        "12 Hours Service"
      ],
      popular: false,
      bestFor: "Reception Parties",
      color: "from-blue-400 to-purple-400"
    },
    {
      id: 5,
      title: "Birthday Celebration",
      type: "Birthday",
      price: "₹ 20,000",
      startingPrice: "₹ 15,000",
      description: "Theme-based birthday party decoration",
      features: [
        "Theme Decoration",
        "Balloon Arch & Centerpieces",
        "Photo Booth Setup",
        "Table Decorations",
        "Cake Table Decor",
        "8 Hours Service"
      ],
      popular: true,
      bestFor: "Birthday Parties",
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 6,
      title: "Baby Shower Decor",
      type: "Baby Shower",
      price: "₹ 18,000",
      startingPrice: "₹ 12,000",
      description: "Delicate and charming baby shower decoration",
      features: [
        "Theme-based Decor",
        "Baby Shower Backdrop",
        "Table Centerpieces",
        "Gender Reveal Setup",
        "Photo Area Decor",
        "6 Hours Service"
      ],
      popular: false,
      bestFor: "Baby Shower Events",
      color: "from-green-400 to-teal-400"
    },
    {
      id: 7,
      title: "Groom Car Decoration",
      type: "Car Decor",
      price: "₹ 5,000",
      startingPrice: "₹ 3,500",
      description: "Beautiful flower decoration for groom's car",
      features: [
        "Fresh Flower Decoration",
        "Car Bonnet Decor",
        "Door Handles Decor",
        "Rear View Decor",
        "Ribbons & Accessories",
        "2 Hours Service"
      ],
      popular: false,
      bestFor: "Wedding Car Decoration",
      color: "from-indigo-400 to-purple-400"
    },
    {
      id: 8,
      title: "Home Opening Ceremony",
      type: "Home Decor",
      price: "₹ 15,000",
      startingPrice: "₹ 10,000",
      description: "Traditional home opening/pooja decoration",
      features: [
        "Main Entrance Decor",
        "Pooja Area Decoration",
        "Flower Toran & Rangoli",
        "Doorway Decorations",
        "Fresh Flower Garlands",
        "4 Hours Service"
      ],
      popular: false,
      bestFor: "Griha Pravesh, House Warming",
      color: "from-amber-400 to-yellow-400"
    },
    {
      id: 9,
      title: "Anniversary Celebration",
      type: "Anniversary",
      price: "₹ 25,000",
      startingPrice: "₹ 20,000",
      description: "Romantic anniversary celebration decor",
      features: [
        "Romantic Theme Setup",
        "Candle & Flower Decor",
        "Photo Memory Wall",
        "Table & Seating Decor",
        "Special Lighting",
        "6 Hours Service"
      ],
      popular: false,
      bestFor: "Anniversary Parties",
      color: "from-red-400 to-pink-400"
    },
    {
      id: 10,
      title: "Corporate Event Decor",
      type: "Corporate",
      price: "₹ 40,000",
      startingPrice: "₹ 30,000",
      description: "Professional corporate event decoration",
      features: [
        "Stage & Backdrop",
        "Registration Desk Decor",
        "Branding Integration",
        "Professional Lighting",
        "Table Arrangements",
        "8 Hours Service"
      ],
      popular: true,
      bestFor: "Corporate Events, Seminars",
      color: "from-gray-400 to-blue-400"
    }
  ];

  const decorationTypes = [
    { name: "Wedding", count: "3 Packages", icon: <FaCalendarAlt />, color: "bg-pink-500" },
    { name: "Reception", count: "1 Package", icon: <FaUsers />, color: "bg-purple-500" },
    { name: "Birthday", count: "1 Package", icon: <FaGift />, color: "bg-yellow-500" },
    { name: "Grih Pravesh", count: "1 Package", icon: <FaHome />, color: "bg-green-500" },
    { name: "Car Decor", count: "1 Package", icon: <FaCar />, color: "bg-indigo-500" },
    { name: "Haldi + Mehendi", count: "1 Package", icon: <FaUsers />, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Banner with Decoration Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Decoration Image */}
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
              Decoration <span className="text-pink-200">Plans & Pricing</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Transparent pricing for all types of event decorations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        {/* Stats Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Our <span className="text-pink-600">Decoration Categories</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {decorationTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-4 shadow-md border border-pink-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center text-white text-xl mx-auto mb-3`}>
                  {type.icon}
                </div>
                <h3 className="font-bold text-gray-800">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Information */}
        <div className="mb-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">₹ 20K - 2L</div>
              <div className="text-gray-700">Price Range</div>
              <p className="text-gray-600 text-sm mt-2">Starting from 20,000 to 2,00,000</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">10+</div>
              <div className="text-gray-700">Decoration Types</div>
              <p className="text-gray-600 text-sm mt-2">Complete range for all events</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">Custom</div>
              <div className="text-gray-700">Tailored Packages</div>
              <p className="text-gray-600 text-sm mt-2">Personalized as per your needs</p>
            </div>
          </div>
        </div>

        {/* Decoration Packages Grid */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Our <span className="text-pink-600">Decoration Packages</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decorationPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                  pkg.popular ? 'border-pink-300 ring-2 ring-pink-200' : 'border-pink-100'
                } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <FaStar className="text-yellow-300" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Package Header */}
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                
                <div className="p-6">
                  {/* Package Type */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      pkg.type === 'Wedding' ? 'bg-pink-100 text-pink-600' :
                      pkg.type === 'Reception' ? 'bg-purple-100 text-purple-600' :
                      pkg.type === 'Birthday' ? 'bg-yellow-100 text-yellow-600' :
                      pkg.type === 'Baby Shower' ? 'bg-green-100 text-green-600' :
                      pkg.type === 'Car Decor' ? 'bg-indigo-100 text-indigo-600' :
                      pkg.type === 'Home Decor' ? 'bg-amber-100 text-amber-600' :
                      pkg.type === 'Anniversary' ? 'bg-red-100 text-red-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {pkg.type}
                    </span>
                  </div>
                  
                  {/* Package Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  
                  {/* Package Description */}
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-800">{pkg.price}</span>
                      <span className="text-gray-500 text-sm">starting from</span>
                      <span className="text-lg font-semibold text-pink-600">{pkg.startingPrice}</span>
                    </div>
                  </div>
                  
                  {/* Best For */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-700 font-medium mb-2">Best For:</div>
                    <p className="text-gray-600 text-sm">{pkg.bestFor}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-700 font-medium mb-3">Package Includes:</div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/919876543210?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(pkg.title)}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <FaWhatsapp className="text-lg" />
                      Get Quote on WhatsApp
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Package Section */}
        <div className="mb-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Package?</h2>
              <p className="mb-6">
                We understand every event is unique. Contact us for a personalized quote 
                tailored to your specific requirements, budget, and vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20need%20a%20custom%20decoration%20package%20for%20my%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Discuss Custom Package
                </a>
                <a
                  href="tel:+916201718933"
                  className="bg-transparent border-2 border-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Call for Consultation
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Customizable</div>
                <div className="text-sm opacity-90">Flexible packages as per your needs</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-pink-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Pricing <span className="text-pink-600">FAQ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Are these prices fixed?</h3>
                <p className="text-gray-600 text-sm">
                  Prices shown are starting prices. Final quote depends on venue size, flower types, and specific requirements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">What's included in the price?</h3>
                <p className="text-gray-600 text-sm">
                  All packages include flowers, labor, setup, and basic materials. Additional charges may apply for special requirements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Do you provide free consultation?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we provide free on-site or online consultation for all our packages.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Is advance payment required?</h3>
                <p className="text-gray-600 text-sm">
                  We require 50% advance to confirm booking, balance on event day before setup.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Can I modify a package?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely! All packages are customizable. Add or remove services as per your needs.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">What's the cancellation policy?</h3>
                <p className="text-gray-600 text-sm">
                  Full refund if cancelled 15 days before event. 50% refund if cancelled 7 days before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;