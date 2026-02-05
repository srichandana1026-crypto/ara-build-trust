import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-12 bg-background">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
              Build with
              <br />
              <span className="text-primary">confidence.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              End-to-end construction. Complete transparency.
              <br />
              From foundation to finishing, we handle everything.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact/start-project">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/services/process">See How We Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-foreground">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Construction shouldn't be stressful.
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Most people fear construction—hidden costs, endless delays, broken promises. 
              We built ARA Constructions to prove it can be different.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 bg-background">
        <div className="max-w-[980px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-20">
              What we build.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Residential",
                desc: "Custom homes, villas, and apartments designed around your life.",
                link: "/services/residential",
              },
              {
                title: "Commercial",
                desc: "Offices, retail spaces, and warehouses built for business.",
                link: "/services/commercial",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <Link
                  to={item.link}
                  className="group block bg-secondary rounded-3xl p-10 transition-all duration-300 hover:bg-secondary/80"
                >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.desc}</p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-32 bg-secondary">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold mb-20">
              Why families choose us.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: "150+", label: "Projects Delivered" },
              { stat: "12+", label: "Years Experience" },
              { stat: "100%", label: "On-Time Delivery" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 100}>
                <div>
                  <p className="text-5xl md:text-6xl font-semibold text-foreground mb-2">{item.stat}</p>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-32 bg-background">
        <div className="max-w-[980px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-6">
              Transparent. Every step.
            </h2>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-20">
              You'll always know exactly what's happening, what it costs, and when it'll be done.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Line-by-line pricing", desc: "Every cost itemized. No hidden fees. Ever." },
              { title: "Weekly updates", desc: "Photos and progress reports delivered to you." },
              { title: "Single point of contact", desc: "One project manager who knows everything." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-32 bg-secondary">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              A simple process.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
              From first call to final handover—clear, predictable, stress-free.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "01", label: "Consult" },
              { num: "02", label: "Plan" },
              { num: "03", label: "Build" },
              { num: "04", label: "Deliver" },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 100}>
                <div className="bg-card rounded-2xl p-8">
                  <p className="text-4xl font-bold text-muted-foreground/30 mb-2">{step.num}</p>
                  <p className="font-medium">{step.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <div className="mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/services/process">View Full Process</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Ready to start?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Get a free consultation. No pressure. No obligations.
              <br />
              Just honest advice about your project.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to="/contact/start-project">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
