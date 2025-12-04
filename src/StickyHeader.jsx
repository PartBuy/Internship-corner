import React, { useState } from 'react';
import './StickyHeader.css';

// Import the logo if you are using it (keep this line)
import trailLogo from './assets/logo.png'; 

// Receive selectedPersona and the handler function (onPersonaSelect) as props
const StickyHeader = ({ selectedPersona, onPersonaSelect }) => {
  // Removed internal state for selectedPersona and useEffect for localStorage
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the prop function to update the parent state
  const handlePersonaSelect = (persona) => {
    onPersonaSelect(persona); // Calls the function passed from App.jsx
    setIsDropdownOpen(false); 
  };

  const personas = ['Player', 'Creator', 'Enterprise'];

  return (
    <header className="sticky-header">
      <div className="header-container">
        
        {/* Logo Area (unchanged) */}
        <div className="logo-section">
            <a href="#home"> 
                <img src={trailLogo} alt="TRAIL Logo" className="logo-img" />
            </a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-actions-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          
          <nav className="nav-links">
            <a href="#home" className="nav-item">Home</a>
            <a href="#how-it-works" className="nav-item">How It Works</a>
            
            {/* Persona Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="nav-item dropdown-trigger">
                {/* Display the persona state received from the parent */}
                Personas ({selectedPersona}) <span className="arrow">▼</span>
              </button>
              
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {personas.map((persona) => (
                    <li 
                      key={persona} 
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