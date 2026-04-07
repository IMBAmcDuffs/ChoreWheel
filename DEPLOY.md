# DEPLOY.md

## Project Structure

```
ChoreWheel/
├── index.html          # Main landing page
├── styles.css          # Mobile-first CSS
├── script.js           # Vanilla JavaScript
├── README.md           # Project documentation
├── DEPLOY.md           # This file
└── package.json        # Node.js dependencies
```

## Prerequisites

- Node.js 18+ (for `serve` CLI)
- Git
- A code editor (optional)

## Install Commands

```bash
npm install
```

## Build Commands

```bash
npm run build
```

## Run Commands

```bash
npm start
```

## Ports

- Default: `3000`
- Custom: `npm start -- -p <PORT>`

## Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

## Deployment Options

- **GitHub Pages:** Enable GitHub Pages in repository settings.
- **Netlify:** Connect repository to Netlify.
- **Vercel:** Import repository to Vercel.
- **Static Hosting:** Any static file server (e.g., `npx serve`).