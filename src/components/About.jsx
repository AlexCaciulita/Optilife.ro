import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Despre OptiLife</h2>
            <p>OptiLife este primul serviciu de optică mobilă din România, dedicat companiilor care își doresc să îngrijească sănătatea ochilor angajaților lor.</p>
            <p>Cu experiență în domeniul opticii și o echipă de specialiști calificați, oferim soluții complete de îngrijire oculară la locul de muncă.</p>
            <div className="about-features">
              <div className="feature">
                <h4>Rapid</h4>
                <p>Servicii eficiente în timp minim</p>
              </div>
              <div className="feature">
                <h4>Simplu</h4>
                <p>Proces simplificat pentru companii</p>
              </div>
              <div className="feature">
                <h4>Fără drumuri</h4>
                <p>Venim la biroul tău</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/what-to-expect-when-seeing-your-optometrist-for-an-eye-exam-hero-1.jpg" alt="About OptiLife" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
