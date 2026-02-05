 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const DesignBuild = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Design & Build</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               One team.
               <br />
               One vision.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Design and construction under one roof. Faster timelines, better coordination, 
               and a seamless experience from concept to completion.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               The smarter way to build.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-2 gap-8">
             {[
               { title: "Single Point of Contact", desc: "No juggling between architects and contractors. One team, one responsibility." },
               { title: "Faster Delivery", desc: "Design and construction happen in parallel. Your project moves faster." },
               { title: "Cost Certainty", desc: "Know your budget from day one. No surprises, no scope creep." },
               { title: "Better Quality", desc: "Designers and builders work together. Every detail is buildable, every build is beautiful." },
             ].map((item, i) => (
               <AnimatedSection key={item.title} delay={i * 100}>
                 <div className="bg-card rounded-2xl p-8">
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
               Let's design and build together.
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
 
 export default DesignBuild;