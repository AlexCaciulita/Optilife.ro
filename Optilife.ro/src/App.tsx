import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Oferta from './components/Oferta';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Services />
                <HowItWorks />
                <Benefits />
                <Testimonials />
                <FAQ />
                <About />
                <Contact />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;