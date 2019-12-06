FROM node:10.13.0-alpine as build
WORKDIR /usr/src/react_app

RUN apk add yarn

COPY frontend/package.json frontend/yarn.lock ./

ARG NODE_ENV=production
RUN yarn --silent
ENV PATH /usr/src/app/react_app/node_modules/.bin:$PATH

COPY frontend/. /usr/src/react_app/

RUN yarn run build --production

FROM node:10.13.0-alpine
WORKDIR /my_app

ENV NODE_ENV=production

RUN apk add yarn

COPY --from=build /usr/src/react_app/build /my_app/frontend/build/

COPY package.json yarn.lock ./
RUN yarn --prod --silent

COPY ./ /my_app/

EXPOSE 5000

CMD ["yarn", "run", "start"]

