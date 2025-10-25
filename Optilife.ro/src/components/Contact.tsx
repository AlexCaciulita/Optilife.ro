import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {

  const coverageAreas = [
    'București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 'Brașov', 'Galați', 'Ploiești', 'Oradea',
    'Brăila', 'Arad', 'Pitești', 'Sibiu', 'Bacău', 'Târgu Mureș', 'Baia Mare', 'Buzău', 'Botoșani', 'Satu Mare',
    'Râmnicu Vâlcea', 'Drobeta-Turnu Severin', 'Suceava', 'Piatra Neamț', 'Târgu Jiu', 'Tulcea', 'Focșani',
    'Bistrița', 'Reșița', 'Alba Iulia', 'Hunedoara', 'Slatina', 'Calarași', 'Deva', 'Zalău', 'Târgoviște',
    'Slobozia', 'Vaslui', 'Roman', 'Turda', 'Mediaș', 'Onești', 'Câmpina', 'Dej', 'Lugoj', 'Medgidia'
  ];

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Contact & Programări
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hai să vorbim despre nevoile echipei tale
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-poppins font-semibold text-dark-gray mb-6">
                Contactează-ne direct
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-inter font-medium text-gray-900">Telefon</div>
                    <a href="tel:0770792790" className="text-primary hover:underline">
                      0770.792.790
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-inter font-medium text-gray-900">Email</div>
                    <a href="mailto:office@optilife.ro" className="text-primary hover:underline">
                      office@optilife.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-inter font-medium text-gray-900">WhatsApp</div>
                    <a 
                      href="https://wa.me/40770792790" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Scrie-ne rapid pe WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-poppins font-semibold text-dark-gray mb-4">
                Zone acoperite
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-inter font-medium text-gray-900">România</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coverageAreas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-inter"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 font-inter mt-4">
                Pentru alte zone, contactează-ne - putem face excepții pentru echipe mari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;