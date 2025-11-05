# Images Directory

This directory contains all website images optimized for web delivery.

## Required Images

### Hero & Homepage Images
- `hero-transformation.avif` / `.webp` / `.jpg` (800×600px) - Main hero image
- `og-image.jpg` (1200×630px) - Open Graph social media preview

### Program Pages
- `on-locatie-training.avif` / `.webp` / `.jpg` (800×600px) - On-Location program
- `add-on-program.avif` / `.webp` / `.jpg` (800×600px) - Add-On program

### Testimonials & Transformations
- `transformation-1-before.avif` / `.webp` / `.jpg` (300×400px)
- `transformation-1-after.avif` / `.webp` / `.jpg` (300×400px)
- `transformation-2-before.avif` / `.webp` / `.jpg` (300×400px)
- `transformation-2-after.avif` / `.webp` / `.jpg` (300×400px)
- `transformation-3-before.avif` / `.webp` / `.jpg` (300×400px)
- `transformation-3-after.avif` / `.webp` / `.jpg` (300×400px)
- `testimonial-thumb-1.jpg` (560×315px) - Video thumbnail
- `testimonial-thumb-2.jpg` (560×315px)
- `testimonial-thumb-3.jpg` (560×315px)

### Placeholder Images
- `placeholder-before.jpg` (300×400px) - Temporary before image
- `placeholder-after.jpg` (300×400px) - Temporary after image

## Image Optimization Guidelines

### Format Priority
1. **AVIF** - Best compression, 30-50% smaller than WebP
2. **WebP** - Wide browser support, 25-35% smaller than JPEG
3. **JPEG** - Fallback for older browsers

### Target File Sizes
- Hero images: < 200KB
- Testimonial images: < 100KB
- Thumbnails: < 50KB
- Icons: < 10KB

### Responsive Images
Generate multiple sizes for responsive delivery:
- Mobile: 320px, 640px (2x)
- Tablet: 768px, 1536px (2x)
- Desktop: 1024px, 2048px (2x)
- Large: 1440px, 2880px (2x)

## Image Optimization Tools

### Command Line Tools

**ImageMagick** - Resize and convert:
```bash
# Convert to WebP
convert input.jpg -quality 85 output.webp

# Convert to AVIF
convert input.jpg -quality 75 output.avif

# Resize
convert input.jpg -resize 800x600 output.jpg
```

**Squoosh CLI** - Modern image optimization:
```bash
npm install -g @squoosh/cli

# Convert and optimize
squoosh-cli --avif '{"quality":75}' --webp '{"quality":85}' --mozjpeg '{"quality":80}' image.jpg
```

### Online Tools
- [Squoosh](https://squoosh.app/) - Browser-based image optimization
- [TinyPNG](https://tinypng.com/) - JPEG/PNG compression
- [Cloudinary](https://cloudinary.com/) - Automated image optimization

## Photography Guidelines

### Style
- **Brutalist aesthetic**: Raw, authentic, documentary-style
- **Before/after**: Side-by-side or split view
- **Lighting**: Natural or dramatic lighting
- **Background**: Clean, minimal distractions
- **Color**: Desaturated or black/white acceptable

### Content Guidelines
- Real client transformations with consent
- Professional but authentic (avoid over-polished stock photos)
- Diverse representation of age, gender, body types
- Focus on results and emotion, not just aesthetics

### Technical Requirements
- **Resolution**: Minimum 72 DPI for web
- **Color Space**: sRGB (not Adobe RGB or ProPhoto)
- **Format**: Shoot RAW, export optimized JPEG/PNG
- **Aspect Ratios**:
  - Hero: 4:3 or 16:9
  - Portraits: 3:4
  - Square: 1:1

## Alternative Image Sources

If professional photography is not available:

1. **Stock Photos** (use sparingly, avoid generic gym photos):
   - [Unsplash](https://unsplash.com/) - Free high-quality images
   - [Pexels](https://pexels.com/) - Free stock photos
   - [Stocksy](https://stocksy.com/) - Premium authentic photos

2. **iPhone Photography** (iPhone 14 Pro or newer):
   - Use Portrait mode for depth
   - Natural lighting preferred
   - Use grid lines for composition
   - Edit in Lightroom Mobile for consistency

## Accessibility

All images must have descriptive alt text:
- Describe the content, not the styling
- Be concise but informative
- Include relevant context
- Decorative images: use empty alt attribute (`alt=""`)

Example:
```html
<!-- Good -->
<img src="transformation.jpg" alt="12-week transformation showing 15kg weight loss and muscle gain">

<!-- Bad -->
<img src="transformation.jpg" alt="before and after picture">

<!-- Decorative -->
<img src="divider.svg" alt="" role="presentation">
```
