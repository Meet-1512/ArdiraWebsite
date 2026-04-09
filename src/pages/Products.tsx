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
import cvProductCard from "@assets/ProductCard/CV_ProductCard.jpg";
import svProductCard from "@assets/ProductCard/SV_ProductCard.png";
import fvProductCard from "@assets/ProductCard/FV_ProductCard.jpg";
import avProductCard from "@assets/ProductCard/AV_ProductCard.png";

import svTestimonialLogo1 from "@assets/SVTestimonialLogo/ebayLogo.jpeg";
import svTestimonialLogo2 from "@assets/SVTestimonialLogo/ArianeLogo.jpeg";
import svTestimonialLogo3 from "@assets/SVTestimonialLogo/maxeonLogo.jpeg";
import svTestimonialLogo4 from "@assets/SVTestimonialLogo/ALogo.jpeg";
import svTestimonialLogo5 from "@assets/SVTestimonialLogo/VizergyLogo.jpeg";

import fvTestimonialLogo1 from "@assets/fvtestimoniallogo/BedrockSuccess.jpeg";
import fvTestimonialLogo2 from "@assets/fvtestimoniallogo/jcbLogo.jpeg";
import fvTestimonialLogo3 from "@assets/fvtestimoniallogo/mentorLogo.jpeg";

import rvTestimonialLogo1 from "@assets/RVTestimonialLogo/SmiLogo.jpeg";
import rvTestimonialLogo2 from "@assets/RVTestimonialLogo/SteamlineEdgeLogo.png";

import cvTestimonialLogo1 from "@assets/CVTestimonialLogo/CIonDemandLogo.jpeg";
import cvTestimonialLogo2 from "@assets/CVTestimonialLogo/FujifilmLogo.jpeg";

import avTestimonialLogo1 from "@assets/AVTestimonialLogo/FortyCarrotsFamilyCenterLogo.jpeg";
import avTestimonialLogo2 from "@assets/AVTestimonialLogo/WorkMotionLogo.jpeg";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const svTestimonials = [
  {
    id: 1,
    title: "Perfect survey app for our needs",
    description:
      "I was evaluating 5 of the most well knowns apps for survey fully integrated with salesforce,and we decided to go with survey vista,The tool is really easy to use,it has morden user interface and is fully integrated with salesforce...",
    logo: svTestimonialLogo1,
  },
  {
    id: 2,
    title: "Great Product for a great price!",
    description:
      "we were looking for a simple survey tool to measure out CSAT and NPS guest satisfaction.we saw different pricing but clearly the SurveyVista tool was the one we needed...",
    logo: svTestimonialLogo2,
  },
  {
    id: 3,
    title: "very good tool!",
    description:
      "we have been working in SFDC in combination with an external survey tool for many years, changing to SurveyVista which is embedded into SFDC directly has turned out to be much more user-friendly for all of our key users...",
    logo: svTestimonialLogo3,
  },
  {
    id: 4,
    title: "Exceptional Service",
    description:
      "Service provided was quite exceptional from the initial contact right through installation and assistance with configuration. Highly recommended.",
    logo: svTestimonialLogo4,
  },
  {
    id: 5,
    title: "Fantastic surveys app",
    description:
      "I would highly recommended SurveyVista to anyone looking for a top notch survey solution. SurveyVista had all of the features we needed plus additional advanced features that we could leverage if needed one day...",
    logo: svTestimonialLogo5,
  },
];

const fvTestimonials = [
  {
    id: 1,
    title: "Amazing app: it's so powerful yet so easy to customise",
    description:
      "It's been an amazing journey with Ardira's FormVista: it started with very simple feedback forms for our students, then we created online assessment tests for them (in Latin, Greek and Hebrew!!), and now we design all our online application/registration forms for the various programs and courses using FormVista ...",
    logo: fvTestimonialLogo1,
  },
  {
    id: 2,
    title: "Knowledge Articles, Support and Capability",
    description:
      "As a new customer I am more than impressed with the knowledge articles that are provided. The articles are in depth and allow you to maximize the capability of the system. After I submitted a support ticket, the agent was not only responive and helpful but he walked me through the solution. Great system, and overall great customer resources. Looking forward to futher utlizing the tool.",
    logo: fvTestimonialLogo2,
  },
  {
    id: 3,
    title: "A very flexible survey platform with fantastic support",
    description:
      "We moved to this from SurveyMonkey as we wanted to move our data to within Salesforce. The platform has even more survey options with question types for every use case. The support team are also excellent, I recently had a question regarding reporting and the team spent 30 minutes on a call with me explaining all the different options I have available and even offer to build custom dashboards for you for an additional one time fee.",
    logo: fvTestimonialLogo3,
  },
];

const rvTestimonials = [
  {
    id: 1,
    title: "Great product!",
    description:
      "This component does exactly what it says, and is very easy to configure. Also want to say thank you to Reddy with helping us troubleshoot our installation. Their support is very responsive and easy to work with.",
    logo: rvTestimonialLogo1,
  },
  {
    id: 2,
    title: "Exceptional Service",
    description:
      "Service provided was quite exceptional from the initial contact right through installation and assistance with configuration. Highly recommended.",
    logo: rvTestimonialLogo2,
  },
];

const cvTestimonials = [
  {
    id: 1,
    title: "The technical support is excellent!",
    description:
      "The technical support is excellent and professional. They provided the best solution for our needs and were extremely patient throughout the process.",
    logo: cvTestimonialLogo1,
  },
  {
    id: 2,
    title: "Exceptional Service and Outstanding Value",
    description:
      "SurveyVista has been a game-changer for our team. From day one, their customer service stood out—fast responses, clear guidance, and proactive check-ins that made setup and rollout painless. The onboarding materials were concise, and support was always just a message away.Functionally, the platform delivers more than expected for the price...",
    logo: cvTestimonialLogo2,
  },
];

const avTestimonials = [
  {
    id: 1,
    title: "Amazing Partner",
    description:
      "We are a non-profit organization using Survey Vista to measure our impact in the community. SurveyVista is easy to use and has made such a huge difference in our program measurement data. In addition the team at SurveyVista has been amazing in helping us with set up and integration. We highly recommend this App.",
    logo: avTestimonialLogo1,
  },
  {
    id: 2,
    title: "Great product & team",
    description:
      "Since we started using SurveyVista, the support team has been exceptionally helpful and proactive, the tool is very useful & customizable.I highly recommend it.",
    logo: avTestimonialLogo2,
  },
];

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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Product Info */}
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
                    "Customer Experience",
                    "Marketing",
                    "Sales",
                    "Operations",
                    "Employee Experience",
                    "Compliance & Risk",
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

            {/* Right Column - Sticky Image and Testimonial */}
            <div className="flex flex-col">
              {/* Sticky Product Card - stays at top */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-24 h-fit mb-80"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-6 flex items-center justify-center w-full h-[350px]">
                  <img
                    src={svProductCard}
                    alt="SurveyVista Product Card"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
              </motion.div>

              {/* Testimonial Carousel - starts at AppExchange level */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="-mt-21"
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3500,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {svTestimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.id}>
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
                                {testimonial.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {testimonial.description}
                              </p>
                            </div>
                            <div className="flex items-center pt-4 border-t border-slate-100">
                              <img
                                src={testimonial.logo}
                                alt="Company Logo"
                                className="h-12 w-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                </Carousel>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FormVista ─────────────────────────────── */}
      <section
        id="formvista"
        className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Sticky Image and Testimonial */}
            <div className="flex flex-col lg:order-1">
              {/* Sticky Product Card - stays at top */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-24 h-fit mb-95"
              >
                <div className="bg-gradient-to-br from-[#e0f7fc] to-[#b3e9f5] rounded-3xl p-6 flex items-center justify-center w-full h-[350px]">
                  <img
                    src={fvProductCard}
                    alt="FormVista Product Card"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
              </motion.div>

              {/* Testimonial Carousel - starts at AppExchange level */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="-mt-29"
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3500,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {fvTestimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.id}>
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
                                {testimonial.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {testimonial.description}
                              </p>
                            </div>
                            <div className="flex items-center pt-4 border-t border-slate-100">
                              <img
                                src={testimonial.logo}
                                alt="Company Logo"
                                className="h-12 w-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                </Carousel>
              </motion.div>
            </div>

            {/* Right Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-7 lg:order-2"
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
                    "Service & Support",
                    "Sales",
                    "Marketing",
                    "Human Resource",
                    "Product Discovery",
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
        </div>
      </section>

      {/* ── RelationshipVista ─────────────────────── */}
      <section
        id="relationshipvista"
        className="py-24 px-6 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-7 lg:order-1"
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
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Use Cases
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Hierarchy Visualization",
                    "Opportunity Grouping",
                    "Record Filtering",
                    "Quick Record Access",
                    "Case Intelligence",
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

            {/* Right Column - Sticky Image and Testimonial */}
            <div className="flex flex-col lg:order-2">
              {/* Sticky Product Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-24 h-fit mb-100"
              >
                <div className="w-full h-80 bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={rvProductCard}
                    alt="Relationship Vista Product Card"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
              </motion.div>

              {/* Testimonial Carousel - starts at AppExchange level */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="-mt-24"
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3500,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {rvTestimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.id}>
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
                                {testimonial.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {testimonial.description}
                              </p>
                            </div>
                            <div className="flex items-center pt-4 border-t border-slate-100">
                              <img
                                src={testimonial.logo}
                                alt="Company Logo"
                                className="h-12 w-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                </Carousel>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ComplianceVista ───────────────────────── */}
      <section
        id="compliancevista"
        className="py-24 px-6 bg-[#f8fafc] border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Sticky Image and Testimonial */}
            <div className="flex flex-col lg:order-1">
              {/* Sticky Product Card - stays at top */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-24 h-fit mb-88"
              >
                <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-3xl p-6 flex items-center justify-center w-full h-[350px]">
                  <img
                    src={cvProductCard}
                    alt="ComplianceVista Product Card"
                    className="w-full h-full object-cover rounded-2xl shadow-md"
                  />
                </div>
              </motion.div>

              {/* Testimonial Carousel - starts at AppExchange level */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="-mt-22"
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3500,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {cvTestimonials.map((testimonial) => (
                      <CarouselItem key={testimonial.id}>
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
                                {testimonial.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed">
                                {testimonial.description}
                              </p>
                            </div>
                            <div className="flex items-center pt-4 border-t border-slate-100">
                              <img
                                src={testimonial.logo}
                                alt="Company Logo"
                                className="h-12 w-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </motion.div>
            </div>

            {/* Right Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-7 lg:order-2"
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
                  "Employee 360 Assessments",
                  "Vendor Risk & Due Diligence (TPRM)",
                  "Compliance & Control Testing",
                  "Audit & Risk Assessments",
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
        </div>
      </section>

      {/* ── AgentVista ────────────────────────────── */}
      <section id="agentvista" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-7 lg:order-1"
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
                  "Customer Experience",
                  "Employee Engagement",
                  "Sales Enablement",
                  "Webinar & Event Feedback",
                  "Sales & Revenue",
                  "Marketing & Campaign",
                  "Partner & Vendor",
                  "Knowledge & Insight",
                  "Platform Admin & Ops",
                  "Cross Industry",
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

          {/* Right Column - Sticky Image and Testimonial */}
          <div className="flex flex-col lg:order-2">
            {/* Sticky Product Card - stays at top */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24 h-fit mb-88"
            >
              <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-6 flex items-center justify-center w-full h-[350px]">
                <img
                  src={avProductCard}
                  alt="AgentVista Product Card"
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                />
              </div>
            </motion.div>

            {/* Testimonial Carousel - starts at AppExchange level */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="-mt-25"
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3500,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {avTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
                              {testimonial.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {testimonial.description}
                            </p>
                          </div>
                          <div className="flex items-center pt-4 border-t border-slate-100">
                            <img
                              src={testimonial.logo}
                              alt="Company Logo"
                              className="h-12 w-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
          </div>
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
