import { useState } from 'react';
import { Search } from 'lucide-react';
import HerbCard from '../components/HerbCard';
import { herbsData } from '../data/herbsData';

const Herbs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHerbs = herbsData.filter(herb =>
    herb.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    herb.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    herb.hindiName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Ayurvedic Herbs Collection
          </h1>
          <p className="text-xl text-primary-100 text-center mb-8">
            हमारी आयुर्वेदिक जड़ी-बूटियों का संग्रह
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search herbs by name (English, Scientific, or Hindi)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Herbs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-primary-600">{filteredHerbs.length}</span> herbs
            </p>
          </div>
          
          {filteredHerbs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHerbs.map((herb) => (
                <HerbCard key={herb.id} herb={herb} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No herbs found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need Bulk Quantities?
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We supply herbs in bulk to pharmaceutical companies, ayurvedic manufacturers, and dealers.
          </p>
          <p className="text-primary-600 font-medium mb-8">
            थोक मात्रा में आपूर्ति के लिए संपर्क करें
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Request Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Herbs;
