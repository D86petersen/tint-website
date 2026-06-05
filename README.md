# NoGlareZoneCA Auto Tint Website

Production-ready static website for a window tinting company, styled around a black/red/silver automotive theme.

## Project Contents

- `index.html`: Main landing page with services, packages, process, testimonials, FAQ, and contact form.
- `styles.css`: Responsive styling system and motion effects.
- `script.js`: Mobile nav toggle, logo fallback, and reveal animation.
- `thank-you.html`: Contact form confirmation page.
- `404.html`: Custom not-found page.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`: SEO and PWA support files.
- `assets/logo-placeholder.svg`: Fallback if your logo file is missing.

## Important: Add Your Provided Logo

Place your uploaded logo image in this path:

`assets/noglarezoneca-logo.png`

The website automatically uses this file. If it is missing, it falls back to `assets/logo-placeholder.svg`.

## Run Locally

You can open `index.html` directly, but a local server is recommended.

### Option 1: VS Code Live Server

1. Install the Live Server extension.
2. Right-click `index.html` and choose **Open with Live Server**.

### Option 2: Python HTTP Server

If Python is installed:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Go Live (Netlify)

1. Create a GitHub repository and push this project.
2. Sign in to Netlify and click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Build settings for static site:
   - Build command: (leave empty)
   - Publish directory: `.`
5. Deploy site.
6. In Netlify Domain settings, connect your custom domain (for example `noglarezoneca.com`).
7. Update these values after domain is connected:
   - `index.html` canonical URL
   - Open Graph URL/image
   - `sitemap.xml` URL
   - `robots.txt` sitemap URL

## Go Live (Vercel)

1. Import the repository into Vercel.
2. Framework preset: **Other**.
3. Build command: none.
4. Output directory: `.`
5. Deploy and attach your custom domain in project settings.

## Production Checklist

- Replace placeholder phone number and email.
- Replace logo with final high-resolution PNG.
- Verify legal tint percentages for your state.
- Test contact form submissions in your hosting environment.
- Run Lighthouse and target 90+ for performance/accessibility/SEO.
