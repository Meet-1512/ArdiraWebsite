import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import ardiraLogo from "@assets/ArdiraLogo.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Partner Hub", path: "/partners" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-[16px] shadow-sm border-b border-emerald-100 py-1"
          : "bg-transparent py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          data-testid="link-logo"
        >
          <img src={ardiraLogo} alt="Ardira" className="h-20 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#16a34a] font-semibold"
                    : "text-slate-600 hover:text-[#16a34a]"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-b border-emerald-100 flex flex-col py-8 px-6 space-y-5">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-semibold font-display ${isActive ? "text-[#16a34a]" : "text-slate-700"}`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
