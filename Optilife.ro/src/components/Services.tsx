import { Eye, Glasses, ShoppingBag, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: 'Screening ocular la birou',
      description: 'Măsurători de bază, testări complete și recomandări personalizate pentru fiecare angajat.',
    },
    {
      icon: Glasses,
      title: 'Consult și probă rame',
      description: 'Aducem o selecție largă de rame și lentile potrivite pentru stilul și nevoile fiecăruia.',
    },
    {
      icon: ShoppingBag,
      title: 'Ochelari personalizați',
      description: 'Comandă pe loc cu livrare rapidă direct la birou. Calitate garantată, preturi transparente.',
    },
    {
      icon: Heart,
      title: 'Evenimente de wellbeing',
      description: 'Zile dedicate sănătății vederii în companie, cu activități educative și screening pentru toți.',
    },
  ];

  return (
    <section id="servicii" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Serviciile noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aducem optica la voi, cu toate serviciile necesare pentru o vedere perfectă
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-dark-gray mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;