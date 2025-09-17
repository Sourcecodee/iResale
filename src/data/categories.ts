import { Category } from '../components/CategoryCard';

export const categories: Category[] = [
  {
    id: 'iphones',
    name: 'iPhones',
    icon: '📱',
    description: 'Latest and classic iPhone models from iPhone 17 Pro to iPhone 12',
    productCount: 15,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    id: 'apple-watches',
    name: 'Apple Watches',
    icon: '⌚',
    description: 'Apple Watch Series 9, 8, and SE models with various bands',
    productCount: 3,
    color: 'bg-gradient-to-br from-gray-600 to-gray-700'
  },
  {
    id: 'ipads',
    name: 'iPads',
    icon: '📱',
    description: 'iPad Pro, iPad Air, and iPad models for work and entertainment',
    productCount: 3,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    id: 'macbooks',
    name: 'MacBooks',
    icon: '💻',
    description: 'MacBook Air and MacBook Pro with M2 chips for productivity',
    productCount: 2,
    color: 'bg-gradient-to-br from-gray-700 to-gray-800'
  },
  {
    id: 'airpods',
    name: 'AirPods',
    icon: '🎧',
    description: 'AirPods Pro, AirPods 3rd Gen, and AirPods Max for audio',
    productCount: 3,
    color: 'bg-gradient-to-br from-green-500 to-green-600'
  },
  {
    id: 'chargers',
    name: 'Chargers & Cables',
    icon: '🔌',
    description: 'Apple chargers, cables, and wireless charging accessories',
    productCount: 3,
    color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    id: 'cases',
    name: 'Cases & Protection',
    icon: '🛡️',
    description: 'Premium cases, screen protectors, and protection accessories',
    productCount: 3,
    color: 'bg-gradient-to-br from-red-500 to-pink-500'
  }
];
