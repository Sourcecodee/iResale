import { Product } from '../components/ProductCard';
import iphones, { iPhone } from '../data/iPhones';
import appleWatches, { AppleWatch } from '../data/watch';

// Generate pricing based on iPhone model and storage
const generatePricing = (iphone: iPhone, storage: string): { currentPrice: number; originalPrice: number; discount: number } => {
  // Base prices by model (in NGN)
  const basePrices: { [key: string]: number } = {
    'iPhone XR': 350000,
    'iPhone 12 mini': 400000,
    'iPhone 12': 450000,
    'iPhone 12 Pro': 550000,
    'iPhone 12 Pro Max': 650000,
    'iPhone 13': 500000,
    'iPhone 13 Pro': 600000,
    'iPhone 13 Pro Max': 700000,
    'iPhone 14': 550000,
    'iPhone 14 Pro': 650000,
    'iPhone 14 Pro Max': 750000,
    'iPhone 15': 600000,
    'iPhone 15 Pro': 700000,
    'iPhone 15 Pro Max': 800000,
    'iPhone 16': 650000,
    'iPhone 16 Pro': 750000,
    'iPhone 16 Pro Max': 850000,
    'iPhone 17': 700000,
    'iPhone 17 Pro': 800000,
    'iPhone 17 Pro Max': 900000,
  };

  // Storage multipliers
  const storageMultipliers: { [key: string]: number } = {
    '64 GB': 1.0,
    '128 GB': 1.2,
    '256 GB': 1.4,
    '512 GB': 1.7,
    '1 TB': 2.0,
    '2 TB': 2.5,
  };

  const basePrice = basePrices[iphone.name] || 500000;
  const storageMultiplier = storageMultipliers[storage] || 1.0;
  const originalPrice = Math.round(basePrice * storageMultiplier);
  
  // Generate discount between 8-20%
  const discount = Math.floor(Math.random() * 13) + 8;
  const currentPrice = Math.round(originalPrice * (1 - discount / 100));

  return { currentPrice, originalPrice, discount };
};

// Generate condition based on release year
const generateCondition = (releaseYear: number): 'Excellent' | 'Very Good' | 'Good' => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - releaseYear;
  
  if (age <= 1) return 'Excellent';
  if (age <= 3) return 'Very Good';
  return 'Good';
};

// Generate products from iPhone data
export const generateProductsFromiPhones = (): Product[] => {
  const products: Product[] = [];
  let id = 1;

  iphones.forEach((iphone) => {
    // Create only one product per iPhone model
    // Use the most common storage option (usually 128GB or 256GB)
    const storage = iphone.storageOptions.includes('256GB') ? '256GB' : 
                   iphone.storageOptions.includes('128GB') ? '128GB' : 
                   iphone.storageOptions[0];
    
    const condition = generateCondition(iphone.releaseYear);
    const pricing = generatePricing(iphone, storage);
    
    products.push({
      id: id++,
      name: `${iphone.name} UK Used`,
      image: iphone.image,
      condition: condition,
      discount: pricing.discount,
      storage: storage,
      currentPrice: pricing.currentPrice,
      originalPrice: pricing.originalPrice,
      seller: 'TechGuru UK',
      category: 'iphones', // All iPhone products belong to iphones category
      // Add iPhone-specific properties
      display: iphone.display,
      chip: iphone.chip,
      ram: iphone.ram,
      cameras: iphone.cameras,
      battery: iphone.battery,
      releaseYear: iphone.releaseYear,
      description: iphone.description,
    });
  });

  return products;
};

// Generate pricing for Apple Watches
const generateWatchPricing = (watch: AppleWatch): { currentPrice: number; originalPrice: number; discount: number } => {
  // Base prices by watch model (in NGN)
  const basePrices: { [key: string]: number } = {
    'Apple Watch Series 8': 320000,
    'Apple Watch Series 9': 360000,
    'Apple Watch Series 10': 400000,
  };

  const basePrice = basePrices[watch.name] || 300000;
  
  // Generate discount between 10-20%
  const discount = Math.floor(Math.random() * 11) + 10;
  const currentPrice = Math.round(basePrice * (1 - discount / 100));

  return { currentPrice, originalPrice: basePrice, discount };
};

// Generate products from Apple Watch data
export const generateProductsFromWatches = (): Product[] => {
  const products: Product[] = [];
  let id = 2000; // Start from 2000 to avoid conflicts

  appleWatches.forEach((watch) => {
    const condition = generateCondition(watch.releaseYear);
    const pricing = generateWatchPricing(watch);
    
    products.push({
      id: id++,
      name: `${watch.name} UK Used`,
      image: watch.image,
      condition: condition,
      discount: pricing.discount,
      storage: watch.storage,
      currentPrice: pricing.currentPrice,
      originalPrice: pricing.originalPrice,
      seller: 'TechGuru UK',
      category: 'apple-watches',
      // Add watch-specific properties
      display: watch.display.size,
      chip: watch.chip,
      ram: watch.ram,
      battery: watch.battery,
      releaseYear: watch.releaseYear,
      description: watch.description,
      // Add sensors as a string for display
      compatible: watch.sensors.join(', '),
    });
  });

  return products;
};

// Generate additional accessories and other products
export const generateAdditionalProducts = (): Product[] => {
  const accessories: Product[] = [
    // Cases
    {
      id: 1001,
      name: "Premium Leather iPhone 17 Pro Case",
      image: "/src/assets/others/Casing.jpeg",
      condition: "Excellent",
      discount: 17,
      compatible: "iPhone 17 Pro",
      currentPrice: 35000,
      originalPrice: 40000,
      seller: "TechGuru UK",
      category: "cases"
    },
    {
      id: 1002,
      name: "Clear MagSafe iPhone 16 Pro Case",
      image: "/src/assets/others/Casing.jpeg",
      condition: "Very Good",
      discount: 18,
      compatible: "iPhone 16 Pro",
      currentPrice: 28000,
      originalPrice: 32000,
      seller: "TechGuru UK",
      category: "cases"
    },
    {
      id: 1003,
      name: "Premium iPhone Screen Protector",
      image: "/src/assets/others/Casing.jpeg",
      condition: "Excellent",
      discount: 20,
      compatible: "iPhone 15 series and later",
      currentPrice: 12000,
      originalPrice: 15000,
      seller: "TechGuru UK",
      category: "cases"
    },
    
    // Chargers
    {
      id: 1004,
      name: "Apple MagSafe Wireless Charger",
      image: "/src/assets/others/Accessories.jpeg",
      condition: "Excellent",
      discount: 12,
      compatible: "iPhone 12 and later",
      currentPrice: 35000,
      originalPrice: 40000,
      seller: "TechGuru UK",
      category: "chargers"
    },
    {
      id: 1005,
      name: "Original Apple USB-C to Lightning Cable",
      image: "/src/assets/others/Accessories.jpeg",
      condition: "Excellent",
      discount: 17,
      compatible: "iPhone 15 series",
      currentPrice: 15000,
      originalPrice: 18000,
      seller: "TechGuru UK",
      category: "chargers"
    },
    {
      id: 1006,
      name: "Apple 20W USB-C Power Adapter",
      image: "/src/assets/others/Accessories.jpeg",
      condition: "Very Good",
      discount: 12,
      compatible: "iPhone 12 and later",
      currentPrice: 22000,
      originalPrice: 25000,
      seller: "TechGuru UK",
      category: "chargers"
    },
    
    // AirPods
    {
      id: 1007,
      name: "Apple AirPods Pro 2nd Gen UK Used",
      image: "/src/assets/others/AirPods.jpeg",
      condition: "Excellent",
      discount: 18,
      battery: "95%",
      compatible: "iPhone",
      currentPrice: 180000,
      originalPrice: 220000,
      seller: "TechGuru UK",
      category: "airpods"
    },
    {
      id: 1008,
      name: "Apple AirPods 3rd Gen UK Used",
      image: "/src/assets/others/AirPods.jpeg",
      condition: "Very Good",
      discount: 20,
      battery: "88%",
      compatible: "iPhone",
      currentPrice: 120000,
      originalPrice: 150000,
      seller: "TechGuru UK",
      category: "airpods"
    },
    {
      id: 1009,
      name: "Apple AirPods Max UK Used",
      image: "/src/assets/others/AirPods.jpeg",
      condition: "Very Good",
      discount: 15,
      battery: "90%",
      compatible: "iPhone",
      currentPrice: 280000,
      originalPrice: 320000,
      seller: "TechGuru UK",
      category: "airpods"
    },
    
    
    // iPads
    {
      id: 1013,
      name: "iPad Pro 12.9-inch UK Used",
      image: "/src/assets/others/iPad.jpeg",
      condition: "Excellent",
      discount: 10,
      storage: "256GB",
      battery: "94%",
      status: "Unlocked",
      currentPrice: 650000,
      originalPrice: 720000,
      seller: "TechGuru UK",
      category: "ipads"
    },
    {
      id: 1014,
      name: "iPad Air 5th Gen UK Used",
      image: "/src/assets/others/iPad.jpeg",
      condition: "Very Good",
      discount: 13,
      storage: "256GB",
      battery: "91%",
      status: "Unlocked",
      currentPrice: 420000,
      originalPrice: 480000,
      seller: "TechGuru UK",
      category: "ipads"
    },
    {
      id: 1015,
      name: "iPad 10th Gen UK Used",
      image: "/src/assets/others/iPad.jpeg",
      condition: "Good",
      discount: 15,
      storage: "64GB",
      color: "Pink",
      battery: "89%",
      status: "Unlocked",
      currentPrice: 280000,
      originalPrice: 320000,
      seller: "TechGuru UK",
      category: "ipads"
    },
    
    // MacBooks
    {
      id: 1016,
      name: "MacBook Air M2 UK Used",
      image: "/src/assets/others/Macbook.jpeg",
      condition: "Excellent",
      discount: 8,
      storage: "256GB",
      battery: "95%",
      status: "Unlocked",
      currentPrice: 850000,
      originalPrice: 920000,
      seller: "TechGuru UK",
      category: "macbooks"
    },
    {
      id: 1017,
      name: "MacBook Pro 14-inch M2 UK Used",
      image: "/src/assets/others/Macbook.jpeg",
      condition: "Very Good",
      discount: 11,
      storage: "512GB",
      battery: "93%",
      status: "Unlocked",
      currentPrice: 1200000,
      originalPrice: 1350000,
      seller: "TechGuru UK",
      category: "macbooks"
    }
  ];

  return accessories;
};

// Generate all products
export const generateAllProducts = (): Product[] => {
  const iphoneProducts = generateProductsFromiPhones();
  const watchProducts = generateProductsFromWatches();
  const additionalProducts = generateAdditionalProducts();
  return [...iphoneProducts, ...watchProducts, ...additionalProducts];
};
