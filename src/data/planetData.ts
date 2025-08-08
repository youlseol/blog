export interface PlanetData {
  name: string;
  color: string;
  size: number; // 지름 (지구=1)
  mass: number; // 질량 (지구=1)
  distance: number; // 태양으로부터의 거리 (AU)
  orbitalSpeed: number; // 공전 속도 (지구=1)
  description: string;
  image: string; // 행성 이미지 경로 (추후 추가)
}

export const planetData: PlanetData[] = [
  { name: 'Mercury', color: '#A9A9A9', size: 0.383, mass: 0.055, distance: 0.387, orbitalSpeed: 1.607, description: '태양계에서 가장 작은 행성으로, 태양에 가장 가깝습니다. 표면은 달과 같이 수많은 충돌구로 덮여 있습니다.', image: '' },
  { name: 'Venus', color: '#FFA500', size: 0.949, mass: 0.815, distance: 0.723, orbitalSpeed: 1.176, description: '지구와 크기가 가장 비슷한 행성으로, 두꺼운 이산화탄소 대기로 인해 온실 효과가 극심하여 표면 온도가 매우 높습니다.', image: '' },
  { name: 'Earth', color: '#4A90E2', size: 1, mass: 1, distance: 1, orbitalSpeed: 1, description: '우리가 살고 있는 행성으로, 생명체가 존재하기에 적합한 환경을 가지고 있습니다.', image: '' },
  { name: 'Mars', color: '#FF4500', size: 0.532, mass: 0.107, distance: 1.524, orbitalSpeed: 0.802, description: '붉은색을 띠는 행성으로, 과거에 물이 흘렀던 흔적이 발견되어 생명체 존재 가능성에 대한 연구가 활발히 진행되고 있습니다.', image: '' },
  { name: 'Jupiter', color: '#D2B48C', size: 11.21, mass: 317.8, distance: 5.204, orbitalSpeed: 0.434, description: '태양계에서 가장 큰 행성으로, 거대한 가스 행성입니다. 대적점으로 유명한 거대한 폭풍이 있습니다.', image: '' },
  { name: 'Saturn', color: '#F0E68C', size: 9.45, mass: 95.2, distance: 9.582, orbitalSpeed: 0.323, description: '아름다운 고리를 가진 행성으로, 주로 얼음과 암석 조각으로 이루어진 고리는 토성의 상징입니다.', image: '' },
  { name: 'Uranus', color: '#ADD8E6', size: 4.01, mass: 14.5, distance: 19.22, orbitalSpeed: 0.228, description: '옆으로 누워서 자전하는 독특한 행성입니다. 메탄 가스로 인해 청록색을 띱니다.', image: '' },
  { name: 'Neptune', color: '#4169E1', size: 3.88, mass: 17.1, distance: 30.05, orbitalSpeed: 0.182, description: '태양계에서 가장 바깥쪽에 있는 행성으로, 매우 강력한 바람이 부는 것으로 알려져 있습니다.', image: '' },
];
