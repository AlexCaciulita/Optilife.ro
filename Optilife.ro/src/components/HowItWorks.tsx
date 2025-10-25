import { Phone, Calendar, MapPin, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Ne contactezi',
      description: 'Suni, scrii pe WhatsApp sau completezi formularul nostru rapid',
    },
    {
      icon: Calendar,
      title: 'Stabilim data',
      description: 'Alegem împreună ziua și ora care vă convine cel mai bine',
    },
    {
      icon: MapPin,
      title: 'Venim la sediu',
      description: 'Ajungem cu echipamentele și ramele direct la biroul vostru',
    },
    {
      icon: Package,
      title: 'Livrăm ochelarii',
      description: 'În câteva zile, ochelarii personalizați sunt gata și livrați',
    },
  ];

  return (
    <section id="cum-functioneaza" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Cum funcționează
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Process simplu, rapid și fără bătăi de cap
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2">
                      <div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-dark-gray mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;