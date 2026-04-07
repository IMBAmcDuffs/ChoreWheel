# ChoreWheel Deployment Guide

## Project Structure

```
ChoreWheel/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── ...
├── src/
│   ├── components/         # React components
│   │   └── MobileMenu.tsx  # Mobile navigation menu
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── _templates/             # Design scaffold from Stitch
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v8.0 or higher (comes with Node.js)
- **Git**: v2.0 or higher (for cloning the repository)

## Install Commands

```bash
# Clone the repository
git clone https://github.com/IMBAmcDuffs/ChoreWheel.git
cd ChoreWheel

# Install dependencies
npm install
```

## Build Commands

```bash
# Build the application for production
npm run build
```

## Run Commands

```bash
# Development mode with hot reload
npm run dev

# Production mode (after building)
npm start

# Run linting
npm run lint

# Run tests
npm test
```

## Ports

- **Development Server**: Port 3000 (configurable via `PORT` environment variable)
- **Production Server**: Port 3000 (configurable via `PORT` environment variable)

## Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# No required environment variables for basic functionality
```

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
```

### Build and Run Docker Container

```bash
# Build the Docker image
docker build -t chorewheel .

# Run the container
docker run -p 3000:3000 chorewheel
```

## Verification

After installation and build, verify the setup:

```bash
# Check that the build was successful
ls -la .next/

# Run linting to check for code issues
npm run lint

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Troubleshooting

### Build fails

```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build
```

### Port already in use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```
