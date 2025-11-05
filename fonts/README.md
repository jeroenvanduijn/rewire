# Fonts Directory

Place the following font files in this directory:

## Required Fonts

1. **Sharp Grotesk Bold** - Display typography
   - Filename: `sharp-grotesk-bold.woff2`
   - Format: WOFF2
   - Weight: 700 (Bold)
   - License: Purchase from [Sharp Type](https://sharptype.co/typefaces/sharp-grotesk/)
   - Approximate cost: €200 for web license

2. **Akkurat Pro Regular** - Body typography
   - Filename: `akkurat-pro-regular.woff2`
   - Format: WOFF2
   - Weight: 400 (Regular)
   - License: Purchase from [Lineto](https://lineto.com/typefaces/akkurat)

3. **Akkurat Pro Bold** - Bold body typography
   - Filename: `akkurat-pro-bold.woff2`
   - Format: WOFF2
   - Weight: 700 (Bold)
   - License: Same as above

## Font Optimization

All fonts should be:
- WOFF2 format only (best compression)
- Subsetted to include only necessary characters (60-80% size reduction)
- Optimized for web delivery

## Font Subsetting

Use a tool like [glyphhanger](https://github.com/zachleat/glyphhanger) to create subsets:

```bash
# Install glyphhanger
npm install -g glyphhanger

# Create subset with Latin characters only
glyphhanger --subset=font.ttf --latin --formats=woff2
```

## Alternative Fonts

If Sharp Grotesk and Akkurat Pro are not available, consider these alternatives:

**Display Typography Alternatives:**
- Helvetica Neue Condensed Bold
- Arial Narrow Bold
- Impact (free, but less refined)

**Body Typography Alternatives:**
- System fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI'
- Inter (free, modern)
- Roboto (free, Google Fonts)

**Note:** The brutalist design relies heavily on Sharp Grotesk's horizontal compression effect. Alternatives may require CSS adjustments.
