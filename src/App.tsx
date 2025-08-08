import { useState } from 'react';
import PlanetCharts from './components/PlanetCharts';
import PlanetInfo from './components/PlanetInfo';
import SolarSystem from './components/SolarSystem';
import './styles/App.css';
import { PlanetData } from './data/planetData';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>태양계 탐험</h1>
      </header>
      <div style={{ height: '60vh' }}>
        <SolarSystem onPlanetClick={setSelectedPlanet} />
      </div>
      <PlanetInfo planet={selectedPlanet} />
      <PlanetCharts />
    </div>
  );
}

export default App;
