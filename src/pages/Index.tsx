import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import FeaturedImages from "@/components/FeaturedImages";
import ImageStrip from "@/components/ImageStrip";
import AboutSection from "@/components/AboutSection";
import TechStacks from "@/components/TechStacks";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <Navbar />
      <Hero />
      <ServiceCards />
      <FeaturedImages />
      <AboutSection />
      <ImageStrip />
      <TechStacks />
      <Stats />
      <Clients />
      <ServicesGrid />
      <ProcessSection />
      <IndustriesSection />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </motion.div>
  );
};

export default Index;
