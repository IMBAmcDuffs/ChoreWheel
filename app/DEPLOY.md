# ChoreWheel - Deployment Documentation

## Project Structure

```
chorewheel/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   └── chores/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   ├── chore-list/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│   ├── components/
│   │   ├── ChoreCard.tsx
│   │   ├── ChoreForm.tsx
│   │   └── ChoreFilter.tsx
│   └── lib/
│       ├── prisma.ts
│       └── auth.ts
├── prisma/
│   └── schema.prisma
├── .env.example
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── DEPLOY.md
```

## Prerequisites

- Node.js 20+
- npm or yarn
- SQLite (included via Prisma)

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

- Development: http://localhost:3000
- Production: http://localhost:3000

## Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run db:generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```
