import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Award, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import ardiraTeam from "@assets/ArdiraTeam.jpg";

import collab1 from "@assets/CollabTeam/Boddepalli-Vijaya-Vardhana-Rao.webp";
import collab2 from "@assets/CollabTeam/Dhaval-Patel.webp";
import collab3 from "@assets/CollabTeam/Jignesh-Sharma.webp";
import collab4 from "@assets/CollabTeam/Kishan-Parekh.webp";
import collab5 from "@assets/CollabTeam/Kush-Patel.webp";
import collab6 from "@assets/CollabTeam/Nirav-Prajapati.webp";
import collab7 from "@assets/CollabTeam/Reddy-Rachamallu.webp";
import collab8 from "@assets/CollabTeam/Sohil-Vainsh.webp";
import collab9 from "@assets/CollabTeam/Meet-Patel.png";
import collab10 from "@assets/CollabTeam/Param-Buddh.jpg";
import collab11 from "@assets/CollabTeam/Milan-gajera.png";
import collab12 from "@assets/CollabTeam/Jeni-Patel.jpg";
import collab13 from "@assets/CollabTeam/Trupal-Godhat.jpg";
import collab14 from "@assets/CollabTeam/Neel-Dobariya.jpg";
import collab15 from "@assets/CollabTeam/Brinda-Popat.webp";
import collab16 from "@assets/CollabTeam/Dhruvika-Babariya.webp";
import collab17 from "@assets/CollabTeam/Karan-Parmar.webp";
import collab18 from "@assets/CollabTeam/Kunj-Shah.webp";
import collab19 from "@assets/CollabTeam/Manav-Bhagiya.webp";
import collab20 from "@assets/CollabTeam/Naimish-Kalena.webp";
import collab21 from "@assets/CollabTeam/Parth-Mistry.webp";
import collab22 from "@assets/CollabTeam/Priyank-Gandhi.webp";
import collab23 from "@assets/CollabTeam/Priyank-Pandit.webp";
import collab24 from "@assets/CollabTeam/Raoul-Joachim.webp";
import collab25 from "@assets/CollabTeam/Sarang-Boda.webp";
import collab26 from "@assets/CollabTeam/Surbhi-Mohta.webp";
import collab27 from "@assets/CollabTeam/Tilak-Kundaliya.webp";

import rajesh from "@assets/ArdiraMind/rajesh.webp";
import hitesh from "@assets/ArdiraMind/hitesh.webp";
import brijesh from "@assets/ArdiraMind/brijesh.webp";
import qRegan from "@assets/ArdiraMind/LI-photo.webp";

import devAdvisor from "@assets/AdvisoryBoard/dev-advisor.webp";
import robertAdvisor from "@assets/AdvisoryBoard/robert.webp";
import davidAdvisor from "@assets/AdvisoryBoard/david.webp";



const collabTeamImages = [collab1, collab2, collab3, collab4, collab5, collab6, collab7, collab8, collab9, collab10, collab11, collab12, collab13, collab14, collab15, collab16, collab17, collab18, collab19, collab20, collab21, collab22, collab23, collab24, collab25, collab26, collab27];
const stats = [
  { value: "50+", label: "Years combined Salesforce experience" },
  { value: "450+", label: "Enterprise clients served" },
  { value: "250+", label: "AppExchange reviews" },
  { value: "5", label: "100% native Salesforce products" },
];

const values = [
  { icon: Zap, title: "Native First", desc: "We never build workarounds. Every product and solution lives entirely within the Salesforce platform — secure, scalable, and seamless." },
  { icon: Users, title: "Client Partnership", desc: "We treat every engagement as a long-term partnership. Your success is our success, and we stay with you through every phase." },
  { icon: Award, title: "Engineering Excellence", desc: "Our engineers hold multiple Salesforce certifications and have shipped products through the rigorous AppExchange security review process." },
  { icon: Globe, title: "Global Delivery", desc: "With offices in Santa Clara and India, we provide around-the-clock delivery and support across every time zone." },
];


const team = [
  {
    name: "Rajesh Unadkat",
    title: "Founder and CEO",
    bio: "Former Salesforce VP with 15+ years in cloud strategy.",
    initials: "RU",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    ring: "ring-emerald-200",
    image: rajesh,
  },
  {
    name: "Hitesh Malkan",
    title: "General Manager - India Operations",
    bio: "Architect of award-winning enterprise CRM platforms.",
    initials: "HM",
    bg: "bg-sky-100",
    text: "text-sky-700",
    ring: "ring-sky-200",
    image: hitesh,
  },
  {
    name: "Brijesh Popat",
    title: "VP of Software Services",
    bio: "Leading our global development teams with precision.",
    initials: "BP",
    bg: "bg-teal-100",
    text: "text-teal-700",
    ring: "ring-teal-200",
    image: brijesh,
  },
  {
    name: "Quinn Regan",
    title: "Senior Account Executive",
    bio: "Dedicated to creating user-centric Salesforce solutions.",
    initials: "QR",
    bg: "bg-violet-100",
    text: "text-violet-700",
    ring: "ring-violet-200",
    image: qRegan,
  },
];

const advisoryBoard = [
  {
    name: "Dev Ghoshal",
    title: "Advisory Team",
    image: devAdvisor,
    ringColor: "ring-emerald-400",
    shadowColor: "shadow-emerald-200",
  },
  {
    name: "Robert de Monts",
    title: "Advisory Team",
    image: robertAdvisor,
    ringColor: "ring-blue-400",
    shadowColor: "shadow-blue-200",
  },
  {
    name: "David Jackson",
    title: "Advisory Team",
    image: davidAdvisor,
    ringColor: "ring-cyan-400",
    shadowColor: "shadow-cyan-200",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans" data-testid="page-about">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#43AF57] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Our Team
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-[#0f172a] leading-tight mb-6">
              The People Behind <span className="text-[#43AF57]">Ardira</span>
            </h1>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Our team has Salesforce Certified Developers &amp; Administrators located in the US &amp; India — working with you 24×7 and cost-effectively. We combine years of experience across information security, compliance &amp; risk management, cloud computing, enterprise software, SaaS services, and large-scale software infrastructure.
            </p>
          </motion.div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <img
              src={ardiraTeam}
              alt="The Ardira Team"
              className="w-full rounded-2xl shadow-lg border border-slate-100"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#43AF57] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#0f172a] leading-tight mb-6">
              Making Salesforce Work Harder for You
            </h2>
            <p className="text-slate-500 text-justify text-lg leading-relaxed mb-6">
              Ardira was founded on a simple belief: Salesforce is the world's most powerful business platform, and most organizations are only scratching the surface of what it can do.
            </p>
            <p className="text-slate-500 text-justify text-lg leading-relaxed">
              Our mission is to close that gap — with native products that extend Salesforce capabilities, and expert services that ensure your org is configured, integrated, and running at its best.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all">
                  <div className="inline-flex p-2.5 rounded-xl bg-emerald-50 mb-4">
                    <v.icon size={20} className="text-[#43AF57]" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">{v.title}</h3>
                  <p className="text-sm text-justify text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#43AF57] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#0f172a] mb-4">
              The Minds Behind Ardira
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              A team of Salesforce veterans, product builders, and customer success champions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {team.slice(0, 4).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} className={`w-28 h-28 object-cover rounded-full ring-4 ${member.ring} mb-5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`} />
                ) : (
                  <div className={`w-28 h-28 rounded-full ${member.bg} ring-4 ${member.ring} flex items-center justify-center mb-5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    <span className={`text-2xl font-extrabold font-display ${member.text}`}>{member.initials}</span>
                  </div>
                )}
                <h3 className="text-base font-extrabold font-display text-[#0f172a] mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-[#43AF57] mb-3">{member.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-28 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] mb-4">
              Our Advisory Board
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Guided by industry leaders and visionaries who bring decades of experience to shape our strategic direction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {advisoryBoard.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-28 h-28 object-cover rounded-full ring-4 ${member.ringColor} mb-5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                />
                <h3 className="text-lg md:text-xl font-semibold font-display text-[#0f172a] mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-[#43AF57]">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Team */}
      <section className="py-24 px-6 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-semibold font-display text-[#0f172a] mb-6">
              Our Collaborative Team
            </h2>
            <p className="text-slate-500 text-justify text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-normal">
              Behind Ardira's success is our dynamic and collaborative team of professionals. From talented developers and data analysts to creative designers and dedicated support staff, our diverse team brings a wealth of skills and expertise to the table. We thrive on innovation and teamwork, consistently pushing the boundaries of what's possible. Our shared passion for delivering unparalleled solutions and providing exceptional service defines our culture.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative w-full mt-4 overflow-hidden">
          {/* Fade edges hugging the screen edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee py-6 items-center w-max" style={{ animationDuration: "50s" }}>
            {[...collabTeamImages, ...collabTeamImages, ...collabTeamImages, ...collabTeamImages].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="mx-6 shrink-0"
              >
                <img
                  src={img}
                  alt={`Team Member ${i}`}
                  className="w-40 h-40 object-cover rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-4 border-white transition-shadow hover:shadow-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        headline="Want to work with our team?"
        description="Reach out and let's explore how Ardira can help your business grow on Salesforce."
        buttonText="Get in Touch"
      />

      <Footer />
    </div>
  );
}
