export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  paragraphs: string[];
  thingsToWorkOn: { title: string; description: string }[];
  images?: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "ai-and-ml",
    title: "AI and ML",
    shortDesc: "Recognizing AI opportunities for creating unique business-driven solutions with modern tools.",
    longDesc: "We help businesses identify and implement AI and machine learning opportunities that drive real value. From computer vision and NLP to predictive analytics and custom ML models, we use modern frameworks and best practices to build solutions that scale with your data and your goals.",
    paragraphs: [
      "Our approach combines feasibility assessment, data strategy, model development, and integration so you get production-ready AI—not just proofs of concept. We start by understanding your business processes, data assets, and strategic goals. Then we pinpoint where AI can have the highest impact: automating repetitive decisions, surfacing insights from unstructured data, or personalizing customer experiences.",
      "We work with the latest tools and frameworks—TensorFlow, PyTorch, Hugging Face, and cloud ML services—while keeping your total cost of ownership and team skills in mind. Every solution we design is built for maintainability, monitoring, and iteration, so your AI capability grows with your organization.",
    ],
    thingsToWorkOn: [
      { title: "AI strategy and opportunity assessment", description: "Audit your processes and data to find high-impact use cases for AI and ML, with clear ROI and roadmap." },
      { title: "Custom ML model development", description: "Design, train, and deploy models for classification, regression, forecasting, or recommendation tailored to your domain." },
      { title: "Computer vision and NLP", description: "Image/video analytics, document understanding, chatbots, and language models integrated into your products." },
      { title: "Data pipelines and MLOps", description: "Robust data ingestion, feature stores, training pipelines, and monitoring for reliable ML in production." },
      { title: "Integration and change management", description: "Embedding models into existing apps and workflows, plus training and support so your team can use and improve AI over time." },
    ],
    images: [
      "/ai-ml-1.png",
      "/ai-ml-2.png",
      "/ai-ml-3.png",
    ],
  },
  {
    slug: "custom-erp",
    title: "Custom ERP",
    shortDesc: "End-to-end Custom ERP systems that centralize finance, inventory, sales, HR, and operations—driving better decisions and smoother workflows.",
    longDesc: "Custom ERP (Enterprise Resource Planning) from Mumble Technology gives you one unified system for your entire business: finance, inventory, sales, HR, manufacturing, and reporting. We design and build ERP solutions that match your processes—not the other way around—so you get real-time visibility, automated workflows, and a single source of truth across departments. Whether you are replacing legacy software, extending an existing ERP, or building a new system from scratch, we deliver scalable, secure platforms that grow with you.",
    paragraphs: [
      "We start by mapping your current workflows, pain points, and reporting needs. From there we architect a solution that centralizes data and automates key processes: order-to-cash, procure-to-pay, inventory and production planning, and financial close. Custom ERP avoids the limitations of off-the-shelf products—no more spreadsheets, duplicated data, or siloed departments. You get one coherent platform that stays maintainable and upgradeable as your business evolves.",
      "Our ERP builds use modern technology, clear data models, and role-based access so the right people see the right information. Multi-branch and multi-currency support, full audit trails, and compliance-friendly design are built in from day one. We integrate with your existing tools—CRM, e‑commerce, payroll, banking, or shop-floor systems—so ERP becomes the backbone of your operations without replacing everything at once.",
      "From requirements and process design through deployment and training, we work in phases so you can go live without big-bang risk. We handle data migration, user training, and handover so your team can run and extend the system. The result: faster decisions, fewer errors, and a clear view of performance across finance, operations, and growth.",
    ],
    thingsToWorkOn: [
      { title: "Requirements and process design", description: "Discovery, process mapping, and scope definition so the ERP aligns with how you work." },
      { title: "Core modules (finance, inventory, sales)", description: "General ledger, AP/AR, inventory, orders, and reporting tailored to your chart of accounts and workflows." },
      { title: "HR, manufacturing, and extensions", description: "Payroll, resource planning, production, or custom modules as needed for your industry." },
      { title: "Integrations and APIs", description: "Connections to CRM, e‑commerce, banks, and third-party systems for a unified view." },
      { title: "Deployment and training", description: "Phased rollout, data migration, and training so your team adopts and owns the system." },
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    shortDesc: "End-to-end SaaS development services that elevate the quality of user experiences.",
    longDesc: "We build and evolve SaaS products that users love and businesses rely on. Our full-stack teams handle architecture, development, security, and scalability so you can focus on growth.",
    paragraphs: [
      "We use modern stacks, clear APIs, and subscription-friendly design—multi-tenancy, billing, trials, and usage-based pricing—to deliver products that are fast, maintainable, and ready to scale with your customer base. Getting the foundation right early avoids costly rewrites later: tenant isolation, role-based access, and a clean data model are non-negotiables we bake in from day one.",
      "Whether you are launching a new product or modernizing an existing one, we align technical decisions with your business model. We integrate with Stripe, Paddle, or your billing provider of choice and design dashboards and admin tools so you can operate and grow the business without constant engineering support.",
    ],
    thingsToWorkOn: [
      { title: "Product and architecture design", description: "Feature prioritization, system design, and technical roadmap aligned with your business model." },
      { title: "Multi-tenant and subscription design", description: "Tenant isolation, roles, plans, and integration with billing and payment providers." },
      { title: "Front-end and UX", description: "Responsive, accessible UIs with smooth onboarding and in-app experiences that reduce churn." },
      { title: "APIs, integrations, and security", description: "Public/private APIs, third-party integrations, SSO, and compliance-ready security." },
      { title: "Analytics and product intelligence", description: "Usage tracking, feature adoption, and dashboards so you can improve the product based on real behavior." },
    ],
    images: [
      "/saas-1.png",
      "/saas-2.png",
      "/saas-3.png",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Premium quality web development with modern tools ensuring fast and responsive websites.",
    longDesc: "We deliver high-quality web applications and sites that perform well and are easy to maintain. Using modern frameworks, responsive design, and solid backend architecture, we build everything from marketing sites and portals to complex web apps.",
    paragraphs: [
      "We emphasize speed, accessibility, SEO, and security so your web presence supports your brand and business goals. Every project is built with maintainability in mind: clear structure, documented APIs, and a path for your team to take over or extend the work. We choose stacks that match your scale and team—React, Vue, Next.js, or others—and ensure the backend (Node, Python, or your preference) is robust and testable.",
      "From the first design to the last deployment, we focus on Core Web Vitals, semantic HTML, and inclusive design so your site works for all users and ranks well. We can also integrate with your CMS, e‑commerce, or internal tools so the web becomes a single, coherent face of your business.",
    ],
    thingsToWorkOn: [
      { title: "Front-end development", description: "React, Vue, or similar; responsive layouts, component libraries, and performance optimization." },
      { title: "Back-end and APIs", description: "REST/GraphQL APIs, business logic, authentication, and database design." },
      { title: "Performance and SEO", description: "Core Web Vitals, lazy loading, meta and structured data, and content strategy for discoverability." },
      { title: "Maintenance and evolution", description: "Updates, refactors, and new features so your product stays current and secure." },
      { title: "Content and CMS integration", description: "Structured content, headless CMS, or admin tools so non-developers can update copy and assets." },
    ],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Creating next-gen digital experiences with mobile applications for customer engagement.",
    longDesc: "We design and build native and cross-platform mobile apps that engage users and support your business. From UX and UI to development, testing, and store deployment, we focus on performance, offline capability, and platform guidelines.",
    paragraphs: [
      "Whether you need iOS, Android, or both, we deliver apps that feel native and scale with your roadmap. We help you choose the right approach: native Swift or Kotlin for maximum performance and platform fit, or React Native and Flutter for shared code and faster iteration. Each path has trade-offs; we align the choice with your timeline, team, and long-term product vision.",
      "We build with accessibility, battery life, and varying network conditions in mind. Push notifications, deep linking, and in-app purchases are implemented to platform standards so your app passes review and stays reliable in production. We also set up CI/CD and release workflows so you can ship updates frequently and with confidence.",
    ],
    thingsToWorkOn: [
      { title: "Native and cross-platform development", description: "iOS (Swift), Android (Kotlin), or React Native/Flutter for shared code and faster delivery." },
      { title: "UX and device capabilities", description: "Intuitive flows, push notifications, camera, location, and other device features used purposefully." },
      { title: "Backend and sync", description: "APIs, auth, and sync strategies for offline and real-time data where needed." },
      { title: "Release and store presence", description: "CI/CD, store listings, updates, and compliance with App Store and Play Store policies." },
      { title: "Analytics and crash reporting", description: "In-app events, funnels, and crash reporting so you can prioritize fixes and improve retention." },
    ],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc: "Expert cloud architecture and DevOps services for scalable and reliable solutions.",
    longDesc: "We design and operate cloud-native infrastructure and DevOps practices so your systems are scalable, secure, and cost-effective. From architecture review and migration to CI/CD, monitoring, and incident response, we help you ship faster and run with confidence.",
    paragraphs: [
      "We work across AWS, GCP, Azure, and hybrid setups so we can match the right cloud to your workload and existing investments. Migrations are planned in phases to minimize risk: we assess current state, define target architecture, and move workloads incrementally while keeping production stable. Cost optimization is built in—right-sizing, reserved capacity, and clear tagging so you know where every dollar goes.",
      "DevOps is not just tooling; it is culture and process. We set up pipelines that run tests and deploy to staging and production with clear approval gates. We implement logging, metrics, and tracing so you can debug issues quickly and improve over time. When something goes wrong, runbooks and on-call practices help your team respond and learn.",
    ],
    thingsToWorkOn: [
      { title: "Cloud architecture and migration", description: "Right-sized architecture, lift-and-shift or refactor strategies, and cost optimization." },
      { title: "CI/CD and automation", description: "Pipelines, infrastructure as code (Terraform, CloudFormation), and automated testing and deployment." },
      { title: "Monitoring and observability", description: "Logging, metrics, tracing, alerting, and runbooks for proactive and reactive operations." },
      { title: "Security and compliance", description: "Hardening, secrets management, and controls to meet your security and compliance requirements." },
      { title: "Disaster recovery and backup", description: "Backup strategies, failover, and runbooks so you can recover quickly from outages or data loss." },
    ],
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
  },
  {
    slug: "resource-as-a-service",
    title: "Resource As A Service",
    shortDesc: "Skilled web and mobile developers delivering custom-quality products within timeframe.",
    longDesc: "We provide dedicated developers and small teams that slot into your workflow and deliver like an in-house team. You get senior-level web and mobile talent—aligned with your stack and processes—without the overhead of hiring.",
    paragraphs: [
      "We work to your timeline and quality bar, from greenfield builds to feature work and support. Our developers join your standups, use your tools, and follow your coding standards so the output is indistinguishable from a full-time hire. We are flexible on engagement length and team size: start with one developer for a few months, or scale to a full pod for a long-running product.",
      "Every engagement starts with a clear scope and communication plan. We deliver in sprints with demos and retrospectives so you stay in control. When the project evolves, we adapt—no long-term lock-in, just a partnership that scales with your needs.",
    ],
    thingsToWorkOn: [
      { title: "Dedicated developers and pods", description: "Front-end, back-end, or full-stack developers and designers allocated to your roadmap." },
      { title: "Process and communication", description: "Agile rituals, tools (Jira, Figma, etc.), and clear reporting so you stay in control." },
      { title: "Quality and delivery", description: "Code reviews, testing, and milestones so deliverables meet your standards and deadlines." },
      { title: "Flexibility and scaling", description: "Ramp up or down as needed; we adapt to your priorities and capacity." },
      { title: "Knowledge transfer", description: "Documentation and handover so your team can own and extend the work when the engagement ends." },
    ],
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    ],
  },
  {
    slug: "ux-ui-design",
    title: "UX & UI Design",
    shortDesc: "Smooth UI/UX interface designs offering enhanced user experience with streamlined projects.",
    longDesc: "We create user-centered interfaces that are clear, consistent, and enjoyable to use. Our design process combines research, wireframes, prototypes, and high-fidelity UI so development gets a clear blueprint and users get products that are easy to learn and efficient to use.",
    paragraphs: [
      "We work in design systems and components so your brand and UX stay coherent as you scale. Consistency reduces cognitive load and builds trust; we define patterns for navigation, forms, feedback, and empty states so every new feature feels part of the same product. Accessibility is built in from the start—color contrast, focus management, and screen-reader support—so your product is usable by everyone.",
      "Handoff to development is precise: we deliver specs, assets, and component documentation so engineers can implement without guesswork. We stay available during build for edge cases and refinements, and we can run usability tests after launch to guide the next iteration.",
    ],
    thingsToWorkOn: [
      { title: "Research and strategy", description: "User research, journey mapping, and UX strategy so we solve the right problems." },
      { title: "Wireframes and prototypes", description: "Flows, layouts, and interactive prototypes for validation before build." },
      { title: "Visual and UI design", description: "Design systems, components, and high-fidelity screens aligned with your brand and accessibility." },
      { title: "Handoff and design support", description: "Specs, assets, and collaboration with development for accurate implementation." },
      { title: "Usability testing and iteration", description: "Testing with real users and refining flows based on feedback before and after launch." },
    ],
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Email marketing, content marketing, SEO and social media marketing expertise.",
    longDesc: "We help you reach and convert audiences through data-driven digital marketing. From SEO and content strategy to email campaigns, paid social, and analytics, we align channels and messaging with your goals.",
    paragraphs: [
      "We focus on measurable outcomes—traffic, leads, and revenue—and iterate based on performance. Every campaign is tied to clear KPIs and tracked so you know what is working. We avoid vanity metrics; instead we optimize for conversions, cost per lead, and lifetime value so marketing spend drives real business results.",
      "Whether you need to grow organic search, nurture leads through email, or scale paid acquisition, we build the strategy, content, and execution plan. We also set up analytics and attribution so you can see the full funnel and make informed decisions about where to invest next.",
    ],
    thingsToWorkOn: [
      { title: "SEO and content strategy", description: "Keyword and topic strategy, on-page and technical SEO, and content plans that rank and convert." },
      { title: "Email and lifecycle marketing", description: "Automation, segmentation, and campaigns that nurture leads and retain customers." },
      { title: "Paid and social", description: "Campaign setup and optimization for Google, Meta, LinkedIn, and other platforms." },
      { title: "Analytics and reporting", description: "Tracking, dashboards, and attribution so you see what works and where to invest." },
      { title: "Conversion optimization", description: "Landing pages, A/B tests, and funnel optimization to improve conversion rates and ROI." },
    ],
    images: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2b6c1?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
