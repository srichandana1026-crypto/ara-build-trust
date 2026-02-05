 import { useState } from "react";
 import { Layout } from "@/components/layout/Layout";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/hooks/use-toast";
 
 const StartProject = () => {
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     projectType: "",
     plotSize: "",
     budget: "",
     message: "",
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     await new Promise((resolve) => setTimeout(resolve, 1000));
     toast({
       title: "Project request received!",
       description: "We'll contact you within 24 hours.",
     });
     setFormData({ name: "", email: "", phone: "", projectType: "", plotSize: "", budget: "", message: "" });
     setIsSubmitting(false);
   };
 
   return (
     <Layout>
       <section className="pt-32 pb-24 bg-background">
         <div className="max-w-[980px] mx-auto px-6 text-center">
           <AnimatedSection>
             <p className="text-primary text-sm font-medium mb-4">Start a Project</p>
             <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
               Let's build
               <br />
               something amazing.
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Tell us about your project. We'll get back to you within 24 hours 
               with a plan and transparent estimate.
             </p>
           </AnimatedSection>
         </div>
       </section>
 
       <section className="py-24 bg-secondary">
         <div className="max-w-[600px] mx-auto px-6">
           <AnimatedSection>
             <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 space-y-6">
               <div className="grid md:grid-cols-2 gap-4">
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
               </div>
 
               <div>
                 <label className="block text-sm font-medium mb-2">Email *</label>
                 <Input
                   type="email"
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   placeholder="you@example.com"
                   required
                 />
               </div>
 
               <div>
                 <label className="block text-sm font-medium mb-2">Project Type</label>
                 <select
                   value={formData.projectType}
                   onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                   className="w-full h-10 px-3 rounded-full border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                 >
                   <option value="">Select type</option>
                   <option value="residential">Residential Home</option>
                   <option value="commercial">Commercial Building</option>
                   <option value="villa">Villa / Apartment</option>
                   <option value="renovation">Renovation</option>
                 </select>
               </div>
 
               <div className="grid md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-2">Plot Size (sq ft)</label>
                   <Input
                     value={formData.plotSize}
                     onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                     placeholder="e.g., 2400"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2">Budget Range</label>
                   <Input
                     value={formData.budget}
                     onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                     placeholder="e.g., 50-70 Lakhs"
                   />
                 </div>
               </div>
 
               <div>
                 <label className="block text-sm font-medium mb-2">Project Details</label>
                 <Textarea
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   placeholder="Tell us about your vision, requirements, location..."
                   rows={4}
                 />
               </div>
 
               <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                 {isSubmitting ? "Submitting..." : "Submit Project Request"}
               </Button>
 
               <p className="text-xs text-muted-foreground text-center">
                 Free consultation. No obligations.
               </p>
             </form>
           </AnimatedSection>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default StartProject;