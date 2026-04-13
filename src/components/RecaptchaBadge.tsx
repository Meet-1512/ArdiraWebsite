import { useEffect, useState } from "react";

export const RecaptchaBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait for reCAPTCHA to load
    const checkRecaptcha = () => {
      if (window.grecaptcha) {
        setIsVisible(true);
      } else {
        setTimeout(checkRecaptcha, 100);
      }
    };
    checkRecaptcha();
  }, []);

  return null; // Let Google's reCAPTCHA v3 script handle the badge display
};
