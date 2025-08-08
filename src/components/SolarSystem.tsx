import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sun from './Sun';
import Planet from './Planet';
import { PlanetData, planetData } from '../data/planetData';

interface SolarSystemProps {
  onPlanetClick: (planet: PlanetData) => void;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onPlanetClick }) => {
  return (
    <Canvas camera={{ position: [0, 40, 80], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={2.5} />
      <Sun />
      {planetData.map((planet) => (
        <Planet key={planet.name} planet={planet} onPlanetClick={onPlanetClick} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default SolarSystem;
