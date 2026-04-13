import { Link } from "wouter";
import { Phone, Mail, Globe } from "lucide-react";
import ardiraFooterLogo from "@assets/ArdiraFooterLogo.webp";
import sfPartnerLogo from "@assets/SalesForcePartnerLogo.webp";
export default function Footer() {
  return (
    <footer className="bg-[#0F263C] text-slate-400 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-57 mb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="inline-block"
              data-testid="footer-link-logo"
            >
              <img
                src={ardiraFooterLogo}
                alt="Ardira"
                className="h-auto w-32 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              100% native Salesforce applications that power how enterprises
              work.
            </p>
            <img
              src={sfPartnerLogo}
              alt="Salesforce Partner"
              className="h-12 w-auto mt-2 object-contain self-start rounded-xl"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 flex-1">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm hover:text-[#43AF57] transition-colors"
                data-testid="footer-link-home"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm hover:text-[#43AF57] transition-colors"
                data-testid="footer-link-products"
              >
                Products
              </Link>
              <Link
                href="/partners"
                className="text-sm hover:text-[#43AF57] transition-colors"
                data-testid="footer-link-partners"
              >
                Partner Hub
              </Link>
              <Link
                href="/team"
                className="text-sm hover:text-[#43AF57] transition-colors"
                data-testid="footer-link-team"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-[#43AF57] transition-colors"
                data-testid="footer-link-contact"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4 flex-1">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">
              Contact Info
            </h3>
            <div className="flex items-center gap-3 text-sm">
              <Globe size={15} className="text-[#43AF57] shrink-0" />
              <a
                href="https://www.ardira.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#43AF57] transition-colors"
              >
                www.ardira.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={15} className="text-[#43AF57] shrink-0" />
              <a
                href="mailto:info@ardira.com"
                className="hover:text-[#43AF57] transition-colors"
              >
                info@ardira.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={15} className="text-[#43AF57] shrink-0" />
              <a
                href="tel:16697776838"
                className="hover:text-[#43AF57] transition-colors"
              >
                1.669.777.6838
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-sm text-slate-500">
          <p>© 2026 Ardira Corporation. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link
              href="/terms-of-use"
              className="hover:text-slate-300 transition-colors"
              data-testid="footer-link-terms"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
              data-testid="footer-link-privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
