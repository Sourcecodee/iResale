// iPhone model to image mapping
export const getiPhoneImage = (productName: string): string => {
  const name = productName.toLowerCase();
  
  // iPhone 17 models
  if (name.includes('iphone 17 pro max')) {
    return '/src/assets/iPhone/iPhone 17/iPhone-17-Pro-Max.jpeg';
  }
  if (name.includes('iphone 17 pro')) {
    return '/src/assets/iPhone/iPhone 17/iPhone-17-Pro.jpeg';
  }
  if (name.includes('iphone 17')) {
    return '/src/assets/iPhone/iPhone 17/iPhone-17.jpeg';
  }
  
  // iPhone 16 models
  if (name.includes('iphone 16 pro max')) {
    return '/src/assets/iPhone/iPhone 16/iPhone-16-Pro-Max.jpeg';
  }
  if (name.includes('iphone 16 pro')) {
    return '/src/assets/iPhone/iPhone 16/iPhone-16-Pro.jpeg';
  }
  if (name.includes('iphone 16')) {
    return '/src/assets/iPhone/iPhone 16/iPhone-16.jpeg';
  }
  
  // iPhone 15 models
  if (name.includes('iphone 15 pro max')) {
    return '/src/assets/iPhone/iPhone 15/iPhone-15-Pro-Max.jpeg';
  }
  if (name.includes('iphone 15 pro')) {
    return '/src/assets/iPhone/iPhone 15/iPhone-15-Pro.jpeg';
  }
  if (name.includes('iphone 15')) {
    return '/src/assets/iPhone/iPhone 15/iPhone-15.jpeg';
  }
  
  // iPhone 14 models
  if (name.includes('iphone 14 pro max')) {
    return '/src/assets/iPhone/iPhone 14/iPhone-14-Pro-Max.jpeg';
  }
  if (name.includes('iphone 14 pro')) {
    return '/src/assets/iPhone/iPhone 14/iPhone-14-Pro.jpeg';
  }
  if (name.includes('iphone 14')) {
    return '/src/assets/iPhone/iPhone 14/iPhone-14.jpeg';
  }
  
  // iPhone 13 models
  if (name.includes('iphone 13 pro max')) {
    return '/src/assets/iPhone/iPhone 13/iPhone-13-Pro-Max.jpeg';
  }
  if (name.includes('iphone 13 pro')) {
    return '/src/assets/iPhone/iPhone 13/iPhone-13-Pro.jpeg';
  }
  if (name.includes('iphone 13 mini')) {
    return '/src/assets/iPhone/iPhone 13/iPhone-13-Mini.jpeg';
  }
  if (name.includes('iphone 13')) {
    return '/src/assets/iPhone/iPhone 13/iPhone-13.jpeg';
  }
  
  // iPhone 12 models
  if (name.includes('iphone 12 pro max')) {
    return '/src/assets/iPhone/iPhone 12/iPhone-12-Pro-Max.jpeg';
  }
  if (name.includes('iphone 12 pro')) {
    return '/src/assets/iPhone/iPhone 12/iPhone-12-Pro.jpeg';
  }
  if (name.includes('iphone 12 mini')) {
    return '/src/assets/iPhone/iPhone 12/iPhone-12-Mini.jpeg';
  }
  if (name.includes('iphone 12')) {
    return '/src/assets/iPhone/iPhone 12/iPhone-12.jpeg';
  }
  
  // iPhone XR
  if (name.includes('iphone xr')) {
    return '/src/assets/iPhone/iPhone XR/iPhone-XR.jpeg';
  }
  
  // Default fallback
  return '/src/assets/others/iPhone.jpeg';
};

// Enhanced function to get iPhone image with fallback
export const getProductImage = (product: any): string => {
  // If product already has an image path, use it
  if (product.image && product.image !== '/api/placeholder/300/300') {
    return product.image;
  }
  
  // If it's an iPhone, use the iPhone image mapper
  if (product.name && product.name.toLowerCase().includes('iphone')) {
    return getiPhoneImage(product.name);
  }
  
  // Default fallback
  return '/src/assets/others/iPhone.jpeg';
};