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
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden w-80 h-96"
    >
      {/* Full background image */}
      <div className="relative h-full w-full">
        <img 
          src={category.icon} 
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
          <p className="text-white/90 text-sm mb-4 leading-relaxed">{category.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm">
              {category.productCount} products
            </span>
            <div className="flex items-center text-white text-sm font-medium">
              Browse
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
