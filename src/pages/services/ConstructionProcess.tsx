 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const steps = [
   { num: "01", title: "Consultation", desc: "We listen to your vision and understand your needs." },
   { num: "02", title: "Design", desc: "Architects create plans and 3D visualizations." },
   { num: "03", title: "Planning", desc: "Detailed timeline and transparent cost breakdown." },
   { num: "04", title: "Construction", desc: "Building begins with regular progress updates." },
   { num: "05", title: "Quality Check", desc: "Thorough inspection of every detail." },
   { num: "06", title: "Handover", desc: "Your new space is ready. Keys in hand." },
 ];
 
 const ConstructionProcess = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Construction Process</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               A clear path.
               <br />
               No surprises.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Construction doesn't have to be stressful. Our proven process keeps 
               you informed and in control at every step.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Six simple steps.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {steps.map((step, i) => (
               <AnimatedSection key={step.num} delay={i * 100}>
                 <div className="bg-card rounded-2xl p-8">
                   <p className="text-4xl font-bold text-muted-foreground/20 mb-4">{step.num}</p>
                   <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                   <p className="text-muted-foreground text-sm">{step.desc}</p>
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
               Take the first step.
             </h2>
             <Button asChild size="lg">
               <Link to="/contact/consultation">
                 Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default ConstructionProcess;