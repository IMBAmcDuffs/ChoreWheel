# ChoreWheel Deployment Guide

## Project Structure

```
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── page.tsx
├── components/
│   ├── ChoreCard.tsx
│   ├── DashboardStats.tsx
│   ├── FairnessChart.tsx
│   └── OverdueAlerts.tsx
├── prisma/
│   └── schema.prisma
├── public/
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── DEPLOY.md
```

## Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional)
- SQLite (via Prisma)

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
npm run dev
```

## Ports

- Development: http://localhost:3000
- Production: Configured in next.config.js

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

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Deployment Steps

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Run migrations: `npx prisma migrate dev`
4. Start development: `npm run dev`
5. For production: `npm start`

## Docker Deployment

```bash
docker build -t chorewheel .
docker run -p 3000:3000 chorewheel
```
