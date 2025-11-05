# RE.WIRE Website

Complete StoryBrand-based website implementation for RE.WIRE fitness coaching in Amsterdam.

## 🎯 Project Overview

This website implements a comprehensive StoryBrand framework for RE.WIRE, a fitness coaching business targeting demanding professionals in Amsterdam. The site features a brutalist design aesthetic with evidence-based messaging and Dutch market optimization.

## 🏗️ Architecture

### Technology Stack

- **HTML5**: Semantic markup with ARIA accessibility
- **CSS3**: Modern CSS with custom properties and responsive design
- **JavaScript**: Vanilla JS for enhanced interactivity
- **Performance**: Optimized for Core Web Vitals compliance

### Design System

#### Brand Colors
```css
--color-bridge-orange: #F64800  /* Primary CTA color */
--color-eerie-black: #252525    /* Primary dark color */
--color-white: #FFFFFF          /* Primary light color */
--color-silver: #DCE0DF         /* Secondary light */
--color-battleship-gray: #959595 /* Secondary dark */
```

#### Typography
- **Display**: Sharp Grotesk Bold (horizontally compressed for brutalist effect)
- **Body**: Akkurat Pro (Regular and Bold weights)
- **Mobile**: scaleX(0.7)
- **Tablet**: scaleX(0.6)
- **Desktop**: scaleX(0.5)

#### Spacing
6px modular scale (6, 12, 18, 24, 30, 36, 48, 60, 72, 96, 120px)

## 📄 Site Structure

### Core Pages

1. **Homepage** (`index.html`)
   - Hero with StoryBrand headline
   - Problem/Solution framework
   - 3-step process plan
   - 6 pillars value proposition
   - Social proof testimonials
   - Pricing preview
   - Multiple CTAs

2. **On-Locatie Program** (`on-locatie.html`)
   - €1,799 program details
   - Comprehensive inclusions
   - 6 pillars breakdown
   - 12-week timeline
   - Results/testimonials
   - FAQ section

3. **Contact Page** (`contact.html`)
   - Multi-step contact form
   - Location information
   - Google Maps integration
   - Operating hours
   - Multiple contact methods

### Required Pages (To Be Created)

4. **Add-On Program** (`add-on.html`)
   - €999 add-on program
   - Similar structure to on-locatie

5. **Pricing** (`tarieven.html`)
   - Side-by-side comparison
   - Payment options
   - FAQ section
   - Value justification

6. **Testimonials** (`succesverhalen.html`)
   - Filterable case studies
   - Video testimonials
   - Before/after transformations
   - Specific metrics

7. **About** (`over-ons.html`)
   - Guide positioning (not resume)
   - Team bios
   - Empathy + authority
   - Company story

8. **Knowledge Base** (`kennisbank/index.html`)
   - 6 pillar pages
   - Blog article listing
   - Search functionality

9. **Booking** (`plan-afspraak.html`)
   - Acuity Scheduling integration
   - Multi-step form
   - Program selection
   - Payment integration

10. **Lead Magnet** (`free-guide.html`)
    - Minimal form (name + email)
    - Benefit-focused headline
    - Instant delivery

11. **Thank You** (`bedankt.html`)
    - Confirmation message
    - Next steps
    - Secondary CTA

12. **Legal Pages**
    - Privacy Policy (`privacybeleid.html`)
    - Cookie Policy (`cookiebeleid.html`)
    - Terms & Conditions (`algemene-voorwaarden.html`)

## 🎨 Design Principles

### Brutalist Aesthetic
- Horizontal compression of display typography
- Bold, asymmetrical layouts
- High contrast color usage
- 6×6 modular grid system
- Raw, authentic photography
- Minimal decoration

### StoryBrand Framework
Every page follows the framework:
1. **Character (Hero)**: The demanding professional
2. **Has a Problem**: Inconsistent fitness results
3. **Meets a Guide**: RE.WIRE (empathy + authority)
4. **Who Gives Them a Plan**: 3-step process
5. **Calls Them to Action**: "Start Your Transformation"
6. **That Helps Them Avoid Failure**: Frustration and defeat
7. **And Ends in Success**: Complete transformation in 12 weeks

## 🚀 Performance Optimization

### Core Web Vitals Targets
- **LCP**: < 2.5 seconds
- **INP**: < 200 milliseconds
- **CLS**: < 0.1

### Font Optimization
```html
<!-- Preload critical fonts -->
<link rel="preload" as="font" type="font/woff2" href="/fonts/sharp-grotesk-bold.woff2" crossorigin>
```

- WOFF2 format only
- Font subsetting (60-80% reduction)
- `font-display: swap`
- Only Regular and Bold weights

### Image Optimization
```html
<picture>
    <source type="image/avif" srcset="/image.avif">
    <source type="image/webp" srcset="/image.webp">
    <img src="/image.jpg" alt="Description" width="800" height="600" loading="lazy">
</picture>
```

- AVIF → WebP → JPEG fallback
- Target < 200KB per image
- Explicit width/height attributes
- Lazy loading (except hero images)

## ♿ Accessibility (WCAG 2.1 AA)

### Semantic HTML
- Proper heading hierarchy
- ARIA landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Skip navigation link
- Descriptive link text

### Color Contrast
- All text meets 4.5:1 minimum ratio
- Large text meets 3:1 ratio
- Tested with WebAIM Contrast Checker

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators (2px outline)
- Logical tab order
- No keyboard traps

### Forms
- Clear labels for all inputs
- Descriptive error messages
- Required fields indicated
- Error states with `role="alert"`

## 📱 Responsive Design

### Breakpoints
```css
--breakpoint-mobile: 320px
--breakpoint-tablet: 768px
--breakpoint-desktop: 1024px
--breakpoint-large: 1440px
```

### Mobile-First Approach
- 68% of traffic is mobile
- Touch targets minimum 44×44px
- Single column layouts on mobile
- Hamburger navigation
- Simplified forms

## 🔌 Integrations Required

### Payment Processing - Mollie
- **Setup**: Dutch merchant account (2-3 day KVK verification)
- **Methods**: iDEAL (priority), cards
- **Fees**: €0.29 per iDEAL, 1.8% + €0.19 for cards
- **Integration**: Add Mollie JavaScript SDK to booking page

```html
<script src="https://js.mollie.com/v1/mollie.js"></script>
```

### Booking System - Acuity Scheduling
- **Plan**: Growing ($34/month)
- **Integration**: Embed iframe or use JavaScript SDK

```html
<script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
```

### Email Marketing - ConvertKit
- **Plan**: Creator ($29/month, up to 1,000 subscribers)
- **Forms**: Embed sign-up forms throughout site
- **Sequences**: Welcome series (5-7 emails over 10 days)

```html
<script src="https://f.convertkit.com/YOUR-FORM-ID/scripts.js" data-uid="YOUR-UID" async></script>
```

### CRM - HubSpot Free
- **Setup**: Install tracking code
- **Features**: Contact management, deal pipeline, email templates

```html
<!-- HubSpot Tracking Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR-HUB-ID.js"></script>
```

### Automation - Make.com
- **Plan**: Core ($11/month)
- **Workflows**:
  1. New booking → Welcome email + CRM update
  2. Payment confirmation → Receipt + portal access
  3. Form submission → Email list + auto-responder

### GDPR Compliance - Cookiebot
- **Plan**: Lite (€7/month)
- **Languages**: Dutch (required)
- **Integration**: Add consent script to all pages

```html
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="YOUR-CBID" data-blockingmode="auto" type="text/javascript"></script>
```

### Analytics - Google Analytics 4
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🇳🇱 Dutch Market Optimization

### Language
- Professional native Dutch content (NOT machine translation)
- Informal "jij/je" address form
- Direct, straightforward tone
- Evidence-based claims

### SEO Keywords (Dutch)
- personal trainer Amsterdam
- fitness coaching Nederland
- afvallen met begeleiding
- personal trainer voor drukke professionals
- holistische gezondheidscoaching

### Local SEO
- Google Business Profile optimization
- Location: Hoogoorddreef 3, 1101 BA Amsterdam
- Target 75%+ profile completion
- Weekly photo uploads
- 2-3 posts per week
- Respond to all reviews in Dutch within 24-48 hours

### Cultural Considerations
- "Doe maar gewoon, dan doe je al gek genoeg" philosophy
- Transparency over flashy marketing
- Modest confidence vs. aggressive self-promotion
- Sustainable results emphasis

## 📊 Success Metrics & KPIs

### Conversion Goals
- **Landing Page**: 5%+ conversion to qualified leads
- **Email List**: 50%+ discovery call booking rate
- **Discovery Calls**: 30-50% close rate at €1,799

### SEO Goals (6-12 months)
- Top 10 Google.nl rankings for priority keywords
- 500-1,000 monthly organic visitors

### Revenue Goals
- 10-20 new client enrollments monthly
- €18,000-36,000 monthly revenue
- 300-500% ROI

## 🛠️ Development Setup

### Prerequisites
- Modern web browser
- Text editor / IDE
- Local web server (optional: Python `python -m http.server`, Node.js `npx serve`, etc.)

### Getting Started

1. **Clone or download the repository**

2. **Font Files Required** (not included)
   - Place Sharp Grotesk Bold WOFF2 in `/fonts/sharp-grotesk-bold.woff2`
   - Place Akkurat Pro Regular WOFF2 in `/fonts/akkurat-pro-regular.woff2`
   - Place Akkurat Pro Bold WOFF2 in `/fonts/akkurat-pro-bold.woff2`

3. **Run local server**
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Node.js
   npx serve

   # PHP
   php -S localhost:8000
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

### File Structure
```
rewire/
├── index.html              # Homepage
├── on-locatie.html         # On-Location program
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript
├── fonts/                  # Font files (WOFF2)
│   ├── sharp-grotesk-bold.woff2
│   ├── akkurat-pro-regular.woff2
│   └── akkurat-pro-bold.woff2
├── images/                 # Images (AVIF, WebP, JPG)
│   ├── hero-transformation.avif
│   ├── hero-transformation.webp
│   ├── hero-transformation.jpg
│   └── ...
├── videos/                 # Video testimonials
│   └── testimonial-1.mp4
└── README.md              # This file
```

## 🧪 Testing Checklist

### Performance
- [ ] GTmetrix test from Amsterdam location (target 90+ desktop, 80+ mobile)
- [ ] Chrome DevTools Lighthouse audit
- [ ] Core Web Vitals within acceptable range
- [ ] Font loading optimized
- [ ] Images compressed and lazy loaded

### Accessibility
- [ ] WAVE or axe DevTools audit (no WCAG 2.1 AA violations)
- [ ] Keyboard navigation works throughout
- [ ] Screen reader tested (NVDA on Windows, VoiceOver on Mac)
- [ ] Color contrast validated
- [ ] Zoom to 200% works properly

### Cross-Browser
- [ ] Chrome (65% market share)
- [ ] Safari (20%)
- [ ] Edge (5%)
- [ ] Firefox (3%)

### Mobile Testing
- [ ] iPhone (current and previous generation)
- [ ] Mid-range Android devices
- [ ] Touch targets 44×44px minimum
- [ ] Forms easy to use on mobile

### Functionality
- [ ] All internal links work
- [ ] Forms submit successfully
- [ ] Mobile navigation works
- [ ] Videos play
- [ ] CTAs link correctly

## 🚢 Deployment Options

### Option 1: Netlify (Recommended)
```bash
# Deploy to Netlify
netlify deploy --prod
```

Benefits:
- Free SSL certificate
- Automatic HTTPS
- Form handling built-in
- Continuous deployment from Git
- Edge network (CDN)

### Option 2: Vercel
```bash
# Deploy to Vercel
vercel --prod
```

### Option 3: Traditional Hosting
- Upload files via FTP/SFTP
- Ensure .htaccess for clean URLs (Apache)
- Configure Nginx for clean URLs (Nginx)

### Domain Configuration
- Point `rewireproject.nl` A record to hosting
- Configure `www` subdomain
- Enable SSL certificate
- Test HTTPS redirect

## 📝 Content Guidelines

### Writing Tone
- Direct and authentic (Dutch cultural preference)
- Evidence-based and transparent
- Confident without arrogance
- Customer-focused, not company-focused

### CTA Best Practices
✅ **Good**:
- "Start Your Transformation"
- "Get My Free Assessment"
- "Download My Free Guide"

❌ **Bad**:
- "Submit"
- "Learn More"
- "Click Here"

### Headlines
- Pass "grunt test" within 5 seconds
- Clear benefit statement
- Specific, not vague
- Customer-centric

## 💰 Budget Summary

### First-Year Investment: €3,200-4,500

**Platform & Tools (€1,730 annually)**:
- Domain registration: €15
- Sharp Grotesk license: €200 (one-time)
- Acuity Scheduling: €408 ($34 × 12)
- ConvertKit: €348 ($29 × 12)
- HubSpot CRM: €0 (free)
- Make.com: €132 ($11 × 12)
- Cookiebot: €84 (€7 × 12)
- Google Workspace: €75 ($6 × 12)
- Hosting (Netlify/Vercel): €0 (free tier sufficient)

**Variable Costs**:
- Payment processing: €50-150/month (transaction-based)

**Content Creation (€1,500-3,000)**:
- Professional Dutch copywriter
- All pages + blog content

### Year 2+ Ongoing: €1,400-2,000 annually

## 🔄 Post-Launch Roadmap

### Month 1
- [ ] Publish remaining Kennisbank content (2-3 articles/week)
- [ ] A/B test headline variations
- [ ] Collect video testimonials
- [ ] Monitor Google Business Profile
- [ ] Respond to all reviews

### Months 2-3
- [ ] Implement multi-step application form
- [ ] A/B test CTA button copy
- [ ] Add more before/after transformations
- [ ] Refine email nurture sequences
- [ ] Build local links

### Months 4-12
- [ ] Maintain 1-2 Kennisbank articles/week
- [ ] Update pillar pages quarterly
- [ ] Run conversion audits quarterly
- [ ] Monitor Core Web Vitals monthly
- [ ] Refresh testimonials quarterly

## 📞 Support & Maintenance

### Regular Maintenance Tasks
- Weekly: Review analytics, respond to form submissions
- Monthly: Update blog content, check performance metrics
- Quarterly: Update testimonials, refresh content, security updates
- Annually: Review and update legal pages, renew domains/certificates

### Troubleshooting

**Forms not submitting:**
- Check network console for errors
- Verify form action URL
- Test without ad blockers

**Performance issues:**
- Run Lighthouse audit
- Check image sizes
- Verify font loading
- Test on slow 3G connection

**Mobile layout issues:**
- Test on real devices
- Check viewport meta tag
- Verify touch target sizes
- Test with Chrome DevTools device emulation

## 📚 Additional Resources

- [StoryBrand Framework](https://storybrand.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [GTmetrix Performance Testing](https://gtmetrix.com/)
- [WAVE Accessibility Checker](https://wave.webaim.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 📄 License

© 2025 RE.WIRE. All rights reserved.

---

**Built with ❤️ for RE.WIRE - Transforming professionals in Amsterdam**
