import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../components/ProductCard';
import { getiPhoneImage } from '../utils/iphoneImageMapper';
import { getWhatsAppUrl } from '../config/whatsappConfig';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (id) {
      const productData = getProduct(parseInt(id));
      setProduct(productData || null);
    }
  }, [id, getProduct]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'Very Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Good': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const handleWhatsAppContact = () => {
    const whatsappUrl = getWhatsAppUrl(product.name, formatPrice(product.currentPrice));
    window.open(whatsappUrl, '_blank');
  };

  // Get the appropriate image for the product
  const getProductImage = () => {
    if (product.name.toLowerCase().includes('iphone')) {
      return getiPhoneImage(product.name);
    }
    return product.image;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📱</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">iResale</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="relative">
                <div 
                  className={`w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center transition-transform duration-1000 overflow-hidden ${
                    isSpinning ? 'animate-3d-showroom' : ''
                  }`}
                  style={{ 
                    transformOrigin: 'center center',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <img 
                    src={getProductImage()} 
                    alt={product.name}
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-48 h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center shadow-2xl" style="transform-style: preserve-3d; box-shadow: 0 20px 40px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)">
                          <svg class="w-24 h-24 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Condition and Discount Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getConditionColor(product.condition)}`}>
                    {product.condition}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.discount}% OFF
                  </span>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={handleSpin}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  🎯 3D Showroom View
                </button>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                {/* Price Section */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatPrice(product.currentPrice)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-medium mt-1">
                    You save {formatPrice(product.originalPrice - product.currentPrice)}
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.storage && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Storage</div>
                      <div className="font-semibold text-gray-900">{product.storage}</div>
                    </div>
                  )}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">RAM</div>
                    <div className="font-semibold text-gray-900">8GB</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Processor</div>
                    <div className="font-semibold text-gray-900">A17 Pro</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Display</div>
                    <div className="font-semibold text-gray-900">6.1" Super Retina XDR</div>
                  </div>
                </div>

                {/* Seller Info */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Sold by {product.seller}</div>
                      <div className="text-sm text-gray-600">Verified UK Seller</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button 
                    onClick={handleWhatsAppContact}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
                  >
                    📱 Contact Seller on WhatsApp
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
                    ❤️ Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Product Name</span>
                  <span className="font-medium text-gray-900">{product.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Condition</span>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getConditionColor(product.condition)}`}>
                    {product.condition}
                  </span>
                </div>
                {product.storage && (
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Storage Capacity</span>
                    <span className="font-medium text-gray-900">{product.storage}</span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">RAM</span>
                  <span className="font-medium text-gray-900">8GB</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Processor</span>
                  <span className="font-medium text-gray-900">A17 Pro Chip</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Display</span>
                  <span className="font-medium text-gray-900">6.1" Super Retina XDR</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Camera System</span>
                  <span className="font-medium text-gray-900">48MP Main + 12MP Ultra Wide</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Connectivity</span>
                  <span className="font-medium text-gray-900">5G, Wi-Fi 6E, Bluetooth 5.3</span>
                </div>
                {product.compatible && (
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Compatibility</span>
                    <span className="font-medium text-gray-900">{product.compatible}</span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Seller</span>
                  <span className="font-medium text-gray-900">{product.seller}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-red-600">{product.discount}% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
