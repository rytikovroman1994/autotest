FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache --virtual .build-deps curl python make g++ git

COPY package*.json /usr/src/app/

RUN java -jar selenium-server-standalone-3.14.0.jar -role node -host 127.0.0.1 -port 5555 

# install all dependencies (with devDeps)
RUN npm ci

# copy application code into container
COPY . /usr/src/app

ENV NODE_ENV=production \
  LOG_LEVEL=error

CMD [ "npm", "test" ]
