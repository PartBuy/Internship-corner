// src/App.jsx
import React, { useState, useEffect } from 'react';
import StickyHeader from './StickyHeader';
import './App.css'; 

// Imports for images (keep these if you used them in the previous step)
import mascotImg from './assets/mascot.png';
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';


function App() {
  // 1. STATE LIFTING: State is now managed here (The single source of truth)
  const [selectedPersona, setSelectedPersona] = useState('');

  // 2. INITIALIZE STATE from localStorage on mount
  useEffect(() => {
    const savedPersona = localStorage.getItem('user_persona');
    if (savedPersona) {
      setSelectedPersona(savedPersona);
    } else {
      setSelectedPersona('Player'); // Default to Player if none saved
    }
  }, []);

  // 3. HANDLER FUNCTION: Updates state AND localStorage
  const handlePersonaSelect = (persona) => {
    setSelectedPersona(persona);
    localStorage.setItem('user_persona', persona);
    console.log(`Saved ${persona} to localStorage from App.jsx`);
  };

  return (
    <div className="page-wrapper">
      {/* 4. Pass the state and setter function down to the Header */}
      <StickyHeader 
        selectedPersona={selectedPersona}
        onPersonaSelect={handlePersonaSelect} 
      />

      <main className="hero-section">
        
        <div className="hero-content">
          
          {/* 5. NEW DISPLAY LOGIC: Show the selected persona in the body */}
          {selectedPersona && (
            <p className="current-persona-display">
              You are currently viewing content for: 
              <strong> {selectedPersona}</strong>
            </p>
          )}

          {/* Existing Hero Content */}
          <h1 className="hero-title">
            Welcome to the most <br />
            <span className="addictive-word">Addictive</span> way to <br />
            Learn Real Estate
          </h1>
          
          <p className="hero-description">
            Join the TRAIL family to experience an unrivaled journey of real estate 
            education and personal growth, guided by industry-leading experts.
          </p>
          
          <button className="cta-button">
            Get Started <span className="arrow-icon">→</span>
          </button>
          
          <div className="social-proof">
            <div className="avatar-stack">
              <img src={avatar1} alt="User 1" />
              <img src={avatar2} alt="User 2" />
              <img src={avatar3} alt="User 3" />
            </div>
            <span className="signup-count">12.4k people already signed up</span>
          </div>
        </div>
        
        <div className="hero-visual">
          <img src={mascotImg} alt="TRAIL 3D Mascot" className="mascot-img" />
        </div>

      </main>
    </div>
  );
}

export default App;