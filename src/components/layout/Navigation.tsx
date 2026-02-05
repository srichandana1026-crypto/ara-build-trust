import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  label: string;
  path: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  featured?: boolean;
}

interface DropdownMenu {
  sections: MenuSection[];
}

interface NavItem {
  name: string;
  path?: string;
  dropdown?: DropdownMenu;
}

const navItems: NavItem[] = [
  {
    name: "Services",
    dropdown: {
      sections: [
        {
          title: "Explore",
          featured: true,
          items: [
            { label: "Residential Construction", path: "/services/residential" },
            { label: "Commercial Construction", path: "/services/commercial" },
            { label: "Design & Build", path: "/services/design-build" },
            { label: "Renovation & Remodeling", path: "/services/renovation" },
          ],
        },
        {
          title: "How It Works",
          items: [
            { label: "Project Management", path: "/services/project-management" },
            { label: "Construction Process", path: "/services/process" },
            { label: "Quality & Supervision", path: "/services/quality" },
            { label: "Estimation & Planning", path: "/services/estimation" },
          ],
        },
      ],
    },
  },
  {
    name: "Projects",
    dropdown: {
      sections: [
        {
          title: "Explore",
          featured: true,
          items: [
            { label: "Residential Projects", path: "/projects/residential" },
            { label: "Commercial Projects", path: "/projects/commercial" },
            { label: "Villas & Apartments", path: "/projects/villas" },
          ],
        },
      ],
    },
  },
  {
    name: "About",
    dropdown: {
      sections: [
        {
          title: "Explore",
          featured: true,
          items: [
            { label: "Our Story", path: "/about/story" },
            { label: "Vision & Values", path: "/about/vision" },
            { label: "Why Choose Us", path: "/about/why-us" },
          ],
        },
      ],
    },
  },
  {
    name: "Contact",
    dropdown: {
      sections: [
        {
          title: "Get Started",
          featured: true,
          items: [
            { label: "Start a Project", path: "/contact/start-project" },
            { label: "Get Consultation", path: "/contact/consultation" },
          ],
        },
      ],
    },
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    setActiveDropdown(null);
    setMobileExpandedMenu(null);
  }, [location]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activeDropdown ? "bg-background/95 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            ARA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-xs font-normal text-foreground/80 hover:text-foreground transition-colors py-4"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="text-xs font-normal text-foreground/80 hover:text-foreground transition-colors py-4 flex items-center gap-1">
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild size="sm" className="text-xs h-8 px-4">
              <Link to="/contact/start-project">Start Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Desktop Mega Dropdown */}
      {activeDropdown && (
        <div
          className="hidden lg:block absolute left-0 right-0 bg-background border-b border-border/50 animate-fade-in"
          onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[980px] mx-auto px-6 py-8">
            {navItems
              .filter((item) => item.name === activeDropdown)
              .map((item) => (
                <div key={item.name} className="flex gap-16">
                  {item.dropdown?.sections.map((section) => (
                    <div key={section.title} className="min-w-[200px]">
                      <p className="text-xs text-muted-foreground mb-4">{section.title}</p>
                      <ul className="space-y-3">
                        {section.items.map((menuItem) => (
                          <li key={menuItem.path}>
                            <Link
                              to={menuItem.path}
                              className={`block text-foreground hover:text-primary transition-colors ${
                                section.featured ? "text-xl font-medium" : "text-sm"
                              }`}
                            >
                              {menuItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-12 bg-background z-40 overflow-y-auto">
          <div className="px-6 py-6">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-border/30">
                <button
                  className="w-full flex items-center justify-between py-4 text-lg font-medium text-foreground"
                  onClick={() => setMobileExpandedMenu(mobileExpandedMenu === item.name ? null : item.name)}
                >
                  {item.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${mobileExpandedMenu === item.name ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedMenu === item.name && item.dropdown && (
                  <div className="pb-4 pl-4">
                    {item.dropdown.sections.map((section) => (
                      <div key={section.title} className="mb-4">
                        <p className="text-xs text-muted-foreground mb-2">{section.title}</p>
                        <ul className="space-y-2">
                          {section.items.map((menuItem) => (
                            <li key={menuItem.path}>
                              <Link
                                to={menuItem.path}
                                className="block text-foreground/80 hover:text-foreground py-1"
                              >
                                {menuItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Button asChild className="w-full">
                <Link to="/contact/start-project">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}