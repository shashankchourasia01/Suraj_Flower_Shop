import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
    { icon: <FaPhoneAlt className="text-pink-400" />, text: '+91 98765 43210' }
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: 'https://facebook.com/surajflowershop' },
    { icon: <FaInstagram />, link: 'https://instagram.com/surajflowershop' },
    { icon: <FaYoutube />, link: 'https://youtube.com/surajflowershop' }
  ];

  const pagesMenu = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Pricing Plans', path: '/pricing' },
    { name: 'Contact Us', path: '/contact' }
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

  return (
    <>
      {/* Top Header Bar - Mobile: Animated Text, Desktop: Full Info */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-sm border-b border-pink-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile View - Animated Text Only */}
          <div className="md:hidden py-3">
            <div className="flex justify-center items-center h-6">
              <div className={`text-sm text-pink-800 font-medium tracking-wide text-center whitespace-nowrap overflow-hidden ${
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
          <div className="flex justify-between items-center h-20">
            {/* Logo & Shop Name */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 shadow-md flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-pink-700">SF</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  Suraj Flower Shop
                </h1>
                <p className="text-xs text-gray-500">Floral Decorations & Events</p>
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
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-lg" />
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button - Always Visible on Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button md:hidden text-gray-700 hover:text-pink-600 p-2 z-60"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu - Slides from right */}
          <div className={`md:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Overlay */}
            {/* <div 
              className="absolute inset-0 bg-black bg-opacity-30"
              onClick={() => setIsMenuOpen(false)}
            ></div> */}
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto mobile-menu">
              {/* Menu Header */}
              <div className="sticky top-0 bg-gradient-to-r from-pink-50 to-rose-50 p-6 border-b border-pink-100 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 shadow-md flex items-center justify-center mr-3">
                    <span className="text-lg font-bold text-pink-700">SF</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-pink-700">Suraj Flower</h2>
                    <p className="text-xs text-gray-600">Menu</p>
                  </div>
                </div>
                {/* <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-pink-600"
                >
                  <FaTimes size={20} />
                </button> */}
              </div>

              {/* Menu Content */}
              <div className="p-6">
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
                            <FaChevronDown className={`transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isPagesOpen && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-pink-200 pl-4">
                              {link.items.map((item) => (
                                <NavLink
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsPagesOpen(false);
                                  }}
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
                          onClick={() => setIsMenuOpen(false)}
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
                <div className="mt-8 pt-6 border-t border-pink-100">
                  <div className="space-y-4 mb-6">
                    {topBarInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Icons in Mobile Menu */}
                  <div className="flex items-center justify-center gap-4 mb-6">
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

                  {/* WhatsApp Button in Mobile Menu */}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom animations to Tailwind */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutToLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
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