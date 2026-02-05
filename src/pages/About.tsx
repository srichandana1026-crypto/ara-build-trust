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
       "We never compromise on quality. From materials to craftsmanship, excellence is non-negotiable.",
   },
   {
     icon: Users,
     title: "Client Focus",
     description:
       "Your vision drives every decision. We listen, adapt, and deliver exactly what you need.",
   },
   {
     icon: Building,
     title: "Integrity",
     description:
       "Transparent pricing, honest timelines, and ethical practices. Trust is the foundation of our work.",
   },
   {
     icon: Target,
     title: "Precision",
     description:
       "Every detail matters. We approach each project with meticulous attention and care.",
   },
 ];
 
 const milestones = [
   { year: "2012", event: "Founded in Warangal" },
   { year: "2015", event: "50th project completed" },
   { year: "2018", event: "Expanded to commercial construction" },
   { year: "2021", event: "100th project milestone" },
   { year: "2024", event: "150+ projects and growing" },
 ];
 
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
       <section className="py-8 md:section-padding bg-secondary">
         <div className="container-wide px-5 md:px-6">
           <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
             <AnimatedSection direction="left">
               <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
                 From humble beginnings to trusted partner
               </h2>
               <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                 <p>
                   ARA Constructions was founded in 2012 with a simple mission: to
                   bring transparent, quality construction to Warangal and the
                   surrounding region.
                 </p>
                 <p>
                   What started as a small team of dedicated professionals has grown
                   into a full-service construction company with over 50 skilled
                   employees. Yet our core values remain unchanged.
                 </p>
                 <p>
                   We believe that every client deserves to know exactly what
                   they're paying for, when their project will be completed, and
                   that every promise made will be kept.
                 </p>
               </div>
             </AnimatedSection>
 
             <AnimatedSection direction="right">
               <div className="bg-foreground text-primary-foreground rounded-2xl p-6 md:p-12">
                 <h3 className="text-xl font-semibold mb-6 text-primary-foreground">Our Journey</h3>
                 <div className="space-y-4 md:space-y-6">
                   {milestones.map((milestone, index) => (
                     <div
                       key={milestone.year}
                       className="flex gap-4 items-start"
                     >
                       <span className="text-base md:text-lg font-semibold opacity-60 w-14 md:w-16">
                         {milestone.year}
                       </span>
                       <div className="flex-1">
                         <div className="h-px bg-primary-foreground/20 mb-2 md:mb-3" />
                         <p className="text-sm md:text-base">{milestone.event}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
 
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
 
           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
             {values.map((value, index) => (
               <AnimatedSection key={value.title} delay={index * 100}>
                 <div className="text-center p-4 md:p-6 bg-card border border-border rounded-2xl md:bg-transparent md:border-0">
                   <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-full bg-accent md:bg-secondary flex items-center justify-center mx-auto mb-3 md:mb-6">
                     <value.icon className="h-5 w-5 md:h-8 md:w-8 text-foreground" />
                   </div>
                   <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-3">{value.title}</h3>
                   <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                     {value.description}
                   </p>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       {/* Stats Section */}
       <section className="py-10 md:py-16 bg-foreground text-primary-foreground">
         <div className="container-wide px-5 md:px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
             {[
               { value: "12+", label: "Years of Excellence" },
               { value: "150+", label: "Projects Delivered" },
               { value: "50+", label: "Team Members" },
               { value: "100%", label: "Client Satisfaction" },
             ].map((stat, index) => (
               <AnimatedSection key={stat.label} delay={index * 100}>
                 <div className="text-center">
                   <p className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2">
                     {stat.value}
                   </p>
                   <p className="text-xs md:text-base opacity-70">{stat.label}</p>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       {/* Team Section */}
       <section className="py-8 md:section-padding bg-background">
         <div className="container-wide px-5 md:px-6">
           <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
             <AnimatedSection direction="left">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                 Our Team
               </p>
               <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
                 Skilled professionals, dedicated to your success
               </h2>
               <p className="text-muted-foreground text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                 Our team includes experienced architects, engineers, project
                 managers, and skilled craftsmen. Each member is carefully selected
                 for their expertise and commitment to quality.
               </p>
               <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                 When you work with ARA, you get a dedicated project manager who
                 serves as your single point of contact throughout the entire
                 construction process.
               </p>
             </AnimatedSection>
 
             <AnimatedSection direction="right">
               <div className="bg-secondary rounded-2xl p-5 md:p-12">
                 <div className="grid grid-cols-2 gap-3 md:gap-6">
                   {[
                     { title: "Architects", count: "8" },
                     { title: "Engineers", count: "12" },
                     { title: "Project Managers", count: "10" },
                     { title: "Skilled Workers", count: "20+" },
                   ].map((role) => (
                     <div
                       key={role.title}
                       className="bg-card rounded-xl p-4 md:p-6 text-center hover-lift"
                     >
                       <p className="text-2xl md:text-3xl font-semibold mb-1 md:mb-2">{role.count}</p>
                       <p className="text-xs md:text-sm text-muted-foreground">{role.title}</p>
                     </div>
                   ))}
                 </div>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-12 md:section-padding bg-foreground text-primary-foreground">
         <div className="container-narrow text-center px-5 md:px-6">
           <AnimatedSection>
             <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-6 text-primary-foreground">
               Let's build something great together
             </h2>
             <p className="text-base md:text-xl opacity-80 mb-8 md:mb-10 max-w-2xl mx-auto">
               Join the hundreds of satisfied clients who trusted us with their
               construction projects. Your dream space is just a conversation away.
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
     </Layout>
   );
 };
 
 export default About;