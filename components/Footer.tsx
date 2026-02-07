import React from 'react';
import { NavLink } from 'react-router-dom';
import { Citrus, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/logo.png" alt="Fruitlinq" className="h-12 w-auto" />
            <p className="text-gray-500 text-sm leading-relaxed">
              India's first farm-controlled orange juice franchise. Bringing fresh, hygienic, and automated wellness to modern spaces.
            </p>
            <p className="text-xs text-gray-400">
              A proud subsidiary of Hortgro Fresh Private Limited.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Franchise', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-fruitlinq-orange transition-colors text-sm"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-fruitlinq-green shrink-0 mt-1" />
                <div>
                  <p className="font-medium">FRUITLINQ AGRO PRIVATE LIMITED</p>
                  <p>GMK Pheonix Towers H.No - 7-1-621/305/270.3RT,</p>
                  <p>Road No.2, S R Nagar, Ameerpet,</p>
                  <p>Hyderabad 500038, Telangana. INDIA.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="w-5 h-5 text-fruitlinq-green shrink-0" />
                <span>+91 93478 38756</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-5 h-5 text-fruitlinq-green shrink-0" />
                <span>sales@fruitlinq.in</span>
              </div>
            </div>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-fruitlinq-orange hover:shadow-md transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-fruitlinq-orange hover:shadow-md transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-fruitlinq-orange hover:shadow-md transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://maps.google.com/maps?output=embed&place_id=3iBpoG1i7fnbQzoJ8"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fruitlinq Agro Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;