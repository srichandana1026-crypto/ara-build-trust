 import { Link } from "react-router-dom";
 import { ArrowRight, Shield, Clock, Users, ChevronRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroImage from "@/assets/hero-construction.jpg";
 
 const quickStats = [
   { value: "150+", label: "Projects" },
   { value: "12yrs", label: "Experience" },
   { value: "100%", label: "Satisfaction" },
 ];
 
 const trustPoints = [
   { icon: Shield, title: "Transparent Pricing", desc: "No hidden costs ever" },
   { icon: Clock, title: "On-Time Delivery", desc: "We keep our promises" },
   { icon: Users, title: "Dedicated Support", desc: "Your personal team" },
 ];
 
 export function MobileHome() {
   return (
     <div className="min-h-screen">
       {/* Hero Section */}
       <section className="relative h-[70vh] flex items-end">
         <div className="absolute inset-0">
           <img
             src={heroImage}
             alt="Construction"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
         </div>
 
         <div className="relative z-10 mobile-container w-full">
           <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
             Warangal's Trusted Builder
           </p>
           <h1 className="text-3xl font-semibold leading-tight mb-3">
             Build Your
             <br />
             Dream Home
           </h1>
           <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
             End-to-end construction with complete transparency.
           </p>
           <Button asChild size="lg" className="w-full text-base h-14 rounded-xl mobile-tap">
             <Link to="/contact">
               Start Your Project
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </div>
       </section>
 
       {/* Quick Stats */}
       <section className="mobile-container">
         <div className="grid grid-cols-3 gap-3">
           {quickStats.map((stat) => (
             <div
               key={stat.label}
               className="mobile-card text-center py-4"
             >
               <p className="text-xl font-semibold">{stat.value}</p>
               <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
             </div>
           ))}
         </div>
       </section>
 
       {/* Why Choose Us */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">Why Choose ARA</h2>
         <div className="space-y-3">
           {trustPoints.map((point) => (
             <div key={point.title} className="mobile-card flex items-center gap-4 mobile-tap">
               <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                 <point.icon className="h-6 w-6 text-foreground" />
               </div>
               <div className="flex-1">
                 <p className="font-medium">{point.title}</p>
                 <p className="text-sm text-muted-foreground">{point.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </section>
 
       {/* Quick Actions */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">Get Started</h2>
         <div className="space-y-3">
           <Link to="/services" className="mobile-card flex items-center justify-between mobile-tap">
             <div>
               <p className="font-medium">Explore Our Services</p>
               <p className="text-sm text-muted-foreground">What we can build for you</p>
             </div>
             <ChevronRight className="h-5 w-5 text-muted-foreground" />
           </Link>
           <Link to="/process" className="mobile-card flex items-center justify-between mobile-tap">
             <div>
               <p className="font-medium">See How We Work</p>
               <p className="text-sm text-muted-foreground">Our transparent process</p>
             </div>
             <ChevronRight className="h-5 w-5 text-muted-foreground" />
           </Link>
         </div>
       </section>
 
       {/* CTA Card */}
       <section className="mobile-container">
         <div className="mobile-card bg-accent p-6 text-center">
           <p className="font-semibold text-lg mb-2">Ready to build?</p>
           <p className="text-sm text-muted-foreground mb-4">
             Get a free consultation today
           </p>
           <Button asChild size="lg" className="w-full rounded-xl mobile-tap">
             <Link to="/contact">
               Get Free Quote
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
         </div>
       </section>
     </div>
   );
 }