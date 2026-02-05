 import { Link } from "react-router-dom";
 import { Home, Building2, Hammer, PaintBucket, ArrowRight, ChevronDown } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { useState } from "react";
 import { cn } from "@/lib/utils";
 
 const services = [
   {
     icon: Home,
     title: "Residential",
     short: "Custom homes & villas",
     details: "From modern minimalist to traditional designs. Custom floor plans, premium materials, and Vastu compliance available.",
   },
   {
     icon: Building2,
     title: "Commercial",
     short: "Office & retail spaces",
     details: "Office spaces, retail outlets, and warehouses designed for functionality and efficiency.",
   },
   {
     icon: Hammer,
     title: "Renovations",
     short: "Transform existing spaces",
     details: "Structural modifications, interior upgrades, exterior makeovers, and space additions.",
   },
   {
     icon: PaintBucket,
     title: "Interiors",
     short: "Complete finishing",
     details: "Custom woodwork, premium flooring, modern fixtures, and professional painting.",
   },
 ];
 
 const qualityBadges = [
   { value: "A+", label: "Materials" },
   { value: "5yr", label: "Warranty" },
   { value: "24/7", label: "Support" },
 ];
 
 export function MobileServices() {
   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
 
   return (
     <div className="min-h-screen pt-4">
       {/* Header */}
       <section className="mobile-container pb-2">
         <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
           What We Build
         </p>
         <h1 className="mobile-heading">Our Services</h1>
         <p className="mobile-body mt-2">
           End-to-end construction solutions for every need.
         </p>
       </section>
 
       {/* Services List */}
       <section className="mobile-container">
         <div className="space-y-3">
           {services.map((service, index) => {
             const isExpanded = expandedIndex === index;
             const Icon = service.icon;
 
             return (
               <div
                 key={service.title}
                 className="mobile-card overflow-hidden"
               >
                 <button
                   onClick={() => setExpandedIndex(isExpanded ? null : index)}
                   className="w-full flex items-center gap-4 mobile-tap"
                 >
                   <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                     <Icon className="h-6 w-6 text-foreground" />
                   </div>
                   <div className="flex-1 text-left">
                     <p className="font-medium">{service.title}</p>
                     <p className="text-sm text-muted-foreground">{service.short}</p>
                   </div>
                   <ChevronDown
                     className={cn(
                       "h-5 w-5 text-muted-foreground transition-transform duration-200",
                       isExpanded && "rotate-180"
                     )}
                   />
                 </button>
 
                 <div
                   className={cn(
                     "overflow-hidden transition-all duration-200",
                     isExpanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                   )}
                 >
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     {service.details}
                   </p>
                 </div>
               </div>
             );
           })}
         </div>
       </section>
 
       {/* Quality Badges */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">Quality Guarantee</h2>
         <div className="grid grid-cols-3 gap-3">
           {qualityBadges.map((badge) => (
             <div key={badge.label} className="mobile-card text-center py-4">
               <p className="text-xl font-semibold">{badge.value}</p>
               <p className="text-xs text-muted-foreground mt-1">{badge.label}</p>
             </div>
           ))}
         </div>
       </section>
 
       {/* CTA */}
       <section className="mobile-container">
         <div className="mobile-card bg-accent p-6">
           <p className="font-semibold text-lg mb-2">Need something specific?</p>
           <p className="text-sm text-muted-foreground mb-4">
             Tell us your requirements and we'll create a custom solution.
           </p>
           <Button asChild size="lg" className="w-full rounded-xl mobile-tap">
             <Link to="/contact">
               Request Custom Quote
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </div>
       </section>
     </div>
   );
 }