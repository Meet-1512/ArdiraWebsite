a# Google Tag Manager (GTM) Setup & Next Steps Guide

## Overview

Google Tag Manager (GTM) has been successfully installed on your Ardira website. GTM acts as a container that manages all your tracking tags (like Google Analytics 4) without requiring code changes on your website.

---

## ✅ What's Already Done

Your website now has:

- ✅ **GTM Container ID**: `GTM-KL38DRB6`
- ✅ **GTM Script** in the `<head>` section of index.html (highest priority)
- ✅ **GTM Noscript tag** in the `<body>` for browsers without JavaScript
- ✅ **GA4 initialization** already configured in your GTM container
- ✅ **No code duplication** - single implementation across all pages

---

## 📋 Next Steps to Maximize GTM

### Step 1: Verify GTM Installation

1. Deploy your website to Vercel or your hosting platform
2. Open your website in a browser
3. Right-click → Inspect → Console tab
4. Paste this code to check if GTM is loaded:
   ```javascript
   window.dataLayer;
   ```
5. You should see an array with GTM data if installation is successful

### Step 2: Install Google Tag Manager Browser Extension (Recommended)

1. Download **Tag Assistant** extension from Chrome Web Store
2. Open it on your website
3. It will show:
   - ✅ GTM container status
   - ✅ GA4 tags firing
   - ⚠️ Any configuration issues

### Step 3: Access Google Tag Manager Dashboard

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Sign in with your Google account
3. Select your **GTM-KL38DRB6** container
4. View:
   - **Tags** - All tracking codes (GA4, etc.)
   - **Triggers** - When tags fire (page views, clicks, form submissions)
   - **Variables** - Data being collected

### Step 4: Track Key Website Events

In the GTM dashboard, you can set up tracking for:

#### A. Page Views (Already Done)

- GA4 automatically tracks when users land on pages
- View in: GA4 → Reports → Realtime

#### B. Form Submissions

**PartnerHub Form Tracking:**

1. In GTM: Tags → Create new tag
2. Name: "Partner Form Submission"
3. Tag Type: GA4 Event
4. Measurement ID: (from your GTM container)
5. Event Name: `partner_form_submit`
6. Trigger: Form submission event
7. Publish

**Contact Form Tracking:**

1. Similar steps as above
2. Event Name: `contact_form_submit`

#### C. Button Clicks

Track important CTAs:

1. In GTM: Create new tag
2. Name: "Partner Signup Click"
3. Tag Type: GA4 Event
4. Event Name: `partner_signup_click`
5. Trigger: Click on element (CSS selector: `.partner-btn`)

#### D. Scroll Depth

Track how far users scroll:

1. Available in tags gallery
2. Set percentages: 25%, 50%, 75%, 100%

---

## 📊 Data Layer Structure

The dataLayer is where your website sends data to GTM. Example:

```javascript
dataLayer.push({
  event: "form_submit",
  form_name: "partner_signup",
  user_type: "prospect",
});
```

### Adding Custom Events (Optional)

#### In Contact.tsx Form Submission:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "contact_form_submit",
  form_type: "contact_us",
  submissionDate: new Date().toISOString(),
});
```

#### In PartnerHub.tsx Form Submission:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "partner_form_submit",
  form_type: "partner_interest",
  partnerType: formData.partnerType,
  submissionDate: new Date().toISOString(),
});
```

---

## 🔍 Viewing Analytics Data

### Real-Time Data

1. Go to [Google Analytics 4](https://analytics.google.com/)
2. Select your property
3. Reports → Realtime
4. See live visitor activity, page views, events

### Historical Data

1. Reports → Engagement
2. View user behavior, top pages, events
3. Reports → Conversions (if you set up conversion goals)

---

## 🎯 Setting Up Conversion Goals

Track important business outcomes:

### Goal 1: Partner Application Submission

1. GA4 → Admin → Conversions → New Conversion Event
2. Event name: `partner_form_submit`
3. Mark as conversion: ✓
4. This will track all partner form submissions

### Goal 2: Contact Form Submission

1. Create new conversion
2. Event name: `contact_form_submit`
3. Mark as conversion: ✓

---

## 🚀 Publishing Changes

Whenever you make changes in GTM:

1. **Draft changes** appear in GTM interface
2. **Preview mode** - Test changes before publishing
3. **Submit** - Send for approval (if needed)
4. **Publish** - Deploy to live website

### Publish Steps:

1. Click "Submit" button (top right)
2. Add change version name: "Added form tracking"
3. Click "Publish"
4. Confirm publication

---

## ⚙️ Important Settings to Review

### Triggers (When tags fire)

- **All Pages** - Fires on every page load (default for GA4)
- **Page View** - Custom page tracking
- **Form Submit** - When forms are submitted
- **Click** - When buttons/links are clicked

### Variables (Data collected)

- **Page URL** - Which page user is on
- **Page Title** - Name of the page
- **Referrer** - Where user came from
- **User ID** - If you have user identification

---

## 🛡️ Best Practices

### DO:

- ✅ Test changes in Preview mode before publishing
- ✅ Version your GTM container (set meaningful names)
- ✅ Document what each tag/trigger does
- ✅ Review analytics weekly
- ✅ Create specific event names (not generic)

### DO NOT:

- ❌ Don't hardcode tracking in every page (that's why you use GTM!)
- ❌ Don't track sensitive user data (passwords, SSNs)
- ❌ Don't create duplicate tags firing the same data
- ❌ Don't publish without testing

---

## 📞 Support Resources

- **GTM Documentation**: https://support.google.com/tagmanager
- **GA4 Help**: https://support.google.com/analytics
- **GTM YouTube Channel**: Google Analytics Academy
- **Tag Assistant Support**: Chrome Web Store reviews

---

## 📝 Common Issues & Solutions

| Issue               | Solution                                             |
| ------------------- | ---------------------------------------------------- |
| GTM not loading     | Check network tab in DevTools, verify container ID   |
| Events not firing   | Check triggers in GTM, verify datalayer.push() calls |
| GA4 showing no data | Wait 24-48 hours, events take time to appear         |
| Double tracking     | Remove old GA4 code if any exists                    |

---

## ✨ Quick Checklist

- [ ] GTM installed and verified working
- [ ] Tag Assistant extension installed
- [ ] Logged into GTM dashboard
- [ ] Reviewed current tags and triggers
- [ ] Set up form submission tracking
- [ ] Created conversion goals
- [ ] Reviewed GA4 real-time dashboard
- [ ] Tested form submissions produce events
- [ ] Published all changes to live container

---

**Container ID Reference:**

- GTM Container: `GTM-KL38DRB6`
- Website: Ardira (https://ardira-website.vercel.app)
- Stage: Production (Live tracking active)

Last Updated: April 9, 2026
