import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import ProductCard from '../components/ProductCard';
import CategorySlider from '../components/CategorySlider';
import Footer from '../components/Footer';
import { categories } from '../data/categories';

const Home: React.FC = () => {
  const { products } = useProducts();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModel, setSelectedModel] = useState('All Models');
  const [selectedStorage, setSelectedStorage] = useState('All Storage');
  const [selectedCondition, setSelectedCondition] = useState('All Conditions');

  // Get current category
  const currentCategory = selectedCategoryId ? categories.find(cat => cat.id === selectedCategoryId) : null;

  // Filter products based on selected category and other criteria
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filtering
    let matchesCategory = true;
    if (selectedCategoryId) {
      switch (selectedCategoryId) {
        case 'iphones':
          matchesCategory = product.name.toLowerCase().includes('iphone');
          break;
        case 'apple-watches':
          matchesCategory = product.name.toLowerCase().includes('watch');
          break;
        case 'ipads':
          matchesCategory = product.name.toLowerCase().includes('ipad');
          break;
        case 'macbooks':
          matchesCategory = product.name.toLowerCase().includes('macbook');
          break;
        case 'airpods':
          matchesCategory = product.name.toLowerCase().includes('airpods');
          break;
        case 'chargers':
          matchesCategory = product.name.toLowerCase().includes('charger') || 
                           product.name.toLowerCase().includes('adapter') || 
                           product.name.toLowerCase().includes('cable');
          break;
        case 'cases':
          matchesCategory = product.name.toLowerCase().includes('case') || 
                           product.name.toLowerCase().includes('protector');
          break;
        default:
          matchesCategory = true;
      }
    }
    
    const matchesModel = selectedModel === 'All Models' || 
      (selectedModel && product.name.toLowerCase().includes(selectedModel.toLowerCase()));
    const matchesStorage = selectedStorage === 'All Storage' || (product.storage && product.storage === selectedStorage);
    const matchesCondition = selectedCondition === 'All Conditions' || product.condition === selectedCondition;

    return matchesSearch && matchesCategory && matchesModel && matchesStorage && matchesCondition;
  });

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    // Reset other filters when selecting a category
    setSearchTerm('');
    setSelectedModel('All Models');
    setSelectedStorage('All Storage');
    setSelectedCondition('All Conditions');
  };

  const handleBackToCategories = () => {
    setSelectedCategoryId(null);
    setSearchTerm('');
    setSelectedModel('All Models');
    setSelectedStorage('All Storage');
    setSelectedCondition('All Conditions');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />


      {/* Show categories or products based on selection */}
      {!selectedCategoryId ? (
        // Categories View
        <>
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                <p className="text-lg text-gray-600">Select a category to explore our Apple products</p>
              </div>
            </div>
          </section>
          
          <div className="mb-8">
            <CategorySlider
              categories={categories}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        </>
      ) : (
        // Products View
        <>
          {/* Category Header */}
          <section className="py-6 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={handleBackToCategories}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium mr-4"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Categories
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentCategory?.name}</h2>
                    <p className="text-gray-600">{currentCategory?.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {filteredProducts.length} products found
                </div>
              </div>
            </div>
          </section>

          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={currentCategory?.name || 'All Categories'}
            setSelectedCategory={() => {}} // Disabled when in category view
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedStorage={selectedStorage}
            setSelectedStorage={setSelectedStorage}
            selectedCondition={selectedCondition}
            setSelectedCondition={setSelectedCondition}
            isCategoryView={true}
          />

          {/* Products Section */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={handleBackToCategories}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Back to Categories
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
