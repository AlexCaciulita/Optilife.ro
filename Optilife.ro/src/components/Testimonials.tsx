import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Super convenabil! Au venit la birou, au testat vederea tuturor și au avut rame mișto. Și-au comandat vreo 8 oameni ochelari pe loc.",
      author: "Ana-Maria Glavan",
      company: "TechFlow Solutions",
      role: "HR Manager"
    },
    {
      text: "Am scăpat de stresul de a programa individual 20 de oameni la optică. Echipa OptiLife a fost profesionistă și rapidă.",
      author: "Mihai Bruma",
      company: "Digital Marketing Pro",
      role: "CEO"
    },
    {
      text: "Calitatea ochelarilor e foarte bună și prețurile corecte. Recomand, mai ales pentru companiile care vor să ofere beneficii angajaților.",
      author: "Maria Dumitrescu",
      company: "Creative Agency",
      role: "Office Manager"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoniale" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiențe reale de la companiile cu care lucrăm
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-light-gray rounded-xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/20" />
            
            <div className="relative">
              <p className="text-xl md:text-2xl font-inter text-dark-gray mb-8 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonials[currentSlide].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-poppins font-semibold text-dark-gray">
                    {testimonials[currentSlide].author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentSlide].role} la {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;