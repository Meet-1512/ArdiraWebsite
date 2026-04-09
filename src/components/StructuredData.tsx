import { useEffect } from "react";

interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "SoftwareApplication" | "WebPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data = {} }: StructuredDataProps) {
  useEffect(() => {
    // Organization Schema
    if (type === "Organization") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Ardira",
        url: "https://www.ardira.com",
        logo: "https://www.ardira.com/assets/ArdiraFooterLogo.webp",
        description: "Enterprise-grade Salesforce native applications and consulting services",
        sameAs: [
          "https://www.linkedin.com/company/ardira",
          "https://twitter.com/ArdiraHQ",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "contact@ardira.com",
          telephone: "+1-XXXXXXXXXX",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        knowsAbout: [
          "Salesforce Development",
          "Salesforce Consulting",
          "Enterprise Applications",
          "Relationship Mapping",
          "Survey Management",
          "Form Management",
        ],
        ...data,
      };
      addScriptTag(schema);
    }

    // Local Business Schema
    if (type === "LocalBusiness") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Ardira",
        url: "https://www.ardira.com",
        telephone: "+1-XXXXXXXXXX",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        ...data,
      };
      addScriptTag(schema);
    }

    // Software Application Schema
    if (type === "SoftwareApplication") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: data.name || "Ardira Enterprise Solutions",
        description: data.description || "Enterprise Salesforce applications",
        url: data.url || "https://www.ardira.com",
        applicationCategory: data.category || "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: data.price || "Contact for pricing",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: data.ratingValue || "4.8",
          ratingCount: data.ratingCount || "150",
        },
        ...data,
      };
      addScriptTag(schema);
    }

    // Web Page Schema
    if (type === "WebPage") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: data.name || "Ardira",
        url: data.url || "https://www.ardira.com",
        description: data.description || "Enterprise Salesforce solutions",
        mainEntity: {
          "@type": "Organization",
          name: "Ardira",
          url: "https://www.ardira.com",
        },
        ...data,
      };
      addScriptTag(schema);
    }

    // Breadcrumb Schema
    if (type === "BreadcrumbList") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.items || [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ardira.com",
          },
        ],
        ...data,
      };
      addScriptTag(schema);
    }
  }, [type, data]);

  const addScriptTag = (schema: Record<string, unknown>) => {
    // Remove existing structured data if present
    const existingScript = document.querySelector(
      `script[data-schema-type="${type}"]`
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Create and add new script tag
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema-type", type);
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything visible
}

// Helper function to generate FAQSchema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Helper function to generate Product Schema
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Ardira",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 0,
      },
    }),
  };
}
