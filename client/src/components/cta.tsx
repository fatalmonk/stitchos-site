import { Link } from "wouter";

interface CTAProps {
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTA({ title, body, primaryCta, secondaryCta }: CTAProps) {
  return (
    <section className="bg-brand-gradient hero-pattern">
      <div className="container px-6 py-20 text-center text-white">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            data-testid="cta-primary"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              data-testid="cta-secondary"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
