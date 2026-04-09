# Google reCAPTCHA v3 Implementation Guide

## Overview
Google reCAPTCHA v3 has been integrated into your Ardira website to protect your contact form from spam and bot abuse.

## How reCAPTCHA v3 Works
- **Silent Verification**: Works in the background without user interaction
- **Risk Analysis**: Returns a score from 0.0 to 1.0 indicating bot probability
- **Adaptive**: Score closer to 1.0 = legitimate human, closer to 0.0 = likely bot
- **Action-Based**: Tracks specific user actions for better risk assessment

## Implementation Details

### 1. **Frontend Components**
- **Hook**: `src/hooks/use-recaptcha.ts` - Manages reCAPTCHA token generation
- **Updated Contact Page**: `src/pages/Contact.tsx` - Integrated reCAPTCHA verification
- **HTML**: `index.html` - reCAPTCHA script loaded

### 2. **Backend/Serverless Function**
- **API Route**: `api/contact.ts` - Vercel serverless function
  - Receives form data with reCAPTCHA token
  - Verifies token with Google's API
  - Validates score (threshold: 0.5)
  - Returns success/failure response

### 3. **Utilities**
- **Verification Function**: `src/lib/recaptcha.ts` - Server-side token verification
- **Score Validation**: Checks if score meets acceptable threshold

## Configuration

### Site Credentials
```
Site Key: 6Ldcda4sAAAAAMAof1CCwVXkxNDYmuxF3CLuKvwM
Secret Key: 6Ldcda4sAAAAAPLoYwQxS7FblRmjhJjmaL-hx9Nl
```

### Score Threshold
Default threshold for accepting submissions: **0.5**
- Adjust in `api/contact.ts` if needed
- Lower = stricter (fewer bots but may reject legitimate users)
- Higher = lenient (more bots allowed through)

## Pages Protected

### Contact Form `/contact`
✅ Fully integrated with reCAPTCHA v3
- Form submission requires reCAPTCHA verification
- Displays error messages on verification failure
- Shows reCAPTCHA badge and privacy notice

### Other Pages
- **Home, Products, Team, Services, etc**: No forms, no reCAPTCHA needed
- **PartnerHub**: No forms, no reCAPTCHA needed
- **Documentation Pages**: No forms, no reCAPTCHA needed

## Adding reCAPTCHA to Additional Forms

If you add new forms in the future:

1. **Import the hook**:
   ```typescript
   import { useRecaptcha } from "@/hooks/use-recaptcha";
   ```

2. **Use in your component**:
   ```typescript
   const { executeRecaptcha } = useRecaptcha();
   ```

3. **Get token before form submission**:
   ```typescript
   const token = await executeRecaptcha("your_action_name");
   ```

4. **Send to your API with token**:
   ```typescript
   const response = await fetch("/api/your-endpoint", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ ...formData, recaptchaToken: token })
   });
   ```

## Server-Side Verification

When handling form submissions on your backend:

1. Extract the `recaptchaToken` from request body
2. Call Google's verification API
3. Check the success status and score
4. Process data only if verification passes

Example using the utility function:
```typescript
import { verifyRecaptchaToken, isRecaptchaScoreAcceptable } from "@/lib/recaptcha";

const result = await verifyRecaptchaToken(token, remoteIp);

if (result.success && isRecaptchaScoreAcceptable(result.score, 0.5)) {
  // Process form
} else {
  // Reject submission
}
```

## Next Steps: Email Integration

The contact form currently logs submissions but doesn't send emails. To enable email functionality:

### Option 1: SendGrid (Recommended for Vercel)
```bash
npm install @sendgrid/mail
```

### Option 2: Resend
```bash
npm install resend
```

### Option 3: Mailgun
```bash
npm install mailgun.js
```

## Testing

### Test High Score (Legitimate User)
- Submit form normally → Should accept (score ~0.9)

### Test Low Score (Bot-like behavior)
- Rapid submissions, unusual patterns → May reject (score ~0.1)

### Monitor Score
- Check `api/contact.ts` logs for score values
- Adjust threshold if needed

## Security Notes

⚠️ **Important**: 
- Never expose your Secret Key in frontend code
- Always verify reCAPTCHA token on the backend
- Never trust the frontend reCAPTCHA response
- Keep your Secret Key in environment variables

## Deployment

### Vercel Environment Variables
Add to your Vercel project settings:
```
RECAPTCHA_SECRET_KEY=6Ldcda4sAAAAAPLoYwQxS7FblRmjhJjmaL-hx9Nl
```

The Site Key can be in client code (it's public).

## Troubleshooting

### "reCAPTCHA not loaded"
- Check if script is loaded in `index.html`
- Verify Site Key is correct
- Check browser console for errors

### "Verification failed"
- Ensure Secret Key is correct
- Check network connectivity to Google API
- Verify token hasn't expired (tokens expire after 2 minutes)

### Getting too many rejections
- Lower the score threshold (currently 0.5)
- Check if legitimate users are being flagged
- Review reCAPTCHA analytics in Google admin console

## Resources

- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/v3)
- [Admin Console](https://www.google.com/recaptcha/admin)
- [reCAPTCHA Score Interpretation](https://developers.google.com/recaptcha/docs/v3#interpreting_the_score)
