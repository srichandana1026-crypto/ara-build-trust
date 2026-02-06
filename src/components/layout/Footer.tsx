 import { Link } from "react-router-dom";
 
 export function Footer() {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="bg-foreground text-primary-foreground">
       <div className="container-wide section-padding">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
           {/* Brand */}
           <div className="md:col-span-2">
             <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">
               ARA Constructions
             </h3>
             <p className="text-primary-foreground/70 max-w-md leading-relaxed">
               Building trust through transparency. End-to-end residential and
               commercial construction services in Warangal.
             </p>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
             <ul className="space-y-3">
               {["Services", "Process", "About", "Contact"].map((link) => (
                 <li key={link}>
                   <Link
                     to={`/${link.toLowerCase()}`}
                     className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                   >
                     {link}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-semibold mb-4 text-primary-foreground">Contact</h4>
             <ul className="space-y-3 text-primary-foreground/70">
               <li>Warangal, Telangana</li>
               <li>info@araconstructions.com</li>
               <li>+91 98765 43210</li>
             </ul>
           </div>
         </div>
 
        <div className="border-t border-primary-foreground/10 mt-16 pt-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-primary-foreground/50 text-sm text-center">
              © {currentYear} ARA Constructions. All rights reserved.
            </p>
            <p className="text-primary-foreground/30 text-xs">
              Built by{" "}
              <a
                href="https://revflowmarketing.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/50 transition-colors"
              >
                RevFlow Marketing
              </a>
            </p>
          </div>
        </div>
       </div>
     </footer>
   );
 }