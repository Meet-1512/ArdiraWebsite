import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rvInstallImage1 from "@/assets/RVInstallation/RelationshipVista-Installation-G.png";
import rvInstallImage2 from "@/assets/RVInstallation/RelationshipVista-Installation-G (1).png";
import rvInstallImage3 from "@/assets/RVInstallation/RelationshipVista-Installation-G (2).png";
import rvInstallImage4 from "@/assets/RVInstallation/RelationshipVista-Installation-G (3).png";
import rvInstallImage5 from "@/assets/RVInstallation/RelationshipVista-Installation-G (4).png";
import rvInstallImage6 from "@/assets/RVInstallation/RelationshipVista-Installation-G (5).png";
import rvInstallImage7 from "@/assets/RVInstallation/RelationshipVista-Installation-G (6).png";
import rvInstallImage8 from "@/assets/RVInstallation/RelationshipVista-Installation-G (7).png";
import rvInstallImage9 from "@/assets/RVInstallation/RelationshipVista-Installation-G (8).png";
import rvInstallImage10 from "@/assets/RVInstallation/RelationshipVista-Installation-G (9).png";
import rvInstallImage11 from "@/assets/RVInstallation/RelationshipVista-Installation-G (10).png";
import rvInstallImage12 from "@/assets/RVInstallation/RelationshipVista-Installation-G (11).png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function RelationshipVistaInstallationGuide() {
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
              RelationshipVista <span className="text-sky-600">Installation Guide</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Step-by-step instructions to install and configure RelationshipVista in your Salesforce org.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-semibold font-display text-[#0f172a] mb-8">Install RelationshipVista Package</h2>
            
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Follow these steps to install RelationshipVista in your Salesforce org:
            </p>

            <ol className="space-y-6 mb-8 ml-6 list-decimal">
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Access AppExchange:</strong> Visit <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-semibold">the RelationshipVista AppExchange listing</a> to begin the installation process.
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Click Get It Now:</strong> Click the "Get It Now" button to initiate the installation wizard.
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Login to Salesforce:</strong> You will be asked to login with your Salesforce Administrator credentials into the org where you want to install RelationshipVista.
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Choose Installation Org:</strong> Select whether you want to install RelationshipVista in a Sandbox or Production org.
              </li>
              <li className="text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Accept Terms:</strong> Check the box to accept the terms and conditions, then click "Confirm and Install".
              </li>
            </ol>

            <div className="my-8 rounded-xl overflow-hidden border border-sky-200 shadow-lg">
              <img src={rvInstallImage1} alt="RelationshipVista Installation Step 1" className="w-full h-auto" />
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 my-8">
              <p className="text-sm text-slate-700">
                <strong className="text-sky-700">Important:</strong> When installing RelationshipVista, we recommend that you select "Install for Admins Only". You can later give access to other users by updating their profiles and assigning permission sets.
              </p>
            </div>

            <h2 className="text-3xl font-semibold font-display text-[#0f172a] mb-8 mt-12">Configure User Access</h2>
            
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              To use RelationshipVista, users need to be granted permissions to an apex class and a custom object. You can do this either by assigning them a permission set or updating their profile.
            </p>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-8 mb-4">Option 1: Assigning Permission Set</h3>
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              This is the recommended approach as it's simpler and more maintainable.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-slate-700 flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                <span>Assign the packaged permission set <strong>"RV Standard User"</strong> to the user</span>
              </p>
            </div>

            <h3 className="text-2xl font-semibold font-display text-[#0f172a] mt-8 mb-4">Option 2: Updating User Profile</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              If you prefer to manage access through profiles, update the custom profile assigned to users with the following changes:
            </p>

            <h4 className="text-lg font-semibold font-display text-[#0f172a] mt-6 mb-3">Apex Class Access</h4>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-700 font-mono">RVController</p>
            </div>

            <div className="my-8 rounded-xl overflow-hidden border border-sky-200 shadow-lg">
              <img src={rvInstallImage6} alt="Apex Class Access Configuration" className="w-full h-auto" />
            </div>

            <h4 className="text-lg font-semibold font-display text-[#0f172a] mt-6 mb-3">Object Access</h4>
            <p className="text-sm text-slate-600 mb-3">Grant the following permissions on the <strong>RV Configuration</strong> custom object:</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 ml-4 space-y-2 text-sm">
              <p className="text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-600" /> Read
              </p>
              <p className="text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-600" /> Create
              </p>
              <p className="text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-600" /> Edit
              </p>
              <p className="text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-600" /> Delete
              </p>
              <p className="text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-sky-600" /> View All
              </p>
            </div>

            <div className="my-8 rounded-xl overflow-hidden border border-sky-200 shadow-lg">
              <img src={rvInstallImage7} alt="Object Access Configuration" className="w-full h-auto" />
            </div>

            <h4 className="text-lg font-semibold font-display text-[#0f172a] mt-6 mb-3">Fields Access</h4>
            <p className="text-sm text-slate-600 mb-3">Grant Read/Write access on the following <strong>RV Configuration</strong> fields:</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-8 ml-4 space-y-2 text-sm">
              <p className="text-slate-700">• Auto Expand Levels</p>
              <p className="text-slate-700">• Configuration</p>
              <p className="text-slate-700">• Max Visible Record Count</p>
              <p className="text-slate-700">• Pinned</p>
              <p className="text-slate-700">• Sharing Setting</p>
              <p className="text-slate-700">• Show</p>
            </div>

            <div className="my-8 rounded-xl overflow-hidden border border-sky-200 shadow-lg">
              <img src={rvInstallImage8} alt="Fields Access Configuration" className="w-full h-auto" />
            </div>

            <h2 className="text-3xl font-semibold font-display text-[#0f172a] mb-6 mt-12">Next Steps</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              After installation and configuration, refer to the <Link href="/relationship-vista-user-guide" className="text-sky-600 hover:text-sky-700 font-semibold">User Guide</Link> to learn how to configure and use RelationshipVista in your Salesforce org.
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
            <Link href="/relationship-vista-user-guide" className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors">
              User Guide
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
