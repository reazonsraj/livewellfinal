import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { name: 'Community Participation', to: '/community-participation' },
    { name: 'Assistance Daily Life', to: '/daily-life' },
    { name: 'Travel & Freedom', to: '/travel' },
    { name: 'Household Tasks', to: '/household' },
    { name: 'Social Activities', to: '/social' },
  ];

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'What is NDIS', to: '/ndis' },
    { name: 'Referrals', to: '/referrals' }
  ];

  const renderContactLink = () => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
            isScrolled 
              ? 'text-teal-700 hover:text-teal-900' 
              : 'text-white hover:text-teal-100'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to="/#contact"
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isScrolled 
              ? 'text-teal-700 hover:text-teal-900' 
              : 'text-white hover:text-teal-100'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Us
        </RouterLink>
      );
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-teal-500/50 to-blue-500/50 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <RouterLink to="/" className={`font-bold text-xl ${isScrolled ? 'text-teal-800' : 'text-white'}`}>
                Live Well Care And Support
              </RouterLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isScrolled 
                        ? 'text-teal-700 hover:text-teal-900' 
                        : 'text-white hover:text-teal-100'
                    }`}
                  >
                    {item.name}
                  </RouterLink>
                ))}
                
                {/* Services Dropdown */}
                <div className="relative group">
                  <button
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isScrolled 
                        ? 'text-teal-700 hover:text-teal-900' 
                        : 'text-white hover:text-teal-100'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div
                    className={`absolute left-0 mt-0 w-60 rounded-md shadow-lg transition-all duration-200 ${
                      isServicesOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 ${
                      isScrolled ? 'bg-white' : 'bg-white/90 backdrop-blur-md'
                    }`}>
                      <div className="py-1">
                        {serviceItems.map((item) => (
                          <RouterLink
                            key={item.name}
                            to={item.to}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </RouterLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {renderContactLink()}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none ${isScrolled ? 'text-teal-700' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isScrolled 
                        ? 'text-teal-700 hover:text-teal-900' 
                        : 'text-white hover:text-teal-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </RouterLink>
                ))}
                
                {/* Mobile Services Menu */}
                <div className="space-y-1">
                  <div className={`px-3 py-2 rounded-md text-base font-medium ${
                    isScrolled ? 'text-teal-700' : 'text-white'
                  }`}>
                    Services
                  </div>
                  <div className="pl-4">
                    {serviceItems.map((item) => (
                      <RouterLink
                        key={item.name}
                        to={item.to}
                        className={`block px-3 py-2 rounded-md text-sm font-medium ${
                          isScrolled 
                            ? 'text-teal-600 hover:text-teal-800' 
                            : 'text-teal-100 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </RouterLink>
                    ))}
                  </div>
                </div>

                {renderContactLink()}
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className={`h-[1px] fixed w-full top-16 z-50 ${
        isScrolled ? 'bg-teal-200/20' : 'bg-white/20'
      }`}></div>
    </>
  );
};