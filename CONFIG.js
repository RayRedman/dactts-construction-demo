// ==========================================
// SITE CONFIGURATION
// Dactts Construction LLC — Milton, FL
// ==========================================

const CONFIG = {
  // ================================
  // BRAND IDENTITY
  // ================================
  brand: {
    name: "Dactts Construction",
    companySlug: "dactts-construction",
    tagline: "Luxury Building & Remodeling in Santa Rosa County",
    phone: "(850) 902-7480",
    phoneRaw: "8509027480",
    email: "info@dacttsconstruction.com",
    domain: "dacttsconstruction.com",
    trade: "Construction",
    tradeType: "Construction",
    city: "Milton",
    state: "FL",
    address: "6023 Running Deer Rd, Milton, FL 32570",
    fullAddress: "6023 Running Deer Rd, Milton, FL 32570",
    hours: "Mon–Sat | 7AM–6PM",
    license: "Licensed & Insured",
    logo: "assets/clients/active/logo.svg",
    logoIcon: "home",
    favicon: "/favicon.svg",
    yearEstablished: "",
    googleBusinessUrl: "",
  },

  // ================================
  // THEME & COLORS
  // ================================
  theme: {
    primaryColor: "#1A1F2E",
    primaryDark: "#12151F",
    primaryLight: "#2A3045",
    accentColor: "#B8860B",
    accentDark: "#946C09",
    accentLight: "#D4A02E",
    gold: "#B8860B",
    green: "#28A745",
    gradientPrimary: "#1A1F2E",
    gradientAccent: "#B8860B",
    glassBg: "rgba(255, 255, 255, 1)",
    shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },

  // ================================
  // NAVIGATION
  // ================================
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Our Work", href: "our-work.html" },
    { label: "Services", type: "servicesDropdown" },
    { label: "Service Areas", type: "serviceAreasDropdown" },
    { label: "Contact", href: "contact.html" },
  ],

  // ================================
  // TOP BAR
  // ================================
  topBar: {
    emergencyText: "Luxury Construction & Remodeling — Milton, FL",
    showAddress: true,
    showHours: true,
    phoneLabel: "Call Now - Free Estimate",
  },

  // ==========================================
  // PROMO BANNER
  // ==========================================
  promoBanner: {
    enabled: false,
    text: "",
    linkText: "",
    linkHref: "#quote",
  },

  // ==========================================
  // TRUST LOGOS
  // ==========================================
  trustLogos: {
    enabled: true,
    title: "Trusted & Certified",
    logos: [
      { name: "Google", rating: "5.0" },
      { name: "BBB", rating: "A+" },
      { name: "HomeAdvisor", rating: null },
      { name: "Angi", rating: null },
    ],
  },

  // ==========================================
  // SEO
  // ==========================================
  seo: {
    home: {
      title: "Dactts Construction LLC | Luxury Builder & Remodeler in Milton, FL",
      description: "Milton's premier luxury builder. Custom kitchens, bathroom remodeling, new home construction & high-end renovations. 5.0★ on Google. Call (850) 902-7480.",
    },
    about: {
      title: "About Us | Dactts Construction — Milton, FL",
      description: "Meet the Dactts Construction team — luxury builders serving Milton and Santa Rosa County with 5-star craftsmanship. Custom homes, kitchens, bathrooms & more.",
    },
    services: {
      title: "Services | Dactts Construction — Milton, FL",
      description: "Premium construction services: custom kitchens, bathroom remodeling, new homes, additions, outdoor living, cabinetry & commercial build-outs in Milton, FL.",
    },
    contact: {
      title: "Contact | Dactts Construction — Milton, FL",
      description: "Ready to build? Call (850) 902-7480 or request a free estimate. Luxury construction & remodeling in Milton and Santa Rosa County.",
    },
    serviceArea: {
      title: "Service Areas | Dactts Construction — Milton, FL",
      description: "Luxury construction services in Milton, Pace, Navarre, Gulf Breeze, Pensacola & Santa Rosa County. Custom homes and high-end remodeling.",
    },
    ourWork: {
      title: "Our Work | Dactts Construction — Milton, FL",
      description: "See our portfolio of luxury kitchens, bathrooms, custom homes, and renovations in Milton and Santa Rosa County.",
    },
  },

  // ==========================================
  // IMAGES
  // ==========================================
  images: {
    basePath: "/assets/clients/active/",
    hero: "/assets/clients/active/2024-08-05.webp",
    about: "/assets/clients/active/2024-08-05 (3).webp",
    whyUs: "/assets/clients/active/2024-08-05 (4).webp",
    contact: "/assets/clients/active/2025-12-02.webp",
    og: "/assets/clients/active/2024-08-05.webp",
    favicon: "/favicon.svg",

    services: {
      "custom-kitchen-remodeling": "/assets/clients/active/2025-11-29.webp",
      "bathroom-remodeling": "/assets/clients/active/2024-08-05 (4).webp",
      "new-home-construction": "/assets/clients/active/2024-08-05 (3).webp",
      "home-additions": "/assets/clients/active/2025-12-10.webp",
      "interior-renovations": "/assets/clients/active/2024-08-05 (8).webp",
      "outdoor-living-spaces": "/assets/clients/active/2024-08-05 (7).webp",
      "custom-cabinetry-closets": "/assets/clients/active/2024-08-05 (5).webp",
      "commercial-build-outs": "/assets/clients/active/2025-12-06.webp",
    },

    gallery: {
      enabled: true,
      title: "Recent Work",
      subtitle: "Luxury builds and renovations completed by our team",
      items: [
        { src: "/assets/clients/active/2024-08-05.webp", alt: "Modern kitchen with quartz waterfall island" },
        { src: "/assets/clients/active/2025-11-29.webp", alt: "Luxury kitchen with marble island and beam ceiling" },
        { src: "/assets/clients/active/2024-08-05 (4).webp", alt: "Master bathroom with marble walk-in shower" },
        { src: "/assets/clients/active/2024-08-05 (8).webp", alt: "Living room with coffered ceiling and hardwood floors" },
        { src: "/assets/clients/active/2025-12-02.webp", alt: "Farmhouse kitchen with navy island and vaulted ceiling" },
        { src: "/assets/clients/active/2024-08-05 (1).webp", alt: "Custom home exterior with stone facade at twilight" },
        { src: "/assets/clients/active/2025-12-07.webp", alt: "Formal living room with columns and French doors" },
        { src: "/assets/clients/active/2025-12-06.webp", alt: "Game room with pool table and wet bar" },
        { src: "/assets/clients/active/2025-11-27.webp", alt: "Open plan kitchen and living area" },
        { src: "/assets/clients/active/2024-08-05 (6).webp", alt: "Luxury bathroom with marble mosaic floor" },
        { src: "/assets/clients/active/2025-12-10.webp", alt: "Grand foyer with columns and arched ceiling" },
        { src: "/assets/clients/active/2024-08-05 (9).webp", alt: "Modern kitchen with gray counters" },
      ],
    },
    fallback: "/assets/clients/active/2024-08-05.webp",
  },

  // ==========================================
  // HERO
  // ==========================================
  hero: {
    label: "Milton's Premier Luxury Builder",
    badge: "Licensed & Insured",
    headline: "Luxury Construction",
    headlineAccent: "& Remodeling Done Right",
    subhead: "From stunning custom kitchens to whole-home renovations — Dactts Construction builds spaces that exceed expectations. Serving Milton and Santa Rosa County with 5-star craftsmanship.",
    features: [
      "Free Estimates",
      "Custom Homes & Renovations",
      "Premium Materials"
    ],
    trustStrip: {
      enabled: true,
      items: [
        "Licensed & Insured",
        "5.0 ★ Google Rating",
        "15+ Five-Star Reviews",
        "Custom Homes & Remodeling",
        "Serving Santa Rosa County",
      ],
    },
    guaranteeBadge: {
      enabled: false,
      text: "",
      subtext: "",
    },
    ctaPrimary: {
      text: "Get a Free Estimate",
      href: "#quote",
    },
  },

  // ==========================================
  // LEAD CAPTURE FORM
  // ==========================================
  form: {
    title: "Get a Free Construction Estimate",
    subtitle: "Tell us about your project and we'll get back to you within 24 hours.",
    formTitle: "Get Your Free Estimate",
    formSubtitle: "No spam, no hassle — just honest pricing",
    responseBadge: "Fast Response Time",
    phoneCtaLabel: "Prefer to talk? Call us now:",
    submitText: "Get My Free Estimate",
    privacyText: "Your information is secure and never shared.",
    messagePlaceholder: "What's the project? (kitchen remodel, bathroom renovation, new home, addition, etc.)",
    consentText: "I agree to receive text messages and calls about my inquiry.",
    ghlWebhook: "https://services.leadconnectorhq.com/hooks/REPLACE_WITH_YOUR_WEBHOOK",
    successMessage: "Thanks — we got it. We'll be in touch shortly.",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Your Name", required: true },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "(850) 902-7480", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: false },
    ],
    showServiceDropdown: true,
    features: [
      "Free Estimates",
      "Custom Design",
      "Premium Craftsmanship",
      "Licensed & Insured",
    ],
  },

  // ==========================================
  // TRUST BADGES
  // ==========================================
  trustBadges: [
    { icon: "star", text: "5.0 Star Rated" },
    { icon: "shield", text: "Licensed & Insured" },
    { icon: "clock", text: "On-Time Delivery" },
    { icon: "check", text: "Quality Guaranteed" },
  ],

  // ==========================================
  // SERVICES
  // ==========================================
  services: {
    title: "Our Services",
    subtitle: "Premium construction and remodeling services tailored to your vision",
    viewAllText: "View All Services",
    viewAllLink: "services.html",
    learnMoreText: "Learn More",
    items: [
      {
        id: "custom-kitchen-remodeling",
        title: "Custom Kitchen Remodeling",
        shortDesc: "Waterfall islands, professional-grade appliances, custom cabinetry — we build kitchens that are the heart of your home.",
        fullDesc: "Our custom kitchen remodels transform outdated spaces into luxury cooking and entertaining areas. From quartz waterfall islands and shaker cabinetry to professional ranges and designer pendant lighting, every detail is carefully planned and expertly installed. We handle full gut renovations and targeted upgrades throughout Milton and Santa Rosa County.",
        icon: "tool",
        image: "/assets/clients/active/2025-11-29.webp",
        features: [
          "Quartz & Marble Countertops",
          "Custom Cabinetry",
          "Professional Appliances",
          "Full Gut Renovations",
        ],
      },
      {
        id: "bathroom-remodeling",
        title: "Bathroom Remodeling",
        shortDesc: "Marble tile showers, rain heads, double vanities — spa-quality bathrooms built to last.",
        fullDesc: "We design and build luxury bathrooms that feel like a private retreat. Our bathroom remodels include walk-in marble tile showers with frameless glass, custom double vanities, freestanding tubs, and modern fixtures. From master suites to guest baths, Dactts Construction delivers premium quality in every bathroom renovation across Santa Rosa County.",
        icon: "droplet",
        image: "/assets/clients/active/2024-08-05 (4).webp",
        features: [
          "Marble Tile Showers",
          "Custom Double Vanities",
          "Frameless Glass Enclosures",
          "Modern Fixtures & Hardware",
        ],
      },
      {
        id: "new-home-construction",
        title: "New Home Construction",
        shortDesc: "Custom-built homes from the ground up — designed around your lifestyle and built to the highest standards.",
        fullDesc: "Dactts Construction builds custom homes that reflect your unique vision. From foundation to finish, we manage every phase of new construction including site prep, framing, electrical, plumbing, and luxury interior finishes. Our new builds in Milton and surrounding areas feature quality materials, energy-efficient systems, and the attention to detail that defines our work.",
        icon: "home",
        image: "/assets/clients/active/2024-08-05 (3).webp",
        features: [
          "Custom Floor Plans",
          "Energy-Efficient Systems",
          "Premium Interior Finishes",
          "Full Project Management",
        ],
      },
      {
        id: "home-additions",
        title: "Home Additions",
        shortDesc: "More space without moving — seamless additions that match your existing home perfectly.",
        fullDesc: "Need more room? Our home additions expand your living space while maintaining the architectural integrity of your existing home. Whether it's a new master suite, expanded living area, or bonus room, we handle structural engineering, permits, and construction from start to finish. Every addition blends seamlessly with your home's existing design.",
        icon: "home",
        image: "/assets/clients/active/2025-12-10.webp",
        features: [
          "Master Suite Additions",
          "Bonus Rooms",
          "Seamless Integration",
          "Permit Coordination",
        ],
      },
      {
        id: "interior-renovations",
        title: "Interior Renovations",
        shortDesc: "Coffered ceilings, hardwood floors, custom built-ins — transforming interiors into luxury living spaces.",
        fullDesc: "From coffered ceilings and crown molding to cherry hardwood floors and custom built-in cabinetry, our interior renovations elevate your home's style and functionality. We specialize in whole-home renovations that update every surface and system while preserving the character of your space. Serving homeowners throughout Milton and Santa Rosa County.",
        icon: "tool",
        image: "/assets/clients/active/2024-08-05 (8).webp",
        features: [
          "Coffered Ceilings & Crown Molding",
          "Hardwood Floor Installation",
          "Custom Built-In Cabinetry",
          "Whole-Home Renovations",
        ],
      },
      {
        id: "outdoor-living-spaces",
        title: "Outdoor Living Spaces",
        shortDesc: "Screened patios, covered lanais, and outdoor kitchens — extend your living space outdoors.",
        fullDesc: "Make the most of Florida living with custom outdoor spaces. We build screened-in patios, covered lanais with ceiling fans, outdoor kitchens, and entertainment areas designed for year-round enjoyment. Our outdoor construction includes proper drainage, hurricane-rated materials, and finishes that withstand the Gulf Coast climate.",
        icon: "home",
        image: "/assets/clients/active/2024-08-05 (7).webp",
        features: [
          "Screened-In Patios",
          "Covered Lanais",
          "Outdoor Kitchens",
          "Hurricane-Rated Materials",
        ],
      },
      {
        id: "custom-cabinetry-closets",
        title: "Custom Cabinetry & Closets",
        shortDesc: "Built-in closet systems, entertainment centers, and custom storage solutions crafted to fit your space.",
        fullDesc: "Our custom cabinetry and closet systems maximize your storage while adding beauty to every room. From walk-in closets with built-in organizers to entertainment centers, wet bars, and pantry systems, we design and install storage solutions that are as functional as they are beautiful. Every piece is built to fit your exact specifications.",
        icon: "settings",
        image: "/assets/clients/active/2024-08-05 (5).webp",
        features: [
          "Walk-In Closet Systems",
          "Entertainment Centers",
          "Wet Bars & Wine Storage",
          "Custom Pantry Solutions",
        ],
      },
      {
        id: "commercial-build-outs",
        title: "Commercial Build-Outs",
        shortDesc: "Professional commercial construction — offices, retail spaces, and tenant improvements built on schedule.",
        fullDesc: "Dactts Construction brings the same quality and attention to detail to commercial projects. We handle office build-outs, retail spaces, restaurant renovations, and tenant improvements across Santa Rosa County. Our commercial team manages permits, inspections, and construction timelines to minimize disruption and deliver on budget.",
        icon: "home",
        image: "/assets/clients/active/2025-12-06.webp",
        features: [
          "Office Build-Outs",
          "Retail Spaces",
          "Restaurant Renovations",
          "Tenant Improvements",
        ],
      },
    ],
  },

  // ==========================================
  // PROCESS / HOW IT WORKS
  // ==========================================
  process: {
    label: "How It Works",
    title: "Simple & Easy Process",
    steps: [
      {
        number: "1",
        title: "Free Consultation",
        desc: "Call us or fill out our form. We'll discuss your vision, visit your property, and provide a detailed estimate — all at no cost.",
      },
      {
        number: "2",
        title: "Design & Planning",
        desc: "We work with you to finalize designs, select materials, and create a clear project timeline before any work begins.",
      },
      {
        number: "3",
        title: "Expert Construction",
        desc: "Our skilled team brings your project to life with premium materials, clean job sites, and constant communication throughout.",
      },
    ],
  },

  // ==========================================
  // WHY CHOOSE US
  // ==========================================
  whyUs: {
    title: "Why Homeowners Choose Dactts Construction",
    subtitle: "Premium craftsmanship and attention to detail on every project.",
    image: null,
    items: [
      {
        icon: "star",
        title: "5-Star Quality",
        description: "Every project reflects our commitment to premium craftsmanship — 15 five-star reviews and counting.",
      },
      {
        icon: "shield",
        title: "Licensed & Insured",
        description: "Fully licensed general contractor with comprehensive insurance coverage for your complete peace of mind.",
      },
      {
        icon: "check",
        title: "Attention to Detail",
        description: "From tile grout lines to ceiling trim, we obsess over the details that separate good work from exceptional work.",
      },
      {
        icon: "tool",
        title: "Full-Service Builder",
        description: "One team handles everything — design, demolition, construction, and finishing — so your project stays on track.",
      },
    ],
  },

  // ==========================================
  // OUR WORK / GALLERY
  // ==========================================
  ourWork: {
    label: "Our Work",
    title: "Recent Projects",
    subtitle: "See the luxury craftsmanship we bring to every build and renovation.",
  },

  // ==========================================
  // STATISTICS
  // ==========================================
  stats: [
    { value: "15+", label: "5-Star Reviews" },
    { value: "5.0", label: "Google Rating" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "10+", label: "Years Experience" },
  ],

  // ==========================================
  // REVIEWS
  // ==========================================
  reviews: {
    title: "What Our Clients Say",
    subtitle: "Real reviews from real homeowners",
    google: {
      enabled: true,
      rating: 5.0,
      reviewCount: 15,
      url: "",
    },
    items: [
      {
        text: "Dactts Construction did an incredible job on our kitchen remodel. The waterfall island and custom cabinetry turned out even better than we imagined. Professional from start to finish.",
        author: "Google Reviewer",
        location: "Milton, FL",
        rating: 5,
        avatar: null,
      },
      {
        text: "We hired them for a full bathroom renovation and couldn't be happier. The marble tile work is flawless and they finished on schedule. Highly recommend for any luxury remodel.",
        author: "Google Reviewer",
        location: "Milton, FL",
        rating: 5,
        avatar: null,
      },
      {
        text: "From the initial consultation to the final walkthrough, Dactts Construction exceeded our expectations. The attention to detail on our whole-home renovation was outstanding. Five stars all the way.",
        author: "Google Reviewer",
        location: "Pace, FL",
        rating: 5,
        avatar: null,
      },
    ],
  },

  // ==========================================
  // CTA SECTION
  // ==========================================
  cta: {
    title: "Ready to Build Something Extraordinary?",
    subtitle: "Whether it's a custom kitchen, luxury bathroom, or a brand-new home — we bring your vision to life.",
    buttonText: "Get a Free Estimate",
    buttonLink: "contact.html",
    showPhone: true,
  },

  // ==========================================
  // FAQ
  // ==========================================
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Got questions? We've got answers.",
    items: [
      {
        question: "What areas do you serve?",
        answer: "We serve Milton, Pace, Navarre, Gulf Breeze, Pensacola, and communities throughout Santa Rosa County and the greater Northwest Florida area.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. Dactts Construction LLC is a fully licensed and insured general contractor in the state of Florida.",
      },
      {
        question: "What types of projects do you handle?",
        answer: "We specialize in luxury new home construction, kitchen and bathroom remodeling, interior renovations, home additions, outdoor living spaces, custom cabinetry, and commercial build-outs.",
      },
      {
        question: "How long does a typical kitchen remodel take?",
        answer: "A full custom kitchen remodel typically takes 6–10 weeks depending on the scope of work, material selections, and any structural changes. We'll provide a detailed timeline during your consultation.",
      },
      {
        question: "Do you provide free estimates?",
        answer: "Absolutely. We offer free on-site consultations and detailed written estimates for all projects. Call us at (850) 902-7480 or fill out our contact form to get started.",
      },
      {
        question: "Can you work with my designer or architect?",
        answer: "Yes. We regularly collaborate with architects, interior designers, and homeowners who have their own design plans. We can also provide design guidance if needed.",
      },
    ],
  },

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    description: "Milton's premier luxury builder. Custom kitchens, bathroom remodeling, new home construction, and high-end renovations. Serving Milton and all of Santa Rosa County.",
    copyrightYear: new Date().getFullYear(),
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", href: "index.html" },
      { label: "Our Work", href: "our-work.html" },
      { label: "Contact", href: "contact.html" },
    ],
    contactTitle: "Contact Us",
    socialTitle: "Follow Us",
    socialLinks: [
      { platform: "facebook", url: "", icon: "facebook" },
      { platform: "instagram", url: "", icon: "instagram" },
      { platform: "google", url: "", icon: "google" },
    ],
  },

  // ==========================================
  // ABOUT PAGE
  // ==========================================
  about: {
    title: "About Dactts Construction",
    subtitle: "Luxury building & remodeling in Santa Rosa County",
    story: {
      title: "Our Story",
      image: null,
      paragraphs: [
        "Dactts Construction LLC is a premier general contractor serving Milton and Santa Rosa County, Florida. We specialize in luxury new construction, custom kitchen and bathroom remodeling, and high-end interior renovations.",
        "Our team brings years of hands-on experience to every project — from framing a new custom home to installing marble tile in a master bathroom. We believe every homeowner deserves a space that reflects their vision, built with the finest materials and uncompromising attention to detail.",
        "That commitment to quality has earned us a perfect 5-star rating on Google and the trust of homeowners across Northwest Florida.",
      ],
    },
    values: {
      title: "Why We're Different",
      subtitle: "What sets Dactts Construction apart",
      items: [
        {
          icon: "star",
          title: "Premium Craftsmanship",
          description: "We use top-tier materials and proven techniques to deliver results that stand the test of time.",
        },
        {
          icon: "check",
          title: "Client-First Approach",
          description: "Your vision drives every decision. We listen, communicate, and deliver exactly what you expect.",
        },
        {
          icon: "shield",
          title: "Transparent Process",
          description: "Detailed estimates, clear timelines, and no surprises — we earn your trust through honesty.",
        },
      ],
    },
    team: {
      title: "Meet Our Team",
      subtitle: "The experts behind Dactts Construction",
      showTeam: false,
      members: [],
    },
  },

  // ==========================================
  // CONTACT PAGE
  // ==========================================
  contact: {
    title: "Contact Us",
    subtitle: "Ready to start your project? We're a call or text away.",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55000!2d-87.05!3d30.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890e6b6e8e1e8b7%3A0xc2c5b3df9c5db5b5!2sMilton%2C%20FL!5e0!3m2!1sen!2sus",
    infoTitle: "Get In Touch",
    infoSubtitle: "Have a project in mind? We'd love to hear about it.",
    hoursTitle: "Business Hours",
    hours: [
      { days: "Monday - Saturday", time: "7:00 AM – 6:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    emergencyNote: "Call us to discuss your project",
    formTitle: "Request an Estimate",
    formSubtitle: "We'll get back to you as soon as possible",
    formFields: [
      { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
      { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
      { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
      { name: "address", type: "text", placeholder: "Project Address", required: false, halfWidth: false },
      { name: "message", type: "textarea", placeholder: "Tell us about your project", required: false, halfWidth: false, rows: 4 },
    ],
    formSubmitText: "Request Estimate",
  },

  // ==========================================
  // SERVICE AREA PAGE
  // ==========================================
  serviceArea: {
    title: "Areas We Serve",
    subtitle: "Luxury construction services throughout Santa Rosa County and Northwest Florida",
    description: "We provide premium construction and remodeling services throughout Santa Rosa County and surrounding communities. If you don't see your area listed, give us a call — we may still be able to help!",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55000!2d-87.05!3d30.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890e6b6e8e1e8b7%3A0xc2c5b3df9c5db5b5!2sMilton%2C%20FL!5e0!3m2!1sen!2sus",
    primaryAreas: {
      title: "Primary Service Areas",
      subtitle: "Fast response typically available",
      areas: [
        "Milton",
        "Pace",
        "Navarre",
        "Gulf Breeze",
      ],
    },
    secondaryAreas: {
      title: "Extended Service Areas",
      subtitle: "Service available throughout Northwest Florida",
      areas: [
        "Pensacola",
        "Crestview",
        "Fort Walton Beach",
        "Pensacola Beach",
      ],
    },
    ctaTitle: "Not Sure If We Service Your Area?",
    ctaSubtitle: "Give us a call and we'll let you know!",
  },

  // ==========================================
  // INDIVIDUAL SERVICE AREA PAGES
  // ==========================================
  serviceAreas: [
    {
      id: "milton",
      name: "Milton",
      slug: "milton",
      headline: "Luxury Builder in Milton, FL",
      description: "Dactts Construction serves Milton with premium custom homes, kitchen remodeling, bathroom renovations, and high-end interior work.",
      features: [
        "Free estimates",
        "Custom homes & renovations",
        "Licensed & insured",
        "5-star craftsmanship",
      ],
      neighborhoods: [
        "Downtown Milton",
        "East Milton",
        "Bagdad",
        "Munson",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Milton,+FL&output=embed",
    },
    {
      id: "pace",
      name: "Pace",
      slug: "pace",
      headline: "Luxury Builder in Pace, FL",
      description: "Premium construction and remodeling services in Pace. Custom kitchens, bathrooms, home additions, and new construction.",
      features: [
        "Free estimates",
        "Premium materials",
        "On-time completion",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Pace",
        "Pea Ridge",
        "Wallace",
        "Floridatown",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Pace,+FL&output=embed",
    },
    {
      id: "navarre",
      name: "Navarre",
      slug: "navarre",
      headline: "Luxury Builder in Navarre, FL",
      description: "Custom home construction and luxury remodeling in Navarre. Kitchens, bathrooms, additions, and outdoor living spaces.",
      features: [
        "Free estimates",
        "Custom design",
        "Licensed & insured",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Navarre",
        "Navarre Beach",
        "Holley",
        "Midway",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Navarre,+FL&output=embed",
    },
    {
      id: "gulf-breeze",
      name: "Gulf Breeze",
      slug: "gulf-breeze",
      headline: "Luxury Builder in Gulf Breeze, FL",
      description: "High-end construction services in Gulf Breeze. Kitchen remodeling, bathroom renovations, custom cabinetry, and more.",
      features: [
        "Free estimates",
        "Luxury finishes",
        "Professional results",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Gulf Breeze",
        "Gulf Breeze Proper",
        "Oriole Beach",
        "Tiger Point",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Gulf+Breeze,+FL&output=embed",
    },
    {
      id: "pensacola",
      name: "Pensacola",
      slug: "pensacola",
      headline: "Luxury Builder in Pensacola, FL",
      description: "Dactts Construction serves Pensacola with custom home construction, luxury remodeling, and commercial build-outs.",
      features: [
        "Free estimates",
        "Residential & commercial",
        "Licensed & insured",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "East Hill",
        "North Hill",
        "Downtown Pensacola",
        "Cordova Park",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Pensacola,+FL&output=embed",
    },
    {
      id: "crestview",
      name: "Crestview",
      slug: "crestview",
      headline: "Luxury Builder in Crestview, FL",
      description: "Premium construction services in Crestview. New homes, kitchen remodeling, interior renovations, and more.",
      features: [
        "Free estimates",
        "New construction",
        "Quality materials",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Downtown Crestview",
        "Foxwood",
        "Deerfield",
        "Baker",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Crestview,+FL&output=embed",
    },
    {
      id: "fort-walton-beach",
      name: "Fort Walton Beach",
      slug: "fort-walton-beach",
      headline: "Luxury Builder in Fort Walton Beach, FL",
      description: "Custom construction and luxury remodeling in Fort Walton Beach. Kitchens, bathrooms, additions, and commercial projects.",
      features: [
        "Free estimates",
        "Coastal construction",
        "Premium finishes",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Downtown FWB",
        "Wright",
        "Mary Esther",
        "Shalimar",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Fort+Walton+Beach,+FL&output=embed",
    },
    {
      id: "pensacola-beach",
      name: "Pensacola Beach",
      slug: "pensacola-beach",
      headline: "Luxury Builder in Pensacola Beach, FL",
      description: "High-end coastal construction and remodeling on Pensacola Beach. Waterfront homes, renovations, and outdoor living.",
      features: [
        "Free estimates",
        "Coastal expertise",
        "Hurricane-rated construction",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Pensacola Beach",
        "Via de Luna",
        "Quietwater",
        "Fort Pickens Area",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Pensacola+Beach,+FL&output=embed",
    },
  ],

  // ==========================================
  // UI TEXT
  // ==========================================
  ui: {
    callNow: "Call Now",
    callNowShort: "Call Now",
    freeQuoteShort: "Free Estimate",
    phoneLabel: "Call Now - Free Estimate",
    getQuote: "Get Estimate",
    learnMore: "Learn More",
    viewAll: "View All",
    readMore: "Read More",
    submitForm: "Submit",
    loading: "Loading...",
    success: "Success!",
    error: "Something went wrong. Please try again.",
    required: "Required",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    emergencyService: "Luxury Construction & Remodeling",
    freeEstimate: "Free Estimate",
    satisfactionGuarantee: "Satisfaction Guaranteed",
  },

  // ==========================================
  // TRACKING / ANALYTICS
  // ==========================================
  tracking: {
    gtm: "",
    ga4: "",
    fbPixel: "",
  },
};

// Make CONFIG globally available
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
