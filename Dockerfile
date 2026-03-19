#
# Multi-stage build:
# - `development` stage includes dev dependencies (nodemon) and runs the dev server.
# - `production` stage installs only runtime deps and runs the production server.
#

FROM node:22-alpine AS development
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY src src
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

FROM node:22-alpine AS prod-dependencies
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production


FROM gcr.io/distroless/nodejs22 AS production

WORKDIR /app

# Copy only runtime source (no need to copy docs/tests).
COPY --from=prod-dependencies /app/node_modules node_modules
COPY src src
ENV NODE_ENV=production
#ENTRYPOINT ["node"]
CMD ["src/index.js"]

