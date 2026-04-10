// ─────────────────────────────────────────────
//  BUSINESS CONTACT CONFIGURATION
//  Reads from Vite environment variables (VITE_* prefix) with fallback to hardcoded defaults.
//
//  LOCAL DEV:  Create .env.local (gitignored) and set values there.
//  VERCEL:     Set these in Vercel Dashboard → Project → Settings → Environment Variables
// ─────────────────────────────────────────────

const config = {
  business: {
    name:     import.meta.env.VITE_BUSINESS_NAME     ?? "AK Home Improvement LLC",
    tagline:  import.meta.env.VITE_BUSINESS_TAGLINE  ?? "Sugar Land's Trusted Home Improvement Pros",
    location: import.meta.env.VITE_BUSINESS_LOCATION ?? "Sugar Land, TX",
  },
  contact: {
    phone:        import.meta.env.VITE_CONTACT_PHONE         ?? "+1 832-577-7053",
    phoneHref:    import.meta.env.VITE_CONTACT_PHONE_HREF    ?? "tel:+18325777053",
    email:        import.meta.env.VITE_CONTACT_EMAIL         ?? "armanhomeimprovement@gmail.com",
    emailHref:    import.meta.env.VITE_CONTACT_EMAIL_HREF    ?? "mailto:armanhomeimprovement@gmail.com",
    address:      import.meta.env.VITE_CONTACT_ADDRESS       ?? "225 Matlage Way #1772, Sugar Land, TX 77487",
    addressShort: import.meta.env.VITE_CONTACT_ADDRESS_SHORT ?? "225 Matlage Way #1772, Sugar Land, TX",
    mapsHref:     import.meta.env.VITE_CONTACT_MAPS_HREF     ?? "https://maps.google.com/?q=225+Matlage+Way+%231772+Sugar+Land+TX+77487",
    hours:        import.meta.env.VITE_CONTACT_HOURS         ?? "Mon–Sat: 7 AM – 8 PM",
    hoursSub:     import.meta.env.VITE_CONTACT_HOURS_SUB     ?? "Mon–Sat, 7 AM – 8 PM",
  },
  social: {
    facebookUrl:   import.meta.env.VITE_FACEBOOK_URL   ?? "https://www.facebook.com/p/AkHomeImprovement-LLC-100066768828574/",
    facebookLabel: import.meta.env.VITE_FACEBOOK_LABEL ?? "AK Home Improvement",
  },
  reviews: {
    rating: import.meta.env.VITE_REVIEW_RATING ?? "5.0",
    count:  import.meta.env.VITE_REVIEW_COUNT  ?? "59",
  },
};

export default config;
