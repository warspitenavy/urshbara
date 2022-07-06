# build
FROM docker.io/library/node:16.15.1-alpine as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

# work
FROM docker.io/library/node:16.15.1-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app ../app

EXPOSE 3000

CMD ["yarn", "start"]