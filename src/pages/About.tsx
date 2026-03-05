import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Award, Users, Building, Target } from "lucide-react";

const values = [
{
  icon: Award,
  title: "Quality First",
  description:
  "We never compromise on quality. From materials to craftsmanship, excellence is non-negotiable."
},
{
  icon: Users,
  title: "Client Focus",
  description:
  "Your vision drives every decision. We listen, adapt, and deliver exactly what you need."
},
{
  icon: Building,
  title: "Integrity",
  description:
  "Transparent pricing, honest timelines, and ethical practices. Trust is the foundation of our work."
},
{
  icon: Target,
  title: "Precision",
  description:
  "Every detail matters. We approach each project with meticulous attention and care."
}];


const milestones = [
{ year: "Vision", event: "Premium construction with complete transparency" },
{ year: "Process", event: "End-to-end planning, execution & quality control" },
{ year: "Standards", event: "Engineering excellence in every detail" },
{ year: "Team", event: "Architects, engineers & skilled craftsmen" },
{ year: "Promise", event: "On-time delivery with no hidden costs" }];


const About = () => {
  useEffect(() => {
    document.title = "About Us | ARA Constructions";
  }, []);

  return (
    <Layout>
       {/* Hero Section */}
       <section className="pt-8 pb-4 md:pt-32 md:pb-20 bg-background">
         <div className="container-wide px-5 md:px-6">
           <AnimatedSection>
             <div className="max-w-3xl">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                 About Us
               </p>
               <h1 className="text-2xl md:text-6xl font-semibold mb-4 md:mb-6">
                 Building Warangal's future, one project at a time
               </h1>
               <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                 For over a decade, ARA Constructions has been transforming visions
                 into reality. We combine local expertise with world-class
                 standards to deliver exceptional construction projects.
               </p>
             </div>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Story Section */}
       


























      
 
       {/* Values Section */}
       <section className="py-8 md:section-padding bg-background">
         <div className="container-wide px-5 md:px-6">
           <AnimatedSection>
             <div className="text-center mb-8 md:mb-16">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                 Our Values
               </p>
               <h2 className="text-2xl md:text-5xl font-semibold max-w-2xl mx-auto">
                 What we stand for
               </h2>
             </div>
           </AnimatedSection>
 
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
              {values.map((value, index) =>
            <AnimatedSection key={value.title} delay={index * 100} className="h-full">
                  <div className="h-full flex flex-col items-center text-center p-4 md:p-6 bg-card border border-border rounded-2xl md:bg-transparent md:border-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-full bg-accent md:bg-secondary flex items-center justify-center mb-3 md:mb-6">
                      <value.icon className="h-5 w-5 md:h-8 md:w-8 text-foreground" />
                    </div>
                    <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
            )}
           </div>
         </div>
       </section>
 
       {/* Stats Section */}
       



















      
 
       {/* Team Section */}
       











































      
 
       {/* CTA Section */}
       <section className="py-12 md:section-padding bg-foreground text-primary-foreground">
         <div className="container-narrow text-center px-5 md:px-6">
           <AnimatedSection>
             <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-6 text-primary-foreground">
               Let's build something great together
             </h2>
              <p className="text-base md:text-xl opacity-80 mb-8 md:mb-10 max-w-2xl mx-auto">
                Your dream space is just a conversation away. Let's discuss your
                vision and create something exceptional together.
              </p>
             <Button asChild size="lg" variant="secondary" className="text-base px-8 w-full md:w-auto">
               <Link to="/contact">
                 Get in Touch
                 <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>);

};

export default About;