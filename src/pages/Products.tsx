import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, BarChart2, GitBranch, Shield, Bot, FileText, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans" data-testid="page-products">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#43AF57] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Our Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight text-[#0f172a] mb-7">
              Native. Powerful. <span className="text-[#43AF57]">Proven.</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Five products built entirely on Salesforce. No data leaves your org — just immediate, integrated value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SurveyVista ─────────────────────────────── */}
      <section id="surveyvista" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl">
              <BarChart2 size={20} className="text-[#43AF57]" />
              <span className="text-xs font-bold text-[#43AF57] uppercase tracking-widest">Product 01</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">Survey Vista: Forms, Surveys, Quizzes, and Checklists – 100% Native Salesforce</h2>
            <p className="text-base md:text-lg font-medium text-[#43AF57]">Turn Survey & Form Data into Actionable Insights That Drive Results!</p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              SurveyVista Automate data collection and feedback management solution. Boost response rates with branded Surveys, Forms, and Assessments. 100% Native, no-code, Salesforce integration to gain actionable insights that enhance customer, employee, and partner experiences
            </p>
            <div className="space-y-3">
              {['Surveys, Quizzes, Checklists & Assessments', '100% Native & Secure', 'NPS Tracking & CSAT', 'Multi-language Support', 'Advanced Logic & Routing'].map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#43AF57] mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">Available on AppExchange</p>
                <p className="text-sm text-slate-500">Salesforce certified & security reviewed</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-[#43AF57]">191+</span>
                <p className="text-xs text-slate-500">verified reviews</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Use Cases</p>
              <div className="flex flex-wrap gap-2">
                {['Horizontal Product', 'Education', 'Healthcare & Life Sciences', 'Customer Service', 'Surveys' ,'Ratings & Reviews'].map(u => (
                  <span key={u} className="bg-emerald-50 border border-emerald-200 text-[#43AF57] px-3 py-1 rounded-full text-xs font-semibold">{u}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://surveyvista.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#43AF57] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#43AF57] transition-colors shadow-sm group">
                Visit SurveyVista.com <ExternalLink size={15} />
              </a>
              <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FYkISUA1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#43AF57] text-[#43AF57] bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors">
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-10 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
                <div className="bg-emerald-600 px-6 py-4"><div className="w-40 h-3 bg-white/40 rounded-full" /></div>
                <div className="p-6 space-y-5">
                  <div>
                    <div className="w-3/4 h-2 bg-slate-200 rounded mb-4" />
                    <div className="space-y-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 border-emerald-600 ${i===2 ? 'bg-emerald-600' : 'bg-white'}`} />
                          <div className="w-2/5 h-2 bg-slate-100 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <div className="w-1/2 h-2 bg-slate-200 rounded mb-4" />
                    <div className="flex justify-between gap-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`flex-1 h-9 rounded-lg border text-xs font-bold flex items-center justify-center ${i===4 ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-200 text-slate-400'}`}>{i}</div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg text-center">Submit Response</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FormVista ─────────────────────────────── */}
      <section id="formvista" className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-10 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
                <div className="bg-teal-600 px-6 py-4 flex items-center gap-3">
                  <FileText size={18} className="text-white" />
                  <div className="w-28 h-2.5 bg-white/40 rounded-full" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="w-1/3 h-2 bg-teal-200 rounded mb-2" />
                    <div className="w-full h-9 rounded-lg border border-slate-200 bg-slate-50" />
                  </div>
                  <div>
                    <div className="w-1/4 h-2 bg-teal-200 rounded mb-2" />
                    <div className="w-full h-9 rounded-lg border border-slate-200 bg-slate-50" />
                  </div>
                  <div>
                    <div className="w-2/5 h-2 bg-teal-200 rounded mb-2" />
                    <div className="w-full h-16 rounded-lg border border-slate-200 bg-slate-50" />
                  </div>
                  <div className="bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-lg text-center">Submit Form</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 bg-teal-50 border border-teal-100 px-4 py-2 rounded-xl">
              <FileText size={20} className="text-teal-600" />
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Product 02</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">Form Vista: 100% Native Forms, Surveys, Quizzes, Checklists, and Assessments</h2>
            <p className="text-base md:text-lg font-medium text-teal-600">Endless Applications: The 5-star rated Data Collection Solution You Need.</p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              FormVista is all-in-one Salesforce-native solution for creating, managing, and analyzing forms and surveys. Effortlessly collect data, integrate with CRM for real-time insights, and act on data to enhance experiences, leveraging dynamic forms and robust security.
            </p>
            <div className="space-y-3">
              {['Drag & Drop Builder', 'Conditional Logic & Dynamic Fields', 'File Uploads & E-Signatures', 'Salesforce Native & Secure', 'Real-time Data Validation'].map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">Available on AppExchange</p>
                <p className="text-sm text-slate-500">Salesforce certified & security reviewed</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Use Cases</p>
              <div className="flex flex-wrap gap-2">
                {['Horizontal Product', 'Education', 'Nonprofit', 'Marketing', 'Information Management','Ratings & Reviews'].map(u => (
                  <span key={u} className="bg-teal-50 border border-teal-200 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">{u}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://formvista.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors shadow-sm group">
                Visit FormVista.com <ExternalLink size={15} />
              </a>
              <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=cb060fcb-9641-4d9b-ab2f-2a9475b48081" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-teal-300 text-teal-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors">
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RelationshipVista ─────────────────────── */}
      <section id="relationshipvista" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 bg-sky-50 border border-sky-100 px-4 py-2 rounded-xl">
              <GitBranch size={20} className="text-sky-600" />
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">Product 03</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">Relationship Vista: Uncover Deeper Insights with Simplified Relationship Mapping</h2>
            <p className="text-base md:text-lg font-medium text-sky-600">Uncover & Visualize Your Salesforce Relationships</p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              RelationshipVista helps gain Insights into Complex Hierarchies and Customer Relationships. Explore Salesforce Data with Ease for Informed Decisions, Pattern Identification, and Process Optimization. Customize Relationship Maps with Relationship Views, similar to SF list views.
            </p>
            <div className="space-y-3">
              {['Rich interactive relationship graphs', 'Embed data maps in any record detail page', 'Visualize one-to-one and many relationships', 'Filter, group, and drill down across records', 'Mobile responsive and Lightning-ready'].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-sky-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">Available on AppExchange</p>
                <p className="text-sm text-slate-500">Salesforce certified & security reviewed</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Use Cases</p>
              <div className="flex flex-wrap gap-2">
                {['Healthcare & Life Sciences', 'High Tech', 'Manufacturing', 'Productivity', 'Sales Intelligence', 'Data Visualization'].map(u => (
                  <span key={u} className="bg-sky-50 border border-sky-200 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">{u}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://relationshipvista.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-700 transition-colors shadow-sm group">
                Visit Website <ExternalLink size={15} />
              </a>
              <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors">
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-10 flex items-center justify-center">
              <svg width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                <line x1="130" y1="130" x2="60" y2="70" stroke="#93c5fd" strokeWidth="2" />
                <line x1="130" y1="130" x2="200" y2="60" stroke="#93c5fd" strokeWidth="2" />
                <line x1="130" y1="130" x2="210" y2="180" stroke="#93c5fd" strokeWidth="2" />
                <line x1="130" y1="130" x2="55" y2="190" stroke="#93c5fd" strokeWidth="2" />
                <line x1="200" y1="60" x2="230" y2="110" stroke="#93c5fd" strokeWidth="2" />
                <circle cx="130" cy="130" r="22" fill="#0284c7" />
                <circle cx="60" cy="70" r="13" fill="white" stroke="#0284c7" strokeWidth="2.5" />
                <circle cx="200" cy="60" r="16" fill="#0ea5e9" />
                <circle cx="210" cy="180" r="11" fill="white" stroke="#0284c7" strokeWidth="2.5" />
                <circle cx="55" cy="190" r="16" fill="#38bdf8" />
                <circle cx="230" cy="110" r="8" fill="white" stroke="#0284c7" strokeWidth="2.5" />
                <text x="130" y="135" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Acct</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ComplianceVista ───────────────────────── */}
      <section id="compliancevista" className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 bg-violet-50 border border-violet-100 px-4 py-2 rounded-xl">
              <Shield size={20} className="text-violet-600" />
              <span className="text-xs font-bold text-violet-700 uppercase tracking-widest">Product 04</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">Compliance Vista – Assessment & Compliance Management – In your Salesforce Org</h2>
            <p className="text-base md:text-lg font-medium text-violet-600">Automate assessments, reduce risk, and ensure compliance inside Salesforce</p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              ComplianceVista extends SurveyVista into a Salesforce-native platform for 360 employee reviews, vendor due diligence, compliance checks, and audits. Automate workflows, consolidate scoring, and manage all assessments securely in Salesforce.
            </p>
            <div className="space-y-3">
              {['Automated Task Assignment', 'Evidence Collection Workflows', 'Audit Trail Logging', 'Regulatory Reporting', 'Risk Assessment Matrices'].map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-violet-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">Available on AppExchange</p>
                <p className="text-sm text-slate-500">Salesforce certified & security reviewed</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Use Cases</p>
              <div className="flex flex-wrap gap-2">
                {['Horizontal Product', 'Financial Services', 'Healthcare & Life Sciences', 'Audit & Compliance', 'Information Management','Security'].map(u => (
                  <span key={u} className="bg-violet-50 border border-violet-200 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold">{u}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://compliance-quest-page.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors shadow-sm group">
                Visit Website <ExternalLink size={15} />
              </a>
              <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000J6DYBUA3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-violet-300 text-violet-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-violet-50 transition-colors">
                View on AppExchange <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-3xl p-10 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-violet-100 overflow-hidden">
                <div className="bg-violet-600 px-6 py-4 flex items-center justify-between">
                  <div className="w-32 h-2.5 bg-white/40 rounded-full" />
                  <div className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded">Q1 2025</div>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { label: 'GDPR Data Processing', status: 'Complete', color: 'bg-emerald-100 text-emerald-700' },
                    { label: 'SOC 2 Evidence Review', status: 'In Progress', color: 'bg-amber-100 text-amber-700' },
                    { label: 'ISO 27001 Audit', status: 'Pending', color: 'bg-slate-100 text-slate-500' },
                    { label: 'HIPAA Risk Assessment', status: 'Complete', color: 'bg-emerald-100 text-emerald-700' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-xs font-medium text-slate-700">{item.label}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AgentVista ────────────────────────────── */}
      <section id="agentvista" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-10 flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
                <div className="bg-amber-500 px-6 py-4 flex items-center gap-3">
                  <Bot size={18} className="text-white" />
                  <div className="w-24 h-2.5 bg-white/40 rounded-full" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs text-amber-800">Found 3 high-value accounts not contacted in 90 days. Create follow-up tasks?</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#0f172a] rounded-xl p-3 max-w-[75%]">
                      <p className="text-xs text-white">Yes, assign to regional reps.</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs text-amber-800">Done! Created 3 tasks and sent email reminders.</p>
                  </div>
                  <div className="bg-[#43AF57] text-white text-xs font-bold px-4 py-2 rounded-lg text-center">3 tasks created ✓</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-100 px-4 py-2 rounded-xl">
              <Bot size={20} className="text-amber-600" />
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Product 05</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a]">AgentVista – SurveyVista Copilot for Intelligent Surveys, Forms, and Assessments</h2>
            <p className="text-base md:text-lg font-medium text-amber-600">AI-Powered Feedback Automation with SurveyVista & Agentforce</p>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed font-normal">
              Harness the power of Agentforce with SurveyVista to drive intelligent feedback operations through AI powered survey & form generation, sentiment insights, and natural language actions for survey distribution, analytics, and lifecycle feedback automation.
            </p>
            <div className="space-y-3">
              {['AI Survey Generation', 'Form Creation from PDFs & Images', 'Natural Language Agent Actions', 'Sentiment Intelligence', 'AI-Generated Survey Insights'].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f172a]">Available on AppExchange</p>
                <p className="text-sm text-slate-500">Salesforce certified & security reviewed</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Use Cases</p>
              <div className="flex flex-wrap gap-2">
                {['Horizontal Product', 'Education', 'Nonprofit', 'Sales','Customer Service','Surveys'].map(u => (
                  <span key={u} className="bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">{u}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://agentvista-design.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm group">
                Visit Website <ExternalLink size={15} />
              </a>
              <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=c088b22e-a28b-4d93-bdf7-b950546b6e80" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-amber-300 text-amber-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-amber-50 transition-colors">
                View on AppExchange <ArrowRight size={15} />
              </a>
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
