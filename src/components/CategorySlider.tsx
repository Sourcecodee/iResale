import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from 'swiper/modules';
import { Category } from './CategoryCard';
import CategoryCard from './CategoryCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface CategorySliderProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories, onCategoryClick }) => {
  return (
    <div className="relative bg-gray-50 py-12" style={{ minHeight: '500px' }}>
      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        spaceBetween={24}
        slidesPerView="auto"
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5.5,
            spaceBetween: 24,
          },
        }}
        className="category-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="!w-auto">
            <CategoryCard
              category={category}
              onClick={() => onCategoryClick(category.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      
      <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default CategorySlider;
