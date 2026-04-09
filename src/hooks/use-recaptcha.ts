/**
 * Hook to execute reCAPTCHA v3 and get token
 * Works with Google reCAPTCHA v3
 */

export const useRecaptcha = () => {
  const executeRecaptcha = async (action: string = "submit"): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Check if reCAPTCHA is loaded
      if (!window.grecaptcha) {
        reject(new Error("reCAPTCHA script not loaded"));
        return;
      }

      try {
        window.grecaptcha.ready(async () => {
          const token = await window.grecaptcha.execute(
            "6Ldcda4sAAAAAMAof1CCwVXkxNDYmuxF3CLuKvwM",
            { action }
          );
          resolve(token);
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  return { executeRecaptcha };
};

// Extend window object to include grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
