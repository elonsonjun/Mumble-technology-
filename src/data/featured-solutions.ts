export interface FeaturedSolution {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  paragraphs: string[];
  images: string[];
}

export const featuredSolutions: FeaturedSolution[] = [
  {
    slug: "video-analytics",
    title: "Video Analytics",
    shortDesc: "Real-time AI-powered surveillance insights",
    description:
      "Video Analytics turns your existing camera feeds and video archives into a continuous stream of structured, actionable intelligence. Our AI-powered surveillance solutions detect people, vehicles, and events in real time; classify behavior and objects; and surface anomalies so security and operations teams can act immediately instead of watching screens. Whether you need to secure a perimeter, manage crowds, enforce safety rules, or understand how spaces are used, we deliver insights that are accurate, auditable, and aligned with your privacy and compliance requirements.",
    paragraphs: [
      "We build pipelines that ingest video from IP cameras, NVRs, and existing VMS platforms. Neural networks run on each frame—or on sampled frames for cost control—to perform detection (people, vehicles, bags, etc.), classification (e.g. PPE, loitering, direction of travel), and optional facial or license-plate recognition where legally and ethically appropriate. Results are written to your databases and event systems, and can trigger alerts, dashboards, and reports so the right people see the right information at the right time.",
      "Deployment is flexible: analytics can run at the edge (on appliances or gateways near the cameras) for low latency and bandwidth savings, in your data center for strict data residency, or in the cloud for scale and managed updates. We help you choose the right mix based on camera count, network constraints, and compliance needs. Integration with access control, incident management, and business intelligence tools is standard so video analytics becomes part of your broader security and operations stack.",
      "Typical use cases include perimeter and facility security (intrusion, tailgating, restricted zones), crowd and queue management (counts, density, wait times), traffic and parking (vehicle counts, occupancy, incidents), safety compliance (hard hats, vests, exclusion zones), and retail or workplace analytics (footfall, dwell time, heatmaps). In every case we focus on reducing false alarms, preserving evidence, and giving operators and managers clear metrics rather than raw video.",
      "We work with you to define detection rules, tune sensitivity, and set up retention and access policies so the system meets both operational and audit requirements. From pilot to rollout, we ensure the solution is reliable, maintainable, and aligned with your organization’s standards for privacy and ethics.",
    ],
    images: [
      "/video-analytics-camera.png",
      "/video-analytics-crowd.png",
      "/video-analytics-detection.png",
    ],
  },
  {
    slug: "private-chatgpt",
    title: "Private ChatGPT",
    shortDesc: "Enterprise-grade conversational AI",
    description:
      "Private ChatGPT is your organization’s own conversational AI assistant: it answers questions, summarizes documents, and guides users using your internal data and knowledge bases, without sending sensitive information to public AI services. We design, integrate, and operate these systems so they are secure, accurate, and aligned with your policies—whether deployed on-premise, in a private cloud, or in a compliant public cloud tenant with strict access controls and audit trails.",
    paragraphs: [
      "The assistant is powered by large language models (LLMs) that we host or connect to under your governance. We combine them with retrieval-augmented generation (RAG): your documents, wikis, and databases are indexed and searched at query time, so answers are grounded in your actual content rather than generic training data. We tune prompts, chunking strategies, and retrieval logic so responses are relevant, cited, and within guardrails you define (e.g. no external advice, no confidential cross-leakage between departments).",
      "Access control and audit are built in. Users authenticate through your identity provider (SSO, SAML, OAuth), and we log every query and response for compliance and improvement. You can restrict which data sources and which models each role can use, and add human review or approval steps where needed. Data stays within your chosen boundary—no training on your inputs by third-party model providers—so confidential and regulated information remains under your control.",
      "Use cases include internal help desks (IT, HR, facilities), contract and policy Q&A (legal, procurement), customer support (product docs, troubleshooting, tier-1 deflection), and research or strategy assistants that summarize long reports and surface insights from your knowledge base. We integrate with Slack, Teams, your intranet, or custom apps so the assistant is where your people already work.",
      "We support you from strategy through deployment: choosing model size and cost/quality tradeoffs, designing the knowledge schema and RAG pipeline, implementing guardrails and monitoring, and iterating on prompts and content so the assistant stays accurate and useful as your organization evolves.",
    ],
    images: [
      "/private-chatgpt-1.png",
      "/private-chatgpt-2.png",
      "/private-chatgpt-3.png",
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    shortDesc: "Detect, classify, and analyze at scale",
    description:
      "Computer Vision solutions let you detect, classify, and analyze images and video at scale—for quality control, automation, safety, and insight. We build systems that run on your infrastructure (edge, on-premise, or cloud), use state-of-the-art and custom-trained models, and plug into your existing pipelines and tools so you get accurate, fast, and cost-effective vision capabilities without building everything from scratch.",
    paragraphs: [
      "We implement a wide range of vision tasks: object detection and instance segmentation (find and outline specific objects in each frame), image classification (label entire scenes or crops), OCR and document understanding (extract text and structure from forms, invoices, IDs), and custom classifiers trained on your own labeled data for defects, categories, or conditions that are unique to your operations. Models are optimized for your hardware and latency requirements—from real-time edge inference to high-throughput batch processing in the cloud.",
      "Data pipelines are part of the package. We help you ingest images and video from cameras, scanners, uploads, or APIs; preprocess and augment data for training; and run inference at the right stage of your workflow. Results are structured (bounding boxes, labels, scores, extracted text) and can be written to your databases, ticketing systems, or automation tools so downstream processes and humans can act on them. We also set up feedback loops so you can correct errors and retrain models as your requirements change.",
      "Applications span industries: manufacturing (defect detection, assembly verification, barcode and label reading), logistics and warehouses (parcel sorting, inventory checks, damage detection), healthcare (support for medical imaging workflows, document capture), identity and compliance (ID verification, document checks), and content moderation (safety and policy enforcement at scale). In each case we focus on accuracy, explainability, and integration so the system is trustworthy and maintainable.",
      "We work with you to define scope, choose build-vs.-buy and deployment options, and establish metrics and governance. From pilot to production, we ensure your computer vision solution is robust, scalable, and aligned with your quality and compliance standards.",
    ],
    images: [
      "/computer-vision-1.png",
      "/computer-vision-2.png",
      "/computer-vision-3.png",
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    shortDesc: "Content and workflow automation",
    description:
      "Generative AI enables your teams to create, summarize, and personalize content at scale while keeping brand voice, compliance, and quality under control. We implement text, image, and multimodal solutions that reduce repetitive work, speed up drafts and variations, and integrate with your content and workflow tools so you can scale output without scaling headcount or sacrificing consistency.",
    paragraphs: [
      "We use foundation models (and fine-tuned or domain-adapted variants) for text generation: marketing copy, product descriptions, localization, report and email drafting, and code or configuration assistance. We combine these models with your style guides, terminology, and approved content so outputs are on-brand and reviewable. Where needed we add fact-checking, citation, and human-in-the-loop steps so generative AI augments rather than replaces editorial and legal review.",
      "Image and design generation are available for campaigns, concept art, and asset variation. We implement models and pipelines that respect your brand guidelines and usage rights, and we design workflows so generated assets are tagged, versioned, and approved before publication. For code and technical content we integrate with your repos and docs so suggestions are context-aware and safe to adopt.",
      "Governance and safety are built in. We help you set guardrails (topics, tone, prohibited content), log and audit usage, and define roles and approval flows. We also design for cost and latency so generation fits your budget and user experience expectations. Integration with your CMS, CRM, design tools, and productivity suites means generative AI fits into existing processes instead of creating siloed workflows.",
      "We support you from use-case selection and data preparation through deployment and iteration. The goal is generative AI that increases throughput and creativity while keeping control, quality, and compliance where they belong—with your team.",
    ],
    images: [
      "/generative-ai-1.png",
      "/generative-ai-2.png",
      "/generative-ai-3.png",
    ],
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy",
    shortDesc: "From concept to deployment",
    description:
      "AI Strategy is our end-to-end approach to taking you from initial ideas to production AI that delivers measurable value. We help you prioritize use cases, assess data and technology readiness, choose the right models and partners, and then design, build, and operate solutions so your investments in AI are aligned with business goals, risk tolerance, and capacity to change.",
    paragraphs: [
      "We start by mapping your business challenges and opportunities to AI capabilities—predictive analytics, automation, personalization, vision, language, and more. We assess which use cases have the best combination of impact, data availability, and feasibility, and we help you sequence initiatives into a roadmap that balances quick wins with longer-term transformation. Data readiness is part of this: we review your sources, quality, and governance so you know what’s possible and what to fix first.",
      "For each chosen use case we define success metrics, ownership, and resourcing. We then design the solution—data pipelines, models, APIs, and user experience—and build it in phases: proof of concept to validate value and approach, pilot with real users and data, and scale-up with robust engineering, monitoring, and change management. We work with your IT, security, and business teams so the solution fits your architecture and operating model.",
      "We help you navigate build-vs.-buy and partner choices: when to use off-the-shelf APIs, when to fine-tune or train custom models, and when to invest in platforms and tooling. We also address risk and ethics: bias, explainability, privacy, and compliance are factored into design and governance from the start. The result is a clear path from concept to deployment, with AI that is valuable, sustainable, and accountable.",
      "Whether you need a one-off roadmap, a proof of concept, or a full production system, we align technical decisions with business outcomes and your organization’s readiness. Our goal is AI that works for you—on your terms.",
    ],
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
  {
    slug: "intelligent-systems",
    title: "Intelligent Systems",
    shortDesc: "Brain and machine working together",
    description:
      "Intelligent Systems are end-to-end solutions where AI, data, and automation work together so humans and machines collaborate effectively. We design and build systems that sense, reason, and act—combining vision, language, forecasting, optimization, and control—so your operations become smarter, more adaptive, and more scalable while keeping humans in the loop where it matters.",
    paragraphs: [
      "Our approach is integrative: we combine multiple AI and data capabilities into coherent workflows rather than isolated models. For example, a system might use computer vision to inspect products, natural language to interpret orders and exceptions, and optimization to schedule and route—all feeding a single operational view and set of actions. We focus on explainability, control, and human oversight so the system augments your team’s judgment and can be trusted and maintained over time.",
      "We build for real environments: data quality, latency, and reliability are first-class concerns. Systems run on your infrastructure (edge, on-premise, or cloud), integrate with your ERP, MES, CRM, and other tools, and are instrumented so you can monitor performance, debug issues, and iterate. We also design for change: as your processes and data evolve, the system can be retrained, reconfigured, or extended without full rewrites.",
      "Applications include smart operations (predictive maintenance, quality prediction, demand-driven scheduling), demand forecasting and dynamic pricing, personalized experiences (recommendations, next-best-action), and autonomous or semi-autonomous workflows (e.g. approval routing, exception handling) where the system proposes and humans confirm or override. In every case we deliver not just models but the full stack: data, APIs, user interfaces, and documentation so the system is usable and supportable.",
      "We work with you from problem definition and architecture through deployment and ongoing improvement. The goal is intelligent systems that are reliable, valuable, and aligned with how your organization wants to work—with brain and machine working together.",
    ],
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    ],
  },
];

export function getFeaturedBySlug(slug: string): FeaturedSolution | undefined {
  return featuredSolutions.find((f) => f.slug === slug);
}
