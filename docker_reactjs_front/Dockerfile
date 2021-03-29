FROM node:14.16.0-alpine3.10

RUN apk update

RUN apk add busybox-extras 

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 6002

CMD [ "node", "index.js" ]