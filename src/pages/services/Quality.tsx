 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const Quality = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Quality & Supervision</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Quality is not
               <br />
               an afterthought.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Every brick, every beam, every finish is inspected. Our multi-point 
               quality process ensures your building exceeds expectations.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               How we ensure quality.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-2 gap-8">
             {[
               { title: "On-Site Supervision", desc: "Experienced supervisors present every day. Nothing escapes their attention." },
               { title: "Material Testing", desc: "Every batch of concrete, steel, and brick is tested before use." },
               { title: "Stage-wise Inspection", desc: "Quality checks at every construction milestone. Problems caught early." },
               { title: "Third-Party Audits", desc: "Independent quality audits for complete peace of mind." },
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
               See quality in action.
             </h2>
             <Button asChild size="lg">
               <Link to="/projects/residential">
                 View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Quality;