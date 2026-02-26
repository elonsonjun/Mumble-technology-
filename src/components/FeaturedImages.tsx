import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import serviceVideo from "@/assets/service-video.jpg";
import serviceChatgpt from "@/assets/service-chatgpt.jpg";
import serviceVision from "@/assets/service-vision.jpg";
import serviceGenai from "@/assets/service-genai.jpg";
import heroAi from "@/assets/hero-ai.jpg";
import headerLogo from "@/assets/header-logo.png";
import { ChevronRight } from "lucide-react";

const items = [
  { order: 1, image: serviceVideo, title: "Video Analytics", desc: "Real-time AI-powered surveillance insights", slug: "video-analytics" },
  { order: 2, image: serviceChatgpt, title: "Private ChatGPT", desc: "Enterprise-grade conversational AI", slug: "private-chatgpt" },
  { order: 3, image: serviceVision, title: "Computer Vision", desc: "Detect, classify, and analyze at scale", slug: "computer-vision" },
  { order: 4, image: serviceGenai, title: "Generative AI", desc: "Content and workflow automation", slug: "generative-ai" },
  { order: 5, image: heroAi, title: "AI Strategy", desc: "From concept to deployment", slug: "ai-strategy" },
  { order: 6, image: headerLogo, title: "Intelligent Systems", desc: "Brain and machine working together", slug: "intelligent-systems" },
];

const FeaturedImages = () => {
  const navigate = useNavigate();
  return (
    <section id="solutions" className="section-alt py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Solutions in focus
          </h2>
          <p className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
            Explore our capabilities
          </p>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Click any solution to open its detail page with full description and images.
          </p>
        </motion.div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => navigate(`/featured/${item.slug}`)}
              className="group block w-full rounded-2xl border border-border/50 card-gradient overflow-hidden transition-all hover:border-primary/40 hover:glow-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-foreground text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary/90 text-xs font-bold text-primary-foreground">
                    {String(item.order).padStart(2, "0")}
                  </span>
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
