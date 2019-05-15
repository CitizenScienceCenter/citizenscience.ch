#FROM rastasheep/alpine-node-chromium AS build

FROM node:10-alpine AS build
WORKDIR /app
# Installs latest Chromium (72) package.
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge=72.0.3626.121-r0 \
      nss@edge \
      freetype@edge \
      harfbuzz@edge \
      ttf-freefont@edge


# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Puppeteer v1.11.0 works with Chromium 72.
RUN yarn add puppeteer@1.11.0

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
USER pptruser

WORKDIR /app
COPY . .
USER root
RUN chown -R pptruser:pptruser /app
USER pptruser
RUN npm install
RUN npm run build

FROM nginx:stable

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

