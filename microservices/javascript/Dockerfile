FROM node:19-alpine

EXPOSE 5552

COPY . /app

WORKDIR /app

RUN npm ci --only=production

ENTRYPOINT node index.js
