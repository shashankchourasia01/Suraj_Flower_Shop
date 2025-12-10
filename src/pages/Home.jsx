import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaWhatsapp, FaStar, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videoSrc = 'videos/Wedding Decoration Dubai. Event Rentals Dubai. Wedding Planner Dubai. Wedding at Kempinski The Palm 1080p (2).mp4';

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
            {/* Top Decoration Text */}
            {/* <div className="mb-8 md:mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm md:text-base font-medium tracking-wide">
                  The Wedding Company
                </span>
              </div>
            </div> */}

            {/* Couple & Location Info - Mobile First Layout */}
          {/* <div className="mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-white text-xl sm:text-2xl font-bold">Shivika & Ashish</span>
                </div>
                <div className="hidden sm:block text-white/60">•</div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white/80" />
                  <span className="text-white">Udaipur</span>
                </div>
                <div className="hidden sm:block text-white/60">•</div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-white/80" />
                  <span className="text-white">Feb. 25</span>
                </div>
              </div>
              
              
              <div className="sm:hidden flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white/80" />
                  <span className="text-white">Udaipur</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-white/80" />
                  <span className="text-white">Feb. 25</span>
                </div>
              </div>
            </div>  */}

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

      {/* Next Section - Services Preview */}
      <section className="py-12 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Wedding Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Venue Decoration</h3>
              <p className="text-gray-600 text-sm">Complete wedding venue setup with flowers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Stage Design</h3>
              <p className="text-gray-600 text-sm">Beautiful mandap and stage decorations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flower Arrangements</h3>
              <p className="text-gray-600 text-sm">Fresh flower bouquets and centerpieces</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;