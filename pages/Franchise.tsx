import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Truck, Users, TrendingUp, CheckCircle, Smartphone, Download, Loader2, Citrus } from 'lucide-react';
import Button from '../components/Button';
import { jsPDF } from "jspdf";

const Franchise: React.FC = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadBrochure = () => {
    setIsGenerating(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      try {
        const doc = new jsPDF();
        const orangeColor = "#F58220";
        const greenColor = "#4CAF50";
        const darkColor = "#333333";
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        let y = 30;

        // Helper to center text
        const centerText = (text: string, yPos: number) => {
          const textWidth = doc.getStringUnitWidth(text) * doc.getFontSize() / doc.internal.scaleFactor;
          const x = (pageWidth - textWidth) / 2;
          doc.text(text, x, yPos);
        };

        // Helper to add a colored section header
        const addSectionHeader = (title: string) => {
            if (y > 250) { doc.addPage(); y = 30; }
            doc.setFontSize(16);
            doc.setTextColor(orangeColor);
            doc.setFont("helvetica", "bold");
            doc.text(title, margin, y);
            y += 10;
            doc.setDrawColor(200, 200, 200);
            doc.line(margin, y - 5, pageWidth - margin, y - 5);
            doc.setTextColor(darkColor);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);
        };

        // --- PAGE 1: COVER ---
        doc.setFillColor(255, 255, 255);
        
        // Logo Text
        doc.setFontSize(30);
        doc.setTextColor(greenColor);
        doc.setFont("helvetica", "bold");
        doc.text("Fruit", pageWidth/2 - 25, 60, {align: 'right'});
        doc.setTextColor(orangeColor);
        doc.text("linq", pageWidth/2 - 25, 60, {align: 'left'});
        
        y = 90;
        doc.setTextColor(darkColor);
        doc.setFontSize(22);
        centerText("Pick & Sip", y);
        y += 15;
        doc.setFontSize(18);
        centerText("India's First Farm-Controlled", y);
        y += 10;
        centerText("Orange Juice Franchise", y);
        
        y += 30;
        doc.setFontSize(12);
        doc.setTextColor(100);
        const coverDesc = doc.splitTextToSize("Fresh orange juice vending solutions for premium environments. Global reach, local excellence.", 140);
        doc.text(coverDesc, (pageWidth - 140)/2, y, { align: 'center' });
        
        y += 20;
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        centerText("(A proud subsidiary of Hortgro Fresh Private Limited)", y);

        // --- PAGE 2: Global Presence ---
        doc.addPage();
        y = 30;
        addSectionHeader("Operating Across Six Countries");
        
        const countries = [
            { c: "South Africa", d: "Primary operations" },
            { c: "Tanzania", d: "Regional expansion" },
            { c: "Poland", d: "European market" },
            { c: "India", d: "Asian operations" },
            { c: "Egypt", d: "Middle East presence" },
            { c: "USA", d: "North American market" }
        ];
        
        countries.forEach(item => {
            doc.setFont("helvetica", "bold");
            doc.text(`• ${item.c}`, margin + 5, y);
            doc.setFont("helvetica", "normal");
            doc.text(` - ${item.d}`, margin + 45, y);
            y += 10;
        });

        y += 10;
        addSectionHeader("What We Do - Fruit We Do");
        const whatWeDo = [
            { t: "25 Years of Expertise", d: "Experience in fruit imports and exports from major global markets." },
            { t: "Farm-to-Service Control", d: "Pre-programmed fruits from reliable farmers ensuring quality from cultivation to delivery." },
            { t: "Supply Excellence", d: "Forecasting expertise and scale leadership for consistent taste and reliable availability." },
            { t: "Franchise Partner Support", d: "Comprehensive operational support and performance management to ensure your success." }
        ];
        
        whatWeDo.forEach(item => {
            if (y > 270) { doc.addPage(); y = 30; }
            doc.setFont("helvetica", "bold");
            doc.text(item.t, margin + 5, y);
            y += 6;
            doc.setFont("helvetica", "normal");
            const lines = doc.splitTextToSize(item.d, pageWidth - (margin * 2) - 10);
            doc.text(lines, margin + 5, y);
            y += (lines.length * 6) + 6;
        });

        // --- PAGE 3: Features ---
        doc.addPage();
        y = 30;
        addSectionHeader("More Than a Juice Kiosk");
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        const storyText = doc.splitTextToSize("Every Fruitlinq cup tells a story that begins thousands of kilometers away in the world's finest orange-growing regions.", pageWidth - (margin*2));
        doc.text(storyText, margin, y);
        y += 15;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);

        const features = [
            { t: "55-Second Fresh Juice", d: "Automated process selects, slices, and presses whole oranges with no preservatives or added sugar." },
            { t: "Hygiene Excellence", d: "Self-cleaning systems for stringent hygiene controls with remote monitoring and real-time alerts." },
            { t: "Smart Technology", d: "Modern touch screen interface with cashless payment, transparent window showcasing live juicing." },
            { t: "Operational Efficiency", d: "Low maintenance with 24/7 data insights, more revenue with minimum manpower." }
        ];

        features.forEach(feat => {
            doc.setFillColor(250, 245, 240); // light orange bg
            doc.rect(margin, y, pageWidth - (margin*2), 25, 'F');
            doc.setTextColor(orangeColor);
            doc.setFont("helvetica", "bold");
            doc.text(feat.t, margin + 5, y + 8);
            doc.setTextColor(darkColor);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            const flines = doc.splitTextToSize(feat.d, pageWidth - (margin*2) - 10);
            doc.text(flines, margin + 5, y + 15);
            y += 32;
        });

        y += 10;
        addSectionHeader("Machine Specifications");
        doc.text("• Dimensions: Height 1.95m, Width 1.24m, Depth 0.89m", margin + 5, y); y+=8;
        doc.text("• 24/7 Automated Operation: Continuous service without staffing.", margin + 5, y); y+=8;
        doc.text("• Digital Payments Only: QR codes and card payments.", margin + 5, y); y+=8;
        doc.text("• High Throughput: Efficient service delivery without queues.", margin + 5, y); y+=8;

        // --- PAGE 4: Franchise & Contact ---
        doc.addPage();
        y = 30;
        addSectionHeader("What's In It for the Franchise");
        
        const benefits = [
            "Turnkey Solution: Fruitlinq provides, installs, and operationalizes the machine.",
            "Zero Staff Required: No barista training, no maintenance burden.",
            "Real-Time Insights: Live stats and reports with funds deposited seamlessly.",
            "Maximum Uptime: 99.2% uptime with remote monitoring and dedicated support."
        ];
        
        benefits.forEach(b => {
             doc.text(`• ${b}`, margin + 5, y);
             y += 10;
        });
        
        y += 20;
        addSectionHeader("Designed for Premium Environments");
        doc.text("Enhances Location Prestige & Appeals to Premium Users.", margin + 5, y);
        y += 10;
        doc.text("Ideal for: IT Parks, Malls, Airports, Hospitals, Universities.", margin + 5, y);

        y = 200;
        doc.setDrawColor(orangeColor);
        doc.setLineWidth(1);
        doc.line(margin, y, pageWidth - margin, y);
        y += 15;
        
        doc.setFontSize(20);
        doc.setTextColor(orangeColor);
        doc.setFont("helvetica", "bold");
        centerText("Let's Connect", y);
        y += 15;
        doc.setFontSize(14);
        doc.setTextColor(darkColor);
        centerText("Pick & Sip in 55 Seconds", y);
        
        y += 20;
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        centerText("Email: sales@fruitlinq.in", y);
        y += 8;
        centerText("Website: www.fruitlinq.in", y);
        y += 8;
        centerText("Phone: +91 93478 38756 / +91 93988 30801", y);

        doc.save("Fruitlinq_Franchise_Brochure.pdf");
        setIsGenerating(false);
      } catch (error) {
        console.error("Error generating PDF", error);
        setIsGenerating(false);
        alert("Could not generate brochure. Please try again.");
      }
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-fruitlinq-orange py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Citrus size={300} className="text-white animate-spin-slow" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Complete Farm-to-Cup<br/>Franchise Model</h1>
          <p className="text-xl md:text-2xl text-orange-50 max-w-2xl mb-8 animate-fade-in-up delay-100">
            Own a futuristic, high-margin beverage business with minimal operational overheads.
          </p>
          <div className="animate-fade-in-up delay-200">
            <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>Apply Now</Button>
          </div>
        </div>
      </section>

      {/* Machine Package */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="bg-gray-100 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-heading text-2xl font-bold mb-6 flex items-center">
                  <Settings className="mr-3 text-fruitlinq-orange" /> Machine & Setup
                </h3>
                <ul className="space-y-4">
                  {[
                    "5th-generation automated vending unit",
                    "Complete branding & lightbox wraps",
                    "Comprehensive spare parts kit included",
                    "1-Year warranty on all parts",
                    "Professional installation & initial calibration"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-fruitlinq-green mr-3 shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gray-100 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-heading text-2xl font-bold mb-6 flex items-center">
                  <Truck className="mr-3 text-fruitlinq-orange" /> Operational Support
                </h3>
                <ul className="space-y-4">
                  {[
                    "Guaranteed monthly orange supply chain",
                    "Quality SOPs & Cleaning protocols",
                    "Digital marketing & location support",
                    "Predictive maintenance alerts",
                    "Mobile App for real-time sales tracking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-fruitlinq-green mr-3 shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-center mb-16 animate-fade-in-up">Comprehensive Franchise Support</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-fruitlinq-orange hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up delay-100">
              <Users size={32} className="text-fruitlinq-orange mb-4" />
              <h4 className="font-bold text-xl mb-3">Training</h4>
              <p className="text-gray-600 text-sm">
                Complete training on machine hygiene, fruit handling, and basic troubleshooting. We ensure your staff (if any) are experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-fruitlinq-green hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up delay-200">
              <Smartphone size={32} className="text-fruitlinq-green mb-4" />
              <h4 className="font-bold text-xl mb-3">Technology</h4>
              <p className="text-gray-600 text-sm">
                Access to our proprietary dashboard. Track cups sold, revenue generated, and refill alerts from your smartphone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-fruitlinq-orange hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up delay-300">
              <Settings size={32} className="text-fruitlinq-orange mb-4" />
              <h4 className="font-bold text-xl mb-3">Maintenance</h4>
              <p className="text-gray-600 text-sm">
                Regular scheduled servicing and rapid response for any technical issues to ensure 99% uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Model */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold mb-4 animate-fade-in">Scalable Growth Model</h2>
          <p className="text-gray-500 mb-12 animate-fade-in">Start with one, grow to a network.</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
             <div className="flex flex-col items-center animate-scale-in delay-100">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-3xl font-bold text-fruitlinq-orange mb-4 shadow-md transition-transform hover:scale-110">1</div>
                <span className="font-bold">Pilot</span>
             </div>
             
             <div className="h-12 w-1 bg-gray-200 md:w-24 md:h-1 animate-fade-in delay-200"></div>

             <div className="flex flex-col items-center animate-scale-in delay-300">
                <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center text-3xl font-bold text-fruitlinq-orange mb-4 shadow-md transition-transform hover:scale-110">5</div>
                <span className="font-bold">Cluster</span>
             </div>

             <div className="h-12 w-1 bg-gray-200 md:w-24 md:h-1 animate-fade-in delay-400"></div>

             <div className="flex flex-col items-center animate-scale-in delay-500">
                <div className="w-24 h-24 bg-fruitlinq-orange rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-xl transition-transform hover:scale-110">50+</div>
                <span className="font-bold">City Network</span>
             </div>
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-2xl max-w-3xl mx-auto flex items-center gap-6 animate-fade-in-up delay-300">
            <TrendingUp className="text-blue-600 w-12 h-12 shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-blue-900 text-lg">Passive Scalability</h4>
              <p className="text-blue-800/70 text-sm">Since our machines are fully automated and require minimal daily intervention (approx 30 mins), you can manage multiple units easily compared to traditional cafe franchises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Ready to invest in the future of juice?</h2>
          <div className="flex justify-center gap-4 animate-fade-in-up delay-100">
            <Button onClick={() => navigate('/contact')}>Apply for Franchise</Button>
            <Button 
                variant="outline" 
                className="border-gray-500 text-gray-300 hover:bg-gray-800 flex items-center gap-2"
                onClick={handleDownloadBrochure}
                disabled={isGenerating}
            >
                {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                {isGenerating ? "Generating..." : "Download Brochure"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;