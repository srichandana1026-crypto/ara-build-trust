 import { useState } from "react";
 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/hooks/use-toast";
 import { MapPin, Phone, Mail, Clock } from "lucide-react";
 
 const contactInfo = [
   { icon: MapPin, label: "Location", value: "Warangal, Telangana" },
   { icon: Phone, label: "Phone", value: "+91 98765 43210" },
   { icon: Mail, label: "Email", value: "info@araconstructions.com" },
   { icon: Clock, label: "Hours", value: "Mon-Sat, 9 AM - 6 PM" },
 ];
 
 const Consultation = () => {
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     phone: "",
     email: "",
     message: "",
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     await new Promise((resolve) => setTimeout(resolve, 1000));
     toast({
       title: "Consultation request sent!",
       description: "We'll call you within 24 hours.",
     });
     setFormData({ name: "", phone: "", email: "", message: "" });
     setIsSubmitting(false);
   };
 
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Get Consultation</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Have questions?
               <br />
               Let's talk.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Schedule a free consultation with our experts. No pressure, no obligations. 
               Just honest advice.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[980px] mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-12">
             <AnimatedSection direction="left">
               <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 space-y-6">
                 <h2 className="text-xl font-semibold mb-4">Request a Callback</h2>
                 <div>
                   <label className="block text-sm font-medium mb-2">Full Name *</label>
                   <Input
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     placeholder="Your name"
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2">Phone *</label>
                   <Input
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     placeholder="+91 98765 43210"
                     required
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2">Email</label>
                   <Input
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     placeholder="you@example.com"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2">What would you like to discuss?</label>
                   <Textarea
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     placeholder="Tell us briefly..."
                     rows={3}
                   />
                 </div>
                 <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                   {isSubmitting ? "Sending..." : "Request Callback"}
                 </Button>
               </form>
             </AnimatedSection>
 
             <AnimatedSection direction="right">
               <div className="space-y-8">
                 <div>
                   <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                   <div className="space-y-6">
                     {contactInfo.map((info) => (
                       <div key={info.label} className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                           <info.icon className="h-5 w-5 text-foreground" />
                         </div>
                         <div>
                           <p className="text-sm text-muted-foreground">{info.label}</p>
                           <p className="font-medium">{info.value}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
 
                 <div className="bg-foreground text-primary-foreground rounded-2xl p-8">
                   <h3 className="font-semibold mb-4 text-primary-foreground">What to expect</h3>
                   <ul className="space-y-3 text-sm opacity-90">
                     <li>✓ Response within 24 hours</li>
                     <li>✓ Expert advice, no sales pitch</li>
                     <li>✓ Clear answers to your questions</li>
                     <li>✓ Free site visit if needed</li>
                   </ul>
                 </div>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Consultation;