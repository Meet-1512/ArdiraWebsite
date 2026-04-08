import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Handshake, TrendingUp, Share2, CheckCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";

const whyPartner = [
  {
    title: "Tailored Partner Tiers",
    desc: "Programs designed to match your growth stage — whether you're just starting or scaling rapidly.",
  },
  {
    title: "Collaborative Marketing",
    desc: "Co-branded campaigns, case studies, and joint webinars to amplify your reach and credibility.",
  },
  {
    title: "Flexible Models",
    desc: "Choose from referral, reseller, or technology partnership — whichever fits your business model.",
  },
  {
    title: "Shared Leads & GTM Support",
    desc: "Access to shared leads, joint go-to-market planning, and dedicated partner success resources.",
  },
];

export default function PartnerHub() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    partnerType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans" data-testid="page-partners">
      <Navbar />

      {/* Why Partner */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">Why Partner With Us</p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Built for Mutual Success
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPartner.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-emerald-50 mb-5 group-hover:bg-emerald-100 transition-colors">
                  <CheckCircle size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Getting Started Is Simple
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Apply", desc: "Fill out the partner application form below. Tell us about your business and how you'd like to partner." },
              { step: "02", title: "Onboard", desc: "Our partner team will review your application and set you up with training, resources, and a dedicated partner manager." },
              { step: "03", title: "Grow Together", desc: "Start referring, reselling, or integrating. Access joint GTM resources, shared leads, and co-marketing support." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-extrabold font-display text-emerald-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold font-display text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section id="partner-form" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">Become a Partner</p>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#0f172a] leading-tight mb-6">
                Apply to Join Our Partner Network
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Complete the form and a member of the Ardira Partnerships team will be in touch to explore how we can accelerate your growth together.
              </p>

              <div className="space-y-5">
                {[
                  "Tailored partner tiers to match your growth stage",
                  "Collaborative marketing and co-branded opportunities",
                  "Flexible models: referral, reseller, or tech partner",
                  "Access to shared leads and joint go-to-market support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#43AF57] shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12 text-center">
                  <div className="inline-flex p-4 rounded-full bg-emerald-100 mb-6">
                    <CheckCircle size={32} className="text-[#43AF57]" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#0f172a] mb-3">Application Submitted!</h3>
                  <p className="text-slate-500 text-justify">Thank you for your interest. Our partnerships team will review your application and reach out within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

  

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your business and how you'd like to partner..."
                    />
                  </div>

                  <p className="text-xs text-slate-400">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-[#43AF57] hover:underline">privacy policy</a>.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#43AF57] text-white px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-[#43AF57] transition-colors shadow-md flex items-center justify-center gap-2 group"
                  >
                    Submit Application <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCta
        headline="Ready to Partner with Ardira?"
        description="Get in touch and a member of the Ardira Partnerships team will be in contact to explore how we can accelerate your growth together."
        buttonText="Contact Our Partner Team"
      />

      <Footer />
    </div>
  );
}
