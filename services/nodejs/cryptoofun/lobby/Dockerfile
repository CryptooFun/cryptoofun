# -- Stage: base --
FROM node:18.16-bullseye-slim@sha256:09714f3334c1cda4ffac832880b57fc9c72253dd365ce7fa3ff1d1705aa9435a AS base


# -- Stage: builder --
FROM base AS builder

WORKDIR /app
RUN npm install -g turbo

# ! Assumes Docker context uses the monorepo's root
COPY . .

RUN turbo prune --scope=lobby --docker


# -- Stage: installer --
FROM base AS installer
ENV NODE_ENV production

WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json .
RUN npm install

COPY --from=builder /app/out/full/ .
RUN npm run prisma:gen -w lobby


# -- Stage: runner --
FROM base AS runner
RUN apt-get update
RUN apt-get install -y --no-install-recommends dumb-init
ENV NODE_ENV production
ENV PORT 7373
ENV GRPC_CASH_WALLET_SV ''
ENV DATABASE_URL ''
ENV REDIS_HOST ''
ENV REDIS_PORT ''
ENV REDIS_PWD ''

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressjs
USER expressjs

COPY --from=installer --chown=expressjs:nodejs /app .

EXPOSE 7373/tcp

CMD ["dumb-init", "npm", "run", "start", "-w", "lobby"]
