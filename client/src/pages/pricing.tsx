import AnimatedSection from "@/components/animated-section";
import CTA from "@/components/cta";
import { CheckIcon } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    description: "QR-first approach for small lines",
    price: "$499",
    period: "/month per line",
    popular: false,
    features: [
      "QR code tracking",
      "Basic quality control", 
      "Real-time visibility",
      "Mobile app included",
      "Email support",
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Pro", 
    description: "Hybrid RFID + QR with AI insights",
    price: "$1,299",
    period: "/month per line",
    popular: true,
    features: [
      "RFID + QR hybrid tracking",
      "AI-powered analytics",
      "Predictive quality alerts", 
      "EPCIS 2.0 compliance",
      "Priority support",
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    description: "Custom deployment for large operations", 
    price: "Custom",
    period: "Contact us for pricing",
    popular: false,
    features: [
      "Multi-facility deployment",
      "Custom integrations",
      "Dedicated success manager",
      "On-premise options", 
      "24/7 support",
    ],
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  return (
    <div>
      {/* Header */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Modular SaaS pricing with Sharia-compliant financing options. Start small, scale smart. 
              No hidden fees, no surprise charges.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Cards */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-card p-8 rounded-xl border relative ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold mb-2">{tier.price}</div>
                  <div className="text-muted-foreground">{tier.period}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-brand-gradient text-white hover:opacity-90' 
                      : tier.name === 'Enterprise'
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  data-testid={`button-${tier.name.toLowerCase()}-cta`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Hardware provided through certified partners. Sharia-compliant financing available.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-card px-3 py-1 rounded-full border">✓ No setup fees</span>
              <span className="bg-card px-3 py-1 rounded-full border">✓ Cancel anytime</span>
              <span className="bg-card px-3 py-1 rounded-full border">✓ 30-day money back</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Hardware & Financing */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Hardware & Financing</h2>
              <p className="text-xl text-muted-foreground">
                Complete solutions with flexible payment options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-xl border">
                <h3 className="font-display text-2xl font-semibold mb-6">Hardware Partners</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>RFID Fixed Readers</span>
                    <span className="font-medium">$2,500-$8,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Handheld RFID Scanners</span>
                    <span className="font-medium">$1,200-$3,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>QR Scanner Stations</span>
                    <span className="font-medium">$300-$800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mobile Devices</span>
                    <span className="font-medium">$200-$500</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Hardware pricing varies by volume and configuration. 
                    We work with certified partners to ensure competitive pricing and reliable support.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border">
                <h3 className="font-display text-2xl font-semibold mb-6">Financing Options</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Sharia-Compliant Financing</h4>
                    <p className="text-muted-foreground text-sm">
                      Interest-free payment plans structured according to Islamic financial principles.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Equipment Leasing</h4>
                    <p className="text-muted-foreground text-sm">
                      Flexible lease terms from 24-60 months with buyout options.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Revenue Sharing</h4>
                    <p className="text-muted-foreground text-sm">
                      Pay a percentage of efficiency gains instead of upfront costs.
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700">
                    Most customers see ROI within 6-12 months through reduced waste and improved efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ROI Calculator */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Calculate Your ROI</h2>
              <p className="text-xl text-muted-foreground">
                See how StitchOS can impact your bottom line.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-4">Typical Savings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Reduced Rework (25-40%)</span>
                      <span className="font-semibold text-green-600">$15,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Improved Efficiency (12-18%)</span>
                      <span className="font-semibold text-green-600">$25,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Faster Quality Detection</span>
                      <span className="font-semibold text-green-600">$8,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reduced Inventory Losses</span>
                      <span className="font-semibold text-green-600">$5,000/month</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-lg font-bold">
                      <span>Total Monthly Savings</span>
                      <span className="text-green-600">$53,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-4">Investment</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>StitchOS Pro (5 lines)</span>
                      <span>$6,495/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hardware (amortized)</span>
                      <span>$3,500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Training & Setup</span>
                      <span>$800/month</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-lg font-bold">
                      <span>Total Monthly Investment</span>
                      <span>$10,795</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-xl font-bold text-green-600">
                      <span>Net Monthly Benefit</span>
                      <span>$42,205</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">ROI: 392%</div>
                <div className="text-muted-foreground">Payback period: 3.1 months</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Can I start with one production line?</h4>
                  <p className="text-muted-foreground text-sm">
                    Absolutely. Many customers start with a pilot line to prove ROI, then scale across their facility.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What happens if I want to cancel?</h4>
                  <p className="text-muted-foreground text-sm">
                    You can cancel at any time with 30 days notice. We also offer a 30-day money-back guarantee.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Do you integrate with our ERP system?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, we have pre-built connectors for major ERP systems and can build custom integrations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">How long does implementation take?</h4>
                  <p className="text-muted-foreground text-sm">
                    Typical deployment is 2-4 weeks for pilot lines, 6-12 weeks for full facility rollouts.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Is training included?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, comprehensive training for operators, supervisors, and management is included in all plans.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What about data security?</h4>
                  <p className="text-muted-foreground text-sm">
                    Enterprise-grade security with SOC 2 compliance and optional on-premise deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        body="Choose the plan that's right for your production needs. Start with a free trial and scale as you grow."
        primaryCta={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </div>
  );
}
