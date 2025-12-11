import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin, FaAward, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Suraj Kumar",
      position: "Founder & Lead Decorator",
      experience: "12+ Years",
      phone: "+91 98765 43210",
      email: "suraj@surajflowershop.com",
      bio: "With over 12 years in floral decoration, Suraj brings creativity and innovation to every project.",
      specialties: ["Wedding Decor", "Floral Design", "Event Planning"],
      social: {
        instagram: "https://instagram.com/surajflowershop",
        facebook: "https://facebook.com/surajflowershop",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Rahul Sharma",
      position: "Senior Event Manager",
      experience: "8+ Years",
      phone: "+91 98765 43211",
      email: "rahul@surajflowershop.com",
      bio: "Expert in event coordination and client management with 1000+ successful events.",
      specialties: ["Event Management", "Client Coordination", "Venue Setup"],
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Priya Singh",
      position: "Floral Design Specialist",
      experience: "6+ Years",
      phone: "+91 98765 43212",
      email: "priya@surajflowershop.com",
      bio: "Creative floral artist specializing in contemporary and traditional arrangements.",
      specialties: ["Floral Art", "Theme Design", "Centerpieces"],
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Amit Patel",
      position: "Operations Head",
      experience: "10+ Years",
      phone: "+91 98765 43213",
      email: "amit@surajflowershop.com",
      bio: "Ensures smooth operations and timely execution of all decoration projects.",
      specialties: ["Operations", "Logistics", "Team Management"],
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section with Flower Background */}
      <div className="relative py-6 md:py-12 overflow-hidden">
        {/* Flower Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1698460918119-7359a8a945a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-repeat bg-center"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 to-white/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Meet Our <span className="text-pink-600">Talented Team</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            The creative minds and skilled hands behind every magical decoration
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">12+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">4</div>
              <div className="text-gray-600 text-sm">Expert Members</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">1000+</div>
              <div className="text-gray-600 text-sm">Events Completed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">50+</div>
              <div className="text-gray-600 text-sm">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-pink-600">Expert Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who make your dream events come true
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Member Photo Section */}
              <div className="relative h-64 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Member Photo - Placeholder with Gradient */}
                <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <FaCalendarAlt className="text-pink-500 text-sm" />
                    <span className="text-gray-800 font-semibold text-sm">{member.experience}</span>
                  </div>
                </div>
                
                {/* Social Icons - Appear on Hover */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-100 transition-colors">
                      <FaInstagram className="text-pink-600" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-100 transition-colors">
                      <FaFacebook className="text-pink-600" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-pink-100 transition-colors">
                      <FaLinkedin className="text-pink-600" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Member Info */}
              <div className="p-6">
                {/* Name & Position */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium">{member.position}</p>
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 text-sm mb-5">{member.bio}</p>
                
                {/* Specialties */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUserTie className="text-pink-400" />
                    <span className="text-sm font-medium text-gray-700">Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-3 pt-5 border-t border-pink-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-pink-600 text-sm" />
                    </div>
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-gray-700 hover:text-pink-600 text-sm transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-pink-600 text-sm" />
                    </div>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-700 hover:text-pink-600 text-sm transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values Section */}
        <div className="mt-4 md:mt-10 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Our <span className="text-pink-600">Team Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-pink-600 text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">Delivering exceptional quality in every project</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-pink-600 text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">Working together to achieve the best results</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-pink-600 text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Reliability</h4>
              <p className="text-gray-600 text-sm">Consistent, on-time delivery of promises</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-6 md:mt-10">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Want to work with our expert team for your next event?
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20Suraj%20Flower%20Shop%20Team%2C%20I%20want%20to%20discuss%20my%20event%20decoration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
          >
            <FaPhone className="text-xl" />
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;