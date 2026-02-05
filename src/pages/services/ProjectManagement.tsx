 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
 
 const ProjectManagement = () => {
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Project Management</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               We manage.
               <br />
               You relax.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               End-to-end project management that keeps everything on track. 
               Timeline, budget, quality—we handle it all.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
               Your dedicated project team.
             </h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-2 gap-8">
             {[
               { title: "Single Point of Contact", desc: "One project manager who knows everything about your project. Always reachable." },
               { title: "Weekly Progress Reports", desc: "Photos, updates, and clear status reports delivered every week." },
               { title: "Budget Transparency", desc: "Know exactly where every rupee goes. No hidden costs, ever." },
               { title: "Timeline Accountability", desc: "We set deadlines and we keep them. Delays are not in our vocabulary." },
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
               Let us take the stress away.
             </h2>
             <Button asChild size="lg">
               <Link to="/contact/consultation">
                 Talk to a Project Manager <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default ProjectManagement;