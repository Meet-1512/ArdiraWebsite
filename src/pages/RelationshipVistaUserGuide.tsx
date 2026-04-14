import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Download, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import arvcImage1 from "@/assets/RVUser/ArdiraRelationshipVistaComponent/ardira-relationshipvista-component1.webp";
import arvcImage2 from "@/assets/RVUser/ArdiraRelationshipVistaComponent/ardira-relationshipvista-component2.webp";
import arvcImage3 from "@/assets/RVUser/ArdiraRelationshipVistaComponent/ardira-relationshipvista-component3.webp";
import arvcImage4 from "@/assets/RVUser/ArdiraRelationshipVistaComponent/ardira-relationshipvista-component4.webp";

import rvImage1 from "@/assets/RVUser/RelationshipViews/relationshipviews1.webp";
import rvImage2 from "@/assets/RVUser/RelationshipViews/relationshipviews2.webp";
import rvImage3 from "@/assets/RVUser/RelationshipViews/relationshipviews3.webp";
import rvImage4 from "@/assets/RVUser/RelationshipViews/relationshipviews4.webp";
import rvImage5 from "@/assets/RVUser/RelationshipViews/relationshipviews5.webp";
import rvImage6 from "@/assets/RVUser/RelationshipViews/relationshipviews6.webp";
import rvImage7 from "@/assets/RVUser/RelationshipViews/relationshipviews7.webp";
import rvImage8 from "@/assets/RVUser/RelationshipViews/relationshipviews8.webp";
import rvImage9 from "@/assets/RVUser/RelationshipViews/relationshipviews9.webp";
import rvImage10 from "@/assets/RVUser/RelationshipViews/relationshipviews10.webp";
import rvImage11 from "@/assets/RVUser/RelationshipViews/relationshipviews11.webp";
import rvImage12 from "@/assets/RVUser/RelationshipViews/relationshipviews12.webp";
import rvImage13 from "@/assets/RVUser/RelationshipViews/relationshipviews13.webp";
import rvImage14 from "@/assets/RVUser/RelationshipViews/relationshipviews14.webp";
import rvImage15 from "@/assets/RVUser/RelationshipViews/relationshipviews15.webp";
import rvImage16 from "@/assets/RVUser/RelationshipViews/relationshipviews16.webp";
import rvImage17 from "@/assets/RVUser/RelationshipViews/relationshipviews17.webp";
import rvImage18 from "@/assets/RVUser/RelationshipViews/relationshipviews18.webp";
import rvImage19 from "@/assets/RVUser/RelationshipViews/relationshipviews19.webp";
import rvImage20 from "@/assets/RVUser/RelationshipViews/relationshipviews20.webp";
import rvImage21 from "@/assets/RVUser/RelationshipViews/relationshipviews21.webp";
import rvImage22 from "@/assets/RVUser/RelationshipViews/relationshipviews22.webp";
import rvImage23 from "@/assets/RVUser/RelationshipViews/relationshipviews23.webp";

import mfImage1 from "@/assets/RVUser/MiscellaneousFeatures/miscellaneousfeatures1.webp";
import mfImage2 from "@/assets/RVUser/MiscellaneousFeatures/miscellaneousfeatures2.webp";
import mfImage3 from "@/assets/RVUser/MiscellaneousFeatures/miscellaneousfeatures3.webp";
import mfImage4 from "@/assets/RVUser/MiscellaneousFeatures/miscellaneousfeatures4.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function RelationshipVistaUserGuide() {
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleAccordionChange = useCallback((value: string) => {
    if (!value) return; // collapsed, nothing to scroll to

    // Disable smooth scroll for the duration so the browser doesn't fight us
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    // Use rAF to let the DOM update with the new data-state
    requestAnimationFrame(() => {
      const container = accordionRef.current;
      if (!container) return;

      const openItem = container.querySelector(
        '[data-state="open"]'
      ) as HTMLElement | null;
      if (!openItem) return;

      // The desired viewport offset for the opened trigger
      const desiredOffsetFromTop = 100;

      // Continuously pin the trigger at the desired position during animation
      const startTime = performance.now();
      const animationDuration = 400; // slightly longer than the accordion animation

      const pinScroll = () => {
        const rect = openItem.getBoundingClientRect();
        const drift = rect.top - desiredOffsetFromTop;

        // Only adjust if it has drifted more than 1px
        if (Math.abs(drift) > 1) {
          window.scrollBy(0, drift);
        }

        if (performance.now() - startTime < animationDuration) {
          requestAnimationFrame(pinScroll);
        } else {
          // Restore smooth scrolling after animation completes
          html.style.scrollBehavior = prevBehavior;
        }
      };

      pinScroll();
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">
      <SEO
        title="RelationshipVista User Guide | Ardira"
        description="Comprehensive user guide for RelationshipVista. Learn how to visualize and manage Salesforce record relationships and hierarchies."
        keywords="RelationshipVista, Salesforce relationships, user guide, documentation"
        ogTitle="RelationshipVista User Guide"
        ogDescription="Master RelationshipVista and visualize your Salesforce relationships"
        ogUrl="https://ardira.com/relationship-vista-user-guide"
      />
      <StructuredData type="WebPage" data={{ name: "RelationshipVista User Guide" }} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(14,165,233,0.08),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/products#relationshipvista"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-6 font-semibold text-sm group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to RelationshipVista
          </Link>
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight text-[#0f172a] mb-4">
              RelationshipVista <span className="text-sky-600">User Guide</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Learn how to use RelationshipVista to visualize and navigate
              related records in your Salesforce org.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold font-display text-[#0f172a] mb-6">
              Introduction
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Ardira RelationshipVista ("RVC") is a Lightning Web Component
              (LWC) that allows quickly navigating and visualizing all the
              related records of a record. The component can be dropped in a
              record detail page to visualize all the related records.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              When an RVC component is dropped in a record detail page:
            </p>
            <ul className="space-y-3 ml-6 mb-8">
              <li className="text-slate-600 leading-relaxed flex gap-3">
                <span className="text-sky-600 font-bold">•</span>
                <span>
                  It will automatically allow your users to navigate and
                  visualize all the related records.
                </span>
              </li>
              <li className="text-slate-600 leading-relaxed flex gap-3">
                <span className="text-sky-600 font-bold">•</span>
                <span>
                  Use Relationship Views (R-Views) to create custom
                  visualizations of related records tailored to your needs.
                </span>
              </li>
              <li className="text-slate-600 leading-relaxed flex gap-3">
                <span className="text-sky-600 font-bold">•</span>
                <span>"R-Views" are similar to Salesforce "List Views".</span>
              </li>
              <li className="text-slate-600 leading-relaxed flex gap-3">
                <span className="text-sky-600 font-bold">•</span>
                <span>
                  Empower your users with flexibility – choose to allow them to
                  configure their own R-Views, or opt for pre-configured views
                  to streamline data analysis.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Accordion Sections */}
          <Accordion
            ref={accordionRef}
            type="single"
            collapsible
            className="space-y-3"
            onValueChange={handleAccordionChange}
          >
            {/* Section 1: Ardira RelationshipVista Component */}
            <AccordionItem
              value="component"
              className="border border-sky-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 hover:bg-sky-50 bg-sky-50/30 focus-visible:outline-none scroll-behavior-auto" style={{scrollBehavior: "auto"}}>
                <h3 className="text-lg font-semibold font-display text-[#0f172a]">
                  Ardira RelationshipVista Component
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 bg-white">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Getting Started
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      To start using the Relationship Vista, edit your record
                      detail page, create a custom tab and drop the "Ardira
                      RelationshipVista" component in that page. Name the custom
                      tab appropriately (e.g. RelationshipVista). You are not
                      limited to adding the component in a custom tab, you can
                      add the component anywhere in the record page.
                    </p>

                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={arvcImage1}
                        alt="Adding RelationshipVista component to record detail page"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-3xl">
                      <div className="flex gap-0 bg-white">
                        <div className="flex-[2] overflow-hidden">
                          <img loading="lazy"
                            src={arvcImage2}
                            alt="Salesforce interface"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden bg-slate-50">
                          <img loading="lazy"
                            src={arvcImage3}
                            alt="Configuration panel"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={arvcImage4}
                        alt="Saving and activating the record detail page with RelationshipVista component"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                

                    <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-sm text-slate-700">
                      <p className="font-semibold text-sky-700 mb-2">
                        Important:
                      </p>
                      <p>Make sure to save and activate the page.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Example Use Case
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      For example, if you had dropped an RVC in your account
                      detail page, you will be able to visualize account related
                      records.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 2: RVC Component Properties */}
            <AccordionItem
              value="properties"
              className="border border-sky-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 hover:bg-sky-50 bg-sky-50/30 focus-visible:outline-none" style={{scrollBehavior: "auto"}}>
                <h3 className="text-lg font-semibold font-display text-[#0f172a]">
                  RVC Component Properties
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 bg-white">
                <div className="space-y-6">
                RVC Component supports following public properties:
                <br></br>
                <br></br>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Record Id
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      The "Id" field pertains to the record whose relationships
                      are to be visualized. When the component is placed in a
                      record page, there is no need to manually input the record
                      id, as the platform will automatically set it.
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Use Configuration
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      If a view configuration name is specified, the
                      relationship view will be rendered with that configuration
                      and users will not be able to select an alternative
                      configuration. However, it's important to note that this
                      functionality only works when none of the views from the
                      View Configuration are pinned.
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Allow Users to Update View Configuration
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Enabling this setting grants users permission to create
                      and edit view configurations that are owned by them. If
                      this setting is disabled, users will not have the ability
                      to create or edit view configurations.
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Show
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      This setting allows you to specify which records should be
                      displayed in the visualization. The default option is "My
                      Records," which displays records that are owned by the
                      currently logged-in user. Alternatively, you can select
                      "All Records" to display all records that are accessible
                      to the currently logged-in user.
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Auto Expanded Levels
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      This setting determines the number of levels that will be
                      automatically expanded when the visualization is first
                      displayed. However, if a value is entered for "Max Visible
                      Records Count" in the View Configuration, this setting
                      will be overridden.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm mt-2">
                      <em>
                        Note: Auto-expand functionality only applies to object
                        and group nodes, and will not work with record nodes.
                      </em>
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Show Objects
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      To restrict the types of records that are displayed in the
                      visualization, you can specify a comma-separated list of
                      object API names. Only records from the specified objects
                      will be included in the visualization.
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Visible Records Limit
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      This setting determines the maximum number of child
                      records that will be displayed for a parent record. Any
                      additional records beyond this limit can be viewed by
                      clicking on the "View n more…" option.
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      View Layout
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-3">
                      This setting allows you to specify which visualization
                      layouts should be enabled for the component. The available
                      options are:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="text-slate-600 text-sm">
                        <strong>All:</strong> Enables all supported layouts and
                        allows users to switch between them. This is the default
                        setting.
                      </li>
                      <li className="text-slate-600 text-sm">
                        <strong>Explorer:</strong> Displays the relationship
                        view with an explorer or indented tree layout.
                      </li>
                      <li className="text-slate-600 text-sm">
                        <strong>Tree:</strong> Displays the relationship view
                        with a graphical tree layout.
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-sky-300 pl-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      Width & Height
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      <strong>Width:</strong> Determines the width of the
                      visualization area in pixels, as a percentage of its
                      container, or "auto" to automatically adjust. Default:
                      "100%"
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm mt-2">
                      <strong>Height:</strong> Determines the height of the
                      visualization area in pixels, as a percentage of its
                      container, or "auto" to automatically adjust. Default:
                      "auto"
                    </p>
                  </div>
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-sm text-slate-700">
                    <p className="font-semibold text-sky-700 mb-2">Note:</p>
                    <p>
                      These properties can be overridden by view-level
                      configurations.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 3: Relationship Views */}
            <AccordionItem
              value="rviews"
              className="border border-sky-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 hover:bg-sky-50 bg-sky-50/30 focus-visible:outline-none" style={{scrollBehavior: "auto"}}>
                <h3 className="text-lg font-semibold font-display text-[#0f172a]">
                  Relationship Views ("R-Views")
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 bg-white">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Overview
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      When the component is first placed in a record page, the
                      relationships are displayed based on the component
                      attributes that were set in the page builder. You can
                      create custom configurations using the relationship view
                      selector.
                    </p>

                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage1}
                        alt="Relationship view selector interface for creating custom visualizations"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <p className="text-slate-600 leading-relaxed">
                      You can configure "Relationship Views" using relationship
                      view selector to navigate and visualize related records
                      that are important and/or relevant. "Relationship Views"
                      management is similar to managing Salesforce "List Views".
                      Relationship View configuration allows you to configure
                      each node in the view hierarchy to restrict types of
                      records to visualize, filter records, group records by
                      object fields, and more.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Sample Data
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      When evaluating RVC in a sandbox/test environment, use the
                      RelationshipVista Getting Started tab to quickly add
                      sample data.
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="text-slate-600 text-sm">
                        1. Go to the "RelationshipVista Getting Started" tab
                        from the app launcher.
                      </li>

                      <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                        <img loading="lazy"
                          src={rvImage2}
                          alt="RelationshipVista Getting Started tab in Salesforce app launcher"
                          className="w-full h-100"
                        />
                      </div>

                      <li className="text-slate-600 text-sm">
                        2. Click "Load Sample data" to load some sample data to
                        play around and experience RelationshipVista.
                      </li>
                      <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                        <img loading="lazy"
                          src={rvImage3}
                          alt="Load Sample Data button in RelationshipVista Getting Started"
                          className="w-full h-auto"
                        />
                      </div>
                      <p>
                        The screenshots used in the subsequent sections use the
                        following sample data.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                        <img loading="lazy"
                          src={rvImage4}
                          alt="Sample account relationship data structure with related contacts, cases, and opportunities"
                          className="w-full h-auto"
                        />
                      </div>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Create/Update/Delete a View Configuration
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      A view configuration allows you to set what records are
                      visualized in the relationship view by configuring the
                      view configuration properties at each node in the
                      relationship view.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      If your Salesforce administrator has configured an RVC so
                      that users can update view configurations, you will see
                      the following options to manage your view configurations.
                    </p>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-4xl">
                      <div className="flex gap-0 bg-white">
                        <div className="flex-1 overflow-hidden min-w-0">
                          <img loading="lazy"
                            src={rvImage5}
                            alt="Salesforce interface"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden bg-slate-50 min-w-0">
                          <img loading="lazy"
                            src={rvImage6}
                            alt="Configuration panel"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-sky-700 mb-3">
                      View Configuration Properties
                    </h4>
                    <h4 className="text-sm font-semibold text-[#0f172a] mb-3">
                      A view configuration has following properties:
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Name
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting refers to the name of the View Configuration.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Show
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to specify which 
                          records should be displayed in the visualization. The available options are:
                        </p>
                        <br></br>
                        <ul className="space-y-3 ml-4">
                          <li className="text-slate-600 text-sm">
                            <p className="font-semibold text-[#0f172a] mb-1">My Records</p>
                            <p>This option displays only the records that are owned by the currently logged-in user. This is the default setting.</p>
                          </li>
                          <li className="text-slate-600 text-sm">
                            <p className="font-semibold text-[#0f172a] mb-1">All Records</p>
                            <p>This option displays all records that are accessible to the currently logged-in user.</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Pinned
                        </p>
                        <p className="text-sm text-slate-600">
                          If this setting is enabled, the view will become 
                          the default view for any user who created the View Configuration.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Max Visible Records Limit
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting determines the maximum number of child records that will be 
                          displayed for a parent record. Any additional records beyond this 
                          limit can be viewed by clicking on the “View n more…” option. 
                          Please note that this setting overrides any “Auto Expand Level” configurations 
                          that are set for the component on the Page Layout.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Sharing Setting
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to configure the visibility of the View Configuration. 
                          The available options are:
                        </p>
                        <br></br>
                        <ul className="space-y-3 ml-4">
                          <li className="text-slate-600 text-sm">
                            <p className="font-semibold text-[#0f172a] mb-1">Only Me</p>
                            <p>This option restricts the View Configuration to be visible only to the user who created it.</p>
                          </li>
                          <li className="text-slate-600 text-sm">
                            <p className="font-semibold text-[#0f172a] mb-1">All Users</p>
                            <p>This option makes the View Configuration visible to all users in the organization.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                    <img loading="lazy"
                      src={rvImage7}
                      alt="View Configuration properties showing Name, Show, Pinned, and other settings"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Root Node Configuration
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      You can configure the root node in a "Relationship Views"
                      to navigate and visualize related records. To update the
                      node configuration, select the view and click edit. To
                      configure a root node, click the settings icon next to the
                      node. It will open the root node configuration dialog with the following configuration options:
                    </p>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage8}
                        alt="Root node configuration interface with Record Node Label Field and Auto Expand settings"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                      <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                        This setting displays the object type that is configured by the current node configuration.
                      </h4>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Record Node Label Field
                        </p>
                        <p className="text-sm text-slate-600">
                          You can select a field that will be used as the label for the record nodes in the 
                          visualization. The value of this field will be displayed next to the node 
                          representing the record.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Auto Expand
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to enable automatic expansion of a node when it is visualized. 
                          When this setting is enabled, the node will automatically expand to show 
                          its child nodes when the visualization is loaded.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Show Objects
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to select a set of objects that will limit the type of records 
                          displayed in the visualization as children of the current node.
                          Please note that the “Show Objects” setting at the node level will override the 
                          corresponding view-level setting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Node Configuration
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      You can configure each node in a "Relationship Views" by
                      clicking the settings icon next to the node. This will
                      display the configuration options for the selected object.
                      <br></br>
                      <br></br>
                      Click on gear icon and click on Edit.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage9}
                        alt="Relationship view showing gear icon for accessing node configuration settings"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage10}
                        alt="Node configuration dialog showing edit and delete options"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage11}
                        alt="Node configuration properties including Object Node Label and Record Node Label Field"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>

                    <div className="space-y-3">
                      <p className="text-slate-600 leading-relaxed text-sm mb-4">
                        To modify or edit the configuration of an object, click
                        on the gear icon corresponding to that object. This will
                        display the configuration options for the selected
                        object, including the object type that is currently
                        configured by the node.
                      </p>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Object Node Label
                        </p>
                        <p className="text-sm text-slate-600">
                          This configuration setting allows you to modify the label used for the object node in the visualization.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Record Node Label Field
                        </p>
                        <p className="text-sm text-slate-600">
                          This configuration setting enables you to choose a field whose value is utilized as the 
                          label for the record nodes in the visualization.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Auto Expand
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to enable automatic expansion of a node when the visualization 
                          is displayed. If enabled, the node and its immediate child records will be expanded by 
                          default.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Display Configuration Node
                        </p>
                        <p className="text-sm text-slate-600">
                          Enable this setting to display the configuration node in the visualization layout as a node.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Cascade Auto Expand
                        </p>
                        <p className="text-sm text-slate-600">
                         If the Auto Expand setting is enabled, the visualization will automatically expand up to 
                         the next record node. If Cascade Auto Expand is enabled, the visualization will automatically 
                         expand one more level to the subsequent record node. This option is useful when you want to 
                         expand past junction object records.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Display Record Node
                        </p>
                        <p className="text-sm text-slate-600">
                          This option allows you to show or hide record nodes in the visualization. 
                          Hiding record nodes can be useful in the case of junction objects, 
                          where the nodes may not provide relevant information for the user.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Record Icon URL
                        </p>
                        <p className="text-sm text-slate-600">
                           You can set the standard or custom icon from the Lightning Design System (
                           <a
                             href="https://www.lightningdesignsystem.com/icons/#standard"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-sky-600 hover:text-sky-700 font-semibold underline"
                           >
                             https://www.lightningdesignsystem.com/icons/#standard
                           </a>
                           ) to be displayed for the node in the visualization.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Record Icon Background Color
                        </p>
                        <p className="text-sm text-slate-600">
                         You can set the color of the icon using developer tools or by specifying a color code from an external source.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Show Objects
                        </p>
                        <p className="text-sm text-slate-600">
                          This configuration setting allows you to select the set of objects that will be 
                          displayed as children of the node in the visualization. Note that the “Show Objects” 
                          setting at the node level will override the corresponding view level setting.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Filter Records
                        </p>
                        <p className="text-sm text-slate-600">
                          You can configure filters to limit which children records are visualized under this parent node.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Group Records
                        </p>
                        <p className="text-sm text-slate-600">
                          You can configure to group children records as sub-nodes under this parent node. 
                          This allows you to organize and visualize related records together in the hierarchy.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Sort Records By
                        </p>
                        <p className="text-sm text-slate-600">
                          When a node contains Salesforce records as children, you can configure how they should be sorted.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Configuration for Junction Object
                    </h4>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage12}
                        alt="Account Contact Relationship junction object configuration setup"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      Account Contact Relationship is a junction object. It can be enabled in Account Settings.
                      <br></br>
                      Just below the junction object is the id which represents the Account Contact Relation i.e., junction object.
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Cascade Auto Expand
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to automatically expand the child nodes of a node.
                          This is particularly useful for visualizing junction objects.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Display Record Node
                        </p>
                        <p className="text-sm text-slate-600">
                          This setting allows you to hide the record node of a junction object in the visualization. 
                          This is useful when you want to hide the record IDs or any other information associated with a junction object.
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <br></br>

                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      Below images show the use of the Cascade Auto Expand and
                      Display Record Node.
                      <br></br>
                      In the below example Person Accounts are enabled, allowing
                      users to relate a contact to multiple accounts (which is
                      AccountContactRelation Junction object).
                    </p>

                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage13}
                        alt="Relationship graph demonstrating Cascade Auto Expand with junction object visible"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      When "Display Record Node" is set to false, the record id
                      node is hidden. Relation of Test Account ABC to another
                      contact named Test Contact XYZ can be seen without the
                      intermediate junction object record.
                    </p>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage14}
                        alt="Relationship graph with Display Record Node hidden showing direct contact-to-account relationship"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Change Icons in Record URL from Lightning Design System
                    </h4>
                    <ol className="list-decimal list-inside space-y-6 text-slate-600 leading-relaxed text-sm">
                      <li>
                        Go to the official website of lightning design system - Icons - Standard & Custom or click the below link{" "}
                        <a
                          href="https://www.lightningdesignsystem.com/icons/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 font-semibold underline"
                        >
                          https://www.lightningdesignsystem.com/icons/
                        </a>
                        <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl mt-3">
                          <img loading="lazy"
                            src={rvImage15}
                            alt="Lightning Design System website showing Icons section with Standard and Custom filters"
                            className="w-full h-auto"
                          />
                        </div>
                      </li>
                      <li>
                        Select the name of one of the following options:
                        <div className="space-y-4 mt-3">
                          <div className="border-l-2 border-sky-300 pl-4">
                            <p className="text-sm font-semibold text-[#0f172a]">
                              Standard Icons
                            </p>
                            <p className="text-sm text-slate-600 mb-2">
                              Standard Icons and paste it in the url as
                              /img/icon/t4v35/standard/your_standard_icon_name.svg
                            </p>
                            <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                              <img loading="lazy"
                                src={rvImage16}
                                alt="Lightning Design System standard icons browsing interface with icon names"
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          <div className="border-l-2 border-sky-300 pl-4">
                            <p className="text-sm font-semibold text-[#0f172a]">
                              Custom Icons
                            </p>
                            <p className="text-sm text-slate-600 mb-2">
                              For custom icons grab it from the same site in the
                              Custom icons section and paste it in the link as
                              /img/icon/t4v35/custom/your_custom_icon_name.svg
                            </p>
                        <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                          <img loading="lazy"
                            src={rvImage17}
                            alt="Lightning Design System custom icons browsing interface with custom icon options"
                            className="w-full h-auto"
                          />
                        </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Set Record Icon Background Color
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      Customize the background color of the icon using hex color
                      codes. Use your browser's developer tools to pick any
                      color.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        Use color picker or the standard Inspect element to pick the color code and change it as follows:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
                        <li>
                          Right click and select Inspect to open the inspect element or the developer tools or press F12.
                        </li>
                        <li>
                           Use the color picker option given in the dev tools to pick the color.
                        </li>
                        <li>
                           Click on any color you like and it will be copied to clipboard as a hex color.
                        </li>

                        <div className="rounded-xl overflow-hidden border border-sky-200 shadow-md max-w-2xl">
                          <img loading="lazy"
                            src={rvImage18}
                            alt="Click Get It Now button"
                            className="w-full h-auto"
                          />
                        </div>

                        <li>
                          Paste the hex color into the{" "}
                          <strong>Record Icon Background Color</strong> field
                        </li>
                        <li>
                          Click <strong>Save</strong> to apply the color to the
                          icon
                        </li>

                        <div className="rounded-xl overflow-hidden border border-sky-200 shadow-md max-w-2xl">
                          <img loading="lazy"
                            src={rvImage19}
                            alt="Click Get It Now button"
                            className="w-full h-auto"
                          />
                        </div>
                      </ol>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Sort Records
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                      Sort the child records based on different fields of the object. 
                      Also filter and group records. See example below where sorting, grouping and filtering are 
                      applied to Opportunity object records.
                    </p>

                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-md max-w-2xl">
                      <img loading="lazy"
                        src={rvImage20}
                        alt="Click Get It Now button"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-md max-w-2xl">
                      <img loading="lazy"
                        src={rvImage21}
                        alt="Click Get It Now button"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-3">
                      Select the object that needs to be configured for sorting.
                    </h4>
                    <div className="space-y-3">
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Auto Expand
                        </p>
                        <p className="text-sm text-slate-600">
                          If enabled, the parent node is auto expanded.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Show Objects
                        </p>
                        <p className="text-sm text-slate-600">
                          To show the relation of opportunities of another object.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Filter Records
                        </p>
                        <p className="text-sm text-slate-600 mb-2">
                          Filter to show opportunities whose Probability is Greater or Equal to 10%. 
                          Multiple filter conditions Can be used to filter the records.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Group Records
                        </p>
                        <p className="text-sm text-slate-600 mb-2">
                          Group the records by fields of opportunity and choose a different label for it too. 
                          More than one criteria can be used for grouping records.
                        </p>
                      </div>
                      <div className="border-l-2 border-sky-300 pl-4">
                        <p className="text-sm font-semibold text-[#0f172a]">
                          Sort Records By
                        </p>
                        <p className="text-sm text-slate-600">
                          Sort the records by fields of opportunity.
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-md max-w-2xl">
                      <img loading="lazy"
                        src={rvImage22}
                        alt="Click Get It Now button"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={rvImage23}
                        alt="Click Get It Now button"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 4: Miscellaneous Features */}
            <AccordionItem
              value="misc"
              className="border border-sky-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 hover:bg-sky-50 bg-sky-50/30 focus-visible:outline-none" style={{scrollBehavior: "auto"}}>
                <h3 className="text-lg font-semibold font-display text-[#0f172a]">
                  Restricting the display of view selector
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 bg-white">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-4">
                      Restricting the View Selector
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      In some situations, the administrator would like to define
                      a view and restrict all users to that view. To do this,
                      configure the view name in the "Use Configuration"
                      component attribute in the page builder. If the "Use
                      Configuration" attribute is set, the view selector is
                      hidden from users. This is overridden when a View
                      Configuration has a pinned view.
                    </p>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-sm">
                      <img loading="lazy"
                        src={mfImage1}
                        alt="Restricting the View Selector"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-4">
                      Configuring views that a user can select
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      In some situations, the administrator wants to give users
                      a few view options to select from. To do this, build
                      multiple views. For each of these views to be shared with
                      users, set "Sharing Setting" to "All users can see".
                    </p>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={mfImage2}
                        alt="Configuring User View Options"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-4">
                      Configuring a default view for the users
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      The administrator can pin a view by checking the "Pinned"
                      attribute to make the view as a default view for every
                      user. This is similar to pinning Salesforce list views.
                      Note that a user who can create her view can also pin a
                      view to make it default selected for her.
                    </p>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-2xl">
                      <img loading="lazy"
                        src={mfImage3}
                        alt="Setting a Default View"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#0f172a] mb-4">
                      Controlling if the users can create their own views
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      In some cases, the administrator would like to allow users
                      to create their own views. To do this, check the page
                      attribute "Allow Users to Update View Configuration" in
                      the page builder. If that is checked, users will be able
                      to create their own views and also share with other users.
                    </p>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-sm">
                      <img loading="lazy"
                        src={mfImage4}
                        alt="User View Creation Control"
                        className="w-full h-auto"
                      />
                    </div>
                    <br></br>
                    <div className="rounded-xl overflow-hidden border border-sky-200 shadow-lg max-w-sm">
                      <img loading="lazy"
                        src={mfImage4}
                        alt="User View Creation Control"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-sky-50 to-sky-100 border border-sky-300 rounded-lg p-6">
                    <h4 className="text-base font-semibold text-sky-900 mb-3">
                      Advanced Features
                    </h4>
                    <ul className="space-y-3">
                      <li className="text-slate-700 text-sm flex gap-3">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>
                          Rich interactive relationship graphs for complex
                          hierarchies
                        </span>
                      </li>
                      <li className="text-slate-700 text-sm flex gap-3">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>Embed data maps in any record detail page</span>
                      </li>
                      <li className="text-slate-700 text-sm flex gap-3">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>
                          Visualize one-to-one and many-to-many relationships
                        </span>
                      </li>
                      <li className="text-slate-700 text-sm flex gap-3">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>
                          Filter, group, and drill down across records
                        </span>
                      </li>
                      <li className="text-slate-700 text-sm flex gap-3">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>Mobile responsive and Lightning-ready</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section 5: Have Questions */}
            <AccordionItem
              value="questions"
              className="border border-sky-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 hover:bg-sky-50 bg-sky-50/30 focus-visible:outline-none" style={{scrollBehavior: "auto"}}>
                <h3 className="text-lg font-semibold font-display text-[#0f172a]">
                  Have Questions?
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 bg-white">
                <div className="space-y-6">
                  <p className="text-base text-slate-600 leading-relaxed">
                    For any questions related to RelationshipVista and how to
                    configure it to visualize your Salesforce records'
                    relationships & hierarchies, feel free to contact our
                    support team.
                  </p>
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="text-sky-600 mt-1 shrink-0" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-sky-700 mb-2">
                          Email Support
                        </p>
                        <a
                          href="mailto:support@ardira.com"
                          className="text-sky-600 hover:text-sky-700 font-semibold text-sm"
                        >
                          support@ardira.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-4">
                      You can also refer to:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-slate-600 text-sm flex gap-2">
                        <span>•</span>
                        <Link
                          href="/relationship-vista-installation-guide"
                          className="text-sky-600 hover:text-sky-700 font-semibold"
                        >
                          Installation Guide
                        </Link>
                        <span>- For setup assistance and configuration</span>
                      </li>
                      <li className="text-slate-600 text-sm flex gap-2">
                        <span>•</span>
                        <a
                          href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 font-semibold"
                        >
                          AppExchange Listing
                        </a>
                        <span>- Download and reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-sky-50 border-t border-sky-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold font-display text-[#0f172a] mb-4">
            Ready to Install?
          </h2>
          <p className="text-slate-600 mb-8">
            Start using RelationshipVista in your Salesforce org today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/relationship-vista-installation-guide"
              className="inline-flex items-center gap-2 border border-sky-300 text-sky-700 bg-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors"
            >
              Installation Guide
            </Link>
            <a
              href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-sky-700 transition-colors shadow-sm"
            >
              Install from AppExchange <Download size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
