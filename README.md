# Medicína Maľovania - Website

Modern one-page website for the Medicína Maľovania workshop (18.–19.10., Jasmín-Beluša) - pilotná dvojdňová tvorivá dielňa.

## Features

- **Modern Design**: Clean, minimalist design with soft natural colors
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Slovak Language**: Complete content in Slovak
- **Interactive Form**: Registration form with validation
- **Smooth Animations**: Subtle animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **Hero Section** - Event name, tagline, date/location, CTA button
2. **Introduction** - Description of Medicína Maľovania experience
3. **Who It's For** - Target audience with icons
4. **What You'll Experience** - Activities and experiences
5. **Facilitators** - Team bios with placeholder images
6. **Investment** - Pricing and what's included
7. **Call to Action** - Registration form
8. **Contact** - Footer with contact info and social links

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Form handling and interactions
- **Node.js + Express** - Simple server for form handling
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## Color Palette

- Primary: `#8B7355` (Brown)
- Secondary: `#A4B494` (Light Green)
- Accent: `#E8DCC6` (Beige)
- Light Background: `#F5F2ED`
- Text: `#3A3A3A` / `#6B6B6B`

## Local Development

1. Clone or download the files
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000`

### Alternative (Static Only)
If you don't need the form functionality, you can also:
- Open `index.html` directly in a web browser
- Or use any static server like `python3 -m http.server 8000`

## Deployment

This is a static website ready for deployment to:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Any static hosting service

### Netlify Deployment

1. Drag and drop the project folder to Netlify
2. Or connect your Git repository
3. No build configuration needed - it's a static site

## Customization

### Images
Replace placeholder images with actual photos:
- Hero background: Update the `background-image` URL in `styles.css`
- Facilitator photos: Replace placeholder URLs in `index.html`

### Content
- Update facilitator names and bios in `index.html`
- Modify contact information in the footer
- Add actual social media links

### Styling
- Colors can be modified in the CSS `:root` variables
- Typography settings in the base styles
- Responsive breakpoints in media queries

## Form Handling

The registration form currently shows a confirmation message. To make it functional:

1. Add a backend service (e.g., Netlify Forms, Formspree, or custom API)
2. Update the form submission handler in `script.js`
3. Configure email notifications for new registrations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images (using placeholder services)
- Minimal JavaScript
- CSS optimized for fast loading
- Font loading optimization

## License

MIT License - Feel free to modify and use for your workshops.
