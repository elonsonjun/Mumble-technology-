import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    variants={container}
    className="border-t border-border/50 section-alt py-12 sm:py-16 safe-bottom"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <motion.div variants={item} className="md:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              Mumble <span className="text-gradient">Technology</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Transforming businesses with innovative AI & digital solutions.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
          <ul className="space-y-0 text-sm text-muted-foreground">
            <li><a href="#" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">AI & ML</a></li>
            <li><a href="#" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">Web Development</a></li>
            <li><a href="#" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">Mobile Apps</a></li>
            <li><a href="#" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">Cloud & DevOps</a></li>
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="space-y-0 text-sm text-muted-foreground">
            <li><Link to="/#solutions" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="block min-h-[44px] py-2 hover:text-foreground transition-colors">Blog</Link></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={item}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex min-h-[44px] items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:pm@mumbletech.in" className="hover:text-foreground transition-colors">pm@mumbletech.in</a>
            </li>
            <li className="flex min-h-[44px] items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span>India: +91 9845166525 / +91 9916990011</span>
            </li>
            <li className="flex min-h-[44px] items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span>Canada: +1 587 892 6064</span>
            </li>
            <li className="flex min-h-[44px] items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>Bangalore · Calgary</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground sm:mt-12 sm:pt-8"
      >
        © 2026 Mumble Technology. All rights reserved.
      </motion.div>
    </div>
  </motion.footer>
);

export default Footer;
