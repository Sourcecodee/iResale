# WhatsApp Configuration

## How to Update WhatsApp Contact Information

To update the WhatsApp contact information for your iResale store, simply edit the `whatsappConfig.ts` file in this directory.

### Quick Setup

1. Open `src/config/whatsappConfig.ts`
2. Update the following values:

```typescript
export const whatsappConfig = {
  // Replace with your actual WhatsApp number
  phoneNumber: "+447700900123", 
  
  // Replace with your actual WhatsApp link
  whatsappLink: "https://wa.me/447700900123", 
  
  // Update seller name if needed
  sellerName: "TechGuru UK",
  
  // Customize the default message
  defaultMessage: "Hi! I'm interested in your products. Could you please provide more information?",
};
```

### Options for WhatsApp Links

You can use either:

1. **Phone Number Format**: `https://wa.me/447700900123`
2. **WhatsApp Business Link**: `https://wa.me/447700900123?text=Hi!%20I'm%20interested%20in%20your%20products.`
3. **Custom WhatsApp Link**: Any WhatsApp link provided by the seller

### What Happens When You Update

- All "Contact Seller on WhatsApp" buttons will automatically use the new contact information
- Product-specific messages will include the product name and price
- No need to update individual products - everything is centralized

### Example Updates

```typescript
// For a UK number
phoneNumber: "+447123456789",
whatsappLink: "https://wa.me/447123456789",

// For a Nigerian number  
phoneNumber: "+2348123456789",
whatsappLink: "https://wa.me/2348123456789",

// For a WhatsApp Business link
whatsappLink: "https://wa.me/447123456789?text=Hi!%20I'm%20interested%20in%20your%20products.",
```
