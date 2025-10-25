import { Eye, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/image copy.png" 
                alt="OptiLife Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-poppins font-bold">OptiLife</span>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed">
              Optică mobilă pentru companii. Aducem serviciile de calitate direct la biroul tău.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Link-uri utile</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicii" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#intrebari" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Întrebări frecvente
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-inter">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Contact rapid</h3>
            <div className="space-y-3">
              <a 
                href="tel:0770792790" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-inter">0770.792.790</span>
              </a>
              <a 
                href="https://wa.me/40770792790" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-inter">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 font-inter text-sm">
              © 2025 OptiLife. Toate drepturile rezervate.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-inter">
                Politica de confidențialitate
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-inter">
                Termeni & condiții
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-inter">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/40770792790"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 z-40"
        title="Contactează-ne pe WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  );
};

export default Footer;