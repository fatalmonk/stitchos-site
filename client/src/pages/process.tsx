import { processSteps } from "@/content/process-steps";
import Timeline from "@/components/timeline";
import AnimatedSection from "@/components/animated-section";
import CTA from "@/components/cta";
import { ClipboardIcon, CameraIcon, TargetIcon, CheckCircleIcon } from "lucide-react";

export default function Process() {
  return (
    <div>
      {/* Header */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl font-bold mb-6">How StitchOS Works</h1>
            <p className="text-xl text-muted-foreground">
              Three AI-infused steps that transform raw production data into actionable intelligence. 
              Every step isn't just recorded — it's interpreted, so factories don't just see data — they act on it.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <Timeline items={processSteps} />
        </div>
      </AnimatedSection>

      {/* Quality Control Workflow */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">Quality Process</p>
            <h2 className="font-display text-4xl font-bold mb-4">
              End-to-End Quality <span className="text-primary">Control Workflow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our comprehensive quality control process from initial inspection to final approval.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1: Material Inspection */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <ClipboardIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  01
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Material Inspection</h3>
              <p className="text-muted-foreground mb-4">
                Digital inspection of incoming materials and fabrics with automated quality scoring.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">99.5% accuracy</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">50% faster</span>
              </div>
            </div>

            {/* Step 2: Production Monitoring */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CameraIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  02
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Production Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Real-time tracking and inspection during cutting, sewing, and assembly processes.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Real-time alerts</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">24/7 monitoring</span>
              </div>
            </div>

            {/* Step 3: Quality Assessment */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <TargetIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  03
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Quality Assessment</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive AQL inspections with detailed defect analysis and classification.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">AQL compliant</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Detailed reports</span>
              </div>
            </div>

            {/* Step 4: Final Approval */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  04
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Final Approval</h3>
              <p className="text-muted-foreground mb-4">
                Complete quality validation and approval process with digital certification.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Digital certificates</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Audit trails</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Hybrid RFID+QR */}
      <AnimatedSection className="py-20 bg-muted">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Why Hybrid RFID + QR?</h2>
              <p className="text-xl text-muted-foreground">
                The best of both worlds: QR codes for flexibility, RFID for automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card p-8 rounded-xl border">
                <h3 className="font-display text-2xl font-semibold mb-6">QR Code Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Low Cost:</strong> No special hardware required, works with any smartphone
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Visual Verification:</strong> Operators can see and verify the code before scanning
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Flexible Placement:</strong> Can be printed on labels, tags, or directly on fabric
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Backup Option:</strong> Always works as a fallback if RFID fails
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border">
                <h3 className="font-display text-2xl font-semibold mb-6">RFID Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Hands-Free:</strong> No line-of-sight required, read multiple tags simultaneously
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>High Speed:</strong> Process entire bundles in seconds as they pass through portals
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Durability:</strong> Works through dirt, moisture, and fabric layers
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Automation:</strong> Enables fully automated tracking with minimal human intervention
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-brand-gradient text-white p-8 rounded-xl">
                <h3 className="font-display text-2xl font-semibold mb-4">The StitchOS Approach</h3>
                <p className="text-lg text-white/90">
                  Start with QR codes for immediate value, then upgrade to RFID portals for high-volume lines. 
                  Our hybrid system ensures you get the best ROI at every stage of your automation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Technical Architecture */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Technical Architecture</h2>
              <p className="text-xl text-muted-foreground">
                Enterprise-grade infrastructure built for textile manufacturing.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <div className="font-mono text-sm space-y-2 text-muted-foreground">
                <div>┌─── Edge Capture Layer ───┐</div>
                <div>│  RFID Portals + Handhelds  │</div>
                <div>│  QR Scanners + Mobile Apps │</div>
                <div>│  IoT Sensors + Machine Data│</div>
                <div>└─────────────┬─────────────┘</div>
                <div className="text-center">│</div>
                <div>┌─── Processing Layer ───┐</div>
                <div>│  AI Validation Engine    │</div>
                <div>│  EPCIS 2.0 Event Store   │</div>
                <div>│  Real-time Analytics      │</div>
                <div>└─────────────┬─────────────┘</div>
                <div className="text-center">│</div>
                <div>┌─── Application Layer ──┐</div>
                <div>│  Production Dashboards   │</div>
                <div>│  Quality Control UI      │</div>
                <div>│  Mobile Operator Apps    │</div>
                <div>└─────────────┬─────────────┘</div>
                <div className="text-center">│</div>
                <div>┌─── Integration Layer ──┐</div>
                <div>│  ERP Connectors         │</div>
                <div>│  Brand Portal APIs      │</div>
                <div>│  Export/Compliance APIs │</div>
                <div>└─────────────────────────┘</div>
              </div>
            </div>

            <div className="mt-8 text-center text-muted-foreground">
              <p>
                Built on cloud-native architecture with on-premise deployment options. 
                Designed for 99.9% uptime with automatic failover and data redundancy.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <CTA
        title="See StitchOS in Action"
        body="Experience how our three-step process transforms your production data into actionable intelligence."
        primaryCta={{ label: "Schedule Demo", href: "/contact" }}
        secondaryCta={{ label: "Start Free Trial", href: "/contact" }}
      />
    </div>
  );
}
