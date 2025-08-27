import { Link } from "wouter";
import { NetworkIcon } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/process" },
      { label: "Pricing", href: "/pricing" },
      { label: "API Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <NetworkIcon className="h-6 w-6 text-gradient" />
              <span className="font-display font-bold text-xl">StitchOS</span>
            </div>
            <p className="text-background/80 mb-4">
              Weaving Intelligence Into Every Thread. AI-driven RFID, QR & IoT tracking for the textile industry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-background/60 hover:text-background transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.icon}`}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-background/80 hover:text-background transition-colors text-sm"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-background/80 hover:text-background transition-colors text-sm"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 StitchOS. All rights reserved. Made in Bangladesh with ❤️
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-background/60 text-sm">Powered by AI</span>
            <span className="text-background/60 text-sm">•</span>
            <span className="text-background/60 text-sm">EPCIS 2.0 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
