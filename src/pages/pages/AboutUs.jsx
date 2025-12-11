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
      icon: <FaHeart className="text-2xl text-pink-500" />,
      title: "Passion for Perfection",
      description: "Every floral arrangement is crafted with love and attention to detail."
    },
    {
      icon: <FaLeaf className="text-2xl text-pink-500" />,
      title: "Eco-Friendly Practices",
      description: "We use sustainable materials and locally sourced flowers."
    },
    {
      icon: <FaHandsHelping className="text-2xl text-pink-500" />,
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
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-pink-600">Suraj Flower Shop</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Crafting unforgettable moments with beautiful floral decorations since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Our Story */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Suraj Flower Shop began as a small family-owned business with a simple passion for flowers. What started as a modest flower stall has now blossomed into Jaipur's premier wedding and event decoration service.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've had the privilege of decorating thousands of weddings, birthdays, corporate events, and special occasions. Each event is special to us, and we treat it with the same care and dedication as we did our very first.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a team of 30+ creative professionals who share one common goal: to create magical moments that last a lifetime.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 shadow-lg">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Suraj Flower Shop?
          </h2>
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Experienced team with 10+ years in floral decoration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Custom designs tailored to your vision and budget</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Premium quality fresh flowers from trusted suppliers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">On-time delivery and professional setup</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Affordable pricing with transparent quotes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            How We Work
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  1
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-pink-300 to-rose-300"></div>
              </div>
              
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <FaEnvelope className="text-2xl text-pink-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Share Requirements
              </h3>
              
              <p className="text-gray-600 text-sm">
                Tell us about your event details, preferences, and budget.
              </p>
              
              <div className="md:hidden mt-6 w-1 h-8 bg-gradient-to-b from-pink-300 to-rose-300"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  2
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-pink-300 to-rose-300"></div>
              </div>
              
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
                  <FaComments className="text-2xl text-rose-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Discuss & Plan
              </h3>
              
              <p className="text-gray-600 text-sm">
                We create custom designs and provide detailed quotes.
              </p>
              
              <div className="md:hidden mt-6 w-1 h-8 bg-gradient-to-b from-pink-300 to-rose-300"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  3
                </div>
              </div>
              
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">
                  <FaCheckCircle className="text-2xl text-pink-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Confirm Booking
              </h3>
              
              <p className="text-gray-600 text-sm">
                Approve the plan and we handle everything from setup to cleanup.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/919876543210?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20want%20to%20discuss%20my%20event%20decoration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
              Start Planning Now
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Visit Our Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-pink-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Our Location</h3>
                <p className="text-gray-600 text-sm">123 Flower Street, Jaipur, Rajasthan 302001</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-pink-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Call Us</h3>
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <FaClock className="text-pink-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Opening Hours</h3>
                <p className="text-gray-600 text-sm">Mon-Sun: 9 AM - 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;