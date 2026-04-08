import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import surveyVistaLogo from "@assets/ProductLogo/SurveyVistaLogo.png";
import formVistaLogo from "@assets/ProductLogo/FormVistaLogo.png";
import relationshipVistaLogo from "@assets/ProductLogo/RelationshipVistaLogo.png";
import complianceVistaLogo from "@assets/ProductLogo/CompliancVistaLogo.png";
import agentVistaLogo from "@assets/ProductLogo/AgentVistaLogo.png";
import rvProductCard from "@assets/ProductCard/RV_ProductCard.png";
import cvProductCard from "@assets/ProductCard/CV_ProductCard.png";
import svProductCard from "@assets/ProductCard/SV_ProductCard.png";
import fvProductCard from "@assets/ProductCard/FV_ProductCard.jpg";
import avProductCard from "@assets/ProductCard/AV_ProductCard.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Products() {
  return (
    <div
      className="min-h-screen bg-white text-[#0f172a] font-sans"
      data-testid="page-products"
    >
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#43AF57] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight text-[#0f172a] mb-7">
              Native. Powerful. <span className="text-[#43AF57]">Proven.</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Five products built entirely on Salesforce. No data leaves your
              org — just immediate, integrated value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SurveyVista ─────────────────────────────── */}
      <section
        id="surveyvista"
        className="py-24 px-6 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div className="flex items-center">
              <img
                src={surveyVistaLogo}
                alt="Survey Vista"
                className="h-12 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">
              Survey Vista: Forms, Surveys, Quizzes, and Checklists – 100%
              Native Salesforce
            </h2>
            <p className="text-base md:text-lg font-medium text-[#43AF57]">
              Turn Survey & Form Data into Actionable Insights That Drive
              Results!
            </p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              SurveyVista Automate data collection and feedback management
              solution. Boost response rates with branded Surveys, Forms, and
              Assessments. 100% Native, no-code, Salesforce integration to gain
              actionable insights that enhance customer, employee, and partner
              experiences
            </p>
            <div className="space-y-3">
              {[
                "Surveys, Quizzes, Checklists & Assessments",
                "100% Native & Secure",
                "NPS Tracking & CSAT",
                "Multi-language Support",
                "Advanced Logic & Routing",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-[#43AF57] mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">
                  Available on AppExchange
                </p>
                <p className="text-sm text-slate-500">
                  Salesforce certified & security reviewed
                </p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-[#43AF57]">
                  222+
                </span>
                <p className="text-xs text-slate-500">verified reviews</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Use Cases
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Horizontal Product",
                  "Education",
                  "Healthcare & Life Sciences",
                  "Customer Service",
                  "Surveys",
                  "Ratings & Reviews",
                ].map((u) => (
                  <span
                    key={u}
                    className="bg-emerald-50 border border-emerald-200 text-[#43AF57] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://surveyvista.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#43AF57] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#43AF57] transition-colors shadow-sm group"
              >
                Visit SurveyVista.com <ExternalLink size={15} />
              </a>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYkISUA1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#43AF57] text-[#43AF57] bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors"
              >
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 flex items-center"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-6 flex items-center justify-center w-full h-[600px]">
              <img
                src={svProductCard}
                alt="SurveyVista Product Card"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FormVista ─────────────────────────────── */}
      <section
        id="formvista"
        className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 flex items-center"
          >
            <div className="bg-gradient-to-br from-[#e0f7fc] to-[#b3e9f5] rounded-3xl p-6 flex items-center justify-center w-full h-[500px]">
              <img
                src={fvProductCard}
                alt="FormVista Product Card"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div className="flex items-center">
              <img
                src={formVistaLogo}
                alt="Form Vista"
                className="h-12 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">
              Form Vista: 100% Native Forms, Surveys, Quizzes, Checklists, and
              Assessments
            </h2>
            <p className="text-base md:text-lg font-medium text-[#28aae1]">
              Endless Applications: The 5-star rated Data Collection Solution
              You Need.
            </p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              FormVista is an all-in-one Salesforce-native solution for
              creating, managing, and analyzing forms and surveys. Effortlessly
              collect data, integrate with CRM for real-time insights, and act
              on data to enhance experiences, leveraging dynamic forms and
              robust security.
            </p>
            <div className="space-y-3">
              {[
                "Drag & Drop Builder",
                "Conditional Logic & Dynamic Fields",
                "File Uploads & E-Signatures",
                "Salesforce Native & Secure",
                "Real-time Data Validation",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-[#28aae1] mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#e0f7fc] border border-[#7dd3e8] rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">
                  Available on AppExchange
                </p>
                <p className="text-sm text-slate-500">
                  Salesforce certified & security reviewed
                </p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-[#43AF57]">
                  11+
                </span>
                <p className="text-xs text-slate-500">verified reviews</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Use Cases
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Horizontal Product",
                  "Education",
                  "Nonprofit",
                  "Marketing",
                  "Information Management",
                  "Ratings & Reviews",
                ].map((u) => (
                  <span
                    key={u}
                    className="bg-[#e0f7fc] border border-[#7dd3e8] text-[#0d6b8d] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://formvista.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#28aae1] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1a8ec4] transition-colors shadow-sm group"
              >
                Visit FormVista.com <ExternalLink size={15} />
              </a>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=cb060fcb-9641-4d9b-ab2f-2a9475b48081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#7dd3e8] text-[#0d6b8d] bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#e0f7fc] transition-colors"
              >
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RelationshipVista ─────────────────────── */}
      <section
        id="relationshipvista"
        className="py-24 px-6 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div className="flex items-center">
              <img
                src={relationshipVistaLogo}
                alt="Relationship Vista"
                className="h-22 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">
              Relationship Vista: Uncover Deeper Insights with Simplified
              Relationship Mapping
            </h2>
            <p className="text-base md:text-lg font-medium text-sky-600">
              Uncover & Visualize Your Salesforce Relationships
            </p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              RelationshipVista helps gain Insights into Complex Hierarchies and
              Customer Relationships. Explore Salesforce Data with Ease for
              Informed Decisions, Pattern Identification, and Process
              Optimization. Customize Relationship Maps with Relationship Views,
              similar to SF list views.
            </p>
            <div className="space-y-3">
              {[
                "Rich interactive relationship graphs",
                "Embed data maps in any record detail page",
                "Visualize one-to-one and many relationships",
                "Filter, group, and drill down across records",
                "Mobile responsive and Lightning-ready",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-sky-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">
                  Available on AppExchange
                </p>
                <p className="text-sm text-slate-500">
                  Salesforce certified & security reviewed
                </p>
              </div>
              {/* <div className="text-right">
                <span className="text-3xl font-extrabold text-[#43AF57]"></span>
                <p className="text-xs text-slate-500">verified reviews</p>
              </div> */}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Use Cases
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hierarchy Visualization",
                  "Data Grouping",
                  "Relationship Mapping",
                  "Filter Configuration",
                  "Data Visualization",
                ].map((u) => (
                  <span
                    key={u}
                    className="bg-sky-50 border border-sky-200 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/relationship-vista-user-guide"
                className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors"
              >
                User Guide <ArrowRight size={15} />
              </Link>
              <Link
                to="/relationship-vista-installation-guide"
                className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors"
              >
                Installation Guide <ArrowRight size={15} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://relationshipvista.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-700 transition-colors shadow-sm group"
              >
                Visit Website <ExternalLink size={15} />
              </a>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors"
              >
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 flex items-center"
          >
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-6 flex items-center justify-center min-h-[400px] w-full h-[600px]">
              <img
                src={rvProductCard}
                alt="RelationshipVista Product Card"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ComplianceVista ───────────────────────── */}
      <section
        id="compliancevista"
        className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 flex items-center"
          >
            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-3xl p-6 flex items-center justify-center shadow-xl w-full h-[600px]">
              <img
                src={cvProductCard}
                alt="ComplianceVista Product Card"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div className="flex items-center">
              <img
                src={complianceVistaLogo}
                alt="Compliance Vista"
                className="h-12 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">
              Compliance Vista – Assessment & Compliance Management – In your
              Salesforce Org
            </h2>
            <p className="text-base md:text-lg font-medium text-violet-600">
              Automate assessments, reduce risk, and ensure compliance inside
              Salesforce
            </p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              ComplianceVista extends SurveyVista into a Salesforce-native
              platform for 360 employee reviews, vendor due diligence,
              compliance checks, and audits. Automate workflows, consolidate
              scoring, and manage all assessments securely in Salesforce.
            </p>
            <div className="space-y-3">
              {[
                "Automated Task Assignment",
                "Evidence Collection Workflows",
                "Audit Trail Logging",
                "Regulatory Reporting",
                "Risk Assessment Matrices",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-violet-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">
                  Available on AppExchange
                </p>
                <p className="text-sm text-slate-500">
                  Salesforce certified & security reviewed
                </p>
              </div>
              {/* <div className="text-right">
                <span className="text-3xl font-extrabold text-[#43AF57]"></span>
                <p className="text-xs text-slate-500">verified reviews</p>
              </div> */}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Use Cases
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Horizontal Product",
                  "Financial Services",
                  "Healthcare & Life Sciences",
                  "Audit & Compliance",
                  "Information Management",
                  "Security",
                ].map((u) => (
                  <span
                    key={u}
                    className="bg-violet-50 border border-violet-200 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://compliance-quest-page.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors shadow-sm group"
              >
                Visit Website <ExternalLink size={15} />
              </a>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000J6DYBUA3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-violet-300 text-violet-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-violet-50 transition-colors"
              >
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AgentVista ────────────────────────────── */}
      <section id="agentvista" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div className="flex items-center">
              <img
                src={agentVistaLogo}
                alt="Agent Vista"
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">
              AgentVista – SurveyVista Copilot for Intelligent Surveys, Forms,
              and Assessments
            </h2>
            <p className="text-base md:text-lg font-medium text-amber-600">
              AI-Powered Feedback Automation with SurveyVista & Agentforce
            </p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              Harness the power of Agentforce with SurveyVista to drive
              intelligent feedback operations through AI powered survey & form
              generation, sentiment insights, and natural language actions for
              survey distribution, analytics, and lifecycle feedback automation.
            </p>
            <div className="space-y-3">
              {[
                "AI Survey Generation",
                "Form Creation from PDFs & Images",
                "Natural Language Agent Actions",
                "Sentiment Intelligence",
                "AI-Generated Survey Insights",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="text-amber-500 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">
                  Available on AppExchange
                </p>
                <p className="text-sm text-slate-500">
                  Salesforce certified & security reviewed
                </p>
              </div>
              {/* <div className="text-right">
                <span className="text-3xl font-extrabold text-[#43AF57]"></span>
                <p className="text-xs text-slate-500">verified reviews</p>
              </div> */}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Use Cases
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Horizontal Product",
                  "Education",
                  "Nonprofit",
                  "Sales",
                  "Customer Service",
                  "Surveys",
                ].map((u) => (
                  <span
                    key={u}
                    className="bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://agentvista-design.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm group"
              >
                Visit Website <ExternalLink size={15} />
              </a>
              <a
                href="https://appexchange.salesforce.com/appxListingDetail?listingId=c088b22e-a28b-4d93-bdf7-b950546b6e80"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-amber-300 text-amber-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-50 transition-colors"
              >
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 flex items-center"
          >
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-6 flex items-center justify-center w-full h-[600px]">
              <img
                src={avProductCard}
                alt="AgentVista Product Card"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ContactCta
        headline="Not sure which product is right for you?"
        description="Our team will walk you through the right fit for your org and use case."
        buttonText="Talk to an Expert"
      />

      <Footer />
    </div>
  );
}
