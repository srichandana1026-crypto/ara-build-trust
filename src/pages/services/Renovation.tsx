 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const Renovation = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Renovation & Remodeling</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Transform what
               <br />
               you already have.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Don't move. Improve. We breathe new life into existing spaces, 
               making them work for how you live today.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Every space has potential.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Kitchen Remodeling", desc: "Modern kitchens that inspire cooking and gathering. From layout to finishes." },
               { title: "Bathroom Upgrades", desc: "Spa-like bathrooms with premium fixtures and smart storage solutions." },
               { title: "Full Home Renovation", desc: "Complete transformations that reimagine your entire living space." },
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
               See the possibilities.
             </h2>
             <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
               Schedule a walkthrough and we'll show you what's possible.
             </p>
             <Button asChild size="lg">
               <Link to="/contact/consultation">
                 Get Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Renovation;