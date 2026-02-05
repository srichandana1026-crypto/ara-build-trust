 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const Story = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Our Story</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Built on trust.
               <br />
               Growing with purpose.
             </h1>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[700px] mx-auto px-6">
           <AnimatedSection>
             <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
               <p>
                 ARA Constructions was founded in 2012 with a simple belief: construction 
                 should be transparent, trustworthy, and stress-free.
               </p>
               <p>
                 We started in Warangal with a small team of dedicated professionals 
                 who shared a vision—to change how construction is done. No hidden costs. 
                 No broken promises. Just honest work and quality results.
               </p>
               <p>
                 Today, with over 150 completed projects and a team of 50+ experts, 
                 we've proven that construction can be different. Better. More humane.
               </p>
               <p>
                 But we haven't changed our core belief. Every client deserves to know 
                 exactly what they're paying for. Every promise made will be kept. 
                 Every building will stand the test of time.
               </p>
             </div>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
               Ready to be part of our story?
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
 
 export default Story;