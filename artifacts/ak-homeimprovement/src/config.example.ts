// ─────────────────────────────────────────────
//  BUSINESS CONTACT CONFIGURATION — EXAMPLE FILE
//  1. Copy this file:  cp config.example.ts config.ts
//  2. Fill in your real business details in config.ts
//  3. config.ts is gitignored and will NOT be committed
// ─────────────────────────────────────────────

const config = {
  business: {
    name: "Your Business Name LLC",
    tagline: "Your City's Trusted Home Improvement Pros",
    location: "Your City, TX",
  },
  contact: {
    phone: "+1 000-000-0000",
    phoneHref: "tel:+10000000000",
    email: "youremail@gmail.com",
    emailHref: "mailto:youremail@gmail.com",
    address: "123 Main Street, Your City, TX 00000",
    addressShort: "123 Main Street, Your City, TX",
    mapsHref: "https://maps.google.com/?q=123+Main+Street+Your+City+TX",
    hours: "Mon–Sat: 7 AM – 8 PM",
    hoursSub: "Mon–Sat, 7 AM – 8 PM",
  },
  social: {
    facebookUrl: "https://www.facebook.com/yourpage",
    facebookLabel: "Your Business Name",
  },
  reviews: {
    rating: "5.0",
    count: "0",
  },
};

export default config;
