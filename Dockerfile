FROM node:20-alpine AS base

ENV NPM_REGISTRY http://mirrors.cloud.tencent.com/npm/
ENV PNPM_REGISTRY https://registry.npmmirror.com

RUN npm config set registry $NPM_REGISTRY
RUN npm install -g pnpm
RUN pnpm config set registry $PNPM_REGISTRY


FROM base AS deps

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile


FROM base AS builder

WORKDIR /app

COPY . ./

RUN rm -rf ./node_modules

COPY --from=deps /app/node_modules ./node_modules

RUN pnpm run build


FROM base AS runner

WORKDIR /app

COPY --from=deps /app/package.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["pnpm","start"]
