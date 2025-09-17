import React from 'react';

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedStorage: string;
  setSelectedStorage: (storage: string) => void;
  selectedCondition: string;
  setSelectedCondition: (condition: string) => void;
  isCategoryView?: boolean;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedModel,
  setSelectedModel,
  selectedStorage,
  setSelectedStorage,
  selectedCondition,
  setSelectedCondition,
  isCategoryView = false,
}) => {
  return (
    <section className="py-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search for iPhone models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
            <div className="flex gap-2">
              {!isCategoryView && (
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Categories</option>
                  <option>iPhones</option>
                  <option>Apple Watches</option>
                  <option>iPads</option>
                  <option>MacBooks</option>
                  <option>AirPods</option>
                  <option>Chargers & Cables</option>
                  <option>Cases & Protection</option>
                </select>
              )}
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Models</option>
                {selectedCategory === 'iPhones' && (
                  <>
                    <option>iPhone 17</option>
                    <option>iPhone 16</option>
                    <option>iPhone 15</option>
                    <option>iPhone 14</option>
                    <option>iPhone 13</option>
                    <option>iPhone 12</option>
                  </>
                )}
                {selectedCategory === 'Apple Watches' && (
                  <>
                    <option>Series 9</option>
                    <option>Series 8</option>
                    <option>SE</option>
                  </>
                )}
                {selectedCategory === 'iPads' && (
                  <>
                    <option>iPad Pro</option>
                    <option>iPad Air</option>
                    <option>iPad</option>
                  </>
                )}
                {selectedCategory === 'MacBooks' && (
                  <>
                    <option>MacBook Air</option>
                    <option>MacBook Pro</option>
                  </>
                )}
                {selectedCategory === 'AirPods' && (
                  <>
                    <option>AirPods Pro</option>
                    <option>AirPods 3rd Gen</option>
                    <option>AirPods Max</option>
                  </>
                )}
              </select>
            <select
              value={selectedStorage}
              onChange={(e) => setSelectedStorage(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Storage</option>
              <option>128GB</option>
              <option>256GB</option>
              <option>512GB</option>
              <option>1TB</option>
            </select>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Conditions</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
