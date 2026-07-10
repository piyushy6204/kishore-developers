// lib/content.ts — Single source of truth for all page copy

export const SITE = {
  projectName: "Platinum Royale",
  developer: "Kishor Developers",
  tagline: "Find Your Place In Wakad's Most Elegant Address",
  subtagline: "Crafted for families who appreciate thoughtful design, exceptional quality, and a lifestyle that reflects their aspirations.",
  startingPrice: "₹95 Lakhs*",
  location: "Wakad, Pune",
  configuration: "Premium 2 BHK",
  rera: "P52100031950",
  development: "Exclusive Single Tower",
  possessionDate: "Dec 2026*",
  carpetArea: "650 – 850 sq.ft.",
  whatsapp: "919876543210", // replace with real number
  phone: "+91 98765 43210", // replace with real number
  email: "sales@kishordevelopers.com", // replace
  website: "www.kishordevelopers.com",
  siteAddress: "Platinum Royale, Wakad, Pune – 411057",
  officeAddress: "Kishor Developers, Corp Office, Pune",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.76!3d18.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb!2sWakad!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
};

export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const QUICK_INFO = [
  { label: "Location", value: "Wakad, Pune" },
  { label: "Configuration", value: "Premium 2 BHK" },
  { label: "Starting Price", value: "₹95 Lakhs*" },
  { label: "RERA No.", value: "P52100031950" },
  { label: "Possession", value: "Dec 2026*" },
];

export const HIGHLIGHTS = [
  { title: "Exclusive Single Tower", detail: "Boutique residences in a landmark single-tower development" },
  { title: "Premium 2 BHK Homes", detail: "650–850 sq.ft. thoughtfully designed floor plans" },
  { title: "Elegant Entrance Lobby", detail: "Grand double-height lobby with premium marble finishes" },
  { title: "Rooftop Fitness Area", detail: "Open-air fitness zone with panoramic city views" },
  { title: "Sky Deck Lounge", detail: "Exclusive rooftop lounge for residents" },
  { title: "Rainwater Harvesting", detail: "Sustainable living with eco-conscious infrastructure" },
];

export const AMENITIES = [
  { name: "Elegant Entrance Gate", icon: "gate" },
  { name: "Sky Deck Lounge", icon: "sun" },
  { name: "Rooftop Fitness Area", icon: "dumbbell" },
  { name: "Children's Play Area", icon: "playground" },
  { name: "Party Lawn", icon: "leaf" },
  { name: "Spacious Parking", icon: "car" },
  { name: "Rainwater Harvesting", icon: "droplet" },
  { name: "Solar Water Heater", icon: "zap" },
  { name: "Power Backup — Elevators", icon: "shield" },
];

export const FLOOR_PLANS = [
  { type: "Premium 2 BHK", label: "Type 1", carpet: "650 sq.ft.", image: "/images/fp-1.jpg" },
  { type: "Premium 2 BHK", label: "Type 2", carpet: "700 sq.ft.", image: "/images/fp-2.jpg" },
  { type: "Premium 2 BHK", label: "Type 3", carpet: "750 sq.ft.", image: "/images/fp-3.jpg" },
  { type: "Premium 2 BHK", label: "Type 4", carpet: "850 sq.ft.", image: "/images/fp-4.jpg" },
];

export const GALLERY_CATEGORIES = ["All", "Exterior", "Entrance Lobby", "Lifestyle Spaces", "Sky Deck", "Fitness Area", "Night Elevation"];

export const GALLERY_IMAGES = [
  { category: "Exterior", src: "/images/gallery-ext-1.jpg", alt: "Platinum Royale Exterior View" },
  { category: "Exterior", src: "/images/gallery-ext-2.jpg", alt: "Tower Elevation" },
  { category: "Entrance Lobby", src: "/images/gallery-lobby-1.jpg", alt: "Grand Entrance Lobby" },
  { category: "Lifestyle Spaces", src: "/images/gallery-life-1.jpg", alt: "Living Room" },
  { category: "Sky Deck", src: "/images/gallery-deck-1.jpg", alt: "Sky Deck Lounge" },
  { category: "Fitness Area", src: "/images/gallery-fit-1.jpg", alt: "Rooftop Fitness Area" },
  { category: "Night Elevation", src: "/images/gallery-night-1.jpg", alt: "Night Elevation" },
  { category: "Night Elevation", src: "/images/gallery-night-2.jpg", alt: "Illuminated Facade" },
];

export const LOCATION_ADVANTAGES = [
  {
    category: "IT Parks",
    items: [
      { name: "Rajiv Gandhi IT Park", distance: "2 km" },
      { name: "Panchshil Business Park", distance: "6.4 km" },
    ],
  },
  {
    category: "Education",
    items: [
      { name: "Euro School", distance: "1 km" },
      { name: "JSPM College", distance: "2.5 km" },
      { name: "Orchids International", distance: "4.3 km" },
    ],
  },
  {
    category: "Healthcare",
    items: [
      { name: "Orion Hospital", distance: "0.9 km" },
      { name: "Aditya Birla Hospital", distance: "2.5 km" },
      { name: "Ruby Hall Clinic", distance: "5 km" },
    ],
  },
  {
    category: "Shopping",
    items: [
      { name: "Vision One Mall", distance: "1.8 km" },
      { name: "Decathlon", distance: "1.8 km" },
      { name: "D-Mart", distance: "3 km" },
      { name: "Westend Mall", distance: "8.6 km" },
    ],
  },
  {
    category: "Connectivity",
    items: [
      { name: "Mumbai–Pune Highway", distance: "1 km" },
      { name: "Balewadi High Street", distance: "6.6 km" },
    ],
  },
];

export const SPECIFICATIONS = [
  { title: "Structure", detail: "Earthquake Resistant RCC Structure" },
  { title: "Flooring", detail: "Premium Vitrified Flooring throughout" },
  { title: "Kitchen", detail: "Designer Kitchen Platform with premium finish" },
  { title: "Windows", detail: "UPVC Sliding Windows with SS hardware" },
  { title: "Bathroom", detail: "Premium Bathroom Fittings & accessories" },
  { title: "Security", detail: "Video Door Phone & Biometric Main Door Lock" },
  { title: "Electrical", detail: "Concealed Modular Electrical Wiring" },
  { title: "Parking", detail: "Designated Covered Parking per unit" },
];

export const ABOUT_STATS = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Properties Delivered" },
  { value: 100, suffix: "%", label: "Customer First" },
  { value: 0, suffix: " Delays", label: "Timely Delivery" },
];

export const VISIT_BENEFITS = [
  "Latest Price Sheet",
  "Complete Floor Plans",
  "Full Project Brochure",
  "Exclusive Launch Benefits",
  "One-on-One Sales Consultation",
];
