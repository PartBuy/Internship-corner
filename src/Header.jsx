import React, { useState } from 'react';
import './Header.css';
import trailLogo from './assets/logo.png';

 
const Header = ({ selectedPersona, onPersonaSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  const handlePersonaSelect = (persona) => {
    onPersonaSelect(persona);  
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const personas = ['Player', 'Creator', 'Enterprise'];

  return (
    <header className="site-header">
      <div className="header-container">
       
        <div className="logo-section">
          <a href="#home">
            <img src={trailLogo} alt="TRAIL Logo" className="logo-img" />
          </a>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-actions-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#home" className="nav-item">Home</a>
            <a href="#how-it-works" className="nav-item">How It Works</a>

            {/* Persona Dropdown */}
            <div
              className="dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="nav-item dropdown-trigger"
                aria-haspopup="menu"
                aria-expanded={isDropdownOpen}
                type="button"
              >
                Personas ({selectedPersona}) <span className="arrow">▼</span>
              </button>

              {isDropdownOpen && (
                <ul className="dropdown-menu" role="menu">
                  {personas.map((persona) => (
                    <li
                      key={persona}
                      onClick={() => handlePersonaSelect(persona)}
                      className={selectedPersona === persona ? 'active' : ''}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') handlePersonaSelect(persona);
                      }}
                    >
                      {persona}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <div className="cta-group">
            <button className="btn btn-outline">Initiate Waitlist</button>
            <button className="btn btn-outline">Talk to Amin</button>
            <button className="btn btn-primary">Book a Pilot</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;