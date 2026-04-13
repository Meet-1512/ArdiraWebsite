import { useEffect, useRef } from "react";

export const RecaptchaBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create observer to monitor reCAPTCHA badge when it's added to DOM
    const observer = new MutationObserver(() => {
      const badge = document.querySelector(".grecaptcha-badge");
      if (badge) {
        // Hide all text content
        const textNodes = badge.childNodes;
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = "";
          }
        });

        // Collapse the badge to icon-only size
        (badge as HTMLElement).style.width = "50px";
        (badge as HTMLElement).style.height = "50px";
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={badgeRef}
      className="group fixed bottom-5 right-5 z-50 cursor-help"
      title="Protected by reCAPTCHA"
    >
      {/* Tooltip that shows on hover */}
      <div className="absolute bottom-full right-0 mb-2 bg-blue-600 text-white px-3 py-2 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        protected by reCAPTCHA
      </div>
    </div>
  );
};
