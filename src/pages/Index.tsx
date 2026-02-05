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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern construction project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-wide text-center text-primary-foreground pt-20">
          <AnimatedSection>
            <p className="text-sm md:text-base font-medium tracking-widest uppercase mb-6 opacity-80">
              Warangal's Trusted Construction Partner
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 max-w-4xl mx-auto text-primary-foreground">
              We Build Spaces
              <br />
              You'll Love Living In
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
              End-to-end residential and commercial construction with complete
              transparency. From foundation to finishing, we handle everything.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link to="/process">See How We Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-foreground text-primary-foreground py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-semibold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base opacity-70">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Why ARA Constructions
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl mx-auto">
                Building trust through transparency
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="bg-card border border-border rounded-xl p-8 hover-lift">
                  <feature.icon className="h-10 w-10 text-foreground mb-6" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Our Services
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto">
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Our Process
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                A clear path from vision to reality
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We've perfected a transparent, step-by-step process that keeps you
                informed and in control at every stage of your project.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Initial consultation and site assessment",
                  "Detailed planning and transparent pricing",
                  "Quality construction with regular updates",
                  "Final walkthrough and handover",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-foreground shrink-0 mt-0.5" />
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg">
                <Link to="/process">
                  View Full Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="bg-secondary rounded-2xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
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
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-primary-foreground">
              Ready to build your dream space?
            </h2>
            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
              Get a free consultation and transparent quote for your project.
              No obligations, no hidden costs.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
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
