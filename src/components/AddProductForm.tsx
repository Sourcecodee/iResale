import React, { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { Product } from './ProductCard';

interface AddProductFormProps {
  product?: Product | null;
  onClose: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ product, onClose }) => {
  const { addProduct, updateProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    image: '/api/placeholder/300/300',
    condition: 'Excellent' as 'Excellent' | 'Very Good' | 'Good',
    discount: 0,
    storage: '',
    color: '',
    battery: '',
    status: 'Unlocked' as 'Unlocked' | 'Locked',
    currentPrice: 0,
    originalPrice: 0,
    seller: 'TechGuru UK',
    compatible: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        image: product.image,
        condition: product.condition,
        discount: product.discount,
        storage: product.storage || '',
        color: product.color,
        battery: product.battery || '',
        status: product.status || 'Unlocked',
        currentPrice: product.currentPrice,
        originalPrice: product.originalPrice,
        seller: product.seller,
        compatible: product.compatible || ''
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      name: formData.name,
      image: formData.image,
      condition: formData.condition,
      discount: formData.discount,
      color: formData.color,
      currentPrice: formData.currentPrice,
      originalPrice: formData.originalPrice,
      seller: formData.seller,
      ...(formData.storage && { storage: formData.storage }),
      ...(formData.battery && { battery: formData.battery }),
      ...(formData.status && { status: formData.status }),
      ...(formData.compatible && { compatible: formData.compatible })
    };

    if (product) {
      updateProduct(product.id, productData);
    } else {
      addProduct(productData);
    }
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'discount' || name === 'currentPrice' || name === 'originalPrice' 
        ? Number(value) 
        : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., iPhone 15 Pro Max UK Used"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Condition *
          </label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
          </select>
        </div>

        {/* Discount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Discount Percentage *
          </label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
            min="0"
            max="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 15"
          />
        </div>

        {/* Storage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Storage (Optional)
          </label>
          <select
            name="storage"
            value={formData.storage}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">No Storage</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
            <option value="1TB">1TB</option>
          </select>
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color *
          </label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Natural Titanium"
          />
        </div>

        {/* Battery */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Battery (Optional)
          </label>
          <input
            type="text"
            name="battery"
            value={formData.battery}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 98%"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status (Optional)
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">No Status</option>
            <option value="Unlocked">Unlocked</option>
            <option value="Locked">Locked</option>
          </select>
        </div>

        {/* Compatible */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compatible With (Optional)
          </label>
          <select
            name="compatible"
            value={formData.compatible}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Compatibility</option>
            <option value="iPhone 17 Pro">iPhone 17 Pro</option>
            <option value="iPhone 16 Pro Max">iPhone 16 Pro Max</option>
            <option value="iPhone 16 Pro">iPhone 16 Pro</option>
            <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
            <option value="iPhone 15 Pro">iPhone 15 Pro</option>
            <option value="iPhone 15 series">iPhone 15 series</option>
            <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
            <option value="iPhone 14 Pro">iPhone 14 Pro</option>
            <option value="iPhone 14 series">iPhone 14 series</option>
            <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
            <option value="iPhone 13 Pro">iPhone 13 Pro</option>
            <option value="iPhone 13 series">iPhone 13 series</option>
            <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
            <option value="iPhone 12 Pro">iPhone 12 Pro</option>
            <option value="iPhone 12 series">iPhone 12 series</option>
            <option value="iPhone 12 and later">iPhone 12 and later</option>
            <option value="iPhone">iPhone (All Models)</option>
          </select>
        </div>

        {/* Current Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Price (₦) *
          </label>
          <input
            type="number"
            name="currentPrice"
            value={formData.currentPrice}
            onChange={handleChange}
            required
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 980000"
          />
        </div>

        {/* Original Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Original Price (₦) *
          </label>
          <input
            type="number"
            name="originalPrice"
            value={formData.originalPrice}
            onChange={handleChange}
            required
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 1100000"
          />
        </div>

        {/* Seller */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seller *
          </label>
          <input
            type="text"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., TechGuru UK"
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          {product ? 'Update Product' : 'Add Product'}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
