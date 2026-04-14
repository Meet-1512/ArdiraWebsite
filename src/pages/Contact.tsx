import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { RecaptchaBadge } from "@/components/RecaptchaBadge";
import { useRecaptcha } from "@/hooks/use-recaptcha";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  interest: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { executeRecaptcha } = useRecaptcha();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Execute reCAPTCHA
      let token = "";
      try {
        token = await executeRecaptcha("submit");
        console.log("reCAPTCHA token received");
      } catch (recaptchaError) {
        console.error("reCAPTCHA error:", recaptchaError);
        throw new Error(
          "reCAPTCHA verification failed. Please refresh the page and try again.",
        );
      }

      // Submit form to Vercel serverless function with reCAPTCHA token
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: token,
        }),
      });

      let result: { error?: string } = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else if (!response.ok) {
        // If it's an empty 404 (local Vite) or generic HTML 500 error
        throw new Error(
          `Server execution failed (Status ${response.status}). If testing locally, ensure you are using Vercel Dev.`,
        );
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-[#0f172a] font-sans"
      data-testid="page-contact"
    >
      <SEO
        title="Contact Ardira | Get in Touch"
        description="Contact Ardira for Salesforce consulting, AppExchange applications, or partnership inquiries. We're here to help."
        keywords="contact Ardira, Salesforce consulting, partnership"
        ogTitle="Contact Ardira"
        ogDescription="Reach out to us for enterprise Salesforce solutions"
        ogUrl="https://ardira.com/contact"
      />
      <StructuredData type="Organization" />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#43AF57] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-[1.05] tracking-tight text-[#0f172a] mb-6">
              Let's Build Something
              <br />
              <span className="text-[#43AF57]">Together</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-normal">
              Whether you're exploring our products or want to see them in
              action, we’re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col h-full"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold font-display text-[#0f172a]">
                Reach Out
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#43AF57]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] mb-1">
                      Headquarters
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      2040 Martin Ave
                      <br />
                      Santa Clara, CA 95050
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#43AF57]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] mb-1">Phone</p>
                    <a
                      href="tel:16697776838"
                      className="text-slate-500 text-sm hover:text-[#43AF57] transition-colors"
                    >
                      1.669.777.6838
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#43AF57]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a] mb-1">Email</p>
                    <a
                      href="mailto:info@ardira.com"
                      className="text-slate-500 text-sm hover:text-[#43AF57] transition-colors"
                    >
                      info@ardira.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-10 grow min-h-[300px] relative">
              <iframe
                title="Ardira Headquarters Map"
                src="https://maps.google.com/maps?q=2040%20Martin%20Ave,%20Santa%20Clara,%20CA%2095050&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 flex flex-col h-full"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm h-full">
              {isSubmitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={32} className="text-[#43AF57]" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-display text-[#0f172a]">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500">
                    Thank you for reaching out. We'll be in touch within 1
                    business day.
                  </p>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle
                        size={20}
                        className="text-red-600 shrink-0 mt-0.5"
                      />
                      <div className="text-sm text-red-700">{submitError}</div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <h3 className="text-xl font-extrabold font-display text-[#0f172a] mb-6">
                      Send us a message
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:border-[#43AF57] focus:ring-2 focus:ring-emerald-100 transition-all"
                          {...register("fullName")}
                          disabled={isSubmitting}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.fullName.message as string}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="you@company.com"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:border-[#43AF57] focus:ring-2 focus:ring-emerald-100 transition-all"
                          {...register("email")}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message as string}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                        {...register("company")}
                        disabled={isSubmitting}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.company.message as string}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">
                        I'm interested in{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="interest"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger
                              className={`w-full text-sm ${errors.interest ? "border-red-500" : "border-slate-200"}`}
                            >
                              <SelectValue placeholder="Select an option..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="SurveyVista">
                                SurveyVista
                              </SelectItem>
                              <SelectItem value="FormVista">
                                FormVista
                              </SelectItem>
                              <SelectItem value="RelationshipVista">
                                RelationshipVista
                              </SelectItem>
                              <SelectItem value="ComplianceVista">
                                ComplianceVista
                              </SelectItem>
                              <SelectItem value="AgentVista">
                                AgentVista
                              </SelectItem>
                              <SelectItem value="General">
                                General Inquiry
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.interest && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.interest.message as string}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project or question..."
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                        {...register("message")}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message.message as string}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#16a34a] text-white py-4 rounded-lg font-bold text-base hover:bg-[#15803d] disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors shadow-sm mt-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <RecaptchaBadge />

                    <p className="text-xs text-slate-400 text-center mt-2">
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-slate-500 underline hover:text-slate-600"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
