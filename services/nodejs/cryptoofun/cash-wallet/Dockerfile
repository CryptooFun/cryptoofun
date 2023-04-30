# -- Stage: builder --
FROM node:18.16-bullseye-slim@sha256:09714f3334c1cda4ffac832880b57fc9c72253dd365ce7fa3ff1d1705aa9435a AS builder

WORKDIR /app
RUN npm install -g turbo

# ! Assumes Docker context uses the monorepo's root
COPY . .

RUN turbo prune --scope=cash-wallet --docker


# -- Stage: installer --
FROM node:18.16-bullseye-slim@sha256:09714f3334c1cda4ffac832880b57fc9c72253dd365ce7fa3ff1d1705aa9435a AS installer
ENV NODE_ENV production

WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json .
RUN npm install

COPY --from=builder /app/out/full/ .
RUN npm run prisma:gen -w cash-wallet


# -- Stage: runner --
FROM node:18.16-bullseye-slim@sha256:09714f3334c1cda4ffac832880b57fc9c72253dd365ce7fa3ff1d1705aa9435a AS runner
RUN apt-get update
RUN apt-get install -y --no-install-recommends dumb-init
ENV NODE_ENV production
ENV PORT 7370
ENV GRPC_SERVER_PORT 57370
ENV DATABASE_URL ''

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressjs
USER expressjs

COPY --from=installer --chown=expressjs:nodejs /app .

EXPOSE 7370/tcp
EXPOSE 57370/tcp

CMD ["dumb-init", "npm", "run", "start", "-w", "cash-wallet"]
