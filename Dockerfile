# ---------- Build ----------
FROM node:25-alpine AS build

WORKDIR /app

# Install dependencies from the lockfile for reproducible builds.
COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .

# Override at build time for sub-path hosting, e.g. --build-arg BASE_HREF=/portfolio/
ARG BASE_HREF=/
RUN npm run build -- --configuration production --base-href "${BASE_HREF}"

# ---------- Runtime ----------
FROM nginx:1.27-alpine AS runtime

RUN apk add --no-cache curl

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html

# Run as the unprivileged nginx user on a non-root port.
RUN touch /var/run/nginx.pid \
  && chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /usr/share/nginx/html

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -fsS http://localhost:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
