import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contactează-ne</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Telefon</h3>
              <p>0770.792.790</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>office@optilife.ro</p>
            </div>
            <div className="contact-item">
              <h3>Zone de acoperire</h3>
              <p>București, Ilfov, Ploiești, Brașov</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Numele companiei" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Telefon" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Mesajul tău" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Trimite mesajul</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
