# Stage 1: build the static site
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable
COPY . .
RUN yarn build

# Stage 2: serve it with nginx
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html
EXPOSE 80
