import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import serviceVideo from "@/assets/service-video.jpg";
import serviceChatgpt from "@/assets/service-chatgpt.jpg";
import serviceVision from "@/assets/service-vision.jpg";
import serviceGenai from "@/assets/service-genai.jpg";
import { ChevronRight } from "lucide-react";

const services = [
  { order: 1, title: "AI Video Analytics", image: serviceVideo, slug: "video-analytics" },
  { order: 2, title: "Private ChatGPT", image: serviceChatgpt, slug: "private-chatgpt" },
  { order: 3, title: "Computer Vision AI", image: serviceVision, slug: "computer-vision" },
  { order: 4, title: "Generative AI", image: serviceGenai, slug: "generative-ai" },
];

const ServiceCards = () => {
  const navigate = useNavigate();
  return (
    <section className="relative -mt-20 z-10 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => navigate(`/featured/${s.slug}`)}
              className="group block w-full overflow-hidden rounded-2xl border border-border/50 card-gradient text-left transition-all hover:border-primary/40 hover:glow-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-foreground"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                  <ChevronRight className="h-5 w-5 text-primary shrink-0" />
                </div>
              </motion.div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
