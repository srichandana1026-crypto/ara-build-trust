 import { Link } from "react-router-dom";
 import { Layout } from "@/components/layout/Layout";
 import { Button } from "@/components/ui/button";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import {
   ArrowRight,
   Home,
   Building2,
   Hammer,
   PaintBucket,
   Ruler,
   HardHat,
 } from "lucide-react";
 import { MobileServices } from "@/components/mobile/MobileServices";
 
 const services = [
   {
     icon: Home,
     title: "Residential Construction",
     description:
       "Custom homes, villas, and independent houses built to your specifications. From modern minimalist to traditional designs.",
     features: [
       "Custom floor plans",
       "Premium materials",
       "Energy-efficient designs",
       "Vastu compliance available",
     ],
   },
   {
     icon: Building2,
     title: "Commercial Construction",
     description:
       "Office spaces, retail outlets, warehouses, and industrial buildings designed for functionality and efficiency.",
     features: [
       "Space optimization",
       "Modern infrastructure",
       "Safety compliance",
       "Scalable designs",
     ],
   },
   {
     icon: Hammer,
     title: "Renovations & Remodeling",
     description:
       "Transform your existing space with our expert renovation services. Modernize, expand, or completely reimagine your property.",
     features: [
       "Structural modifications",
       "Interior upgrades",
       "Exterior makeovers",
       "Space additions",
     ],
   },
   {
     icon: PaintBucket,
     title: "Interior Finishing",
     description:
       "Complete interior solutions including flooring, painting, woodwork, and fixtures. Every detail matters.",
     features: [
       "Custom woodwork",
       "Premium flooring",
       "Modern fixtures",
       "Paint & textures",
     ],
   },
   {
     icon: Ruler,
     title: "Architectural Design",
     description:
       "Expert architectural planning and design services. We bring your vision to life with detailed blueprints and 3D visualizations.",
     features: [
       "Custom designs",
       "3D visualization",
       "Structural planning",
       "Permit assistance",
     ],
   },
   {
     icon: HardHat,
     title: "Project Management",
     description:
       "End-to-end project management ensuring timely delivery, quality control, and transparent communication throughout.",
     features: [
       "Timeline management",
       "Quality assurance",
       "Cost control",
       "Regular updates",
     ],
   },
 ];
 
 const Services = () => {
   return (
     <Layout mobileContent={<MobileServices />}>
       {/* Hero Section */}
       <section className="pt-32 pb-20 bg-background">
         <div className="container-wide">
           <AnimatedSection>
             <div className="max-w-3xl">
               <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                 Our Services
               </p>
               <h1 className="text-4xl md:text-6xl font-semibold mb-6">
                 Complete construction solutions
               </h1>
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                 From initial design to final handover, we provide end-to-end
                 construction services. Every project receives our full attention
                 and expertise.
               </p>
             </div>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Services Grid */}
       <section className="section-padding bg-secondary">
         <div className="container-wide">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((service, index) => (
               <AnimatedSection key={service.title} delay={index * 100}>
                 <div className="bg-card border border-border rounded-xl p-8 h-full hover-lift">
                   <service.icon className="h-10 w-10 text-foreground mb-6" />
                   <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                   <p className="text-muted-foreground mb-6 leading-relaxed">
                     {service.description}
                   </p>
                   <ul className="space-y-2">
                     {service.features.map((feature) => (
                       <li
                         key={feature}
                         className="text-sm text-foreground flex items-center gap-2"
                       >
                         <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       {/* Quality Promise */}
       <section className="section-padding bg-background">
         <div className="container-wide">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection direction="left">
               <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                 Our Promise
               </p>
               <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                 Quality that speaks for itself
               </h2>
               <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                 Every project we undertake is built with the highest standards of
                 quality and craftsmanship. We use only premium materials and
                 employ skilled professionals who take pride in their work.
               </p>
               <div className="grid grid-cols-2 gap-6">
                 {[
                   { value: "A+", label: "Quality Grade Materials" },
                   { value: "5yr", label: "Structural Warranty" },
                   { value: "24/7", label: "Support Available" },
                   { value: "100%", label: "Satisfaction Rate" },
                 ].map((item) => (
                   <div key={item.label} className="text-center p-4 bg-secondary rounded-xl">
                     <p className="text-2xl font-semibold mb-1">{item.value}</p>
                     <p className="text-sm text-muted-foreground">{item.label}</p>
                   </div>
                 ))}
               </div>
             </AnimatedSection>
 
             <AnimatedSection direction="right">
               <div className="bg-foreground text-primary-foreground rounded-2xl p-8 md:p-12">
                 <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">
                   Ready to get started?
                 </h3>
                 <p className="opacity-80 mb-6 leading-relaxed">
                   Tell us about your project and we'll provide a detailed,
                   transparent quote within 48 hours.
                 </p>
                 <Button asChild size="lg" variant="secondary">
                   <Link to="/contact">
                     Request a Quote
                     <ArrowRight className="ml-2 h-5 w-5" />
                   </Link>
                 </Button>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Services;