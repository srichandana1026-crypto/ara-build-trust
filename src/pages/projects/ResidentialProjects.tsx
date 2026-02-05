 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const projects = [
   { title: "Modern Villa, Hanamkonda", type: "3BHK Villa", sqft: "3,200 sq ft" },
   { title: "Contemporary Home, Kazipet", type: "4BHK Independent", sqft: "4,500 sq ft" },
   { title: "Traditional House, Warangal", type: "3BHK with Vastu", sqft: "2,800 sq ft" },
   { title: "Duplex Residence, Subedari", type: "4BHK Duplex", sqft: "3,800 sq ft" },
   { title: "Compact Home, Hunter Road", type: "2BHK Modern", sqft: "1,600 sq ft" },
   { title: "Premium Villa, Balasamudram", type: "5BHK Luxury", sqft: "5,200 sq ft" },
 ];
 
 const ResidentialProjects = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Residential Projects</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Homes we've built.
               <br />
               Families we've served.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Each home tells a story. Here are some of the residential projects 
               we've proudly delivered in Warangal.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map((project, i) => (
               <AnimatedSection key={project.title} delay={i * 100}>
                 <div className="bg-card rounded-2xl overflow-hidden">
                   <div className="aspect-[4/3] bg-muted" />
                   <div className="p-6">
                     <h3 className="font-semibold mb-1">{project.title}</h3>
                     <p className="text-muted-foreground text-sm">{project.type} • {project.sqft}</p>
                   </div>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       <section className="py-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
               Want to see your home here?
             </h2>
             <Button asChild size="lg">
               <Link to="/contact/start-project">
                 Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default ResidentialProjects;