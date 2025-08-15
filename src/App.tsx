import React, { useState } from 'react';
import SolarSystem from './components/SolarSystem';
import PostList from './components/PostList';
import { PlanetData, planetData } from './data/planetData';
import './styles/App.css';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  const handlePlanetClick = (planetName: string) => {
    const planet = planetData.find(p => p.name === planetName);
    setSelectedPlanet(planet || null);
  };

  const handleBackClick = () => {
    setSelectedPlanet(null);
  };

  return (
    <>
      <header className="header">
        <h1>Stellar Journeys</h1>
      </header>
      {selectedPlanet ? (
        <PostList planet={selectedPlanet} onBackClick={handleBackClick} />
      ) : (
        <SolarSystem onPlanetClick={handlePlanetClick} />
      )}
    </>
  );
}

export default App;
