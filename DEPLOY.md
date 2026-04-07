# ChoreWheel Deployment Guide

This document describes how to set up, build, and deploy the ChoreWheel landing page.

## Project Structure

```
ChoreWheel/
├── index.html          # Main landing page
├── styles.css          # Mobile-first CSS styles
├── script.js           # Vanilla JavaScript interactions
├── README.md           # Project documentation
├── DEPLOY.md           # This deployment guide
└── package.json        # Project manifest (optional for static site)
```

## Prerequisites

- **Node.js 18+** (optional, for `npx serve`)
- **Python 3.8+** (optional, for `python -m http.server`)
- **Git** (for cloning the repository)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

## Install Commands

This is a static site with no dependencies. However, if you want to use `npx serve`:

```bash
# Install serve globally (optional)
npm install -g serve

# Or use npx without global install
npx serve
```

## Build Commands

No build step is required for this static site. The files are ready to serve as-is.

```bash
# No build command needed
# Files are ready to serve immediately
```

## Run Commands

### Option 1: Direct File Access (Simplest)

```bash
# Open index.html directly in your browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Option 2: Python HTTP Server

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` in your browser.

### Option 3: Node.js Serve

```bash
npx serve
```

Visit `http://localhost:3000` in your browser.

### Option 4: PHP Built-in Server

```bash
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## Ports

- **Default**: Port 8000 (Python/PHP)
- **Serve**: Port 3000 (Node.js)
- **GitHub Pages**: Custom domain or `username.github.io`
- **Netlify**: Custom domain or Netlify subdomain

## Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t chorewheel .

# Run the container
docker run -p 8000:8000 chorewheel
```

### Docker Compose (Optional)

```yaml
version: '3.8'
services:
  chorewheel:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/app
```

### Dockerfile

```dockerfile
FROM nginx:alpine

# Copy static files to nginx web root
COPY . /usr/share/nginx/html

# Expose port 8000
EXPOSE 8000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

## Environment Variables

No environment variables are required for this static site.

## Deployment Platforms

### GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" section
3. Select "main" branch and "/ (root)" folder
4. Click "Save"
5. Your site will be live at `https://username.github.io/ChoreWheel`

### Netlify

1. Sign in to Netlify
2. Click "Add new site" -> "Import an existing project"
3. Connect your GitHub account
4. Select the ChoreWheel repository
5. Netlify will automatically deploy

### Vercel

1. Sign in to Vercel
2. Import your GitHub repository
3. Vercel will detect it's a static site
4. Deploy automatically

### Cloudflare Pages

1. Sign in to Cloudflare
2. Go to Pages
3. Create a project and connect GitHub
4. Select the ChoreWheel repository
5. Deploy automatically

## Performance

- **Total Size**: Under 50KB (HTML + CSS + JS)
- **Lighthouse Score**: Target Performance 90+
- **No External Requests**: Only favicon (optional)
- **System Fonts**: No external font requests

## Security

- **No Authentication**: Static site, no auth required
- **No Backend**: No server-side code to secure
- **HTTPS**: Recommended for production (provided by hosting platform)

## Monitoring

- **GitHub Pages**: Built-in analytics (limited)
- **Netlify**: Built-in analytics and logs
- **Vercel**: Built-in analytics and logs
- **Cloudflare**: Built-in analytics and logs

## Troubleshooting

### Site not loading

- Check browser console for errors
- Verify all files are present in the repository
- Ensure no typos in file paths

### Styles not applying

- Clear browser cache
- Check `styles.css` is linked in `index.html`
- Verify no syntax errors in CSS

### JavaScript not working

- Check browser console for errors
- Verify `script.js` is linked in `index.html`
- Ensure no syntax errors in JavaScript

## Next Steps

1. **Customize Content**: Update text, links, and branding
2. **Add Analytics**: Integrate Google Analytics or similar (optional)
3. **Deploy**: Push to hosting platform of choice
4. **Monitor**: Track visitors and engagement

## Support

For deployment issues or questions, please:

1. Check the [README.md](README.md) for local setup
2. Review the [DEPLOY.md](DEPLOY.md) for deployment options
3. Open an issue on GitHub for technical support

---

*Last updated: 2024*
