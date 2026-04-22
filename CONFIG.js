// ==========================================
// SITE CONFIGURATION
// Dactts Construction LLC — Milton, FL
// ==========================================

const CONFIG = {

  // ── Brand ──
  brand: {
    name: "Dactts Construction",
    legalName: "Dactts Construction LLC",
    tagline: "Luxury Building & Remodeling in Santa Rosa County",
    tradeType: "Construction",
  },

  // ── Theme ──
  theme: {
    primaryColor:   "#1A1F2E",
    secondaryColor: "#B8860B",
  },

  // ── Navigation ──
  nav: [
    { label: "Home",          href: "/" },
    { label: "Services",      href: "/#services" },
    { label: "Why Us",        href: "/#why-us" },
    { label: "Our Work",      href: "/#our-work" },
    { label: "Reviews",       href: "/#reviews" },
    { label: "Service Areas", href: "/#service-areas" },
    { label: "About",         href: "/about" },
    { label: "Contact",       href: "/contact" },
  ],

  // ── Top Bar ──
  topBar: {
    phone: "(850) 902-7480",
    info:  "Mon–Sat 7 AM – 6 PM",
    cta:   { label: "Get a Free Estimate", href: "/contact" },
  },

  // ── Trust Logos ──
  trustLogos: {
    show: false,
    logos: [],
  },

  // ── SEO ──
  seo: {
    title: "Dactts Construction LLC | Luxury Builder & Remodeler in Milton, FL",
    description: "Dactts Construction LLC delivers luxury new construction, custom kitchens, bathroom remodeling, and high-end renovations in Milton and Santa Rosa County, FL. 5-star rated. Call (850) 902-7480.",
    keywords: "luxury builder Milton FL, custom home construction Santa Rosa County, kitchen remodeling Milton, bathroom remodel Milton FL, general contractor Milton FL, Dactts Construction",
    og: {
      title: "Dactts Construction LLC | Luxury Building & Remodeling",
      description: "Premium new construction and remodeling in Milton & Santa Rosa County. Custom kitchens, luxury bathrooms, whole-home renovations. Call (850) 902-7480.",
      image: "/assets/clients/active/hero.webp",
    },
  },

  // ── Images ──
  images: {
    logo:    "/assets/clients/active/logo.svg",
    hero:    "/assets/clients/active/2024-08-05.webp",
    about:   "/assets/clients/active/2024-08-05 (3).webp",
    whyUs:   "/assets/clients/active/2024-08-05 (4).webp",
    contact: "/assets/clients/active/2025-12-02.webp",
  },

  // ── Hero ──
  hero: {
    headline: "Luxury Construction & Remodeling Done Right",
    subheadline: "From stunning custom kitchens to whole-home renovations — Dactts Construction builds spaces that exceed expectations. Serving Milton and Santa Rosa County with 5-star craftsmanship.",
    cta: { label: "Get Your Free Estimate", href: "/contact" },
    phone: "(850) 902-7480",
  },

  // ── Form ──
  form: {
    title: "Get Your Free Estimate",
    subtitle: "Tell us about your project and we'll get back to you within 24 hours.",
    endpoint: "",
    fields: [
      { name: "name",    label: "Full Name",     type: "text",     required: true },
      { name: "phone",   label: "Phone Number",   type: "tel",      required: true },
      { name: "email",   label: "Email Address",  type: "email",    required: false },
      { name: "service", label: "Service Needed",  type: "select",   required: true,
        options: ["Custom Kitchen Remodel", "Bathroom Remodeling", "New Home Construction", "Home Additions", "Interior Renovations", "Outdoor Living Spaces", "Custom Cabinetry & Closets", "Commercial Build-Outs"] },
      { name: "message", label: "Project Details", type: "textarea", required: false },
    ],
  },

  // ── Trust Badges ──
  trustBadges: [
    { icon: "star",       label: "5.0-Star Rated" },
    { icon: "shield",     label: "Licensed & Insured" },
    { icon: "clock",      label: "On-Time Delivery" },
    { icon: "handshake",  label: "15+ Happy Clients" },
  ],

  // ── Services ──
  services: {
    headline: "Our Services",
    subheadline: "Premium construction and remodeling services tailored to your vision.",
    items: [
      {
        icon: "kitchen",
        title: "Custom Kitchen Remodeling",
        slug: "custom-kitchen-remodeling",
        shortDesc: "Waterfall islands, professional-grade appliances, custom cabinetry — we build kitchens that are the heart of your home.",
        longDesc: "Our custom kitchen remodels transform outdated spaces into luxury cooking and entertaining areas. From quartz waterfall islands and shaker cabinetry to professional ranges and designer pendant lighting, every detail is carefully planned and expertly installed. We handle full gut renovations and targeted upgrades throughout Milton and Santa Rosa County.",
        image: "/assets/clients/active/2025-11-29.webp",
      },
      {
        icon: "bathroom",
        title: "Bathroom Remodeling",
        slug: "bathroom-remodeling",
        shortDesc: "Marble tile showers, rain heads, double vanities — spa-quality bathrooms built to last.",
        longDesc: "We design and build luxury bathrooms that feel like a private retreat. Our bathroom remodels include walk-in marble tile showers with frameless glass, custom double vanities, freestanding tubs, and modern fixtures. From master suites to guest baths, Dactts Construction delivers premium quality in every bathroom renovation across Santa Rosa County.",
        image: "/assets/clients/active/2024-08-05 (4).webp",
      },
      {
        icon: "home",
        title: "New Home Construction",
        slug: "new-home-construction",
        shortDesc: "Custom-built homes from the ground up — designed around your lifestyle and built to the highest standards.",
        longDesc: "Dactts Construction builds custom homes that reflect your unique vision. From foundation to finish, we manage every phase of new construction including site prep, framing, electrical, plumbing, and luxury interior finishes. Our new builds in Milton and surrounding areas feature quality materials, energy-efficient systems, and the attention to detail that defines our work.",
        image: "/assets/clients/active/2024-08-05 (3).webp",
      },
      {
        icon: "extension",
        title: "Home Additions",
        slug: "home-additions",
        shortDesc: "More space without moving — seamless additions that match your existing home perfectly.",
        longDesc: "Need more room? Our home additions expand your living space while maintaining the architectural integrity of your existing home. Whether it's a new master suite, expanded living area, or bonus room, we handle structural engineering, permits, and construction from start to finish. Every addition blends seamlessly with your home's existing design.",
        image: "/assets/clients/active/2025-12-10.webp",
      },
      {
        icon: "remodel",
        title: "Interior Renovations",
        slug: "interior-renovations",
        shortDesc: "Coffered ceilings, hardwood floors, custom built-ins — transforming interiors into luxury living spaces.",
        longDesc: "From coffered ceilings and crown molding to cherry hardwood floors and custom built-in cabinetry, our interior renovations elevate your home's style and functionality. We specialize in whole-home renovations that update every surface and system while preserving the character of your space. Serving homeowners throughout Milton and Santa Rosa County.",
        image: "/assets/clients/active/2024-08-05 (8).webp",
      },
      {
        icon: "deck",
        title: "Outdoor Living Spaces",
        slug: "outdoor-living-spaces",
        shortDesc: "Screened patios, covered lanais, and outdoor kitchens — extend your living space outdoors.",
        longDesc: "Make the most of Florida living with custom outdoor spaces. We build screened-in patios, covered lanais with ceiling fans, outdoor kitchens, and entertainment areas designed for year-round enjoyment. Our outdoor construction includes proper drainage, hurricane-rated materials, and finishes that withstand the Gulf Coast climate.",
        image: "/assets/clients/active/2024-08-05 (7).webp",
      },
      {
        icon: "cabinet",
        title: "Custom Cabinetry & Closets",
        slug: "custom-cabinetry-closets",
        shortDesc: "Built-in closet systems, entertainment centers, and custom storage solutions crafted to fit your space.",
        longDesc: "Our custom cabinetry and closet systems maximize your storage while adding beauty to every room. From walk-in closets with built-in organizers to entertainment centers, wet bars, and pantry systems, we design and install storage solutions that are as functional as they are beautiful. Every piece is built to fit your exact specifications.",
        image: "/assets/clients/active/2024-08-05 (5).webp",
      },
      {
        icon: "commercial",
        title: "Commercial Build-Outs",
        slug: "commercial-build-outs",
        shortDesc: "Professional commercial construction — offices, retail spaces, and tenant improvements built on schedule.",
        longDesc: "Dactts Construction brings the same quality and attention to detail to commercial projects. We handle office build-outs, retail spaces, restaurant renovations, and tenant improvements across Santa Rosa County. Our commercial team manages permits, inspections, and construction timelines to minimize disruption and deliver on budget.",
        image: "/assets/clients/active/2025-12-06.webp",
      },
    ],
  },

  // ── Process ──
  process: {
    headline: "How It Works",
    steps: [
      { icon: "phone",     title: "Free Consultation",   desc: "Call us or fill out our form. We'll discuss your vision, visit your property, and provide a detailed estimate — all at no cost." },
      { icon: "clipboard", title: "Design & Planning",    desc: "We work with you to finalize designs, select materials, and create a clear project timeline before any work begins." },
      { icon: "tools",     title: "Expert Construction",  desc: "Our skilled team brings your project to life with premium materials, clean job sites, and constant communication throughout." },
      { icon: "check",     title: "Final Walkthrough",    desc: "We walk through every detail together to ensure the finished result exceeds your expectations before the project is complete." },
    ],
  },

  // ── Why Us ──
  whyUs: {
    headline: "Why Homeowners Choose Dactts Construction",
    items: [
      { icon: "star",      title: "5-Star Quality",          desc: "Every project reflects our commitment to premium craftsmanship — 15 five-star reviews and counting." },
      { icon: "certified", title: "Licensed & Insured",      desc: "Fully licensed general contractor with comprehensive insurance coverage for your complete peace of mind." },
      { icon: "ruler",     title: "Attention to Detail",     desc: "From tile grout lines to ceiling trim, we obsess over the details that separate good work from exceptional work." },
      { icon: "home",      title: "Full-Service Builder",    desc: "One team handles everything — design, demolition, construction, and finishing — so your project stays on track." },
    ],
  },

  // ── Our Work ──
  ourWork: {
    headline: "Recent Projects",
    subheadline: "A look at recent builds and renovations completed by our team.",
    items: [
      { image: "/assets/clients/active/2024-08-05.webp",      caption: "Modern Kitchen — Quartz Waterfall Island" },
      { image: "/assets/clients/active/2025-11-29.webp",       caption: "Luxury Kitchen — Marble Island & Beam Ceiling" },
      { image: "/assets/clients/active/2024-08-05 (4).webp",   caption: "Master Bathroom — Marble Walk-In Shower" },
      { image: "/assets/clients/active/2024-08-05 (8).webp",   caption: "Living Room — Coffered Ceiling & Hardwood" },
      { image: "/assets/clients/active/2025-12-02.webp",       caption: "Farmhouse Kitchen — Navy Island & Vaulted Ceiling" },
      { image: "/assets/clients/active/2024-08-05 (1).webp",   caption: "Custom Home Exterior — Stone Facade at Twilight" },
      { image: "/assets/clients/active/2025-12-07.webp",       caption: "Formal Living — Columns & French Doors" },
      { image: "/assets/clients/active/2025-12-06.webp",       caption: "Game Room — Pool Table & Wet Bar" },
    ],
  },

  // ── Stats ──
  stats: [
    { value: "5.0★",  label: "Google Rating" },
    { value: "15+",   label: "5-Star Reviews" },
    { value: "100%",  label: "Satisfaction" },
    { value: "10+",   label: "Years Experience" },
  ],

  // ── Reviews ──
  reviews: [
    {
      name: "Satisfied Homeowner",
      rating: 5,
      text: "Dactts Construction did an incredible job on our kitchen remodel. The waterfall island and custom cabinetry turned out even better than we imagined. Professional from start to finish.",
    },
    {
      name: "Happy Client",
      rating: 5,
      text: "We hired them for a full bathroom renovation and couldn't be happier. The marble tile work is flawless and they finished on schedule. Highly recommend for any luxury remodel.",
    },
    {
      name: "Milton Homeowner",
      rating: 5,
      text: "From the initial consultation to the final walkthrough, Dactts Construction exceeded our expectations. The attention to detail on our whole-home renovation was outstanding. Five stars all the way.",
    },
  ],

  // ── CTA ──
  cta: {
    headline: "Ready to Build Something Extraordinary?",
    body: "Whether it's a custom kitchen, luxury bathroom, or a brand-new home — Dactts Construction brings your vision to life with premium craftsmanship.",
    cta: { label: "Get Your Free Estimate", href: "/contact" },
    phone: "(850) 902-7480",
  },

  // ── FAQ ──
  faq: [
    { q: "What areas do you serve?",                        a: "We serve Milton, Pace, Navarre, Gulf Breeze, Pensacola, and communities throughout Santa Rosa County and the greater Northwest Florida area." },
    { q: "Are you licensed and insured?",                   a: "Yes. Dactts Construction LLC is a fully licensed and insured general contractor in the state of Florida." },
    { q: "What types of projects do you handle?",           a: "We specialize in luxury new home construction, kitchen and bathroom remodeling, interior renovations, home additions, outdoor living spaces, custom cabinetry, and commercial build-outs." },
    { q: "How long does a typical kitchen remodel take?",   a: "A full custom kitchen remodel typically takes 6–10 weeks depending on the scope of work, material selections, and any structural changes. We'll provide a detailed timeline during your consultation." },
    { q: "Do you provide free estimates?",                  a: "Absolutely. We offer free on-site consultations and detailed written estimates for all projects. Call us at (850) 902-7480 or fill out our contact form to get started." },
    { q: "Can you work with my designer or architect?",     a: "Yes. We regularly collaborate with architects, interior designers, and homeowners who have their own design plans. We can also provide design guidance if needed." },
  ],

  // ── Footer ──
  footer: {
    ownerName: "Dactts Construction LLC",
    address:   "6023 Running Deer Rd, Milton, FL 32570",
    phone:     "(850) 902-7480",
    email:     "",
    socials: {
      google:    "https://google.com/maps/place/Dactts+Construction+LLC",
      facebook:  "",
      instagram: "",
      yelp:      "",
      nextdoor:  "",
    },
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },

  // ── About Page ──
  about: {
    headline: "About Dactts Construction",
    story: "Dactts Construction LLC is a premier general contractor serving Milton and Santa Rosa County, Florida. We specialize in luxury new construction, custom kitchen and bathroom remodeling, and high-end interior renovations. Our team brings years of hands-on experience to every project — from framing a new custom home to installing marble tile in a master bathroom. We believe every homeowner deserves a space that reflects their vision, built with the finest materials and uncompromising attention to detail. That commitment to quality has earned us a perfect 5-star rating on Google and the trust of homeowners across Northwest Florida.",
    mission: "To deliver luxury construction and remodeling that exceeds expectations — on time, on budget, and built to last for generations.",
    values: [
      { icon: "star",      title: "Premium Craftsmanship", desc: "We use top-tier materials and proven techniques to deliver results that stand the test of time." },
      { icon: "handshake", title: "Client-First Approach",  desc: "Your vision drives every decision. We listen, communicate, and deliver exactly what you expect." },
      { icon: "certified", title: "Licensed Professionals",  desc: "Fully licensed and insured with the expertise to handle projects of any scale or complexity." },
      { icon: "shield",    title: "Transparent Process",     desc: "Detailed estimates, clear timelines, and no surprises — we earn your trust through honesty." },
    ],
  },

  // ── Contact Page ──
  contact: {
    headline: "Contact Dactts Construction",
    subheadline: "Ready to start your project? Reach out for a free consultation and estimate.",
    address: "6023 Running Deer Rd, Milton, FL 32570",
    phone:   "(850) 902-7480",
    email:   "",
    hours: [
      "Monday – Saturday: 7:00 AM – 6:00 PM",
      "Sunday: Closed",
    ],
  },

  // ── Service Area ──
  serviceArea: {
    headline: "Serving Milton & Santa Rosa County",
    body: "Dactts Construction LLC proudly serves homeowners and businesses throughout Santa Rosa County and the greater Northwest Florida region. From luxury kitchen remodels in Milton to new home construction in Navarre, we bring 5-star craftsmanship to every project.",
  },

  // ── Service Areas ──
  serviceAreas: [
    { name: "Milton",       slug: "milton",       county: "Santa Rosa County", state: "FL" },
    { name: "Pace",         slug: "pace",         county: "Santa Rosa County", state: "FL" },
    { name: "Navarre",      slug: "navarre",      county: "Santa Rosa County", state: "FL" },
    { name: "Gulf Breeze",  slug: "gulf-breeze",  county: "Santa Rosa County", state: "FL" },
    { name: "Pensacola",    slug: "pensacola",    county: "Escambia County",   state: "FL" },
    { name: "Crestview",    slug: "crestview",    county: "Okaloosa County",   state: "FL" },
    { name: "Fort Walton Beach", slug: "fort-walton-beach", county: "Okaloosa County", state: "FL" },
    { name: "Pensacola Beach",   slug: "pensacola-beach",   county: "Escambia County", state: "FL" },
  ],

  // ── UI ──
  ui: {
    showTrustLogos:  false,
    showProcess:     true,
    showFAQ:         true,
    showStats:       true,
    showOurWork:     true,
    showReviews:     true,
    showServiceAreas: true,
    showAbout:       true,
    showContact:     true,
  },

  // ── Tracking ──
  tracking: {
    gtmId:    "",
    ga4Id:    "",
    fbPixel:  "",
  },

};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
