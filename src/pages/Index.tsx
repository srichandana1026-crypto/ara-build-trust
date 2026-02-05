 import { useEffect } from "react";
 import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team" },
];

const features = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "No hidden costs. Every expense is documented and shared with you upfront.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We commit to timelines and deliver. Your project will be ready when promised.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A single point of contact and expert team assigned exclusively to your project.",
  },
];

const Index = () => {
   useEffect(() => {
     document.title = "ARA Constructions | Trusted Construction Partner in Warangal";
   }, []);
 
  return (
     <Layout>
      {/* Hero Section */}
       <section className="relative min-h-[85vh] md:min-h-screen flex items-end md:items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern construction project"
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent md:bg-foreground/60 md:via-transparent md:from-transparent" />
        </div>

        {/* Hero Content */}
         <div className="relative z-10 w-full px-5 md:container-wide md:text-center md:text-primary-foreground pb-8 md:pb-0 md:pt-20">
           <AnimatedSection className="md:block">
             <p className="text-xs md:text-base font-medium tracking-widest uppercase mb-2 md:mb-6 text-muted-foreground md:text-primary-foreground md:opacity-80">
              Warangal's Trusted Construction Partner
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
             <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-3 md:mb-6 max-w-4xl md:mx-auto text-foreground md:text-primary-foreground">
               <span className="md:hidden">Build Your Dream Home</span>
               <span className="hidden md:inline">We Build Spaces
              <br />
               You'll Love Living In</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
             <p className="text-sm md:text-xl max-w-2xl md:mx-auto mb-6 md:mb-10 text-muted-foreground md:text-primary-foreground md:opacity-90 leading-relaxed">
              End-to-end residential and commercial construction with complete
               transparency.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
             <div className="flex flex-col sm:flex-row gap-4 md:justify-center">
               <Button asChild size="lg" variant="default" className="text-base h-14 md:h-auto rounded-xl md:rounded-md md:px-8 md:variant-secondary">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                 className="hidden md:inline-flex text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link to="/process">See How We Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
       <section className="bg-foreground text-primary-foreground py-8 md:py-16">
         <div className="container-wide px-5 md:px-6">
           <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                   <p className="text-xl md:text-4xl font-semibold mb-1 md:mb-2">
                    {stat.value}
                  </p>
                   <p className="text-xs md:text-base opacity-70">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
       <section className="py-10 md:section-padding bg-background">
         <div className="container-wide px-5 md:px-6">
          <AnimatedSection>
             <div className="text-center mb-8 md:mb-16">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                Why ARA Constructions
              </p>
               <h2 className="text-2xl md:text-5xl font-semibold max-w-2xl mx-auto">
                Building trust through transparency
              </h2>
            </div>
          </AnimatedSection>

           <div className="grid gap-3 md:grid-cols-3 md:gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                 <div className="bg-card border border-border rounded-2xl p-5 md:p-8 hover-lift flex items-center gap-4 md:block">
                   <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 md:w-auto md:h-auto md:bg-transparent md:mb-6">
                     <feature.icon className="h-6 w-6 md:h-10 md:w-10 text-foreground" />
                   </div>
                   <div className="flex-1">
                     <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                   </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
       <section className="py-10 md:section-padding bg-secondary">
         <div className="container-wide px-5 md:px-6">
          <AnimatedSection>
             <div className="text-center mb-8 md:mb-16">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                Our Services
              </p>
               <h2 className="text-2xl md:text-5xl font-semibold max-w-3xl mx-auto">
                Complete construction solutions for every need
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="group relative rounded-2xl overflow-hidden">
                <img
                  src={residentialImage}
                  alt="Residential construction"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-primary-foreground mb-2">
                    Residential Construction
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Custom homes, villas, and apartments designed for your lifestyle
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary-foreground font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="group relative rounded-2xl overflow-hidden">
                <img
                  src={commercialImage}
                  alt="Commercial construction"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-semibold text-primary-foreground mb-2">
                    Commercial Construction
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Office spaces, retail, and industrial buildings built to last
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary-foreground font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Preview */}
       <section className="py-10 md:section-padding bg-background">
         <div className="container-wide px-5 md:px-6">
           <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimatedSection direction="left">
               <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2 md:mb-4">
                Our Process
              </p>
               <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-6">
                A clear path from vision to reality
              </h2>
               <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                We've perfected a transparent, step-by-step process that keeps you
                informed and in control at every stage of your project.
              </p>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Initial consultation and site assessment",
                  "Detailed planning and transparent pricing",
                  "Quality construction with regular updates",
                  "Final walkthrough and handover",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3">
                     <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-foreground shrink-0 mt-0.5" />
                     <span className="text-foreground text-sm md:text-base">{step}</span>
                  </li>
                ))}
              </ul>
               <Button asChild size="lg" className="w-full md:w-auto">
                <Link to="/process">
                  View Full Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right">
               <div className="relative hidden md:block">
                 <div className="bg-secondary rounded-2xl p-6 md:p-12">
                   <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {[
                      { number: "01", title: "Consult" },
                      { number: "02", title: "Plan" },
                      { number: "03", title: "Build" },
                      { number: "04", title: "Deliver" },
                    ].map((item) => (
                      <div
                        key={item.number}
                        className="bg-card rounded-xl p-6 text-center hover-lift"
                      >
                        <p className="text-3xl font-semibold text-muted-foreground mb-2">
                          {item.number}
                        </p>
                        <p className="font-medium">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-10 md:section-padding bg-foreground text-primary-foreground">
         <div className="container-narrow text-center px-5 md:px-6">
          <AnimatedSection>
             <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-6 text-primary-foreground">
              Ready to build your dream space?
            </h2>
             <p className="text-sm md:text-xl opacity-80 mb-6 md:mb-10 max-w-2xl mx-auto">
              Get a free consultation and transparent quote for your project.
              No obligations, no hidden costs.
            </p>
             <Button asChild size="lg" variant="secondary" className="text-base px-8 w-full md:w-auto">
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
