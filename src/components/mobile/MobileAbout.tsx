 import { Link } from "react-router-dom";
 import { ArrowRight, Award, Users, Building, Target, ChevronRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const stats = [
   { value: "12+", label: "Years" },
   { value: "150+", label: "Projects" },
   { value: "50+", label: "Team" },
 ];
 
 const values = [
   { icon: Award, title: "Quality First", desc: "No compromises, ever" },
   { icon: Users, title: "Client Focus", desc: "Your vision drives us" },
   { icon: Building, title: "Integrity", desc: "Honest and transparent" },
   { icon: Target, title: "Precision", desc: "Every detail matters" },
 ];
 
 const milestones = [
   { year: "2012", event: "Founded in Warangal" },
   { year: "2018", event: "Expanded to commercial" },
   { year: "2024", event: "150+ projects completed" },
 ];
 
 export function MobileAbout() {
   return (
     <div className="min-h-screen pt-4">
       {/* Header */}
       <section className="mobile-container pb-2">
         <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
           Who We Are
         </p>
         <h1 className="mobile-heading">About ARA</h1>
         <p className="mobile-body mt-2">
           Building Warangal's future since 2012.
         </p>
       </section>
 
       {/* Stats */}
       <section className="mobile-container">
         <div className="grid grid-cols-3 gap-3">
           {stats.map((stat) => (
             <div key={stat.label} className="mobile-card text-center py-4">
               <p className="text-xl font-semibold">{stat.value}</p>
               <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
             </div>
           ))}
         </div>
       </section>
 
       {/* Story */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-3">Our Story</h2>
         <div className="mobile-card">
           <p className="text-sm text-muted-foreground leading-relaxed">
             ARA Constructions was founded with a simple mission: bring transparent, 
             quality construction to Warangal. What started as a small team has grown 
             into a full-service company with 50+ skilled employees.
           </p>
         </div>
       </section>
 
       {/* Timeline */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">Our Journey</h2>
         <div className="space-y-3">
           {milestones.map((item, index) => (
             <div key={item.year} className="flex gap-4 items-center">
               <span className="text-lg font-semibold text-muted-foreground w-14">
                 {item.year}
               </span>
               <div className="flex-1 mobile-card py-3">
                 <p className="text-sm">{item.event}</p>
               </div>
             </div>
           ))}
         </div>
       </section>
 
       {/* Values */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">Our Values</h2>
         <div className="grid grid-cols-2 gap-3">
           {values.map((value) => {
             const Icon = value.icon;
             return (
               <div key={value.title} className="mobile-card text-center py-5">
                 <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3">
                   <Icon className="h-5 w-5 text-foreground" />
                 </div>
                 <p className="font-medium text-sm">{value.title}</p>
                 <p className="text-xs text-muted-foreground mt-1">{value.desc}</p>
               </div>
             );
           })}
         </div>
       </section>
 
       {/* Contact CTA */}
       <section className="mobile-container">
         <Link 
           to="/contact" 
           className="mobile-card flex items-center justify-between mobile-tap"
         >
           <div>
             <p className="font-medium">Get in Touch</p>
             <p className="text-sm text-muted-foreground">Let's discuss your project</p>
           </div>
           <ChevronRight className="h-5 w-5 text-muted-foreground" />
         </Link>
       </section>
 
       {/* CTA */}
       <section className="mobile-container">
         <div className="mobile-card bg-accent p-6 text-center">
           <p className="font-semibold text-lg mb-2">Let's build together</p>
           <p className="text-sm text-muted-foreground mb-4">
             Join 150+ satisfied clients
           </p>
           <Button asChild size="lg" className="w-full rounded-xl mobile-tap">
             <Link to="/contact">
               Start Your Project
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </div>
       </section>
     </div>
   );
 }