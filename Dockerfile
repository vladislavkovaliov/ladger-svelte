# ---------- build ----------
FROM node:20-alpine AS builder

ARG BUILD_TIME
ARG CACHEBUST=1

LABEL build_time=$BUILD_TIME

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# ---------- runtime ----------

# serve
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
