export const RecaptchaBadge = () => {
  return (
    <p className="text-xs text-slate-400 text-center mt-3">
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
  );
};
