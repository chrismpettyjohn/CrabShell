# CrabShell

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

Start the development servers:

```bash
# SolidJS web app
bun run dev:web

# NestJS API
bun run dev:api
```

## Project Structure

```
apps/
  ├── web/          # SolidJS frontend
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
bun run dev:web       # Start SolidJS dev server
bun run dev:api       # Start NestJS dev server

# Maintenance
bun run clean         # Clean all build artifacts
```

## Tech Stack

- Frontend: SolidJS
- Backend: NestJS
- Package Manager: Bun
- Monorepo Management: Bun Workspaces