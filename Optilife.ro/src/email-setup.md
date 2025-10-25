# Email Setup Instructions for OptiLife Contact Form

The contact form is now configured to use EmailJS for sending emails. To make it work, you need to:

## 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (e.g., "service_optilife")

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** OptiLife Contact Form

**Subject:** {{subject}}

**Body:**
```
Cerere nouă de programare OptiLife

Detalii contact:
- Nume: {{from_name}}
- Email: {{from_email}}
- Telefon: {{phone}}
- Compania: {{company}}
- Orașul: {{city}}
- Numărul de angajați: {{employees}}
- Data preferată: {{preferred_date}}

Mesaj:
{{message}}

---
Acest email a fost trimis prin formularul de contact de pe site-ul OptiLife.
```

4. Set the "To Email" to: office@optilife.ro
5. Save the template and note down the **Template ID** (e.g., "template_contact")

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it (it looks like: "user_xxxxxxxxxxxxxxxxx")

## 5. Update the Code
In `src/components/Contact.tsx`, replace these values on lines 35-39:
```javascript
'service_optilife', // Replace with your Service ID
'template_contact', // Replace with your Template ID  
'your_public_key_here' // Replace with your Public Key
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check if the email arrives at office@optilife.ro
4. Check your EmailJS dashboard for delivery status

## Alternative: Environment Variables (Recommended for Production)
For better security, you can store these values in environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use:
```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

## Troubleshooting
- Make sure your EmailJS service is active and connected
- Check that the template variables match exactly (case-sensitive)
- Verify the email service is properly connected to your email account
- Check browser console for any error messages
- EmailJS free plan allows 200 emails/month
- Test with a simple template first, then add complexity
- Make sure your domain is added to EmailJS allowed origins (for production)

## Quick Setup Checklist
- [ ] EmailJS account created
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Email template created with correct variables
- [ ] Service ID, Template ID, and Public Key copied
- [ ] Code updated with real credentials
- [ ] Form tested and email received