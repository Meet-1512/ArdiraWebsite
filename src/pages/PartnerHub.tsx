import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Send,
  Layers,
  Share2,
  Sliders,
  TrendingUp,
  ClipboardCheck,
  Users,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";

import eightSquadLogo from "@/assets/TrustedPartner/8SquadLogo.png";
import accentureLogo from "@/assets/TrustedPartner/AccentureLogo.png";
import actumDigitalLogo from "@/assets/TrustedPartner/ActumDigitalLogo.png";
import allCloudLogo from "@/assets/TrustedPartner/AllCloudLogo.png";
import asugoLogo from "@/assets/TrustedPartner/AsugoLogo.jpg.jpeg";
import bearingLogo from "@/assets/TrustedPartner/BearingLogo.jpg.jpeg";
import capgeminiLogo from "@/assets/TrustedPartner/capgeminiLogo.png";
import nolticLogo from "@/assets/TrustedPartner/NolticLogo.png";
import syraGonLogo from "@/assets/TrustedPartner/SyraGonLogo.jpg.jpeg";
import veraSolutionLogo from "@/assets/TrustedPartner/VeraSolutionLogo.png";
import zenyusLogo from "@/assets/TrustedPartner/Zenyus.png";


const whyPartner = [
  {
    title: "Tailored Partner Tiers",
    desc: "Programs designed to match your growth stage — whether you're just starting or scaling rapidly.",
    icon: Layers,
  },
  {
    title: "Collaborative Marketing",
    desc: "Co-branded campaigns, case studies, and joint webinars to amplify your reach and credibility.",
    icon: Share2,
  },
  {
    title: "Flexible Models",
    desc: "Choose from referral, reseller, or technology partnership — whichever fits your business model.",
    icon: Sliders,
  },
  {
    title: "Shared Leads & GTM Support",
    desc: "Access to shared leads, joint go-to-market planning, and dedicated partner success resources.",
    icon: TrendingUp,
  },
];

const trustedPartners = [
  { name: "8Squad", logo: eightSquadLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "Actum Digital", logo: actumDigitalLogo },
  { name: "AllCloud", logo: allCloudLogo },
  { name: "Asugo", logo: asugoLogo },
  { name: "Bearing", logo: bearingLogo },
  { name: "Capgemini", logo: capgeminiLogo },
  { name: "Noltic", logo: nolticLogo },
  { name: "SyraGon", logo: syraGonLogo },
  { name: "VeraSolution", logo: veraSolutionLogo },
  { name: "Zenyus", logo: zenyusLogo },
];

export default function PartnerHub() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    country: "USA",
    partnerType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-white text-[#0f172a] font-sans"
      data-testid="page-partners"
    >
      <Navbar />

      {/* Why Partner */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              Why Partner With Us
            </p>
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
                  <item.icon size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#0f172a] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trusted Partners - Carousel */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              Our Global Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="relative w-full overflow-hidden mx-auto">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div
                className="flex items-center animate-marquee py-4 w-max"
                style={{ animationDuration: "40s" }}
              >
                {[...trustedPartners, ...trustedPartners, ...trustedPartners, ...trustedPartners].map(
                  (p, i) => (
                    <div
                      key={`${p.name}-${i}`}
                      className="flex items-center justify-center mx-10 md:mx-14 flex-shrink-0 h-14 md:h-16"
                    >
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-full max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-2xl mx-auto">
              Getting Started Is Simple
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Fill out the partner application form below. Tell us about your business and how you'd like to partner.",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Onboard",
                desc: "Our partner team will review your application and set you up with training, resources, and a dedicated partner manager.",
                icon: Users,
              },
              {
                step: "03",
                title: "Grow Together",
                desc: "Start referring, reselling, or integrating. Access joint GTM resources, shared leads, and co-marketing support.",
                icon: Rocket,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-extrabold font-display text-emerald-100 mb-4 flex justify-center">
                  <item.icon size={48} className="text-[#43AF57]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#0f172a] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section id="partner-form" className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Info Section - Green Background */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#43AF57] rounded-l-3xl p-8 flex flex-col justify-between text-white"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight mb-2">
                  Become a Partner
                </h2>
                <p className="text-lg text-green-50 mb-8 leading-relaxed">
                  Apply to Join Our Partner Network
                </p>

                <p className="text-lg leading-relaxed text-green-50 mb-8 pb-8">
                  Complete the form and a member of the Ardira Partnerships team
                  will be in touch to explore how we can accelerate your growth
                  together.
                </p>

                <div className="space-y-4">
                  {[
                    "Access exclusive partner-only resources and GTM support",
                    "Generous revenue sharing and referral programs",
                    "Dedicated partner success manager for your journey",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-white shrink-0 mt-0.5"
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification Badge */}
              <div className="mt-6 pt-4 border-t border-green-600">
                <p className="text-xs font-semibold text-green-100 uppercase tracking-widest mb-1">
                  Certified
                </p>
                <p className="text-lg font-bold">Ardira Trusted Partner</p>
              </div>
            </motion.div>

            {/* Right Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-r-3xl p-6"
            >
              {submitted ? (
                <div className="flex items-center justify-center">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-emerald-100 mb-4">
                      <CheckCircle size={32} className="text-[#43AF57]" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#0f172a] mb-3">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-slate-500 text-justify">
                      Thank you for your interest. Our partnerships team will
                      review your application and reach out within 2 business
                      days.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Business Email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                        Country / Region *
                      </label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            country: e.target.value,
                          })
                        }
                        className="w-full px-4 py-1.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="India">India</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Japan">Japan</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                        Partnership Type *
                      </label>
                      <select
                        required
                        value={formData.partnerType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            partnerType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-1.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select Partnership Type</option>
                        <option value="Reseller">Reseller</option>
                        <option value="Referral">Referral</option>
                        <option value="Technology">Technology</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0f172a] mb-1">
                      Tell us about your business
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-1.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your business"
                    />
                  </div>

                  <p className="text-xs text-slate-400 pt-0.5">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-[#43AF57] hover:underline">
                      privacy policy
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#43AF57] text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-emerald-600 transition-colors shadow-md flex items-center justify-center gap-2 group"
                  >
                    Submit Application{" "}
                    <Send
                      size={20}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
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
        buttonLink="#partner-form"
      />

      <Footer />
    </div>
  );
}
