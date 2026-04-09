import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  Users,
  Award,
  Globe,
  Shield,
  Star,
  Building2,
  Cloud,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import ebayLogo from "@/assets/TrustedEnterprise/ebay.webp";
import hpLogo from "@/assets/TrustedEnterprise/hp.webp";
import marriottLogo from "@/assets/TrustedEnterprise/marriott-international.webp";
import unicefLogo from "@/assets/TrustedEnterprise/unicef-new.webp";
import nissanLogo from "@/assets/TrustedEnterprise/nissan-new.webp";
import jcbLogo from "@/assets/TrustedEnterprise/jcb.webp";
import volkswagonLogo from "@/assets/TrustedEnterprise/volkswagon-new.webp";
import flixLogo from "@/assets/TrustedEnterprise/flix-new.webp";
import tedLogo from "@/assets/TrustedEnterprise/ted.webp";

const carouselSlides = [
  {
    headline: ["Best 100% Native ", "Salesforce", " Intelligence & Action Platform"],
    sub: "SurveyVista — Collect insights, run assessments, and build forms directly inside Salesforce.",
  },
  {
    headline: [
      "",
      "Salesforce",
      " App Development: From Concept to Development",
    ],
    sub: "We build enterprise-grade AppExchange applications from ideation through security review.",
  },
  {
    headline: ["", "Salesforce", " Administration: Manage your Environment"],
    sub: "Certified admins keeping your org healthy, secure, and running at peak performance.",
  },
  {
    headline: [
      "We Are Experts At Building and Tuning ",
      "Force.com",
      " Applications",
    ],
    sub: "50+ years of combined experience on the world's leading CRM platform.",
  },
  {
    headline: [
      "Visualize your ",
      "Salesforce",
      " Records Relationships & Hierarchies",
    ],
    sub: "RelationshipVista — Interactive relationship maps with zero code required.",
  },
  {
    headline: [
      "",
      "Salesforce",
      " Application: Tuning Functionality and Performance",
    ],
    sub: "Customization, integration, and optimization services to get the most from your org.",
  },
];

const whyChooseUs = [
  {
    num: "01",
    title: "Technology Passion",
    desc: "We are a team of technologists with a deep passion for building enterprise-grade software. With 50+ years of combined experience and global delivery centers in the USA and India, we develop and deploy large-scale Salesforce native applications that organizations depend on.",
    icon: Zap,
  },
  {
    num: "02",
    title: "Experience & Execution",
    desc: "Delivering results is at the core of everything we do. As a 100% Salesforce-native company, we empower organizations with enterprise-grade applications built entirely on the Salesforce platform. Our leadership team brings a strong track record of building and scaling successful SaaS products, along with delivering high-impact, high-quality software solutions that drive measurable business growth.",
    icon: Award,
  },
  {
    num: "03",
    title: "Honesty & Simplicity",
    desc: "Our philosophy is rooted in simplicity. While you may not always agree with what we say, we are committed to being transparent and honest to simplify execution. We strongly believe that less is more, especially when it comes to managing complexity.",
    icon: Users,
  },
  {
    num: "04",
    title: "Adaptability & Affordability",
    desc: "We adapt to your business, not the other way around. By combining onshore and offshore delivery, we bring the right expertise at the right time, giving enterprises reliable, scalable solutions aligned to their goals and timelines.",
    icon: Globe,
  },
];

const customers = [
  { name: "eBay", logo: ebayLogo },
  { name: "HP", logo: hpLogo },
  { name: "Marriott", logo: marriottLogo },
  { name: "UNICEF", logo: unicefLogo },
  { name: "Nissan", logo: nissanLogo },
  { name: "JCB", logo: jcbLogo },
  { name: "Volkswagen", logo: volkswagonLogo },
  { name: "FlixBus", logo: flixLogo },
  { name: "TED", logo: tedLogo },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeWhy, setActiveWhy] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % carouselSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // @ts-ignore
  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  // @ts-ignore
  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // @ts-ignore
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % carouselSlides.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? 32 : -32, opacity: 0 }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -32 : 32,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div
      className="min-h-screen bg-white text-[#0f172a] font-sans"
      data-testid="page-home"
    >
      <SEO
        title="Ardira | Enterprise Salesforce Solutions & AppExchange Applications"
        description="Ardira delivers 100% native Salesforce applications including SurveyVista, FormVista, RelationshipVista, ComplianceVista, and AgentVista. Trusted by 450+ enterprise clients worldwide."
        keywords="Salesforce apps, AppExchange applications, enterprise software, Salesforce native solutions"
        ogTitle="Ardira - Enterprise Salesforce Solutions"
        ogDescription="Build, deploy, and optimize enterprise-grade Salesforce native applications"
        ogUrl="https://www.ardira.com"
      />
      <StructuredData
        type="Organization"
        data={{
          foundingDate: "2015",
          areaServed: ["US", "IN"],
          numberOfEmployees: "50+",
        }}
      />
      <Navbar />

      {/* ── Hero Carousel ───────────────────────── */}
      <section
        className="relative bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] pt-32 pb-20 px-6"
        style={{ height: "100vh" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col h-full justify-between">
          {/* Top section */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-[#43AF57] text-[#43AF57] text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm self-center"
              style={{ height: "2.5rem", marginBottom: "3rem" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#43AF57] animate-pulse" />
              100% Native Salesforce Software
            </motion.div>

            {/* Headline - Fixed height with larger container */}
            <div
              className="relative"
              style={{ height: "13rem", marginBottom: "2rem" }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.h1
                  key={current}
                  custom={direction}
                  variants={slideVariants as any}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-[1.1] tracking-tight text-[#0f172a]"
                >
                  {carouselSlides[current].headline[0]}
                  {carouselSlides[current].headline[1] && (
                    <span className="text-[#43AF57]">
                      {carouselSlides[current].headline[1]}
                    </span>
                  )}
                  {carouselSlides[current].headline[2] && carouselSlides[current].headline[2]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle - Fixed height with larger container */}
            <div style={{ height: "4rem", marginBottom: "0" }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${current}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal"
                >
                  {carouselSlides[current].sub}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom section - CTAs and Trust bar */}
          <div className="flex flex-col items-center">
            {/* CTAs - Fixed position */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ height: "3.5rem", marginBottom: "2rem" }}
            >
              <Link
                href="/products"
                className="bg-[#43AF57] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#43AF57] transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                Explore Products{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            {/* Trust bar — infinite carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Trusted by global enterprises
              </p>
              <div className="relative w-full overflow-hidden mx-auto">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#f0fdf4] to-transparent z-10 pointer-events-none" />
                <div
                  className="flex items-center animate-marquee py-2 w-max"
                  style={{ animationDuration: "35s" }}
                >
                  {[...customers, ...customers, ...customers, ...customers].map(
                    (c, i) => (
                      <div
                        key={`${c.name}-${i}`}
                        className="flex items-center justify-center mx-10 md:mx-14 flex-shrink-0 h-12 md:h-14"
                      >
                        <img
                          src={c.logo}
                          alt={c.name}
                          className="max-h-full max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us (editorial list) ──────── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] leading-tight max-w-xl">
              What Sets Ardira Apart
            </h2>
          </motion.div>

          <div className="divide-y divide-slate-100">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onMouseEnter={() => setActiveWhy(i)}
                  onMouseLeave={() => setActiveWhy(-1)}
                  className="w-full group py-8 flex gap-8 md:gap-16 items-start"
                >
                  {/* Icon */}
                  <span
                    className={`text-3xl transition-colors duration-300 shrink-0 w-16 flex items-center justify-center ${activeWhy === i ? "text-[#43AF57]" : "text-slate-300 group-hover:text-emerald-300"}`}
                  >
                    <item.icon size={32} />
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`text-xl md:text-2xl font-bold font-display transition-colors duration-200 ${activeWhy === i ? "text-[#43AF57]" : "text-[#0f172a] group-hover:text-[#43AF57]"}`}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeWhy === i ? "bg-[#43AF57] border-[#43AF57] text-white rotate-45" : "border-slate-200 text-slate-400 group-hover:border-[#43AF57] group-hover:text-[#43AF57]"}`}
                      >
                        <ChevronRight size={16} />
                      </div>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {activeWhy === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            marginTop: 16,
                          }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="text-slate-500 text-base leading-relaxed overflow-hidden"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Us ────────────────────────────── */}
      <section className="py-28 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-5">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#0f172a] leading-tight mb-7">
                Salesforce ISV Partner
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Founded in 2019, Ardira set out with a clear mission to build powerful, 
                100% native Salesforce applications that enterprises can trust. 
                What began as a small startup has grown into a recognized Salesforce ISV partner, 
                delivering a suite of applications available on the Salesforce AppExchange.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Everything we build lives natively inside Salesforce, 
                designed from the ground up to help enterprises work better, move faster, 
                and scale with confidence. As a Salesforce ISV partner, 
                we are committed to building products that are secure, reliable, and built to grow with your business.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 bg-[#43AF57] text-white px-7 py-3.5 rounded-lg font-bold text-base hover:bg-[#43AF57] transition-colors shadow-sm group"
              >
                Meet Our Team{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    label: "Years of Combined Experience",
                    val: "50+",
                    icon: Shield,
                    bgColor: "bg-blue-100",
                    iconColor: "text-blue-600",
                  },
                  {
                    label: "AppExchange Reviews",
                    val: "250+",
                    icon: Star,
                    bgColor: "bg-green-100",
                    iconColor: "text-green-600",
                  },
                  {
                    label: "Enterprise Clients",
                    val: "450+",
                    icon: Building2,
                    bgColor: "bg-amber-100",
                    iconColor: "text-amber-600",
                  },
                  {
                    label: "Native Salesforce Products",
                    val: "5",
                    icon: Cloud,
                    bgColor: "bg-purple-100",
                    iconColor: "text-purple-600",
                  },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <div
                        className={`${stat.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon size={28} className={stat.iconColor} />
                      </div>
                      <p className="text-2xl md:text-3xl font-bold font-display text-[#43AF57] mb-2">
                        {stat.val}
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 font-medium leading-snug">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCta />

      <Footer />
    </div>
  );
}
