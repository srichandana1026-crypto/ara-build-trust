import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import araLogo from "@/assets/ara-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "About", path: "/about" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border))]"
          : "bg-background"
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <img
              src={araLogo}
              alt="ARA Constructions"
              className="h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation — pill-style centered nav */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 bg-muted/60 rounded-full px-1.5 py-1.5 border border-border/40">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-foreground text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button — distinct from nav pills */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-foreground text-primary-foreground text-sm font-medium px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container-wide py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground font-medium py-3 rounded-full mt-2"
            >
              Get a Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
