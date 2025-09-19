// WhatsApp Contact Configuration
// Update these values when you have the actual seller's WhatsApp information

export const whatsappConfig = {
  // Primary WhatsApp contact information
  phoneNumber: "+447700900123", // Replace with actual seller's WhatsApp number
  whatsappLink: "https://wa.me/447700900123", // Replace with actual WhatsApp link
  
  // Alternative: You can also use a WhatsApp Business API link
  // whatsappLink: "https://wa.me/447700900123?text=Hi!%20I'm%20interested%20in%20your%20products.",
  
  // Seller information
  sellerName: "TechGuru UK",
  
  // Default message template
  defaultMessage: "Hi! I'm interested in your products. Could you please provide more information?",
  
  // Product-specific message template
  productMessageTemplate: (productName: string, price: string) => 
    `Hi! I'm interested in this product: ${productName} - ${price}. Is it still available?`
};

// Helper function to get WhatsApp URL with product information
export const getWhatsAppUrl = (productName?: string, price?: string) => {
  const baseUrl = whatsappConfig.whatsappLink;
  
  if (productName && price) {
    const message = whatsappConfig.productMessageTemplate(productName, price);
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  
  const encodedMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  return `${baseUrl}?text=${encodedMessage}`;
};

// Helper function to get just the phone number (for direct WhatsApp links)
export const getWhatsAppNumber = () => {
  return whatsappConfig.phoneNumber;
};
