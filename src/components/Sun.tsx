import React from 'react';

const Sun: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} />
    </mesh>
  );
};

export default Sun;
