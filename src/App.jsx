import React, { useState } from "react";
import StickyHeader from "./StickyHeader";
import MetricsStrip from "./MetricsStrip";
import "./App.css";
import placeholderImg from "./assets/placeholder.png"; // add this image file

export default function App() {
  const [selectedPersona, setSelectedPersona] = useState("Player");

  const stats = [
    { value: 110000, label: "Beta" },
    { value: 75840, label: "Beta" },
    { value: 4200, label: "Beta" },
  ];

  return (
    <>
      <StickyHeader selectedPersona={selectedPersona} onPersonaSelect={setSelectedPersona} />

      <div className="app">
        <main className="container" role="main">
          <header className="heading">
            <h1 className="brand-title">MetricsStrip — cleaner UI</h1>
            <p className="lead">Large, readable metrics that animate when scrolled into view.</p>
            <p className="lead persona">Selected persona: <strong>{selectedPersona}</strong></p>
          </header>

          {/* Centered body card with image */}
          <section className="center-body">
            <div className="hero-card">
              <img src={placeholderImg} alt="Placeholder" className="hero-image" />
            
            </div>

            {/* Metrics row below the hero card */}
            <MetricsStrip stats={stats} duration={1400} />
          </section>
        </main>
      </div>
    </>
  );
}