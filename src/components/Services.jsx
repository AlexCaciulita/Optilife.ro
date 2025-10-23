import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Serviciile Noastre</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/eye-exams.jpg" alt="Eye exams" />
            <h3>Screening Ocular</h3>
            <p>Examinări complete ale vederii pentru toți angajații</p>
          </div>
          <div className="service-card">
            <img src="/image.png" alt="Glasses fitting" />
            <h3>Probă Rame și Ochelari</h3>
            <p>Consultanță personalizată pentru alegerea ochelarilor</p>
          </div>
          <div className="service-card">
            <img src="/pexels-shkrabaanthony-6749761.jpg" alt="Mobile service" />
            <h3>Servicii Mobile</h3>
            <p>Venim la biroul tău pentru confortul maxim</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
