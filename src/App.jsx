import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import "./App.css";
 
 

function App() {
  const [selectedPersona, setSelectedPersona] = useState("Player");

  const handlePersonaSelect = (persona) => {
    setSelectedPersona(persona);
    
  };

  return (
    <div>
      <Header selectedPersona={selectedPersona} onPersonaSelect={handlePersonaSelect} />

      <main>
        <HeroSection
          title="Build faster with clean components"
          subtitle="A minimal hero built with React and plain CSS. Responsive by default and ready to drop into your project."
          ctaText="Start Free"
          gifSrc="https://via.placeholder.com/640x360.gif?text=Preview"
          videoFallback="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </main>
    </div>
  );
}

export default App;