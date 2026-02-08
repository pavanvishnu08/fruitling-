import React from 'react';
import { Check, X, ShoppingCart, Coffee, Truck, Building } from 'lucide-react';

const About: React.FC = () => {
  const supplyCountries = [
    { name: 'India', code: 'in' },
    { name: 'South Africa', code: 'za' },
    { name: 'Egypt', code: 'eg' },
    { name: 'Tanzania', code: 'tz' },
    { name: 'Poland', code: 'pl' },
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

      {/* Additional Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold text-gray-900 mb-12 text-center">Company Overview</h2>

            <div className="space-y-12">
              {/* About Fruitlinq */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  Fruitlinq is a fresh grocery and food technology company specializing in fresh fruit sourcing, online fruit delivery, and freshly squeezed orange juice vending machines. Built on decades of experience in global fruit supply chains, we combine quality, technology, and convenience to deliver reliable fresh food experiences.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Today, Fruitlinq operates two complementary businesses designed to make fresh food easily accessible.
                </p>
              </div>

              {/* Our Businesses */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-6">Our Businesses</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Fresh Fruits Through E-Commerce */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <ShoppingCart className="w-8 h-8 text-fruitlinq-orange mr-3" />
                      <h4 className="font-semibold text-lg text-gray-900">Fresh Fruits Through E-Commerce</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Buy fresh, high-quality fruits online through the Fruitlinq app and website. We source fruits directly from trusted farmers and maintain freshness through strict quality checks, professional packaging, and efficient fulfillment.
                    </p>
                  </div>

                  {/* Fresh Orange Juice Through Smart Vending */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <Coffee className="w-8 h-8 text-fruitlinq-orange mr-3" />
                      <h4 className="font-semibold text-lg text-gray-900">Fresh Orange Juice Through Smart Vending</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Enjoy freshly squeezed orange juice on demand through our premium vending machines, strategically placed in high-footfall locations such as offices, commercial hubs, and public spaces. Each machine delivers hygienic, additive-free juice with consistent taste and freshness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Fruitlinq */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-6">Why Fruitlinq</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Truck className="w-6 h-6 text-fruitlinq-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 leading-relaxed">25+ years of fresh produce and export expertise</p>
                      <p className="text-gray-600 leading-relaxed">Direct farm sourcing with full traceability</p>
                      <p className="text-gray-600 leading-relaxed">End-to-end supply chain control, from sourcing to packaging and exports</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="w-6 h-6 text-fruitlinq-green mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 leading-relaxed">Reliable supply supported by forecasting and operational scale</p>
                      <p className="text-gray-600 leading-relaxed">Digital platforms and franchise support for sustained growth</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Backing */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">Corporate Backing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fruitlinq operates as a wholly owned subsidiary of Hortgro Fresh Private Limited, a globally established fresh produce company with operations across multiple countries and a strong track record in international fruit exports.
                </p>
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
            <p className="mt-16 text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
                Our farm-to-cup control spans 6 countries, ensuring that we control the quality, price, and availability of oranges year-round. No middlemen means higher margins for our partners.
            </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <hr className="border-gray-200" />
        </div>
      </div>

      
    </div>
  );
};

export default About;