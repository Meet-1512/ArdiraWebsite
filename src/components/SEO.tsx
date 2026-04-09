import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterCreator?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  keywords = "",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterCreator = "@ArdiraHQ",
  robots = "index, follow",
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        isProperty ? element.setAttribute("property", name) : element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);
    updateMetaTag("robots", robots);

    // Open Graph meta tags
    updateMetaTag("og:title", ogTitle || title, true);
    updateMetaTag("og:description", ogDescription || description, true);
    if (ogImage) updateMetaTag("og:image", ogImage, true);
    if (ogUrl) updateMetaTag("og:url", ogUrl, true);
    updateMetaTag("og:type", "website", true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:creator", twitterCreator);
    updateMetaTag("twitter:title", ogTitle || title);
    updateMetaTag("twitter:description", ogDescription || description);
    if (ogImage) updateMetaTag("twitter:image", ogImage);

    // Viewport and charset (already in HTML but ensure they exist)
    if (!document.querySelector('meta[charset]')) {
      const charsetMeta = document.createElement("meta");
      charsetMeta.setAttribute("charset", "UTF-8");
      document.head.insertBefore(charsetMeta, document.head.firstChild);
    }

    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      viewportMeta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(viewportMeta);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonical, twitterCard, twitterCreator, robots]);

  return null;
}
