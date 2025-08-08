import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { PlanetData } from '../data/planetData';

interface PlanetProps {
  planet: PlanetData;
  onPlanetClick: (planet: PlanetData) => void;
  texturePath: string;
}

const Planet: React.FC<PlanetProps> = ({ planet, onPlanetClick, texturePath }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(TextureLoader, texturePath);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const angle = clock.getElapsedTime() * planet.orbitalSpeed * 0.1;
      const x = Math.cos(angle) * planet.distance * 10;
      const z = Math.sin(angle) * planet.distance * 10;
      meshRef.current.position.set(x, 0, z);
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() => onPlanetClick(planet)}
    >
      <sphereGeometry args={[planet.size, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Planet;
