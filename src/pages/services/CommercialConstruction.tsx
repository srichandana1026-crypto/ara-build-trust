 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const CommercialConstruction = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Commercial Construction</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Build spaces that
               <br />
               mean business.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Office buildings, retail spaces, warehouses. We build commercial properties 
               designed for productivity and growth.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Features */}
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Built for business.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Space Optimization", desc: "Maximize every square foot. Efficient layouts that boost productivity and reduce costs." },
               { title: "Modern Infrastructure", desc: "Built for today's technology. High-speed networking, smart building systems included." },
               { title: "Safety Compliance", desc: "All codes and regulations met. Fire safety, accessibility, and structural compliance guaranteed." },
             ].map((item, i) => (
               <AnimatedSection key={item.title} delay={i * 100}>
                 <div className="bg-card rounded-2xl p-8 text-center">
                   <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA */}
       <section className="py-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
               Scale your business infrastructure.
             </h2>
             <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
               Let's discuss your commercial project requirements.
             </p>
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
 
 export default CommercialConstruction;