import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    alert('Thank you for your inquiry! We will get back to you soon.\n\nआपकी पूछताछ के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।');
    setFormData({
      name: '',
      email: '',
      phone: '',
      userType: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100">
            हमसे संपर्क करें
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Whether you're a farmer looking to sell quality herbs, a dealer seeking reliable supply, 
                or an industry requiring bulk quantities, we're here to help.
              </p>
              <p className="text-primary-600 font-medium mb-8">
                चाहे आप जड़ी-बूटी बेचने वाले किसान हों, विश्वसनीय आपूर्ति चाहने वाले व्यापारी हों, 
                या थोक मात्रा की आवश्यकता वाली कंपनी हों, हम मदद के लिए यहां हैं।
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@hariomherbs.com</p>
                    <p className="text-gray-600">sales@hariomherbs.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Serving across India</p>
                    <p className="text-gray-600">भारत भर में सेवा उपलब्ध</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-primary-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
                <p className="text-primary-600 font-medium mt-2">
                  व्यापार समय: सोमवार - शनिवार
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name / नाम *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email / ईमेल *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone / फ़ोन *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+91 98765 43210"
                    
                  />
                </div>

                {/* User Type */}
                <div>
                  <label htmlFor="userType" className="block text-gray-700 font-medium mb-2">
                    I am a / मैं हूँ *
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select...</option>
                    <option value="farmer">Farmer / किसान</option>
                    <option value="dealer">Dealer / व्यापारी</option>
                    <option value="industry">Industry / उद्योग</option>
                    <option value="other">Other / अन्य</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message / संदेश *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Looking for Specific Herbs?
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We deal in 30+ varieties of ayurvedic herbs. If you're looking for something specific, 
              let us know and we'll help you source it.
            </p>
            <p className="text-primary-600 font-medium">
              विशिष्ट जड़ी-बूटियों की तलाश है? हमें बताएं, हम मदद करेंगे।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
