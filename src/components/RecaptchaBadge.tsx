import { useEffect } from "react";

export const RecaptchaBadge = () => {
  useEffect(() => {
    // Wait for reCAPTCHA to load - ensures script is ready
    const checkRecaptcha = () => {
      if (window.grecaptcha) {
        return;
      }
      setTimeout(checkRecaptcha, 100);
    };
    checkRecaptcha();
  }, []);

  return null; // Let Google's reCAPTCHA v3 script handle the badge display
};
