 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const projects = [
   { title: "Luxury Villa Complex, Hanamkonda", units: "12 Villas", status: "Completed" },
   { title: "Premium Apartments, Station Road", units: "48 Units", status: "Completed" },
   { title: "Gated Community, Kazipet", units: "24 Villas", status: "Completed" },
   { title: "Modern Apartments, Subedari", units: "36 Units", status: "Completed" },
 ];
 
 const Villas = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Villas & Apartments</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Community living.
               <br />
               Elevated.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Multi-unit residential projects that create thriving communities. 
               Premium amenities, thoughtful design.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-8">
             {projects.map((project, i) => (
               <AnimatedSection key={project.title} delay={i * 100}>
                 <div className="bg-card rounded-2xl overflow-hidden">
                   <div className="aspect-[16/9] bg-muted" />
                   <div className="p-8">
                     <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                     <p className="text-muted-foreground">{project.units} • {project.status}</p>
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
               Planning a multi-unit development?
             </h2>
             <Button asChild size="lg">
               <Link to="/contact/consultation">
                 Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Villas;