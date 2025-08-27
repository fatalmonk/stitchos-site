import { motion } from "framer-motion";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative bg-gray-50">
      <div className="container px-6 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Brand Name */}
          <div className="mb-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-blue-600 mb-4">
              StitchOS
            </h1>
          </div>
          
          {/* Main Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Weaving Intelligence Into Every Thread
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-4xl mx-auto">
            Complete Manufacturing Execution system with AI-powered intelligence covering every aspect of manufacturing from Fabric to Final delivery with real-time monitoring and traceability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={primaryCta.href} 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              data-testid="hero-primary-cta"
            >
              {primaryCta.label}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            {secondaryCta && (
              <Link 
                href={secondaryCta.href} 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
                data-testid="hero-secondary-cta"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {secondaryCta.label}
              </Link>
            )}
          </div>
          
          {/* Trust Message */}
          <p className="text-gray-700 font-semibold mt-12 text-lg">
            Trusted by Leading Apparel Manufacturers
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Modern textile manufacturing facility" 
            className="rounded-xl shadow-2xl w-full h-auto opacity-95" 
          />
        </motion.div>
      </div>
    </section>
  );
}
