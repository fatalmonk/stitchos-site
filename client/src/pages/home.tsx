import Hero from "@/components/hero";
import KpiStat from "@/components/kpi-stat";
import CTA from "@/components/cta";
import AnimatedSection from "@/components/animated-section";
import { kpis } from "@/content/kpis";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Weaving Intelligence Into Every Thread"
        subtitle="Transform every line of production into a stream of intelligence. StitchOS unites RFID, QR, and IoT into one AI-powered platform — delivering real-time visibility, smarter decisions, and compliance built for global brands."
        primaryCta={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ label: "Watch Demo", href: "/process" }}
      />

      {/* KPI Stats */}
      <AnimatedSection className="py-16 bg-muted">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">AI-Driven Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real factories, real improvements. See how StitchOS transforms production lines with intelligent insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <KpiStat
                key={index}
                value={kpi.value}
                label={kpi.label}
                hint={kpi.hint}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <CTA
        title="Ready to Weave Intelligence Into Your Production?"
        body="Join forward-thinking manufacturers who are transforming their operations with AI-powered visibility and control."
        primaryCta={{ label: "Start Your Free Trial", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Demo", href: "/contact" }}
      />
    </div>
  );
}
