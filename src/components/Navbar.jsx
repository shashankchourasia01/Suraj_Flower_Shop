import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp,
  FaChevronDown,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [topBarTextIndex, setTopBarTextIndex] = useState(0);
  const [topBarAnimation, setTopBarAnimation] = useState('enter');

  const topBarTexts = [
    "🎉 Wedding Decoration Experts",
    "🎂 Birthday & Party Decorations",
    "👶 Baby Shower Specialists",
    "💐 Fresh Flower Arrangements",
    "✨ Custom Event Planning",
    "🏆 Award-Winning Decorators"
  ];

  const topBarInfo = [
    { icon: <FaEnvelope className="text-pink-400" />, text: 'info@surajflowershop.com' },
    { icon: <FaPhoneAlt className="text-pink-400" />, text: '+91 6201718933' }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: 'https://facebook.com/surajflowershop' },
    { icon: <FaInstagram />, link: 'https://instagram.com/surajflowershop' },
    { icon: <FaYoutube />, link: 'https://youtube.com/surajflowershop' }
  ];

  const pagesMenu = [
    { name: 'About Us', path: '/pages/about-us' },
    { name: 'Our Team', path: '/pages/our-team' },
    { name: 'Pricing Plans', path: '/pages/pricing-plan' },
    { name: 'Contact Us', path: '/pages/contact-us' }
  ];

  const navLinks = [
    { name: 'HOME', path: '/' },
    { 
      name: 'PAGES', 
      path: '/pages',
      dropdown: true,
      items: pagesMenu
    },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'SHOP', path: '/shop' }
  ];

  const activeClass = 'text-pink-600 font-semibold';
  const baseClass = 'px-3 py-2 rounded-lg hover:text-pink-600 transition-colors duration-300';

  // Auto-changing top bar text with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTopBarAnimation('exit');
      
      setTimeout(() => {
        setTopBarTextIndex((prev) => (prev + 1) % topBarTexts.length);
        setTopBarAnimation('enter');
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle navigation click for mobile
  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Top Header Bar - Mobile: Animated Text, Desktop: Full Info */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-sm border-b border-pink-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile View - Animated Text Only */}
          <div className="md:hidden py-2">
            <div className="flex justify-center items-center h-5">
              <div className={`text-xs text-pink-800 font-medium tracking-wide text-center whitespace-nowrap overflow-hidden ${
                topBarAnimation === 'enter' 
                  ? 'animate-slideInFromRight' 
                  : 'animate-slideOutToLeft'
              }`}>
                {topBarTexts[topBarTextIndex]}
              </div>
            </div>
          </div>

          {/* Desktop View - Full Information */}
          <div className="hidden md:flex justify-between items-center py-3">
            {/* Left: Animated Text */}
            <div className="flex-1 min-w-0">
              <div className={`text-sm text-pink-800 font-medium tracking-wide truncate ${
                topBarAnimation === 'enter' 
                  ? 'animate-fadeIn' 
                  : 'animate-fadeOut'
              }`}>
                {topBarTexts[topBarTextIndex]}
              </div>
            </div>

            {/* Middle: Contact Info */}
            <div className="flex items-center gap-6 mx-4">
              {topBarInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300 hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FIX 1: Mobile h-14 (56px), Desktop h-20 (80px) */}
          <div className="flex justify-between items-center h-14 md:h-20">
            {/* Logo & Shop Name */}
            <div className="flex items-center">
              {/* FIX 2: Mobile logo thoda chota */}
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 shadow-md flex items-center justify-center mr-2 md:mr-3">
                <span className="text-base md:text-xl font-bold text-pink-700">SF</span>
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Suraj Flower Shop
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Floral Decorations & Events</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div className="relative"
                      onMouseEnter={() => setIsPagesOpen(true)}
                      onMouseLeave={() => setIsPagesOpen(false)}
                    >
                      <button
                        className={`${baseClass} flex items-center gap-1`}
                      >
                        {link.name}
                        <FaChevronDown className={`text-xs transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isPagesOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-pink-100 py-2 z-50">
                          {link.items.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors ${isActive ? 'bg-pink-50 text-pink-600' : ''}`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : 'text-gray-700'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/916201718933"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-lg" />
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button - sirf FaBars, FaTimes slide panel mein hai */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="menu-button md:hidden text-gray-700 hover:text-pink-600 p-2"
              style={{ zIndex: 60 }}
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>

        {/* FIX 3: Slide menu - nav ke andar nahi, alag portal jaisa
            - inset-0 hataya, sirf right side se slide hoga
            - top-0 rakha taaki nav ke neeche se start ho
            - Overlay background bhi add kiya */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40"
            style={{ top: 0 }}
            onClick={(e) => {
              if (!e.target.closest('.mobile-menu')) {
                setIsMenuOpen(false);
              }
            }}
          >
            {/* White blur overlay */}
            <div className="absolute inset-0" style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255, 255, 255, 0.55)' }} />

            {/* Menu Panel - sirf right side */}
            <div className="mobile-menu absolute right-0 top-0 h-full w-72 bg-white shadow-2xl overflow-y-auto flex flex-col">
              
              {/* FIX 4: Menu header mein sirf title, alag logo nahi - clean look */}
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                    <span className="text-base font-bold text-white">SF</span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Suraj Flower Shop</h2>
                    <p className="text-xs text-pink-100">Floral Decorations & Events</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-pink-200 transition-colors p-1"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="p-5 flex-1">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="mb-1">
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => setIsPagesOpen(!isPagesOpen)}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                          >
                            <span className="font-medium">{link.name}</span>
                            <FaChevronDown className={`transition-transform text-sm ${isPagesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isPagesOpen && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-pink-200 pl-4">
                              {link.items.map((item) => (
                                <NavLink
                                  key={item.name}
                                  to={item.path}
                                  onClick={handleNavClick}
                                  className={({ isActive }) =>
                                    `block py-2 px-4 text-gray-600 hover:text-pink-600 rounded ${isActive ? 'text-pink-600 bg-pink-50' : ''}`
                                  }
                                >
                                  {item.name}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink
                          to={link.path}
                          onClick={handleNavClick}
                          className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg font-medium ${isActive ? activeClass + ' bg-pink-50' : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'} transition-colors`
                          }
                        >
                          {link.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Info in Mobile Menu */}
                <div className="mt-6 pt-5 border-t border-pink-100">
                  <div className="space-y-3 mb-5">
                    {topBarInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <p className="text-sm text-gray-600">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-4 mb-5">
                    {socialIcons.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-gray-600 hover:bg-pink-200 hover:text-pink-600 transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/916201718933"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg"
                    onClick={handleNavClick}
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutToLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-slideInFromRight {
          animation: slideInFromRight 0.3s ease-out;
        }
        .animate-slideOutToLeft {
          animation: slideOutToLeft 0.3s ease-in;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in;
        }
      `}</style>
    </>
  );
}