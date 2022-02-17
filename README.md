# rtg-sample

Monorepo setup with npm workspaces

Build time (125 products):
- Gatsby: 1m 17s
- NextJs: 11.3s

## Installation

```sh
  nvm install 16.14.0
  nvm use 16.14.0
  npm i
```

## Development

```sh
# starts API server
npm run start:server

# Next.js dev server
npm run dev:next

# Gatsby dev server
npm run dev:gatsby
```

## Build

```sh
# starts API server
npm run start:server

# Next.js build and production server
npm run build:next
npm run start:next

# Gatsby build and production server
npm run build:gatsby
npm run start:gatsby
```
