import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  image: string;
  condition: 'Excellent' | 'Very Good' | 'Good';
  discount: number;
  storage?: string;
  color: string;
  battery?: string;
  status?: 'Unlocked' | 'Locked';
  currentPrice: number;
  originalPrice: number;
  seller: string;
  compatible?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'bg-green-500';
      case 'Very Good': return 'bg-blue-500';
      case 'Good': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="relative">
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium text-white ${getConditionColor(product.condition)}`}>
            {product.condition}
          </div>
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            {product.discount}% OFF
          </div>
        </div>
        
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{product.name}</h4>
          
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            {product.storage && <div>Storage: {product.storage}</div>}
            <div>Color: {product.color}</div>
            {product.battery && <div>Battery: {product.battery}</div>}
            {product.status && <div>Status: {product.status}</div>}
            {product.compatible && <div>Compatible: {product.compatible}</div>}
          </div>
          
          <div className="mb-3">
            <div className="text-lg font-bold text-gray-900">
              {formatPrice(product.currentPrice)}
            </div>
            <div className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mb-3">
            Sold by {product.seller}
          </div>
          
          <div className="text-center">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              👆 Click to View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
