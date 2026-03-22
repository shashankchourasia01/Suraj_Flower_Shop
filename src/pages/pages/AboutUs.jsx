import React from 'react';
import { FaAward, FaUsers, FaCalendarCheck, FaHeart, FaLeaf, FaHandsHelping, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaComments, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const AboutUs = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <FaCalendarCheck className="text-pink-500" /> },
    { number: '5000+', label: 'Happy Clients', icon: <FaUsers className="text-pink-500" /> },
    { number: '1000+', label: 'Events Decorated', icon: <FaHeart className="text-pink-500" /> },
    { number: '50+', label: 'Awards Won', icon: <FaAward className="text-pink-500" /> }
  ];

  const values = [
    {
      icon: <FaHeart className="text-xl text-pink-500" />,
      title: "Passion for Perfection",
      description: "Every floral arrangement is crafted with love and attention to detail."
    },
    {
      icon: <FaLeaf className="text-xl text-pink-500" />,
      title: "Eco-Friendly Practices",
      description: "We use sustainable materials and locally sourced flowers."
    },
    {
      icon: <FaHandsHelping className="text-xl text-pink-500" />,
      title: "Personalized Service",
      description: "Tailored designs that reflect your unique style and personality."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">

      {/* Hero Section */}
      <div className="relative py-4 md:py-10 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
              About <span className="text-pink-600">Suraj Flower Shop</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-xl max-w-3xl mx-auto">
              Crafting unforgettable moments with beautiful floral decorations since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-5 md:py-12">

        {/* Our Story */}
        <div className="mb-7 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 text-xs md:text-base mb-2 md:mb-4">
                Founded in 2010, Suraj Flower Shop began as a small family-owned business with a simple passion for flowers. What started as a modest flower stall has now blossomed into a premier wedding and event decoration service.
              </p>
              <p className="text-gray-600 text-xs md:text-base mb-2 md:mb-4">
                Over the years, we've had the privilege of decorating thousands of weddings, birthdays, corporate events, and special occasions. Each event is special to us, and we treat it with the same care and dedication.
              </p>
              <p className="text-gray-600 text-xs md:text-base">
                Today, we're proud to be a team of 30+ creative professionals who share one common goal: to create magical moments that last a lifetime.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-3 md:p-6 shadow-lg">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1698460918119-7359a8a945a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mb-7 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-3 md:p-6 shadow-md text-center">
              <div className="flex justify-center mb-1.5 md:mb-3">
                {stat.icon}
              </div>
              <div className="text-xl md:text-3xl font-bold text-gray-800 mb-0.5 md:mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-7 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow flex md:flex-col items-start md:items-center gap-3 md:gap-0">
                {/* Mobile: icon left, text right | Desktop: centered */}
                <div className="flex-shrink-0 md:mb-3">
                  {value.icon}
                </div>
                <div className="flex-1 md:text-center">
                  <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-7 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Why Choose Suraj Flower Shop?
          </h2>
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 md:p-8">
            <ul className="space-y-2.5 md:space-y-4">
              {[
                'Experienced team with 10+ years in floral decoration',
                'Custom designs tailored to your vision and budget',
                'Premium quality fresh flowers from trusted suppliers',
                'On-time delivery and professional setup',
                'Affordable pricing with transparent quotes'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-pink-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-xs md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-7 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-5 md:mb-8 text-center">
            How We Work
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            {/* Step 1 */}
            <div className="flex md:flex-col items-center md:text-center w-full md:w-1/3 gap-4 md:gap-0">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg md:mb-4">
                  1
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-pink-300 to-rose-300"></div>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 md:mb-3">
                <FaEnvelope className="text-lg md:text-2xl text-pink-600" />
              </div>
              <div>
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-3">Share Requirements</h3>
                <p className="text-gray-600 text-xs md:text-sm">Tell us about your event details, preferences, and budget.</p>
              </div>
            </div>

            {/* Mobile divider */}
            <div className="md:hidden w-0.5 h-6 bg-gradient-to-b from-pink-300 to-rose-300 self-start ml-6"></div>

            {/* Step 2 */}
            <div className="flex md:flex-col items-center md:text-center w-full md:w-1/3 gap-4 md:gap-0">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg md:mb-4">
                  2
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-pink-300 to-rose-300"></div>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 md:mb-3">
                <FaComments className="text-lg md:text-2xl text-rose-600" />
              </div>
              <div>
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-3">Discuss & Plan</h3>
                <p className="text-gray-600 text-xs md:text-sm">We create custom designs and provide detailed quotes.</p>
              </div>
            </div>

            {/* Mobile divider */}
            <div className="md:hidden w-0.5 h-6 bg-gradient-to-b from-pink-300 to-rose-300 self-start ml-6"></div>

            {/* Step 3 */}
            <div className="flex md:flex-col items-center md:text-center w-full md:w-1/3 gap-4 md:gap-0">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg md:mb-4">
                  3
                </div>
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 md:mb-3">
                <FaCheckCircle className="text-lg md:text-2xl text-pink-600" />
              </div>
              <div>
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-3">Confirm Booking</h3>
                <p className="text-gray-600 text-xs md:text-sm">Approve the plan and we handle everything from setup to cleanup.</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-6 md:mt-10">
            <a
              href="https://wa.me/916201718933?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20want%20to%20discuss%20my%20event%20decoration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
            >
              <FaWhatsapp className="text-base md:text-lg" />
              Start Planning Now
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Visit Our Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: <FaMapMarkerAlt className="text-pink-600" />, title: 'Our Location', text: 'Katras Bazar, Near Bajrang Bali Mandir, Dhanbad-828114' },
              { icon: <FaPhoneAlt className="text-pink-600" />, title: 'Call Us', text: '+91 62017 18933' },
              { icon: <FaClock className="text-pink-600" />, title: 'Opening Hours', text: 'Mon-Sun: 6 AM - 9 PM' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;