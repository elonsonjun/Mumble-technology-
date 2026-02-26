import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-mumble-technologies.png";

const whatWeDoItems = [
  { label: "AI & ML", href: "/services/ai-and-ml" },
  { label: "Custom ERP", href: "/services/custom-erp" },
  { label: "SaaS Development", href: "/services/saas" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Resource As A Service", href: "/services/resource-as-a-service" },
  { label: "UX & UI Design", href: "/services/ux-ui-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const companyItems = [
  { label: "About Us", href: "/#solutions" },
  { label: "How We Work", href: "/#process" },
  { label: "Our Clients", href: "/#clients" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/20 backdrop-blur-xl shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-14 min-h-[56px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="min-w-0 flex-1">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex min-h-[44px] items-center gap-2 sm:gap-3"
          >
          <img
            src={logoImage}
            alt=""
            className="h-9 w-auto shrink-0 object-contain sm:h-10 lg:h-12"
            width={160}
            height={40}
            fetchPriority="high"
          />
          <span className="truncate text-base font-bold tracking-tight sm:text-lg lg:text-xl">
            <span className="text-black">Mumble</span>{" "}
            <span className="text-primary">Technology</span>
          </span>
        </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
          >
            Home
          </Link>
          {/* What we do - dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("whatwedo")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/90">
              What we do
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${openDropdown === "whatwedo" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
            {openDropdown === "whatwedo" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-border/50 bg-card/95 p-2 shadow-xl backdrop-blur-xl"
              >
                {whatWeDoItems.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      {item.label}
                    </button>
                  )
                )}
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <Link
            to="/#technologies"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
          >
            Technologies
          </Link>

          <Link
            to="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
          >
            Portfolios
          </Link>

          {/* Company - dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("company")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:text-primary/90">
              Company
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
            {openDropdown === "company" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-1 w-44 rounded-xl border border-border/50 bg-card/95 p-2 shadow-xl backdrop-blur-xl"
              >
                {companyItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <Button
            size="sm"
            className="ml-4 rounded-full px-6"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile toggle - 44px min touch target */}
        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary/10 active:bg-primary/20 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - touch-friendly link heights */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/98 backdrop-blur-xl lg:hidden safe-bottom">
          <div className="container mx-auto flex flex-col gap-0 px-4 py-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[48px] items-center rounded-lg px-3 py-3 text-left text-sm font-medium text-primary hover:bg-primary/10 active:bg-primary/20"
            >
              Home
            </Link>
            <div className="my-2 h-px bg-border/30" />
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              What we do
            </p>
            {whatWeDoItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center rounded-lg px-3 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground active:bg-primary/20"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="flex min-h-[48px] w-full items-center rounded-lg px-3 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground active:bg-primary/20"
                >
                  {item.label}
                </button>
              )
            )}

            <div className="my-2 h-px bg-border/30" />

            <Link
              to="/#technologies"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[48px] items-center rounded-lg px-3 py-3 text-left text-sm font-medium text-primary hover:bg-primary/10 active:bg-primary/20"
            >
              Technologies
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[48px] items-center rounded-lg px-3 py-3 text-left text-sm font-medium text-primary hover:bg-primary/10 active:bg-primary/20"
            >
              Portfolios
            </Link>

            <div className="my-2 h-px bg-border/30" />

            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Company
            </p>
            {companyItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[48px] items-center rounded-lg px-3 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground active:bg-primary/20"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-3" />
            <Button
              size="lg"
              className="min-h-[48px] w-full rounded-full"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
