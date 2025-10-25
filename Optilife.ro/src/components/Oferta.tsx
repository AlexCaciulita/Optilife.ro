import { ArrowLeft, Download, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Oferta = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-inter font-medium">Înapoi la pagina principală</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <img 
                src="/image copy.png" 
                alt="OptiLife Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-poppins font-bold text-dark-gray">OptiLife</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-4">
              Oferta noastră
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicii complete de optică mobilă pentru compania ta
            </p>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-poppins font-semibold text-dark-gray">
                  Servicii Medicale OptiLife
                </h2>
                <a
                  href="/oferta/Blue and White Modern Medical Services Banner .pdf"
                  download
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Descarcă PDF
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <iframe
                src="/oferta/Blue and White Modern Medical Services Banner .pdf"
                className="w-full h-[800px] border-0"
                title="Oferta OptiLife"
              />
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Interesat pentru compania ta?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactează-ne pentru o ofertă personalizată
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0770792790"
                className="bg-white text-primary px-6 py-3 rounded-lg font-inter font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                0770.792.790
              </a>
              <a
                href="https://wa.me/40770792790"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;