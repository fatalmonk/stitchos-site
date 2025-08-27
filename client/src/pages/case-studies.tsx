import { caseStudies } from "@/content/case-studies";
import AnimatedSection from "@/components/animated-section";
import CTA from "@/components/cta";

export default function CaseStudies() {
  return (
    <div>
      {/* Header */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-muted-foreground">
              Real results from textile manufacturers who transformed their operations with StitchOS. 
              See how AI-powered intelligence delivers measurable improvements in efficiency, quality, and compliance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies Grid */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="rounded-xl shadow-lg w-full h-96 object-cover"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-bold mb-6">{study.title}</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-destructive mb-2 flex items-center">
                          <span className="w-2 h-2 bg-destructive rounded-full mr-3"></span>
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-green-600 mb-2 flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-primary mb-2 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          The Results
                        </h3>
                        <p className="text-muted-foreground">{study.outcome}</p>
                      </div>
                    </div>

                    {study.metrics && (
                      <div className="mt-8 p-6 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-gradient mb-1">{metric.value}</div>
                              <div className="text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industry Impact */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-6">Industry Impact</h2>
            <p className="text-xl text-muted-foreground mb-12">
              StitchOS is transforming textile manufacturing across Bangladesh and beyond.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="font-medium mb-2">Production Lines</div>
                <div className="text-sm text-muted-foreground">Optimized with StitchOS intelligence</div>
              </div>

              <div className="bg-card p-8 rounded-xl border">
                <div className="text-4xl font-bold text-gradient mb-2">25M+</div>
                <div className="font-medium mb-2">Garments Tracked</div>
                <div className="text-sm text-muted-foreground">End-to-end visibility delivered</div>
              </div>

              <div className="bg-card p-8 rounded-xl border">
                <div className="text-4xl font-bold text-gradient mb-2">₹50M+</div>
                <div className="font-medium mb-2">Cost Savings</div>
                <div className="text-sm text-muted-foreground">Through reduced waste and rework</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">What Our Customers Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-xl border">
                <div className="text-lg font-medium mb-4">
                  "StitchOS transformed our quality control process. We caught defects 40% earlier and our rework rate dropped to under 3%. The AI predictions are incredibly accurate."
                </div>
                <div className="text-muted-foreground">
                  — Rashid Ahmed, Production Manager at KTL Textiles
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border">
                <div className="text-lg font-medium mb-4">
                  "The real-time visibility is game-changing. We always know exactly where every order stands and can proactively address delays before they impact delivery."
                </div>
                <div className="text-muted-foreground">
                  — Sarah Chen, Operations Director at Denim Solutions Ltd
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <CTA
        title="Ready to Write Your Success Story?"
        body="Join the growing community of textile manufacturers transforming their operations with StitchOS."
        primaryCta={{ label: "Start Your Journey", href: "/contact" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact" }}
      />
    </div>
  );
}
