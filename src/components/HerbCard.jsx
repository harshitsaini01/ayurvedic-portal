import { Leaf, Sparkles } from 'lucide-react';

const HerbCard = ({ herb }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-emerald-100">
        <img
          src={herb.image}
          alt={herb.commonName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full p-2.5 shadow-lg">
          <Leaf className="h-5 w-5 text-primary-600 animate-float" />
        </div>
        <div className="absolute bottom-4 left-4 bg-primary-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="h-3 w-3" />
          Premium Quality
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Common Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {herb.commonName}
        </h3>

        {/* Scientific Name */}
        <p className="text-primary-600 font-medium italic mb-2 text-sm">
          {herb.scientificName}
        </p>

        {/* Hindi Name */}
        <div className="mb-4 inline-block">
          <p className="text-gray-700 font-semibold bg-gradient-to-r from-primary-50 to-emerald-50 px-3 py-1 rounded-lg text-sm border border-primary-100">
            {herb.hindiName}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {herb.description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 pt-4 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-1">
            <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
            Key Benefits
          </p>
          <div className="flex flex-wrap gap-2">
            {herb.benefits.map((benefit, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary-50 to-emerald-50 text-primary-700 text-xs px-3 py-1.5 rounded-full font-medium border border-primary-100 hover:border-primary-300 hover:shadow-md transition-all duration-300"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbCard;
