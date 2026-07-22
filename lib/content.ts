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
  possessionDate: "Nearing Completion",
  carpetArea: "720 – 750 sq.ft.",
  whatsapp: "917066457000", // replace with real number
  phone: "+91 70664 57000", // replace with real number
  email: "sales@platinumtowers.in", // replace
  website: "www.kishordevelopers.com",
  siteAddress: "Sr. No. 175 1/1 B, Platinum Tower, Datta Mandir Road, Wakad, Pune - 411057, Maharashtra, India.",
  officeAddress: "Kishor Developers, Corp Office, Pune",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.76!3d18.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb!2sWakad!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
};

export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Sample Flat", href: "#sample-flat" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const QUICK_INFO = [
  { label: "Location", value: "Wakad, Pune" },
  { label: "Configuration", value: "Premium 2 BHK" },
  { label: "Starting Price", value: "₹95 Lakhs*" },
  { label: "RERA No.", value: "P52100031950" },
  { label: "Possession", value: "Nearing Completion" },
];

export const HIGHLIGHTS = [
  { title: "Exclusive Single Tower", detail: "Boutique residences in a landmark single-tower development" },
  { title: "Premium 2 BHK Homes", detail: "720–750 sq.ft. thoughtfully designed floor plans" },
  { title: "Elegant Entrance Lobby", detail: "Grand double-height lobby with premium marble finishes" },
  { title: "Rooftop Fitness Area", detail: "Open-air fitness zone with panoramic city views" },
  { title: "Ale Deck Club", detail: "Exclusive rooftop lounge & club for residents" },
  { title: "Rainwater Harvesting", detail: "Sustainable living with eco-conscious infrastructure" },
];

export const AMENITIES = [
  { name: "Elegant Entrance Gate", icon: "gate" },
  { name: "Ale Deck Club", icon: "sun" },
  { name: "Rooftop Fitness Area", icon: "dumbbell" },
  { name: "Children's Play Area", icon: "playground" },
  { name: "Party Lawn", icon: "leaf" },
  { name: "Spacious Parking", icon: "car" },
  { name: "Rainwater Harvesting", icon: "droplet" },
  { name: "Solar Water Heater", icon: "zap" },
  { name: "Power Backup for Elevators", icon: "shield" },
];

export const FLOOR_PLANS = [
  { type: "Premium 2 BHK", label: "1st-5th & 7th-11th Floor", carpet: "720 - 750 sq.ft.", image: "/floorplan1.jpg" },
  { type: "Premium 2 BHK", label: "Floor Plan 2", carpet: "720 - 750 sq.ft.", image: "/floorplan2.jpg" },
  { type: "Premium 2 BHK", label: "6th & 12th Floor", carpet: "720 - 750 sq.ft.", image: "/floorplan3.jpg" },
  { type: "Premium 2 BHK", label: "3D Sections", carpet: "2 BHK Flats", image: "/floorplan4.jpg" },
];

export const GALLERY_CATEGORIES = ["All", "Exterior", "Entrance Lobby", "Lifestyle Spaces", "Ale Deck Club", "Fitness Area", "Night Elevation"];

export const GALLERY_IMAGES = [
  { category: "Exterior", src: "/hero_image.png", alt: "Platinum Royale Exterior View" },
  { category: "Entrance Lobby", src: "/enterance_lobby.png", alt: "Grand Entrance Lobby" },
  { category: "Lifestyle Spaces", src: "/lifestyle_space.png", alt: "Living Room" },
  { category: "Ale Deck Club", src: "/PLATINUM ROYALE BROCHURE_pages-to-jpg-0006.jpg", alt: "Ale Deck Club" },
  { category: "Fitness Area", src: "/fitness_area.png", alt: "Rooftop Fitness Area" },
  { category: "Night Elevation", src: "/night_life.png", alt: "Platinum Royale Night Elevation" },
];

export const SAMPLE_FLAT_IMAGES = [
  { src: "/sample_flat1.jpeg", alt: "Living Room" },
  { src: "/sample_flat2.jpeg", alt: "Master Bedroom" },
  { src: "/sample_flat3.jpeg", alt: "Dining Area" },
  { src: "/sample_flat4.jpeg", alt: "Bathroom" },
  { src: "/sample_flat5.jpeg", alt: "Modern Kitchen" },
  { src: "/sample_flat6.jpeg", alt: "Living Room (Alternate View)" },
  { src: "/sample_flat7.jpeg", alt: "Bedroom" },
  { src: "/sample_flat8.jpeg", alt: "Bedroom (Alternate View)" },
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
      { name: "Phoenix Mall of Millenium", distance: "1.1 km" },
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
  { title: "Kitchen", detail: "Designer modular kitchen platform and Vastu compliant layout with premium finish" },
  { title: "Windows", detail: "German tech UPVC windows & doors with stainless steel hardware" },
  { title: "Bathroom", detail: "Kohler premium sanitary ware & fittings with designer accessories" },
  { title: "Security", detail: "Video Door Phone & Biometric Main Door Lock" },
  { title: "Electrical", detail: "Concealed Modular Electrical Wiring" },
  { title: "Parking", detail: "Designated covered high-quality stack parking per unit" },
];

export const ABOUT_STATS = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Properties Delivered" },
  { value: 100, suffix: "%", label: "Customer First" },
  { value: 0, suffix: " Delay", label: "Timely Delivery" },
];

export const VISIT_BENEFITS = [
  "Latest Price Sheet",
  "Complete Floor Plans",
  "Full Project Brochure",
  "Exclusive Launch Benefits",
  "One-on-One Sales Consultation",
];
