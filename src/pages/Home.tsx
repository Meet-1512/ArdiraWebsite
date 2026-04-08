import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";

const carouselSlides = [
  {
    headline: ["Best 100% Native Survey For ", "Salesforce", " Solution"],
    sub: "SurveyVista — Collect insights, run assessments, and build forms directly inside Salesforce.",
  },
  {
    headline: ["", "Salesforce", " App Development: From Concept to Development"],
    sub: "We build enterprise-grade AppExchange applications from ideation through security review.",
  },
  {
    headline: ["", "Salesforce", " Administration: Manage your Environment"],
    sub: "Certified admins keeping your org healthy, secure, and running at peak performance.",
  },
  {
    headline: ["We Are Experts At Building and Tuning ", "Force.com", " Applications"],
    sub: "50+ years of combined experience on the world's leading CRM platform.",
  },
  {
    headline: ["Visualize your ", "Salesforce", " Records Relationships & Hierarchies"],
    sub: "RelationshipVista — Interactive relationship maps with zero code required.",
  },
  {
    headline: ["", "Salesforce", " Application: Tuning Functionality and Performance"],
    sub: "Customization, integration, and optimization services to get the most from your org.",
  },
];

const whyChooseUs = [
  {
    num: "01",
    title: "Technology Passion",
    desc: "We are a creative group of professionals with a deep love for technology and a passion for building enterprise-scale software that drives organizational success. As a software services provider, we operate global delivery centers in the USA and India. Our team brings over 50 years of combined experience developing and deploying large-scale SaaS applications on leading PaaS platforms such as Force.com.",
    icon: Zap,
  },
  {
    num: "02",
    title: "Experience & Execution",
    desc: "Working hard and delivering results is our mantra. We have acted as a catalyst for growth by providing enterprise-grade software solutions to organizations. Our executive team has a proven track record of building successful SaaS applications and delivering high-quality software services projects.",
    icon: Award,
  },
  {
    num: "03",
    title: "Honesty & Simplicity",
    desc: "Our philosophy is rooted in simplicity. While you may not always agree with what we say, we are committed to being transparent and honest to simplify execution. We strongly believe that less is more—especially when it comes to managing complexity.",
    icon: Users,
  },
  {
    num: "04",
    title: "Adaptability & Affordability",
    desc: "Our ability to adapt to evolving technologies and business processes gives us a competitive edge. By leveraging both onshore and offshore resources, we deliver reliable and cost-effective solutions tailored to our clients' needs.",
    icon: Globe,
  },
];

const customers = ["eBay", "HP", "Marriot" , "UNICEF" , "Nissan" , "JCB" , "Volkswagen" , "FlixBus" , "TED"];

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

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % carouselSlides.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? 32 : -32, opacity: 0 }),
    center: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: number) => ({ y: dir > 0 ? -32 : 32, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans" data-testid="page-home">
      <Navbar />

      {/* ── Hero Carousel ───────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-[#43AF57] text-[#43AF57] text-sm font-semibold px-4 py-1.5 rounded-full mb-10 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#43AF57] animate-pulse" />
            100% Native Salesforce Software
          </motion.div>

          {/* Sliding headline — fixed height, no overflow-hidden clipping */}
          <div className="relative mb-5" style={{ minHeight: "10rem" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.h1
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-[1.1] tracking-tight text-[#0f172a]"
              >
                {carouselSlides[current].headline[0]}
                {carouselSlides[current].headline[1] && (
                  <span className="text-[#43AF57]">{carouselSlides[current].headline[1]}</span>
                )}
                {carouselSlides[current].headline[2]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
            >
              {carouselSlides[current].sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Link href="/products"
              className="bg-[#43AF57] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#43AF57] transition-colors shadow-md flex items-center justify-center gap-2 group"
            >
              Explore Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </motion.div>


          {/* Trust bar — infinite carousel */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Trusted by global enterprises</p>
            <div className="relative w-full overflow-hidden mx-auto">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#f0fdf4] to-transparent z-10 pointer-events-none" />
              <div className="flex items-center animate-marquee py-2 w-max" style={{ animationDuration: "35s" }}>
                {[...customers, ...customers, ...customers, ...customers].map((c, i) => (
                  <span key={`${c}-${i}`} className="text-slate-400 opacity-80 font-display font-extrabold text-xl md:text-2xl whitespace-nowrap mx-10 md:mx-14 flex-shrink-0">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us (editorial list) ──────── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-4">Why Choose Us</p>
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
                  onClick={() => setActiveWhy(activeWhy === i ? -1 : i)}
                  className="w-full text-justify group py-8 flex gap-8 md:gap-16 items-start"
                >
                  {/* Number */}
                  <span className={`text-4xl font-extrabold font-display transition-colors duration-300 shrink-0 w-16 ${activeWhy === i ? "text-[#43AF57]" : "text-slate-200 group-hover:text-emerald-300"}`}>
                    {item.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`text-xl md:text-2xl font-bold font-display transition-colors duration-200 ${activeWhy === i ? "text-[#43AF57]" : "text-[#0f172a] group-hover:text-[#43AF57]"}`}>
                        {item.title}
                      </h3>
                      <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeWhy === i ? "bg-[#43AF57] border-[#43AF57] text-white rotate-45" : "border-slate-200 text-slate-400 group-hover:border-[#43AF57] group-hover:text-[#43AF57]"}`}>
                        <ChevronRight size={16} />
                      </div>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {activeWhy === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#43AF57] mb-5">About Us</p>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#0f172a] leading-tight mb-7">
                Salesforce ISV Partner 
              </h2>
              <p className="text-slate-600 text-justify text-lg leading-relaxed mb-10">
                Ardira was founded in 2019 with a mission to revolutionize the technology landscape. What began as a small startup that has grown into a global leader in this Industry. 
              </p>
              <p className="text-slate-600 text-justify text-lg leading-relaxed mb-10"> 
                Ardira is a Salesforce ISV partner. We offer custom apps on Salesforce AppExchange. We also provide Salesforce implementation (configuration, customization, administration, and integration) services to businesses of all sizes and Salesforce Consulting organizations.
              </p>
              <Link href="/team"
                className="inline-flex items-center gap-2 bg-[#43AF57] text-white px-7 py-3.5 rounded-lg font-bold text-base hover:bg-[#43AF57] transition-colors shadow-sm group"
              >
                Meet Our Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full opacity-40 blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full opacity-40 blur-2xl" />
                <div className="relative bg-white rounded-3xl p-10 border border-slate-100 shadow-sm space-y-6">
                  {[
                    { label: "Years of Combined Experience", val: "50+" },
                    { label: "AppExchange Reviews", val: "250+" },
                    { label: "Enterprise Clients", val: "450+" },
                    { label: "Native Salesforce Products", val: "5" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                      <span className="text-sm text-slate-500 font-medium">{s.label}</span>
                      <span className="text-2xl font-extrabold font-display text-[#43AF57]">{s.val}</span>
                    </div>
                  ))}
                </div>
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
