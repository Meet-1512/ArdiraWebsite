export const RecaptchaBadge = () => {
  return (
    <div className="recaptcha-container">
      {/* Google reCAPTCHA badge will appear here automatically */}
      <p className="text-xs text-slate-400 text-center mt-4">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-500"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-500"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>
  );
};
