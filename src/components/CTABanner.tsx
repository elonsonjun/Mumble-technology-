import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="rounded-3xl border border-primary/30 bg-primary/5 px-4 py-12 text-center sm:px-6 sm:py-16 md:px-12 lg:py-20"
      >
        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
          Ready to transform your business with AI?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground sm:mb-8">
          Tell us about your project. We&apos;ll get back with a clear plan and a timeline that works for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button size="lg" className="min-h-[48px] rounded-full px-6 glow-primary sm:px-8" asChild>
            <a href="/contact">Get in touch</a>
          </Button>
          <Button size="lg" variant="outline" className="min-h-[48px] rounded-full border-primary/30 px-6 text-foreground hover:bg-primary/10 sm:px-8" asChild>
            <a href="#services">Explore services</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
