import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>OptiLife</h1>
        </div>
        <div className="nav-links">
          <a href="#services">Servicii</a>
          <a href="#about">Despre Noi</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
