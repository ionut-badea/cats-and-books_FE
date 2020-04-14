FROM node:lts-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
