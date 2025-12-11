import React, { useState, useRef } from 'react';
import {
  FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaWhatsapp, FaStar,
  FaHome, FaImages, FaShoppingCart, FaPhoneAlt, FaEnvelope, FaUsers,
  FaRupeeSign, FaCamera, FaGift, FaUserTie, FaGem, FaHotel, FaMusic,
  FaMapMarkerAlt,
  FaArrowLeft, FaArrowRight,
  FaStar as FaStarIcon, FaGlobe, FaLightbulb, FaStore, FaHeart
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const vendorsScrollRef = useRef(null);
  const videoRef = useRef(null);

  const videoSrc = 'videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4';
  //const videoNew = '/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4'

  // Vendors/Pages icons data
  const vendors = [
    { id: 1, name: 'CONTACT US ', icon: <FaPhoneAlt />, path: '/pages/contact-us' },
    { id: 3, name: 'ABOUT US', icon: <FaUsers />, path: '/pages/about-us' },
    { id: 4, name: 'OUR TEAM', icon: <FaUserTie />, path: '/pages/our-team' },
    { id: 5, name: 'PRICING PLAN', icon: <FaRupeeSign />, path: 'pages/pricing-plan' },
    { id: 6, name: 'HOME', icon: <FaHome />, path: '/' },
    { id: 7, name: 'GALLERY', icon: <FaCamera />, path: '/portfolio' },
    { id: 8, name: 'SHOP', icon: <FaShoppingCart />, path: '/shop' },
    { id: 9, name: 'Invitation Cards', icon: <FaEnvelope />, path: '/invitations' },
    { id: 10, name: 'Wedding Jewellery', icon: <FaGem />, path: '/jewellery' },
    { id: 11, name: 'Accommodations', icon: <FaHotel />, path: '/accommodations' },
    { id: 12, name: 'Choreographers', icon: <FaMusic />, path: '/choreographers' },
    { id: 13, name: 'Balloon Decorators', icon: <FaStarIcon />, path: '/balloon-decor' },
    { id: 14, name: 'Anchor/Host', icon: <FaUserTie />, path: '/anchors' },
    { id: 15, name: 'Gift/Trousseau', icon: <FaGift />, path: '/gifts' },
    { id: 16, name: 'Astrologer', icon: <FaStar />, path: '/astrologer' },
    { id: 17, name: 'Wedding Card', icon: <FaHeart />, path: '/wedding-card' },
  ];

  const features = [
    {
      id: 1,
      title: 'Wedding Decoration',
      description: 'We connect your memories with everyone.',
      icon: <FaGlobe className="text-3xl text-pink-500" />,
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
    },
    {
      id: 2,
      title: 'Wedding Vogue',
      description: 'See the trending wedding ideas and Inspirations.',
      icon: <FaLightbulb className="text-3xl text-pink-500" />,
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50'
    },
    {
      id: 3,
      title: 'Vendors',
      description: 'Find the verified wedding vendors within your budget.',
      icon: <FaStore className="text-3xl text-pink-500" />,
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
    },
    {
      id: 4,
      title: 'Real Wedding',
      description: 'See the insight of latest weddings.',
      icon: <FaCamera className="text-3xl text-pink-500" />,
      bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50'
    }
  ];

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const scrollVendors = (direction) => {
    const container = vendorsScrollRef.current;
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="relative">
      {/* Video Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay for text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Video Controls - Bottom Right */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
          <button
            onClick={handleMuteToggle}
            className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-all backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>
          <button
            onClick={handlePlayPause}
            className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-all backdrop-blur-sm"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
          </button>
        </div>

        {/* Content Overlay - Exactly like reference image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-8 md:mb-12 leading-tight">
              Crafting Memorable
              <span className="block mt-2 text-pink-200">Weddings</span>
            </h1>

            {/* Stats Section - Mobile Responsive */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-1">1,043+</div>
                <div className="text-white/80 text-xs sm:text-sm">weddings done</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">4.8</div>
                  <div className="text-white text-sm">/5</div>
                </div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
                <div className="text-white/80 text-xs sm:text-sm">google rating</div>
              </div>
              <div className="text-center">
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-1">110+</div>
                <div className="text-white/80 text-xs sm:text-sm">venue partners</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://wa.me/919876543210?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20want%20to%20plan%20my%20wedding%20decoration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Start my wedding planning
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Find Trusted Vendors Section */}
      <section className="py-6 md:py-10 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Our <span className="text-pink-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore a wide range of elegant decoration services for your special moments.
            </p>
          </div>

          {/* Vendors Scroll Container */}
          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollVendors('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 border border-pink-200 hover:bg-pink-50 transition-all hidden md:block"
            >
              <FaArrowRight className="rotate-180 text-pink-500" />
            </button>

            {/* Vendors Horizontal Scroll */}
            <div
              ref={vendorsScrollRef}
              className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-6 px-2 py-4 md:px-8"
              style={{ scrollBehavior: 'smooth' }}
            >
              {vendors.map((vendor) => (
                <Link
                  key={vendor.id}
                  to={vendor.path}
                  className="flex-shrink-0 w-28 md:w-36 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl border border-pink-100 hover:border-pink-300 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mb-3 group-hover:from-pink-200 group-hover:to-rose-200 transition-all">
                      <div className="text-pink-600 text-lg md:text-xl">
                        {vendor.icon}
                      </div>
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-pink-600 line-clamp-2">
                      {vendor.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollVendors('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 border border-pink-200 hover:bg-pink-50 transition-all hidden md:block"
            >
              <FaArrowRight className="text-pink-500" />
            </button>

            {/* Mobile Scroll Indicator */}
            <div className="md:hidden text-center mt-4">
              <p className="text-sm text-gray-500">← Scroll horizontally →</p>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section with Flower Background */}
      <section className="relative py-6 md:py-10 overflow-hidden">
        {/* Animated Flower Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
          <div className="absolute inset-0">
            {/* Animated floating circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-5 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-600">Wedding Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need for your perfect wedding in one place
            </p>
          </div>

          {/* Mobile: Horizontal Scroll Cards */}
          <div className="md:hidden relative">
            {/* Scroll Container */}
            <div className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-2 -mx-2">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex-shrink-0 w-[85vw]"
                >
                  <div
                    className={`${feature.bgColor} rounded-3xl p-8 shadow-2xl border-2 border-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white to-pink-50 flex items-center justify-center shadow-lg border border-pink-200">
                        <div className="text-3xl bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                          {feature.icon}
                        </div>
                      </div>

                      {/* Floating decorative dots */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    </div>

                    {/* Title with gradient */}
                    <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-center text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>

                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 animate-pulse">← Swipe to explore →</p>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`${feature.bgColor} rounded-3xl p-8 shadow-2xl border-2 border-white hover:shadow-3xl hover:border-pink-200 transition-all duration-500 transform hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white to-pink-50 flex items-center justify-center shadow-lg border border-pink-200 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Floating decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>

                {/* Title with gradient */}
                <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-center text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Recently Executed Weddings Gallery */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Glimpse Into Our <span className="text-pink-600">Recently Executed Weddings</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the magic we've created for happy couples
            </p>
          </div>

          {/* Wedding Cards - Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 -mx-2 px-2">
              {[
                {
                  id: 1,
                  title: "Royal Wedding Decoration",
                  type: "Wedding",
                  couple: "Rahul & Priya",
                  location: "Jaipur Palace",
                  price: "₹1,50,000",
                  rating: 4.9,
                  videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                  thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800",
                  description: "Complete wedding setup with floral mandap"
                },
                {
                  id: 2,
                  title: "Garden Reception Party",
                  type: "Reception",
                  couple: "Amit & Sneha",
                  location: "Udaipur Garden",
                  price: "₹85,000",
                  rating: 4.8,
                  videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                  thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800",
                  description: "Outdoor reception with fairy lights"
                },
                {
                  id: 3,
                  title: "Birthday Balloon Decor",
                  type: "Birthday",
                  person: "Ananya's 25th",
                  location: "Delhi Banquet",
                  price: "₹35,000",
                  rating: 4.7,
                  videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                  thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800",
                  description: "Theme birthday decoration with balloons"
                },
                {
                  id: 4,
                  title: "Traditional Haldi Ceremony",
                  type: "Haldi",
                  couple: "Vikram & Riya",
                  location: "Mumbai Resort",
                  price: "₹45,000",
                  rating: 4.9,
                  videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                  thumbnail: "https://images.unsplash.com/photo-1560252816-37e3a6c7f39e?auto=format&fit=crop&w=800",
                  description: "Floral haldi ceremony setup"
                }
              ].map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 w-[85vw]"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-all duration-300 group">
                    {/* Video/Image Container */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      {/* Video on Hover */}
                      <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={event.videoSrc} type="video/mp4" />
                        </video>
                      </div>

                      {/* Thumbnail Image */}
                      <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                        <img
                          src={event.thumbnail}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${event.type === 'Wedding' ? 'bg-pink-500 text-white' :
                            event.type === 'Reception' ? 'bg-rose-500 text-white' :
                              event.type === 'Birthday' ? 'bg-purple-500 text-white' :
                                'bg-yellow-500 text-white'
                          }`}>
                          {event.type}
                        </span>
                      </div>

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                          <FaPlay className="text-pink-600" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      {/* Title & Rating */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-sm" />
                          <span className="text-sm font-semibold">{event.rating}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <FaUserTie className="text-pink-400 text-sm" />
                          <span className="text-sm text-gray-600">
                            {event.couple || event.person}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-pink-400 text-sm" />
                          <span className="text-sm text-gray-600">
                            {event.location}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {event.description}
                        </p>
                      </div>

                      {/* Price & Action */}
                      <div className="flex justify-between items-center pt-4 border-t border-pink-100">
                        <div>
                          <span className="text-lg font-bold text-pink-600">
                            {event.price}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">starting</span>
                        </div>
                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Scroll Hint */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 animate-pulse">← Swipe to see more →</p>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                title: "Royal Wedding Decoration",
                type: "Wedding",
                couple: "Rahul & Priya",
                location: "Jaipur Palace",
                price: "₹1,50,000",
                rating: 4.9,
                videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800",
                description: "Complete wedding setup with floral mandap, stage decoration, and entrance design."
              },
              {
                id: 2,
                title: "Garden Reception Party",
                type: "Reception",
                couple: "Amit & Sneha",
                location: "Udaipur Garden",
                price: "₹85,000",
                rating: 4.8,
                videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800",
                description: "Outdoor reception with fairy lights, floral centerpieces, and theme decoration."
              },
              {
                id: 3,
                title: "Birthday Balloon Decor",
                type: "Birthday",
                person: "Ananya's 25th",
                location: "Delhi Banquet",
                price: "₹35,000",
                rating: 4.7,
                videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800",
                description: "Theme birthday decoration with balloons, backdrop, and table arrangements."
              },
              {
                id: 4,
                title: "Traditional Haldi Ceremony",
                type: "Haldi",
                couple: "Vikram & Riya",
                location: "Mumbai Resort",
                price: "₹45,000",
                rating: 4.9,
                videoSrc: "/videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4",
                thumbnail: "https://images.unsplash.com/photo-1560252816-37e3a6c7f39e?auto=format&fit=crop&w=800",
                description: "Floral haldi ceremony setup with traditional elements and fresh flowers."
              }
            ].map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Video/Image Container */}
                <div className="relative h-56 overflow-hidden">
                  {/* Video on Hover */}
                  <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={event.videoSrc} type="video/mp4" />
                    </video>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${event.type === 'Wedding' ? 'bg-pink-500 text-white' :
                        event.type === 'Reception' ? 'bg-rose-500 text-white' :
                          event.type === 'Birthday' ? 'bg-purple-500 text-white' :
                            'bg-yellow-500 text-white'
                      }`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                      <FaPlay className="text-pink-600 text-xl" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title & Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">{event.rating}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-2">
                      <FaUserTie className="text-pink-400" />
                      <span className="text-gray-700">
                        {event.couple || event.person}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-pink-400" />
                      <span className="text-gray-700">
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="flex justify-between items-center pt-5 border-t border-pink-100">
                    <div>
                      <span className="text-2xl font-bold text-pink-600">
                        {event.price}
                      </span>
                      <span className="text-gray-500 ml-2">starting</span>
                    </div>
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10 md:mt-16">
            <button className="group relative overflow-hidden border-2 border-pink-500 text-pink-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <span className="relative z-10">View All Events Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;