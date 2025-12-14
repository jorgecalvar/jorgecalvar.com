# jorgecalvar.com

A personal website with a terminal/man-pages aesthetic, built with React, TypeScript, and Vite.

## Features

- 🖥️ Terminal-inspired interface with interactive command system
- 📖 Man pages style documentation for each section
- ✨ Visually impactful design with neon accents and smooth animations
- 📱 Responsive design for all devices
- 🚀 Deployed on GitHub Pages

## Sections

- **About**: Brief overview and introduction
- **Work**: Professional experience (Datadog + internships)
- **Hobbies**: Sports and interests
- **Social**: Links to Instagram, LinkedIn, and X (Twitter)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Setup

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to `main` branch to trigger deployment

### Custom Domain Setup

The project is configured for a custom domain (base path is set to `/` in `vite.config.ts`).

To use your custom domain:

1. **Configure DNS**: Add a CNAME record pointing to `[your-username].github.io`
   - Or use A records pointing to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)

2. **Add CNAME file** (optional but recommended): Create a `public/CNAME` file with your domain:
   ```
   jorgecalvar.com
   ```

3. **GitHub Pages Settings**: 
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS" (after DNS propagates)

4. The site will be available at your custom domain once DNS propagates (can take up to 24-48 hours)

## Customization

Update the content in:
- `src/components/About.tsx` - Personal information
- `src/components/Work.tsx` - Work history
- `src/components/Hobbies.tsx` - Hobbies and interests
- `src/components/Social.tsx` - Social media links

Styling can be customized in:
- `src/index.css` - Global styles and CSS variables
- `src/App.css` - Main app and terminal styles
- `src/components/Section.css` - Section component styles
