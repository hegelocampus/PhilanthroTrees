FROM node:10.13.0-alpine
WORKDIR /usr/src/app

RUN apk add yarn

COPY frontend/package.json frontend/yarn.lock ./

RUN yarn --prod

COPY frontend/* .

RUN yarn run build --production \
  && yarn add -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]

