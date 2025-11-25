import React, { useState } from 'react';
import { Menu, X, Award, Users, Calendar, Target } from 'lucide-react';

const FlashPickleballWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop', alt: 'Pickleball Court' },
    { id: 2, url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop', alt: 'Players on Court' },
    { id: 3, url: 'https://images.unsplash.com/photo-1617883861744-7686a0c781d0?w=400&h=300&fit=crop', alt: 'Pickleball Equipment' },
    { id: 4, url: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=400&h=300&fit=crop', alt: 'Training Session' },
    { id: 5, url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=300&fit=crop', alt: 'Competition' },
    { id: 6, url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop', alt: 'Team Practice' }
  ];

  const coachingPackages = [
    {
      name: 'Group Classes',
      price: 'Rs. 5,000/month',
      features: ['6 students per group', '16 sessions per month', '4 sessions per week', 'Morning & Evening slots']
    },
    {
      name: 'Basic Package',
      price: '$152/month',
      features: ['2 days per week', '8 classes per month', 'Personal coaching', 'Flexible location']
    },
    {
      name: 'Standard Package',
      price: '$228/month',
      features: ['3 days per week', '12 classes per month', 'Personal coaching', 'Consistent progress']
    },
    {
      name: 'Premium Package',
      price: '$289/month',
      features: ['4 days per week', '16 classes per month', '5% discount included', 'Tournament prep']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold text-white">
                THE <span className="text-yellow-400">FLASH</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900">
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-lg font-medium ${
                  activeSection === item.id
                    ? 'text-yellow-400 bg-gray-800'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div className="relative">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                THE <span className="text-yellow-400">FLASH</span> PICKLEBALL
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Nepal's Fastest Growing Pickleball Community
              </p>
              <button
                onClick={() => setActiveSection('coaching')}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition-all transform hover:scale-105"
              >
                Start Training Today
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Top Coaches</h3>
                <p className="text-gray-600">Nepal's #1 ranked players</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">Vibrant & active club</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Events</h3>
                <p className="text-gray-600">Regular tournaments</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">All Levels</h3>
                <p className="text-gray-600">Beginner to champion</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Us Section */}
      {activeSection === 'about' && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-yellow-400">The Flash</span>
          </h2>
          
          <div className="prose max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-lg text-gray-700 mb-4">
                The Flash Pickleball has quickly become one of the most vibrant and active pickleball clubs in Nepal. Our dynamic calendar of training sessions, tournaments, and community events keeps players engaged year-round.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-yellow-600">Led by Champions</h4>
                <p className="text-gray-700">
                  Founded by Samir Pokhrel and Subarna Shah—Nepal's top-ranked pickleball players in both singles and doubles. Their international experience brings world-class training to Nepal.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-yellow-600">Professional Coaching</h4>
                <p className="text-gray-700">
                  With over 4 years of playing experience and 1.5 years of dedicated professional coaching, we offer training built on proper technique and discipline.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-yellow-600">International Standards</h4>
                <p className="text-gray-700">
                  Having represented Nepal globally, our coaches bring strategies practiced by international athletes directly to local courts.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-yellow-600">Youth Development</h4>
                <p className="text-gray-700">
                  We're shaping the future of pickleball through school programs focused on discipline, fitness, and early talent development.
                </p>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">Our Vision</h4>
              <p className="text-lg">
                To establish a National Center of Excellence with dedicated training camps, regional hubs, and global athlete pathways—transforming Nepal into a rising force in world pickleball.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Coaching Section */}
      {activeSection === 'coaching' && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            Coaching <span className="text-yellow-400">Packages</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Trained by Nepal's No.1 & No.2 ranked players • Location: Sukedhara (Alley Oops)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 ${
                  index === 3
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-black'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveSection('contact')}
                  className={`w-full mt-6 py-3 rounded-lg font-bold transition-all ${
                    index === 3
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Private Class Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Flexible Timing</h4>
                <p className="text-gray-700">Choose your own time slot that fits your schedule</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Location Choice</h4>
                <p className="text-gray-700">Train at your home or our professional court</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Expert Coaching</h4>
                <p className="text-gray-700">Personal training from certified champions</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-yellow-400">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map(image => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p>Sukedhara, Kathmandu</p>
                  <p>Alley Oops Sports Complex</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Training Hours</h4>
                  <p>Morning: 7:00 AM - 9:00 AM</p>
                  <p>Evening: 4:00 PM - 7:00 PM</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Follow Us</h4>
                  <p>@theflashpickleball</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none"
                ></textarea>
                <button
                  onClick={() => alert('Thank you for your message! We will get back to you soon.')}
                  className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">
            THE <span className="text-yellow-400">FLASH</span> PICKLEBALL
          </div>
          <p className="text-gray-400">
            Nepal's Premier Pickleball Community • Coached by Champions
          </p>
          <p className="text-gray-500 mt-4">
            © 2024 The Flash Pickleball. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FlashPickleballWebsite;