import React, { useState } from 'react';
import './StickyHeader.css';

// Import the logo if you are using it (keep this line)
// Place your logo at: src/components/assets/logo.png
import trailLogo from './assets/logo.png';

const StickyHeader = ({ selectedPersona, onPersonaSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the prop function to update the parent state
  const handlePersonaSelect = (persona) => {
    onPersonaSelect(persona); // Calls the function passed from App.jsx
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const personas = ['Player', 'Creator', 'Enterprise'];

  return (
    <header className="sticky-header" role="banner">
      <div className="header-container">
        {/* Logo Area */}
        <div className="logo-section">
          <a href="#home" className="logo-link">
            <img src={trailLogo} alt="TRAIL Logo" className="logo-img" />
          </a>
        </div>

        <button
          className="mobile-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                onClick={() => setIsDropdownOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Personas ({selectedPersona}) <span className="arrow">▼</span>
              </button>

              {isDropdownOpen && (
                <ul className="dropdown-menu" role="menu">
                  {personas.map((persona) => (
                    <li
                      key={persona}
                      role="menuitem"
                      onClick={() => handlePersonaSelect(persona)}
                      className={selectedPersona === persona ? 'active' : ''}
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

export default StickyHeader;