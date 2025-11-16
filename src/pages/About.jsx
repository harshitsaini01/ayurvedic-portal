import { Leaf, Target, Eye, Award, Users, TrendingUp, Shield, Heart, CheckCircle, Sparkles, Star, Quote, Package, Clock, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header with Overlay Pattern */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-emerald-700 text-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        {/* Floating Leaf Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Leaf className="absolute top-20 left-1/4 h-8 w-8 text-white/20 animate-float" style={{animationDelay: '0s'}} />
          <Leaf className="absolute top-40 right-1/3 h-6 w-6 text-white/15 animate-float" style={{animationDelay: '2s'}} />
          <Leaf className="absolute bottom-32 left-1/3 h-10 w-10 text-white/10 animate-float" style={{animationDelay: '4s'}} />
          <Leaf className="absolute top-1/2 right-1/4 h-7 w-7 text-white/20 animate-float" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 animate-bounce">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
              <Leaf className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Us
          </h1>
          <p className="text-2xl text-primary-100 mb-4 font-semibold">
            हमारे बारे में
          </p>
          <p className="text-lg text-primary-50 max-w-3xl mx-auto leading-relaxed">
            Bridging Ancient Wisdom with Modern Healthcare
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Card with Gradient Border */}
          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-emerald-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-10 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-emerald-500 p-5 rounded-full">
                    <Leaf className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
                Your Trusted Ayurvedic Herbs Partner
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                  We are a <span className="font-bold text-primary-600">leading dealer</span> in premium quality ayurvedic herbs, serving as a vital bridge 
                  between farmers, local sellers, and major pharmaceutical and ayurvedic companies across India.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-emerald-50 p-6 rounded-xl border-l-4 border-primary-500">
                  <p className="text-lg leading-relaxed text-gray-700">
                    हम प्रीमियम गुणवत्ता वाली आयुर्वेदिक जड़ी-बूटियों के एक प्रमुख व्यापारी हैं, जो किसानों, 
                    स्थानीय विक्रेताओं और भारत भर की प्रमुख फार्मास्युटिकल और आयुर्वेदिक कंपनियों के बीच 
                    एक महत्वपूर्ण सेतु के रूप में काम करते हैं।
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  Our business model focuses on sourcing <span className="font-semibold text-emerald-600">authentic, sustainably harvested herbs</span> directly 
                  from farmers and local collectors, ensuring fair prices and quality assurance. We then 
                  supply these herbs to large-scale industries, pharmaceutical companies, and other dealers 
                  who require bulk quantities of certified medicinal herbs.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section - Enhanced with Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="group bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-3 inline-block mb-3">
                  <Users className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-sm text-primary-100 font-medium">Happy Clients</div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-3 inline-block mb-3">
                  <Leaf className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-emerald-100 font-medium">Herb Varieties</div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-primary-600 to-emerald-600 rounded-2xl p-6 text-white text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-3 inline-block mb-3">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm text-primary-100 font-medium">Years Experience</div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-600 to-primary-600 rounded-2xl p-6 text-white text-center transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-white/20 rounded-full p-3 inline-block mb-3">
                  <Shield className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-sm text-emerald-100 font-medium">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values - Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-primary-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Our Mission
                  <Sparkles className="h-5 w-5 text-primary-500" />
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To provide authentic, high-quality ayurvedic herbs while supporting farmers and 
                  promoting sustainable harvesting practices.
                </p>
                <div className="bg-primary-50 px-4 py-2 rounded-lg inline-block">
                  <p className="text-primary-700 font-semibold text-sm">
                    हमारा मिशन
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-emerald-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Our Vision
                  <Sparkles className="h-5 w-5 text-emerald-500" />
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To become India's most trusted name in ayurvedic herb trading, known for quality, 
                  reliability, and ethical business practices.
                </p>
                <div className="bg-emerald-50 px-4 py-2 rounded-lg inline-block">
                  <p className="text-emerald-700 font-semibold text-sm">
                    हमारी दृष्टि
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-primary-600 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Our Values
                  <Sparkles className="h-5 w-5 text-primary-600" />
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Quality, authenticity, sustainability, fair trade, and customer satisfaction are 
                  at the core of everything we do.
                </p>
                <div className="bg-primary-50 px-4 py-2 rounded-lg inline-block">
                  <p className="text-primary-700 font-semibold text-sm">
                    हमारे मूल्य
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do - Enhanced */}
          <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-emerald-700 rounded-3xl p-10 md:p-12 mb-16 overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
                <p className="text-primary-100 text-lg">हम क्या करते हैं</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For Farmers */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">For Farmers & Sellers</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>Fair pricing for quality herbs</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>Direct procurement from farms</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>Support for sustainable farming</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span>Regular business opportunities</span>
                    </li>
                  </ul>
                </div>

                {/* For Companies */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">For Companies & Industries</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Bulk supply of certified herbs</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Quality assurance and testing</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Competitive wholesale pricing</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Reliable and timely delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitment - Enhanced */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-emerald-600 bg-clip-text text-transparent mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-600 text-lg">हमारी प्रतिबद्धता</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quality Assurance */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      Quality Assurance
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every herb we supply undergoes rigorous quality checks to ensure it meets 
                      industry standards and customer expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sustainable Sourcing */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      Sustainable Sourcing
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We promote and support sustainable harvesting practices to preserve medicinal 
                      plants for future generations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fair Trade */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-600 to-emerald-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      Fair Trade
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We ensure farmers and local collectors receive fair compensation for their 
                      hard work and quality produce.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-600 to-primary-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      Customer Satisfaction
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Building long-term relationships through reliability, transparency, and 
                      exceptional service is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-emerald-600 bg-clip-text text-transparent mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 text-lg">हमें क्यों चुनें?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Package className="h-20 w-20 text-primary-600" />
                </div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Package className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Handpicked herbs with strict quality control ensuring the highest standards for medicinal use.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Clock className="h-20 w-20 text-emerald-600" />
                </div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Timely Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reliable logistics network ensuring your orders reach you on time, every time.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="h-20 w-20 text-primary-600" />
                </div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary-600 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Star className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Trusted Partner</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Years of experience building lasting relationships with clients across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Multi-layered Background */}
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
                  <a
                    href="/contact"
                    className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us Now
                    <Phone className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                  </a>
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
                  <a
                    href="/herbs"
                    className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    View Our Herbs
                    <Leaf className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                  </a>
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

export default About;
