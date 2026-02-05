 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const projects = [
   { title: "Tech Park Office Complex", type: "IT Office Space", sqft: "25,000 sq ft" },
   { title: "Retail Mall, MG Road", type: "Shopping Complex", sqft: "40,000 sq ft" },
   { title: "Industrial Warehouse, MIDC", type: "Warehouse", sqft: "50,000 sq ft" },
   { title: "Multi-Specialty Hospital", type: "Healthcare", sqft: "35,000 sq ft" },
   { title: "Educational Institution", type: "School Building", sqft: "28,000 sq ft" },
   { title: "Hotel & Convention Center", type: "Hospitality", sqft: "45,000 sq ft" },
 ];
 
 const CommercialProjects = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Commercial Projects</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Business spaces.
               <br />
               Built to perform.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               From offices to warehouses, we've built commercial properties 
               that drive business success.
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
               Let's build your business space.
             </h2>
             <Button asChild size="lg">
               <Link to="/contact/consultation">
                 Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default CommercialProjects;