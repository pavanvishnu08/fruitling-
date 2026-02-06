import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Leaf, 
  Smartphone, 
  Building2, 
  ShoppingBag, 
  Train, 
  Stethoscope, 
  GraduationCap, 
  Briefcase
} from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through the steps to create a "live" loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500); // 2.5 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Background decorative elements with Blob Animation */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-1/2 h-full bg-orange-50/50 -skew-x-12 translate-x-20 z-0 transition-transform duration-1000 hover:translate-x-10"></div>
        <div className="absolute -bottom-8 left-0 w-72 h-72 bg-green-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-yellow-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 relative z-10 -mt-12 lg:-mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-fruitlinq-orange font-medium text-sm animate-fade-in delay-100 hover:scale-105 transition-transform duration-300 cursor-default">
                <Zap size={16} className="mr-2 fill-current animate-pulse" /> India's First Farm-Controlled Franchise
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 animate-fade-in-up delay-200">
                Farm to Cup in <br/>
                <span className="text-fruitlinq-orange inline-block animate-pulse-slow">55 Seconds</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-in-up delay-300">
                Imported, premium oranges from South Africa & Egypt. Freshly squeezed in front of you. 
                <span className="font-semibold text-gray-800 block mt-2">No water. No sugar. No ice.</span>
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
                <Button size="lg" onClick={() => navigate('/franchise')} className="hover:animate-pulse">Explore Franchise</Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>Request Call Back</Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 flex flex-wrap gap-6 text-sm font-medium text-gray-500 border-t border-gray-100 animate-fade-in delay-500">
                <div className="flex items-center space-x-2 hover:text-fruitlinq-green transition-colors group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-fruitlinq-green group-hover:rotate-12 transition-transform">
                    <Leaf size={16} />
                  </div>
                  <span>100% Fresh Juice</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-fruitlinq-orange transition-colors group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-fruitlinq-orange group-hover:rotate-12 transition-transform">
                    <Zap size={16} />
                  </div>
                  <span>Fully Automatic</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:rotate-12 transition-transform">
                    <Smartphone size={16} />
                  </div>
                  <span>UPI Enabled</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-fade-in delay-300">
              <div className="w-full max-w-sm lg:max-w-md relative animate-float">
                {/* Image Placeholder - simulating a high quality vending machine product shot */}
                <div className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] flex items-center justify-center group">
                   <img 
                     src="https://cdn.gamma.app/iy8eyofhaloe2da/b49ac99ce86947bebed7913ed677e4b1/original/WhatsApp-Image-2025-12-09-at-09.09.20.jpeg" 
                     alt="Fruitlinq Vending Machine" 
                     className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
                   <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:translate-y-1">
                      <div className="flex justify-between items-center">
                          <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Live Status</p>
                              <p className="font-heading font-bold text-gray-800">Dispensing Freshness</p>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-fruitlinq-orange flex items-center justify-center text-white font-bold animate-pulse">55s</div>
                      </div>
                   </div>
                </div>
                
                {/* Decorative circle behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full -z-10 animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-orange-200 rounded-full -z-10 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Proposition - News Card Style */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-base text-fruitlinq-green font-bold tracking-wide uppercase mb-2">Why Fruitlinq?</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">India's First Farm-Controlled<br/>Orange Juice Franchise</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                image: "https://media.istockphoto.com/id/976838412/photo/farmer-holding-wooden-box-with-fresh-oranges-in-orchard.jpg?s=612x612&w=0&k=20&c=Dqh6knJcQt0dBntygC3z5HbPmcbp6kuuuyeQvBXWKe4=",
                title: "Direct Sourcing", 
                desc: "No middlemen. Direct export partnerships from global orchards." 
              },
              { 
                image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
                title: "Export Grade", 
                desc: "Only Grade-A oranges used. Strict quality control." 
              },
              { 
                image: "https://thumbs.dreamstime.com/b/fresh-orange-tangerine-price-tag-isolated-white-63102252.jpg", 
                title: "Stable Pricing", 
                desc: "Predictable farm-to-franchise costs year-round." 
              },
              { 
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrs2ng0jCv-yZ8vvKT0v-4sboUmWT-lmPxA&s", 
                title: "Year-Round Supply", 
                desc: "Sourced from South Africa & Egypt across seasons." 
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group opacity-0 animate-fade-in-up hover:-translate-y-2 overflow-hidden flex flex-col"
                style={{ animationDelay: `${idx * 5}ms`, animationFillMode: 'forwards' }}
              >
                <div className="h-48 overflow-hidden relative">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <h4 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-fruitlinq-orange transition-colors">{item.title}</h4>
                   <p className="text-gray-600 leading-relaxed text-sm flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Cup Journey - LIVE ANIMATED SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 animate-fade-in">
             <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Our Farm-to-Cup Journey</h2>
             <p className="text-gray-500 mt-4 max-w-2xl">Meticulously managed supply chain ensuring the highest quality from soil to sip.</p>
          </div>

          <div className="relative">
             {/* Timeline Line Background */}
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1.5 bg-gray-100 -translate-y-1/2 z-0 rounded-full"></div>
             
             {/* Live Animated Progress Line */}
             <div 
                className="hidden lg:block absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-fruitlinq-green to-fruitlinq-orange -translate-y-1/2 z-0 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${(activeStep / 4) * 100}%` }}
             ></div>

             <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
               {[
                 { title: "Global Sourcing", desc: "Premium orchards in South Africa & Egypt" },
                 { title: "Export Grading", desc: "Rigorous standards for size & sweetness" },
                 { title: "Cold Chain", desc: "Protected logistics at 4°C" },
                 { title: "Import Ops", desc: "Year-round customs & handling" },
                 { title: "Live Juicing", desc: "Dispensed fresh in 55 seconds" }
               ].map((step, idx) => {
                 const isActive = idx === activeStep;
                 const isPast = idx < activeStep;
                 
                 return (
                   <div 
                     key={idx} 
                     className={`relative bg-white p-6 rounded-xl border transition-all duration-700 ease-in-out flex flex-col items-center text-center animate-scale-in group
                        ${isActive 
                           ? 'border-fruitlinq-orange shadow-2xl scale-105 z-20 ring-4 ring-orange-100 -translate-y-4' 
                           : 'border-gray-100 shadow-sm scale-100 hover:-translate-y-2'
                        }
                        ${isPast ? 'border-fruitlinq-green/30' : ''}
                     `}
                     style={{ animationDelay: `${idx * 200 + 300}ms`, animationFillMode: 'forwards' }}
                   >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg ring-4 ring-white z-10 transition-all duration-500
                          ${isActive 
                            ? 'bg-fruitlinq-orange text-white scale-110 shadow-orange-300/50' 
                            : (isPast ? 'bg-fruitlinq-green text-white shadow-green-200/50' : 'bg-gray-100 text-gray-400')
                          }
                      `}>
                        {idx + 1}
                      </div>
                      <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${isActive ? 'text-fruitlinq-orange' : 'text-gray-900'}`}>{step.title}</h4>
                      <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>{step.desc}</p>
                      
                      {/* Mobile connector line */}
                      {idx < 4 && <div className="lg:hidden w-1 h-8 bg-gray-100 my-2 rounded-full"></div>}
                   </div>
                 );
               })}
             </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-24 bg-gray-900 text-white rounded-t-[3rem] -mt-10 relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Next-Generation<br/>Vending Technology</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our 5th-generation machines are marvels of engineering. Designed for hygiene, speed, and visual appeal, they turn juice extraction into a performance.
              </p>
              
              <ul className="space-y-4">
                {[
                  "55-second service time",
                  "Fully contactless operation",
                  "200–300 cups/day capacity",
                  "Digital payments (UPI, QR, Cards)",
                  "Globally proven engineering"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center space-x-3 group cursor-default">
                    <div className="w-6 h-6 rounded-full bg-fruitlinq-orange flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Zap size={14} className="text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-fruitlinq-green transition-colors duration-300 group cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-700 transition-colors">
                    <Smartphone className="text-fruitlinq-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Telemetry & Insights</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">Real-time monitoring of stock, temperature, and sales via our mobile app.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Visual */}
            <div className="relative animate-slide-in-right lg:pl-10">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 group bg-gray-800 hover:shadow-fruitlinq-orange/20 transition-shadow duration-500">
                 <img 
                   src="https://cdn.gamma.app/iy8eyofhaloe2da/913673e8d4734bba80bc93d92be2368c/original/WhatsApp-Image-2025-12-09-at-09.09.07.jpeg" 
                   alt="Fruitlinq Smart Vending Machine" 
                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                 />
                 {/* Gradient Overlay */}
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-fruitlinq-orange font-bold text-sm uppercase tracking-wider mb-1 animate-pulse">Live Operation</p>
                            <p className="text-white font-heading font-semibold text-lg">5th Gen Smart Kiosk</p>
                        </div>
                    </div>
                 </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fruitlinq-orange/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Strategic Locations</h2>
            <p className="text-gray-500 mt-4">Designed for premium high-footfall environments.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Building2, label: "IT Parks" },
              { icon: ShoppingBag, label: "Malls" },
              { icon: Train, label: "Metro Stn" },
              { icon: Stethoscope, label: "Hospitals" },
              { icon: GraduationCap, label: "Universities" },
              { icon: Briefcase, label: "Offices" },
            ].map((loc, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 cursor-default opacity-0 animate-scale-in group"
                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
              >
                <loc.icon className="w-8 h-8 text-fruitlinq-orange mb-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-gray-800 text-sm">{loc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-fruitlinq-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse-slow"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">Start Your Fruitlinq Journey Today</h2>
          <p className="text-green-100 text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
            Build a profitable, scalable juice vending business with complete farm-to-cup control.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <button 
              onClick={() => navigate('/franchise')}
              className="bg-white text-fruitlinq-green font-bold px-8 py-4 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Become a Franchise Partner
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;