import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import ProductCard from '../components/ProductCard';
import CategorySlider from '../components/CategorySlider';
import ServicesSection from '../components/ServicesSection';
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
          matchesCategory = product.category === 'iphones';
          break;
        case 'apple-watches':
          matchesCategory = product.category === 'apple-watches';
          break;
        case 'ipads':
          matchesCategory = product.category === 'ipads';
          break;
        case 'macbooks':
          matchesCategory = product.category === 'macbooks';
          break;
        case 'airpods':
          matchesCategory = product.category === 'airpods';
          break;
        case 'chargers':
          matchesCategory = product.category === 'chargers';
          break;
        case 'cases':
          matchesCategory = product.category === 'cases';
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
    
    // Scroll to the category header when category is selected
    setTimeout(() => {
      // Target the category header section
      const categoryHeader = document.querySelector('section.py-6.bg-white.border-b.border-gray-200');
      if (categoryHeader) {
        categoryHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  const handleBackToCategories = () => {
    setSelectedCategoryId(null);
    setSearchTerm('');
    setSelectedModel('All Models');
    setSelectedStorage('All Storage');
    setSelectedCondition('All Conditions');
    
    // Scroll to the top of the page content (after header)
    setTimeout(() => {
      const pageContent = document.querySelector('.pt-20');
      if (pageContent) {
        pageContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onHomeClick={handleBackToCategories} />
      <div className="pt-20">
        <Hero />


      {/* Show categories or products based on selection */}
      {!selectedCategoryId ? (
        // Categories View
        <>
          <section className="pt-16 pb-2 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                <p className="text-lg text-gray-600">Select a category to explore our Apple products</p>
              </div>
            </div>
          </section>
          
          <div>
            <CategorySlider
              categories={categories}
              onCategoryClick={handleCategoryClick}
            />
          </div>
          
          {/* Services Section */}
          <ServicesSection />
        </>
      ) : (
        // Products View
        <>
          {/* Category Header */}
          <section className="py-6 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{currentCategory?.name}</h2>
                  <p className="text-gray-600">{currentCategory?.description}</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm text-gray-500">
                    {filteredProducts.length} products found
                  </div>
                </div>
                <div className="flex-1 flex justify-end">
                  <button
                    onClick={handleBackToCategories}
                    className="flex items-center text-gray-800 hover:text-black font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Categories
                  </button>
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
                    className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
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
      <Footer onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default Home;
