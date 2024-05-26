# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/out ./out
COPY --from=builder /app/node_modules ./node_modules

RUN npm install -g serve

EXPOSE 3000

ENV NODE_ENV production

# Start the Next.js application
CMD ["serve", "-s", "out", "-l", "3000"]
