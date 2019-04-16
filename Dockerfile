FROM node:9.11 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

