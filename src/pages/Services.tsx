import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code2, Settings, Sliders, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "01",
    icon: Code2,
    title: "Product Development",
    tagline: "From ideation to a production-ready Salesforce app",
    desc: "We specialize in building world-class products on Force.com — from AppExchange-ready SaaS applications to bespoke internal tools. Our engineers have taken apps through Salesforce's rigorous security review process multiple times.",
    points: [
      "Full-cycle AppExchange app development",
      "Architecture design & rapid prototyping",
      "Security review preparation & submission",
      "Lightning Web Components (LWC) specialization",
      "Managed Package & ISV partner support",
    ],
    color: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    accentColor: "text-emerald-600",
    badgeColor: "text-emerald-600",
  },
  {
    id: "02",
    icon: Settings,
    title: "Salesforce Admin Services",
    tagline: "Keep your org healthy, efficient, and secure",
    desc: "Our certified Salesforce admins act as an extension of your team. We handle day-to-day administration so your team can focus on outcomes, not maintenance.",
    points: [
      "User management & permission modeling",
      "Reports, dashboards & analytics setup",
      "Data quality, deduplication & cleanup",
      "Routine system health checks & alerts",
      "Training & enablement for internal teams",
    ],
    color: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    accentColor: "text-sky-600",
    badgeColor: "text-sky-600",
  },
  {
    id: "03",
    icon: Sliders,
    title: "Customization & Configuration",
    tagline: "Tailored Salesforce that fits your exact workflow",
    desc: "Off-the-shelf Salesforce rarely fits perfectly. We customize flows, objects, page layouts, and automations so the platform works the way your business does — not the other way around.",
    points: [
      "Custom objects, fields & validation rules",
      "Flow Builder & Process Builder automation",
      "Custom UI with Lightning App Builder",
      "Role hierarchy & sharing model design",
      "AppExchange app installation & configuration",
    ],
    color: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    accentColor: "text-violet-600",
    badgeColor: "text-violet-600",
  },
  {
    id: "04",
    icon: RefreshCw,
    title: "Integration & Data Migration",
    tagline: "Connect Salesforce to your entire tech stack",
    desc: "We move data safely and build reliable integrations so your Salesforce org becomes the central hub of your organization — connected to your ERP, marketing tools, support systems, and beyond.",
    points: [
      "API integrations with third-party systems",
      "Legacy CRM & database migration",
      "Data mapping, cleansing & validation",
      "Real-time and batch sync architectures",
      "ETL pipelines & middleware setup",
    ],
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    accentColor: "text-amber-600",
    badgeColor: "text-amber-600",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans" data-testid="page-services">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight text-[#0f172a] mb-7">
              End-to-End <span className="text-[#16a34a]">Salesforce</span> Expertise
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              With 50+ years of collective Salesforce experience, our team builds, configures, and maintains the org your business deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`border rounded-2xl overflow-hidden ${s.color}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-10 lg:p-12 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.iconBg}`}>
                      <s.icon size={22} className={s.iconColor} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${s.badgeColor}`}>Service {s.id}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">{s.title}</h2>
                  <p className={`text-base md:text-lg font-medium ${s.accentColor}`}>{s.tagline}</p>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">{s.desc}</p>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 font-semibold text-sm ${s.accentColor} group hover:gap-3 transition-all pt-2`}
                  >
                    Start a conversation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="p-10 lg:p-12 bg-white/60 border-t lg:border-t-0 lg:border-l border-current/10 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">What's included</p>
                  {s.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={`${s.accentColor} mt-0.5 shrink-0`} />
                      <span className="text-sm text-slate-700">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#16a34a] text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-5">Let's talk about your Salesforce needs</h2>
            <p className="text-emerald-100 mb-8 text-lg">We'll assess your org, understand your goals, and recommend the right service mix.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#16a34a] font-bold px-7 py-3.5 rounded-lg hover:bg-emerald-50 transition-colors shadow-md">
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
