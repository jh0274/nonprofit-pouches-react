import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h1>NON-PROFIT POUCHES</h1>
            <p className="tagline">All profits go to teachers and tech education</p>
          </div>

          <button
            className={`burger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
            <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#product" onClick={closeMenu}>Product</a></li>
            <li><a href="#interest" className="cta-button" onClick={closeMenu}>Express Interest</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
