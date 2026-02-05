 import { useState, useEffect } from "react";
 import { Layout } from "@/components/layout/Layout";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { AnimatedSection } from "@/components/ui/AnimatedSection";
 import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";
 import { useToast } from "@/hooks/use-toast";
 
 const contactInfo = [
   {
     icon: MapPin,
     title: "Visit Us",
     details: ["Warangal, Telangana", "India"],
   },
   {
     icon: Phone,
     title: "Call Us",
     details: ["+91 98765 43210", "+91 87654 32109"],
   },
   {
     icon: Mail,
     title: "Email Us",
     details: ["info@araconstructions.com", "projects@araconstructions.com"],
   },
   {
     icon: Clock,
     title: "Working Hours",
     details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: By Appointment"],
   },
 ];
 
 const Contact = () => {
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [mobileStep, setMobileStep] = useState<1 | 2>(1);

   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     projectType: "",
     message: "",
   });
 
   useEffect(() => {
     document.title = "Contact Us | ARA Constructions";
   }, []);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1000));
 
     toast({
       title: "Message sent successfully!",
       description: "We'll get back to you within 24 hours.",
     });
 
     setFormData({
       name: "",
       email: "",
       phone: "",
       projectType: "",
       message: "",
     });
     setMobileStep(1);
     setIsSubmitting(false);
   };
 
   return (
     <Layout>
       {/* Hero Section */}
       <section className="pt-8 pb-4 md:pt-32 md:pb-20 bg-background">
         <div className="container-wide px-5 md:px-6">
           <AnimatedSection>
             <div className="max-w-3xl">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                 Contact Us
               </p>
               <h1 className="text-2xl md:text-6xl font-semibold mb-4 md:mb-6">
                 Let's discuss your project
               </h1>
               <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                 Ready to start building? Get in touch with our team for a free
                 consultation. We'll respond within 24 hours.
               </p>
             </div>
           </AnimatedSection>
         </div>
       </section>
 
       {/* Mobile Quick Contact */}
       <section className="md:hidden px-5 py-4">
         <div className="grid grid-cols-2 gap-3">
           <a href="tel:+919876543210" className="bg-card border border-border rounded-2xl p-5 text-center">
             <Phone className="h-6 w-6 mx-auto mb-2 text-foreground" />
             <p className="font-medium text-sm">Call Us</p>
             <p className="text-xs text-muted-foreground mt-1">+91 98765 43210</p>
           </a>
           <a href="mailto:info@araconstructions.com" className="bg-card border border-border rounded-2xl p-5 text-center">
             <Mail className="h-6 w-6 mx-auto mb-2 text-foreground" />
             <p className="font-medium text-sm">Email</p>
             <p className="text-xs text-muted-foreground mt-1 truncate">info@ara...</p>
           </a>
         </div>
       </section>
 
       {/* Contact Form & Info */}
       <section className="py-8 md:section-padding bg-secondary">
         <div className="container-wide px-5 md:px-6">
           <div className="grid lg:grid-cols-2 gap-16">
             {/* Form */}
             <AnimatedSection direction="left">
               <div className="bg-card border border-border rounded-2xl p-5 md:p-10">
                 <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                   Request a Free Quote
                 </h2>
                 
                 {/* Mobile Step Indicator */}
                 <div className="flex gap-2 mb-6 md:hidden">
                   <div className={`h-1 flex-1 rounded-full ${mobileStep >= 1 ? "bg-foreground" : "bg-muted"}`} />
                   <div className={`h-1 flex-1 rounded-full ${mobileStep >= 2 ? "bg-foreground" : "bg-muted"}`} />
                 </div>
 
                 <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                   {/* Mobile Step 1 */}
                   <div className={`${mobileStep === 1 ? "block" : "hidden"} md:block space-y-4`}>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div>
                       <label
                         htmlFor="name"
                         className="block text-sm font-medium mb-2"
                       >
                         Full Name *
                       </label>
                       <Input
                         id="name"
                         value={formData.name}
                         onChange={(e) =>
                           setFormData({ ...formData, name: e.target.value })
                         }
                         placeholder="Your name"
                         className="h-12 md:h-10"
                         required
                       />
                     </div>
                     <div>
                       <label
                         htmlFor="phone"
                         className="block text-sm font-medium mb-2"
                       >
                         Phone Number *
                       </label>
                       <Input
                         id="phone"
                         type="tel"
                         value={formData.phone}
                         onChange={(e) =>
                           setFormData({ ...formData, phone: e.target.value })
                         }
                         placeholder="+91 98765 43210"
                         className="h-12 md:h-10"
                         required
                       />
                     </div>
                   </div>
 
                     <div className="hidden md:block">
                     <label
                       htmlFor="email"
                       className="block text-sm font-medium mb-2"
                     >
                       Email Address *
                     </label>
                     <Input
                       id="email"
                       type="email"
                       value={formData.email}
                       onChange={(e) =>
                         setFormData({ ...formData, email: e.target.value })
                       }
                       placeholder="you@example.com"
                       required
                     />
                   </div>
 
                   <div>
                     <label
                       htmlFor="projectType"
                       className="block text-sm font-medium mb-2"
                     >
                       Project Type
                     </label>
                     <select
                       id="projectType"
                       value={formData.projectType}
                       onChange={(e) =>
                         setFormData({ ...formData, projectType: e.target.value })
                       }
                       className="w-full h-12 md:h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                     >
                       <option value="">Select project type</option>
                       <option value="residential">Residential Construction</option>
                       <option value="commercial">Commercial Construction</option>
                       <option value="renovation">Renovation / Remodeling</option>
                       <option value="interior">Interior Finishing</option>
                       <option value="other">Other</option>
                     </select>
                   </div>
                   </div>
 
                   {/* Mobile Step 2 / Desktop always visible */}
                   <div className={`${mobileStep === 2 ? "block" : "hidden"} md:block space-y-4`}>
                   <div>
                     <label
                       htmlFor="message"
                       className="block text-sm font-medium mb-2"
                     >
                       Project Details *
                     </label>
                     <Textarea
                       id="message"
                       value={formData.message}
                       onChange={(e) =>
                         setFormData({ ...formData, message: e.target.value })
                       }
                       placeholder="Tell us about your project requirements, location, and any specific needs..."
                       rows={4}
                       className="min-h-[100px]"
                       required
                     />
                   </div>
                   </div>
 
                   {/* Mobile Navigation Buttons */}
                   <div className="md:hidden">
                     {mobileStep === 1 ? (
                       <Button
                         type="button"
                         size="lg"
                         className="w-full h-14"
                         onClick={() => {
                           if (formData.name && formData.phone && formData.projectType) {
                             setMobileStep(2);
                           }
                         }}
                       >
                         Continue
                         <ArrowRight className="ml-2 h-5 w-5" />
                       </Button>
                     ) : (
                       <div className="flex gap-3">
                         <Button
                           type="button"
                           variant="outline"
                           size="lg"
                           className="flex-1 h-14"
                           onClick={() => setMobileStep(1)}
                         >
                           Back
                         </Button>
                         <Button
                           type="submit"
                           size="lg"
                           className="flex-1 h-14"
                           disabled={isSubmitting}
                         >
                           {isSubmitting ? "Sending..." : "Submit"}
                         </Button>
                       </div>
                     )}
                   </div>
 
                   {/* Desktop Submit */}
                   <div className="hidden md:block">
                   <Button
                     type="submit"
                     size="lg"
                     className="w-full"
                     disabled={isSubmitting}
                   >
                     {isSubmitting ? "Sending..." : "Submit Request"}
                   </Button>
                   </div>
 
                   <p className="text-xs text-muted-foreground text-center">
                     We'll respond within 24 hours. No spam, ever.
                   </p>
                 </form>
               </div>
             </AnimatedSection>
 
             {/* Contact Info */}
             <AnimatedSection direction="right" className="hidden md:block">
               <div className="space-y-8">
                 <div>
                   <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                   <p className="text-muted-foreground leading-relaxed mb-8">
                     Whether you have a question about our services, need a quote,
                     or want to discuss your project, we're here to help.
                   </p>
                 </div>
 
                 <div className="grid sm:grid-cols-2 gap-6">
                   {contactInfo.map((info) => (
                     <div
                       key={info.title}
                       className="bg-card border border-border rounded-xl p-6 hover-lift"
                     >
                       <info.icon className="h-6 w-6 text-foreground mb-4" />
                       <h3 className="font-semibold mb-2">{info.title}</h3>
                       {info.details.map((detail) => (
                         <p
                           key={detail}
                           className="text-sm text-muted-foreground"
                         >
                           {detail}
                         </p>
                       ))}
                     </div>
                   ))}
                 </div>
 
                 {/* Why Contact Us */}
                 <div className="bg-foreground text-primary-foreground rounded-2xl p-8">
                   <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                     What to expect
                   </h3>
                   <ul className="space-y-3">
                     {[
                       "Response within 24 hours",
                       "Free initial consultation",
                       "Transparent, detailed quote",
                       "No pressure, no obligations",
                     ].map((item) => (
                       <li key={item} className="flex items-center gap-3">
                         <CheckCircle2 className="h-5 w-5 shrink-0 opacity-80" />
                         <span className="opacity-90">{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </section>
       
       {/* Mobile What to Expect */}
       <section className="md:hidden px-5 py-6">
         <div className="bg-card border border-border rounded-2xl p-5">
           <p className="font-medium mb-3">What to expect</p>
           <div className="space-y-2">
             {[
               "Response within 24 hours",
               "Free initial consultation",
               "Transparent, detailed quote",
             ].map((item) => (
               <div key={item} className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 text-foreground shrink-0" />
                 <span className="text-sm text-muted-foreground">{item}</span>
               </div>
             ))}
           </div>
         </div>
       </section>
       
       {/* Mobile Location & Hours */}
       <section className="md:hidden px-5 pb-8 space-y-3">
         <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
             <MapPin className="h-6 w-6 text-foreground" />
           </div>
           <div>
             <p className="font-medium">Visit Our Office</p>
             <p className="text-sm text-muted-foreground">Warangal, Telangana</p>
           </div>
         </div>
         <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
           <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
             <Clock className="h-6 w-6 text-foreground" />
           </div>
           <div>
             <p className="font-medium">Working Hours</p>
             <p className="text-sm text-muted-foreground">Mon–Sat: 9AM–6PM</p>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Contact;