interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
}

export function generateSEOTags(data: SEOData) {
  const title = data.title ? `${data.title} | StitchOS` : 'StitchOS - Weaving Intelligence Into Every Thread';
  const description = data.description || 'AI-driven RFID, QR & IoT tracking for the textile industry. Transform every line of production into a stream of intelligence.';
  
  return {
    title,
    description,
    keywords: data.keywords?.join(', ') || 'textile tracking, RFID, QR codes, AI analytics, production intelligence, garment manufacturing',
    ogTitle: title,
    ogDescription: description,
    ogImage: data.ogImage || '/images/og-default.jpg',
    ogType: data.ogType || 'website',
  };
}

export const defaultSEO = generateSEOTags({
  title: '',
  description: 'Transform every line of production into a stream of intelligence. StitchOS unites RFID, QR, and IoT into one AI-powered platform — delivering real-time visibility, smarter decisions, and compliance built for global brands.',
});

export const pageSEO = {
  home: generateSEOTags({
    title: 'Home',
    description: 'Transform every line of production into a stream of intelligence. StitchOS unites RFID, QR, and IoT into one AI-powered platform for textile manufacturing.',
    keywords: ['textile tracking', 'AI production', 'RFID tracking', 'QR codes', 'manufacturing intelligence']
  }),
  
  services: generateSEOTags({
    title: 'Services',
    description: 'Complete production intelligence with six integrated modules: Trace, Control, Ledger, Pack, Fabric, and Measure. Transform your manufacturing floor into a smart, connected ecosystem.',
    keywords: ['production modules', 'textile services', 'manufacturing solutions', 'quality control', 'EPCIS compliance']
  }),
  
  process: generateSEOTags({
    title: 'Process',
    description: 'Learn how StitchOS transforms raw production data into actionable intelligence through three AI-infused steps: Tag & Encode, Track & Verify, and Analyze & Improve.',
    keywords: ['production process', 'AI workflow', 'textile automation', 'manufacturing intelligence', 'RFID QR hybrid']
  }),
  
  caseStudies: generateSEOTags({
    title: 'Case Studies',
    description: 'Real results from textile manufacturers who transformed their operations with StitchOS. See measurable improvements in efficiency, quality, and compliance.',
    keywords: ['success stories', 'textile case studies', 'manufacturing results', 'ROI textile', 'production improvements']
  }),
  
  pricing: generateSEOTags({
    title: 'Pricing',
    description: 'Simple, transparent pricing for StitchOS textile intelligence platform. Starter, Pro, and Enterprise plans with Sharia-compliant financing options.',
    keywords: ['textile software pricing', 'manufacturing costs', 'RFID pricing', 'production intelligence cost', 'textile ROI']
  }),
  
  contact: generateSEOTags({
    title: 'Contact',
    description: 'Get started with StitchOS today. Contact our textile intelligence experts to discuss how we can transform your production operations.',
    keywords: ['contact textile experts', 'manufacturing consultation', 'production intelligence demo', 'StitchOS support']
  })
};
