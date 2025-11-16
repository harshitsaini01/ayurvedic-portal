import { Link } from 'react-router-dom';
import { Leaf, Users, Building2, TrendingUp, Award, Shield, Sparkles, Phone, Mail, Package, Clock, Star } from 'lucide-react';
import HerbCard from '../components/HerbCard';
import { herbsData } from '../data/herbsData';

const Home = () => {
  const featuredHerbs = herbsData.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Nature Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-green-800/90 to-teal-900/95 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80")`,
              filter: 'brightness(0.7)'
            }}
          ></div>
          {/* Animated Leaf Pattern Overlay */}
          <div className="absolute inset-0 z-20 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          {/* Additional decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl z-20"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl z-20"></div>
        </div>
        
        {/* Floating Nature Elements */}
        <div className="absolute top-20 left-10 opacity-20 z-20">
          <Leaf className="h-32 w-32 text-emerald-300 animate-float" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 z-20">
          <Leaf className="h-40 w-40 text-green-200 animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-32 left-20 opacity-20 z-20">
          <Leaf className="h-28 w-28 text-teal-300 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-20 right-32 opacity-15 z-20">
          <Leaf className="h-36 w-36 text-emerald-200 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 py-20">
          <div className="text-center">
            {/* Decorative Icon */}
            <div className="flex justify-center mb-8 animate-fadeIn">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-40 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-full border-4 border-white/30 shadow-2xl">
                  <Leaf className="h-16 w-16 text-emerald-200 animate-float" />
                </div>
              </div>
            </div>
            
            {/* Main Heading with Glow Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fadeInUp leading-tight">
              <span className="block text-white drop-shadow-2xl mb-2">
                Premium
              </span>
              <span className="block bg-gradient-to-r from-emerald-200 via-green-100 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl">
                Ayurvedic Herbs
              </span>
            </h1>
            
            {/* Subtitle with Better Styling */}
            <div className="max-w-4xl mx-auto mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl mb-3 text-emerald-50 font-bold leading-relaxed drop-shadow-lg">
                Connecting Farmers, Dealers & Industries
              </p>
              <p className="text-lg md:text-xl text-emerald-100 font-semibold leading-relaxed drop-shadow-lg">
                with Authentic Medicinal Herbs
              </p>
            </div>
            
            {/* Hindi Text with Decorative Border */}
            <div className="inline-block mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/10 backdrop-blur-md border-2 border-emerald-300/50 rounded-2xl px-6 py-3 shadow-2xl">
                <p className="text-lg md:text-xl text-emerald-50 font-bold">
                  किसानों, व्यापारियों और उद्योगों को
                </p>
                <p className="text-base md:text-lg text-emerald-100 font-semibold mt-1">
                  प्रामाणिक औषधीय जड़ी-बूटियों से जोड़ना
                </p>
              </div>
            </div>
            
            {/* CTA Buttons with Enhanced Design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/herbs"
                className="group relative bg-white text-emerald-800 px-10 py-4 rounded-2xl font-black text-base shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <Leaf className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Explore Our Herbs
                  <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
                </span>
              </Link>
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-10 py-4 rounded-2xl font-black text-base shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 transform hover:scale-110 border-4 border-white/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Get Quote
                  <span className="group-hover:translate-x-2 transition-transform text-2xl">✨</span>
                </span>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-emerald-100 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-sm font-semibold">Direct from Farmers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-sm font-semibold">53+ Premium Herbs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Our Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-800">Who We</span>{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold mb-2">
              हम किसकी सेवा करते हैं
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Building bridges between nature and commerce
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Farmers Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-emerald-100 hover:border-emerald-300">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 w-24 h-24 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-black px-4 py-2 rounded-full shadow-lg animate-pulse">
                    किसान
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  Farmers
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">
                  We buy directly from farmers, ensuring <span className="font-bold text-emerald-600">fair prices</span> and <span className="font-bold text-emerald-600">sustainable farming</span> practices.
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Direct Purchase
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Fair Trade Pricing
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Quality Support
                  </li>
                </ul>

                {/* Hindi Text */}
                <div className="pt-6 border-t-2 border-emerald-100">
                  <p className="text-emerald-700 font-bold text-base">
                    हम सीधे किसानों से खरीदते हैं
                  </p>
                </div>
              </div>
            </div>

            {/* Dealers Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-green-100 hover:border-green-300">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-green-500 to-teal-600 w-24 h-24 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm font-black px-4 py-2 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.2s' }}>
                    व्यापारी
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  Dealers
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">
                  Partner with us for <span className="font-bold text-green-600">reliable supply</span> of authentic ayurvedic herbs at <span className="font-bold text-green-600">competitive prices</span>.
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Consistent Supply
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Competitive Rates
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Quality Assurance
                  </li>
                </ul>

                {/* Hindi Text */}
                <div className="pt-6 border-t-2 border-green-100">
                  <p className="text-green-700 font-bold text-base">
                    विश्वसनीय आपूर्ति के लिए हमारे साथ जुड़ें
                  </p>
                </div>
              </div>
            </div>

            {/* Industries Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-teal-100 hover:border-teal-300">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 w-24 h-24 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                    <Building2 className="h-12 w-12 text-white" />
                  </div>
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-black px-4 py-2 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.4s' }}>
                    उद्योग
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  Industries
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">
                  <span className="font-bold text-teal-600">Bulk supply</span> of premium quality herbs for pharmaceutical and ayurvedic companies.
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Bulk Orders
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Premium Quality
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Timely Delivery
                  </li>
                </ul>

                {/* Hindi Text */}
                <div className="pt-6 border-t-2 border-teal-100">
                  <p className="text-teal-700 font-bold text-base">
                    थोक आपूर्ति के लिए संपर्क करें
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Herbs Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Our Collection
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gray-800">Featured</span>{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">Herbs</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold mb-2">
              प्रमुख जड़ी-बूटियाँ
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Discover our premium selection of authentic ayurvedic herbs
            </p>
          </div>
          
          {/* Herbs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredHerbs.map((herb) => (
              <HerbCard key={herb.id} herb={herb} />
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/herbs"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-black text-base shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-emerald-400/30"
            >
              <Leaf className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              View All 50+ Premium Herbs
              <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-green-900"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-white/10 backdrop-blur-md text-emerald-200 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-emerald-400/30">
                Our Advantages
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Why Choose <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-emerald-100 font-semibold mb-2">
              हमें क्यों चुनें
            </p>
            <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
              Excellence in every aspect of our service
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Quality */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:border-emerald-400/50 transition-all duration-500 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-emerald-400 to-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-emerald-300 transition-colors">Premium Quality</h3>
                <p className="text-emerald-100 leading-relaxed mb-3 text-sm">
                  Certified and tested herbs meeting international standards
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    ISO Certified
                  </li>
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Lab Tested
                  </li>
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Quality Assured
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Authentic Sourcing */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:border-green-400/50 transition-all duration-500 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-green-400 to-teal-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-green-300 transition-colors">Authentic Sourcing</h3>
                <p className="text-emerald-100 leading-relaxed mb-3 text-sm">
                  Direct from farmers ensuring authenticity and purity
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Direct Purchase
                  </li>
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    100% Authentic
                  </li>
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Traceable Origin
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Competitive Pricing */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:border-teal-400/50 transition-all duration-500 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-teal-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-teal-400 to-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-teal-300 transition-colors">Competitive Pricing</h3>
                <p className="text-emerald-100 leading-relaxed mb-3 text-sm">
                  Best market rates with transparent pricing
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    Best Rates
                  </li>
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    No Hidden Costs
                  </li>
                  <li className="flex items-center text-sm text-emerald-200">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    Bulk Discounts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Multi-layered Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-emerald-900/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-400/15 to-primary-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-300/10 to-emerald-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-emerald-300/15 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Floating Leaf Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Leaf className="absolute top-16 left-1/4 h-12 w-12 text-emerald-300/20 animate-float" style={{animationDelay: '0s'}} />
          <Leaf className="absolute top-32 right-1/4 h-8 w-8 text-primary-300/25 animate-float" style={{animationDelay: '3s'}} />
          <Leaf className="absolute bottom-20 left-1/3 h-10 w-10 text-emerald-200/15 animate-float" style={{animationDelay: '1.5s'}} />
          <Leaf className="absolute top-1/3 right-1/3 h-6 w-6 text-primary-200/30 animate-float" style={{animationDelay: '4s'}} />
          <Leaf className="absolute bottom-1/4 right-1/5 h-14 w-14 text-emerald-400/10 animate-float" style={{animationDelay: '2.5s'}} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-8 relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-white/15 backdrop-blur-md rounded-full p-6 border border-white/30">
                <div className="flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-white animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Ready to <span className="bg-gradient-to-r from-emerald-200 to-white bg-clip-text text-transparent">Partner</span>
                <br />
                <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">With Us?</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-white/50 rounded-full"></div>
                <Leaf className="h-6 w-6 text-emerald-200" />
                <div className="h-1 w-16 bg-gradient-to-l from-transparent to-white/50 rounded-full"></div>
              </div>
              <p className="text-2xl text-emerald-100 font-semibold mt-6">
                हमारे साथ साझेदारी के लिए तैयार हैं?
              </p>
            </div>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join <span className="font-bold text-emerald-200">500+ satisfied clients</span> who trust us for their ayurvedic herb needs. 
              Experience premium quality, competitive pricing, and reliable service that has made us 
              <span className="font-bold text-white"> India's trusted herb trading partner</span>.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-emerald-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Instant Quote</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Contact us now for bulk orders, competitive pricing, and personalized service for your business needs.
                  </p>
                  <Link
                    to="/contact"
                    className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us Now
                    <Phone className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Browse Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-300 to-primary-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore Our Collection</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Browse our extensive collection of 50+ premium ayurvedic herbs sourced directly from trusted farmers.
                  </p>
                  <Link
                    to="/herbs"
                    className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    View Our Herbs
                    <Leaf className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">Get In Touch</h4>
              <p className="text-emerald-100">संपर्क करें</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <div className="bg-white/20 rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-emerald-100 text-sm font-medium">Call Us</p>
                  <p className="text-white font-bold text-lg">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <div className="bg-white/20 rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-emerald-100 text-sm font-medium">Email Us</p>
                  <p className="text-white font-bold text-lg">info@ayurvedicherbs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
