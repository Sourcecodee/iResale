import React from 'react';

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
  color: string;
}

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
    >
      <div className={`h-32 ${category.color} flex items-center justify-center`}>
        <div className="text-6xl">{category.icon}</div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {category.productCount} products
          </span>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            Browse
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
