# SayDump

SayDump is a fullstack monorepo web application designed with a frontend built on React, TypeScript, Vite, Tailwind CSS, and Zustand, and a backend powered by Node.js, Express, TypeScript, and Prisma with a PostgreSQL database.

## Folder Structure

```txt
saydump/
├── client/          # Frontend React + TypeScript application
├── server/          # Backend Node.js + Express API
├── docs/            # Project documentation and specifications
├── .gitignore       # Git ignore file
├── README.md        # Main README instructions
├── package.json     # Root npm script runner
└── docker-compose.yml # Local PostgreSQL database environment
```

## Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) (optional, for local PostgreSQL)

### 2. Environment Setup

Configure environment files by copying the examples:

```bash
# In client/
cp .env.example .env

# In server/
cp .env.example .env
```

### 3. Database Startup (Optional)
If you wish to spin up a PostgreSQL instance via Docker:
```bash
docker-compose up -d
```

### 4. Install Dependencies
Install all package dependencies for the root, client, and server workspaces:
```bash
npm run install:all
```

### 5. Running the Application in Development Mode
To run both the backend Express server and the frontend Vite server concurrently:
```bash
npm run dev
```

- Frontend client runs on: [http://localhost:5173](http://localhost:5173)
- Backend API runs on: [http://localhost:5000](http://localhost:5000)
