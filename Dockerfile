FROM node:22.11.0-alpine3.19

WORKDIR /app

RUN apk update && apk upgrade && npm install -g pnpm

CMD [ "pnpm", "dev" ]
