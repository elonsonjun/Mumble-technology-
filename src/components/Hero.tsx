import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/header-logo.png";

const slides = [
  {
    title: "AI Video Analytics Software for Enterprises",
    subtitle: "Boost security intelligence with neural networks powered by AI & deep learning algorithms.",
    cta: "Explore More",
    slug: "video-analytics",
  },
  {
    title: "Build Your Own Private ChatGPT with Enterprise Data",
    subtitle: "Securely leverage private ChatGPT for your business & keep your enterprise data absolutely secure.",
    cta: "Explore Private ChatGPT",
    slug: "private-chatgpt",
  },
  {
    title: "Strengthen Visual Recognition with Computer Vision AI",
    subtitle: "Recognise, capture & generate insights from video data with our computer vision solutions.",
    cta: "Explore Computer Vision",
    slug: "computer-vision",
  },
  {
    title: "Unveil the Key Prospects of Generative AI",
    subtitle: "We curate the best Gen AI solutions to transform your business operations.",
    cta: "Explore Gen AI",
    slug: "generative-ai",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const goToFeatured = () => navigate(`/featured/${slides[current].slug}`);

  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient pt-14 sm:pt-16">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-30">
        <img src={heroImage} alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />

      <div className="container relative mx-auto flex min-h-[calc(100vh-3.5rem)] items-center px-4 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:px-8">
        <div className="grid w-full items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                  {slides[current].title}
                </h1>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
                  {slides[current].subtitle}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="min-h-[48px] rounded-full px-6 glow-primary sm:px-8"
                      onClick={goToFeatured}
                      type="button"
                    >
                      {slides[current].cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" variant="outline" className="min-h-[48px] rounded-full border-primary/30 px-6 text-foreground hover:bg-primary/10 sm:px-8" asChild>
                      <Link to="/contact">Request Demo</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators - touch-friendly hit area */}
            <div className="mt-10 flex gap-1 sm:mt-12 sm:gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-colors hover:bg-primary/10 active:bg-primary/20"
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "h-1.5 w-8 bg-primary" : "h-1.5 w-4 bg-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side decorative */}
          <div className="hidden lg:block">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden border border-border/30 glow-primary">
                <img src={heroImage} alt="AI Technology" className="h-full w-full object-cover object-center" width={512} height={512} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
