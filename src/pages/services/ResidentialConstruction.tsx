 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const ResidentialConstruction = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Residential Construction</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Your dream home.
               <br />
               Built with precision.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               We build homes that last generations. From the first brick to the final coat of paint, 
               every detail is crafted with care.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Features */}
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Homes designed around you.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Custom Floor Plans", desc: "Every home is unique. We design spaces that match your lifestyle, not the other way around." },
               { title: "Premium Materials", desc: "We use only A+ grade materials. Because your home deserves nothing less." },
               { title: "Vastu Compliance", desc: "Traditional wisdom meets modern construction. Vastu-compliant designs available on request." },
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
               Ready to build your home?
             </h2>
             <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
               Start with a free consultation. No obligations, just honest advice.
             </p>
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
 
 export default ResidentialConstruction;