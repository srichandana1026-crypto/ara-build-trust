 import { Link } from "react-router-dom";
 import { ArrowRight, CheckCircle2 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { useState } from "react";
 import { cn } from "@/lib/utils";
 
 const steps = [
   {
     number: "01",
     title: "Consult",
     subtitle: "Free site visit",
     points: ["Site assessment", "Requirements discussion", "Initial feasibility"],
   },
   {
     number: "02",
     title: "Design",
     subtitle: "Your vision, visualized",
     points: ["Architectural plans", "3D walkthrough", "Permit handling"],
   },
   {
     number: "03",
     title: "Quote",
     subtitle: "No hidden costs",
     points: ["Itemized pricing", "Material specs", "Clear timeline"],
   },
   {
     number: "04",
     title: "Build",
     subtitle: "Quality construction",
     points: ["Skilled labor", "Weekly updates", "Quality checks"],
   },
   {
     number: "05",
     title: "Deliver",
     subtitle: "Your keys, your home",
     points: ["Final walkthrough", "Documentation", "5yr warranty"],
   },
 ];
 
 export function MobileProcess() {
   const [activeStep, setActiveStep] = useState(0);
 
   return (
     <div className="min-h-screen pt-4">
       {/* Header */}
       <section className="mobile-container pb-2">
         <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
           How We Work
         </p>
         <h1 className="mobile-heading">Our Process</h1>
         <p className="mobile-body mt-2">
           Transparent steps from vision to keys.
         </p>
       </section>
 
       {/* Step Selector */}
       <section className="px-5 overflow-x-auto">
         <div className="flex gap-2 min-w-max pb-4">
           {steps.map((step, index) => (
             <button
               key={step.number}
               onClick={() => setActiveStep(index)}
               className={cn(
                 "px-4 py-2 rounded-full text-sm font-medium transition-all mobile-tap",
                 activeStep === index
                   ? "bg-foreground text-background"
                   : "bg-card text-muted-foreground border border-border"
               )}
             >
               {step.title}
             </button>
           ))}
         </div>
       </section>
 
       {/* Active Step Detail */}
       <section className="mobile-container">
         <div className="mobile-card">
           <div className="flex items-center gap-4 mb-4">
             <span className="text-4xl font-bold text-muted-foreground/30">
               {steps[activeStep].number}
             </span>
             <div>
               <p className="text-xl font-semibold">{steps[activeStep].title}</p>
               <p className="text-sm text-muted-foreground">
                 {steps[activeStep].subtitle}
               </p>
             </div>
           </div>
 
           <div className="space-y-3 mt-6">
             {steps[activeStep].points.map((point) => (
               <div key={point} className="flex items-center gap-3">
                 <CheckCircle2 className="h-5 w-5 text-foreground shrink-0" />
                 <span className="text-sm">{point}</span>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Progress Indicator */}
       <section className="mobile-container">
         <div className="flex gap-1.5">
           {steps.map((_, index) => (
             <div
               key={index}
               className={cn(
                 "h-1 flex-1 rounded-full transition-colors",
                 index <= activeStep ? "bg-foreground" : "bg-muted"
               )}
             />
           ))}
         </div>
         <p className="text-xs text-muted-foreground text-center mt-3">
           Step {activeStep + 1} of {steps.length}
         </p>
       </section>
 
       {/* All Steps Overview */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">All Steps</h2>
         <div className="space-y-3">
           {steps.map((step, index) => (
             <button
               key={step.number}
               onClick={() => setActiveStep(index)}
               className={cn(
                 "mobile-card w-full flex items-center gap-4 mobile-tap text-left",
                 activeStep === index && "border-foreground"
               )}
             >
               <span className="text-lg font-semibold text-muted-foreground/50 w-8">
                 {step.number}
               </span>
               <div className="flex-1">
                 <p className="font-medium">{step.title}</p>
                 <p className="text-sm text-muted-foreground">{step.subtitle}</p>
               </div>
             </button>
           ))}
         </div>
       </section>
 
       {/* CTA */}
       <section className="mobile-container">
         <div className="mobile-card bg-accent p-6 text-center">
           <p className="font-semibold text-lg mb-2">Ready to start?</p>
           <p className="text-sm text-muted-foreground mb-4">
             Book your free consultation today
           </p>
           <Button asChild size="lg" className="w-full rounded-xl mobile-tap">
             <Link to="/contact">
               Schedule Consultation
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </div>
       </section>
     </div>
   );
 }