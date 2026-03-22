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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `
*New Inquiry - Suraj Flower House* 🌸

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate}
*Message:* ${formData.message}
    `.trim();
    window.open(`https://wa.me/916201718933?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO SECTION ── */}
      <div className="relative bg-gradient-to-br from-pink-600 via-rose-500 to-pink-700 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-rose-300/20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-400/10 blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 py-8 md:py-14 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-200 animate-pulse"></div>
            <span className="text-white/90 text-xs font-medium tracking-wide">We reply within 1 hour</span>
          </div>

          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
            Let's Create Your <br className="hidden md:block" />
            <span className="text-pink-200">Dream Event</span> Together
          </h1>
          <p className="text-white/80 text-sm md:text-lg max-w-xl mx-auto">
            Reach out to us for weddings, birthdays, and all special occasions. We'd love to hear from you!
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6">
            <a href="tel:+916201718933"
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-xs md:text-sm px-3 py-1.5 rounded-full transition-all">
              <FaPhone className="text-xs" /> +91 6201718933
            </a>
            <a href="mailto:info@surajflowershop.com"
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-xs md:text-sm px-3 py-1.5 rounded-full transition-all">
              <FaEnvelope className="text-xs" /> info@surajflowershop.com
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">

          {/* ── LEFT: Contact Details Card ── */}
          <div className="flex flex-col gap-4 md:gap-5">

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-100 overflow-hidden">
              <div className="px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-pink-500 to-rose-500">
                <h2 className="text-base md:text-xl font-bold text-white">Our Contact Details</h2>
                <p className="text-white/80 text-xs md:text-sm">Reach us anytime for your event</p>
              </div>

              <div className="p-4 md:p-6 grid grid-cols-1 gap-3 md:gap-4">
                {[
                  {
                    icon: <FaMapMarkerAlt className="text-pink-600" />,
                    title: 'Location',
                    content: 'Katras Bazar, Near Bajrang Bali Mandir, Dhanbad – 828114',
                    link: 'https://maps.google.com/?q=Katras+Dhanbad'
                  },
                  {
                    icon: <FaPhone className="text-pink-600" />,
                    title: 'Phone',
                    content: '+91 6201718933',
                    link: 'tel:+916201718933'
                  },
                  {
                    icon: <FaEnvelope className="text-pink-600" />,
                    title: 'Email',
                    content: 'info@surajflowershop.com',
                    link: 'mailto:info@surajflowershop.com'
                  },
                  {
                    icon: <FaClock className="text-pink-600" />,
                    title: 'Hours',
                    content: 'Mon – Sun: 6:00 AM – 9:00 PM',
                    link: null
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-pink-50">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-pink-600 mb-0.5">{item.title}</p>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                          className="text-gray-700 text-xs md:text-sm hover:text-pink-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-xs md:text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Connect Buttons */}
              <div className="px-4 pb-4 md:px-6 md:pb-6 flex gap-3">
                <a href="https://wa.me/916201718933?text=Hello%20Suraj%20Flower%20House%2C%20I%20want%20to%20inquire"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="tel:+916201718933"
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                  <FaPhone /> Call Now
                </a>
              </div>
            </div>

            {/* ── FLOWER IMAGE - below contact card ── */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-pink-100 h-44 md:h-64">
              <img
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=900"
                alt="Beautiful flower decoration"
                className="w-full h-full object-cover"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-sm md:text-base leading-tight">
                    🌸 Making Every Moment Magical
                  </p>
                  <p className="text-pink-200 text-xs mt-0.5">Suraj Flower House — Since 2010</p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 h-32 md:h-44 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-2 shadow-lg animate-bounce">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <p className="font-bold text-gray-800 text-sm">Suraj Flower House</p>
                  <p className="text-gray-500 text-xs">Katras, Dhanbad, Jharkhand</p>
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full border-2 border-pink-200 opacity-40 animate-ping"></div>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <a href="https://maps.google.com/?q=Katras+Dhanbad+Jharkhand"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                  <FaMapMarkerAlt /> Open in Google Maps
                </a>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div className="bg-pink-50 rounded-lg p-2">
                    <p className="font-semibold text-gray-700 mb-0.5">🚂 Railway Station</p>
                    <p>15 min drive from Dhanbad</p>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-2">
                    <p className="font-semibold text-gray-700 mb-0.5">🚌 Bus Stand</p>
                    <p>5 min from Katras Bus Stand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-lg overflow-hidden">
            <div className="px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-rose-500 to-pink-500">
              <h2 className="text-base md:text-xl font-bold text-white">Send Inquiry</h2>
              <p className="text-white/80 text-xs md:text-sm">Fill below & we'll reply on WhatsApp shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
              {/* Name */}
              <div>
                <label className="flex items-center gap-1.5 text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  <FaUser className="text-pink-500 text-xs" /> Your Name
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm"
                  placeholder="Enter your full name" />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-gray-700 font-medium mb-1 text-xs md:text-sm">
                    <FaPhone className="text-pink-500 text-xs" /> Phone
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm"
                    placeholder="+91..." />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-gray-700 font-medium mb-1 text-xs md:text-sm">
                    <FaEnvelope className="text-pink-500 text-xs" /> Email
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm"
                    placeholder="your@email.com" />
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-gray-700 font-medium mb-1 text-xs md:text-sm">
                    <FaCalendarAlt className="text-pink-500 text-xs" /> Event Type
                  </label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm bg-white">
                    <option value="">Select...</option>
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
                  <label className="flex items-center gap-1.5 text-gray-700 font-medium mb-1 text-xs md:text-sm">
                    <FaCalendarAlt className="text-pink-500 text-xs" /> Event Date
                  </label>
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-1.5 text-gray-700 font-medium mb-1 text-xs md:text-sm">
                  <FaPaperPlane className="text-pink-500 text-xs" /> Message
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="3"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-pink-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm resize-none"
                  placeholder="Tell us about your event, budget, and requirements..."></textarea>
              </div>

              {/* Submit */}
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                <FaWhatsapp className="text-base md:text-lg" />
                Send via WhatsApp
              </button>

              <p className="text-center text-gray-400 text-xs">
                Your details will be sent directly to our WhatsApp for a quick response 🌸
              </p>

              {/* Info cards below form */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { emoji: '⚡', title: 'Fast Reply', desc: 'Within 1 hour' },
                  { emoji: '🎨', title: 'Free Quote', desc: 'No hidden charges' },
                  { emoji: '💯', title: '5000+', desc: 'Happy clients' }
                ].map((item, i) => (
                  <div key={i} className="bg-pink-50 rounded-xl p-2 text-center border border-pink-100">
                    <div className="text-base mb-0.5">{item.emoji}</div>
                    <p className="text-gray-800 font-bold text-xs">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;