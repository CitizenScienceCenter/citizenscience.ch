FROM node:9.11 AS build

WORKDIR /app
COPY . .
RUN apt update
RUN cat config/packages_for_ssr.txt | xargs apt install -y
RUN npm install
RUN npm run build
RUN ls dist

FROM nginx:stable

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html
RUN ls

EXPOSE 80

