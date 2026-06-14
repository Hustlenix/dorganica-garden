/* ═══════════════════════════════════════════════════
   D'ORGANICA GARDEN — Brand Constants
   ═══════════════════════════════════════════════════ */

export const BRAND = {
  name: "D'Organica Garden",
  shortName: "D'Organica",
  tagline: "Farmer and Farming at Every Home",
  mission: "To help people grow their own chemical-free food and adopt a healthy, self-sustainable lifestyle.",
  founder: "Jayasri Krishnan",
  founderRole: "Founder & CEO",
  location: "Chennai, Tamil Nadu, India",
  since: 2014,
  domain: "dorganicashop.com",
  url: "https://dorganicashop.com",
} as const;

export const CONTACT = {
  phone: "+91 98400 28852",
  phoneRaw: "+919840028852",
  phoneAlt: "+91 99629 56356",
  phoneAltRaw: "+919962956356",
  whatsapp: "919840028852",
  email: "hello@dorganicashop.com",
  address: "Chennai, Tamil Nadu, India",
} as const;

export const SOCIAL = {
  facebook: "https://facebook.com/dorganicagarden",
  instagram: "https://instagram.com/dorganicagarden",
  youtube: "https://youtube.com/@dorganicagarden",
} as const;

export const WHATSAPP_MESSAGE = {
  default:
    "Hi! I'm interested in D'Organica's gardening services. Can you share more details?",
  training:
    "Hi! I'm interested in the Microgreens Mastery Program. Can you share more details?",
  consultation:
    "Hi! I'd like to book a consultation for my space. Can you help?",
} as const;

/* ═══════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════ */

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/gallery" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
] as const;

/* ═══════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════ */

export const STATS = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 2500, suffix: "+", label: "Gardens Built" },
  { value: 8000, suffix: "+", label: "Families Served" },
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Business Success Stories" },
] as const;

/* ═══════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════ */

export const SERVICES = [
  {
    id: "terrace-gardening",
    title: "Terrace Gardening",
    tagline: "Turn empty rooftops into food-producing ecosystems.",
    description:
      "Custom terrace garden design, installation, and ongoing support that enables families to grow fresh vegetables, herbs, and fruits at home.",
    icon: "leaf",
  },
  {
    id: "vertical-gardens",
    title: "Vertical Gardens",
    tagline: "Transform blank walls into living, breathing ecosystems.",
    description:
      "Space-efficient vertical garden solutions for apartments, villas, offices, and commercial spaces.",
    icon: "layers",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    tagline: "Create outdoor spaces that feel like destinations.",
    description:
      "Residential and commercial landscaping that creates visually stunning and eco-friendly environments.",
    icon: "trees",
  },
  {
    id: "hydroponics",
    title: "Hydroponics",
    tagline: "Grow more in less space. Without soil.",
    description:
      "Modern soil-free cultivation systems designed for efficient crop production with higher yields in smaller spaces.",
    icon: "droplets",
  },
  {
    id: "microgreens",
    title: "Microgreens",
    tagline: "A profitable business that fits on your balcony.",
    description:
      "Complete microgreens setup and training — from cultivation to market. Start a business from home.",
    icon: "sprout",
  },
  {
    id: "training",
    title: "Training & Mentorship",
    tagline: "Learn from someone who has trained 500+ urban farmers.",
    description:
      "Practical training programs covering terrace gardening, microgreens cultivation, and urban farming business development.",
    icon: "graduation-cap",
  },
  {
    id: "consultation",
    title: "Expert Consultation",
    tagline: "Get a custom plan for your space and goals.",
    description:
      "Site assessment, project planning, technical guidance, and business mentorship for gardening and urban farming projects.",
    icon: "handshake",
  },
] as const;

/* ═══════════════════════════════════════════════════
   TRANSFORMATIONS (Before/After)
   ═══════════════════════════════════════════════════ */

export const TRANSFORMATIONS = [
  {
    id: "t1",
    title: "Empty Terrace → Vegetable Paradise",
    problem: "800 sq ft concrete terrace, unused, heat absorption",
    solution:
      "Complete organic terrace garden with drip irrigation, raised beds, and composting",
    result: "Family grows 60% of their vegetables year-round",
    location: "Velachery, Chennai",
    date: "2024",
  },
  {
    id: "t2",
    title: "Barren Wall → Living Art",
    problem: "Blank exterior wall, no insulation, visual dead zone",
    solution:
      "Custom vertical garden system with automated irrigation and native species",
    result: "Wall temperature reduced by 5°C, becomes neighborhood landmark",
    location: "Thoraipakkam, Chennai",
    date: "2023",
  },
  {
    id: "t3",
    title: "Balcony → Microgreens Business",
    problem: "Small 6x4 ft balcony, no prior farming experience",
    solution:
      "Compact hydroponic setup with training and business mentorship",
    result: "Owner now supplies 3 restaurants with fresh microgreens",
    location: "Adyar, Chennai",
    date: "2024",
  },
] as const;

/* ═══════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════ */

export const TESTIMONIALS = [
  {
    quote:
      "Jayasri madam's training is very practical. I started my microgreens business after completing her course and within 2 months I had regular customers.",
    name: "Priya S.",
    role: "Microgreens Entrepreneur",
    location: "Chennai",
  },
  {
    quote:
      "Best decision I made for my terrace. D'Organica transformed our empty rooftop into a beautiful vegetable garden. We now grow most of our greens at home.",
    name: "Ramesh K.",
    role: "Homeowner",
    location: "Chennai",
  },
  {
    quote:
      "The hydroponics setup they installed is amazing. Fresh lettuce and herbs year-round. Professional team with deep knowledge of soil-free cultivation.",
    name: "Anita M.",
    role: "Restaurant Owner",
    location: "Chennai",
  },
  {
    quote:
      "I never thought I could grow food in my apartment. D'Organica designed a vertical garden for my balcony that's both beautiful and productive.",
    name: "Sundar R.",
    role: "Apartment Resident",
    location: "Chennai",
  },
  {
    quote:
      "From consultation to installation, everything was professional. They didn't just build a garden — they taught us how to maintain and grow it ourselves.",
    name: "Lakshmi P.",
    role: "Homeowner",
    location: "Chennai",
  },
  {
    quote:
      "The Microgreens Mastery Program is worth every rupee. I'm now earning from home while doing something I love. Highly recommended for aspiring entrepreneurs.",
    name: "Divya K.",
    role: "Training Graduate",
    location: "Chennai",
  },
] as const;
