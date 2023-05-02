FROM node:18.16-bullseye-slim@sha256:09714f3334c1cda4ffac832880b57fc9c72253dd365ce7fa3ff1d1705aa9435a AS base

# -- Stage: deps --
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install


# -- Stage: builder --
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


# -- Stage: runner --
FROM base AS runner
RUN apt-get update
RUN apt-get install --no-install-recommends -y dumb-init

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV API_ROOT_DOMAIN ''
ENV AUTH0_BASE_URL ''
ENV AUTH0_ISSUER_BASE_URL ''
# List env secrets for documentation purposes
ENV AUTH0_SECRET ''
ENV AUTH0_CLIENT_ID ''
ENV AUTH0_CLIENT_SECRET ''

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000/tcp

CMD ["dumb-init", "node", "server.js"]
