 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const values = [
   { title: "Transparency", desc: "Every cost itemized. Every timeline shared. No surprises." },
   { title: "Quality", desc: "A+ materials. Skilled craftsmen. Standards that never drop." },
   { title: "Integrity", desc: "We do what we say. Promises kept, always." },
   { title: "Client First", desc: "Your vision drives everything. We listen, then build." },
 ];
 
 const Vision = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Vision & Values</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               What we believe.
               <br />
               What we do.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Our values aren't just words on a wall. They guide every decision, 
               every project, every interaction.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Our core values.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-2 gap-8">
             {values.map((value, i) => (
               <AnimatedSection key={value.title} delay={i * 100}>
                 <div className="bg-card rounded-2xl p-8">
                   <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       <section className="py-24 bg-background">
         <div className="max-w-[700px] mx-auto px-6 text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
               Our Vision
             </h2>
             <p className="text-xl text-muted-foreground leading-relaxed mb-8">
               To be the most trusted construction company in Telangana. 
               Not the biggest. Not the cheapest. The most trusted.
             </p>
             <Button asChild size="lg">
               <Link to="/contact/consultation">
                 Experience the Difference <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Vision;