# ChoreWheel Deployment Guide

## Project Structure

```
chorewheel/
├── app/
│   ├── page.tsx              # Main page with chore wheel
│   ├── layout.tsx            # Root layout
│   └── api/                  # API routes (if needed)
├── components/
│   ├── ChoreWheel.tsx        # Chore wheel component
│   └── ...                   # Other UI components
├── lib/
│   └── rotation-engine.ts    # Rotation algorithm
├── prisma/
│   └── schema.prisma         # Database schema
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── DEPLOY.md
```

## Prerequisites

- Node.js 20+ 
- npm or yarn
- SQLite (included with Next.js)

## Install Commands

```bash
npm install
npm run db:generate
npm run db:push
```

## Build Commands

```bash
npm run build
```

## Run Commands

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## Ports

- Development: Port 3000
- Production: Port 3000

## Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Environment Variables

Create a `.env` file with:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Deployment Steps

1. Build the application:
   ```bash
   npm run build
   ```

2. (Optional) Create Docker image:
   ```bash
   docker build -t chorewheel .
   docker run -p 3000:3000 chorewheel
   ```

3. Deploy to any hosting platform (Vercel, Netlify, etc.)
