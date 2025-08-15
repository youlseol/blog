import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface PlanetProps {
  texture: string;
  size: number;
  distance: number;
  speed: number;
  name: string;
  onClick: (name: string) => void;
}

const Planet: React.FC<PlanetProps> = ({ texture, size, distance, speed, name, onClick }) => {
  const planetRef = useRef<THREE.Mesh>(null!);
  const textureLoader = new TextureLoader();
  const map = textureLoader.load(texture);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      // Orbit rotation
      planetRef.current.position.x = Math.sin(clock.getElapsedTime() * speed) * distance;
      planetRef.current.position.z = Math.cos(clock.getElapsedTime() * speed) * distance;
      // Axis rotation
      planetRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={planetRef} onClick={() => onClick(name)}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Planet;