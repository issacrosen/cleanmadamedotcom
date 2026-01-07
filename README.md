# Clean Madame LLC - Website

Professional cleaning services website for Clean Madame LLC, serving the NYC tri-state area.

## Overview

This is a static website built for GitHub Pages that connects customers with professional cleaning providers. The site features:

- Modern, responsive design (mobile-first)
- SMS-compliant booking form (CTIA/TCPA compliant)
- Comprehensive privacy policy and terms & conditions
- Multiple booking methods (phone, text, web)
- Professional, conversion-optimized layout

## Technology Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern responsive design with CSS variables
- **JavaScript** - Form validation, mobile navigation, interactive components
- **GitHub Pages** - Static site hosting

## File Structure

```
cleanmadamedotcom/
├── index.html                    # Home/landing page
├── services.html                 # Services and pricing page
├── how-it-works.html            # Booking process explanation
├── contact.html                  # Contact form with SMS opt-in
├── privacy-policy.html          # Privacy policy with SMS disclosures
├── terms-and-conditions.html    # Customer terms and conditions
├── css/
│   └── style.css                # Main stylesheet
├── js/
│   └── main.js                  # JavaScript functionality
├── images/                       # Image assets (placeholder)
├── README.md                     # This file
└── CNAME                         # Custom domain configuration (optional)
```

## Local Development Setup

### Option 1: Python HTTP Server (Recommended)

Python 3:
```bash
cd cleanmadamedotcom
python3 -m http.server 8000
```

Python 2:
```bash
cd cleanmadamedotcom
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Option 2: Node.js HTTP Server

Install http-server globally:
```bash
npm install -g http-server
```

Run the server:
```bash
cd cleanmadamedotcom
http-server -p 8000
```

Then visit: `http://localhost:8000`

### Option 3: PHP Built-in Server

```bash
cd cleanmadamedotcom
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Option 4: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Testing Responsive Design

### Browser DevTools

1. Open Chrome/Firefox DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M / Cmd+Shift+M)
3. Test various device sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

### Real Device Testing

- Test on actual mobile devices for touch interactions
- Verify form inputs work properly on mobile keyboards
- Check that phone/SMS links work correctly
- Ensure navigation is easy to use on small screens

## Form Testing

The contact form includes client-side validation. To test:

1. Navigate to `/contact.html`
2. Try submitting without filling required fields
3. Test invalid email/phone formats
4. Verify SMS opt-in disclosure is visible
5. Check that success message appears after submission

**Note:** The form currently uses JavaScript for validation only. For production, you'll need to:
- Set up a backend endpoint to process form submissions
- Integrate with your booking system
- Configure email/SMS notifications
- Add CAPTCHA for spam protection (recommended)

## Deploying to GitHub Pages

### Step 1: Create GitHub Repository

```bash
cd cleanmadamedotcom
git init
git add .
git commit -m "Initial commit: Clean Madame LLC website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cleanmadame.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select branch: `main`
4. Select folder: `/ (root)`
5. Click **Save**

Your site will be published at: `https://YOUR_USERNAME.github.io/cleanmadame/`

### Step 3: Custom Domain (Optional)

If you want to use `cleanmadame.com` or a custom domain:

1. Update the `CNAME` file with your domain name
2. In GitHub Settings > Pages, add your custom domain
3. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

4. Wait for DNS propagation (can take up to 24-48 hours)
5. Enable "Enforce HTTPS" in GitHub Pages settings

## SMS Compliance Notes

This website is designed to support **10DLC SMS campaign registration** with full CTIA/TCPA compliance:

### Critical Compliance Features

1. **SMS Opt-In Disclosure** (contact.html):
   - Clear consent mechanism with checkbox
   - Full disclosure of message types, frequency, and charges
   - Opt-out instructions (STOP, HELP keywords)
   - Links to Privacy Policy and Terms & Conditions

2. **Privacy Policy** (privacy-policy.html):
   - SMS-specific privacy section
   - Clear statement: "Mobile information will not be shared with third parties"
   - Detailed opt-out instructions
   - Data usage and retention policies

3. **Terms & Conditions** (terms-and-conditions.html):
   - SMS terms section
   - Message frequency and charges disclosure
   - Help and support information

### Before Launching SMS Campaign

- [ ] Register your 10DLC campaign with carriers
- [ ] Verify all opt-in language meets current CTIA guidelines
- [ ] Set up SMS gateway integration
- [ ] Configure opt-out automation (STOP keyword handling)
- [ ] Implement double opt-in if required by your carrier
- [ ] Test all SMS workflows thoroughly

## Browser Compatibility

This website is tested and compatible with:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari iOS (latest 2 versions)
- Chrome for Android (latest 2 versions)

## Accessibility

The website follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for navigation
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast ratios
- Responsive text sizing

## Performance Optimization

Current optimizations:

- CSS variables for consistent theming
- Minimal JavaScript dependencies
- Efficient CSS selectors
- Mobile-first responsive design
- Semantic HTML for faster parsing

### Future Optimizations (Optional)

- Minify CSS and JavaScript
- Optimize and compress images
- Implement lazy loading for images
- Add service worker for offline support
- Use CDN for assets

## Security Considerations

For production deployment:

1. **Form Protection**
   - Add CAPTCHA (Google reCAPTCHA v3 recommended)
   - Implement rate limiting on backend
   - Validate and sanitize all inputs server-side
   - Use HTTPS only (enforced by GitHub Pages)

2. **Data Protection**
   - Never store sensitive data in frontend code
   - Use secure backend for payment processing
   - Implement proper session management
   - Follow PCI DSS compliance for payment data

3. **Privacy Compliance**
   - Ensure GDPR compliance if serving EU customers
   - Implement cookie consent if using tracking
   - Provide data deletion mechanisms
   - Keep privacy policy updated

## Maintenance

### Regular Updates

- Review and update Terms & Conditions annually
- Keep Privacy Policy current with regulations
- Test all forms and links quarterly
- Update copyright year annually
- Check for broken links monthly

### Content Updates

To update content, edit the relevant HTML files:

- **Pricing changes**: Update `index.html`, `services.html`, and `terms-and-conditions.html`
- **Service areas**: Update `index.html` and `services.html`
- **Contact information**: Update all pages (search for phone number and email)
- **Legal documents**: Update `privacy-policy.html` and `terms-and-conditions.html`

## Support and Contact

For questions or issues with this website:

- **Business Contact**: (845) 212-4444
- **Email**: info@cleanmadame.com

## License

Copyright © 2026 Clean Madame LLC. All rights reserved.

This website is proprietary and confidential. Unauthorized copying, distribution, or use of this website or any portion thereof is strictly prohibited.

## Version History

- **v1.0** (January 2026) - Initial website launch
  - Home, Services, How It Works, Contact pages
  - SMS-compliant booking form
  - Privacy Policy and Terms & Conditions
  - Mobile-responsive design
  - Form validation and interactive features

## Next Steps

1. **Set up backend integration**
   - Configure form submission endpoint
   - Set up email notifications
   - Integrate with booking system

2. **Configure SMS service**
   - Register 10DLC campaign
   - Set up SMS gateway (Twilio, Bandwidth, etc.)
   - Implement opt-in/opt-out automation

3. **Add analytics**
   - Set up Google Analytics or alternative
   - Track form submissions and conversions
   - Monitor user behavior and optimize

4. **Enhance features**
   - Add online payment processing
   - Implement booking calendar
   - Add customer account portal
   - Create admin dashboard

5. **Marketing**
   - Set up social media accounts
   - Create business profiles (Google, Yelp, etc.)
   - Implement SEO optimizations
   - Start email marketing campaign
