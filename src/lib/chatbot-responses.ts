import { servicesData } from "@/data/services";
import { industries } from "@/data/industries";
import { featuredSolutions } from "@/data/featured-solutions";

const SERVICE_LIST = servicesData
  .map((s) => `${s.title} → /services/${s.slug}`)
  .join("\n• ");

const INDUSTRY_LIST = industries
  .map((i) => `${i.name} → /industries/${i.slug}`)
  .join("\n• ");

const FEATURED_LIST = featuredSolutions
  .map((f) => `${f.title} → /featured/${f.slug}`)
  .join("\n• ");

const ALL_PAGES =
  "• Home (overview, hero, services, solutions, industries, testimonials, FAQ) → /\n" +
  "• Contact (form, India & Canada offices, email, phone, map links) → /contact\n" +
  "• Portfolio (our work and case studies) → /portfolio\n" +
  "• Blog (insights on AI, ERP, solutions & industry trends) → /blog\n" +
  "• Services (What we do: AI & ML, Custom ERP, SaaS, Web, Mobile, Cloud, RaaS, UX/UI, Digital Marketing) → use menu or ask \"Tell me about [service]\"\n" +
  "• Solutions in focus (Video Analytics, Private ChatGPT, Computer Vision, Generative AI, AI Strategy, Intelligent Systems) → use menu or ask \"Tell me about [solution]\"\n" +
  "• Industries we serve (Healthcare, Retail, Real Estate, Manufacturing, Education, Fintech, Logistics, Travel, Entertainment) → use menu or ask \"Tell me about [industry]\"";

export function getBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase().trim();
  if (!msg)
    return "Please type a question. I can direct you to any page and give detailed explanations of our services, solutions, industries, and contact info. Try \"What pages can I visit?\" or \"Tell me about AI\" or \"Contact\".";

  // Greetings
  if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(msg)) {
    return "Hello! I'm the Mumble Technology helpline assistant. I can direct you to every page on our site and give detailed explanations of our services, solutions, industries, portfolio, and contact info.\n\nYou can ask:\n• \"What pages can I visit?\" or \"Menu\" for the full sitemap\n• \"Tell me about [service]\" (e.g. AI, ERP, SaaS)\n• \"Tell me about [industry]\" (e.g. Healthcare, Logistics)\n• \"Tell me about [solution]\" (e.g. Video Analytics, ChatGPT)\n• \"Contact\" for email, phone, offices\n• \"Portfolio\" or \"Home\" for those pages\n\nWhat would you like to know?";
  }

  // All pages / sitemap / navigate / menu
  if (/\b(pages?|sitemap|navigate|navigation|menu|where to go|what can i (see|visit)|list of (pages|sections))\b/.test(msg)) {
    return "Here are the main areas of our website. Click any path below to go there:\n\n" + ALL_PAGES + "\n\nAsk me about any service, industry, or solution by name for a detailed explanation and link.";
  }

  // Home / main
  if (/\b(home|homepage|main page|landing)\b/.test(msg)) {
    return "Our Home page (/) includes:\n\n• Hero section and key messaging\n• Service cards (AI & ML, Custom ERP, SaaS, Web Development, Mobile Apps, Cloud & DevOps, Resource As A Service, UX & UI Design, Digital Marketing)\n• Solutions in focus (Video Analytics, Private ChatGPT, Computer Vision, Generative AI, AI Strategy, Intelligent Systems)\n• Industries we serve\n• About us, tech stack, stats, clients\n• Process, testimonials, FAQ\n• Call-to-action and contact prompts\n\nGo to / to open the home page.";
  }

  // Contact / email / phone / reach / mail
  if (/\b(contact|email|mail|phone|call|reach|address|office|where)\b/.test(msg)) {
    return "You can reach us at:\n\n• Email: pm@mumbletech.in\n• India (Bangalore): +91 9845166525, +91 9916990011\n• Canada (Calgary): +1 587 892 6064\n• Offices: 198 CMH Road, Indiranagar, Bangalore 560038 | 450 8th Ave SE, Calgary T2G 1T2\n\nOn the Contact page (/contact) you can send a message via our form and use \"View on Google Maps\" for both office addresses. We typically respond within 24 hours.";
  }

  // Portfolio
  if (/\b(portfolio|work|projects|case studies|our work)\b/.test(msg)) {
    return "Our Portfolio page (/portfolio) showcases our work and case studies. You can see examples of the solutions we've built for clients across industries. Go to /portfolio to explore.";
  }

  // Blog
  if (/\b(blog|blogs|articles|insights)\b/.test(msg)) {
    return "Our Blog (/blog) has articles and insights on AI, custom ERP, SaaS, video analytics, computer vision, and digital transformation across industries. Go to /blog to read the latest.";
  }

  // Industries list
  if (/\b(industries?|sectors?|who do you serve|industries we serve)\b/.test(msg)) {
    return "We serve these industries. Each has its own page with a detailed description and images:\n\n• " + INDUSTRY_LIST + "\n\nAsk \"Tell me about [industry name]\" for a full explanation and link to that industry page.";
  }

  // Specific industry match
  const industryMatch = industries.find(
    (i) =>
      msg.includes(i.name.toLowerCase()) ||
      msg.includes(i.slug.replace(/-/g, " "))
  );
  if (industryMatch) {
    return `${industryMatch.name}\n\n${industryMatch.description}\n\nShort summary: ${industryMatch.shortDesc}\n\nVisit the full industry page at /industries/${industryMatch.slug} for more and to get in touch.`;
  }

  // Solutions / featured list (only when clearly asking for the list, not a specific solution)
  if (/\b(solutions?|featured|in focus|what solutions)\b/.test(msg)) {
    return "Our Solutions in focus are deep-dive offerings. Each has a dedicated page with full description and images:\n\n• " + FEATURED_LIST + "\n\nAsk \"Tell me about [solution name]\" for a detailed explanation and link.";
  }

  // Specific featured/solution match
  const featuredMatch = featuredSolutions.find(
    (f) =>
      msg.includes(f.title.toLowerCase()) ||
      msg.includes(f.slug.replace(/-/g, " "))
  );
  if (featuredMatch) {
    return `${featuredMatch.title}\n\n${featuredMatch.description}\n\nShort summary: ${featuredMatch.shortDesc}\n\nVisit /featured/${featuredMatch.slug} for the full page with images and details.`;
  }

  // Services list
  if (/\b(service|services|what do you do|offer|offering)\b/.test(msg)) {
    return "We offer these services. Each has a full page with description, what we work on, and images:\n\n• " + SERVICE_LIST + "\n\nAsk \"Tell me about [service name]\" (e.g. \"Tell me about AI\" or \"Web development\") for a detailed explanation and link.";
  }

  // Specific service match
  const serviceMatch = servicesData.find(
    (s) =>
      msg.includes(s.title.toLowerCase()) ||
      msg.includes(s.slug.replace(/-/g, " "))
  );
  if (serviceMatch) {
    const detail = serviceMatch.longDesc || serviceMatch.paragraphs?.[0] || serviceMatch.shortDesc;
    return `${serviceMatch.title}\n\n${detail}\n\nShort summary: ${serviceMatch.shortDesc}\n\nWe work on: ${serviceMatch.thingsToWorkOn?.map((t) => t.title).join("; ") || "see the page for details"}.\n\nVisit /services/${serviceMatch.slug} for the full service page.`;
  }

  // AI / ML shortcut
  if (/\b(ai|machine learning|ml|chatgpt|computer vision)\b/.test(msg)) {
    const s = servicesData.find((x) => x.slug === "ai-and-ml")!;
    return `${s.title}\n\n${s.longDesc}\n\nShort summary: ${s.shortDesc}\n\nVisit /services/ai-and-ml for the full page. For our Private ChatGPT and Computer Vision solutions in focus, ask "Tell me about Private ChatGPT" or "Tell me about Computer Vision" or go to /featured/private-chatgpt and /featured/computer-vision.`;
  }

  // ERP shortcut
  if (/\b(erp|enterprise resource)\b/.test(msg)) {
    const s = servicesData.find((x) => x.slug === "custom-erp")!;
    return `${s.title}\n\n${s.longDesc}\n\nShort summary: ${s.shortDesc}\n\nVisit /services/custom-erp for the full page.`;
  }

  // Website / about site
  if (/\b(website|page|data|info|information|about (the )?site)\b/.test(msg)) {
    return "This is the Mumble Technology website. We offer services (AI & ML, Custom ERP, SaaS, Web, Mobile, Cloud, RaaS, UX/UI, Digital Marketing), solutions in focus (Video Analytics, Private ChatGPT, Computer Vision, Generative AI, AI Strategy, Intelligent Systems), and industry expertise (Healthcare, Retail, Real Estate, Manufacturing, Education, Fintech, Logistics, Travel, Entertainment). Ask \"What pages can I visit?\" for the full sitemap, or ask about any service, industry, or solution by name for a detailed explanation and link.";
  }

  // Help
  if (/\b(help|support|helpline)\b/.test(msg)) {
    return "I can:\n\n• Direct you to every page: Home (/), Contact (/contact), Portfolio (/portfolio), and any service (/services/:slug), industry (/industries/:slug), or solution (/featured/:slug)\n• Give detailed explanations of each service, industry, and solution\n• Share contact details (email, phone, offices)\n\nTry: \"What pages can I visit?\", \"Tell me about [service/industry/solution]\", or \"Contact\".";
  }

  // Thanks / bye
  if (/\b(thanks|thank you|bye|goodbye)\b/.test(msg)) {
    return "You're welcome! If you have more questions, just ask. You can also use the menu to explore our services, industries, and contact page. Have a great day.";
  }

  // Default
  return "I can direct you to any page and explain our services, solutions, and industries in detail. Try:\n\n• \"What pages can I visit?\" or \"Menu\" — full sitemap\n• \"Tell me about [service]\" — e.g. AI, ERP, SaaS, Web Development\n• \"Tell me about [industry]\" — e.g. Healthcare, Logistics\n• \"Tell me about [solution]\" — e.g. Video Analytics, Private ChatGPT\n• \"Contact\" — email, phone, offices\n• \"Portfolio\" or \"Home\" — those pages";
}
