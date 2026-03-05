import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import heroImageMobile from "@/assets/hero-construction-mobile.jpg";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import processImage from "@/assets/process-visual.jpg";

const VerticalSlideButton = ({
  children,
  to,
  variant = "default",
  className = ""
}: {
  children: React.ReactNode;
  to: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}) => {
  return <Button asChild size="lg" variant={variant} className={className + " group relative overflow-hidden transition-none hover:bg-inherit active:bg-inherit"}>
    <Link to={to} className="relative">
      <span className="flex flex-col items-center justify-center overflow-hidden h-6 relative">
        <span className="inline-flex items-center transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="inline-flex items-center transition-all duration-300 ease-in-out group-hover:-translate-y-full absolute top-full">
          {children}
        </span>
      </span>
    </Link>
  </Button>;
};


const stats = [{
  value: "150+",
  label: "Projects Completed"
}, {
  value: "12+",
  label: "Years Experience"
}, {
  value: "100%",
  label: "Client Satisfaction"
}, {
  value: "50+",
  label: "Expert Team"
}];
const features = [{
  icon: Shield,
  title: "Transparent Pricing",
  description: "No hidden costs. Every expense is documented and shared with you upfront."
}, {
  icon: Clock,
  title: "On-Time Delivery",
  description: "We commit to timelines and deliver. Your project will be ready when promised."
}, {
  icon: Users,
  title: "Dedicated Team",
  description: "A single point of contact and expert team assigned exclusively to your project."
}];

const AnimatedCapsule = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`moving-border-container ${className} min-h-[32px]`}>
    <div className="moving-border-line" />
    <div className="moving-border-content glass-capsule px-5 py-2 flex items-center justify-center bg-white/10 dark:bg-black/20 border border-white/30 backdrop-blur-xl">
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-none text-current">
        {children}
      </span>
    </div>
  </div>
);


const Index = () => {

  useEffect(() => {
    document.title = "ARA Constructions | Trusted Construction Partner in Warangal";
  }, []);
  return <Layout>
    {/* Hero Section */}
    <section className="relative min-h-[85vh] md:min-h-screen flex items-end md:items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Mobile hero image */}
        <img src={heroImageMobile} alt="Modern residential construction" className="w-full h-full object-cover object-center md:hidden" />
        {/* Desktop hero image */}
        <img src={heroImage} alt="Modern construction project" className="w-full h-full object-cover object-center hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent md:bg-foreground/60 md:via-transparent md:from-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-5 md:container-wide md:text-center md:text-primary-foreground pb-8 md:pb-0 md:pt-20">
        <AnimatedSection className="md:block">
          <AnimatedCapsule className="mb-6 md:mx-auto">
            Warangal's Trusted Construction Partner
          </AnimatedCapsule>
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
            <VerticalSlideButton to="/contact" className="hero-cta-fix text-base h-14 md:h-auto rounded-xl md:rounded-md md:px-10 bg-foreground text-primary-foreground md:bg-secondary md:text-foreground">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </VerticalSlideButton>

            <VerticalSlideButton to="/process" variant="outline" className="hidden md:inline-flex text-base px-10 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              See How We Work
            </VerticalSlideButton>
          </div>
        </AnimatedSection>

      </div>
    </section>


    {/* Stats Section */}
    <section className="bg-foreground text-primary-foreground py-8 md:py-16">
      <div className="container-wide px-5 md:px-6">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => <AnimatedSection key={stat.label} delay={index * 100}>
            <div className="text-center">
              <p className="text-xl md:text-4xl font-semibold mb-1 md:mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-base opacity-70">{stat.label}</p>
            </div>
          </AnimatedSection>)}
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-10 md:section-padding bg-background">
      <div className="container-wide px-5 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-16">
            <AnimatedCapsule className="mb-6 mx-auto">
              Why ARA Constructions
            </AnimatedCapsule>
            <h2 className="text-2xl md:text-5xl font-semibold max-w-2xl mx-auto">

              Building trust through transparency
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => <AnimatedSection key={feature.title} delay={index * 100}>
            <div className="bg-muted/30 border border-muted-foreground/10 rounded-2xl p-8 hover-lift flex flex-col justify-between min-h-[280px] md:min-h-[340px] group transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>

          </AnimatedSection>)}
        </div>

      </div>
    </section>

    {/* Services Preview Section */}
    <section className="py-10 md:section-padding bg-secondary">
      <div className="container-wide px-5 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-16">
            <AnimatedCapsule className="mb-6 mx-auto">
              Our Services
            </AnimatedCapsule>
            <h2 className="text-2xl md:text-5xl font-semibold max-w-3xl mx-auto">

              Complete construction solutions for every need
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <div className="group relative rounded-2xl overflow-hidden">
              <img src={residentialImage} alt="Residential construction" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold mb-2 text-primary-foreground bg-white/0">
                  Residential Construction
                </h3>
                <p className="text-primary-foreground/80 mb-4 bg-white/0">
                  Custom homes, villas, and apartments designed for your lifestyle
                </p>
                <Link to="/services" className="inline-flex items-center text-primary-foreground font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="group relative rounded-2xl overflow-hidden">
              <img src={commercialImage} alt="Commercial construction" className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold mb-2 text-primary-foreground bg-white/0">
                  Commercial Construction
                </h3>
                <p className="text-primary-foreground/80 mb-4 bg-white/0">
                  Office spaces, retail, and industrial buildings built to last
                </p>
                <Link to="/services" className="inline-flex items-center text-primary-foreground font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Process Preview */}
    <section className="py-20 md:section-padding bg-background">
      <div className="container-wide px-5 md:px-6">
        {/* Top Text Row */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
          {/* Left Column */}
          <AnimatedSection direction="left" className="flex flex-col justify-start">
            <AnimatedCapsule className="mb-6 w-fit">
              Our Process
            </AnimatedCapsule>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-[1.1]">
              From Vision<br />to Reality
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-md">
              We've perfected a transparent, step-by-step process that keeps you informed and in control at every stage of your project.
            </p>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection direction="right" className="flex flex-col justify-start pt-0 md:pt-4">
            <div className="space-y-8 md:space-y-10">
              {[{
                number: "01",
                title: "Consult",
                desc: "Initial consultation and site assessment"
              }, {
                number: "02",
                title: "Plan",
                desc: "Detailed planning and transparent pricing"
              }, {
                number: "03",
                title: "Build",
                desc: "Quality construction with regular updates"
              }, {
                number: "04",
                title: "Deliver",
                desc: "Final walkthrough and handover"
              }].map((item) => (
                <div key={item.number} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm md:text-base font-medium text-[#999999] uppercase tracking-wider">
                      {item.number} {item.title}
                    </span>
                  </div>
                  <p className="text-foreground font-medium text-base md:text-2xl leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>

        {/* Bottom Image CTA - Full Width Row */}
        <AnimatedSection delay={200}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <img src={processImage} alt="Our Construction Process" className="absolute inset-0 w-full h-full object-cover" />

            <div className="relative z-10 p-8 md:p-16 w-full flex flex-col items-center text-center gap-8">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Ready to build your dream space?
                </h3>
                <p className="text-base md:text-xl text-muted-foreground font-medium mx-auto max-w-lg leading-relaxed mb-8">
                  Get a free consultation and transparent quote for your project. No obligations, no hidden costs.
                </p>
              </div>

              <VerticalSlideButton to="/contact" className="bg-white text-black hover:bg-white/90 rounded-2xl px-14 h-16 text-xl transition-all hover:scale-105 font-bold shadow-2xl border border-white/20 whitespace-nowrap active:scale-95">
                Get your free quote now
              </VerticalSlideButton>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>



  </Layout >;
};
export default Index;