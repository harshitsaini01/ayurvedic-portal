import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary-400 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-800">HariOm</span>{' '}
              <span className="gradient-text">Herbs</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/herbs" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/herbs') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              Our Herbs
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2.5 rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/herbs"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Our Herbs
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
