import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import headerLogo from "@/assets/header-logo.png";

const ImageStrip = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid items-center gap-12 rounded-3xl border border-border/50 overflow-hidden card-gradient lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[400px]"
        >
          <img
            src={headerLogo}
            alt="AI and intelligent systems"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Technology that thinks with you
          </h2>
          <p className="mb-6 text-muted-foreground">
            We combine neural-inspired design with robust engineering to build systems that learn, adapt, and scale with your business.
          </p>
          <Button size="lg" className="rounded-full px-6" asChild>
            <Link to="/contact">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ImageStrip;
