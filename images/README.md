# Images Directory

This directory is for storing image assets for the Clean Madame LLC website.

## Recommended Images

### Homepage
- **hero-background.jpg** - Professional cleaning image for hero section (1920x1080px)
- **benefit-icons/** - Icon images for benefit cards (or use CSS/emoji as currently)

### Services Page
- **standard-cleaning.jpg** - Standard cleaning service (800x600px)
- **deep-cleaning.jpg** - Deep cleaning service (800x600px)
- **recurring-service.jpg** - Recurring cleaning illustration (800x600px)

### About/Team (if added)
- **team-photos/** - Professional headshots of team members

### Testimonials
- **customer-photos/** - Customer photos (with permission)

### General
- **logo.png** - Clean Madame LLC logo (multiple sizes for different uses)
- **favicon.ico** - Browser favicon (16x16, 32x32, 48x48)
- **og-image.jpg** - Open Graph image for social media sharing (1200x630px)

## Image Optimization Guidelines

1. **Compress all images** before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for large images, < 50KB for thumbnails

2. **Use appropriate formats**
   - JPG for photos
   - PNG for logos/icons with transparency
   - WebP for modern browsers (with JPG fallback)
   - SVG for simple graphics and icons

3. **Provide alt text** for accessibility
   - Describe the image content
   - Keep it concise but descriptive

4. **Use responsive images**
   - Provide multiple sizes for different screen resolutions
   - Use `srcset` and `sizes` attributes

## Example Image HTML

```html
<img src="images/hero-background.jpg"
     alt="Professional cleaner working in modern home"
     loading="lazy"
     width="1920"
     height="1080">
```

## Stock Photo Resources

If you need professional stock photos:
- Unsplash (free)
- Pexels (free)
- Pixabay (free)
- Shutterstock (paid)
- iStock (paid)

Search terms: "cleaning service", "professional cleaner", "home cleaning", "cleaning supplies"

## Current Status

The website currently uses emoji icons and CSS styling instead of image files to keep the initial setup lightweight and fast-loading. Images can be added as needed.
