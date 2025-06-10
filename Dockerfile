# syntax=docker.io/docker/dockerfile:1.7-labs
FROM node:24-alpine AS builder

RUN npm install -g pnpm

WORKDIR /repo

RUN corepack enable pnpm

COPY --exclude=**/node_modules --parents **/package.json .npmrc pnpm-workspace.yaml pnpm-lock.yaml ./

RUN --mount=type=cache,target=/root/.local/share/pnpm pnpm install --frozen-lockfile

COPY --exclude=**/node_modules . .

RUN pnpm dev:styles

WORKDIR /repo/packages/react-components

RUN --mount=type=cache,target=/root/.local/share/pnpm pnpm install --frozen-lockfile

RUN pnpm build-storybook

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /repo/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /repo/packages/react-components/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
