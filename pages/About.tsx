import React from 'react';
import { Check, X } from 'lucide-react';

const About: React.FC = () => {
  const supplyCountries = [
    { name: 'South Africa', code: 'za' },
    { name: 'Egypt', code: 'eg' },
    { name: 'Tanzania', code: 'tz' },
    { name: 'Poland', code: 'pl' },
    { name: 'India', code: 'in' },
    { name: 'USA', code: 'us' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">About Fruitlinq</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
            A proud subsidiary of Hortgro Fresh Private Limited. We are redefining the fresh beverage landscape in India.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://m.media-amazon.com/images/I/61imFWU1g9L._AC_UF1000,1000_QL80_.jpg" 
                    alt="Premium Orange Orchard" 
                    className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-medium">
                      Direct from Partner Farms
                  </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-slide-in-right">
              <h2 className="font-heading text-3xl font-bold text-gray-900">The "Starbucks of Fresh Vending"</h2>
              <p className="text-gray-600 leading-relaxed">
                Fruitlinq is not just a vending machine; it's a premium lifestyle amenity. Our vision is to bring hygienic, automated, and purely fresh nutrition to every high-value corner of India.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-fruitlinq-orange pl-6 py-1 hover:bg-orange-50 transition-colors rounded-r-lg">
                  <h3 className="font-bold text-lg text-gray-800">Our Mission</h3>
                  <p className="text-gray-600">To democratize access to premium, export-grade fruit nutrition through technology.</p>
                </div>
                <div className="border-l-4 border-fruitlinq-green pl-6 py-1 hover:bg-green-50 transition-colors rounded-r-lg">
                  <h3 className="font-bold text-lg text-gray-800">Our Heritage</h3>
                  <p className="text-gray-600">Backed by 25+ years of global fruit supply chain expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="font-heading text-3xl font-bold text-gray-900">Why We Are Different</h2>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 max-w-4xl mx-auto animate-scale-in">
                <div className="grid grid-cols-3 bg-gray-900 text-white p-6">
                    <div className="font-bold text-lg">Feature</div>
                    <div className="font-bold text-lg text-center text-gray-400">Traditional Juice Stall</div>
                    <div className="font-bold text-lg text-center text-fruitlinq-orange">Fruitlinq Vending</div>
                </div>
                
                {[
                    { feat: "Hygiene", bad: "Questionable water/handling", good: "Contactless, Zero Touch" },
                    { feat: "Sourcing", bad: "Local Mandi (Variable)", good: "Global Farms (Fixed Spec)" },
                    { feat: "Consistency", bad: "Varies daily", good: "Standardized Taste" },
                    { feat: "Operations", bad: "Heavy Manpower", good: "Fully Automated" },
                    { feat: "Availability", bad: "Limited Hours", good: "24/7 Service" },
                    { feat: "Payments", bad: "Cash/Mixed", good: "Digital/UPI Integrated" },
                ].map((row, idx) => (
                    <div key={idx} className={`grid grid-cols-3 p-6 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} items-center hover:bg-gray-100 transition-colors duration-200`}>
                        <div className="font-medium text-gray-800">{row.feat}</div>
                        <div className="text-center text-gray-500 flex justify-center gap-2 items-center">
                            <X size={16} className="text-red-400"/> {row.bad}
                        </div>
                        <div className="text-center font-semibold text-fruitlinq-green flex justify-center gap-2 items-center">
                            <Check size={16} /> {row.good}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Global Supply Map (With Flags) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 animate-fade-in">Global Supply Strength</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                {supplyCountries.map((country, idx) => (
                    <div 
                        key={country.name} 
                        className="flex flex-col items-center space-y-4 group cursor-default opacity-0 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-gray-50 overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-orange-100 relative">
                            <img 
                                src={`https://flagcdn.com/w160/${country.code}.png`}
                                srcSet={`https://flagcdn.com/w320/${country.code}.png 2x`}
                                alt={`${country.name} Flag`}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-125"
                                loading="lazy"
                            />
                        </div>
                        <span className="font-heading font-semibold text-gray-700 text-base md:text-lg group-hover:text-fruitlinq-orange transition-colors duration-300">{country.name}</span>
                    </div>
                ))}
            </div>
            <p className="mt-16 text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
                Our farm-to-cup control spans 6 countries, ensuring that we control the quality, price, and availability of oranges year-round. No middlemen means higher margins for our partners.
            </p>
        </div>
      </section>
    </div>
  );
};

export default About;