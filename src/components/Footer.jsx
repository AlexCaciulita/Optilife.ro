import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>OptiLife</h3>
            <p>Better vision. Better focus. Better performance.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>0770.792.790</p>
            <p>office@optilife.ro</p>
          </div>
          <div className="footer-section">
            <h4>Servicii</h4>
            <p>Screening ocular</p>
            <p>Probă rame și ochelari</p>
            <p>Servicii mobile</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 OptiLife. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
