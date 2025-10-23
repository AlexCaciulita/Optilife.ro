import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Better vision. Better focus. Better performance.</h1>
        <h2>Workplace Eye Care Solutions</h2>
        <p>OptiLife aduce optica la biroul tău: screening ocular, probă rame și ochelari pentru angajați. Rapid, simplu, fără drumuri.</p>
        <div className="hero-cta">
          <button className="cta-button primary">Programează o vizită</button>
          <button className="cta-button secondary">Află mai multe</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/pexels-pavel-danilyuk-5996650.jpg" alt="Eye exam" />
      </div>
    </section>
  )
}

export default Hero
