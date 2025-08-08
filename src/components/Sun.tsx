import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface SunProps {
  texturePath: string;
}

const Sun: React.FC<SunProps> = ({ texturePath }) => {
  const texture = useLoader(TextureLoader, texturePath);

  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} emissive="#FFD700" emissiveIntensity={2} />
    </mesh>
  );
};

export default Sun;
