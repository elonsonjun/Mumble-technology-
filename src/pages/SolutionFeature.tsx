import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSolutionFeatureBySlug } from "@/data/solution-features";

const SolutionFeature = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = slug ? getSolutionFeatureBySlug(slug) : undefined;

  if (!feature) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/#services">Back to Our Services</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="border-b border-border/50 bg-background">
          <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl"
            >
              <Button variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground" asChild>
                <Link to="/#services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Our Services
                </Link>
              </Button>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                {feature.categoryTitle}
              </p>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {feature.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                {feature.paragraphs && feature.paragraphs.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {feature.paragraphs.map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
                {feature.slug === "centralized-management" && (
                  <div className="mt-12">
                    <img
                      src="/erp-implementation-process.png"
                      alt="ERP Implementation Process: Planning & Organization, System Selection, Installation, Data Migration, Training, Testing & Validation, Go Live, Ongoing Improvements & Feedback"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      ERP Implementation Process
                    </p>
                  </div>
                )}
                {feature.slug === "real-time-data-reports" && (
                  <div className="mt-12">
                    <img
                      src="/real-time-data-reports.png"
                      alt="Real-Time Data & Reports: Boost your competitive edge with fast decision-making; Identify and resolve performance issues in real-time; Analyze trends and behaviors of users and customers; Improve marketing and operational efficiency with the most up-to-date data"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Real-Time Data & Reports benefits
                    </p>
                  </div>
                )}
                {feature.slug === "automate-workflows" && (
                  <div className="mt-12">
                    <img
                      src="/automate-workflows.png"
                      alt="Workflow automation: Kanban-style process boards, mobile access, time management, automation and processes, communication, data and analytics, documentation and scheduling"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Automate Workflows — centralize and streamline business processes
                    </p>
                  </div>
                )}
                {feature.slug === "modules-every-department" && (
                  <div className="mt-12">
                    <img
                      src="/modules-every-department.png"
                      alt="ERP Modules: Business, Finance, Supply Chain, Manufacturing, Human Resource — integrated departmental modules"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      ERP Modules for every department
                    </p>
                  </div>
                )}
                {feature.slug === "multi-branch-multi-currency" && (
                  <div className="mt-12">
                    <img
                      src="/multi-branch-multi-currency.png"
                      alt="How to Implement Multi-Currency Systems: 01 Assess and Plan, 02 Choose Software, 03 Configure and Customize, 04 Train and Adopt, 05 Monitor and Optimize"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      How to Implement Multi-Currency Systems
                    </p>
                  </div>
                )}
                {feature.slug === "customizable-scalable" && (
                  <div className="mt-12">
                    <img
                      src="/customizable-scalable.png"
                      alt="Customizable and scalable: configuration, adaptation, and continuous development — software tailored to grow with your business"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Customizable & Scalable — adapt and grow with your business
                    </p>
                  </div>
                )}
                {feature.slug === "improve-efficiency" && (
                  <div className="mt-12">
                    <img
                      src="/improve-efficiency.png"
                      alt="Improve efficiency: working smarter not harder — streamlined processes versus cumbersome traditional methods"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Improve Efficiency — work smarter, not harder
                    </p>
                  </div>
                )}
                {feature.slug === "cloud-on-premise" && (
                  <div className="mt-12">
                    <img
                      src="/cloud-on-premise.png"
                      alt="Cloud and On-Premise deployment: cloud-based servers versus on-premise infrastructure — choose the right deployment model"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Cloud / On-Premise — flexible deployment options
                    </p>
                  </div>
                )}
                {feature.slug === "integrated-crm" && (
                  <div className="mt-12">
                    <img
                      src="/integrated-crm.png"
                      alt="CRM Integrations: Physical store, E-commerce, Mobile app, Email, SMS/text, Chatbot, Social media, WhatsApp Business — centralize customer interactions"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      CRM Integrations — connect every customer touchpoint
                    </p>
                  </div>
                )}
                {feature.slug === "role-based-access-security" && (
                  <div className="mt-12">
                    <img
                      src="/role-based-access-security.png"
                      alt="Role-Based Access & Security: different roles receive specific access keys that determine which data and resources each role can access"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Role-Based Access & Security — tailored permissions per role
                    </p>
                  </div>
                )}
                {feature.slug === "task-assignment-tracking" && (
                  <div className="mt-12">
                    <img
                      src="/task-assignment-tracking.png"
                      alt="How to Manage Tasks: Prioritization, Milestone Tracking, Schedule Management, Resource Allocation, Collaboration"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      How to Manage Tasks
                    </p>
                  </div>
                )}
                {feature.slug === "gantt-timeline-views" && (
                  <div className="mt-12">
                    <img
                      src="/gantt-timeline-views.png"
                      alt="Gantt chart showing tasks across an 8-week timeline — visualize project schedule and task duration"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Gantt & timeline views — project schedule at a glance
                    </p>
                  </div>
                )}
                {feature.slug === "milestone-tracking" && (
                  <div className="mt-12">
                    <img
                      src="/milestone-tracking.png"
                      alt="Project Management Timeline: Initiation, Planning, Execution, Monitoring and Control, Project Closure"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Project Management Timeline — key phases and milestones
                    </p>
                  </div>
                )}
                {feature.slug === "real-time-progress-updates" && (
                  <div className="mt-12">
                    <img
                      src="/real-time-progress-updates.png"
                      alt="Real-time Updates: constant monitoring, ongoing activity, and confirmed progress"
                      className="w-full rounded-xl border border-border object-contain shadow-sm max-w-sm mx-auto"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Real-time progress updates
                    </p>
                  </div>
                )}
                {feature.slug === "file-document-sharing" && (
                  <div className="mt-12">
                    <img
                      src="/file-document-sharing.png"
                      alt="File and document sharing: exchange images, video, and documents via cloud storage and mobile devices"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      File & document sharing — collaborate through the cloud
                    </p>
                  </div>
                )}
                {feature.slug === "alerts-notifications" && (
                  <div className="mt-12">
                    <img
                      src="/alerts-notifications.png"
                      alt="Alerts and notifications: Info, Success, Warning, Danger, and Default alert types with icons"
                      className="w-full rounded-xl border border-border object-contain shadow-sm max-w-md mx-auto"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Alerts & notifications — stay informed with clear, distinct message types
                    </p>
                  </div>
                )}
                {feature.slug === "team-workload-visibility" && (
                  <div className="mt-12">
                    <img
                      src="/team-workload-visibility.png"
                      alt="Team workload visibility: teamwork, task management, deadlines, and progress tracking in a collaborative environment"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Team workload visibility — see who's doing what, when
                    </p>
                  </div>
                )}
                {feature.slug === "shipping-features" && (
                  <div className="mt-12">
                    <img
                      src="/shipping-features.png"
                      alt="Shipping features: managing delivery operations, logistics, and shipping costs"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Shipping features — manage logistics and delivery operations
                    </p>
                  </div>
                )}
                {feature.slug === "cloud-migration" && (
                  <div className="mt-12">
                    <img
                      src="/cloud-migration.png"
                      alt="Cloud Migration: from On-premises data center to Cloud architecture through Migration Process"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Cloud migration — from on-premises to cloud architecture
                    </p>
                  </div>
                )}
                {feature.slug === "payment-gateways" && (
                  <div className="mt-12">
                    <img
                      src="/payment-gateways.png"
                      alt="Payment gateways: flow from mobile and card to bank and merchant — secure online payment processing"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Payment gateways — secure transaction flow from payer to merchant
                    </p>
                  </div>
                )}
                {feature.slug === "categorization" && (
                  <div className="mt-12">
                    <img
                      src="/categorization.png"
                      alt="Categorization: team collaborating around data visualizations, charts, and organized information"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Categorization — organize and analyze data with your team
                    </p>
                  </div>
                )}
                {feature.slug === "cms-solutions" && (
                  <div className="mt-12">
                    <img
                      src="/cms-solutions.png"
                      alt="CMS solutions: Content Management System with security, cloud upload, analytics, and content creation"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      CMS solutions — content management, security, and cloud integration
                    </p>
                  </div>
                )}
                {feature.slug === "budget-expense-monitoring" && (
                  <div className="mt-12">
                    <img
                      src="/budget-expense-monitoring.png"
                      alt="Budget and expense monitoring: Financial accountability, resource allocation, risk mitigation, adaptability, personal finance management, compliance"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Budget & expense monitoring — key pillars of financial management
                    </p>
                  </div>
                )}
                {feature.slug === "ecommerce-platform" && (
                  <div className="mt-12">
                    <img
                      src="/ecommerce-platform.png"
                      alt="eCommerce platform: browsing to cart — product listings, payments, discounts, wishlists, and online store features"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      eCommerce platform — from browse to buy
                    </p>
                  </div>
                )}
                {feature.slug === "custom-website" && (
                  <div className="mt-12">
                    <img
                      src="/custom-website.png"
                      alt="Custom website and web design: design, content, communication, marketing, and digital presence"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Custom website — web design and digital presence
                    </p>
                  </div>
                )}
                {feature.slug === "apps-development" && (
                  <div className="mt-12">
                    <img
                      src="/apps-development.png"
                      alt="Apps development: coding, design, UI/UX, content, monetization, and mobile app creation"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Apps development — build and design mobile and web apps
                    </p>
                  </div>
                )}
                {feature.slug === "lead-management" && (
                  <div className="mt-12">
                    <img
                      src="/lead-management.png"
                      alt="Lead Management: Buyer journey, Lead criteria and qualification, Lead scoring, Lead planning, SLAs, Lead nurturing, Ongoing reviews"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Lead Management — continuous cycle from journey to nurture
                    </p>
                  </div>
                )}
                {feature.slug === "account-management" && (
                  <div className="mt-12">
                    <img
                      src="/account-management.png"
                      alt="Account Management: central hub for users, analytics, communication, and account settings"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Account Management — oversee accounts and engagement in one place
                    </p>
                  </div>
                )}
                {feature.slug === "opportunity-tracking" && (
                  <div className="mt-12">
                    <img
                      src="/opportunity-tracking.png"
                      alt="Opportunity Tracking: business growth, progress, strategic development, and upward trajectory"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Opportunity Tracking — growth, progress, and pipeline at a glance
                    </p>
                  </div>
                )}
                {feature.slug === "sales-visualization" && (
                  <div className="mt-12">
                    <img
                      src="/sales-visualization.png"
                      alt="Sales Performance Pipeline and Productivity: dashboards, key metrics, pipeline charts, and mobile-responsive sales visualization"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Sales Visualization — pipeline, metrics, and trends at a glance
                    </p>
                  </div>
                )}
                {feature.slug === "activity-task-tracking" && (
                  <div className="mt-12">
                    <img
                      src="/activity-task-tracking.png"
                      alt="Activity and Task Tracking: automated time tracking, timesheets, realtime status, customizable settings, activity monitoring"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Activity & Task Tracking — time, status, and workflow in one place
                    </p>
                  </div>
                )}
                {feature.slug === "email-call-integration" && (
                  <div className="mt-12">
                    <img
                      src="/email-call-integration.png"
                      alt="Email and Call Integration: phone call events trigger email actions — connect calls and email in your workflow"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Email & Call Integration — connect calls and email in one workflow
                    </p>
                  </div>
                )}
                {feature.slug === "sales-forecasting" && (
                  <div className="mt-12">
                    <img
                      src="/sales-forecasting.png"
                      alt="Sales and Forecasting: Sales Forecasting pie chart, Sales Analysis, and data visualization for pipeline and projections"
                      className="w-full rounded-xl border border-border object-contain shadow-sm"
                    />
                    <p className="mt-3 text-center text-sm text-muted-foreground">
                      Sales & Forecasting — data-driven pipeline and projections
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
              >
                <p className="mb-4 font-medium text-foreground">
                  Want to implement {feature.title} for your business?
                </p>
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionFeature;
