/**
 * Schema.org JSON-LD Generators
 * 
 * Usage in any page:
 *   import { breadcrumbSchema, faqSchema } from '../lib/schema';
 *   <BaseLayout schema={[breadcrumbSchema([...]), faqSchema(myFaqs)]} ...>
 */

export const SITE_URL = 'https://wegofulfill.com';

/** Organization / LocalBusiness — used globally */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "WegoFulfill",
    "alternateName": "Wego Fulfill",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/wegofulfill-logo.png`,
    "description": "China-based dropshipping agent and 3PL fulfillment partner. Product sourcing, quality control, warehousing, and global shipping from Shenzhen, China.",
    "email": "support@wegofulfill.com",
    "telephone": "+86-199-2524-7178",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shenzhen",
      "addressRegion": "Guangdong",
      "addressCountry": "CN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 22.65, "longitude": 114.02 },
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-199-2524-7178",
      "contactType": "customer service",
      "availableLanguage": ["English", "Chinese"],
      "areaServed": "Worldwide"
    }
  };
}

/** BreadcrumbList — auto-generated from page path */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.url}`
    }))
  };
}

/** WebPage — base schema for any page */
export function webPageSchema(title: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `${SITE_URL}${path}`,
    "isPartOf": { "@type": "WebSite", "name": "WegoFulfill", "url": SITE_URL }
  };
}

/** AboutPage — for /about/ */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": `${SITE_URL}/about/`,
    "mainEntity": {
      "@type": "Organization",
      "name": "WegoFulfill",
      "founder": { "@type": "Person", "name": "Five" },
      "foundingLocation": "Shenzhen, China",
      "description": "China sourcing and fulfillment partner founded by Five, based in Shenzhen."
    }
  };
}

/** ContactPage — for /contact/ */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": `${SITE_URL}/contact/`,
    "mainEntity": {
      "@type": "Organization",
      "name": "WegoFulfill",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-199-2524-7178",
        "email": "support@wegofulfill.com",
        "contactType": "customer service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Chinese"]
      }
    }
  };
}

/** FAQPage — pass array of {question, answer} */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };
}

/** Article — for blog posts, guides, case studies */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": opts.title,
    "description": opts.description,
    "url": `${SITE_URL}${opts.path}`,
    "image": opts.image || `${SITE_URL}/images/og-default.jpg`,
    "author": { "@type": "Person", "name": opts.author || "WegoFulfill Team" },
    "publisher": {
      "@type": "Organization",
      "name": "WegoFulfill",
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/wegofulfill-logo.png` }
    },
    "datePublished": opts.datePublished || "2025-12-01",
    "dateModified": opts.dateModified || new Date().toISOString().split('T')[0]
  };
}

/** Service — for service detail pages */
export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${SITE_URL}${path}`,
    "provider": {
      "@type": "Organization",
      "name": "WegoFulfill",
      "url": SITE_URL
    },
    "areaServed": "Worldwide"
  };
}

/** HowTo — for guide pages */
export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": opts.name,
    "description": opts.description,
    "step": opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text
    }))
  };
}