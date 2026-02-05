 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const reasons = [
   { title: "150+ Projects Delivered", desc: "Experience that shows in every building we create." },
   { title: "12+ Years in Business", desc: "We've seen it all. Nothing surprises us anymore." },
   { title: "Transparent Pricing", desc: "Line-by-line cost breakdown. No hidden charges. Ever." },
   { title: "On-Time Delivery", desc: "Deadlines are sacred. We don't make promises we can't keep." },
   { title: "5-Year Warranty", desc: "We stand behind our work. Structural warranty on every project." },
   { title: "Dedicated Project Manager", desc: "One person who knows everything. Always reachable." },
 ];
 
 const WhyUs = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Why Choose Us</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Why ARA?
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               There are many construction companies. Here's why hundreds of 
               families and businesses chose us.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {reasons.map((reason, i) => (
               <AnimatedSection key={reason.title} delay={i * 100}>
                 <div className="bg-card rounded-2xl p-8 h-full">
                   <h3 className="font-semibold mb-3">{reason.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
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
               See for yourself.
             </h2>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button asChild size="lg">
                 <Link to="/projects/residential">
                   View Projects <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
               <Button asChild size="lg" variant="outline">
                 <Link to="/contact/consultation">
                   Get Free Consultation
                 </Link>
               </Button>
             </div>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default WhyUs;