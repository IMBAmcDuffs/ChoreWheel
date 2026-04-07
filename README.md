# ChoreWheel

A mobile-first landing page for ChoreWheel, a roommate chore coordination app focused on fair task rotation and accountability.

## Overview

ChoreWheel addresses the inherent friction of shared living by providing a lightweight, fair-rotation solution designed specifically for small households and prospective roommates. The landing page serves as the entry point to the project, driving early interest and community engagement.

## Features

- **Mobile-First Design**: Optimized for smartphone viewing with responsive breakpoints
- **Lightweight Stack**: Plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools
- **Clear CTA**: Single "Follow the Project" button directing users to GitHub
- **Accessibility Compliant**: WCAG 2.1 AA compliant with proper contrast ratios and keyboard navigation
- **Zero Dependencies**: No external libraries or backend requirements

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for serving via `npx serve`)
- Git (for cloning the repository)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/IMBAmcDuffs/ChoreWheel.git
   cd ChoreWheel
   ```

2. **Open in browser**:
   Simply open `index.html` in your web browser. No build step required!

   ```bash
   # On macOS/Linux
   open index.html
   
   # On Windows
   start index.html
   ```

3. **Or use a static file server**:
   ```bash
   # Using Python (built-in)
   python -m http.server 8000
   
   # Using Node.js serve
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

   Then visit `http://localhost:8000` in your browser.

## Project Structure

```
ChoreWheel/
├── index.html          # Main landing page
├── styles.css          # Mobile-first CSS styles
├── script.js           # Vanilla JavaScript interactions
├── README.md           # This file
└── DEPLOY.md           # Deployment documentation
```

## Tech Stack

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Mobile-first responsive design with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript for micro-interactions
- **SVG**: Inline SVG icons for lightweight, scalable graphics

## Deployment

This project is designed for static hosting. Recommended platforms:

- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Simple drag-and-drop deployment
- **Vercel**: Automatic deployment from Git
- **Cloudflare Pages**: Edge-network hosting

### Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings
2. Select "main" branch and root folder
3. Your site will be live at `https://username.github.io/ChoreWheel`

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Or drag-and-drop the project folder

## Accessibility

This project follows WCAG 2.1 AA guidelines:

- **Contrast Ratios**: All text meets 4.5:1 minimum contrast
- **Keyboard Navigation**: All interactive elements focusable via Tab
- **Screen Reader Support**: Semantic HTML with proper ARIA labels
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests via the [GitHub repository](https://github.com/IMBAmcDuffs/ChoreWheel).

## Support

For questions or feedback, please open an issue on GitHub or contact the project maintainers.
