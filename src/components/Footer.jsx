import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/pages/about-us' },
    { name: 'Our Team', path: '/pages/our-team' },
    { name: 'Pricing Plans', path: '/pages/pricing-plan' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact Us', path: '/pages/contact-us' }
  ];

  const services = [
    'Wedding Decoration',
    'Birthday Parties',
    'Reception Decor',
    'Baby Shower',
    'Car Decoration',
    'Corporate Events',
    'Home Opening',
    'Anniversary'
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: 'https://facebook.com/surajflowershop', label: 'Facebook' },
    { icon: <FaInstagram />, link: 'https://instagram.com/surajflowershop', label: 'Instagram' },
    { icon: <FaYoutube />, link: 'https://youtube.com/surajflowershop', label: 'YouTube' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/916201718933', label: 'WhatsApp' }
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+91 62017 18933', link: 'tel:+919876543210' },
    { icon: <FaEnvelope />, text: 'info@surajflowershop.com', link: 'mailto:info@surajflowershop.com' },
    { icon: <FaMapMarkerAlt />, text: 'Katras Bazar Near Bajrang Bali Mandir, Dhanbad - 828114', link: 'https://maps.google.com/?q=Katras+Dhanbad' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-pink-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Left - Shop Info & Contact */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center">
                    <FaHeart className="text-white" />
                  </div>
                  Suraj Flower House
                </h3>
                <p className="text-white/80">
                  Creating magical moments with floral artistry since 2010. 
                  Your trusted partner for all event decorations.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Center Left - Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                    >
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Right - Our Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-2 text-white/80 group">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      {service}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Social Media & Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Connect With Us</h3>
              
              {/* Social Icons */}
              <div className="mb-8">
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 flex items-center justify-center text-white hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                
                <p className="text-white/80 text-sm">
                  Follow us for updates, event ideas, and special offers
                </p>
              </div>

              {/* Timings */}
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-bold mb-2">Opening Hours</h4>
                <div className="space-y-1 text-sm text-white/80">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="text-pink-300">6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="text-xs text-white/60">
                    7 days a week, including holidays
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="my-12 border-t border-white/20 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                <FaHeart className="text-white" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            {/* Copyright */}
            <div className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} Suraj Flower House. All rights reserved.
              <div className="mt-1">
                Designed By <FaHeart className="inline text-pink-400 mx-1" /> Shashank Chourasia - 9304637399
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-white/70 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="text-white/70 text-sm">
              We accept: Cash, UPI, Bank Transfer
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/916201718933?text=Hello%20Suraj%20Flower%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce-slow hover:animate-none">
              <FaWhatsapp />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs animate-ping opacity-20"></div>
          </a>
        </div>
      </div>

      {/* Add Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;