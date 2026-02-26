import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getFeatureSlug } from "@/data/solution-features";

const intro = "We build tailor-made enterprise software to streamline operations and boost efficiency. Fast, modern, secure web solutions using React, Angular, Vue, Java, .NET, Python, Node.js, and more.";

const solutions = [
  {
    number: "01",
    title: "ERP solutions",
    description: "ERP (Enterprise Resource Planning) is an integrated software system that helps businesses manage operations like finance, inventory, sales, HR, and production from a single platform.",
    features: [
      "Centralized Management",
      "Real-Time Data & Reports",
      "Automate Workflows",
      "Modules for Every Department",
      "Multi-Branch / Multi-Currency",
      "Customizable & Scalable",
      "Improve Efficiency",
      "Cloud / On-Premise",
      "Integrated CRM",
      "Role-Based Access & Security",
    ],
  },
  {
    number: "02",
    title: "Project Tracking",
    description: "Project Tracking helps monitor tasks, deadlines, and progress in real time to ensure on-time delivery. Track projects from start to finish with full visibility on timelines, tasks, and team performance.",
    features: [
      "Task assignment & tracking",
      "Gantt & timeline views",
      "Milestone tracking",
      "Budget & expense monitoring",
      "Real-time progress updates",
      "File & document sharing",
      "Alerts & notifications",
      "Team workload visibility",
    ],
  },
  {
    number: "03",
    title: "eCommerce solutions",
    description: "We are excited for our work and how it positively impacts clients. With best experience we have been constantly providing excellent web solutions which is best in-class experience for our clients.",
    features: [
      "Shipping features",
      "Cloud migration",
      "Payment gateways",
      "Categorization",
      "CMS solutions",
      "eCommerce platform",
      "Custom website",
      "Apps development",
    ],
  },
  {
    number: "04",
    title: "CRM solutions",
    description: "CRM (Customer Relationship Management) software improves customer interactions, automates sales processes, and helps teams track leads and conversions efficiently. Build stronger customer relationships and close more deals with a smart and efficient CRM solution.",
    features: [
      "Lead Management",
      "Account Management",
      "Opportunity Tracking",
      "Sales Visualization",
      "Activity & Task Tracking",
      "Email & Call Integration",
      "Notes & Interaction",
      "Sales & Forecasting",
    ],
  },
];

const CustomizedSolutions = () => (
  <div className="mb-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Customized Solutions
      </h3>
      <p className="max-w-3xl text-muted-foreground leading-relaxed">
        {intro}
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2">
      {solutions.map((sol, i) => (
        <motion.div
          key={sol.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border border-border/50 card-gradient p-6 transition-all hover:border-primary/30"
        >
          <span className="mb-3 inline-block text-3xl font-bold text-primary/40">
            {sol.number}
          </span>
          <h4 className="mb-3 text-xl font-semibold text-foreground">
            {sol.title}
          </h4>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {sol.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {sol.features.map((f) => (
              <li key={f}>
                <Link
                  to={`/solutions/${getFeatureSlug(f)}`}
                  className="inline-block rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                >
                  {f}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export default CustomizedSolutions;
