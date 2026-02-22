import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import araLogo from "@/assets/ara-logo.png";
 
 const navLinks = [
   { name: "Home", path: "/" },
   { name: "Services", path: "/services" },
   { name: "Process", path: "/process" },
   { name: "About", path: "/about" },
   { name: "Contact", path: "/contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={araLogo} alt="ARA Constructions" className="h-10 md:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    location.pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="sm" variant="secondary">
                <Link to="/contact">Get a Quote</Link>
              </Button>
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
              <Button asChild variant="secondary" className="w-full mt-2">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
     </header>
   );
 }