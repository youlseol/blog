import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sun from './Sun';
import Planet from './Planet';
import { planetData } from '../data/planetData';

interface SolarSystemProps {
  onPlanetClick: (planetName: string) => void;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onPlanetClick }) => {
  return (
    <Canvas camera={{ position: [0, 100, 200], fov: 45 }}>
      <ambientLight intensity={0.2} />
      <Sun />
      {planetData.map(planet => (
        <Planet key={planet.name} {...planet} onClick={onPlanetClick} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default SolarSystem;