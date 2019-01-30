FROM node:8

RUN npm i npm@latest -g

COPY . .

RUN npm i

ENTRYPOINT [ "npm", "test" ]
