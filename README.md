# ChoreWheel

Fair chores for every roommate. A mobile-first landing page for roommate chore coordination.

## Overview

ChoreWheel is a lightweight, fair-rotation solution designed specifically for small households and prospective roommates. It eliminates the "who did the dishes?" anxiety with a mobile-first experience that integrates seamlessly into daily life.

## Features

- **Automatic Fair Rotation**: Equitable chore distribution without complexity
- **Accountability Tracking**: Clear ownership of tasks
- **Zero Setup Required**: Start immediately without account creation

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ChoreWheel
   ```

2. Install dependencies (optional, for serving):
   ```bash
   npm install
   ```

3. Start the local server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port shown in the terminal).

Alternatively, you can simply open `index.html` directly in your browser without a server.

## Deployment Options

- **GitHub Pages**: Push to the `main` branch and enable GitHub Pages in repository settings.
- **Netlify**: Drag and drop the project folder to Netlify.
- **Vercel**: Connect your GitHub repository to Vercel for automatic deployment.

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Mobile-first responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No external dependencies or frameworks

## Accessibility

This project follows WCAG 2.1 AA guidelines:

- All text meets 4.5:1 contrast ratio
- Semantic HTML with proper heading hierarchy
- Focus states visible on interactive elements
- Alt text on all SVG icons
- Minimum 44x44px touch targets for mobile

## Testing

To validate the landing page locally:

1. Start the server: `npm start`
2. Open the page in your browser
3. Test at different breakpoints:
   - Mobile: 320px
   - Tablet: 768px
   - Desktop: 1024px
4. Check accessibility:
   - Use browser DevTools to verify focus states
   - Test keyboard navigation with Tab key
   - Verify contrast ratios using browser extensions

## License

MIT

## Contributing

This is a greenfield scaffold. Contributions are welcome! Please open an issue or PR for any improvements.
