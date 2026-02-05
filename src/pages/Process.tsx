 import { Link } from "react-router-dom";
 import { Layout } from "@/components/layout/Layout";
 import { Button } from "@/components/ui/button";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { ArrowRight, CheckCircle2 } from "lucide-react";
 
 const processSteps = [
   {
     number: "01",
     title: "Initial Consultation",
     description:
       "We start with a detailed discussion about your vision, requirements, and budget. Our team visits the site to understand the terrain and local conditions.",
     details: [
       "Free site visit and assessment",
       "Understanding your requirements",
       "Initial feasibility analysis",
       "Budget discussion",
     ],
   },
   {
     number: "02",
     title: "Design & Planning",
     description:
       "Our architects create detailed plans and 3D visualizations. You'll see exactly what your space will look like before construction begins.",
     details: [
       "Architectural drawings",
       "3D visualization and walkthroughs",
       "Structural engineering plans",
       "Permit and approval handling",
     ],
   },
   {
     number: "03",
     title: "Transparent Quotation",
     description:
       "We provide a comprehensive, itemized quote with no hidden costs. Every material, labor cost, and timeline is clearly documented.",
     details: [
       "Detailed cost breakdown",
       "Material specifications",
       "Payment schedule",
       "Timeline estimates",
     ],
   },
   {
     number: "04",
     title: "Construction Phase",
     description:
       "Our skilled team executes the plan with precision. You'll receive regular updates with photos and progress reports.",
     details: [
       "Quality materials procurement",
       "Skilled labor and supervision",
       "Weekly progress updates",
       "Quality checkpoints",
     ],
   },
   {
     number: "05",
     title: "Quality Assurance",
     description:
       "Before handover, we conduct thorough quality checks. Every detail is inspected to ensure it meets our high standards.",
     details: [
       "Multi-point quality inspection",
       "Finishing verification",
       "Systems testing",
       "Punch list completion",
     ],
   },
   {
     number: "06",
     title: "Handover & Support",
     description:
       "We walk you through your new space, hand over all documentation, and remain available for any post-construction support.",
     details: [
       "Final walkthrough",
       "Complete documentation",
       "Warranty activation",
       "Ongoing support",
     ],
   },
 ];
 
 const Process = () => {
   return (
     <Layout>
       {/* Hero Section */}
       <section className="pt-32 pb-20 bg-background">
         <div className="container-wide">
           <AnimatedSection>
             <div className="max-w-3xl">
               <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                 Our Process
               </p>
               <h1 className="text-4xl md:text-6xl font-semibold mb-6">
                 Transparency at every step
               </h1>
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                 We believe you deserve to know exactly what's happening with your
                 project. Our process is designed to keep you informed and in
                 control from start to finish.
               </p>
             </div>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Process Steps */}
       <section className="section-padding bg-secondary">
         <div className="container-wide">
           <div className="space-y-16">
             {processSteps.map((step, index) => (
               <AnimatedSection
                 key={step.number}
                 direction={index % 2 === 0 ? "left" : "right"}
               >
                 <div
                   className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                     index % 2 === 1 ? "lg:flex-row-reverse" : ""
                   }`}
                 >
                   <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                     <div className="flex items-center gap-4 mb-4">
                       <span className="text-5xl font-semibold text-muted-foreground/30">
                         {step.number}
                       </span>
                       <h3 className="text-2xl md:text-3xl font-semibold">
                         {step.title}
                       </h3>
                     </div>
                     <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                       {step.description}
                     </p>
                     <ul className="space-y-3">
                       {step.details.map((detail) => (
                         <li key={detail} className="flex items-center gap-3">
                           <CheckCircle2 className="h-5 w-5 text-foreground shrink-0" />
                           <span>{detail}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                   <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                     <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                       <div className="aspect-square flex items-center justify-center">
                         <span className="text-8xl md:text-9xl font-bold text-muted-foreground/10">
                           {step.number}
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>
               </AnimatedSection>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="section-padding bg-foreground text-primary-foreground">
         <div className="container-narrow text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-primary-foreground">
               Ready to start your journey?
             </h2>
             <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
               Let's discuss your project. Schedule a free consultation and take
               the first step toward your dream space.
             </p>
             <Button asChild size="lg" variant="secondary" className="text-base px-8">
               <Link to="/contact">
                 Schedule Consultation
                 <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Process;