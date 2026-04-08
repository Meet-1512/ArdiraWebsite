import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function RelationshipVistaUserGuide() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(14,165,233,0.08),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/products#relationshipvista" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-6 font-semibold text-sm group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to RelationshipVista
          </Link>
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight text-[#0f172a] mb-4">
              RelationshipVista <span className="text-sky-600">User Guide</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Learn how to use RelationshipVista to visualize and navigate related records in your Salesforce org.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-semibold font-display text-[#0f172a] mb-6">Introduction</h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Ardira RelationshipVista ("RVC") is a Lightning Web Component (LWC) that allows you to quickly navigate and visualize all the related records of a record. The component can be dropped in a record detail page to visualize all the related records.
            </p>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-10 mb-4">Key Features</h3>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Automatic Navigation:</strong> Automatically allows your users to navigate and visualize all the related records.
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Relationship Views (R-Views):</strong> Create custom visualizations of related records tailored to your needs.
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">List View Style:</strong> R-Views are similar to Salesforce "List Views".
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Flexible Configuration:</strong> Choose to allow users to configure their own R-Views, or opt for pre-configured views to streamline data analysis.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-10 mb-4">Getting Started</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              To start using the Relationship Vista, follow these steps:
            </p>
            <ol className="space-y-3 mb-6 ml-6 list-decimal">
              <li className="text-slate-600 leading-relaxed">Edit your record detail page</li>
              <li className="text-slate-600 leading-relaxed">Create a custom tab or find a suitable location on the page</li>
              <li className="text-slate-600 leading-relaxed">Drop the "Ardira RelationshipVista" component on that page</li>
              <li className="text-slate-600 leading-relaxed">Name the custom tab appropriately (e.g., RelationshipVista)</li>
              <li className="text-slate-600 leading-relaxed">Save and activate the page</li>
            </ol>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-8">
              <p className="text-sm text-slate-700">
                <strong className="text-sky-700">Example:</strong> If you drop an RVC in your Account detail page, you will be able to visualize all Account-related records such as Opportunities, Contacts, Cases, and more.
              </p>
            </div>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-10 mb-4">Component Properties</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              RelationshipVista provides various configurable properties to customize the visualization and behavior of related records. Configure these properties based on your org's specific requirements.
            </p>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-10 mb-4">Relationship Views (R-Views)</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              R-Views allow you to create custom filters and visualizations for related records. You can set up multiple R-Views for different use cases and allow users to switch between them for better data analysis and decision-making.
            </p>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-10 mb-4">Miscellaneous Features</h3>
            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-slate-600 leading-relaxed">Rich interactive relationship graphs</li>
              <li className="text-slate-600 leading-relaxed">Embed data maps in any record detail page</li>
              <li className="text-slate-600 leading-relaxed">Visualize one-to-one and many-to-many relationships</li>
              <li className="text-slate-600 leading-relaxed">Filter, group, and drill down across records</li>
              <li className="text-slate-600 leading-relaxed">Mobile responsive and Lightning-ready</li>
            </ul>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-10 mb-4">Need Help?</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              For additional support, questions, or feature requests, please contact our team through the main website or refer to the Installation Guide for setup assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-sky-50 border-t border-sky-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold font-display text-[#0f172a] mb-4">Ready to Install?</h2>
          <p className="text-slate-600 mb-8">Start using RelationshipVista in your Salesforce org today</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/relationship-vista-installation-guide" className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors">
              Installation Guide
            </Link>
            <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-700 transition-colors shadow-sm">
              Install from AppExchange <Download size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
