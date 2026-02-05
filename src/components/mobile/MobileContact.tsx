 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/hooks/use-toast";
 
 const contactMethods = [
   { icon: Phone, label: "Call Us", value: "+91 98765 43210", action: "tel:+919876543210" },
   { icon: Mail, label: "Email", value: "info@araconstructions.com", action: "mailto:info@araconstructions.com" },
 ];
 
 const expectations = [
   "Response within 24 hours",
   "Free initial consultation",
   "Transparent, detailed quote",
 ];
 
 export function MobileContact() {
   const { toast } = useToast();
   const [step, setStep] = useState<1 | 2>(1);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     phone: "",
     projectType: "",
     message: "",
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     await new Promise((resolve) => setTimeout(resolve, 1000));
     toast({
       title: "Request sent!",
       description: "We'll call you within 24 hours.",
     });
     setFormData({ name: "", phone: "", projectType: "", message: "" });
     setStep(1);
     setIsSubmitting(false);
   };
 
   return (
     <div className="min-h-screen pt-4">
       {/* Header */}
       <section className="mobile-container pb-2">
         <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
           Start Your Project
         </p>
         <h1 className="mobile-heading">Let's Talk</h1>
         <p className="mobile-body mt-2">
           Get a free quote in 24 hours. No obligations.
         </p>
       </section>
 
       {/* Quick Contact */}
       <section className="mobile-container">
         <div className="grid grid-cols-2 gap-3">
           {contactMethods.map((method) => {
             const Icon = method.icon;
             return (
               <a
                 key={method.label}
                 href={method.action}
                 className="mobile-card text-center py-5 mobile-tap"
               >
                 <Icon className="h-6 w-6 mx-auto mb-2 text-foreground" />
                 <p className="font-medium text-sm">{method.label}</p>
                 <p className="text-xs text-muted-foreground mt-1 truncate px-2">
                   {method.value}
                 </p>
               </a>
             );
           })}
         </div>
       </section>
 
       {/* Form Section */}
       <section className="mobile-container">
         <h2 className="mobile-subheading mb-4">Request a Quote</h2>
 
         {/* Step Indicator */}
         <div className="flex gap-2 mb-6">
           <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-foreground" : "bg-muted"}`} />
           <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-foreground" : "bg-muted"}`} />
         </div>
 
         <form onSubmit={handleSubmit}>
           {step === 1 && (
             <div className="space-y-4">
               <div>
                 <label className="text-sm font-medium mb-2 block">Your Name</label>
                 <Input
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   placeholder="Enter your name"
                   className="h-14 rounded-xl bg-card border-border text-base"
                   required
                 />
               </div>
               <div>
                 <label className="text-sm font-medium mb-2 block">Phone Number</label>
                 <Input
                   type="tel"
                   value={formData.phone}
                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                   placeholder="+91 98765 43210"
                   className="h-14 rounded-xl bg-card border-border text-base"
                   required
                 />
               </div>
               <div>
                 <label className="text-sm font-medium mb-2 block">Project Type</label>
                 <select
                   value={formData.projectType}
                   onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                   className="w-full h-14 px-4 rounded-xl bg-card border border-border text-base"
                   required
                 >
                   <option value="">Select type</option>
                   <option value="residential">Residential</option>
                   <option value="commercial">Commercial</option>
                   <option value="renovation">Renovation</option>
                   <option value="interior">Interior</option>
                 </select>
               </div>
               <Button
                 type="button"
                 size="lg"
                 className="w-full h-14 rounded-xl text-base mobile-tap"
                 onClick={() => {
                   if (formData.name && formData.phone && formData.projectType) {
                     setStep(2);
                   }
                 }}
               >
                 Continue
                 <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
             </div>
           )}
 
           {step === 2 && (
             <div className="space-y-4">
               <div>
                 <label className="text-sm font-medium mb-2 block">
                   Tell us about your project
                 </label>
                 <Textarea
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   placeholder="Location, size, special requirements..."
                   className="min-h-[120px] rounded-xl bg-card border-border text-base"
                   required
                 />
               </div>
               <div className="flex gap-3">
                 <Button
                   type="button"
                   variant="outline"
                   size="lg"
                   className="flex-1 h-14 rounded-xl text-base mobile-tap"
                   onClick={() => setStep(1)}
                 >
                   Back
                 </Button>
                 <Button
                   type="submit"
                   size="lg"
                   className="flex-1 h-14 rounded-xl text-base mobile-tap"
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? "Sending..." : "Submit"}
                 </Button>
               </div>
             </div>
           )}
         </form>
       </section>
 
       {/* What to Expect */}
       <section className="mobile-container">
         <div className="mobile-card bg-accent">
           <p className="font-medium mb-3">What to expect</p>
           <div className="space-y-2">
             {expectations.map((item) => (
               <div key={item} className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 text-foreground shrink-0" />
                 <span className="text-sm text-muted-foreground">{item}</span>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Location */}
       <section className="mobile-container">
         <div className="mobile-card flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
             <MapPin className="h-6 w-6 text-foreground" />
           </div>
           <div>
             <p className="font-medium">Visit Our Office</p>
             <p className="text-sm text-muted-foreground">Warangal, Telangana</p>
           </div>
         </div>
       </section>
 
       {/* Hours */}
       <section className="mobile-container">
         <div className="mobile-card flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
             <Clock className="h-6 w-6 text-foreground" />
           </div>
           <div>
             <p className="font-medium">Working Hours</p>
             <p className="text-sm text-muted-foreground">Mon–Sat: 9AM–6PM</p>
           </div>
         </div>
       </section>
     </div>
   );
 }