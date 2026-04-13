/**
 * Hook to execute reCAPTCHA v3 and get token
 * Works with Google reCAPTCHA v3
 */

export const useRecaptcha = () => {
  const executeRecaptcha = async (action: string = "submit"): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Check if reCAPTCHA is loaded
      if (!window.grecaptcha) {
        console.error("reCAPTCHA not loaded. Make sure the script is included in HTML.");
        reject(new Error("reCAPTCHA script not loaded"));
        return;
      }

      try {
        window.grecaptcha.ready(() => {
          try {
            window.grecaptcha.execute(
              "6Ldcda4sAAAAAMAof1CCwVXkxNDYmuxF3CLuKvwM",
              { action }
            ).then((token: string) => {
              console.log("reCAPTCHA token generated successfully");
              resolve(token);
            }).catch((error: Error) => {
              console.error("reCAPTCHA execution error:", error);
              reject(error);
            });
          } catch (error) {
            console.error("reCAPTCHA ready callback error:", error);
            reject(error);
          }
        });
      } catch (error) {
        console.error("reCAPTCHA setup error:", error);
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
