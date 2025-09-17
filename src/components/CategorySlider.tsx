import React from 'react';
import { Category } from './CategoryCard';
import CategoryCard from './CategoryCard';

interface CategorySliderProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories, onCategoryClick }) => {
  // Duplicate categories for seamless infinite scroll
  const duplicatedCategories = [...categories, ...categories];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-12">
      <div className="flex animate-slide">
        {duplicatedCategories.map((category, index) => (
          <div key={`${category.id}-${index}`} className="flex-shrink-0 mx-6">
            <CategoryCard
              category={category}
              onClick={() => onCategoryClick(category.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
