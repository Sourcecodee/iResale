// Apple Watch model to image mapping
export const getAppleWatchImage = (productName: string): string => {
  const name = productName.toLowerCase();
  
  // Apple Watch Series 10
  if (name.includes('series 10')) {
    return '/assets/Watch/series10/Apple-Watch-Series-10.jpeg';
  }
  
  // Apple Watch Series 9
  if (name.includes('series 9')) {
    return '/assets/Watch/series9/Apple-Watch-Series-9.jpeg';
  }
  
  // Apple Watch Series 8
  if (name.includes('series 8')) {
    return '/assets/Watch/series8/Apple-Watch-Series-8.jpeg';
  }
  
  // Default fallback for watches
  return '/assets/others/Watch.jpeg';
};

// iPhone model to image mapping
export const getiPhoneImage = (productName: string): string => {
  const name = productName.toLowerCase();
  
  // iPhone 17 models
  if (name.includes('iphone 17 pro max')) {
    return '/assets/iPhone/iPhone 17/iPhone-17-Pro-Max.jpeg';
  }
  if (name.includes('iphone 17 pro')) {
    return '/assets/iPhone/iPhone 17/iPhone-17-Pro.jpeg';
  }
  if (name.includes('iphone 17')) {
    return '/assets/iPhone/iPhone 17/iPhone-17.jpeg';
  }
  
  // iPhone 16 models
  if (name.includes('iphone 16 pro max')) {
    return '/assets/iPhone/iPhone 16/iPhone-16-Pro-Max.jpeg';
  }
  if (name.includes('iphone 16 pro')) {
    return '/assets/iPhone/iPhone 16/iPhone-16-Pro.jpeg';
  }
  if (name.includes('iphone 16')) {
    return '/assets/iPhone/iPhone 16/iPhone-16.jpeg';
  }
  
  // iPhone 15 models
  if (name.includes('iphone 15 pro max')) {
    return '/assets/iPhone/iPhone 15/iPhone-15-Pro-Max.jpeg';
  }
  if (name.includes('iphone 15 pro')) {
    return '/assets/iPhone/iPhone 15/iPhone-15-Pro.jpeg';
  }
  if (name.includes('iphone 15')) {
    return '/assets/iPhone/iPhone 15/iPhone-15.jpeg';
  }
  
  // iPhone 14 models
  if (name.includes('iphone 14 pro max')) {
    return '/assets/iPhone/iPhone 14/iPhone-14-Pro-Max.jpeg';
  }
  if (name.includes('iphone 14 pro')) {
    return '/assets/iPhone/iPhone 14/iPhone-14-Pro.jpeg';
  }
  if (name.includes('iphone 14')) {
    return '/assets/iPhone/iPhone 14/iPhone-14.jpeg';
  }
  
  // iPhone 13 models
  if (name.includes('iphone 13 pro max')) {
    return '/assets/iPhone/iPhone 13/iPhone-13-Pro-Max.jpeg';
  }
  if (name.includes('iphone 13 pro')) {
    return '/assets/iPhone/iPhone 13/iPhone-13-Pro.jpeg';
  }
  if (name.includes('iphone 13 mini')) {
    return '/assets/iPhone/iPhone 13/iPhone-13-Mini.jpeg';
  }
  if (name.includes('iphone 13')) {
    return '/assets/iPhone/iPhone 13/iPhone-13.jpeg';
  }
  
  // iPhone 12 models
  if (name.includes('iphone 12 pro max')) {
    return '/assets/iPhone/iPhone 12/iPhone-12-Pro-Max.jpeg';
  }
  if (name.includes('iphone 12 pro')) {
    return '/assets/iPhone/iPhone 12/iPhone-12-Pro.jpeg';
  }
  if (name.includes('iphone 12 mini')) {
    return '/assets/iPhone/iPhone 12/iPhone-12-Mini.jpeg';
  }
  if (name.includes('iphone 12')) {
    return '/assets/iPhone/iPhone 12/iPhone-12.jpeg';
  }
  
  // iPhone XR
  if (name.includes('iphone xr')) {
    return '/assets/iPhone/iPhone XR/iPhone-XR.jpeg';
  }
  
  // Default fallback
  return '/assets/others/iPhone.jpeg';
};

// Enhanced function to get product image with fallback
export const getProductImage = (product: any): string => {
  // If product already has an image path, use it
  if (product.image && product.image !== '/api/placeholder/300/300') {
    return product.image;
  }
  
  // If it's an iPhone, use the iPhone image mapper
  if (product.name && product.name.toLowerCase().includes('iphone')) {
    return getiPhoneImage(product.name);
  }
  
  // If it's an Apple Watch, use the Apple Watch image mapper
  if (product.name && product.name.toLowerCase().includes('apple watch')) {
    return getAppleWatchImage(product.name);
  }
  
  // Default fallback
  return '/assets/others/iPhone.jpeg';
};