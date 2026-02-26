export interface Industry {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  images: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    shortDesc: "AI-powered medical imaging, patient analytics, HIPAA-secure data platforms, and clinical workflow automation.",
    description: "We deliver AI, computer vision, and custom software for healthcare organizations. Our solutions include diagnostic support and medical imaging analysis, patient outcome and population health analytics, HIPAA-aware health data platforms and interoperability, and clinical workflow automation—so providers spend less time on admin and more on care. We help hospitals, clinics, and health tech companies scale securely while improving accuracy and patient experience.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    shortDesc: "Personalized recommendations, demand forecasting, inventory optimization, and seamless checkout experiences.",
    description: "We build retail technology that drives conversion and loyalty. From AI-powered product recommendations and demand forecasting to inventory optimization, omnichannel order management, and frictionless checkout—we help brands unify in-store and online experiences. Our solutions reduce waste, improve stock accuracy, and give you data-driven insights to personalize offers and promotions so you can grow revenue while keeping operations lean.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortDesc: "Immersive virtual tours, document and contract AI, portfolio analytics, and intelligent listing platforms.",
    description: "We power PropTech for agents, developers, and investors. Our solutions include immersive 3D and virtual property tours, document and contract extraction and analysis with AI, portfolio and investment analytics, and intelligent listing and search platforms. We help you close deals faster with better data, automate due diligence, and give buyers and tenants a modern, transparent experience from first click to closing.",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    shortDesc: "Computer vision quality control, predictive maintenance, supply chain optimization, and production analytics.",
    description: "Our manufacturing solutions combine computer vision for quality control and defect detection with predictive maintenance to cut unplanned downtime. We deliver supply chain and inventory optimization, production scheduling and analytics, and real-time dashboards so plant and operations managers can spot bottlenecks and improve throughput. Whether you run discrete assembly or process manufacturing, we help you move toward smarter, data-driven operations.",
    images: [
      "/manufacturing-1.png",
      "/manufacturing-2.png",
      "/manufacturing-3.png",
    ],
  },
  {
    slug: "educational-elearning",
    name: "Educational & eLearning",
    shortDesc: "Learning management systems, adaptive assessments, research tools, and institutional data and analytics.",
    description: "We build learning platforms, assessment tools, and institutional systems for schools, universities, and training organizations. Our solutions support online and blended learning, adaptive and competency-based assessment, research and citation workflows, and data-driven decisions for curriculum and enrollment. From student portals and course authoring to accreditation reporting and learning analytics, we help educators and administrators deliver better outcomes at scale.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    ],
  },
  {
    slug: "fintech",
    name: "Fintech",
    shortDesc: "Secure payments, regulatory compliance, risk and fraud detection, and scalable financial data platforms.",
    description: "We help fintechs and financial institutions build secure, compliant, and scalable products. Our work spans payment processing and reconciliation, regulatory reporting and compliance automation, risk modeling and fraud detection, and core banking and data platforms. We design for auditability and security so you can launch new products and enter new markets without compromising on compliance or performance.",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    shortDesc: "Fleet and delivery tracking, warehouse automation, end-to-end supply chain visibility, and route optimization.",
    description: "We build logistics software that reduces cost and improves on-time delivery. Our solutions include real-time fleet and delivery tracking, warehouse management and automation, end-to-end supply chain visibility and exception handling, and route and load optimization. From last-mile delivery to global freight, we help carriers, 3PLs, and shippers operate with better visibility, fewer manual touches, and data that drives smarter decisions.",
    images: [
      "/logistics-1.png",
      "/logistics-2.png",
      "/logistics-3.png",
    ],
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    shortDesc: "Booking engines, guest experience apps, operations and revenue management, and personalization at scale.",
    description: "We deliver booking engines, guest experience apps, and operations tools for hotels, travel brands, and hospitality groups. Our solutions help you personalize stays with recommendations and loyalty programs, streamline housekeeping and maintenance, and optimize pricing and revenue management. We integrate with existing property and channel systems so you can run operations more efficiently and give guests a seamless experience from search to checkout.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    ],
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    shortDesc: "Content and streaming platforms, recommendation engines, audience analytics, and engagement monetization.",
    description: "We build content platforms, streaming services, and audience intelligence for media and entertainment. Our solutions include content management and delivery, recommendation and discovery engines, audience analytics and segmentation, and tools to grow engagement and monetize through subscriptions and ads. Whether you are a broadcaster, studio, or digital-first creator, we help you understand your audience and deliver the right content at the right time.",
    images: [
      "/entertainment-1.png",
      "/entertainment-2.png",
      "/entertainment-3.png",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
