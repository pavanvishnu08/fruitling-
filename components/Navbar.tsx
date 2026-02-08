import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Smart Juicer', path: '/smart-juicer' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleApplyClick = () => {
    navigate('/franchise');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img src="/logo.png" alt="Fruitlinq Logo" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    isActive ? 'text-fruitlinq-orange font-semibold' : 'text-gray-600 hover:text-fruitlinq-green'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button size="sm" onClick={handleApplyClick}>Partner with Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-fruitlinq-orange focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-fruitlinq-orange bg-orange-50'
                      : 'text-gray-600 hover:text-fruitlinq-green hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button fullWidth onClick={handleApplyClick}>Partner with Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;