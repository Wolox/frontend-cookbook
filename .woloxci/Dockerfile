FROM node:10.15.3-alpine

WORKDIR /home/node

COPY ./app/package.json .

ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
