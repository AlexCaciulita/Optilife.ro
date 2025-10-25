import { CheckCircle, Clock, TrendingUp, Smile, DollarSign, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      text: 'Fără drumuri, fără bătăi de cap',
      stat: '2-3 ore',
      description: 'economisesc angajații'
    },
    {
      icon: TrendingUp,
      text: 'Productivitate mai bună, oboseală vizuală redusă',
      stat: '+25%',
      description: 'performanță la calculator'
    },
    {
      icon: Smile,
      text: 'Oferim scrisoare medicală eliberată și parafată de medicul oftalmolog',
      stat: '100%',
      description: 'necesară decontării'
    },
    {
      icon: DollarSign,
      text: 'Ofertă transparentă, facturare simplă',
      stat: '0',
      description: 'costuri ascunse'
    },
  ];

  return (
    <section id="beneficii" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Beneficii pentru compania ta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De ce aleg companiile să lucreze cu noi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-inter font-medium text-dark-gray mb-3">
                      {benefit.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-poppins font-bold text-accent">
                        {benefit.stat}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {benefit.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits Grid */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-poppins font-semibold text-dark-gray mb-8 text-center">
            Plus, toate acestea:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Echipamente profesionale mobile',
              'Specialiști cu experiență în optică',
              'Rame de calitate, preturi competitive',
              'Consultații personalizate',
              'Suport post-vânzare complet',
              'Flexibilitate programare'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-inter text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;