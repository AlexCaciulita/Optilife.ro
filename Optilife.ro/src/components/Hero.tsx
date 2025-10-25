import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gettyimages-2209045835-2048x2048.jpg"
          alt="Echipă de birou cu ochelari"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-gray/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-[1.8]">
            Optilife – Optică mobilă pentru{' '}
            <span className="text-primary">echipa ta</span>,{' '}
            <br className="hidden md:block" />
            direct la birou
          </h1>
          
          <p className="text-xl md:text-2xl font-inter font-light mb-8 opacity-90 leading-[1.8]">
            Screening ocular, consult și ochelari fără drumuri la optică
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-accent text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg hover:bg-accent/90 transition-all duration-200 flex items-center gap-2 group"
            >
              Contacteaza-ne
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Echipamente curate și dezinfectate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Programare flexibilă</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Livrări rapide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
