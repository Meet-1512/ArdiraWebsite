/**
 * Vercel Serverless Function - Handle Contact Form with reCAPTCHA v3
 * POST /api/contact
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

const SECRET_KEY = "6Ldcda4sAAAAAPLoYwQxS7FblRmjhJjmaL-hx9Nl";

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  recaptchaToken: string;
}

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}

async function verifyRecaptcha(token: string, remoteIp?: string): Promise<RecaptchaResponse> {
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: SECRET_KEY,
      response: token,
      ...(remoteIp && { remoteip: remoteIp }),
    }).toString(),
  });

  if (!response.ok) {
    throw new Error(`reCAPTCHA verification failed with status ${response.status}`);
  }

  return response.json();
}

async function sendEmail(data: ContactFormData): Promise<void> {
  // TODO: Implement email sending service
  // You can use services like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Resend
  // - etc.

  console.log("Email would be sent with:", data);

  // Example with basic logging for now
  // Replace this with your actual email service
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, email, company, interest, message, recaptchaToken } =
      req.body as ContactFormData;

    // Validate required fields
    if (!fullName || !email || !company || !interest || !message || !recaptchaToken) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Verify reCAPTCHA token
    const remoteIp = req.headers["x-forwarded-for"]?.toString() ||
      req.headers["x-real-ip"]?.toString();
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, remoteIp);

    if (!recaptchaResult.success) {
      return res.status(400).json({
        error: "reCAPTCHA verification failed",
        details: recaptchaResult.error_codes,
      });
    }

    // Check reCAPTCHA score (0.5 is a reasonable threshold)
    // Score closer to 1.0 = more likely human
    // Score closer to 0.0 = more likely bot
    if (recaptchaResult.score < 0.5) {
      return res.status(400).json({
        error: "Suspicious activity detected",
        score: recaptchaResult.score,
      });
    }

    // Process the form data
    const formData: ContactFormData = {
      fullName,
      email,
      company,
      interest,
      message,
      recaptchaToken, // Don't send token to email service
    };

    // Send email (implement your email service)
    await sendEmail(formData);

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      score: recaptchaResult.score,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
