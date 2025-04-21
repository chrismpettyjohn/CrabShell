# CrabShell
Developed and designed by Chris P

## Prerequisites
1. Install Bun
```bash
curl -fsSL https://bun.sh/install | bash
```

## Installation
1. Clone the repository
```bash
git clone git@github.com:chrismpettyjohn/CrabShell.git
cd CrabShell
```

2. Install dependencies
```bash
bun install
```

3. Build from source
```bash
bun run build
```

## Development

### API 
1. Go to the api directory `cd ./apps/api`
2. Copy the `.env.example` and name it `.env`
3. Update `.env` with your database credentials
4. Run the API via `bun run dev`

### Admin UI
1. Go to the admin directory `cd ./apps/admin`
2. Copy the `.env.example` and name it `.env`
3. Update `.env` with the correct URLs
4. Run the UI via `bun run dev`

### Public UI
1. Go to the admin directory `cd ./apps/web`
2. Copy the `.env.example` and name it `.env`
3. Update `.env` with the correct URLs
4. Run the UI via `bun run dev`

## Project Structure

```
apps/
  ├── admin/        # SolidJS admin frontend
  ├── web/          # SolidJS public frontend
  └── api/          # NestJS backend
libs/
  └── client/       # Shared client library
```

## Available Commands

```bash
# Build commands
bun run build         # Build all projects
bun run build:web     # Build SolidJS app
bun run build:api     # Build NestJS app
bun run build:client  # Build client library

# Development
bun run dev:admin     # Start SolidJS admin dev server
bun run dev:web       # Start SolidJS public dev server
bun run dev:api       # Start NestJS dev server

# Maintenance
bun run clean         # Clean all build artifacts
```

## Tech Stack

- Frontend: SolidJS
- Backend: NestJS
- Package Manager: Bun