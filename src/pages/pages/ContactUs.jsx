import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane, FaUser, FaCalendarAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate}
*Message:* ${formData.message}
    `.trim();

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Banner with Flower Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Flower Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1920")'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-pink-50/20"></div>
        </div>
        
        {/* Heading */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Get In <span className="text-pink-200">Touch</span>
          </h1>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Our Contact Details
              </h2>
              <p className="text-white/90 mt-2">
                Reach out to us for your dream event decoration
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="p-6 md:p-8">
              {/* Location */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    
                    Katras Bazar, Dhanbad<br />
                    Jharkhand - 828114
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Phone Numbers</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:+919876543210" 
                      className="text-gray-700 hover:text-pink-600 transition-colors block"
                    >
                      +91 6201718933 (Chandan)
                    </a>
                    <a 
                      href="tel:+919876543211" 
                      className="text-gray-700 hover:text-pink-600 transition-colors block"
                    >
                      +91 6201718933 (Support)
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Email Address</h3>
                  <a 
                    href="mailto:info@surajflowershop.com" 
                    className="text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    info@surajflowershop.com
                  </a>
                </div>
              </div>
              
              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Sunday: 6:00 AM - 9:00 PM<br />
                    Open 7 days a week
                  </p>
                </div>
              </div>
              
              {/* Quick Contact Buttons */}
              <div className="mt-10 pt-8 border-t border-pink-100">
                <h3 className="font-bold text-gray-800 text-lg mb-4">Quick Connect</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Suraj%20Flower%20Shop%2C%20I%20want%20to%20inquire%20about%20event%20decoration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <FaPhone className="text-xl" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Send Inquiry
              </h2>
              <p className="text-white/90 mt-2">
                Fill the form below and we'll contact you shortly
              </p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaUser className="text-pink-500" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaPhone className="text-pink-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      placeholder="+91 6201718933"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaEnvelope className="text-pink-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                {/* Event Type & Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaCalendarAlt className="text-pink-500" />
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaCalendarAlt className="text-pink-500" />
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaPaperPlane className="text-pink-500" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="Tell us about your event requirements, budget, and any special requests..."
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  Send via WhatsApp
                </button>
                
                <p className="text-center text-gray-500 text-sm">
                  By submitting, your details will be sent directly to our WhatsApp for quick response.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Find Us in <span className="text-pink-600">Katras, Dhanbad</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100">
            {/* Map Container */}
            <div className="h-64 md:h-96 bg-gradient-to-br from-pink-100 to-rose-100 relative">
              {/* Map Placeholder with Location Marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Suraj Flower Shop</h3>
                  <p className="text-gray-600">Katras, Dhanbad, Jharkhand</p>
                  <div className="mt-4">
                    <a
                      href="https://maps.google.com/?q=Katras+Dhanbad+Jharkhand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      <FaMapMarkerAlt />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Info */}
            <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">From Railway Station</h4>
                  <p className="text-gray-600 text-sm">15 minutes drive from Dhanbad Railway Station</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">From Bus Stand</h4>
                  <p className="text-gray-600 text-sm">5 minutes drive from Katras Bus Stand</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Parking Available</h4>
                  <p className="text-gray-600 text-sm">Ample parking space available in front of shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Locations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
            <h4 className="font-bold text-gray-800 mb-2">Katras Bazar Dhanbad</h4>
            <p className="text-gray-600 text-sm">Conveniently located in the main flower market area</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
            <h4 className="font-bold text-gray-800 mb-2">Easy Access</h4>
            <p className="text-gray-600 text-sm">Well-connected by road from all parts of Dhanbad</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
            <h4 className="font-bold text-gray-800 mb-2">Free Consultation</h4>
            <p className="text-gray-600 text-sm">Visit us for free event decoration consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;