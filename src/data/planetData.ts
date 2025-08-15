export interface PlanetData {
  name: string;
  texture: string;
  size: number;
  distance: number;
  speed: number;
  category: string;
  posts: {
    id: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
  }[];
}

export const planetData: PlanetData[] = [
  {
    name: 'Mercury',
    texture: '/textures/mercury_texture.jpg',
    size: 0.38,
    distance: 30,
    speed: 0.04,
    category: 'Tech',
    posts: [
      {
        id: 'mercury-1',
        title: 'The Core Principles of Quantum Computing',
        author: 'Dr. Evelyn Reed',
        date: '2025-08-10',
        excerpt: 'An introduction to the mind-bending world of quantum mechanics and its computational applications...'
      },
    ],
  },
  {
    name: 'Venus',
    texture: '/textures/venus_texture.jpg',
    size: 0.95,
    distance: 45,
    speed: 0.035,
    category: 'Design',
    posts: [
      {
        id: 'venus-1',
        title: 'The Rise of Neumorphism in UI Design',
        author: 'Javier Solis',
        date: '2025-07-22',
        excerpt: 'Exploring the soft, extruded plastic look that is making a comeback in modern user interfaces...'
      },
    ],
  },
  {
    name: 'Earth',
    texture: '/textures/earth_texture.jpg',
    size: 1,
    distance: 60,
    speed: 0.03,
    category: 'Lifestyle',
    posts: [
      {
        id: 'earth-1',
        title: 'Sustainable Living: 10 Easy Changes for a Healthier Planet',
        author: 'Aria Chen',
        date: '2025-08-01',
        excerpt: 'Small steps can make a big difference. Here are ten simple ways to reduce your ecological footprint...'
      },
      {
        id: 'earth-2',
        title: 'The Art of Urban Gardening',
        author: 'Leo Kim',
        date: '2025-06-15',
        excerpt: 'Transform your balcony into a green oasis. A guide for beginners to start growing their own food in the city...'
      },
    ],
  },
  {
    name: 'Mars',
    texture: '/textures/mars_texture.jpg',
    size: 0.53,
    distance: 80,
    speed: 0.024,
    category: 'Exploration',
    posts: [
      {
        id: 'mars-1',
        title: 'The Next Frontier: Challenges of Terraforming Mars',
        author: 'Ken Tanaka',
        date: '2025-08-05',
        excerpt: 'Could we ever live on Mars? A deep dive into the science and ethics of transforming another planet...'
      },
    ],
  },
  // ... other planets can be added here
];