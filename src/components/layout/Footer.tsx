import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Residential", path: "/services/residential" },
    { label: "Commercial", path: "/services/commercial" },
    { label: "Design & Build", path: "/services/design-build" },
    { label: "Renovation", path: "/services/renovation" },
  ],
  company: [
    { label: "Our Story", path: "/about/story" },
    { label: "Vision & Values", path: "/about/vision" },
    { label: "Why Choose Us", path: "/about/why-us" },
  ],
  projects: [
    { label: "Residential", path: "/projects/residential" },
    { label: "Commercial", path: "/projects/commercial" },
    { label: "Villas & Apartments", path: "/projects/villas" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-[980px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="text-xl font-semibold text-foreground">
              ARA Constructions
            </Link>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs leading-relaxed">
              Building trust through transparency. Warangal's trusted construction partner since 2012.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Warangal, Telangana</li>
              <li>+91 98765 43210</li>
              <li>
                <Link to="/contact/start-project" className="text-primary hover:underline">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-xs text-center">
            © {currentYear} ARA Constructions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}