import { useState, useEffect } from 'react';
import { Eye, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Servicii', href: '#servicii' },
    { label: 'Cum funcționează', href: '#cum-functioneaza' },
    { label: 'Beneficii', href: '#beneficii' },
    { label: 'Testimoniale', href: '#testimoniale' },
    { label: 'Întrebări', href: '#intrebari' },
    { label: 'Oferta', href: '/oferta', isRoute: true },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.isRoute) {
      navigate(item.href);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/image copy.png" 
              alt="OptiLife Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-poppins font-bold text-dark-gray">OptiLife</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item)}
                className="text-dark-gray hover:text-primary transition-colors duration-200 font-inter font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden lg:block bg-accent text-white px-6 py-2 rounded-lg font-inter font-medium hover:bg-accent/90 transition-colors duration-200"
          >
                          Contacteaza-ne
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item)}
                  className="text-left text-dark-gray hover:text-primary transition-colors duration-200 font-inter font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-accent text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-accent/90 transition-colors duration-200 mt-4 text-center"
              >
                              Contacteaza-ne
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;