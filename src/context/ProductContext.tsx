import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../components/ProductCard';

// Initial products data
const initialProducts: Product[] = [
  // iPhone Products - Latest to Oldest
  {
    id: 1,
    name: "iPhone 17 Pro UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 8,
    storage: "256GB",
    currentPrice: 1200000,
    originalPrice: 1300000,
    seller: "TechGuru UK"
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 10,
    storage: "512GB",
    currentPrice: 1100000,
    originalPrice: 1200000,
    seller: "TechGuru UK"
  },
  {
    id: 3,
    name: "iPhone 16 Pro UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 12,
    storage: "256GB",
    currentPrice: 950000,
    originalPrice: 1050000,
    seller: "TechGuru UK"
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 11,
    storage: "256GB",
    color: "Natural Titanium",
    battery: "98%",
    status: "Unlocked",
    currentPrice: 980000,
    originalPrice: 1100000,
    seller: "TechGuru UK"
  },
  {
    id: 5,
    name: "iPhone 15 Pro UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 13,
    storage: "128GB",
    currentPrice: 850000,
    originalPrice: 950000,
    seller: "TechGuru UK"
  },
  {
    id: 6,
    name: "iPhone 15 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 15,
    storage: "128GB",
    currentPrice: 720000,
    originalPrice: 800000,
    seller: "TechGuru UK"
  },
  {
    id: 7,
    name: "iPhone 14 Pro Max UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 14,
    storage: "256GB",
    currentPrice: 780000,
    originalPrice: 900000,
    seller: "TechGuru UK"
  },
  {
    id: 8,
    name: "iPhone 14 Pro UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 15,
    storage: "128GB",
    color: "Space Black",
    battery: "89%",
    status: "Unlocked",
    currentPrice: 720000,
    originalPrice: 850000,
    seller: "TechGuru UK"
  },
  {
    id: 9,
    name: "iPhone 14 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 16,
    storage: "128GB",
    currentPrice: 650000,
    originalPrice: 750000,
    seller: "TechGuru UK"
  },
  {
    id: 10,
    name: "iPhone 13 Pro Max UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 17,
    storage: "256GB",
    currentPrice: 680000,
    originalPrice: 800000,
    seller: "TechGuru UK"
  },
  {
    id: 11,
    name: "iPhone 13 Pro UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 18,
    storage: "128GB",
    currentPrice: 580000,
    originalPrice: 700000,
    seller: "TechGuru UK"
  },
  {
    id: 12,
    name: "iPhone 13 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 17,
    storage: "256GB",
    color: "Pink",
    battery: "85%",
    status: "Locked",
    currentPrice: 480000,
    originalPrice: 500000,
    seller: "TechGuru UK"
  },
  {
    id: 13,
    name: "iPhone 12 Pro Max UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 15,
    storage: "256GB",
    color: "Graphite",
    battery: "82%",
    status: "Unlocked",
    currentPrice: 580000,
    originalPrice: 600000,
    seller: "TechGuru UK"
  },
  {
    id: 14,
    name: "iPhone 12 Pro UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 16,
    storage: "128GB",
    currentPrice: 520000,
    originalPrice: 600000,
    seller: "TechGuru UK"
  },
  {
    id: 15,
    name: "iPhone 12 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 18,
    storage: "64GB",
    currentPrice: 420000,
    originalPrice: 500000,
    seller: "TechGuru UK"
  },
  
  // Accessories - Cases
  {
    id: 16,
    name: "Premium Leather iPhone 17 Pro Case",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 17,
    compatible: "iPhone 17 Pro",
    currentPrice: 35000,
    originalPrice: 40000,
    seller: "TechGuru UK"
  },
  {
    id: 17,
    name: "Clear MagSafe iPhone 16 Pro Case",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 18,
    compatible: "iPhone 16 Pro",
    currentPrice: 28000,
    originalPrice: 32000,
    seller: "TechGuru UK"
  },
  {
    id: 18,
    name: "Premium iPhone Screen Protector",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 20,
    compatible: "iPhone 15 series and later",
    currentPrice: 12000,
    originalPrice: 15000,
    seller: "TechGuru UK"
  },
  
  // Accessories - Chargers
  {
    id: 19,
    name: "Apple MagSafe Wireless Charger",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 12,
    compatible: "iPhone 12 and later",
    currentPrice: 35000,
    originalPrice: 40000,
    seller: "TechGuru UK"
  },
  {
    id: 20,
    name: "Original Apple USB-C to Lightning Cable",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 17,
    compatible: "iPhone 15 series",
    currentPrice: 15000,
    originalPrice: 18000,
    seller: "TechGuru UK"
  },
  {
    id: 21,
    name: "Apple 20W USB-C Power Adapter",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 12,
    compatible: "iPhone 12 and later",
    currentPrice: 22000,
    originalPrice: 25000,
    seller: "TechGuru UK"
  },
  
  // Accessories - AirPods
  {
    id: 22,
    name: "Apple AirPods Pro 2nd Gen UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 18,
    battery: "95%",
    compatible: "iPhone",
    currentPrice: 180000,
    originalPrice: 220000,
    seller: "TechGuru UK"
  },
  {
    id: 23,
    name: "Apple AirPods 3rd Gen UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 20,
    battery: "88%",
    compatible: "iPhone",
    currentPrice: 120000,
    originalPrice: 150000,
    seller: "TechGuru UK"
  },
  {
    id: 24,
    name: "Apple AirPods Max UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 15,
    battery: "90%",
    compatible: "iPhone",
    currentPrice: 280000,
    originalPrice: 320000,
    seller: "TechGuru UK"
  },
  
  // Apple Watches
  {
    id: 25,
    name: "Apple Watch Series 9 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 12,
    battery: "96%",
    status: "Unlocked",
    currentPrice: 320000,
    originalPrice: 360000,
    seller: "TechGuru UK"
  },
  {
    id: 26,
    name: "Apple Watch Series 8 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 14,
    battery: "92%",
    status: "Unlocked",
    currentPrice: 280000,
    originalPrice: 320000,
    seller: "TechGuru UK"
  },
  {
    id: 27,
    name: "Apple Watch SE 2nd Gen UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 16,
    battery: "88%",
    status: "Unlocked",
    currentPrice: 180000,
    originalPrice: 210000,
    seller: "TechGuru UK"
  },
  
  // iPads
  {
    id: 28,
    name: "iPad Pro 12.9-inch UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 10,
    storage: "256GB",
    battery: "94%",
    status: "Unlocked",
    currentPrice: 650000,
    originalPrice: 720000,
    seller: "TechGuru UK"
  },
  {
    id: 29,
    name: "iPad Air 5th Gen UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 13,
    storage: "256GB",
    battery: "91%",
    status: "Unlocked",
    currentPrice: 420000,
    originalPrice: 480000,
    seller: "TechGuru UK"
  },
  {
    id: 30,
    name: "iPad 10th Gen UK Used",
    image: "/api/placeholder/300/300",
    condition: "Good",
    discount: 15,
    storage: "64GB",
    color: "Pink",
    battery: "89%",
    status: "Unlocked",
    currentPrice: 280000,
    originalPrice: 320000,
    seller: "TechGuru UK"
  },
  
  // MacBooks
  {
    id: 31,
    name: "MacBook Air M2 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Excellent",
    discount: 8,
    storage: "256GB",
    battery: "95%",
    status: "Unlocked",
    currentPrice: 850000,
    originalPrice: 920000,
    seller: "TechGuru UK"
  },
  {
    id: 32,
    name: "MacBook Pro 14-inch M2 UK Used",
    image: "/api/placeholder/300/300",
    condition: "Very Good",
    discount: 11,
    storage: "512GB",
    battery: "93%",
    status: "Unlocked",
    currentPrice: 1200000,
    originalPrice: 1350000,
    seller: "TechGuru UK"
  }
];

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  getProduct: (id: number) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Math.max(...products.map(p => p.id), 0) + 1,
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProduct = (id: number) => {
    return products.find(product => product.id === id);
  };

  const value: ProductContextType = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
