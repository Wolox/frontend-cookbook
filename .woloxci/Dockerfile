FROM node:10.11.0-alpine

WORKDIR /home/node

COPY ./app/package.json .

RUN npm install
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
