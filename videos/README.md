# Videos Directory

This directory contains video testimonials and promotional content.

## Required Videos

### Testimonial Videos
- `testimonial-1.mp4` - Client success story #1 (1-2 minutes)
- `testimonial-2.mp4` - Client success story #2 (1-2 minutes)
- `testimonial-3.mp4` - Client success story #3 (1-2 minutes)
- `testimonial-4.mp4` - Client success story #4 (1-2 minutes)
- `testimonial-5.mp4` - Client success story #5 (1-2 minutes)

### Optional Videos
- `intro-video.mp4` - RE.WIRE introduction (2-3 minutes)
- `training-highlight.mp4` - Training session footage (30-60 seconds)
- `coach-intro.mp4` - Coach introduction (1-2 minutes)

## Video Guidelines

### Technical Specifications

**Format:**
- Container: MP4 (H.264)
- Codec: H.264 (AVC)
- Audio: AAC, 128kbps stereo

**Resolution & Bitrate:**
- **720p (recommended)**: 1280×720, 2-4 Mbps
- **1080p**: 1920×1080, 4-8 Mbps (only if necessary)

**Frame Rate:**
- 24-30 fps (higher frame rates unnecessary for testimonials)

**Aspect Ratio:**
- 16:9 (landscape) for desktop viewing
- 9:16 (vertical) optional for mobile-first content

**Target File Size:**
- 1-minute video: 15-30 MB
- 2-minute video: 30-60 MB

### Content Guidelines

**Testimonial Structure:**
1. **Opening** (5-10 seconds)
   - Name, age, occupation
   - "Before" state

2. **Challenge** (20-30 seconds)
   - What was the problem?
   - Why previous attempts failed
   - Internal and external struggles

3. **Solution** (30-45 seconds)
   - How RE.WIRE helped
   - Specific program elements
   - Support and coaching

4. **Results** (30-45 seconds)
   - Specific metrics (weight, strength, energy)
   - Life improvements beyond physical
   - Key learnings

5. **Recommendation** (10-15 seconds)
   - Would you recommend RE.WIRE?
   - Who is this program for?

### Recording Guidelines

**Equipment:**
- **Minimum**: iPhone 12 or newer, good lighting
- **Recommended**: DSLR or mirrorless camera, external microphone
- **Professional**: Hire videographer for consistency

**Setup:**
- **Lighting**: Soft, natural light or 3-point lighting setup
- **Background**: Clean, minimal distractions, on-brand colors
- **Audio**: Quiet environment, use external mic or lavalier
- **Framing**: Medium close-up, subject slightly off-center

**Tips:**
- Have client speak directly to camera (as if talking to a friend)
- Encourage authentic emotion, not scripted delivery
- Record multiple takes, use best moments
- Keep sentences short and clear
- Show B-roll of training if possible

## Video Optimization

### Compression Tools

**HandBrake (Free, Open Source):**
```bash
# Install HandBrake CLI
brew install handbrake  # macOS
sudo apt install handbrake-cli  # Linux

# Optimize video
HandBrakeCLI -i input.mov -o output.mp4 --preset="Web" --quality=23
```

**FFmpeg (Advanced):**
```bash
# Install FFmpeg
brew install ffmpeg  # macOS
sudo apt install ffmpeg  # Linux

# Compress video for web
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k output.mp4

# Create WebM version (alternative format)
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus output.webm
```

### Online Tools
- [Clipchamp](https://clipchamp.com/) - Browser-based video editor
- [Kapwing](https://kapwing.com/) - Online video compression
- [CloudConvert](https://cloudconvert.com/) - Format conversion

## Video Player Implementation

### HTML5 Video with Poster
```html
<video controls poster="/images/testimonial-thumb-1.jpg" width="560" height="315">
    <source src="/videos/testimonial-1.mp4" type="video/mp4">
    <source src="/videos/testimonial-1.webm" type="video/webm">
    Je browser ondersteunt geen video tag.
</video>
```

### YouTube Embedding (Alternative)
If file sizes are too large, consider hosting on YouTube:

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Client Testimonial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy">
</iframe>
```

**Benefits of YouTube:**
- Free hosting and bandwidth
- Automatic adaptive streaming
- Built-in analytics
- Mobile optimization

**Drawbacks:**
- Less control over player appearance
- YouTube branding and suggested videos
- Requires internet connection

## Accessibility

### Captions & Subtitles
All videos should include Dutch captions:

1. **Auto-generate**: Use YouTube, Rev.com, or Descript
2. **Manual correction**: Always review and correct auto-generated captions
3. **VTT format**: WebVTT for HTML5 video

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track kind="captions" label="Nederlands" srclang="nl" src="captions.vtt" default>
</video>
```

### Transcripts
Provide full text transcript below or alongside video for:
- Accessibility (screen readers)
- SEO benefits
- User preference (some prefer reading)

## Video Hosting Alternatives

If self-hosting videos causes performance issues:

1. **Vimeo** ($7/month for 250 GB)
   - Professional, no ads
   - Customizable player
   - Analytics

2. **YouTube** (Free)
   - Unlimited storage
   - Automatic optimization
   - Wide reach

3. **Cloudflare Stream** ($1 per 1,000 minutes)
   - Optimized delivery
   - Built-in analytics
   - Adaptive bitrate

## Legal Considerations

### Client Consent
- Written consent required for all testimonial videos
- Specify usage: website, social media, advertising
- Allow clients to withdraw consent
- Store consent forms securely

### Music & Sound
- Use royalty-free music or no music
- Sources: Epidemic Sound, Artlist, YouTube Audio Library
- Credit composers as required

### GDPR Compliance
- Testimonial videos are personal data
- Document consent and usage
- Allow data deletion requests
