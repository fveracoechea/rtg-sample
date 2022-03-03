# rtg-sample

Monorepo setup with npm workspaces

Build time (236 products):

- Gatsby: 1m 17s
- NextJs: 22s

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

## Generating GraphQL types:

### 1. Generate GQL types from service JSON data:

Using: https://github.com/walmartlabs/json-to-simple-graphql-schema

```sh
# Product details
curl https://s3.amazonaws.com/dev-roomstogo-products/32634796.json | npx @walmartlabs/json-to-simple-graphql-schema --baseType Product > nextjs/src/apollo/types/Product.gql
# Stores info
curl https://stores.rtg-dev.com/v1/stores/1201 | npx @walmartlabs/json-to-simple-graphql-schema --baseType StoreInfo > nextjs/src/apollo/types/StoreInfo.gql
```

### 2. Graphql-codegen:

```sh
# if needed
npx graphql-codegen init
```

the config file should to look like this:

```yml
# codegen.yml
overwrite: true
schema: "http://localhost:3001/api/graphql"
documents: "nextjs/src/apollo/queries/*.ts"
generates:
  nextjs/src/apollo/types/generated.tsx:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
      - "typescript-resolvers"
    config:
      withHooks: true
```

```sh
npm i @graphql-codegen/cli @graphql-codegen/typescript-resolvers @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D
```

Start Next server, then run:

```sh
npm run codegen
```
