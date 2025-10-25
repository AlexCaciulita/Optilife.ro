import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Cât durează o sesiune?",
      answer: "Pentru o echipă de 10-15 persoane, o sesiune durează aproximativ 2-3 ore. Fiecare consultație individuală durează 15-20 minute, incluzând screening-ul și proba ramelor."
    },
    {
      question: "Aveți un număr minim de persoane?",
      answer: "Da, minimum 20 persoane pentru a justifica deplasarea. Dar recomandăm sesiuni de minimum 30 persoane pentru eficiență maximă și costuri optimizate."
    },
    {
      question: "Ce zone acoperiți?",
      answer: "Oferim servicii în multiple regiuni din țară, inclusiv în zonele limitrofe."
    },
    {
      question: "În cât timp se livrează ochelarii?",
      answer: "Livrarea se face în 5-7 zile lucrătoare direct la sediul companiei. Pentru cazuri urgente, putem livra în 3 zile cu un cost suplimentar."
    },
    {
      question: "Ce garanție oferiți?",
      answer: "Oferim garanție 2 ani pentru rame și 1 an pentru lentile. Plus, prima ajustare gratuită în primele 30 de zile dacă ochelarii nu se potrivesc perfect."
    },
    {
      question: "Cum se face plata?",
      answer: "Emitem factură pentru companie. Plata se poate face prin transfer bancar sau POS direct la birou. Oferim și opțiunea de plată eșalonată pentru comenzi mari."
    },
    {
      question: "Ce echipamente aduceți?",
      answer: "Aducem toate echipamentele necesare: autorefractometer, lentile de probă, ramele pentru testare și toate instrumentele pentru măsurători precise."
    },
    {
      question: "Putem programa și pentru familiile angajaților?",
      answer: "Da! Putem organiza sesiuni extinse care să includă și familiile angajaților, de obicei în weekend. Este o opțiune foarte populară pentru evenimentele de wellbeing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="intrebari" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-gray mb-6">
            Întrebări frecvente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Răspunsuri la întrebările pe care le primim cel mai des
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-poppins font-semibold text-dark-gray pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-inter mb-4">
            Nu ai găsit răspunsul pe care îl căutai?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors"
          >
            Scrie-ne rapid pe WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;