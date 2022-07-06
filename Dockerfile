# build
FROM docker.io/library/node:16.15.1-alpine as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

# work
FROM gcr.io/distroless/nodejs:16

WORKDIR /usr/src/app

COPY --from=build /usr/src/app ./

EXPOSE 3000

CMD [".output/server/index.mjs"]