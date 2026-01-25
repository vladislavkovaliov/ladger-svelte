# ---------- build ----------
FROM node:20-alpine AS builder

ARG BUILD_TIME

LABEL build_time=$BUILD_TIME

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# ---------- runtime ----------

FROM node:20-alpine

ARG BUILD_TIME

LABEL build_time=$BUILD_TIME

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "node", "build" ]
