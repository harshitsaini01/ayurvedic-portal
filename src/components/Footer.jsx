import { Leaf, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <Leaf className="h-8 w-8 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold text-white">
                HariOm <span className="text-primary-500">Herbs</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in premium quality ayurvedic herbs. We connect farmers, 
              dealers, and industries with authentic, sustainably sourced medicinal herbs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-500" />
                <span>+91 98765 43210</span>
                
                <Phone className="h-4 w-4 text-primary-500" />
                <span>+91 98765 43210</span>
                
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-500" />
                <span>info@hariomherbs.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/herbs" className="hover:text-primary-500 transition-colors">
                  Our Herbs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Bulk Supply</li>
              <li className="text-gray-400">Quality Assurance</li>
              <li className="text-gray-400">Direct from Farmers</li>
              <li className="text-gray-400">Industry Partnerships</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {new Date().getFullYear()} HariOm Herbs. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{' '}
              for nature and wellness.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              All rights reserved. | प्रकृति और स्वास्थ्य के लिए समर्पित
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
