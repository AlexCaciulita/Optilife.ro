import { Users, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
              Despre OptiLife
            </h2>
            <p className="text-xl text-gray-600 font-inter leading-relaxed mb-8">
              Suntem o echipă de specialiști în optică cu o misiune simplă: să aducem serviciile de calitate direct la biroul tău. Fără drumuri, fără timp pierdut, fără complicații.
            </p>
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
              Cu peste 10 ani de experiență în optică și zeci de companii servite, știm cum să facem procesul simplu și eficient pentru toată lumea. Echipamentele noastre sunt mobile, moderne și întotdeauna curate.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-poppins font-bold text-dark-gray">10.000+</div>
                <div className="text-gray-600 text-sm">Angajați consultați</div>
              </div>
              <div className="text-center p-4">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-poppins font-bold text-dark-gray">50+</div>
                <div className="text-gray-600 text-sm">Companii partenere</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/pexels-pavel-danilyuk-5996650.jpg"
              alt="Echipa OptiLife"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-poppins font-semibold text-dark-gray">Program flexibil</div>
                  <div className="text-gray-600 text-sm">Luni - Vineri, 9-18</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-poppins font-semibold text-dark-gray">Acoperire largă</div>
                  <div className="text-gray-600 text-sm">București & județe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;