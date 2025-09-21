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
  selectedConnectivity?: string;
  setSelectedConnectivity?: (connectivity: string) => void;
  selectedCaseSize?: string;
  setSelectedCaseSize?: (caseSize: string) => void;
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
  selectedConnectivity,
  setSelectedConnectivity,
  selectedCaseSize,
  setSelectedCaseSize,
  isCategoryView = false,
}) => {
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedModel('All Models');
    setSelectedStorage('All Storage');
    setSelectedCondition('All Conditions');
    setSelectedConnectivity?.('All Connectivity');
    setSelectedCaseSize?.('All Case Sizes');
  };
  return (
    <section className="py-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search for products..."
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
                    <option>Series 10</option>
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
            {selectedCategory === 'Apple Watches' ? (
              <>
                <select
                  value={selectedConnectivity || 'All Connectivity'}
                  onChange={(e) => setSelectedConnectivity?.(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Connectivity</option>
                  <option>GPS</option>
                  <option>GPS + Cellular</option>
                </select>
                <select
                  value={selectedCaseSize || 'All Case Sizes'}
                  onChange={(e) => setSelectedCaseSize?.(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Case Sizes</option>
                  <option>42mm</option>
                  <option>46mm</option>
                </select>
              </>
            ) : (
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
            )}
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
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
              title="Clear all filters"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
