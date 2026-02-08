import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Cpu,
  Eye,
  Zap,
  Cloud,
  Clock,
  Shield,
  Truck,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import Button from '../components/Button';

const SmartJuicer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Freshly Squeezed.<br/>
                <span className="text-fruitlinq-orange">Perfectly Automated.</span>
              </h1>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Fruitlinq Smart Juicer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Using cutting-edge robotics, machine vision, and AIoT, the Fruitlinq Smart Juicer makes real, freshly squeezed orange juice instantly available—safe, autonomous, and effortless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate('/franchise')}>
                  Explore Franchise
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                  Request a Demo
                </Button>
              </div>
            </div>

            <div className="animate-fade-in delay-300">
              <div className="relative">
                <img
                  src="/machine image.jpeg"
                  alt="Fruitlinq Smart Juicer"
                  className="w-full max-w-lg h-auto rounded-2xl shadow-2xl mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-fruitlinq-orange text-white p-4 rounded-xl shadow-lg">
                  <div className="text-sm font-semibold">55s</div>
                  <div className="text-xs">Fresh Juice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Fruitlinq Smart Juicer */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What is the Fruitlinq Smart Juicer?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              The Fruitlinq Smart Juicer is a fully automated fresh juice vending system that uses whole oranges only, with zero manual handling. Designed for premium, high-footfall locations, it delivers consistent, high-quality fresh orange juice in just 55 seconds.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Cpu, title: "Fully Automated", desc: "No staff required for operation" },
                { icon: Shield, title: "Hygiene First", desc: "Contactless juicing process" },
                { icon: Clock, title: "55-Second Service", desc: "Fast, efficient delivery" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <item.icon className="w-12 h-12 text-fruitlinq-orange mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Stack */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Technology Stack
            </h2>
            <p className="text-lg text-gray-600">Powered by cutting-edge technology for reliability and performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "Robotics Automation", desc: "Precision mechanical systems" },
              { icon: Eye, title: "Machine Vision", desc: "AI-powered quality inspection" },
              { icon: Zap, title: "AIoT Monitoring", desc: "Real-time system health" },
              { icon: Cloud, title: "Cloud Connectivity", desc: "Remote management & analytics" }
            ].map((tech, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                <tech.icon className="w-16 h-16 text-fruitlinq-orange mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance You Can Measure */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Performance You Can Measure
            </h2>
            <p className="text-lg text-gray-600">Quantifiable results that drive business success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "55s", title: "Delivery Time", desc: "From payment to fresh juice" },
              { metric: "24/7", title: "Operation", desc: "Continuous availability" },
              { metric: "99.2%", title: "Uptime", desc: "Reliable performance" }
            ].map((perf, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-fruitlinq-orange mb-2">{perf.metric}</div>
                <h3 className="font-semibold text-xl mb-2">{perf.title}</h3>
                <p className="text-gray-600">{perf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Hygiene & Safety Excellence
              </h2>
              <ul className="space-y-4">
                {[
                  "Fully enclosed juicing system",
                  "Contactless operation throughout",
                  "Food-grade materials certified",
                  "Automated cleaning protocols",
                  "Temperature-controlled storage"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-fruitlinq-green mr-3 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src="/machine image.jpeg"
                alt="Hygiene-focused design"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fruitlinq Supply Integration */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Fruitlinq Supply Integration
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Seamless integration with our global supply chain ensures consistent quality and availability. Sourced from premium orchards in South Africa and Egypt, with strict cold-chain logistics and full traceability.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Truck, title: "Cold-Chain Logistics", desc: "Maintained at 4°C throughout" },
                { icon: Shield, title: "Quality Assurance", desc: "Rigorous testing protocols" },
                { icon: TrendingUp, title: "Year-Round Supply", desc: "Consistent availability" }
              ].map((supply, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <supply.icon className="w-12 h-12 text-fruitlinq-orange mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{supply.title}</h3>
                  <p className="text-gray-600 text-sm">{supply.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Scale */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Scale
            </h2>
            <p className="text-lg text-gray-600">Built to grow with your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-gray-900">Franchise Expansion Ready</h3>
              <p className="text-gray-600">Easily deployable across multiple locations with centralized management.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-gray-900">Remote Monitoring</h3>
              <p className="text-gray-600">Real-time dashboards and alerts for proactive maintenance.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-gray-900">Low Manpower Dependency</h3>
              <p className="text-gray-600">Minimal daily intervention required, maximizing operational efficiency.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-gray-900">Scalable Revenue Model</h3>
              <p className="text-gray-600">Consistent per-unit margins with volume-based growth potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-fruitlinq-orange text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Bring Automation to Fresh Juice
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10">
            Join the future of beverage vending with the Fruitlinq Smart Juicer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" onClick={() => navigate('/franchise')}>
              Become a Franchise Partner
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-fruitlinq-orange" onClick={() => navigate('/contact')}>
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartJuicer;
