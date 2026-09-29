// Central, editable site configuration and CMS content.
// All business details for Interstate Fence & Construction Company, Inc.
// Geneseo, Illinois. Adjust these values to manage site content.

export const business = {
  name: "Interstate Fence & Construction Company, Inc.",
  shortName: "Interstate Fence",
  city: "Geneseo",
  state: "Illinois",
  location: "Geneseo, Illinois",
  phone: "309-944-3585",
  phoneHref: "tel:3099443585",
  email: "troy@interstate-fence.com",
  emailHref: "mailto:troy@interstate-fence.com",
  primaryContact: "Troy",
  // Verified service categories only — no fabricated awards/certifications.
  categories: ["Residential", "Commercial", "Industrial", "Custom Solutions"],
  hours: "Mon–Fri 8:00 AM – 5:00 PM",
  estSince: "", // intentionally blank; do not fabricate years in business
  social: {
    facebook: "",
    instagram: "",
  },
};

export const brand = {
  colors: {
    charcoal: "#202124",
    graphite: "#303238",
    cedar: "#9A6844",
    sand: "#D7C1A4",
    offwhite: "#F5F2EC",
  },
  // Signature CTA
  primaryCta: { label: "Get a Free Estimate", href: "/contact" },
  secondaryCta: { label: "Call 309-944-3585", href: "tel:3099443585" },
};

// Desktop + mobile navigation. Every href is a real, built route.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/our-process" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Our Process", href: "/our-process" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Wood Fencing", href: "/services/wood-fencing" },
      { label: "Vinyl Fencing", href: "/services/vinyl-fencing" },
      { label: "Aluminum Fencing", href: "/services/aluminum-fencing" },
      { label: "Chain Link Fencing", href: "/services/chain-link-fencing" },
      { label: "Railing", href: "/services/railing" },
      { label: "Custom Fencing", href: "/services/custom-fencing" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Residential", href: "/residential" },
      { label: "Commercial", href: "/commercial" },
      { label: "Pricing Estimator", href: "/pricing" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

// ---------- Services ----------
export type ServiceSlug =
  | "wood-fencing"
  | "vinyl-fencing"
  | "aluminum-fencing"
  | "chain-link-fencing"
  | "railing"
  | "custom-fencing"
  | "commercial-industrial";

export interface ServiceSection {
  title: string;
  body: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  image: string;
  categories: string[];
  audience: "Residential" | "Commercial" | "Both";
  sections: ServiceSection[];
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaContext: string; // used to prefill contact form
}

export const services: Service[] = [
  {
    slug: "wood-fencing",
    name: "Wood Fencing",
    shortName: "Wood",
    tagline: "Custom wood fencing with character and strength.",
    summary:
      "Natural, warm, and endlessly customizable — wood remains a favorite for privacy, property definition, and classic curb appeal across Geneseo and nearby communities.",
    image: "/images/wood.jpg",
    categories: ["Wood", "Residential"],
    audience: "Residential",
    sections: [
      {
        title: "Natural Appearance",
        body: "Wood brings warmth and texture that complements landscaping, brick, and stone. Each board is selected for consistent grain and tone.",
      },
      {
        title: "Customization",
        body: "Choose privacy, picket, shadowbox, board-on-board, or horizontal layouts. We tailor heights, spacing, and cap details to your property.",
      },
      {
        title: "Privacy",
        body: "Solid wood construction creates a quiet, private backyard retreat while defining clear property boundaries.",
      },
      {
        title: "Property Adaptability",
        body: "Slopes, tight setback lines, and irregular yards are handled with stepped and racked installations.",
      },
      {
        title: "Installation Quality",
        body: "Proper post setting, spacing, and hardware selection are what keep a wood fence standing straight for years.",
      },
      {
        title: "Maintenance Considerations",
        body: "Wood benefits from periodic sealing or staining to manage weathering. We discuss finish options during planning.",
      },
    ],
    benefits: [
      "Privacy and noise reduction",
      "Warm, natural curb appeal",
      "Fully customizable layouts",
      "Pet- and family-friendly yards",
    ],
    ctaLabel: "Design Your Wood Fence",
    ctaHref: "/contact?service=wood-fencing",
    ctaContext: "wood-fencing",
  },
  {
    slug: "vinyl-fencing",
    name: "Vinyl Fencing",
    shortName: "Vinyl",
    tagline: "Clean, durable vinyl fencing with less maintenance.",
    summary:
      "Vinyl delivers a consistently clean look with minimal upkeep — a practical choice for homeowners who want privacy and definition without regular painting or staining.",
    image: "/images/vinyl.jpg",
    categories: ["Vinyl", "Residential"],
    audience: "Residential",
    sections: [
      {
        title: "Durability",
        body: "Vinyl resists rot, insects, and warping. It stands up to Midwest weather when installed with proper reinforcement.",
      },
      {
        title: "Low Maintenance",
        body: "Occasional rinsing keeps vinyl looking fresh — no painting or staining required.",
      },
      {
        title: "Privacy",
        body: "Solid and semi-private profiles provide screening comparable to wood with a cleaner, uniform face.",
      },
      {
        title: "Family & Pet Use",
        body: "Smooth, splinter-free surfaces are comfortable around children and pets.",
      },
      {
        title: "Installation Quality",
        body: "Correct post depth, routing, and bracing are essential for a vinyl fence that stays plumb and quiet.",
      },
    ],
    benefits: [
      "Minimal maintenance",
      "Consistent, clean appearance",
      "Resists rot and insects",
      "Great for families and pets",
    ],
    ctaLabel: "Get a Vinyl Estimate",
    ctaHref: "/contact?service=vinyl-fencing",
    ctaContext: "vinyl-fencing",
  },
  {
    slug: "aluminum-fencing",
    name: "Aluminum Fencing",
    shortName: "Aluminum",
    tagline: "Architectural aluminum fencing with lasting appeal.",
    summary:
      "Ornamental aluminum combines open views with a refined, architectural look — ideal for property perimeters, pool areas, and decorative boundaries.",
    image: "/images/aluminum.jpg",
    categories: ["Aluminum", "Residential", "Commercial"],
    audience: "Both",
    sections: [
      {
        title: "Open Views",
        body: "Aluminum's slender profiles preserve sightlines while still marking boundaries clearly.",
      },
      {
        title: "Low Maintenance",
        body: "Powder-coated aluminum resists rust and fading, requiring little more than an occasional wash.",
      },
      {
        title: "Architectural Appearance",
        body: "Flat-top, spear-top, and ornamental styles add a finished, upscale edge to a property.",
      },
      {
        title: "Pool Areas",
        body: "Aluminum is a common choice for pool fencing. Local code requirements should be verified for your specific installation.",
      },
      {
        title: "Gates",
        body: "Matching walk and drive gates keep the line consistent across entries.",
      },
      {
        title: "Installation Precision",
        body: "Accurate measuring and anchoring keep panels level and hardware aligned.",
      },
    ],
    benefits: [
      "Open, refined sightlines",
      "Rust-resistant finish",
      "Architectural curb appeal",
      "Pool and perimeter use",
    ],
    ctaLabel: "Get an Aluminum Estimate",
    ctaHref: "/contact?service=aluminum-fencing",
    ctaContext: "aluminum-fencing",
  },
  {
    slug: "chain-link-fencing",
    name: "Chain Link Fencing",
    shortName: "Chain Link",
    tagline: "Practical security. Professional installation.",
    summary:
      "Chain link remains the workhorse for secure, cost-effective boundaries — from backyards to commercial and industrial sites.",
    image: "/images/chainlink.jpg",
    categories: ["Chain Link", "Residential", "Commercial", "Industrial"],
    audience: "Both",
    sections: [
      {
        title: "Affordability",
        body: "Chain link provides dependable boundary definition at a practical price point.",
      },
      {
        title: "Visibility",
        body: "Open weave keeps sightlines clear — useful for security monitoring and active yards.",
      },
      {
        title: "Security",
        body: "Galvanized and vinyl-coated options, plus privacy slats, tailor the level of screening and protection.",
      },
      {
        title: "Durability",
        body: "Quality fabric and framework resist weather and daily wear.",
      },
      {
        title: "Low Maintenance",
        body: "Few moving parts mean chain link stays functional with minimal attention.",
      },
      {
        title: "Installation",
        body: "Project timelines vary by site conditions; we plan scheduling during the estimate.",
      },
    ],
    benefits: [
      "Cost-effective boundaries",
      "Clear visibility",
      "Galvanized or vinyl-coated",
      "Optional privacy slats",
    ],
    ctaLabel: "Get a Chain Link Estimate",
    ctaHref: "/contact?service=chain-link-fencing",
    ctaContext: "chain-link-fencing",
  },
  {
    slug: "railing",
    name: "Railing",
    shortName: "Railing",
    tagline: "Railing built for safety, detail, and finish.",
    summary:
      "Exterior railing for decks, stairs, porches, and steps — focused on safety, clean lines, and a finished look that matches your fence and home.",
    image: "/images/railing.jpg",
    categories: ["Railing", "Residential", "Commercial"],
    audience: "Both",
    sections: [
      {
        title: "Residential Railing",
        body: "Deck, stair, and porch railings designed to integrate with your home's architecture.",
      },
      {
        title: "Exterior & Safety",
        body: "Safety-oriented railings built to the heights and spacing appropriate for the application.",
      },
      {
        title: "Metal Railing",
        body: "Metal options deliver strength and a clean, modern profile for steps and landings.",
      },
      {
        title: "Custom Railing",
        body: "Mixed materials and decorative details coordinate railing with fencing and trim.",
      },
    ],
    benefits: [
      "Safety-first construction",
      "Deck, stair & porch use",
      "Metal and mixed materials",
      "Matches your fence system",
    ],
    ctaLabel: "Discuss Your Railing Project",
    ctaHref: "/contact?service=railing",
    ctaContext: "railing",
  },
  {
    slug: "custom-fencing",
    name: "Custom Fencing",
    shortName: "Custom",
    tagline: "Have a design in mind? Let's build it.",
    summary:
      "Unique patterns, dimensions, gates, and material combinations for properties that need something specific. Share your inspiration and we'll plan it together.",
    image: "/images/custom.jpg",
    categories: ["Custom", "Residential", "Commercial"],
    audience: "Both",
    sections: [
      {
        title: "Custom Patterns",
        body: "Distinctive layouts and spacing that reflect your style and property.",
      },
      {
        title: "Custom Dimensions",
        body: "Non-standard heights, stepped grades, and site-specific geometry.",
      },
      {
        title: "Custom Gates",
        body: "Feature gates built as focal points, not afterthoughts.",
      },
      {
        title: "Mixed Materials",
        body: "Combine wood, metal, and ornamental elements for a layered look.",
      },
      {
        title: "Decorative Details",
        body: "Caps, inlays, and trim that elevate the finished result.",
      },
      {
        title: "Special Property Conditions",
        body: "Slopes, utilities, and tight access are planned during the consultation.",
      },
    ],
    benefits: [
      "One-of-a-kind designs",
      "Upload your inspiration",
      "Mixed-material builds",
      "Feature gates & details",
    ],
    ctaLabel: "Start Your Custom Build",
    ctaHref: "/contact?service=custom-fencing",
    ctaContext: "custom-fencing",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// ---------- Projects ----------
export interface Project {
  slug: string;
  title: string;
  category: string; // RESIDENTIAL | COMMERCIAL | INDUSTRIAL | CUSTOM
  material: string; // WOOD | VINYL | ALUMINUM | CHAIN LINK | RAILING | CUSTOM
  location: string;
  year: string;
  image: string;
  gallery: string[];
  overview: string;
  challenge: string;
  solution: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "geneseo-backyard-privacy",
    title: "Backyard Privacy Retreat",
    category: "RESIDENTIAL",
    material: "WOOD",
    location: "Geneseo, IL",
    year: "2024",
    image: "/images/wood.jpg",
    gallery: ["/images/wood.jpg", "/images/custom.jpg"],
    overview:
      "A full backyard enclosure that turned an open lot into a private, comfortable outdoor living space.",
    challenge:
      "The property sat on a visible corner with frequent foot traffic and an uneven grade along the rear line.",
    solution:
      "We installed a board-on-board wood privacy fence with stepped panels to follow the slope, plus a matching gate for yard access.",
    featured: true,
  },
  {
    slug: "vinyl-pool-enclosure",
    title: "Vinyl Pool Enclosure",
    category: "RESIDENTIAL",
    material: "VINYL",
    location: "Geneseo, IL",
    year: "2024",
    image: "/images/vinyl.jpg",
    gallery: ["/images/vinyl.jpg", "/images/aluminum.jpg"],
    overview:
      "A clean, low-maintenance vinyl fence enclosing a backyard pool and patio area.",
    challenge:
      "The homeowner wanted a consistent, splinter-free boundary around an active pool and play area.",
    solution:
      "A semi-private vinyl profile delivered screening and a uniform face, with reinforced posts sized for the local environment.",
    featured: true,
  },
  {
    slug: "ornamental-aluminum-perimeter",
    title: "Ornamental Aluminum Perimeter",
    category: "RESIDENTIAL",
    material: "ALUMINUM",
    location: "Geneseo, IL",
    year: "2023",
    image: "/images/aluminum.jpg",
    gallery: ["/images/aluminum.jpg", "/images/railing.jpg"],
    overview:
      "A spear-top aluminum fence defining a front property line while preserving open sightlines.",
    challenge:
      "The client wanted security and definition without blocking the architectural view of the home.",
    solution:
      "Powder-coated ornamental aluminum with matching walk gates kept the line refined and consistent.",
    featured: true,
  },
  {
    slug: "commercial-yard-chain-link",
    title: "Commercial Yard Chain Link",
    category: "COMMERCIAL",
    material: "CHAIN LINK",
    location: "Geneseo, IL",
    year: "2023",
    image: "/images/chainlink.jpg",
    gallery: ["/images/chainlink.jpg", "/images/commercial.jpg"],
    overview:
      "A durable chain link boundary securing a local commercial property and equipment yard.",
    challenge:
      "The site needed a secure perimeter on a practical budget with clear visibility for monitoring.",
    solution:
      "Galvanized chain link with vinyl-coated option and a vehicle gate provided dependable, low-maintenance security.",
    featured: true,
  },
  {
    slug: "industrial-perimeter-fence",
    title: "Industrial Perimeter Fence",
    category: "INDUSTRIAL",
    material: "CHAIN LINK",
    location: "Geneseo, IL",
    year: "2023",
    image: "/images/commercial.jpg",
    gallery: ["/images/commercial.jpg", "/images/chainlink.jpg"],
    overview:
      "A heavy-duty perimeter installation for an industrial site requiring controlled access.",
    challenge:
      "Long runs, utility considerations, and gate access for equipment all needed coordination.",
    solution:
      "We planned layout and gate placement during the consultation, then installed reinforced fabric and framework.",
    featured: false,
  },
  {
    slug: "mixed-material-feature-fence",
    title: "Mixed-Material Feature Fence",
    category: "CUSTOM",
    material: "CUSTOM",
    location: "Geneseo, IL",
    year: "2024",
    image: "/images/custom.jpg",
    gallery: ["/images/custom.jpg", "/images/wood.jpg", "/images/aluminum.jpg"],
    overview:
      "A custom front fence combining wood and ornamental metal for a distinctive entry statement.",
    challenge:
      "The homeowner wanted a one-of-a-kind look that balanced privacy near the home with open character at the street.",
    solution:
      "We blended wood panels with metal accents and a feature gate built as a focal point of the design.",
    featured: true,
  },
  {
    slug: "deck-railing-replacement",
    title: "Deck Railing Replacement",
    category: "RESIDENTIAL",
    material: "RAILING",
    location: "Geneseo, IL",
    year: "2024",
    image: "/images/railing.jpg",
    gallery: ["/images/railing.jpg", "/images/custom.jpg"],
    overview:
      "A safety-focused railing replacement for a worn backyard deck and stair run.",
    challenge:
      "Aging wood railing no longer met the homeowner's comfort level for stairs and an elevated landing.",
    solution:
      "We installed clean metal railing sized for the application and coordinated with the existing fence line.",
    featured: false,
  },
  {
    slug: "commercial-gate-access",
    title: "Commercial Gate & Access",
    category: "COMMERCIAL",
    material: "CUSTOM",
    location: "Geneseo, IL",
    year: "2023",
    image: "/images/commercial.jpg",
    gallery: ["/images/commercial.jpg", "/images/chainlink.jpg"],
    overview:
      "A coordinated fence and gate project for a business needing reliable vehicle and pedestrian access.",
    challenge:
      "Separate pedestrian and vehicle needs had to be handled without disrupting daily operations.",
    solution:
      "We planned dedicated gates and a layout that kept the property secure while staying easy to use.",
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectFilters = [
  "ALL",
  "RESIDENTIAL",
  "COMMERCIAL",
  "INDUSTRIAL",
  "WOOD",
  "VINYL",
  "ALUMINUM",
  "CHAIN LINK",
  "RAILING",
  "CUSTOM",
];

// ---------- Before / After ----------
export const beforeAfter = {
  before: "/images/before.jpg",
  after: "/images/after.jpg",
  beforeLabel: "Before",
  afterLabel: "After",
  caption:
    "A property boundary refreshed with a new installation. Drag the handle to compare.",
};

// ---------- Process ----------
export const processSteps = [
  {
    num: "01",
    title: "Consultation",
    body: "We talk through your goals, property, and the look you want — residential, commercial, or custom.",
  },
  {
    num: "02",
    title: "Measurement & Planning",
    body: "We measure the site, note grade and access, and plan layout, gates, and materials.",
  },
  {
    num: "03",
    title: "Material / Design Selection",
    body: "You choose materials, style, and finish from clear options suited to your project.",
  },
  {
    num: "04",
    title: "Installation",
    body: "Our crew sets posts, frames, and panels with care for a straight, lasting result.",
  },
  {
    num: "05",
    title: "Final Walkthrough",
    body: "We review the finished work with you and confirm everything meets the plan.",
  },
];

// ---------- FAQ ----------
export const faqs = [
  {
    q: "What types of fencing do you install?",
    a: "We install wood, vinyl, aluminum, and chain link fencing, along with railing and custom fence designs for residential, commercial, and industrial properties in the Geneseo, Illinois area.",
  },
  {
    q: "Do you work on residential properties?",
    a: "Yes. We build privacy, picket, decorative, pool, pet-friendly, and custom fence solutions for homeowners, with a focus on curb appeal and long-term value.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. We handle perimeter fencing, industrial fencing, chain link, metal fencing, commercial gates, and custom solutions for businesses and properties that need security and defined boundaries.",
  },
  {
    q: "Can you build custom fence designs?",
    a: "Yes. We build custom patterns, dimensions, gates, and mixed-material designs. You can share inspiration during the consultation and we'll plan it together.",
  },
  {
    q: "Do you provide railing?",
    a: "Yes. We install exterior railing for decks, stairs, porches, and steps, with safety-oriented construction and options that coordinate with your fence.",
  },
  {
    q: "Can you remove an existing fence?",
    a: "Yes. Existing fence removal can be included as part of your project. Let us know during the estimate so we can account for it in planning.",
  },
  {
    q: "How does the estimate process work?",
    a: "Reach out with a few details about your project. We review the site and your goals, then provide a clear quote based on measurements, materials, gates, and labor.",
  },
  {
    q: "What affects fence cost?",
    a: "Cost depends on material, style, total linear feet, height, number of gates, site conditions, existing fence removal, and labor. Use our estimator for a rough range, then contact us for a precise quote.",
  },
  {
    q: "Do you install gates?",
    a: "Yes. We build and install matching walk and drive gates for both residential and commercial projects, including custom feature gates.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Geneseo, Illinois and work with residential, commercial, and industrial customers in Geneseo and surrounding communities. Contact us to confirm your location.",
  },
];

// ---------- Service Areas ----------
export const serviceAreas = [
  { city: "Geneseo", state: "Illinois", note: "Our home base and primary service location." },
  { city: "Cambridge", state: "Illinois", note: "Residential and commercial fencing throughout the area." },
  { city: "Colona", state: "Illinois", note: "Fence and railing installations for homes and businesses." },
  { city: "Coal Valley", state: "Illinois", note: "Privacy, decorative, and perimeter fencing." },
  { city: "Moline", state: "Illinois", note: "Residential and commercial projects across the Quad Cities region." },
  { city: "Silvis", state: "Illinois", note: "Fencing and gates for properties of all sizes." },
  { city: "Erie", state: "Illinois", note: "Custom and standard fence builds for local properties." },
  { city: "Atkinson", state: "Illinois", note: "Wood, vinyl, aluminum, and chain link installations." },
];

export function getServiceArea(city: string) {
  return serviceAreas.find((s) => s.city.toLowerCase() === city.toLowerCase());
}

// ---------- Blog ----------
export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  updated: string;
  readingTime: string;
  image: string;
  related: string[];
  body: string[]; // paragraphs (simple markdown-free)
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wood-vs-vinyl-fencing",
    title: "Wood vs Vinyl Fencing: Which Is Right for Your Property?",
    metaTitle: "Wood vs Vinyl Fencing in Geneseo, IL | Interstate Fence",
    metaDescription:
      "Compare wood and vinyl fencing on appearance, maintenance, privacy, and value to choose the right fence for your Geneseo, Illinois property.",
    excerpt:
      "Both wood and vinyl deliver privacy and definition — but they feel very different. Here's how to choose.",
    category: "Residential",
    author: "Interstate Fence",
    date: "2024-09-12",
    updated: "2024-09-12",
    readingTime: "6 min read",
    image: "/images/wood.jpg",
    related: ["how-to-choose-a-fence", "fence-maintenance-guide"],
    body: [
      "Choosing between wood and vinyl is one of the first decisions homeowners face when planning a fence. Both create privacy and define property lines, but they differ in look, upkeep, and feel.",
      "Wood offers natural warmth and almost unlimited customization. Picket, shadowbox, board-on-board, and horizontal layouts are all possible, and wood pairs easily with landscaping and brick.",
      "Vinyl provides a consistently clean appearance with minimal maintenance. It resists rot and insects and only needs occasional rinsing to look fresh.",
      "If your priority is a natural, customizable look and you're comfortable with periodic sealing or staining, wood is a strong choice. If you want a low-upkeep boundary, vinyl is worth considering.",
      "The right answer depends on your property, budget, and how much maintenance you want to take on. We're happy to walk through both options during a consultation.",
    ],
  },
  {
    slug: "how-to-choose-a-fence",
    title: "How to Choose a Fence for Your Property",
    metaTitle: "How to Choose the Right Fence | Interstate Fence Geneseo, IL",
    metaDescription:
      "A practical guide to choosing a fence — privacy, security, material, height, and gates — from a Geneseo, Illinois fencing contractor.",
    excerpt:
      "Start with the problem you're solving. The right fence follows from there.",
    category: "Residential",
    author: "Interstate Fence",
    date: "2024-08-20",
    updated: "2024-08-20",
    readingTime: "7 min read",
    image: "/images/vinyl.jpg",
    related: ["wood-vs-vinyl-fencing", "residential-vs-commercial"],
    body: [
      "The best fence starts with a clear purpose. Are you creating privacy, keeping pets in, marking a boundary, or adding curb appeal? Your answer shapes everything else.",
      "Next, consider material. Wood and vinyl suit most homes, aluminum adds an architectural edge with open views, and chain link is the practical choice for security and budget.",
      "Height and style matter too. Privacy fences are typically taller and solid, while decorative fences use open profiles. Gates should match the fence and fit how you actually use the space.",
      "Finally, think about the site. Slopes, utilities, and access all affect installation. A quick consultation helps turn these factors into a clear plan and quote.",
    ],
  },
  {
    slug: "commercial-fence-planning-guide",
    title: "Commercial Fence Planning Guide",
    metaTitle: "Commercial Fence Planning Guide | Interstate Fence Geneseo, IL",
    metaDescription:
      "Plan a commercial or industrial fence around security, access, gates, and durability with this practical guide for Geneseo-area businesses.",
    excerpt:
      "Security, access, and durability — planned before the first post goes in.",
    category: "Commercial",
    author: "Interstate Fence",
    date: "2024-07-15",
    updated: "2024-07-15",
    readingTime: "8 min read",
    image: "/images/commercial.jpg",
    related: ["how-much-does-a-fence-cost", "residential-vs-commercial"],
    body: [
      "Commercial fencing is about more than a boundary. It's about security, access control, and presenting a finished, professional property.",
      "Start by mapping how the site is used. Where do vehicles enter? Where do people walk? Separating pedestrian and vehicle access simplifies daily operation.",
      "Chain link and metal fencing are common for commercial and industrial sites because they're durable and visible. Gates should be planned with the same care as the fence itself.",
      "Durability matters more on a commercial site with constant use. Quality fabric, framework, and post setting keep the perimeter dependable over time.",
      "We plan layout, gates, and access during the consultation so the finished fence supports how your business actually works.",
    ],
  },
  {
    slug: "how-much-does-a-fence-cost",
    title: "How Much Does a Fence Cost?",
    metaTitle: "How Much Does a Fence Cost? | Interstate Fence Geneseo, IL",
    metaDescription:
      "Understand the factors that affect fence cost — material, length, height, gates, and site conditions — with a rough estimator for Geneseo, IL.",
    excerpt:
      "Fence cost comes down to a few key variables. Here's what moves the number.",
    category: "Pricing",
    author: "Interstate Fence",
    date: "2024-06-30",
    updated: "2024-06-30",
    readingTime: "5 min read",
    image: "/images/chainlink.jpg",
    related: ["fence-maintenance-guide", "commercial-fence-planning-guide"],
    body: [
      "Fence cost isn't one number — it's the sum of several variables. Understanding them helps you plan a realistic budget.",
      "Material is the largest factor. Chain link is generally the most budget-friendly, while wood, vinyl, and aluminum each carry different price and maintenance profiles.",
      "Total linear feet and height drive material and labor. More gates, custom details, and existing fence removal add to the scope.",
      "Site conditions matter. Slopes, access, and underground utilities can affect installation. That's why a precise quote follows a look at the actual property.",
      "Use our pricing estimator for a rough range, then contact us for a detailed, site-specific quote.",
    ],
  },
  {
    slug: "fence-maintenance-guide",
    title: "Fence Maintenance Guide",
    metaTitle: "Fence Maintenance Guide | Interstate Fence Geneseo, IL",
    metaDescription:
      "Simple maintenance tips for wood, vinyl, aluminum, and chain link fences in the Geneseo, Illinois climate.",
    excerpt:
      "A little routine care keeps a fence straight, safe, and good-looking.",
    category: "Maintenance",
    author: "Interstate Fence",
    date: "2024-05-18",
    updated: "2024-05-18",
    readingTime: "6 min read",
    image: "/images/railing.jpg",
    related: ["wood-vs-vinyl-fencing", "how-to-choose-a-fence"],
    body: [
      "Fences face weather, moisture, and daily use. A simple maintenance routine extends their life and keeps them looking their best.",
      "Wood benefits from periodic sealing or staining to manage weathering and preserve color. Inspect for loose boards or hardware each season.",
      "Vinyl only needs an occasional rinse. Check that posts remain plumb and panels stay seated after heavy storms.",
      "Aluminum and chain link are low-maintenance — a wash and a check of hardware and fabric tension are usually enough.",
      "Catching small issues early prevents bigger repairs later. If something looks off, reach out and we'll take a look.",
    ],
  },
  {
    slug: "fence-railing-design-ideas",
    title: "Fence & Railing Design Ideas",
    metaTitle: "Fence & Railing Design Ideas | Interstate Fence Geneseo, IL",
    metaDescription:
      "Design ideas for wood, vinyl, aluminum, and custom fences plus exterior railing to boost curb appeal in Geneseo, IL.",
    excerpt:
      "From board-on-board to mixed materials, ideas that elevate a property.",
    category: "Design",
    author: "Interstate Fence",
    date: "2024-04-10",
    updated: "2024-04-10",
    readingTime: "7 min read",
    image: "/images/custom.jpg",
    related: ["how-to-choose-a-fence", "wood-vs-vinyl-fencing"],
    body: [
      "A fence is one of the first things people notice about a property. The right design adds character, not just a boundary.",
      "Board-on-board and shadowbox wood layouts offer privacy with depth. Horizontal wood reads modern. Aluminum adds an architectural, open feel.",
      "Railing deserves the same attention. Coordinating deck and stair railing with your fence creates a finished, intentional look.",
      "Custom builds let you mix materials — wood with metal accents, feature gates, and decorative caps — for a one-of-a-kind result.",
      "Bring your inspiration to a consultation and we'll help shape it into a buildable plan.",
    ],
  },
  {
    slug: "residential-vs-commercial",
    title: "Residential vs Commercial Fence Systems",
    metaTitle: "Residential vs Commercial Fencing | Interstate Fence Geneseo, IL",
    metaDescription:
      "How residential and commercial fence systems differ in material, security, gates, and durability for Geneseo, Illinois properties.",
    excerpt:
      "Same craftsmanship, different priorities. Here's how the two compare.",
    category: "Commercial",
    author: "Interstate Fence",
    date: "2024-03-22",
    updated: "2024-03-22",
    readingTime: "6 min read",
    image: "/images/commercial.jpg",
    related: ["commercial-fence-planning-guide", "how-much-does-a-fence-cost"],
    body: [
      "Residential and commercial fencing share the same fundamentals — quality materials and careful installation — but they solve different problems.",
      "Residential projects tend to prioritize privacy, pets, and curb appeal. Styles are chosen to complement the home and landscape.",
      "Commercial and industrial projects prioritize security, access, and durability. Layout and gates are planned around how the site operates.",
      "Both benefit from a clear plan. Whether it's a backyard retreat or a secured yard, the right fence follows from how the space is used.",
    ],
  },
  {
    slug: "how-to-prepare-for-installation",
    title: "How to Prepare for a Fence Installation",
    metaTitle: "How to Prepare for a Fence Installation | Interstate Fence Geneseo, IL",
    metaDescription:
      "Practical steps to prepare your property for a fence installation — utilities, access, and planning — in Geneseo, IL.",
    excerpt:
      "A little prep makes installation smoother for everyone.",
    category: "Process",
    author: "Interstate Fence",
    date: "2024-02-28",
    updated: "2024-02-28",
    readingTime: "5 min read",
    image: "/images/wood.jpg",
    related: ["how-to-choose-a-fence", "fence-maintenance-guide"],
    body: [
      "Preparing your property before installation helps the project run smoothly and on schedule.",
      "Know your boundaries. Property lines and any HOA or local requirements should be confirmed before we mark the layout.",
      "Watch for utilities. We account for underground lines during planning so posts are set safely.",
      "Clear the path. Removing obstacles along the fence line and ensuring access for materials speeds things up.",
      "We'll walk through all of this during the consultation so installation day goes as planned.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// ---------- Estimator config (configurable assumptions) ----------
export const estimatorConfig = {
  disclaimer:
    "This is a rough estimate. Final pricing depends on site conditions, material selection, measurements, gates, labor and project requirements. Contact us for a precise quote.",
  basePerFoot: {
    wood: 28,
    vinyl: 34,
    aluminum: 42,
    "chain-link": 18,
    railing: 46,
    custom: 55,
  } as Record<string, number>,
  styleMultiplier: {
    privacy: 1.15,
    picket: 1,
    shadowbox: 1.1,
    "board-on-board": 1.2,
    horizontal: 1.25,
    semi: 1.05,
    ornamental: 1.1,
    standard: 1,
    decorative: 1.2,
    flat: 1,
    spear: 1.05,
  } as Record<string, number>,
  heightMultiplier: {
    "4": 1,
    "5": 1.08,
    "6": 1.18,
    "8": 1.35,
  } as Record<string, number>,
  gateCost: {
    walk: 350,
    drive: 1200,
    none: 0,
  } as Record<string, number>,
  removalPerFoot: 4,
  terrainMultiplier: {
    flat: 1,
    sloped: 1.12,
    rocky: 1.25,
  } as Record<string, number>,
  railingPerFoot: 46,
};

export const estimatorMaterials = [
  { value: "wood", label: "Wood" },
  { value: "vinyl", label: "Vinyl" },
  { value: "aluminum", label: "Aluminum" },
  { value: "chain-link", label: "Chain Link" },
  { value: "railing", label: "Railing" },
  { value: "custom", label: "Custom" },
];

export const estimatorStyles = [
  { value: "privacy", label: "Privacy" },
  { value: "picket", label: "Picket" },
  { value: "shadowbox", label: "Shadowbox" },
  { value: "board-on-board", label: "Board-on-Board" },
  { value: "horizontal", label: "Horizontal" },
  { value: "semi", label: "Semi-Privacy" },
  { value: "ornamental", label: "Ornamental" },
  { value: "standard", label: "Standard" },
  { value: "decorative", label: "Decorative" },
  { value: "flat", label: "Flat Top" },
  { value: "spear", label: "Spear Top" },
];

export const estimatorHeights = ["4", "5", "6", "8"];
export const estimatorTerrain = [
  { value: "flat", label: "Flat" },
  { value: "sloped", label: "Sloped" },
  { value: "rocky", label: "Rocky / Difficult" },
];
export const estimatorGates = [
  { value: "none", label: "No gates" },
  { value: "walk", label: "1 Walk Gate" },
  { value: "drive", label: "Drive Gate" },
];
