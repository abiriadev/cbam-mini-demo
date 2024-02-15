FROM node:21.5-alpine3.19 AS builder

WORKDIR /app

RUN corepack enable

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM nginx:1.25.3-alpine-slim AS runner

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html
