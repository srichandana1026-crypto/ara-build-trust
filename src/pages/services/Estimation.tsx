 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const Estimation = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Estimation & Planning</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Know the cost.
               <br />
               Before you start.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Detailed, itemized estimates with no hidden fees. You'll know exactly 
               what you're paying for, down to the last brick.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Complete transparency.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Line-by-Line Breakdown", desc: "Every material, every labor cost, clearly itemized and explained." },
               { title: "No Hidden Charges", desc: "The price we quote is the price you pay. Period." },
               { title: "Flexible Options", desc: "Choose from different material grades and finishes to match your budget." },
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
 
       <section className="py-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
               Get your free estimate.
             </h2>
             <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
               No obligation. Just honest numbers.
             </p>
             <Button asChild size="lg">
               <Link to="/contact/start-project">
                 Request Estimate <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Estimation;