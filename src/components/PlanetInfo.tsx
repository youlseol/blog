import React from 'react';
import { PlanetData } from '../data/planetData';

interface PlanetInfoProps {
  planet: PlanetData | null;
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet }) => {
  if (!planet) {
    return <div className="info-card"><h2>행성을 선택해주세요.</h2></div>;
  }

  return (
    <div className="info-card">
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
      <ul>
        <li>지름: {planet.size} (지구 기준)</li>
        <li>질량: {planet.mass} (지구 기준)</li>
        <li>태양으로부터의 거리: {planet.distance} AU</li>
        <li>공전 속도: {planet.orbitalSpeed} (지구 기준)</li>
      </ul>
    </div>
  );
};

export default PlanetInfo;
