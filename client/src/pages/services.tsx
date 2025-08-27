import { modules } from "@/content/modules";
import ModuleCard from "@/components/module-card";
import FeatureCard from "@/components/feature-card";
import AnimatedSection from "@/components/animated-section";
import CTA from "@/components/cta";
import { NetworkIcon, ShieldCheckIcon, BookOpenIcon, PackageIcon, ScissorsIcon, RulerIcon, BarChartIcon, FileTextIcon, SearchIcon, ActivityIcon, ClipboardCheckIcon, SettingsIcon, QrCodeIcon, TrendingUpIcon, ClockIcon, AlertTriangleIcon } from "lucide-react";

const moduleIcons = [
  NetworkIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  PackageIcon,
  ScissorsIcon,
  RulerIcon,
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl font-bold mb-6">Complete Production Intelligence</h1>
            <p className="text-xl text-muted-foreground">
              Six integrated modules that transform your manufacturing floor into a smart, connected ecosystem. 
              Each module is designed to work seamlessly together, providing comprehensive visibility and control 
              over every aspect of your textile production.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.slug}
                icon={moduleIcons[index]}
                title={module.title}
                blurb={module.blurb}
                bullets={module.bullets}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Production Capabilities */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Key Production Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tracking and monitoring features that give you complete visibility into your production operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BarChartIcon}
              title="Daily Production Report"
              description="Monitor real-time production progress and balance across all departments with precise order-level tracking."
              features={[
                "PO-Wise Order Progress Monitoring",
                "Cutting: Daily vs. Cumulative vs. Balance",
                "Loading & Stitching Progress vs. Balance",
                "In-Process Inspection (IR) Tracking"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={FileTextIcon}
              title="Smart Merchandising"
              description="Track end-to-end order execution from PO receipt to shipment with complete fabric, production, and loss accountability."
              features={[
                "PO-wise Order Progress & Milestone Tracking",
                "Fabric Reconciliation: Ordered vs. Received vs. Used vs. Waste",
                "Consumption Analysis (Planned vs. Actual)",
                "Cutting Stage Status & Rejection Summary"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={PackageIcon}
              title="Finishing Production & Quality"
              description="End-to-end visibility of finishing operations, capturing production output, defects, and quality metrics."
              features={[
                "Finished Quantity Tracking by PO & Style",
                "Inline & Endline Finishing Quality Monitoring",
                "Finishing Defect Categorization",
                "Total Defects, DHU %, Rejection % Calculation"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={SearchIcon}
              title="Inline / Midline / Final / PPM Inspection"
              description="Detailed defect tracking, inspection planning, and DHU analysis across all inspection stages—ensuring defect-free deliveries."
              features={[
                "Inspection Type-Wise Data",
                "Sample Size vs. Ready Quantity Monitoring",
                "Defect Classification: Critical / Major / Minor",
                "Garment Defect Mapping by Category & Type"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={ActivityIcon}
              title="Sewing Production & Quality"
              description="Live visibility into production, WIP tracking, and quality control, all traceable down to the operator level through QR-coded workflows."
              features={[
                "Real-Time Production Monitoring",
                "Sewing Line Loading & Daily Output Tracking",
                "Live Sew WIP Status",
                "Finish-to-Sew WIP Balancing & Monitoring"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={ScissorsIcon}
              title="Cutting & Spreading Audit"
              description="Real-time visibility and quality control in the cutting and spreading process through automated KPI tracking."
              features={[
                "Cut Quantity Accuracy",
                "Wastage Percentage Monitoring",
                "DHU (Defects per Hundred Units)",
                "Defect Category Analysis"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={ClipboardCheckIcon}
              title="Fabric 4-Point Inspection"
              description="Industry-standard 4-point system to ensure fabric rolls meet buyer quality expectations before cutting."
              features={[
                "Roll-wise Inspection & Traceability",
                "Width & GSM Deviation Check",
                "Penalty Points Calculation per 100 Sq. Yards",
                "Defect Type Categorization"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={SettingsIcon}
              title="Machine Maintenance & Breakdown"
              description="Track, prevent, and manage machine issues in real-time to reduce downtime and ensure smooth operations."
              features={[
                "Live breakdown request system with instant alert",
                "Logs breakdown by machine ID, type, location, and issue",
                "Tracks response and repair time for each request",
                "Schedules preventive maintenance with checklist-based PMS"
              ]}
              moreFeatures={4}
            />
            
            <FeatureCard
              icon={QrCodeIcon}
              title="Digital Product Passport (DPP) & QR Traceability"
              description="Ensure full lifecycle traceability of each garment from fabric roll to final packing, with unique Digital Product Passports."
              features={[
                "Individual and bundle QR code generation",
                "QR printing on taffeta labels",
                "QR-based tracking at every production stage",
                "End-to-end traceability from fabric roll to finished goods"
              ]}
              moreFeatures={4}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Quality Benefits */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Quality Benefits */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Quality Benefits</p>
              <h2 className="font-display text-4xl font-bold mb-6">
                Achieve Manufacturing <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our digital quality control system delivers measurable improvements in product quality, efficiency, and customer satisfaction.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUpIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">98.7% Quality Score Achievement</h3>
                    <p className="text-muted-foreground">Consistent high-quality output with our comprehensive inspection system</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">60% Faster Inspections</h3>
                    <p className="text-muted-foreground">Streamlined digital processes reduce inspection time while improving accuracy</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Reduced Manual Errors</h3>
                    <p className="text-muted-foreground">Automated quality checks eliminate human error and ensure consistency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Quality Dashboard */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-xl">Quality Dashboard</h3>
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Live Data
                </span>
              </div>

              {/* Overall Quality Score */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Overall Quality Score</span>
                  <span className="text-2xl font-bold text-primary">98.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '98.7%' }}></div>
                </div>
              </div>

              {/* Quality Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-muted-foreground text-sm mb-1">Inspections Today</div>
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-green-600 text-sm">+12%</div>
                </div>

                <div>
                  <div className="text-muted-foreground text-sm mb-1">Defect Rate</div>
                  <div className="text-2xl font-bold">0.8%</div>
                  <div className="text-green-600 text-sm">-0.3%</div>
                </div>

                <div>
                  <div className="text-muted-foreground text-sm mb-1">AQL Pass Rate</div>
                  <div className="text-2xl font-bold">99.2%</div>
                  <div className="text-green-600 text-sm">+0.5%</div>
                </div>

                <div>
                  <div className="text-muted-foreground text-sm mb-1">Avg Inspection Time</div>
                  <div className="text-2xl font-bold">2.3min</div>
                  <div className="text-green-600 text-sm">-1.2min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Why Choose StitchOS?</h2>
              <p className="text-xl text-muted-foreground">
                Built specifically for the textile industry with deep understanding of production workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Smarter Production</h3>
                  <p className="text-muted-foreground">
                    AI-powered analytics surface bottlenecks and opportunities, helping you optimize every aspect of your production line.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Real-time Visibility</h3>
                  <p className="text-muted-foreground">
                    Every bundle, every thread tracked from cut to pack. Know exactly where your inventory is and what stage it's at.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Predictive Quality</h3>
                  <p className="text-muted-foreground">
                    Catch defects early and reduce rework through intelligent QC processes that learn from your production patterns.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Global Compliance</h3>
                  <p className="text-muted-foreground">
                    EPCIS 2.0 + Digital Product Passports ensure export-readiness and meet the strictest international standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Affordable Scalability</h3>
                  <p className="text-muted-foreground">
                    Modular SaaS pricing and Sharia-compliant financing options make it accessible for manufacturers of all sizes.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3">AI-driven KPIs</h3>
                  <p className="text-muted-foreground">
                    Forecast efficiency %, predict rework rates, and identify downtime risks before they occur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Section */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-6">Seamless Integration</h2>
            <p className="text-xl text-muted-foreground mb-12">
              StitchOS integrates with your existing systems and scales with your business.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <NetworkIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">ERP Integration</h3>
                <p className="text-muted-foreground">
                  Connect with SAP, Oracle, or custom ERP systems for seamless data flow.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Brand Standards</h3>
                <p className="text-muted-foreground">
                  Pre-configured templates for major brands including Levi's, Adidas, and Nike.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpenIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">API Access</h3>
                <p className="text-muted-foreground">
                  Full REST API access for custom integrations and third-party applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <CTA
        title="Ready to Transform Your Production?"
        body="See how StitchOS can optimize your textile manufacturing operations with AI-powered intelligence and real-time visibility."
        primaryCta={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ label: "Schedule Demo", href: "/contact" }}
      />
    </div>
  );
}
